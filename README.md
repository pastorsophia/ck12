# fluency-games

Browser-based reading fluency games for K-5 students, aligned to Texas TEKS
Reading/Fluency standards (rate, accuracy, expression, phrasing).

Plain HTML/CSS/JS — no build tools, no dependencies.

## Play

The games fetch passage data as JSON, so serve the folder instead of opening
files directly:

```
python3 -m http.server 8000
```

Then open <http://localhost:8000/fluency-games/> and pick a game. (Any static
host, like GitHub Pages, works too.)

## Games

| Game | Folder | Skills | Grades |
| --- | --- | --- | --- |
| 🏎️ WPM Racer | `fluency-games/games/wpm-racer` | rate, comprehension | 1-4 |
| 🌲 Fluency Forest | `fluency-games/games/fluency-forest` | rate, accuracy, expression, self-correction | 3 |

**WPM Racer** lights up a passage word-by-word at an adjustable pace
(60-200 WPM slider, changeable mid-read). The student reads along out loud,
then answers two comprehension questions and gets a WPM / accuracy / score
report.

**Fluency Forest** is a self-contained three-in-one game: timed repeated
reading with words-per-minute scoring, a "word detective" context
self-correction game, and an expression/intonation game.

## Project layout

```
fluency-games/
  shared/    scoring.js, timer.js, passages.js, styles.css (reused by games)
  data/      standards.json (TEKS/Lexile mapping), passages.json (stories + questions)
  games/     one folder per game
  index.html game picker
```

Conventions for adding passages and games are documented in [CLAUDE.md](CLAUDE.md).
