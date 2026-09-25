# laurence-playground

A couple of small, self-contained web pages. No build step, no dependencies to
install — each is a single HTML file you can open in any modern browser.

## How this site deploys

GitHub Pages serves this repo straight from the **`main` branch, root folder**.
There is no Actions workflow and there must not be one: adding a workflow that
calls `actions/deploy-pages` switches the site to Actions-built mode and every
file on `main` stops being served.

- Merge to `main` and the live site refreshes in about a minute.
- Each app is either a single HTML file at the root or a folder with its own
  `index.html`. A folder gives the nicer URL, so prefer it for new apps.
- App index: https://laseberini.github.io/laurence-playground/apps/

## 📱 Apps — [`apps/`](apps/index.html)

A list of everything here, plus the sites that live in their own repos.

**Live:** https://laseberini.github.io/laurence-playground/apps/

## 📖 Resume Reader — [`index.html`](index.html)

A mobile-friendly PDF reader that **remembers exactly where you left off**, so
opening a book is one tap instead of scrolling to find your place.

**Live:** https://laseberini.github.io/laurence-playground/

### What it does
- **Pick a PDF once** — the file is cached locally (in your browser's
  IndexedDB), so every visit after that **auto-opens straight to your last
  page**. No re-picking, no uploading.
- **Remembers your spot** — page, scroll position, zoom, and view mode are
  saved per book automatically (on every page turn and when you switch apps).
- **Reflow mode (¶)** — extracts the page text and re-flows it as wrapping
  paragraphs, so zooming changes the text size and the text rewraps to your
  screen (no side-scrolling). Best for plain prose; complex layouts
  (multi-column, tables) may read out of order, so the original fixed layout is
  always one tap away.
- **Navigation** — tap the left/right edges or swipe to flip pages, drag the
  slider to jump, arrow keys on desktop.

### Privacy
Your PDF and reading progress **never leave your device** — there's no server,
no upload, and the file is never committed to this repository. Everything lives
in your own browser.

### Good to know
- Caching is per-browser and doesn't sync across devices.
- iOS Safari may clear cached site data after ~7 days of not visiting; adding
  the page to your Home Screen makes this far less likely. If it ever forgets,
  just pick the file once more.

## 🫙 Chore Jar — [`chores/`](chores/index.html)

Track chores and pocket money for Zac and Adam. Tap a chore to add its money,
see what each child is owed, mark payouts, and edit the chore list. Data stays
on the phone; use the Backup section in Edit chores to save a copy.

**Live:** https://laseberini.github.io/laurence-playground/chores/

## 🔴 Mastermind — [`mastermind/`](mastermind/index.html)

The classic code-breaking game, built for phones. Break the computer's code, or
set one and watch the computer crack it (Knuth's minimax strategy). Add it to
your Home Screen to play it like an app.

**Live:** https://laseberini.github.io/laurence-playground/mastermind/

## 🌀 fractal-loop — [`fractal-loop.html`](fractal-loop.html)

A small interactive fractal toy.

## 🎫 Loyalty Cards — [`cards/index.html`](cards/index.html)

Your loyalty barcodes, one tap away.

**Live:** https://laseberini.github.io/laurence-playground/cards/
