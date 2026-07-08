# fluency-games

A suite of browser-based reading fluency games for K-5 students, aligned to
Texas TEKS Reading/Fluency standards (rate, accuracy, expression, phrasing).

## Project conventions

**Content**
- Passages must be **fictional/original**. Avoid fact-checkable claims
  (no real statistics, dates, science facts, or named real places/people) so
  content never needs verification or correction.
- Lexile targets: **K-2 = BR-420L**, **3-5 = 420-820L**, scaling by grade
  within each band. Per-grade ranges live in `fluency-games/data/standards.json`.
- Every passage in `data/passages.json` carries a Lexile estimate, a grade
  band, and at least 2 comprehension questions.

**Measurement**
- Each game tracks three things: **words-per-minute**, **accuracy %**, and a
  **comprehension score**. Use the shared scoring helpers so the numbers mean
  the same thing across games.

**Code**
- Plain HTML/CSS/JS only — **no build tools**, no npm, no frameworks. Every
  game must run from a static file server.
- One folder per game under `fluency-games/games/<game-name>/`, each with its
  own `index.html`.
- Shared code (scoring, timers, passage loader, base styles) lives in
  `fluency-games/shared/` and is loaded with plain `<script src>` tags. Shared
  modules attach to the `window.FluencyShared` namespace.
- Data (standards mapping, passages) lives in `fluency-games/data/` as JSON,
  fetched at runtime by `shared/passages.js`.

## Folder structure

```
fluency-games/
  shared/          scoring.js, timer.js, passages.js, styles.css
  data/            standards.json, passages.json
  games/
    wpm-racer/     paced word-by-word reading + comprehension check
    fluency-forest/  self-contained 3-in-1 fluency game (predates the
                     shared-code convention; intentionally standalone)
  index.html       game picker hub
```

## Running locally

Games fetch JSON data, so open them through a local server rather than
`file://`:

```
python3 -m http.server 8000
# then visit http://localhost:8000/fluency-games/
```

## Standards note

TEKS ELAR (§110.3-110.7, grades 1-5) knowledge-and-skills statement 4 reads
"use appropriate fluency (rate, accuracy, and prosody) when reading
grade-level text." This project splits prosody into **expression** and
**phrasing**, giving the four tracked components: rate, accuracy, expression,
phrasing. Kindergarten has no standalone fluency standard; K-band games build
its precursors (decoding, sight words, print tracking).
