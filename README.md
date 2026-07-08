# 🎮 Classroom Arcade

Quick 1–2 minute skill games for 3rd graders, styled like ClassCade. Every game lives in its own folder and is a single HTML file that works on computers and tablets — no accounts, no installs. Best scores save on the device.

**Home page:** `index.html` — the arcade menu that links to every game.

## The games

| Folder | Game | Topic | Standard |
|---|---|---|---|
| `games/verb-tense/` | ⏰ **Tense Time Machine** | Verb Tense | TEKS 3.11D(ii) |
| `games/compound-words/` | 🤖 **Word Factory** | Compound Words & Contractions | TEKS 3.2A(iii) |
| `games/synonyms-antonyms/` | 🧪 **Potion Words** | Antonyms, Synonyms, Idioms & Homophones | TEKS 3.3D, 3.2B(ii) |
| `games/compound-sentences/` | 🌉 **Bridge Builder** | Simple & Compound Sentences | TEKS 3.11D(i, viii) |
| `games/authors-purpose/` | 🕵️ **Purpose Detective** | Author's Purpose (P.I.E.) | TEKS 3.10A |
| `games/alphabetization/` | 📚 **Library Dash** | Alphabetization | TEKS 3.2C |
| `games/fraction-models/` | 🔒 **Fraction Quest** | Fraction Models | CCSS 3.NF.A.1 |

## How students play

Each game is one quick 90-second round (Fraction Quest is level-based):

- ⏰ **Tense Time Machine** — charge a time machine by answering past / present / future questions before the gremlin unplugs it. Wins earn travel badges (Dino Days, Castle Times, Pirate Seas, Space Future).
- 🤖 **Word Factory** — Weld-Bot builds compound words (sun + flower!), the Squish Press makes contractions (do not → don't). Watch the apostrophe!
- 🧪 **Potion Words** — brew Twin Potions (synonyms), Opposite Elixirs (antonyms), Echo Brews (homophones), and crack Riddle Smoke (idioms).
- 🌉 **Bridge Builder** — pick the connector (and, but, or, so) that joins two sentences, and inspect bridges to spot the compound sentence.
- 🕵️ **Purpose Detective** — read tiny Case Files and crack them with P.I.E.: Persuade, Inform, or Entertain.
- 📚 **Library Dash** — the return cart tipped over! Tap books onto the shelf in ABC order; tricky carts need second-letter checks.
- 🔒 **Fraction Quest** — shade fraction models to open gates through three worlds.

Shared game feel: 3-in-a-row streaks double your points, wrong answers show the correct one with a quick mini-lesson, and finishing earns a 1–3 star rating.

## Putting it online (GitHub Pages)

To give students a link they can click (like `pastorsophia.github.io/ck12`): repo **Settings → Pages → Source: Deploy from a branch** → pick the default branch → Save. After a few minutes the arcade is live at your `github.io` address.

## Offline use

Any game also works with no internet: download its `index.html`, then double-click it. (Online, games load the Poppins font from Google Fonts; offline they fall back to a similar built-in font.)

## Adding more games

Each topic gets its own folder under `games/` with an `index.html`. Copy an existing game folder as a starting point — the visual style (colors, Poppins font, launcher-style "How to Play" directions) is shared across all of them — then swap in the new theme and question bank, and add a card to the root `index.html`.
