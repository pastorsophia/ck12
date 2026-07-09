# 🎮 Classroom Games — 3rd Grade

Quick 1–2 minute skill games for 3rd graders, styled like ClassCade. **Each game is completely standalone with its own link** — there is no shared menu, so you can hand out exactly the game you want students to play. Every game is a single HTML file that works on computers and tablets; best scores save on the device.

## The games and their links

Once GitHub Pages is turned on (see below), each game lives at its own address:

| Game | Topic | Standard | Link |
|---|---|---|---|
| ⏰ **Tense Time Machine** | Verb Tense | TEKS 3.11D(ii) | `https://pastorsophia.github.io/ck12/verb-tense/` |
| 🤖 **Word Factory** | Compound Words & Contractions | TEKS 3.2A(iii) | `https://pastorsophia.github.io/ck12/compound-words/` |
| 🧪 **Potion Words** | Antonyms, Synonyms, Idioms & Homophones | TEKS 3.3D, 3.2B(ii) | `https://pastorsophia.github.io/ck12/synonyms-antonyms/` |
| 🌉 **Bridge Builder** | Simple & Compound Sentences | TEKS 3.11D(i, viii) | `https://pastorsophia.github.io/ck12/compound-sentences/` |
| 🕵️ **Purpose Detective** | Author's Purpose (P.I.E.) | TEKS 3.10A | `https://pastorsophia.github.io/ck12/authors-purpose/` |
| 📚 **Library Dash** | Alphabetization | TEKS 3.2C | `https://pastorsophia.github.io/ck12/alphabetization/` |
| 🔒 **Fraction Quest** | Fraction Models | CCSS 3.NF.A.1 | `https://pastorsophia.github.io/ck12/fraction-models/` |

## What students do in each game

Each game is one quick 90-second round, and games level up mid-round when the standard has natural difficulty tiers (4 correct answers per level, +20 bonus on level-up):

- ⏰ **Tense Time Machine** — charge a time machine by answering past / present / future questions before the gremlin unplugs it. Difficulty comes from the gremlin you pick; wins earn travel badges (Dino Days, Castle Times, Pirate Seas, Space Future).
- 🤖 **Word Factory** — Level 1 *Weld Shop* builds compound words (sun + flower!), Level 2 *Squish Press* makes contractions (do not → don't), Level 3 *Master Machine* mixes both with the trickiest traps (they're / their / there).
- 🧪 **Potion Words** — Level 1 *Twin & Opposite Potions* (synonyms and antonyms), Level 2 *Echo Brews* (homophones), Level 3 *Riddle Smoke* (idioms).
- 🌉 **Bridge Builder** — Level 1 *Connector Crew* picks the joining word (and, but, or, so), Level 2 *Bridge Inspector* spots the compound sentence, Level 3 *Master Builder* mixes both.
- 🕵️ **Purpose Detective** — read tiny Case Files and crack them with P.I.E.: Persuade, Inform, or Entertain. (Single level — the standard is one skill.)
- 📚 **Library Dash** — shelve books in ABC order, exactly as TEKS 3.2C ramps it: Level 1 by the *first* letter, Level 2 by the *second* letter, Level 3 by the *third* letter.
- 🔒 **Fraction Quest** — shade fraction models to open gates through three worlds.

Shared game feel: 3-in-a-row streaks double your points, wrong answers show the correct one with a quick mini-lesson, and finishing earns a 1–3 star rating plus the level you reached.

## Turning the links on (one click, one time)

GitHub only lets the repo **owner** switch Pages on the first time — it can't be done by a robot. The one-time step:

1. Open **https://github.com/pastorsophia/ck12/settings/pages**
2. Under **Build and deployment → Source**, choose **Deploy from a branch**
3. Pick branch **`gh-pages`**, folder **`/ (root)`**, and click **Save**

A minute or two later, every link in the table above is live — and stays up to date forever: a GitHub Actions workflow (`.github/workflows/pages.yml`) republishes the `gh-pages` branch automatically whenever the games change.

## Offline use

Any game also works with no internet: download its `index.html`, then double-click it. (Online, games load the Poppins font from Google Fonts; offline they fall back to a similar built-in font.)

## Adding more games

Each topic gets its own folder with an `index.html` — one folder = one shareable link. Copy an existing game folder as a starting point (the colors, Poppins font, and launcher-style "How to Play" directions are shared across all of them), then swap in the new theme and question bank.
