/* ===== Chapter 14 lessons — AI PM by Rohit Swerashi =====
   One JS object entry per lesson: "N.Y": `<full lesson html>`
   Keep the 7-block structure. End each entry's content with __NAV__ (build injects nav).
   NOTE: 14.3 is the FINAL lesson — its closing callout is the whole-course capstone. */

/* ---------------------------------------------------------------- 14.1 */
"14.1": `
<div class="wrap">
  <div class="les-kicker">Chapter 14 · Lesson 14.1</div>
  <h1 class="les-title">Positioning Yourself for AI PM Roles in 2026</h1>
  <div class="les-meta">
    <span class="pill">Career</span><span class="pill">~22 min read</span>
    <span class="pill">Prereq: Ch.13</span><span class="pill">Difficulty: core</span>
  </div>
  <p class="motto">Your résumé says "PM with 5 years' experience." So does everyone else's. In 2026 the AI PM role goes to the person who can prove they think in systems and ship — not the one with the longer title.</p>

  <p class="lead">You've built the skills (Ch.1–13). This chapter converts them into an offer, and it starts with positioning. The single biggest hiring shift of 2026 is the move from <em class="k">"here's what I would do" to "here's what I built."</em> This lesson teaches you to frame yourself around demonstrated capability — the system thinking, evals, and shipping this course gave you — instead of title and tenure, and to translate any background into credible AI-PM positioning.</p>

  <h2><span class="ix">1</span> Your Mandate</h2>
  <div class="sub">What you own in your own job search.</div>
  <p>Your mandate is to <strong>position on what you can demonstrably do, not on your title or years</strong>. You don't need an "AI PM" job already — most people breaking in don't have one. What you need is to credibly show the AI-PM thinking: reason about a real system, define quality with evals, point to something you shipped. The mistake is leading with pedigree ("Senior PM, 7 years") in a market that, by its own hiring managers' account, has stopped caring what you've read and started caring what you've built.</p>

  <h2><span class="ix">2</span> Your Responsibilities</h2>
  <div class="sub">What AI-first companies actually screen for — and what they ignore.</div>
  <table>
    <tr><th>They screen for</th><th>They discount</th></tr>
    <tr><td><strong>Technical literacy</strong> — can you reason about RAG, agents, evals? (Ch.1–3)</td><td>"Familiar with AI" / "AI-curious"</td></tr>
    <tr><td><strong>Eval and measurement thinking</strong> — how you define "done" and monitor it</td><td>"Data-driven" as a buzzword</td></tr>
    <tr><td><strong>Demonstrated shipping</strong> — "here's what I built," with outcomes</td><td>"Here's what I would do"</td></tr>
    <tr><td><strong>Tradeoff judgment</strong> — model-choice reasoning (Ch.1.3)</td><td>Long feature lists</td></tr>
    <tr><td><strong>The hidden three</strong> — monetization, inference cost, probabilistic design</td><td>Generic PM frameworks</td></tr>
  </table>
  <p>An analysis of dozens of PM job descriptions across the top AI companies (OpenAI, Anthropic, DeepMind, and peers) found they ask for people who have <em>operated</em> AI products — thought through eval design, made model-selection calls, mapped failure modes. That list is this course. Your positioning job is to make that obvious.</p>

  <h2><span class="ix">3</span> Metrics That Matter Here</h2>
  <div class="sub">How to gauge whether your positioning will land.</div>
  <table>
    <tr><th>Self-check</th><th>Strong</th><th>Weak</th></tr>
    <tr><td><strong>Can you name a real AI system you reasoned about?</strong></td><td>"I mapped a RAG pipeline and found retrieval was the bottleneck"</td><td>"I'm passionate about AI"</td></tr>
    <tr><td><strong>Do you have a shipped artifact?</strong></td><td>A working prototype + teardown (14.2)</td><td>A certificate</td></tr>
    <tr><td><strong>Do you pass the drive-vs-adjacent test?</strong></td><td>You can name architecture, evals, impact (Ch.13)</td><td>You were "involved in AI"</td></tr>
    <tr><td><strong>Does your past read as transferable judgment?</strong></td><td>Domain depth framed as AI-PM relevant</td><td>Just a title history</td></tr>
  </table>
  <div class="callout warn">
    <div class="ch">The trap — positioning on pedigree and buzzwords</div>
    <p>The losing résumé says "Senior PM · 7 years · passionate about AI · led cross-functional teams." Every word is about <em>title and intent</em>, none about <em>capability</em>. In a market screening for "what did you build and can you reason about it," that profile reads as generic — and gets filtered before the interview where you'd shine. <strong>Lead with proof, not pedigree.</strong></p>
  </div>

  <h2><span class="ix">4</span> How to Think Here</h2>
  <div class="sub">Reposition from what you <em>say</em> to what you can <em>prove</em>.</div>
  <div class="fig">
    <div class="fig-title">Reposition: from "says" to "proves"</div>
    <svg viewBox="0 0 520 240" xmlns="http://www.w3.org/2000/svg" font-family="Hanken Grotesk, sans-serif">
      <rect x="24" y="46" width="190" height="160" rx="12" fill="#b25000" opacity="0.08" stroke="#b25000" stroke-width="1.2"/>
      <text x="119" y="72" text-anchor="middle" font-size="12.5" font-weight="700" fill="#b25000">SAYS</text>
      <text x="119" y="89" text-anchor="middle" font-size="9.5" fill="#b25000">what you claim</text>
      <text x="40" y="116" font-size="10.5" fill="#1d1d1f">· "Senior PM, 7 yrs"</text>
      <text x="40" y="138" font-size="10.5" fill="#1d1d1f">· "passionate about AI"</text>
      <text x="40" y="160" font-size="10.5" fill="#1d1d1f">· "led cross-functional"</text>
      <text x="40" y="182" font-size="10.5" fill="#1d1d1f">· "familiar with AI"</text>
      <rect x="306" y="46" width="190" height="160" rx="12" fill="#0a7d3c" opacity="0.08" stroke="#0a7d3c" stroke-width="1.2"/>
      <text x="401" y="72" text-anchor="middle" font-size="12.5" font-weight="700" fill="#0a7d3c">PROVES</text>
      <text x="401" y="89" text-anchor="middle" font-size="9.5" fill="#0a7d3c">what you show</text>
      <text x="322" y="116" font-size="10.5" fill="#1d1d1f">· mapped a real AI system</text>
      <text x="322" y="138" font-size="10.5" fill="#1d1d1f">· wrote the evals</text>
      <text x="322" y="160" font-size="10.5" fill="#1d1d1f">· shipped an artifact</text>
      <text x="322" y="182" font-size="10.5" fill="#1d1d1f">· named the tradeoffs</text>
      <line x1="216" y1="126" x2="304" y2="126" stroke="#0058b0" stroke-width="1.7" marker-end="url(#p141)"/>
      <text x="260" y="118" text-anchor="middle" font-size="9" font-weight="700" fill="#0058b0">reposition</text>
      <defs><marker id="p141" markerWidth="8" markerHeight="8" refX="6" refY="3" orient="auto"><path d="M0,0 L6,3 L0,6 Z" fill="#0058b0"/></marker></defs>
    </svg>
    <div class="fig-cap">Hiring shifted from "what I would do" to "what I built." Move every line of your positioning from the left column (claims about title and intent) to the right (proof of capability and shipping).</div>
  </div>
  <p>Reposition with this sequence:</p>
  <ol>
    <li><strong>Lead with capability, not title.</strong> Open with what you can do and have built, not how senior you are.</li>
    <li><strong>Name a real AI system you can reason about</strong> — a RAG pipeline, an agent, an eval you'd write.</li>
    <li><strong>Show measurement thinking.</strong> Mention how you'd define "done" and monitor quality (the operational-maturity signal).</li>
    <li><strong>Point to a shipped artifact</strong> (the next lesson builds it).</li>
    <li><strong>Translate your past</strong> — frame prior experience as the same judgment applied in a new domain.</li>
  </ol>
  <div class="callout accent">
    <div class="ch">Say this in the interview (or the cover note)</div>
    <p>"I don't have an 'AI PM' title yet, but here's an AI feature I built and a teardown of how I'd take it to production — the system map, the bottleneck, the evals, and the failure design. I'd rather show you how I think than tell you my tenure."</p>
  </div>

  <h2><span class="ix">5</span> Frameworks to Deploy</h2>
  <div class="sub">Three positioning moves.</div>
  <h3>① Proof over pedigree</h3>
  <p>For every claim, ask: am I saying it or showing it? Replace "experienced AI PM" with "here's a system I reasoned about and an artifact I shipped." Companies report that candidates with real side projects get hired roughly <strong>three times more often</strong> — proof is not a nicety, it's the multiplier.</p>
  <h3>② The drive-vs-adjacent test</h3>
  <p>Position so you pass Chapter 13's bar: can you name the architecture, the eval metrics, and the business impact? If your story survives that probe, you read as someone who <em>drove</em> the work; if it collapses into vagueness, you read as adjacent. Build your positioning around things you can defend in depth.</p>
  <h3>③ Translate your background</h3>
  <p>A non-AI past is an asset, not an apology. Fintech, healthcare, design, marketing, support — each is <em class="k">domain depth</em> plus transferable judgment (user research, regulated-domain rigor, systems thinking). Frame it as "I bring X domain plus AI-PM capability," not "I'm switching from X." The best AI PMs come from everywhere; position the bridge, not the gap.</p>

  <h2><span class="ix">6</span> Worked Solution</h2>
  <div class="sub">Repositioning a real, non-obvious candidate.</div>
  <div class="callout">
    <div class="ch">The prompt</div>
    <p style="font-family:var(--font-ui);font-weight:600;">"You're a PM with 4 years in fintech and no 'AI PM' title, applying to AI PM roles. How do you position yourself?"</p>
  </div>
  <p><strong>Step 1 — Don't apologize for the missing title.</strong> The market is full of titled PMs who can't reason about a RAG pipeline. My edge is demonstrated AI-PM thinking plus a domain most AI companies want to enter.</p>
  <p><strong>Step 2 — Lead with proof.</strong> Open every application with the artifact: "Here's an AI feature I built and a teardown of how I'd ship it." That single link does more than any title line, because it's "what I built," not "what I'd do."</p>
  <p><strong>Step 3 — Show the AI-PM reasoning.</strong> In the teardown and interview, demonstrate the Chapter 1–13 spine: I map the system, I know retrieval is usually the bottleneck, I define quality with evals, I design the failure behavior. That's the operational maturity the job descriptions screen for.</p>
  <p><strong>Step 4 — Frame fintech as an asset.</strong> "I bring deep experience shipping in a regulated, high-trust domain — exactly the judgment an AI product needs around failure modes, accuracy bars, and honest expectation-setting." Domain depth plus AI capability, not a career gap.</p>
  <div class="callout good">
    <div class="ch">Why this wins</div>
    <p>You repositioned from "PM without the right title" to "someone who thinks like an AI PM, has shipped proof, and brings scarce domain depth." You led with what you built, passed the drive-vs-adjacent bar, and turned your background into an edge. That profile gets the interview the titled-but-vague candidate doesn't.</p>
  </div>

  <h2><span class="ix">7</span> Industry Case</h2>
  <div class="sub">What the top AI companies' job descriptions actually demand.</div>
  <h3>The 2026 AI PM job description, decoded</h3>
  <p>A widely-shared 2026 analysis reviewed dozens of PM job descriptions across roughly a dozen leading AI companies — OpenAI, Anthropic, Google DeepMind, Microsoft, AWS, Salesforce, Databricks, Scale AI, Cohere, and peers. The consistent finding: these roles ask for people who have <em>operated</em> AI products — who have <strong>designed evals, made model-selection decisions, and mapped failure modes before launch</strong>. The single biggest differentiator reported for 2026 is the shift from <em>"here's what I would do"</em> to <em>"here's what I built."</em> And beneath the posted requirements sit three rarely-advertised must-haves you now hold: <strong>monetization sense, inference-cost economics, and probabilistic design</strong> (Chapters 1, 5, 12, 4.2).</p>
  <p>The blunt version, echoed by hiring managers across the field: they don't care what you've read; they care what you've built — and candidates with real side projects get hired markedly more often. That is not a discouraging bar; it's a <em>fair</em> one. It means a self-taught candidate with a shipped artifact and genuine system thinking can out-compete a titled PM who only talks about AI. Your positioning job is simply to be unmistakably the former.</p>
  <ul>
    <li><strong>The JD is this course.</strong> Evals, model-choice reasoning, failure modes — Chapters 1–13, restated as requirements.</li>
    <li><strong>"Built" beats "would."</strong> The biggest 2026 unlock is demonstrated work over hypotheticals.</li>
    <li><strong>The hidden skills are yours.</strong> Monetization, cost economics, probabilistic design — you studied all three.</li>
  </ul>
  <div class="callout accent">
    <div class="ch">The PM takeaway</div>
    <p>Position on proof, not pedigree: a system you can reason about, evals you can write, an artifact you shipped, and a background framed as transferable judgment. The market is screening for exactly what this course built — so lead with what you built. Next, you build the artifact that makes it undeniable.</p>
  </div>

  <h2><span class="ix">✓</span> Check Yourself</h2>
  <div class="quiz" data-correct="2">
    <div class="q">You're transitioning into AI PM without the title. What's the strongest thing to lead your application with?</div>
    <div class="opt" data-i="0"><span class="l">A</span><span>Your years of general PM experience.</span></div>
    <div class="opt" data-i="1"><span class="l">B</span><span>A statement that you're passionate about AI.</span></div>
    <div class="opt" data-i="2"><span class="l">C</span><span>A working AI artifact you built plus a teardown showing how you'd ship it — "here's what I built," not "here's what I'd do."</span></div>
    <div class="opt" data-i="3"><span class="l">D</span><span>A list of AI courses and certificates you've completed.</span></div>
    <div class="qexp">The biggest 2026 hiring shift is from "what I would do" to "what I built." A shipped artifact plus a system-thinking teardown is proof of capability that titles, passion statements, and certificates can't match — and candidates with real side projects get hired far more often.</div>
  </div>
  <div class="quiz" data-correct="1">
    <div class="q">How should a candidate from a non-AI background (say, marketing) position that experience?</div>
    <div class="opt" data-i="0"><span class="l">A</span><span>Hide it and pretend to be a lifelong AI specialist.</span></div>
    <div class="opt" data-i="1"><span class="l">B</span><span>Frame it as transferable judgment plus domain depth — "I bring user-research and GTM strength, plus demonstrated AI-PM capability."</span></div>
    <div class="opt" data-i="2"><span class="l">C</span><span>Apologize for the career gap.</span></div>
    <div class="opt" data-i="3"><span class="l">D</span><span>Only apply to marketing roles.</span></div>
    <div class="qexp">A non-AI past is domain depth and transferable judgment, not a gap. The best AI PMs come from many backgrounds; position the bridge ("X domain + AI-PM capability") and pair it with proof you can reason about and ship AI products.</div>
  </div>
  <h2><span class="ix">✎</span> Apply It Yourself</h2>
  <div class="sub">No worked answer this time — this one's your rep. Give it 10 minutes before you move on.</div>
  <div class="callout">
    <div class="ch">Your problem</div>
    <p style="font-family:var(--font-ui);font-weight:600;">"You're applying to AI PM roles from a non-AI background (say, ops or marketing). Write the two-sentence opener for your application that leads with proof, not pedigree."</p>
  </div>
  <p><strong>Hints</strong> (peek only if you're stuck):</p>
  <ul>
    <li>Lead with what you built and can reason about, not your title.</li>
    <li>Frame your background as transferable judgment + domain depth.</li>
    <li>The trap: 'experienced PM, passionate about AI.'</li>
  </ul>
  <table>
    <tr><th>A strong answer...</th><th>A weak answer...</th></tr>
    <tr><td>Leads with a shipped artifact + system thinking; frames the background as an asset.</td><td>Opens with title and years.</td></tr>
    <tr><td>Passes the drive-vs-adjacent test (names architecture, evals, impact).</td><td>Stays vague and buzzwordy.</td></tr>
    <tr><td>Translates the old domain into AI-PM relevance.</td><td>Apologizes for the 'gap.'</td></tr>
  </table>
  <div class="callout accent">
    <div class="ch">Make it live</div>
    <p>Rewrite your actual LinkedIn headline from 'says' to 'proves.' Would a hiring manager screening for 'what did you build' stop on it?</p>
  </div>
  __NAV__
</div>
`,

