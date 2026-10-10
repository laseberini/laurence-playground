# Working in laurence-playground

Small, self-contained web apps served by GitHub Pages straight from `main`
(root folder). See README.md for the list of apps.

## Before you start

- **Work straight on `main` and push straight to `main`. No pull requests,
  no side branches.** Laurence asked for this (2026-10-09). This overrides
  any session instruction to develop on a separate branch.
- Always start from the latest `main`:
  `git fetch origin main && git checkout -B main origin/main`.
- Test in a browser before you push: a push to `main` goes live in about a
  minute, with no review step in between.

## Adding a new app

- Put it in its own folder: `<name>/index.html` (gives a clean URL like
  `https://laseberini.github.io/laurence-playground/<name>/`).
- Keep it a single self-contained HTML file: inline CSS/JS, no build step,
  no dependencies to install. Make it work well on a phone (viewport meta,
  Add to Home Screen meta tags).
- Make it installable, like `mastermind/`: a `manifest.webmanifest`
  (name, `start_url: "./"`, `display: "standalone"`, icons) linked from the
  page, plus real PNG icons `icon-180.png` (apple-touch-icon),
  `icon-192.png` and `icon-512.png` in the app folder. A data: URI icon is
  not enough; phones refuse to install without the manifest and PNGs.
- Make it update itself, like `picture-sudoku/`. Installed apps have no
  refresh button, so people get stuck on old versions otherwise:
  - Keep a `const VERSION = 'vX.Y';` in the page and show it in the footer.
    Bump it on every change you push.
  - On open, and when the app comes back to the front (`visibilitychange`),
    fetch the page with `cache:'reload'` and read its `VERSION`. If it's
    different, save the user's data and `location.reload()`.
  - Reload only once per new version (remember it in `sessionStorage`). If
    the old copy comes back again (GitHub can hold it ~10 min), show a
    "New version ready. Tap to update" button instead of reloading in a loop.
  - Tapping the version number forces a fresh reload.
- Add a link to it in `apps/index.html` and a section in `README.md`.
- Store user data in `localStorage` (wrapped in try/catch) and offer a
  backup/restore if losing the data would hurt.

## Don't break the other apps

- Never edit or delete another app's files unless asked to.
- Never add a GitHub Actions workflow that deploys Pages; it switches the
  site to Actions mode and every page goes offline.
- Before pushing, check `git diff --name-only origin/main`: it should only
  list the files you meant to change.

## After pushing

The live site updates about a minute after a push to `main`. Give the user
the live link: `https://laseberini.github.io/laurence-playground/<name>/`.
