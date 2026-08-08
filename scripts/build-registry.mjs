// Assembles public/registry/index.json from the per-course entries in
// public/registry/courses/*.json. It only reads checked-in files; it never
// touches the network. Run it after adding or editing a course entry:
//
//   npm run registry:build
//
// The per-course files are the source of truth and are served directly; the
// index is a generated catalog for listing pages.
import { readdirSync, readFileSync, writeFileSync } from "node:fs";
import { fileURLToPath, pathToFileURL } from "node:url";
import { dirname, join } from "node:path";

const here = dirname(fileURLToPath(import.meta.url));
export const registryDir = join(here, "..", "public", "registry");
export const coursesDir = join(registryDir, "courses");
export const indexPath = join(registryDir, "index.json");

export function readCourseEntries() {
  const files = readdirSync(coursesDir)
    .filter((name) => name.endsWith(".json"))
    .sort();
  return files.map((file) => ({
    file,
    entry: JSON.parse(readFileSync(join(coursesDir, file), "utf8")),
  }));
}

export function buildIndex(entries = readCourseEntries().map((e) => e.entry)) {
  const courses = entries
    .map((c) => ({
      id: c.id,
      title: c.title,
      description: c.description,
      teaches: c.teaches,
      from: c.from,
      tags: c.tags ?? [],
      repo: c.repo,
      latest: c.latest,
      updatedAt: c.releases
        .map((r) => r.releasedAt)
        .sort()
        .at(-1),
      versions: `/registry/courses/${c.id}.json`,
    }))
    .sort((a, b) => a.title.localeCompare(b.title));
  return { courses };
}

export function serializeIndex(index) {
  return JSON.stringify(index, null, 2) + "\n";
}

function main() {
  const index = buildIndex();
  writeFileSync(indexPath, serializeIndex(index));
  console.log(`registry: wrote index.json with ${index.courses.length} course(s)`);
}

if (import.meta.url === pathToFileURL(process.argv[1]).href) {
  main();
}