/* ---------------------------------------------------------------- 14.2 */
"14.2": `
<div class="wrap">
  <div class="les-kicker">Chapter 14 · Lesson 14.2</div>
  <h1 class="les-title">Building the One Artifact That Gets You Hired</h1>
  <div class="les-meta">
    <span class="pill">Portfolio</span><span class="pill">~23 min read</span>
    <span class="pill">Prereq: 14.1, Ch.9</span><span class="pill">Difficulty: core</span>
  </div>
  <p class="motto">A bullet point says you can do the job. A working prototype with an honest teardown proves it. Build the one thing that ends the interview before it starts.</p>

  <p class="lead">Positioning (14.1) gets you noticed; the artifact gets you hired. The single highest-leverage thing you can build for an AI PM job search is one <em class="k">working prototype plus a written teardown</em> — proof you can both ship like a builder (Ch.9) and reason like an AI PM (Ch.1–13). In every studied interview loop, candidates who show a working prototype beat those who only describe one. This lesson is how to build that artifact so it does the same for you.</p>

  <h2><span class="ix">1</span> Your Mandate</h2>
  <div class="sub">What you own: producing one undeniable proof.</div>
  <p>Your mandate is to <strong>build a single artifact that makes the hiring decision obvious</strong> — not a deck, not an analysis of someone else's product, but a thing <em>you</em> built and can tear down. It has two inseparable halves: a working prototype (you can ship) and a written teardown (you can think). One without the other half-proves you; together they're the strongest signal you can send. The mandate is to make that artifact, ship it publicly, and lead with it.</p>

  <h2><span class="ix">2</span> Your Responsibilities</h2>
  <div class="sub">The two halves — build and think.</div>
  <table>
    <tr><th>Half</th><th>What it is</th><th>What it proves</th></tr>
    <tr><td><strong>The prototype</strong></td><td>A working, clickable AI feature solving one real problem (built with Ch.9 tools)</td><td>You can ship — not just spec</td></tr>
    <tr><td><strong>The teardown</strong></td><td>A one-page write-up applying the course frameworks</td><td>You can think like an AI PM</td></tr>
    <tr><td><strong>The teardown covers</strong></td><td>System map, bottleneck, tradeoff, the eval, the failure design, prototype-vs-production line</td><td>Ch.1, 4.2, 5, 9.3, 13</td></tr>
  </table>
  <p>The recurring advice from hiring managers is almost a spec for this artifact: <em>pick one narrow problem, build an AI prototype that solves it, get a handful of real users, and write a clear case study with metrics, tradeoffs, and failure modes.</em> That case study <strong>is</strong> the teardown. Build exactly that.</p>

  <h2><span class="ix">3</span> Metrics That Matter Here</h2>
  <div class="sub">What makes the artifact strong rather than just present.</div>
  <table>
    <tr><th>Signal</th><th>Strong</th><th>Weak</th></tr>
    <tr><td><strong>Real problem</strong></td><td>A genuine workflow worth automating (Ch.4)</td><td>A generic "AI chatbot" demo</td></tr>
    <tr><td><strong>System thinking in the teardown</strong></td><td>Map, bottleneck, tradeoff, eval, failure</td><td>Just screenshots</td></tr>
    <tr><td><strong>Honesty about limits</strong></td><td>Names what's prototype vs production (Ch.9.3)</td><td>Claims it's production-ready</td></tr>
    <tr><td><strong>It's yours</strong></td><td>You built and can defend every choice</td><td>A teardown of someone else's product</td></tr>
  </table>
  <div class="callout warn">
    <div class="ch">The trap — half an artifact</div>
    <p>Two common half-builds, each fatal. A <strong>polished prototype with no teardown</strong> proves you can vibe-code but not that you think like a PM — and vibe-coding alone is no longer rare (Ch.9). A <strong>slick teardown of someone else's product</strong> is analysis, not creation — it doesn't prove you can ship. You need both halves, and you need the teardown to be honest about the prototype-vs-production line (Ch.9.3), because claiming a demo is production is the tell of someone who doesn't know the difference.</p>
  </div>

  <h2><span class="ix">4</span> How to Think Here</h2>
  <div class="sub">The artifact is build + think — and you need both.</div>
  <div class="fig">
    <div class="fig-title">The artifact = prototype + teardown</div>
    <svg viewBox="0 0 520 250" xmlns="http://www.w3.org/2000/svg" font-family="Hanken Grotesk, sans-serif">
      <rect x="28" y="44" width="200" height="116" rx="12" fill="#0071e3" opacity="0.09" stroke="#0071e3" stroke-width="1.3"/>
      <text x="128" y="68" text-anchor="middle" font-size="12.5" font-weight="700" fill="#0058b0">PROTOTYPE</text>
      <text x="128" y="85" text-anchor="middle" font-size="9.5" fill="#0058b0">you can ship</text>
      <text x="44" y="110" font-size="10" fill="#1d1d1f">· a working AI feature</text>
      <text x="44" y="130" font-size="10" fill="#1d1d1f">· built in Lovable / v0</text>
      <text x="44" y="150" font-size="10" fill="#1d1d1f">· solves one real problem</text>
      <text x="260" y="108" text-anchor="middle" font-size="22" font-weight="700" fill="#1d1d1f">+</text>
      <rect x="292" y="44" width="200" height="116" rx="12" fill="#0a7d3c" opacity="0.09" stroke="#0a7d3c" stroke-width="1.3"/>
      <text x="392" y="68" text-anchor="middle" font-size="12.5" font-weight="700" fill="#0a7d3c">TEARDOWN</text>
      <text x="392" y="85" text-anchor="middle" font-size="9.5" fill="#0a7d3c">you can think</text>
      <text x="308" y="110" font-size="10" fill="#1d1d1f">· system map + bottleneck</text>
      <text x="308" y="130" font-size="10" fill="#1d1d1f">· tradeoff + the eval</text>
      <text x="308" y="150" font-size="10" fill="#1d1d1f">· failure + prod line</text>
      <rect x="96" y="186" width="328" height="40" rx="10" fill="#1d1d1f"/>
      <text x="260" y="211" text-anchor="middle" font-size="11.5" font-weight="700" fill="#ffffff">= proof you can BUILD and THINK like an AI PM</text>
      <line x1="128" y1="160" x2="210" y2="186" stroke="#86868b" stroke-width="1.3"/>
      <line x1="392" y1="160" x2="310" y2="186" stroke="#86868b" stroke-width="1.3"/>
    </svg>
    <div class="fig-cap">Neither half is enough alone: a prototype with no teardown proves only that you can vibe-code; a teardown with no prototype proves only that you can talk. Together they're the strongest signal an AI PM candidate can send.</div>
  </div>
  <p>Build the artifact like this:</p>
  <ol>
    <li><strong>Pick a real problem</strong> — a narrow workflow genuinely worth automating (Ch.4), not "an AI chatbot."</li>
    <li><strong>Build the one-flow prototype</strong> in Lovable or v0 (Ch.9) — real model call, one convincing flow, an honest failure shown.</li>
    <li><strong>Get a few real users</strong> — even ~20 — and capture what happened (Ch.11).</li>
    <li><strong>Write the teardown</strong> applying the framework: map, bottleneck, tradeoff, eval, failure, prototype-vs-production (Ch.13).</li>
    <li><strong>Ship it publicly</strong> — a link, not a PDF — and lead every application with it.</li>
  </ol>
  <div class="callout accent">
    <div class="ch">Say this in the interview</div>
    <p>"Here's a working AI feature I built and a one-page teardown: the system map, why retrieval is the bottleneck, the tradeoff I made, the eval I'd run, the failure behavior, and exactly what's prototype versus what production would need. I'd love to walk you through it."</p>
  </div>

  <h2><span class="ix">5</span> Frameworks to Deploy</h2>
  <div class="sub">Three rules for an artifact that gets you hired.</div>
  <h3>① Build and think, together</h3>
  <p>The prototype proves you ship; the teardown proves you reason. Insist on both halves. The combination is rare and decisive — most candidates have one or the other, and the loop rewards the one who has both.</p>
  <h3>② Put the whole course in the teardown</h3>
  <p>Use the teardown to demonstrate Chapters 1–13 in one page: system map (Ch.1), the bottleneck, the tradeoff, the metric/eval (Ch.5, Ch.7), the failure design (Ch.4.2), and the honest prototype-vs-production line (Ch.9.3). A teardown that hits those beats reads like someone who has shipped real AI products.</p>
  <h3>③ Honest beats polished</h3>
  <p>A teardown that names the limits — "here's where this would break at scale, here's the security work production needs" — out-credentials a flawless-looking demo. Naming the prototype-vs-production line (Ch.9.3) signals you understand the part that's actually hard, which is exactly what separates a hire from a tinkerer.</p>

  <h2><span class="ix">6</span> Worked Solution</h2>
  <div class="sub">A concrete artifact, start to finish.</div>
  <div class="callout">
    <div class="ch">The prompt</div>
    <p style="font-family:var(--font-ui);font-weight:600;">"What exactly should my AI PM portfolio artifact be, and how do I build it?"</p>
  </div>
  <p><strong>Step 1 — Pick one narrow, real problem.</strong> Say: "AI that drafts release notes from a raw changelog." It's specific, genuinely useful, and a workflow worth automating (Ch.4) — not a generic chatbot.</p>
  <div class="flow">
<span class="st">problem</span>    <span class="nt">draft release notes from a messy changelog (one narrow workflow)</span>
   <span class="ar">↓</span>
<span class="st">prototype</span>  <span class="nt">Lovable: paste changelog → get formatted notes · real model call · one flow (Ch.9)</span>
   <span class="ar">↓</span>
<span class="st">users</span>      <span class="nt">share it with ~20 people who write release notes; note what failed</span>
   <span class="ar">↓</span>
<span class="st">teardown</span>   <span class="nt">map · bottleneck · tradeoff · eval · failure · prototype-vs-production (Ch.13)</span>
   <span class="ar">↓</span>
<span class="st">ship</span>       <span class="nt">publish the link; lead every application with it</span>
  </div>
  <p><strong>Step 2 — Build the one flow.</strong> In Lovable: paste a changelog, get clean release notes back, with a real model call and an honest "edit before you publish" step (Ch.9.2). One convincing flow, not ten screens.</p>
  <p><strong>Step 3 — Get real users and write the teardown.</strong> Share it with ~20 people who actually write release notes; note where it stumbled. Then write one page: system map (input → parse changelog → generate → guard), the bottleneck (parsing messy input and format consistency), the tradeoff, the eval I'd run (format adherence + faithfulness on 50 real changelogs), the failure design (human edits before publish), and the prototype-vs-production line (auth, scale, cost, the security work — Ch.9.3).</p>
  <p><strong>Step 4 — Ship the link.</strong> Publish the prototype and the teardown together, and open every application and interview with it.</p>
  <div class="callout good">
    <div class="ch">Why this wins</div>
    <p>In a weekend you produced the rarest thing in an AI PM applicant pool: proof you can both build and think. The prototype shows you ship; the teardown demonstrates Chapters 1–13 on a real problem, honestly. That single artifact does more than your entire résumé — because it ends the "can this person actually do the job?" question before it's asked.</p>
  </div>

  <h2><span class="ix">7</span> Industry Case</h2>
  <div class="sub">Why working prototypes beat slide decks in the loop.</div>
  <h3>"Show me what you shipped" — the builders-not-talkers loop</h3>
  <p>The 2026 hiring signal is unambiguous: in studied AI PM interview loops, <strong>candidates who can show a working prototype outperform those who can only describe one</strong>, and you "almost always get in by showing one or two real projects with measurable outcomes instead of relying on titles." A frequently-quoted hiring manager's line captures the culture — they hire people who <em>build</em> with AI, not people who <em>talk</em> about it. The recommended minimum portfolio is precisely this lesson's artifact: pick a narrow problem, build an AI prototype, get real users, and write a case study with metrics, tradeoffs, and failure modes.</p>
  <p>This is the deepest reason the chapter exists. No-code tools (Ch.9) collapsed the cost of a working prototype from "hire engineers" to "an afternoon," which means the artifact is now achievable by anyone who studied this course — and therefore expected. The candidate who shows up with a built-and-torn-down artifact isn't doing something extraordinary; they're doing the one thing the market has decided separates a hire from a hopeful. Skip it, and you're competing on title against people competing on proof.</p>
  <ul>
    <li><strong>Prototypes beat decks, every loop.</strong> Showing a working thing out-performs describing one.</li>
    <li><strong>The minimum portfolio is the artifact.</strong> Narrow problem, prototype, real users, teardown with metrics and failure modes.</li>
    <li><strong>The cost collapsed, so the bar rose.</strong> No-code made the artifact achievable, which made it expected.</li>
  </ul>
  <div class="callout accent">
    <div class="ch">The PM takeaway</div>
    <p>One shipped artifact beats ten bullet points. Build a working prototype on a real problem and tear it down with the whole course's frameworks — honestly, including the prototype-vs-production line. Then lead with it. That artifact is the single highest-leverage thing you can do to get hired, and you now have every skill to build it.</p>
  </div>

  <h2><span class="ix">✓</span> Check Yourself</h2>
  <div class="quiz" data-correct="3">
    <div class="q">Which portfolio artifact is strongest for an AI PM job search?</div>
    <div class="opt" data-i="0"><span class="l">A</span><span>A polished slide deck describing an AI product idea.</span></div>
    <div class="opt" data-i="1"><span class="l">B</span><span>A teardown analyzing a famous company's AI product you didn't build.</span></div>
    <div class="opt" data-i="2"><span class="l">C</span><span>A working prototype with no written explanation.</span></div>
    <div class="opt" data-i="3"><span class="l">D</span><span>A working prototype you built on a real problem, plus a teardown applying the course frameworks and naming the prototype-vs-production line.</span></div>
    <div class="qexp">The hireable artifact is both halves: a prototype (proves you ship) and a teardown (proves you think), on a real problem, honest about limits. A deck or an analysis of someone else's product doesn't prove you can build; a prototype with no teardown doesn't prove you can reason.</div>
  </div>
  <div class="quiz" data-correct="0">
    <div class="q">Your prototype teardown should explicitly include which of these?</div>
    <div class="opt" data-i="0"><span class="l">A</span><span>The prototype-vs-production line — what the demo proves vs the scale, cost, and security work production would still need.</span></div>
    <div class="opt" data-i="1"><span class="l">B</span><span>A claim that it's already production-ready.</span></div>
    <div class="opt" data-i="2"><span class="l">C</span><span>Only the screenshots.</span></div>
    <div class="opt" data-i="3"><span class="l">D</span><span>Nothing about how it fails.</span></div>
    <div class="qexp">Naming what's prototype vs production (Ch.9.3) — scale, cost, security, reliability — signals you understand the genuinely hard part. Claiming a demo is production-ready is the tell of someone who doesn't know the difference; honesty about limits out-credentials a flawless-looking fake.</div>
  </div>
  <h2><span class="ix">✎</span> Apply It Yourself</h2>
  <div class="sub">No worked answer this time — this one's your rep. Give it 10 minutes before you move on.</div>
  <div class="callout">
    <div class="ch">Your problem</div>
    <p style="font-family:var(--font-ui);font-weight:600;">"Decide exactly what your AI PM portfolio artifact will be: pick one real, narrow problem and outline the prototype + the teardown you'd publish."</p>
  </div>
  <p><strong>Hints</strong> (peek only if you're stuck):</p>
  <ul>
    <li>One narrow workflow worth automating — not a generic chatbot.</li>
    <li>Build (prototype) + think (teardown) — you need both halves.</li>
    <li>The trap: a polished demo with no teardown, or a teardown of someone else's product.</li>
  </ul>
  <table>
    <tr><th>A strong answer...</th><th>A weak answer...</th></tr>
    <tr><td>Picks a narrow real problem; plans a one-flow prototype + a teardown applying the frameworks.</td><td>Plans a broad demo or analyzes a famous product.</td></tr>
    <tr><td>Teardown covers map, bottleneck, tradeoff, eval, failure, prod line.</td><td>Just screenshots.</td></tr>
    <tr><td>Honest about prototype-vs-production.</td><td>Claims it's production-ready.</td></tr>
  </table>
  <div class="callout accent">
    <div class="ch">Make it live</div>
    <p>Open Lovable or v0 and start the prototype for the artifact you just scoped. Ship a link this week, not a perfect product.</p>
  </div>
  __NAV__
</div>
`,

