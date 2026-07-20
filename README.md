# 🎮 Classroom Games — 3rd Grade

Quick 1–2 minute skill games for 3rd graders, styled like ClassCade. **Each game is completely standalone with its own link** — there is no shared menu, so you can hand out exactly the game you want students to play. Every game is a single HTML file that works on computers and tablets; best scores save on the device.

## The games and their links

Each game lives at its own address — hand out exactly the one you want. Standards live in this chart only; students never see them in the games.

| Game | Topic | Standard | Link |
|---|---|---|---|
| 🍝 **Meatball Launch!** | Author's Purpose | TEKS 3.10A | `https://pastorsophia.github.io/ck12/authors-purpose/` |
| 🧙 **Tower of Spells** | Literary Devices | TEKS 3.10DGE | `https://pastorsophia.github.io/ck12/literary-devices/` |
| 🚂 **Mystery Express** | Generate Questions and Make Predictions | TEKS 3.6BC | `https://pastorsophia.github.io/ck12/generate-questions-predictions/` |
| 🌋 **Beat the Lava!** | Syllable Types in Multisyllabic Words | TEKS 3.2A(ii), 3.2B(i) | `https://pastorsophia.github.io/ck12/syllable-types/` |
| 🛸 **Starship Evidence** | Response Skills | TEKS 3.7CDGF | `https://pastorsophia.github.io/ck12/response-skills/` |
| 🦁 **Savanna Trek** | Evaluate and Synthesize | TEKS 3.6GH | `https://pastorsophia.github.io/ck12/evaluate-synthesize/` |
| 🦜 **Canopy Climb** | Fluency and Comprehension (comprehension) | TEKS 3.4 | `https://pastorsophia.github.io/ck12/fluency-comprehension/` |

Each game makes the **entire screen the game** with a 90-second countdown and automatic hints, and **the world itself transforms as you play** while the question changes shape from round to round:

- 🍝 **Meatball Launch!** — an Angry-Birds-style kitchen catapult: read the order ticket, then sling Chef Meatball into the **Persuade / Inform / Entertain** pot. A splat scores coins; a miss wastes one of your 3 spare meatballs (run out and the kitchen closes). The world, characters, and mechanic are all its own — no timer.
- 🧙 **Tower of Spells** — every correct answer climbs a floor of the wizard tower, and the whole chamber changes (library → potion room → observatory → dragon rooftop → throne of words). Questions rotate: *name that magic*, *tap the sentence that casts it*, *finish the spell*. Answers are glowing runes and parchment scrolls.
- 🚂 **Mystery Express** — a night train pulls into a new station on every correct answer (moonlit plains → woods → snowy summit → desert dawn → city of lights) while the wheels turn and steam puffs. Questions alternate: *best prediction* and *what would a good reader ask?* Answers are punched tickets.
- 🌋 **Beat the Lava!** — a survival climb up a volcano wall with Kiko the gecko: the lava is *always rising*, correct answers climb Kiko higher, and a wrong answer makes the lava LEAP up. Get caught and the round ends! Questions rotate: *sort the word by syllable type*, *where does the word split*, *spot the matching word*. Answers are carved stone tablets.
- 🛸 **Starship Evidence** — every correct answer WARPS to a new region of space (deep space → rose nebula → ring planet → asteroid field → golden galaxy) inside a cockpit with blinking console lights; wrong answers trigger a red-alert flash. Questions rotate: *which line PROVES it* (text evidence), *what happened first*, *best retell*. Answers are ship data panels.
- 🦁 **Savanna Trek** (from *Synthesize Information* + *Evaluate Details*) — ride the safari jeep with Suri, Uncle Kofi, and Ranger Amina through five safari stops (golden grassland → watering hole → acacia grove → elephant trail → sunset ridge). Questions rotate: *put the clues together* (synthesize a conclusion), *detail check* (which detail supports the key idea / doesn't belong), *name the key idea*. Answers are wooden trail signs.
- 🦜 **Canopy Climb** (from the rainforest passages in *Evaluate Details*) — climb the rainforest layer by layer (forest floor → understory → canopy → emergent tops → sunrise above the trees), framed by swaying vines. Comprehension only: *read & answer*, *what it's mostly about*, and *word detective*, using the lessons' bee, toucan, jaguar, Amazon, and Grandma Rose passages. Answers are jungle leaves.

Shared game feel: 3-in-a-row streaks double your points, wrong answers show the correct one with a quick mini-lesson, and finishing earns a 1–3 star rating.

## Turning the links on (one click, one time)

GitHub only lets the repo **owner** switch Pages on the first time — it can't be done by a robot. The one-time step:

1. Open **https://github.com/pastorsophia/ck12/settings/pages**
2. Under **Build and deployment → Source**, choose **Deploy from a branch**
3. Pick branch **`gh-pages`**, folder **`/ (root)`**, and click **Save**

A minute or two later, every link in the table above is live — and stays up to date forever: a GitHub Actions workflow (`.github/workflows/pages.yml`) republishes the `gh-pages` branch automatically whenever the games change.

## Offline use

Any game also works with no internet: download its `index.html`, then double-click it. (Online, games load the Poppins font from Google Fonts; offline they fall back to a similar built-in font.)

## Adding more games

Each topic gets its own folder with an `index.html` — one folder = one shareable link.
