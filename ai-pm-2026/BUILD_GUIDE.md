# AI PM Course — Build Guide & Handoff

**Read this file first.** It explains what this project is, how the build system works, the exact rules for adding chapters, and the quality bar that makes the difference between a real course and AI filler. If you (the coding agent) follow this, you can produce Chapters 4–14 without supervision and without breaking anything that already works.

---

## 1. What we are building

A single-page, self-contained HTML course: **"AI Product Management by Rohit Swerashi (2026 edition)."** It teaches someone to think like an AI PM and walk into 2026 interviews sharp.

Key product decisions already made (do not relitigate them):

- **One master HTML file**, no build framework, no external runtime deps. It opens by double-click and runs anywhere. Fonts load from Google Fonts; everything else is inline.
- **Excel-tab left sidebar.** All 14 chapters listed as collapsible toggles; click a chapter to expand its lessons; click a lesson to load it in the reading pane. Finished chapters are `live`; future ones are `locked`/`soon` with their real scope shown (never fake filler).
- **Apple light theme** — white, near-black ink (`#1d1d1f`), one blue accent (`#0071e3`). Premium, calm, editorial. Serif body for long-form reading, grotesque for UI/headings.
- **Each lesson is a "guidance blog for the job,"** not a textbook. It tells the reader what they'll be expected to do as an AI PM, how to think, what frameworks to use, and shows a real 2025–26 industry case. Structure is fixed (see §5).
- **Every chapter has ONE through-line** — a single argument all its lessons reinforce. This is what makes a chapter feel authored, not assembled. The through-lines live in `course_map.json`.

What this course is **not**: it is not an engineering course. The technical chapters (1–3) teach PM-level *literacy* — enough to reason about and debug systems, never to implement them. Keep that framing.

---

## 2. The architecture, and why it's built this way

```
ai-pm-course/
├── BUILD_GUIDE.md        ← you are here (the spec)
├── CURRICULUM.md         ← per-chapter research targets + real case suggestions
├── course_map.json       ← SINGLE SOURCE OF TRUTH for chapter/lesson titles + order + through-lines
├── shell.html            ← the engine: all CSS + all JS + the sidebar/quiz/nav logic + placeholders
├── build.py              ← stitches everything into the master
├── chapters/
│   ├── _TEMPLATE.js      ← blank 7-block lesson template — COPY THIS for every new lesson
│   ├── ch01.js           ← Chapter 1 lessons (reference example: 4 lessons)
│   ├── ch02.js           ← Chapter 2 lessons (reference example: 3 lessons)
│   └── ch03.js           ← Chapter 3 lessons (reference example: 3 lessons)
└── ai-pm-course-master.html  ← GENERATED OUTPUT. Never hand-edit. This is what ships.
```

**Why source files + a build step instead of editing one giant file?**
The master is already ~158 KB and will reach ~600 KB+ by Chapter 14. Editing a file that large by hand (or regenerating it wholesale every time) is how finished, working chapters get silently corrupted. So content is written in small per-chapter source files, and `build.py` assembles them. Adding a chapter is an **append**, never a rewrite. A broken new chapter can never damage a working old one.

**Data flow:**
`course_map.json` (titles/order) + `chapters/*.js` (content) → `build.py` → injects into `shell.html` → writes `ai-pm-course-master.html`.

`build.py` automatically derives each lesson's state: a lesson is `live` if its content key exists in a chapter file, otherwise `soon`. It picks the newest live chapter to open by default, sets the progress bar, and wires prev/next navigation. **You never set states by hand.**

---

## 3. How to add a chapter (the only workflow you need)

1. **Confirm the chapter + lesson titles** exist in `course_map.json`. (Chapters 1–14 are already listed.) If you change a title, change it here — this is the source of truth for the sidebar.
2. **Create `chapters/chNN.js`** (e.g. `ch04.js`). For each lesson, copy the block from `chapters/_TEMPLATE.js`, set the key to the lesson id (`"4.1"`, `"4.2"`, …), and write the content following §5 and §6.
3. **Run the build:**
   ```bash
   cd ai-pm-course
   python3 build.py
   ```
4. **Verify** (see §8). Open `ai-pm-course-master.html`, click the new chapter in the sidebar, read it, take the quizzes.

That's the entire loop. States, the open chapter, progress %, and navigation update themselves.

---

## 4. HARD RULES (breaking these breaks the build or the bar)

