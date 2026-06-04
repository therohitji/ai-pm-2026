# Curriculum Brief — what each chapter must cover + real cases to research

This is the editorial feed for the agent. For every chapter it gives: the **through-line** (the one argument all lessons reinforce), **what each lesson should teach**, and **real 2025–26 companies/angles to research** for the block-7 industry case. Cases are *research targets* — verify the specifics with live search before writing (Rule 5 in BUILD_GUIDE). Do not assert a number you haven't checked.

Chapters 1–3 are **done** (see `chapters/ch01–03.js`). They are also the canonical examples of depth and voice — read them before writing 4+.

---

## Chapter 4 — Product Research for AI
**Through-line:** In an AI-saturated market the scarce thing is a real problem, not a model — find the workflow worth automating, not the demo worth tweeting.

- **4.1 Finding the Right Problem in an AI-saturated Market.** How to spot a workflow where AI creates durable value vs a thin "AI wrapper" that any incumbent can copy. The "is this a feature or a company?" test. Picking problems where being probabilistic is acceptable.
  - *Research angles:* the wave of YC / Antler / accelerator "AI for X" startups and which survive vs get crushed when incumbents ship the same feature; verticalized AI (legal=Harvey, support=Sierra/Decagon, sales) as examples of picking a deep workflow. Research what made one vertical agent defensible vs a wrapper.
- **4.2 User Research When the Product Is Probabilistic.** Researching for a product that's sometimes wrong: studying tolerance for error, trust, and the "good enough" bar per use case. Why you research the *failure* experience, not just the happy path.
  - *Research angles:* customer-support and coding-assistant adoption studies; how teams discovered users will tolerate a wrong answer if it's easy to verify/correct (ties to citations from Ch.1).

## Chapter 5 — Product Analytics & AI Metrics
**Through-line:** DAU lies for AI products; you measure quality, cost-per-task, and trust, or you're flying blind.

- **5.1 Beyond DAU: Evals, Quality, Cost-per-task.** The AI metric stack: eval scores, quality/faithfulness rate, cost-per-task, containment/deflection, hallucination rate. Why engagement can rise while the product gets worse.
  - *Research angles:* Klarna's quality-vs-cost lesson (already verified — reuse); how leading AI teams run eval suites; "evals are the new unit tests" industry shift in 2025.
- **5.2 Instrumenting an LLM Product.** What to log (prompt, retrieved context, output, user feedback, tool calls), how to catch a quality regression before users do, building the dashboard a PM actually watches.
  - *Research angles:* LLMOps tooling adoption (eval/observability platforms); the practice of logging-and-replaying production traffic.

## Chapter 6 — Product Planning & Prioritization
**Through-line:** You're roadmapping on shifting ground — plan around the model improving under you, not against a frozen spec.

- **6.1 Roadmapping When the Model Keeps Changing.** Don't build what the next model release will give you free ("model overhang"); build the data, distribution, and workflow moats that survive model upgrades. Sequencing bets when the base capability is a moving target.
  - *Research angles:* features that got wiped out by a frontier model release vs companies that built durable moats (proprietary data, workflow lock-in, distribution); the "GPT-wrapper got killed by the next model" pattern of 2024–25.

## Chapter 7 — AI PRDs & Documentation
**Through-line:** A PRD for a probabilistic feature specifies the quality bar, the evals, and the failure behavior — not a list of deterministic requirements.

- **7.1 Writing a PRD for a Non-deterministic Feature.** What's different about an AI PRD: define the eval set, the acceptable error rate, the failure/fallback behavior, the cost ceiling, and the human-in-the-loop points — instead of pixel-perfect specs. Include an annotated example PRD.
  - *Research angles:* publicly shared AI PRD templates / how AI-first companies write specs; tie back to the failure-mode and eval framing from Ch.1 and Ch.5.

## Chapter 8 — Cross-functional Communication
**Through-line:** Credibility with ML engineers comes from asking the right question, not from pretending to know the answer.

