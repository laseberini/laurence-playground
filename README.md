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

Track chores and pocket money for up to four children (it asks for their
names the first time it opens). Tap a chore to add its money,
see what each child is owed, mark payouts, and edit the chore list. Data stays
on the phone; use the Backup section in Edit chores to save a copy.

**Live:** https://laseberini.github.io/laurence-playground/chores/

## 🌿 Fizz Lawn — [`fizz-lawn/`](fizz-lawn/index.html)

A notebook app for Fizz's lawn cutting service. Keep a list of clients, log
each cut (paid or not yet), see who owes money, and see who is due for their
next cut. WhatsApp buttons send a ready-made "your lawn is due" or "payment
reminder" message. Data stays on the phone and, once Google Drive is
connected, is backed up to one file in his Drive after every change. Works with no
signal too (a small service worker keeps a copy of the app on the phone).

**Live:** https://laseberini.github.io/laurence-playground/fizz-lawn/

- Google Drive backup needs a Google OAuth client ID (Web application,
  authorised JavaScript origin `https://laseberini.github.io`, Drive API on).
  Put it in `GOOGLE_CLIENT_ID` in the page, or paste it on the Backup tab.

## 🔴 Mastermind — [`mastermind/`](mastermind/index.html)

The classic code-breaking game, built for phones. Break the computer's code, or
set one and watch the computer crack it (Knuth's minimax strategy). Add it to
your Home Screen to play it like an app.

**Live:** https://laseberini.github.io/laurence-playground/mastermind/

## 👑 King’s Quest — [`kings-quest/`](kings-quest/index.html)

*The Crown of Aldermere*, a classic Sierra-style adventure game built for
phones. Tap to walk, read the story aloud with a phone or AI voice. Your game
saves on the phone. Add it to your Home Screen to play full screen.

**Live:** https://laseberini.github.io/laurence-playground/kings-quest/

## 🧩 Picture Sudoku — [`picture-sudoku/`](picture-sudoku/index.html)

Sudoku for kids, with pictures instead of numbers: animals, fruit, vehicles
or sea creatures. Pick a 4×4, 6×6 or 9×9 grid and Easy, Medium or Hard. Tap a
square, then a picture. **With help**, wrong picks turn red, right ones lock
and there's a Hint button; **No help** is real sudoku. Star rating at the end,
the game in progress is saved on the phone, and it updates itself.

**Live:** https://laseberini.github.io/laurence-playground/picture-sudoku/

## ✖️ Times Tables — [`times-tables/`](times-tables/index.html)

Quick-fire times tables for Zac (2 to 12). Pick a table and type the answer to
each random sum on the number pad. Get a sum right within the time limit
(3 seconds to start), 3 times in a row, and it's automatic and drops off the
list; keep going until the table is clear. Questions stay random and the same
sum never comes back until 4 others have been asked (near the end, known sums
fill the gaps), so it's real recall, not short-term memory. Each table shows a
progress bar. On the main page you can set the time limit (2, 2.5, 3 or 4
seconds) and show or hide a timer bar. Pause any time (it also pauses when you
leave the app), reset a table from the main page, and progress is saved on the
phone. It updates itself.

**Live:** https://laseberini.github.io/laurence-playground/times-tables/

## 🌀 fractal-loop — [`fractal-loop.html`](fractal-loop.html)

A small interactive fractal toy.

## 🎫 Loyalty Cards — [`cards/index.html`](cards/index.html)

Your loyalty barcodes, one tap away.

**Live:** https://laseberini.github.io/laurence-playground/cards/

## 🎂 Daniella's Birthday Quiz — [`daniella/`](daniella/index.html)

A 20-question *Lost* quiz (easy → hard, multiple choice, a drawn picture per
question) for Daniella's 27th. Full marks unlocks her birthday voucher, shown
on screen and downloadable as a PDF.

**Live:** https://laseberini.github.io/laurence-playground/daniella/

- A wrong answer turns red and she tries again; the right one turns green and
  moves on. The end screen says how many she got right first time.
- The voucher is stored encrypted in `gift.bin`, with the key made from the
  20 right answers, so the voucher itself isn't sitting in the public repo.