1. **Never hand-edit `ai-pm-course-master.html`.** It is generated. Your edits go in `chapters/*.js`, `shell.html`, or `course_map.json`, then you re-run `build.py`. A hand-edit is destroyed on the next build.
2. **Lesson ids must match** between `course_map.json` and the object keys in `chapters/chNN.js` (e.g. `"4.1"`). A mismatch = the lesson shows as `soon` even though you wrote it.
3. **End every lesson's content with the literal token `__NAV__`** (the template already does). The runtime replaces it with prev/next buttons. Do not replace it yourself, do not remove it.
4. **Content is raw HTML inside a JS template literal** (backticks). Therefore: do not use Markdown; do not use an unescaped backtick inside the content; do not use `${...}` (it would be interpreted as JS interpolation). Use straight quotes; `&amp;` for ampersands inside text where needed.
5. **Real cases only.** The industry case in block 7 must be a real, verifiable 2025–26 company and a real decision. Never invent quotes, numbers, or internal reasoning. If you reconstruct how a PM likely reasoned, label it as a reconstruction. Keep any direct quote under 15 words. (Web research is required for this — see §9.)
6. **Keep the 7 blocks, in order, every lesson** (see §5). Consistency across all chapters was an explicit requirement.
7. **Every lesson needs at least one `<div class="fig">` SVG** chart or diagram. Visuals are a hard requirement, not optional.
8. **No new CSS classes or color values.** Use the components and palette in §7. The look must stay identical across all 14 chapters.

---

## 5. The lesson structure (the 7 blocks)

Every lesson is exactly these blocks, in this order. (`_TEMPLATE.js` is the literal skeleton.)

1. **Your Mandate** — what the AI PM owns in this domain (the ownership boundary vs engineering).
2. **Your Responsibilities** — the concrete deliverables; usually a "you own / you don't own" table.
3. **Metrics That Matter Here** — the AI-specific scorecard (evals, cost-per-task, latency tails, trust — never vanity metrics like DAU). Usually a table + a "trap" warning callout.
4. **How to Think Here** — the mental model, **with at least one SVG figure** (diagram or chart). Often a numbered list of mental steps + an "say this in the interview" accent callout.
5. **Frameworks to Deploy** — 2–3 named frameworks (`<h3>① Name</h3>`) the reader can deploy by name.
6. **Worked Solution** — a realistic prompt in a `.callout` ("The prompt"), then Step 1/2/3 reasoning, ending in a `.callout.good` ("Why this wins").
7. **Industry Case** — a real 2025–26 company, real decision, ending in a `.callout.accent` ("The PM takeaway") that ties back to the chapter through-line.

Then **Check Yourself**: 1–2 `.quiz` blocks (self-grading; `data-correct` is the 0-based index of the right option).

The **last lesson of each chapter** adds a `.callout.good` "Chapter NN complete" box (recap the through-line + name the next chapter) just before `__NAV__`.

---

## 6. The voice & quality bar (this is the hard part)

The owner's standing instruction: **never hype, never sugarcoat, never give 10 options when 1 clear answer is needed.** Apply it to the writing:

- **Opinionated and specific.** "Do X because Y" — not "you could consider X." Give the reader the answer, then the reasoning.
- **A memorable, slightly contrarian motto** opens each lesson (the `.motto` line). It should make the reader stop.
- **Interview-weaponized.** The reader's goal is to crack an AI PM job. Every block should make them sound sharper in an interview or more effective on the job. The "say this in the interview" callouts and the worked solution are where this lands hardest.
- **Concrete over abstract.** Real numbers, real tradeoffs, real failure modes. When you state a metric, say why a PM watches it.
- **Reinforce the chapter through-line** in every lesson, especially the lead paragraph and the block-7 takeaway. That's the connective tissue.
- **Depth target:** roughly 1,500–2,500 words of content per lesson — enough to be genuinely useful, not padded. Match the depth of `ch01.js`/`ch02.js`/`ch03.js`.

Read `chapters/ch01.js` (lesson 1.1) before writing anything — it is the canonical example of the voice, depth, and structure.

---

## 7. The design system (use these exactly)

**Fonts** (loaded in `shell.html`): UI/headings `Hanken Grotesk`; body `Newsreader` (serif); mono `JetBrains Mono`.

**Color palette** (CSS variables in `shell.html`; for SVG, hardcode the hex):
| Token | Hex | Use |
|---|---|---|
| ink | `#1d1d1f` | primary text, diagram lines |
| ink-soft | `#48484a` | secondary text |
| ink-mute | `#86868b` | captions, muted labels |
| accent | `#0071e3` | the one accent — links, highlights, key diagram elements |
| good | `#0a7d3c` | "why this wins", success, positive diagram |
| warn | `#b25000` | traps, risks, negative diagram |
| line | `#eee` / `rgba(0,0,0,0.09)` | borders |