- **8.1 Talking to ML Engineers Without Faking It.** The questions that earn respect (about retrieval, evals, latency tails, tradeoffs — all from Ch.1–3) vs the moves that lose it (prescribing the stack). How to disagree productively and run a tense eng/PM decision.
  - *Research angles:* PM–eng collaboration norms at AI-first orgs; reuse the Cognition/Anthropic debate as a model of how to hold a technical disagreement well.

## Chapter 9 — Prototyping & Vibe Coding
**Through-line:** In 2026 a PM who can ship a working demo in a day wins arguments that slides never could.

- **9.1 v0, Lovable, Cursor, Claude — Ship a Demo in a Day.** What each tool is for, how a PM goes from idea to clickable prototype without an engineer, and where to stop (prototype ≠ production). What to build yourself vs delegate.
  - *Research angles:* Cursor (verified pricing/scale story — reuse), Vercel v0, Lovable, Claude/Claude Code adoption among non-engineers in 2025–26; the "PM ships the prototype" cultural shift.

## Chapter 10 — Prompting as a PM Skill
**Through-line:** The prompt is the spec — writing one precisely is product definition, not a party trick.

- **10.1 The Prompt Is the Spec.** Prompt patterns a PM should know (clear instructions, examples, output format, step-by-step, role/constraint setting), and how a precise prompt *is* a product requirement. Turning a fuzzy requirement into a deterministic-enough prompt.
  - *Research angles:* prompt-engineering best practices that stabilized by 2025–26; how "prompt = spec" shows up in real product workflows; eval-driven prompt iteration (ties to Ch.11).

## Chapter 11 — AI Product Improvement Loops
**Through-line:** AI products improve by closing the eval loop from user feedback to iteration, not by waiting for a bigger model.

- **11.1 Eval-driven Iteration.** The loop: ship → log → eval → find failure class → fix (prompt/retrieval/data) → re-eval. Why most quality gains come from retrieval/data/prompt fixes, not model swaps (callback to Ch.1's "model is rarely the bottleneck").
  - *Research angles:* how leading AI products run weekly eval-and-improve cycles; Perplexity's iterative ruleset self-improvement (verified earlier — reuse).

## Chapter 12 — Customer Comms & GTM for AI
**Through-line:** You sell a probability, not a guarantee — set expectations honestly or churn punishes you later.

- **12.1 Selling Probabilistic Outcomes Honestly.** Messaging an AI product without over-promising; the cost of "it just works" claims; framing accuracy/limits so trust survives the first mistake.
  - *Research angles:* Klarna's "700 agents" overclaim and walk-back (verified — reuse) as the cautionary tale; Cursor's pricing-communication damage (verified — reuse) as proof that *how* you communicate change matters as much as the change.

## Chapter 13 — AI PM Case Interviews
**Through-line:** The 2026 AI PM case rewards system-mapping and tradeoff-naming over feature brainstorming.

- **13.1 The 2026 AI PM Case Framework.** A repeatable approach: map the system (Ch.1 boxes-and-arrows) → find the bottleneck → name the tradeoff → define the metric → design the failure behavior. A full mock case solved end-to-end. This chapter explicitly stitches Chapters 1–12 into an interview-ready method.
  - *Research angles:* AI PM interview question patterns reported in 2025–26 (design an answer engine / support agent / RAG product); reuse the worked solutions from Ch.1–3 as the backbone.

## Chapter 14 — Portfolio & Positioning for 2026 Roles
**Through-line:** One shipped artifact beats ten bullet points — reading sharpens you, but a portfolio piece gets you hired.

- **14.1 The One Artifact That Gets You Hired.** What to build and show (a working AI prototype + a written teardown applying this course's frameworks), how to position experience for AI PM roles, and the 30-day plan to go from "read the course" to "have an offer." Honest: this is the payoff chapter — the others are setup.
  - *Research angles:* what AI-first companies actually screen for in PM candidates in 2026; the rise of "show me what you shipped" over resume bullets; using the Ch.9 vibe-coding skills to build the portfolio piece.

---

### A note the owner already flagged
The "crack a job in a month" goal needs **Chapters 9 (vibe coding), 13 (cases), and 14 (portfolio)** to actually convert reading into an offer. They are not optional bonus chapters — they are where studying becomes a hire. Keep their depth as high as the technical chapters.
