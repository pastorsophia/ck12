# 🎮 Classroom Games — 3rd Grade

Quick 1–2 minute skill games for 3rd graders, styled like ClassCade. **Each game is completely standalone with its own link** — there is no shared menu, so you can hand out exactly the game you want students to play. Every game is a single HTML file that works on computers and tablets; best scores save on the device.

## The games and their links

Each game lives at its own address — hand out exactly the one you want. Standards live in this chart only; students never see them in the games.

| Game | Topic | Standard | Link |
|---|---|---|---|
| 🍝 **Meatball Launch!** | Author's Purpose | TEKS 3.10A | `https://pastorsophia.github.io/ck12/authors-purpose/` |
| 🎤 **Who Should Say It?** | Literary Devices | TEKS 3.10DGE | `https://pastorsophia.github.io/ck12/literary-devices/` |
| ⛓️ **Build the Chain** | Generate Questions and Make Predictions | TEKS 3.6BC | `https://pastorsophia.github.io/ck12/generate-questions-predictions/` |
| 🌋 **Beat the Lava!** | Syllable Types in Multisyllabic Words | TEKS 3.2A(ii), 3.2B(i) | `https://pastorsophia.github.io/ck12/syllable-types/` |
| 🩺 **Evidence Operation!** | Response Skills | TEKS 3.7CDGF | `https://pastorsophia.github.io/ck12/response-skills/` |
| 🔍 **Evidence Tap** | Evaluate and Synthesize | TEKS 3.6GH | `https://pastorsophia.github.io/ck12/evaluate-synthesize/` |
| 🧑‍🌾 **Story Farm** | Fluency and Comprehension (comprehension) | TEKS 3.4 | `https://pastorsophia.github.io/ck12/fluency-comprehension/` |

Every game fills the **whole screen**, uses no timer, and gives real stakes: correct answers grow a themed goal while wrong answers cost one of **3 lives** (and pop up an automatic helper tip with the right answer glowing gold). Each one is its own little world with its own character and arcade mechanic — inspired by classic games:

- 🍝 **Meatball Launch!** (*Angry Birds*) — read the order ticket, then sling Chef Meatball into the **Persuade / Inform / Entertain** pot. A splat scores coins; a miss wastes a spare meatball.
- 🎤 **Who Should Say It?** (*talent show*) — five word-stars each love a device (Simile Sue, Metaphor Max, Boom Bella, Alli, Big Talk Theo). Read the line and tap the star who'd say it; the applause-o-meter fills.
- ⛓️ **Build the Chain** (*treasure haul*) — read a story clue and tap the best **prediction** or the best **reader question**; each right answer forges a chain link that hauls a treasure chest up out of the gorge.
- 🌋 **Beat the Lava!** (*survival climb*) — Kiko the gecko climbs a volcano wall as the lava rises and speeds up; correct answers climb higher, a wrong answer makes the lava LEAP. Questions rotate: *sort the syllable type*, *where does the word split*, *spot the match*.
- 🩺 **Evidence Operation!** (*Operation, with a buzzer!*) — read Book Buddy's chart, then tweeze out the piece that **PROVES it**, what happened **first**, or the best **retell**. A wrong piece goes BZZZT and costs a heart; Book Buddy heals as you cure the case.
- 🔍 **Evidence Tap** (*detective board*) — pin the clue card that answers the case: *put the clues together*, *which detail supports the key idea*, or *name the key idea*.
- 🧑‍🌾 **Story Farm** (*Stardew-style cozy farm*) — Farmer Fern grows a reading farm: read the passage and answer *what happened*, *mostly about*, or *word meaning*; each right answer plants a crop, and a wrong one lets a crow snatch one.

Shared game feel: 3-in-a-row streaks double your coins, wrong answers show the correct one with a quick mini-lesson, and finishing earns a 1–3 star rating.

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