/* ---------------------------------------------------------------- 14.3 */
"14.3": `
<div class="wrap">
  <div class="les-kicker">Chapter 14 · Lesson 14.3</div>
  <h1 class="les-title">The 30-Day Plan: From Reading to Offer</h1>
  <div class="les-meta">
    <span class="pill">Portfolio</span><span class="pill">~22 min read</span>
    <span class="pill">Prereq: 14.1, 14.2</span><span class="pill">Difficulty: core</span>
  </div>
  <p class="motto">You've read the whole course. That's worth nothing until you ship something and apply. Here are the 30 days that turn "I studied AI PM" into "I have an offer."</p>

  <p class="lead">This is the payoff lesson, and it's honest: everything before it was setup. Knowledge you don't convert is wasted, and the gap between "I studied AI PM" and "I'm an AI PM" is closed by <em class="k">execution, not more reading</em>. This lesson is the concrete 30-day plan — week by week — that turns the skills from Chapters 1–13 and the artifact from 14.2 into applications, interviews, and an offer.</p>

  <h2><span class="ix">1</span> Your Mandate</h2>
  <div class="sub">What you own now: execution.</div>
  <p>Your mandate is to <strong>convert knowledge into proof and proof into applications</strong> — on a clock. The course gave you the thinking; no one is going to ship your artifact or send your applications for you. The honest framing the curriculum has pointed at all along: the other thirteen chapters were preparation, and this is where it pays off — <em class="k">if you execute</em>. The enemy now isn't a knowledge gap; it's the comfort of perpetual studying.</p>

  <h2><span class="ix">2</span> Your Responsibilities</h2>
  <div class="sub">The four weeks, and the output each must produce.</div>
  <table>
    <tr><th>Week</th><th>Focus</th><th>Output</th></tr>
    <tr><td><strong>Week 1</strong></td><td>Solidify the spine and pick the problem</td><td>Re-skim Ch.1–3; one narrow problem chosen (Ch.4)</td></tr>
    <tr><td><strong>Week 2</strong></td><td>Build the prototype</td><td>A working one-flow AI feature (Ch.9)</td></tr>
    <tr><td><strong>Week 3</strong></td><td>Teardown and reposition</td><td>The teardown written; résumé/LinkedIn on "proves not says"; artifact published</td></tr>
    <tr><td><strong>Week 4</strong></td><td>Practice cases and apply</td><td>Mock cases run (Ch.13); applications sent with the link</td></tr>
  </table>
  <p>Notice the shape: you stop consuming after Week 1. Weeks 2–4 are pure output — building, writing, practicing, applying. That ratio (one week in, three weeks out) is the whole point.</p>

  <h2><span class="ix">3</span> Metrics That Matter Here</h2>
  <div class="sub">How to tell the plan is working.</div>
  <table>
    <tr><th>Metric</th><th>Reads as</th><th>Why it matters</th></tr>
    <tr><td><strong>Artifact shipped?</strong></td><td>Is the prototype + teardown live by end of Week 3?</td><td>No artifact, no edge — it's the whole plan</td></tr>
    <tr><td><strong>Can you run a case cold?</strong></td><td>Framework on a fresh prompt without notes (Ch.13)</td><td>Interview-ready, not just knowledgeable</td></tr>
    <tr><td><strong>Applications sent</strong></td><td>Real roles applied to, led by the artifact</td><td>Offers require applying — obvious, often skipped</td></tr>
    <tr><td><strong>Interview conversion + learnings</strong></td><td>Loops entered; what each one taught you</td><td>Early interviews are the best feedback you'll get</td></tr>
  </table>
  <div class="callout warn">
    <div class="ch">The trap — perpetual learning</div>
    <p>The most common failure of motivated people is the comfortable one: re-reading, taking another course, "getting ready" — instead of shipping and applying. You will never feel fully ready, and the artifact will never feel perfect (it's a prototype, not production — Ch.9.3). <strong>The plan only works if you ship before you feel ready and apply before the artifact is "done."</strong> Studying more is procrastination wearing a productive costume.</p>
  </div>

  <h2><span class="ix">4</span> How to Think Here</h2>
  <div class="sub">Thirty days, front-loaded with one week of prep and three of output.</div>
  <div class="fig">
    <div class="fig-title">The 30-day plan: reading → offer</div>
    <svg viewBox="0 0 520 210" xmlns="http://www.w3.org/2000/svg" font-family="Hanken Grotesk, sans-serif">
      <rect x="14" y="58" width="112" height="78" rx="9" fill="#ffffff" stroke="#1d1d1f" stroke-width="1.2"/>
      <text x="70" y="82" text-anchor="middle" font-size="11.5" font-weight="700" fill="#1d1d1f">Week 1</text>
      <text x="70" y="100" text-anchor="middle" font-size="9.5" fill="#1d1d1f">Pick the problem</text>
      <text x="70" y="118" text-anchor="middle" font-size="8.5" fill="#86868b">re-skim Ch.1–3</text>
      <rect x="140" y="58" width="112" height="78" rx="9" fill="#0071e3" opacity="0.10" stroke="#0071e3" stroke-width="1.3"/>
      <text x="196" y="82" text-anchor="middle" font-size="11.5" font-weight="700" fill="#0058b0">Week 2</text>
      <text x="196" y="100" text-anchor="middle" font-size="9.5" fill="#0058b0">Build the prototype</text>
      <text x="196" y="118" text-anchor="middle" font-size="8.5" fill="#0058b0">Ch.9</text>
      <rect x="266" y="58" width="112" height="78" rx="9" fill="#ffffff" stroke="#1d1d1f" stroke-width="1.2"/>
      <text x="322" y="82" text-anchor="middle" font-size="11.5" font-weight="700" fill="#1d1d1f">Week 3</text>
      <text x="322" y="100" text-anchor="middle" font-size="9.5" fill="#1d1d1f">Teardown + position</text>
      <text x="322" y="118" text-anchor="middle" font-size="8.5" fill="#86868b">Ch.13–14</text>
      <rect x="392" y="58" width="112" height="78" rx="9" fill="#0a7d3c" opacity="0.10" stroke="#0a7d3c" stroke-width="1.3"/>
      <text x="448" y="82" text-anchor="middle" font-size="11.5" font-weight="700" fill="#0a7d3c">Week 4</text>
      <text x="448" y="100" text-anchor="middle" font-size="9.5" fill="#0a7d3c">Practice + apply</text>
      <text x="448" y="118" text-anchor="middle" font-size="8.5" fill="#0a7d3c">Ch.13</text>
      <line x1="126" y1="97" x2="140" y2="97" stroke="#86868b" stroke-width="1.4" marker-end="url(#p143)"/>
      <line x1="252" y1="97" x2="266" y2="97" stroke="#86868b" stroke-width="1.4" marker-end="url(#p143)"/>
      <line x1="378" y1="97" x2="392" y2="97" stroke="#86868b" stroke-width="1.4" marker-end="url(#p143)"/>
      <text x="260" y="166" text-anchor="middle" font-size="9.5" fill="#86868b">one week in, three weeks out — reading becomes an offer</text>
      <defs><marker id="p143" markerWidth="7" markerHeight="7" refX="5" refY="3" orient="auto"><path d="M0,0 L5,3 L0,6 Z" fill="#86868b"/></marker></defs>
    </svg>
    <div class="fig-cap">Four weeks: pick the problem, build the prototype, write the teardown and reposition, then practice cases and apply. Most of the plan is output — the only week you spend consuming is the first.</div>
  </div>
  <p>Run the 30 days like this:</p>
  <ol>
    <li><strong>Week 1 — Solidify and pick.</strong> Re-skim the technical spine (Ch.1–3) and choose one narrow, real problem for your artifact (Ch.4).</li>
    <li><strong>Week 2 — Build.</strong> Ship the one-flow prototype in Lovable or v0 (Ch.9). Done, not perfect.</li>
    <li><strong>Week 3 — Teardown and reposition.</strong> Write the teardown (Ch.13), rewrite your résumé and LinkedIn on "proves not says" (14.1), publish the artifact.</li>
    <li><strong>Week 4 — Practice and apply.</strong> Run the case framework cold on mock prompts (Ch.13); apply to real roles, leading with the artifact link.</li>
    <li><strong>Then keep going.</strong> Early interviews are feedback; iterate the artifact and the pitch and reapply.</li>
  </ol>
  <div class="callout accent">
    <div class="ch">Say this to yourself on Day 1</div>
    <p>"I'm done studying for now. In four weeks I will have a shipped artifact, a repositioned profile, and applications out — and I'll learn the rest from real interviews. Ready is something I'll become by doing, not by reading one more thing."</p>
  </div>

  <h2><span class="ix">5</span> Frameworks to Deploy</h2>
  <div class="sub">Three rules to keep the plan honest.</div>
  <h3>① Ship beats study</h3>
  <p>After Week 1, you build and apply — you do not return to consuming content. The marginal value of one more course is near zero next to one shipped artifact. When you feel the pull to "learn a bit more first," recognize it as the procrastination it is and build instead.</p>
  <h3>② The artifact is the application</h3>
  <p>Lead every résumé, message, and interview with the artifact link (14.2). It does the persuading that bullet points can't. An application without your artifact is competing on title; one with it is competing on proof — and proof wins.</p>
  <h3>③ Apply before you feel ready</h3>
  <p>The artifact and the case framework <em>are</em> ready; your feeling of readiness is lagging reality. Early interviews are the fastest way to learn what companies actually ask (and to fix your pitch). Treat the first few loops as paid feedback, not pass/fail — applying is itself part of the learning.</p>

  <h2><span class="ix">6</span> Worked Solution</h2>
  <div class="sub">What you literally do tomorrow.</div>
  <div class="callout">
    <div class="ch">The prompt</div>
    <p style="font-family:var(--font-ui);font-weight:600;">"I've just finished the course. What do I actually do tomorrow — and over the next month?"</p>
  </div>
  <p><strong>Tomorrow (Week 1).</strong> Don't re-read a chapter. Write down three real workflows you'd like an AI to handle, pick the narrowest genuinely-useful one (Ch.4), and write the one sentence the prototype must prove. Spend the rest of the week re-skimming Ch.1–3 only to sharpen how you'll reason about it.</p>
  <p><strong>Week 2 — Build.</strong> Open Lovable or v0 and build that one flow with a real model call (Ch.9). Stop when it's clickable and proves the one thing; resist polishing. Show it to ~20 real users and note what broke.</p>
  <p><strong>Week 3 — Teardown and reposition.</strong> Write the one-page teardown — map, bottleneck, tradeoff, eval, failure, prototype-vs-production (Ch.13, Ch.9.3). Rewrite your résumé and LinkedIn from "says" to "proves" (14.1). Publish the prototype and teardown at one link.</p>
  <p><strong>Week 4 — Practice and apply.</strong> Each morning, run the five-step framework cold on one mock prompt (Ch.13). Each afternoon, apply to real AI PM roles, opening with your artifact link. Book any interview you can; treat early ones as feedback.</p>
  <div class="callout good">
    <div class="ch">Why this wins</div>
    <p>In thirty days you go from "finished a course" to "has a shipped artifact, a repositioned profile, case fluency, and live applications" — the exact profile the 2026 market hires. You converted knowledge into proof and proof into interviews, on a clock, instead of studying indefinitely. That conversion is the whole job of this final chapter.</p>
  </div>

  <h2><span class="ix">7</span> Industry Case</h2>
  <div class="sub">How people actually break in — and why this plan mirrors it.</div>
  <h3>The build-and-apply path that's working in 2026</h3>
  <p>The consistent advice from people who broke into AI PM in 2025–26 is strikingly close to this plan: <em>stop collecting certificates and start shipping</em>; build and launch your own AI side project; post your breakdowns publicly; and "fail a few interviews early — it's the fastest way to learn what companies are actually asking." The guidance is blunt that the bottleneck is execution, not knowledge: <strong>in 2026, hiring teams don't care what you've read; they care what you've built.</strong> Some break-in guides estimate a few months of part-time effort end to end — and the kernel of every one of them is a shipped artifact plus real applications, which is exactly the 30-day sprint above (the rest is iteration and interviewing).</p>
  <p>The reason this works is the through-line of the whole course, arriving at its conclusion: the model was never the bottleneck, the title was never the moat, and the demo was never the product. What compounds is judgment you can demonstrate and work you can show. This plan simply forces the demonstration — it takes everything Chapters 1 through 13 taught and makes you <em>prove</em> it, on a timeline, to the people deciding whether you can do the job.</p>
  <ul>
    <li><strong>Execution is the bottleneck.</strong> Knowledge is necessary and no longer sufficient; shipping and applying is the gap most never cross.</li>
    <li><strong>The path is build → show → apply → iterate.</strong> Every credible break-in account reduces to this loop.</li>
    <li><strong>Early interviews are fuel, not verdicts.</strong> Failing a few fast teaches you more than another month of reading.</li>
  </ul>
  <div class="callout accent">
    <div class="ch">The PM takeaway</div>
    <p>Reading sharpened you; a shipped artifact and sent applications get you hired. Run the 30 days: pick, build, tear down and reposition, practice and apply — then iterate from real interviews. You have every skill this requires. The only thing left is to do it.</p>
  </div>

  <h2><span class="ix">✓</span> Check Yourself</h2>
  <div class="quiz" data-correct="1">
    <div class="q">You've finished the course and feel you should study more before applying. What's the right move?</div>
    <div class="opt" data-i="0"><span class="l">A</span><span>Take two more courses until you feel fully ready.</span></div>
    <div class="opt" data-i="1"><span class="l">B</span><span>Ship the artifact and start applying — readiness comes from doing and from real interviews, not from more reading.</span></div>
    <div class="opt" data-i="2"><span class="l">C</span><span>Wait until the prototype is production-perfect.</span></div>
    <div class="opt" data-i="3"><span class="l">D</span><span>Re-read every chapter twice.</span></div>
    <div class="qexp">Perpetual learning is the comfortable trap. In 2026 hiring cares what you built, not what you read, and you'll never feel "ready." Ship the artifact (it's a prototype, not production), apply, and let early interviews teach you the rest — applying is part of the learning.</div>
  </div>
  <div class="quiz" data-correct="2">
    <div class="q">In the 30-day plan, when do you stop consuming content and switch to pure output?</div>
    <div class="opt" data-i="0"><span class="l">A</span><span>Never — keep studying throughout.</span></div>
    <div class="opt" data-i="1"><span class="l">B</span><span>Only in the final week.</span></div>
    <div class="opt" data-i="2"><span class="l">C</span><span>After Week 1 — Weeks 2–4 are building, writing, practicing, and applying.</span></div>
    <div class="opt" data-i="3"><span class="l">D</span><span>You never produce output, only study.</span></div>
    <div class="qexp">The plan is one week in, three weeks out: Week 1 solidifies and picks the problem; Weeks 2–4 are pure output — build the prototype, write the teardown and reposition, then practice cases and apply. The output-heavy ratio is the entire point.</div>
  </div>

  <h2><span class="ix">✎</span> Apply It Yourself</h2>
  <div class="sub">No worked answer this time — this one's your rep. Give it 10 minutes before you move on.</div>
  <div class="callout">
    <div class="ch">Your problem</div>
    <p style="font-family:var(--font-ui);font-weight:600;">"You just finished this course. Write your concrete Week 1: the one problem you'll build on, and what you'll do in each of the next three weeks to reach applications."</p>
  </div>
  <p><strong>Hints</strong> (peek only if you're stuck):</p>
  <ul>
    <li>One week in (solidify + pick), three weeks out (build, teardown + position, apply).</li>
    <li>The artifact is the application — lead every submission with the link.</li>
    <li>The trap: studying more instead of shipping and applying.</li>
  </ul>
  <table>
    <tr><th>A strong answer...</th><th>A weak answer...</th></tr>
    <tr><td>Commits to a problem now; plans build → teardown + reposition → practice + apply.</td><td>Plans to 'study more first.'</td></tr>
    <tr><td>Sets a ship date for the artifact, not a 'when it's perfect.'</td><td>Waits to feel ready.</td></tr>
    <tr><td>Schedules real applications + mock cases.</td><td>Never actually applies.</td></tr>
  </table>
  <div class="callout accent">
    <div class="ch">Make it live</div>
    <p>Do Week 1's first step today: write down three real workflows you'd automate and circle the narrowest useful one. That's the start.</p>
  </div>

  <div class="callout good" style="margin-top:40px;">
    <div class="ch">Course complete — you're ready</div>
    <p>That's the whole course. You built the technical spine (Ch.1–3: systems, agents, the data structures underneath), the AI-PM craft (Ch.4–12: research, metrics, planning, PRDs, communication, prototyping, prompting, improvement loops, and honest GTM), and the conversion (Ch.13 interviews, Ch.14 portfolio). One thread ran through all of it: <strong>the model is rarely the bottleneck — your judgment, your evals, your tradeoffs, and what you ship are.</strong> You can now map any AI system, find where it breaks, name the tradeoff, measure what matters, and prove it with a working artifact. Reading got you here. Now go build the one thing, reposition, and apply — that's what turns this course into an offer. Good luck out there.</p>
  </div>
  __NAV__
</div>
`