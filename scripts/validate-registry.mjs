// Validates every registry course entry and checks that index.json is in sync.
// Dependency-free; run in CI on pull requests and before build:
//
//   npm run registry:validate
//
// Exits non-zero and prints every problem found.
import { readFileSync, existsSync } from "node:fs";
import {
  readCourseEntries,
  buildIndex,
  serializeIndex,
  indexPath,
} from "./build-registry.mjs";

const SEMVER = /^(0|[1-9]\d*)\.(0|[1-9]\d*)\.(0|[1-9]\d*)(?:-[0-9A-Za-z.]+)?$/;
const DATE = /^\d{4}-\d{2}-\d{2}$/;
const ID = /^course_[a-z0-9_]+$/;
const REPO = /^https:\/\/github\.com\/[^/]+\/[^/]+\/?$/;
const HTTPS = /^https:\/\/\S+$/;

const errors = [];
const fail = (where, msg) => errors.push(`${where}: ${msg}`);

/** major.minor.patch only, prerelease ignored for ordering. */
function core(version) {
  return version.split("-")[0].split(".").map(Number);
}
function compareSemver(a, b) {
  const x = core(a);
  const y = core(b);
  for (let i = 0; i < 3; i++) {
    if (x[i] !== y[i]) return x[i] < y[i] ? -1 : 1;
  }
  return 0;
}

function validateEntry(file, c) {
  const at = (path) => `${file} ${path}`;

  const expectedFile = `${c.id}.json`;
  if (typeof c.id !== "string" || !ID.test(c.id)) {
    fail(at("id"), `must match ${ID}`);
  } else if (file !== expectedFile) {
    fail(file, `filename must equal the id: expected ${expectedFile}`);
  }

  for (const key of ["title", "description"]) {
    if (typeof c[key] !== "string" || c[key].length === 0) fail(at(key), "required non-empty string");
  }
  if (typeof c.repo !== "string" || !REPO.test(c.repo)) {
    fail(at("repo"), "must be a https://github.com/<owner>/<repo> URL");
  }
  for (const key of ["teaches", "from"]) {
    if (!Array.isArray(c[key]) || c[key].length === 0 || c[key].some((v) => typeof v !== "string")) {
      fail(at(key), "required non-empty array of language codes");
    }
  }
  if (c.tags !== undefined && (!Array.isArray(c.tags) || c.tags.some((v) => typeof v !== "string"))) {
    fail(at("tags"), "must be an array of strings");
  }

  if (!Array.isArray(c.releases) || c.releases.length === 0) {
    fail(at("releases"), "required non-empty array");
    return;
  }

  const seen = new Set();
  for (let i = 0; i < c.releases.length; i++) {
    const r = c.releases[i];
    const rat = at(`releases[${i}]`);
    if (typeof r.version !== "string" || !SEMVER.test(r.version)) {
      fail(`${rat}.version`, "must be semver x.y.z");
      continue;
    }
    if (seen.has(r.version)) fail(`${rat}.version`, `duplicate version ${r.version}`);
    seen.add(r.version);

    if (r.tag !== `v${r.version}`) fail(`${rat}.tag`, `must equal v${r.version}`);
    if (typeof r.releasedAt !== "string" || !DATE.test(r.releasedAt)) fail(`${rat}.releasedAt`, "must be YYYY-MM-DD");
    if (typeof r.formatVersion !== "string" || !r.formatVersion) fail(`${rat}.formatVersion`, "required string");
    if (typeof r.breaking !== "boolean") fail(`${rat}.breaking`, "required boolean");
    if (typeof r.source !== "string" || !HTTPS.test(r.source)) fail(`${rat}.source`, "required https URL");
    else if (!r.source.includes(`/${r.tag}.`)) fail(`${rat}.source`, `tarball URL should reference ${r.tag}`);
    if (typeof r.changelog !== "string" || !HTTPS.test(r.changelog)) fail(`${rat}.changelog`, "required https URL");
    if (r.notes !== undefined && typeof r.notes !== "string") fail(`${rat}.notes`, "must be a string");
  }

  // latest must be the highest version and must exist.
  const versions = c.releases.map((r) => r.version).filter((v) => SEMVER.test(v));
  const highest = [...versions].sort(compareSemver).at(-1);
  if (!SEMVER.test(c.latest ?? "")) fail(at("latest"), "must be semver x.y.z");
  else if (!versions.includes(c.latest)) fail(at("latest"), `${c.latest} is not present in releases`);
  else if (c.latest !== highest) fail(at("latest"), `must equal the highest version ${highest}`);

  // breaking must be true exactly when the major number increased.
  const ordered = [...c.releases]
    .filter((r) => SEMVER.test(r.version))
    .sort((a, b) => compareSemver(a.version, b.version));
  for (let i = 0; i < ordered.length; i++) {
    const r = ordered[i];
    const prev = ordered[i - 1];
    const majorJumped = prev ? core(r.version)[0] > core(prev.version)[0] : false;
    if (r.breaking !== majorJumped) {
      fail(
        at(`release ${r.version}`),
        majorJumped
          ? "major increased, so breaking must be true"
          : "no major increase, so breaking must be false",
      );
    }
  }
}

function main() {
  const entries = readCourseEntries();
  if (entries.length === 0) {
    console.log("registry: no course entries to validate");
    return;
  }

  const idToFile = new Map();
  for (const { file, entry } of entries) {
    validateEntry(file, entry);
    if (entry?.id) {
      if (idToFile.has(entry.id)) fail(file, `duplicate id ${entry.id} (also in ${idToFile.get(entry.id)})`);
      else idToFile.set(entry.id, file);
    }
  }

  // index.json must match a fresh build of the entries.
  const expected = serializeIndex(buildIndex(entries.map((e) => e.entry)));
  const actual = existsSync(indexPath) ? readFileSync(indexPath, "utf8") : "";
  if (actual !== expected) {
    fail("index.json", "out of date; run `npm run registry:build` and commit the result");
  }

  if (errors.length > 0) {
    console.error(`registry: ${errors.length} problem(s) found:\n` + errors.map((e) => `  - ${e}`).join("\n"));
    process.exit(1);
  }
  console.log(`registry: ${entries.length} course entry(ies) valid; index.json in sync`);
}

main();
