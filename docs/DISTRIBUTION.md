# Course distribution and the Asakiri registry

How courses are versioned, published on GitHub, and listed in the Asakiri registry. The
versioning rules (what makes a release major, minor, or patch) live in the studio's
[VERSIONING.md](../../asakiri-studio/docs/VERSIONING.md); this doc is the publishing and
registry side.

## Model in one paragraph

A course is a public GitHub repository, one repo per course, owned by whoever made it. Each
release is a Git tag (`v1.2.0`) plus a GitHub Release. The Asakiri site does not host course
content or crawl GitHub; it keeps a small registry of pointers that authors join by pull
request. The registry entry is the source of truth for what the site shows; `index.json` is
generated from all entries.

## Publishing a release (in your course repo)

1. Set `release.version` in `project.json` to the new version.
2. Update `CHANGELOG.md` ([Keep a Changelog](https://keepachangelog.com) format). Major bumps
   need a **Breaking** note explaining what learner progress is affected.
3. Tag and push: `git tag v1.2.0 && git push --tags`.
4. Create a GitHub Release for the tag, pasting the changelog section as the notes.

GitHub then serves the installable tarball at
`https://github.com/<owner>/<repo>/archive/refs/tags/v1.2.0.tar.gz`. No build step or bundle is
required.

Recommended CI check in your repo: on tag, assert `project.json`'s `release.version` equals the
tag name without the `v`.

## Getting listed: open a PR to this site

The registry lives in this repository under `public/registry/`:

```
public/registry/
  course.schema.json              # JSON Schema for one entry
  courses/<course_id>.json        # one file per course, the source of truth (PR target)
  index.json                      # generated catalog; do not hand-edit
```

To add or update a course:

1. Add or edit `public/registry/courses/<your_course_id>.json`. The filename must equal the
   `id` in the file, which must equal the `id` in your `project.json` (e.g.
   `course_japanese_starter`). Reference the schema for autocomplete:
   `"$schema": "https://www.asakiri.com/registry/course.schema.json"`.
2. Regenerate the catalog: `npm run registry:build`.
3. Validate: `npm run registry:validate`.
4. Open a pull request. CI runs the same validation; `npm run build` also validates via
   `prebuild`, so an invalid registry fails the build.

Updating an existing course to a new release means adding one object to that file's `releases`
array and bumping `latest`.

## Entry shape

```jsonc
{
  "$schema": "https://www.asakiri.com/registry/course.schema.json",
  "id": "course_japanese_starter",        // == project.json id, == filename
  "title": "Japanese Starter",
  "description": "One-line summary shown in the catalog.",
  "author": { "name": "Asakiri", "url": "https://github.com/AsakiriLingo" },
  "repo": "https://github.com/AsakiriLingo/course-japanese-starter",
  "teaches": ["ja"],                       // language(s) taught
  "from": ["en"],                          // language(s) it is taught in
  "tags": ["beginner"],
  "license": "CC-BY-4.0",
  "latest": "1.2.0",                       // must be the highest version below
  "releases": [
    {
      "version": "1.2.0",
      "tag": "v1.2.0",                     // must be "v" + version
      "releasedAt": "2026-08-09",
      "formatVersion": "0.1",             // the project.json formatVersion it was built against
      "breaking": false,                   // true iff the major number increased
      "source": "https://github.com/AsakiriLingo/course-japanese-starter/archive/refs/tags/v1.2.0.tar.gz",
      "changelog": "https://github.com/AsakiriLingo/course-japanese-starter/releases/tag/v1.2.0",
      "notes": "Added chapter 4 (particles); 12 new audio clips."
    }
  ]
}
```

See [`courses/course_japanese_starter.json`](../public/registry/courses/course_japanese_starter.json)
for a complete example with a version history.

## What the validator enforces

`npm run registry:validate` (dependency-free, also gates `npm run build`) checks:

- Required fields, types, and formats (semver, dates, GitHub URLs).
- Filename equals `id`, and `id` is unique across the whole registry.
- Every release `tag` equals `v` + `version`, and `source` references that tag.
- `latest` exists in `releases` and is the highest version.
- `breaking` is true exactly when the major number increased from the previous release.
- `index.json` matches a fresh build of the entries.

## Served URLs

Once merged and deployed, entries are static files:

- Catalog: `https://www.asakiri.com/registry/index.json`
- One course: `https://www.asakiri.com/registry/courses/<course_id>.json`
- Schema: `https://www.asakiri.com/registry/course.schema.json`
