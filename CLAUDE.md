# Working in laurence-playground

Small, self-contained web apps served by GitHub Pages straight from `main`
(root folder). See README.md for the list of apps.

## Before you start

- Always start work from the latest `main`:
  `git fetch origin main && git checkout -B <your-branch> origin/main`.
  An old checkout can carry stale history, and its pull request then shows
  unrelated files and merge conflicts.
- If your working branch already exists but was cut from an older `main`,
  rebuild it from `origin/main` and re-apply only your own changes.

## Adding a new app

- Put it in its own folder: `<name>/index.html` (gives a clean URL like
  `https://laseberini.github.io/laurence-playground/<name>/`).
- Keep it a single self-contained HTML file: inline CSS/JS, no build step,
  no dependencies to install. Make it work well on a phone (viewport meta,
  Add to Home Screen meta tags and icon).
- Add a link to it in `apps/index.html` and a section in `README.md`.
- Store user data in `localStorage` (wrapped in try/catch) and offer a
  backup/restore if losing the data would hurt.

## Don't break the other apps

- Never edit or delete another app's files unless asked to.
- Never add a GitHub Actions workflow that deploys Pages; it switches the
  site to Actions mode and every page goes offline.
- Before opening or merging a pull request, check its file list: it should
  only contain the files you meant to change. If it shows other files or
  merge conflicts, rebuild the branch from `origin/main` (see above).

## After merging

The live site updates about a minute after a merge to `main`. Give the user
the live link: `https://laseberini.github.io/laurence-playground/<name>/`.