**Reusable components** (already styled in `shell.html` — use these class names, invent nothing new):
- `.wrap` — the lesson container (max-width reading column).
- `.les-kicker`, `.les-title`, `.les-meta` + `.pill`, `.motto` — the header.
- `<h2><span class="ix">N</span> Title</h2>` + `<div class="sub">…</div>` — block headers (the `.ix` is the numbered chip).
- `<h3>① …</h3>` — framework sub-headers.
- `.callout` (neutral), `.callout.warn` (trap/risk), `.callout.good` (why-this-wins/complete), `.callout.accent` (interview line / takeaway). Each has a `<div class="ch">LABEL</div>` first.
- `table` — plain `<table>`; styled automatically. Great for "you own / you don't own" and metric tables.
- `.flow` — dark monospace box for pipelines/sequences. Spans: `.st` (stage, blue), `.nt` (note, green), `.ar` (arrow, grey).
- `.fig` — figure card holding an inline `<svg>`. Inside: `.fig-title` (uppercase top label) and `.fig-cap` (takeaway caption). **At least one per lesson.**
- `.quiz` (with `data-correct`), `.opt` (with `data-i`), `.qexp` — the self-grading quiz.
- `em.k` — inline key-term highlight.

**SVG figures:** build clean charts/diagrams by hand (no chart libraries — they'd break the self-contained file). `viewBox="0 0 520 ~260"`, `font-family="Hanken Grotesk, sans-serif"`, stroke-width ~1.2–1.8, hardcode the palette hex above. Copy a pattern from the reference chapters: triangle / funnel / bar chart / decision tree (`ch01.js`), agent loop / compounding curve / topology (`ch02.js`), exact-vs-approximate / embedding space / graph (`ch03.js`).

---

## 8. How to verify a build

After `python3 build.py`:

```bash
# 1. JS syntax of the generated master must be valid
python3 -c "m=open('ai-pm-course-master.html').read(); open('/tmp/c.js','w').write(m.rsplit('<script>',1)[1].rsplit('</script>',1)[0])"
node --check /tmp/c.js        # must print nothing / exit 0

# 2. backticks in the script must be EVEN (balanced template literals)
python3 -c "s=open('ai-pm-course-master.html').read().rsplit('<script>',1)[1]; print('backticks even:', s.count('\`')%2==0)"
```

Then open the master in a browser and manually check: the new chapter appears `live`; its lessons load; figures render; quizzes grade; prev/next moves across chapters. If a new lesson shows as `soon`, the id in `chapters/chNN.js` doesn't match `course_map.json` (Rule 2).

Common failure = unbalanced backticks (you used a stray backtick in content) → the page goes blank. Fix the content, rebuild.

---

## 9. Division of labor & the one thing to watch

This package was designed so the **build/assembly** can run fully on your side. The one part that needs care is the **industry cases in block 7** — they must be real and current (2025–26). That requires live web research per lesson. If your environment has reliable web search, do the research and cite real facts. If it does not, do **not** invent a case — instead, use one of the pre-researched, verified cases listed per chapter in `CURRICULUM.md`, or flag the lesson for the human to supply the case. A fabricated case fails Rule 5 and defeats the entire point of the course (the reader is studying to get hired on real knowledge).

Already-verified cases used in Chapters 1–3 (reuse/extend freely, they're real): **Perplexity** (RAG pipeline, approximate retrieval at scale), **Harvey** (legal RAG, vector DBs, the ~10k-doc vault cap), **Cursor** (the 2025 usage-based pricing change and cost-at-scale story), **Klarna** (the AI customer-service success and 2025 walk-back to a human hybrid), **Cognition vs Anthropic** (the June 2025 single- vs multi-agent debate), **MCP** (Anthropic 2024 → industry standard 2025 → Linux Foundation Dec 2025), **Microsoft GraphRAG** (knowledge-graph retrieval vs vector RAG).

---

## 10. Deployment

The master is a single static file. To publish: drop `ai-pm-course-master.html` on any static host (Vercel, Netlify, GitHub Pages, S3) as `index.html`. No server, no build pipeline needed at runtime — the build already happened. Re-run `build.py` and redeploy whenever you add a chapter.

---

## 11. TL;DR for the impatient agent

1. Pick the next chapter from `course_map.json`.
2. Read its `through_line` and its targets in `CURRICULUM.md`.
3. Research real 2025–26 cases (Rule 5 / §9).
4. Copy `_TEMPLATE.js` once per lesson into `chapters/chNN.js`; write all 7 blocks + ≥1 SVG + quizzes; match the voice in `ch01.js`.
5. `python3 build.py`.
6. Verify (§8). Ship `ai-pm-course-master.html`.
7. Never hand-edit the master. Never fake a case. Never drop a block or `__NAV__`.
