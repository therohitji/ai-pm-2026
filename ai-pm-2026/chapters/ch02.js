/* ===== Chapter 02 lessons — AI PM by Rohit Swerashi =====
   One JS object entry per lesson: "N.Y": `<full lesson html>`
   Keep the 7-block structure. End each entry's content with __NAV__ (build injects nav). */

/* ---------------------------------------------------------------- 2.1 */
"2.1": `
<div class="wrap">
  <div class="les-kicker">Chapter 2 · Lesson 2.1</div>
  <h1 class="les-title">What an Agent Actually Is</h1>
  <div class="les-meta">
    <span class="pill">Agentic architecture</span><span class="pill">~26 min read</span>
    <span class="pill">Prereq: Ch.1</span><span class="pill">Difficulty: core</span>
  </div>
  <p class="motto">"Let's make it an agent" sounds like an upgrade. It's actually a decision to hand the model the steering wheel — and every extra mile it drives alone is another mile something can go wrong.</p>

  <p class="lead">In 2026 every product team wants "agents." Most don't need them, and the ones that do underestimate the cost. This chapter's single argument, which every lesson reinforces: <strong>agency is a liability you add on purpose, not a feature you switch on.</strong> Before you can decide how much autonomy to grant, you have to understand exactly what an agent is — and why each loop it runs alone compounds risk.</p>

  <h2><span class="ix">1</span> Your Mandate</h2>
  <div class="sub">What you own when the architecture turns agentic.</div>
  <p>Your mandate is to decide <strong>how long a leash the model gets</strong> — and to design what happens when it pulls on it. A plain LLM call answers once and stops; you can inspect the output before anything happens. An agent <em>acts</em>: it calls tools, takes steps, and changes the world, often many times before a human sees anything. Your job is to decide which actions it may take unsupervised, where a human must approve, and when it must stop and ask for help.</p>

  <h2><span class="ix">2</span> Your Responsibilities</h2>
  <div class="sub">An agent is three parts. You own the boundaries of each.</div>
  <table>
    <tr><th>Part</th><th>What it is</th><th>What you, the PM, decide</th></tr>
    <tr><td><strong>The loop</strong></td><td>LLM decides → acts → observes → repeats</td><td>The stopping condition and max steps</td></tr>
    <tr><td><strong>Tools</strong></td><td>What it can actually <em>do</em> (search, write, call APIs)</td><td>Which tools it gets — its blast radius (Lesson 2.3)</td></tr>
    <tr><td><strong>Memory</strong></td><td>What it remembers within and across tasks</td><td>What's worth persisting vs what's noise/risk</td></tr>
  </table>
  <p>The most important boundary you own is the loop's <strong>exit conditions</strong>: when does it stop, escalate to a human, or admit it's stuck? A loop with no good exit is how agents burn money spinning, or confidently "complete" a task they actually failed.</p>

  <h2><span class="ix">3</span> Metrics That Matter Here</h2>
  <table>
    <tr><th>Metric</th><th>Reads as</th><th>Why you watch it</th></tr>
    <tr><td><strong>Autonomous completion rate</strong></td><td>% of tasks finished correctly with no human</td><td>The actual value of the agent</td></tr>
    <tr><td><strong>Steps per task</strong></td><td>How many loop iterations to finish</td><td>More steps = more cost + more chances to derail</td></tr>
    <tr><td><strong>Escalation quality</strong></td><td>When it hands off, is the handoff useful?</td><td>A bad handoff is worse than no agent</td></tr>
    <tr><td><strong>Cost per task</strong></td><td>Tokens × steps × tool calls</td><td>Loops multiply cost — a 10-step agent is ~10× a single call</td></tr>
    <tr><td><strong>Compounding error rate</strong></td><td>Failures that snowball across steps</td><td>The defining failure mode of agents</td></tr>
  </table>

  <h2><span class="ix">4</span> How to Think Here</h2>
  <div class="sub">Picture the loop — then picture it failing a little, every step.</div>
  <div class="fig">
    <div class="fig-title">The agent loop</div>
    <svg viewBox="0 0 520 290" xmlns="http://www.w3.org/2000/svg" font-family="Hanken Grotesk, sans-serif">
      <rect x="195" y="22" width="130" height="44" rx="9" fill="#ffffff" stroke="#1d1d1f" stroke-width="1.3"/>
      <text x="260" y="42" text-anchor="middle" font-size="12.5" font-weight="700" fill="#1d1d1f">1 · Perceive</text>
      <text x="260" y="58" text-anchor="middle" font-size="10" fill="#86868b">read state / goal</text>
      <rect x="372" y="120" width="130" height="48" rx="9" fill="#ffffff" stroke="#1d1d1f" stroke-width="1.3"/>
      <text x="437" y="140" text-anchor="middle" font-size="12.5" font-weight="700" fill="#1d1d1f">2 · Decide</text>
      <text x="437" y="156" text-anchor="middle" font-size="10" fill="#86868b">LLM picks next action</text>
      <rect x="195" y="222" width="130" height="48" rx="9" fill="#0071e3" opacity="0.10" stroke="#0071e3" stroke-width="1.3"/>
      <text x="260" y="242" text-anchor="middle" font-size="12.5" font-weight="700" fill="#0058b0">3 · Act</text>
      <text x="260" y="258" text-anchor="middle" font-size="10" fill="#0058b0">call a tool / change world</text>
      <rect x="18" y="120" width="130" height="48" rx="9" fill="#ffffff" stroke="#1d1d1f" stroke-width="1.3"/>
      <text x="83" y="140" text-anchor="middle" font-size="12.5" font-weight="700" fill="#1d1d1f">4 · Observe</text>
      <text x="83" y="156" text-anchor="middle" font-size="10" fill="#86868b">read the result</text>
      <path d="M325,46 Q420,55 437,118" fill="none" stroke="#86868b" stroke-width="1.4" marker-end="url(#ar)"/>
      <path d="M437,168 Q400,235 327,246" fill="none" stroke="#86868b" stroke-width="1.4" marker-end="url(#ar)"/>
      <path d="M195,246 Q100,235 83,170" fill="none" stroke="#86868b" stroke-width="1.4" marker-end="url(#ar)"/>
      <path d="M83,118 Q120,55 193,44" fill="none" stroke="#86868b" stroke-width="1.4" marker-end="url(#ar)"/>
      <text x="260" y="150" text-anchor="middle" font-size="11" font-weight="800" fill="#1d1d1f">LOOP</text>
      <text x="260" y="168" text-anchor="middle" font-size="10" fill="#b25000" font-weight="600">until done — or stuck</text>
      <defs><marker id="ar" markerWidth="8" markerHeight="8" refX="6" refY="3" orient="auto"><path d="M0,0 L6,3 L0,6 Z" fill="#86868b"/></marker></defs>
    </svg>
    <div class="fig-cap">A plain LLM call runs steps 1–2 once. An agent loops 3→4→1→2 until a stopping condition fires. That repetition is the whole difference — and the whole risk.</div>
  </div>
  <p>Now the part nobody puts on the slide. If each step is 95% reliable, the chance the <em>whole</em> task succeeds is 0.95 multiplied by itself once per step. Errors compound:</p>
  <div class="fig">
    <div class="fig-title">Why long agent runs get unreliable fast (95% reliable per step)</div>
    <svg viewBox="0 0 520 240" xmlns="http://www.w3.org/2000/svg" font-family="Hanken Grotesk, sans-serif">
      <line x1="55" y1="195" x2="500" y2="195" stroke="#1d1d1f" stroke-width="1.2"/>
      <line x1="55" y1="195" x2="55" y2="25" stroke="#1d1d1f" stroke-width="1.2"/>
      <text x="277" y="226" text-anchor="middle" font-size="11" fill="#86868b">number of steps in the loop →</text>
      <text x="24" y="110" text-anchor="middle" font-size="11" fill="#86868b" transform="rotate(-90 24 110)">end-to-end success</text>
      <line x1="55" y1="35" x2="500" y2="35" stroke="#0a7d3c" stroke-dasharray="4 4" stroke-width="1"/>
      <text x="498" y="31" text-anchor="end" font-size="9" fill="#0a7d3c">100%</text>
      <polyline points="55,43 100,51 145,59 190,66 235,73 280,80 325,86 370,92 415,98 460,104 495,108" fill="none" stroke="#0071e3" stroke-width="2.4"/>
      <circle cx="100" cy="51" r="3.5" fill="#0071e3"/><text x="100" y="44" text-anchor="middle" font-size="9" fill="#1d1d1f">1 step 95%</text>
      <circle cx="280" cy="80" r="3.5" fill="#b25000"/><text x="280" y="73" text-anchor="middle" font-size="9" fill="#b25000">10 steps ≈60%</text>
      <circle cx="495" cy="108" r="3.5" fill="#b25000"/><text x="478" y="120" text-anchor="end" font-size="9" fill="#b25000">20 steps ≈36%</text>
    </svg>
    <div class="fig-cap">Even at 95% per step, a 20-step agent succeeds barely a third of the time. This is why "give it more autonomy" so often makes the product worse, not better.</div>
  </div>

  <h2><span class="ix">5</span> Frameworks to Deploy</h2>
  <h3>① Workflow vs Agent</h3>
  <p>If you know the steps in advance, build a <strong>workflow</strong> — fixed, predictable, debuggable. Use an <strong>agent</strong> only when the path genuinely can't be known ahead of time and must be decided at runtime. Most "agent" requests are really workflows in disguise. Workflows are cheaper, faster, and far more reliable. <em class="k">Reach for an agent last, not first.</em></p>
  <h3>② The autonomy leash (levels 0–3)</h3>
  <p>Level 0: suggests, human does everything. Level 1: drafts, human approves each action. Level 2: acts, human reviews after. Level 3: fully autonomous. <strong>Start low, earn each level with evidence.</strong> You can always loosen the leash; tightening it after a public failure is much more painful.</p>
  <h3>③ Human-in-the-loop checkpoints</h3>
  <p>Place a mandatory human approval before any <em>irreversible</em> or <em>high-blast-radius</em> action (sending money, deleting data, emailing a customer). The agent can do everything up to that line autonomously. This captures most of the value while capping the downside.</p>

  <h2><span class="ix">6</span> Worked Solution</h2>
  <div class="callout">
    <div class="ch">The prompt</div>
    <p style="font-family:var(--font-ui);font-weight:600;">"Our support chatbot answers questions. Leadership wants to make it an 'agent' that can also issue refunds and change orders. Design it."</p>
  </div>
  <p><strong>Step 1 — Separate the easy upgrade from the dangerous one.</strong> Answering questions is read-only and reversible. Issuing refunds and changing orders are <em>write</em> actions with real money and irreversible consequences. These are not the same risk class and shouldn't get the same autonomy.</p>
  <p><strong>Step 2 — Set the leash per action:</strong></p>
  <ul>
    <li><strong>Answer / look up account:</strong> Level 3, fully autonomous. Low blast radius.</li>
    <li><strong>Issue small refund (under a threshold) for clear-cut cases:</strong> Level 2 — agent acts, logged and sampled for review.</li>
    <li><strong>Large refund / order change / anything ambiguous:</strong> Level 1 — agent prepares it, human approves. Hard checkpoint.</li>
  </ul>
  <p><strong>Step 3 — Bound the loop.</strong> Cap steps, and define the exit: if confidence drops or it loops twice without progress, hand off to a human with a clean summary of what it tried. <strong>A confident wrong refund costs more than a slow human one.</strong></p>
  <p><strong>Step 4 — Metric:</strong> autonomous completion rate <em>and</em> escalation quality. Watch for refund-error rate as the canary; if it ticks up, tighten the leash before it becomes a headline.</p>
  <div class="callout good">
    <div class="ch">Why this wins</div>
    <p>You didn't say "yes, make it an agent" or "no, too risky." You graded autonomy by blast radius, put hard checkpoints on irreversible actions, and bounded the loop. That's owning the leash — the core PM job in agentic products.</p>
  </div>

  <h2><span class="ix">7</span> Industry Case</h2>
  <div class="sub">Real company, real autonomy arc — including the walk-back.</div>
  <h3>Klarna — the most public lesson in "how much autonomy is too much"</h3>
  <p>In February 2024 Klarna launched an OpenAI-powered customer-service assistant and posted numbers that stunned the industry: it handled <strong>2.3 million chats in its first month — roughly two-thirds of all customer conversations</strong> — cut average resolution time from about 11 minutes to 2, and was framed as doing the work of around <strong>700 full-time agents</strong>, with a projected ~$40M profit impact. The agentic dream, realized.</p>
  <p>Then came the second chapter. By 2025 Klarna publicly dialed it back, reintroducing human agents and letting customers always reach a person. The CEO acknowledged that pushing cost-driven automation had led to <strong>lower quality</strong> on the harder cases. They moved to a <em>hybrid</em>: AI runs the easy tier-1 volume autonomously; humans handle the moments that matter.</p>
  <ul>
    <li><strong>Autonomy paid off — up to a point.</strong> For the high-volume, low-stakes majority, full autonomy was a massive win. That part was real and durable.</li>
    <li><strong>The walk-back wasn't failure — it was calibration.</strong> They'd set the leash too long on complex cases. The fix was a checkpoint (escalate to humans), not abandoning the agent.</li>
    <li><strong>Notice what broke: quality on the tail.</strong> Same lesson as Chapter 1's p95 — the hard minority is where over-automation hurts most.</li>
  </ul>
  <div class="callout accent">
    <div class="ch">The PM takeaway</div>
    <p>The most-cited agent deployment in the world ended up exactly where this lesson points: <strong>autonomous on the easy majority, human-checkpointed on the hard tail.</strong> If Klarna had to find that line the expensive way, you can design for it from day one.</p>
  </div>

  <h2><span class="ix">✓</span> Check Yourself</h2>
  <div class="quiz" data-correct="1">
    <div class="q">A task has a known, fixed sequence of 5 steps every time. Should you build an agent?</div>
    <div class="opt" data-i="0"><span class="l">A</span><span>Yes — agents are more modern.</span></div>
    <div class="opt" data-i="1"><span class="l">B</span><span>No — a fixed sequence is a workflow; it's cheaper, faster, and more reliable than an agent.</span></div>
    <div class="opt" data-i="2"><span class="l">C</span><span>Yes — so it can choose the order.</span></div>
    <div class="opt" data-i="3"><span class="l">D</span><span>Only if it has memory.</span></div>
    <div class="qexp">If you know the steps in advance, it's a workflow. Agents are for when the path must be decided at runtime. Using an agent for a fixed sequence just adds cost and failure modes for no benefit.</div>
  </div>
  <div class="quiz" data-correct="2">
    <div class="q">Why did Klarna reintroduce human agents in 2025 after such strong AI numbers?</div>
    <div class="opt" data-i="0"><span class="l">A</span><span>The AI stopped working entirely.</span></div>
    <div class="opt" data-i="1"><span class="l">B</span><span>Customers prefer phones.</span></div>
    <div class="opt" data-i="2"><span class="l">C</span><span>Full autonomy hurt quality on complex cases; they added human checkpoints for the hard tail.</span></div>
    <div class="opt" data-i="3"><span class="l">D</span><span>Regulators banned the bot.</span></div>
    <div class="qexp">Autonomy worked for the easy majority but degraded quality on hard cases. The fix was calibration — a hybrid with human checkpoints — not abandoning the agent. That's the leash, found the expensive way.</div>
  </div>
  <h2><span class="ix">✎</span> Apply It Yourself</h2>
  <div class="sub">No worked answer this time — this one's your rep.</div>
  <div class="callout">
    <div class="ch">Your problem</div>
    <p style="font-family:var(--font-ui);font-weight:600;">"A fintech wants its support agent upgraded from 'answers questions' to 'can move money between a user's own accounts and close disputes.' Design the autonomy: which actions run unsupervised, which need a human checkpoint, and what makes the loop stop?"</p>
  </div>
  <p><strong>Hints</strong> (peek only if you're stuck):</p>
  <ul>
    <li>Grade each action by blast radius: read vs reversible write vs irreversible.</li>
    <li>Use the autonomy levels (0–3); not every action gets the same one.</li>
    <li>The trap: one autonomy setting for the whole agent.</li>
  </ul>
  <table>
    <tr><th>A strong answer...</th><th>A weak answer...</th></tr>
    <tr><td>Splits actions by risk; money-movement gets a human checkpoint, lookups run free.</td><td>Makes the whole thing 'an agent' with full autonomy.</td></tr>
    <tr><td>Defines loop exits + escalation with a clean handoff.</td><td>Lets it loop with no stopping condition.</td></tr>
    <tr><td>Names the canary metric (e.g. wrong-transfer rate) and tightens if it rises.</td><td>Has no plan for when it's wrong.</td></tr>
  </table>
  <div class="callout accent">
    <div class="ch">Make it live</div>
    <p>Klarna (case in 2.1) found this line the expensive way. Where exactly would you put the human checkpoint that they initially didn't?</p>
  </div>
  __NAV__
</div>
`,

/* ---------------------------------------------------------------- 2.2 */
"2.2": `
<div class="wrap">
  <div class="les-kicker">Chapter 2 · Lesson 2.2</div>
  <h1 class="les-title">Single-agent vs Multi-agent: When Each Wins</h1>
  <div class="les-meta">
    <span class="pill">Agentic architecture</span><span class="pill">~25 min read</span>
    <span class="pill">Prereq: 2.1</span><span class="pill">Difficulty: core</span>
  </div>
  <p class="motto">Splitting one agent into five doesn't divide the difficulty by five. It multiplies the coordination problem — and gives you five things that can lose the plot instead of one.</p>

  <p class="lead">"Multi-agent" is the buzziest phrase in AI right now, and in 2025 it triggered a genuine public fight between two of the best agent teams in the world. This lesson hands you the resolution, so that when an engineer or founder says "let's use a swarm of agents," you can tell — in one question — whether that's the right call or hype that's about to cost you reliability.</p>

  <h2><span class="ix">1</span> Your Mandate</h2>
  <div class="sub">What you own in the topology decision.</div>
  <p>Your mandate is to <strong>match the agent topology to the shape of the task</strong>, and to resist multi-agent because it sounds sophisticated. Reinforcing this chapter's thesis: every agent you add is another locus of failure and another context that can drift out of sync. You add agents only when the task genuinely demands parallel breadth — never as a default.</p>

  <h2><span class="ix">2</span> Your Responsibilities</h2>
  <div class="sub">Single vs multi, honestly compared.</div>
  <table>
    <tr><th></th><th>Single agent</th><th>Multi-agent</th></tr>
    <tr><td><strong>Shape</strong></td><td>One worker, one context, serial</td><td>Orchestrator + specialized workers, parallel</td></tr>
    <tr><td><strong>Strength</strong></td><td>Coherence, reliability, easy to debug</td><td>Breadth, parallel speed, more total context</td></tr>
    <tr><td><strong>Weakness</strong></td><td>One context window is a hard ceiling</td><td>Context isolation → conflicting decisions, compounding errors</td></tr>
    <tr><td><strong>Cost</strong></td><td>Lower</td><td>Much higher (more tokens, more calls)</td></tr>
    <tr><td><strong>Best for</strong></td><td>Coherent, sequential tasks (coding, conversation)</td><td>Wide, divide-and-conquer tasks (deep research)</td></tr>
  </table>

  <h2><span class="ix">3</span> Metrics That Matter Here</h2>
  <table>
    <tr><th>Metric</th><th>Catches</th></tr>
    <tr><td><strong>End-to-end reliability</strong></td><td>Whether splitting actually helped or just added failure surface</td></tr>
    <tr><td><strong>Context-isolation defects</strong></td><td>Sub-agents making conflicting assumptions (the multi-agent killer)</td></tr>
    <tr><td><strong>Parallel speedup vs cost</strong></td><td>Did you buy real speed, or just a bigger bill?</td></tr>
    <tr><td><strong>Coordination overhead</strong></td><td>Time/tokens spent managing agents instead of doing the task</td></tr>
  </table>

  <h2><span class="ix">4</span> How to Think Here</h2>
  <div class="sub">The two shapes, and the one question that decides between them.</div>
  <div class="fig">
    <div class="fig-title">Single (coherent, serial) vs Multi (parallel, more failure surface)</div>
    <svg viewBox="0 0 520 270" xmlns="http://www.w3.org/2000/svg" font-family="Hanken Grotesk, sans-serif">
      <text x="130" y="22" text-anchor="middle" font-size="12" font-weight="800" fill="#1d1d1f">SINGLE AGENT</text>
      <rect x="85" y="38" width="90" height="34" rx="7" fill="#0071e3" opacity="0.12" stroke="#0071e3"/><text x="130" y="59" text-anchor="middle" font-size="11" font-weight="700" fill="#0058b0">Agent</text>
      <line x1="130" y1="72" x2="130" y2="92" stroke="#86868b" stroke-width="1.4"/>
      <rect x="85" y="92" width="90" height="30" rx="7" fill="#fff" stroke="#1d1d1f"/><text x="130" y="111" text-anchor="middle" font-size="10" fill="#1d1d1f">step 1</text>
      <line x1="130" y1="122" x2="130" y2="138" stroke="#86868b" stroke-width="1.4"/>
      <rect x="85" y="138" width="90" height="30" rx="7" fill="#fff" stroke="#1d1d1f"/><text x="130" y="157" text-anchor="middle" font-size="10" fill="#1d1d1f">step 2</text>
      <line x1="130" y1="168" x2="130" y2="184" stroke="#86868b" stroke-width="1.4"/>
      <rect x="85" y="184" width="90" height="30" rx="7" fill="#fff" stroke="#1d1d1f"/><text x="130" y="203" text-anchor="middle" font-size="10" fill="#1d1d1f">step 3</text>
      <text x="130" y="238" text-anchor="middle" font-size="10" fill="#0a7d3c" font-weight="600">one shared context · coherent</text>

      <line x1="270" y1="30" x2="270" y2="245" stroke="#ddd" stroke-width="1"/>

      <text x="395" y="22" text-anchor="middle" font-size="12" font-weight="800" fill="#1d1d1f">MULTI-AGENT</text>
      <rect x="350" y="38" width="90" height="34" rx="7" fill="#1d1d1f"/><text x="395" y="59" text-anchor="middle" font-size="11" font-weight="700" fill="#fff">Orchestrator</text>
      <line x1="395" y1="72" x2="320" y2="118" stroke="#86868b" stroke-width="1.4"/>
      <line x1="395" y1="72" x2="395" y2="118" stroke="#86868b" stroke-width="1.4"/>
      <line x1="395" y1="72" x2="470" y2="118" stroke="#86868b" stroke-width="1.4"/>
      <rect x="288" y="118" width="64" height="30" rx="7" fill="#fff" stroke="#1d1d1f"/><text x="320" y="137" text-anchor="middle" font-size="9.5" fill="#1d1d1f">worker A</text>
      <rect x="363" y="118" width="64" height="30" rx="7" fill="#fff" stroke="#1d1d1f"/><text x="395" y="137" text-anchor="middle" font-size="9.5" fill="#1d1d1f">worker B</text>
      <rect x="438" y="118" width="64" height="30" rx="7" fill="#fff" stroke="#1d1d1f"/><text x="470" y="137" text-anchor="middle" font-size="9.5" fill="#1d1d1f">worker C</text>
      <text x="320" y="166" text-anchor="middle" font-size="9" fill="#b25000">own context</text>
      <text x="395" y="166" text-anchor="middle" font-size="9" fill="#b25000">own context</text>
      <text x="470" y="166" text-anchor="middle" font-size="9" fill="#b25000">own context</text>
      <text x="395" y="210" text-anchor="middle" font-size="10" fill="#b25000" font-weight="600">isolated contexts → can conflict</text>
      <text x="395" y="238" text-anchor="middle" font-size="10" fill="#0a7d3c" font-weight="600">parallel breadth · 3× the cost</text>
    </svg>
    <div class="fig-cap">The decisive question: does the task need <strong>coherence</strong> (one consistent line of work) or <strong>breadth</strong> (many independent threads)? Coherence → single. Breadth → multi.</div>
  </div>
  <p>The trap multi-agent falls into is <strong>context isolation</strong>. When worker B doesn't know what worker A decided, they make conflicting choices that don't fit together — and you only find out when you try to assemble the pieces. For anything that must stay internally consistent, splitting is dangerous. For anything that's genuinely independent and parallel, splitting is powerful.</p>

  <h2><span class="ix">5</span> Frameworks to Deploy</h2>
  <h3>① The coherence-vs-breadth question</h3>
  <p>Ask one thing: "Do the sub-tasks need to share context to be correct?" If yes → single agent (or shared context). If they're truly independent and you want breadth/speed → multi-agent. This single question resolves almost every topology debate.</p>
  <h3>② Orchestrator-worker pattern</h3>
  <p>When you do go multi, the proven shape is a <strong>lead orchestrator</strong> that decomposes the task and delegates to specialized workers, then synthesizes their outputs. The orchestrator holds the coherence; the workers provide the breadth. Don't build peer swarms with no coordinator — that's where chaos lives.</p>
  <h3>③ "Shared context or don't split"</h3>
  <p>If you must split a task whose parts depend on each other, you must also engineer shared context (or sequential handoff). No shared context + interdependent parts = guaranteed conflicting decisions. Make the team prove the parts are independent before approving a multi-agent design.</p>

  <h2><span class="ix">6</span> Worked Solution</h2>
  <div class="callout">
    <div class="ch">The prompt</div>
    <p style="font-family:var(--font-ui);font-weight:600;">"We're building (a) an AI coding agent and (b) a deep-research assistant. An engineer wants to make both multi-agent swarms. What do you advise for each?"</p>
  </div>
  <p><strong>Coding agent → single agent.</strong> Code is the definition of a coherence task: every change has to be consistent with every other file and decision. Split it into parallel sub-agents and one will refactor a function another is still calling — context isolation produces broken, conflicting code. Keep it single-threaded for reliability.</p>
  <p><strong>Research assistant → multi-agent (orchestrator-worker).</strong> Deep research is a breadth task: "investigate these eight angles" decomposes into genuinely independent sub-questions. A lead agent plans the angles, parallel workers each research one with their own context window, and the lead synthesizes. Here multi-agent buys real coverage that a single context window couldn't hold.</p>
  <div class="callout good">
    <div class="ch">Why this wins</div>
    <p>Same buzzword, opposite answers — because you decided by task shape (coherence vs breadth), not by hype. You'd protect the coding agent's reliability and unlock the research assistant's breadth, and you can explain exactly why to the engineer in one sentence each.</p>
  </div>

  <h2><span class="ix">7</span> Industry Case</h2>
  <div class="sub">A real, public disagreement between two top agent teams — and why both were right.</div>
  <h3>Cognition vs Anthropic, June 2025</h3>
  <p>Within 24 hours in mid-June 2025, two leading teams published seemingly opposite advice. Cognition (makers of the Devin coding agent) wrote <em>"Don't Build Multi-Agents"</em>, arguing that parallel sub-agents are fragile because of context isolation — their memorable example: one sub-agent builds a game background in one style while another builds a mismatched character, because neither shares the other's implicit decisions. Their prescription: a single, coherent agent for reliability.</p>
  <p>The very next day Anthropic published <em>"How we built our multi-agent research system,"</em> describing an orchestrator that delegates to parallel sub-agents — each with its own context window — and reporting a large performance gain (around <strong>90%</strong> better) on breadth-first research tasks.</p>
  <p>The community read it as a fight. It wasn't. <strong>Both were right, for different task shapes.</strong> Cognition builds a <em>coding</em> agent — a coherence task where context isolation is poison. Anthropic built a <em>research</em> agent — a breadth task where parallel independent contexts are exactly the unlock. Harvey's "Data Factory" makes the same point in production: it uses a multi-agent pipeline (a sourcing agent, a legal-review agent, and more) precisely because ingesting hundreds of legal databases <em>is</em> a parallel, decomposable job.</p>
  <div class="callout accent">
    <div class="ch">The PM takeaway</div>
    <p>When two world-class teams "disagree," the senior move isn't to pick a side — it's to notice they're solving differently-shaped problems. Coherence task → single. Breadth task → multi. You now hold the resolution to the loudest agent debate of 2025.</p>
  </div>

  <h2><span class="ix">✓</span> Check Yourself</h2>
  <div class="quiz" data-correct="0">
    <div class="q">Which task is the worst fit for a parallel multi-agent swarm?</div>
    <div class="opt" data-i="0"><span class="l">A</span><span>Writing one coherent codebase where every file must stay consistent.</span></div>
    <div class="opt" data-i="1"><span class="l">B</span><span>Researching 10 independent companies in parallel.</span></div>
    <div class="opt" data-i="2"><span class="l">C</span><span>Summarizing 10 unrelated documents.</span></div>
    <div class="opt" data-i="3"><span class="l">D</span><span>Crawling 100 separate websites.</span></div>
    <div class="qexp">Coding is a coherence task — parallel agents with isolated context will make conflicting changes. The other three are breadth tasks with independent parts, which is exactly where multi-agent shines.</div>
  </div>
  <div class="quiz" data-correct="3">
    <div class="q">Cognition and Anthropic published opposite-sounding advice on multi-agents. What's the real resolution?</div>
    <div class="opt" data-i="0"><span class="l">A</span><span>Anthropic was right; always go multi-agent.</span></div>
    <div class="opt" data-i="1"><span class="l">B</span><span>Cognition was right; never go multi-agent.</span></div>
    <div class="opt" data-i="2"><span class="l">C</span><span>It's purely a matter of opinion.</span></div>
    <div class="opt" data-i="3"><span class="l">D</span><span>Both are right — coding is a coherence task (single), research is a breadth task (multi).</span></div>
    <div class="qexp">They were solving differently-shaped problems. Topology follows task shape: coherence → single agent; breadth → orchestrator-worker multi-agent. Not ideology.</div>
  </div>
  <h2><span class="ix">✎</span> Apply It Yourself</h2>
  <div class="sub">No worked answer this time — this one's your rep. Give it 10 minutes before you move on.</div>
  <div class="callout">
    <div class="ch">Your problem</div>
    <p style="font-family:var(--font-ui);font-weight:600;">"Your team wants to rebuild your AI coding assistant as a 'swarm' of specialized agents because multi-agent is trendy. In the design review, decide single vs multi-agent and defend it with one question."</p>
  </div>
  <p><strong>Hints</strong> (peek only if you're stuck):</p>
  <ul>
    <li>Ask the one question: do the sub-tasks need to share context to be correct?</li>
    <li>Coding is a coherence task; research is a breadth task — which is this?</li>
    <li>The trap: choosing multi-agent because it sounds advanced.</li>
  </ul>
  <table>
    <tr><th>A strong answer...</th><th>A weak answer...</th></tr>
    <tr><td>Calls it a coherence task → single agent; explains context isolation would cause conflicting edits.</td><td>Builds a swarm to look sophisticated.</td></tr>
    <tr><td>Reserves multi-agent for genuinely parallel, independent work.</td><td>Assumes more agents = better.</td></tr>
    <tr><td>Cites the resolution: topology follows task shape, not ideology.</td><td>Picks a side on vibes.</td></tr>
  </table>
  <div class="callout accent">
    <div class="ch">Make it live</div>
    <p>Take a task you'd automate and classify it: coherence or breadth? Would you reach for one agent or many — and why?</p>
  </div>
  __NAV__
</div>
`,

/* ---------------------------------------------------------------- 2.3 */
"2.3": `
<div class="wrap">
  <div class="les-kicker">Chapter 2 · Lesson 2.3</div>
  <h1 class="les-title">Tool Use, MCP & the Orchestration Layer</h1>
  <div class="les-meta">
    <span class="pill">Agentic architecture</span><span class="pill">~24 min read</span>
    <span class="pill">Prereq: 2.2</span><span class="pill">Difficulty: core</span>
  </div>
  <p class="motto">A model with no tools is a brilliant intern locked in a room with no phone. The moment you hand it tools, you've also handed it the keys — and what it can touch is exactly what it can break.</p>

  <p class="lead">Tools are what turn a model from a <em>talker</em> into a <em>doer</em>. They're also where this chapter's thesis becomes literal: every tool you grant is a capability <strong>and</strong> a blast radius. This lesson covers tool use, the MCP standard that now connects almost everything, and the orchestration layer — and the permission decisions that are squarely your job.</p>

  <h2><span class="ix">1</span> Your Mandate</h2>
  <div class="sub">What you own when an agent can act on the world.</div>
  <p>Your mandate is to decide <strong>which tools the agent gets and what each tool is allowed to do</strong> — its permissions. Engineering builds the tool. You decide whether the agent may <em>read</em> with it, <em>write</em> with it, or take <em>irreversible</em> action with it. Granting tool access is granting power; under-scoping it is the cheapest insurance in agentic products.</p>

  <h2><span class="ix">2</span> Your Responsibilities</h2>
  <div class="sub">Tools, the protocol that connects them, and the layer that coordinates them.</div>
  <ul>
    <li><strong>Tool selection</strong> — the minimum set of tools the agent needs, and no more.</li>
    <li><strong>Permission scoping</strong> — read vs write vs irreversible, per tool.</li>
    <li><strong>The orchestration layer</strong> — what routes requests to tools, handles failures, and logs every call.</li>
    <li><strong>Observability</strong> — you must be able to see what the agent called, with what inputs, and what happened. No logs = no debugging and no trust.</li>
  </ul>

  <h2><span class="ix">3</span> Metrics That Matter Here</h2>
  <table>
    <tr><th>Metric</th><th>Catches</th></tr>
    <tr><td><strong>Tool-call success rate</strong></td><td>Tools failing or returning errors mid-loop</td></tr>
    <tr><td><strong>Wrong-tool rate</strong></td><td>Agent picking the wrong tool for the job</td></tr>
    <tr><td><strong>Permission/security incidents</strong></td><td>The agent doing something it shouldn't have been able to</td></tr>
    <tr><td><strong>Latency per tool hop</strong></td><td>Each tool call adds round-trip time to the loop</td></tr>
  </table>

  <h2><span class="ix">4</span> How to Think Here — MCP as the universal adapter</h2>
  <p>Before a standard existed, connecting M models to N tools meant building M×N custom integrations — a tangle. <strong>MCP (Model Context Protocol)</strong> collapses that to M+N: each model and each tool speaks one protocol.</p>
  <div class="fig">
    <div class="fig-title">Why MCP matters: M×N custom integrations → M+N standard ones</div>
    <svg viewBox="0 0 520 250" xmlns="http://www.w3.org/2000/svg" font-family="Hanken Grotesk, sans-serif">
      <text x="125" y="20" text-anchor="middle" font-size="11" font-weight="800" fill="#b25000">BEFORE · M×N tangle</text>
      <rect x="40" y="40" width="40" height="22" rx="5" fill="#fff" stroke="#1d1d1f"/><text x="60" y="55" text-anchor="middle" font-size="9" fill="#1d1d1f">model</text>
      <rect x="40" y="90" width="40" height="22" rx="5" fill="#fff" stroke="#1d1d1f"/><text x="60" y="105" text-anchor="middle" font-size="9" fill="#1d1d1f">model</text>
      <rect x="40" y="140" width="40" height="22" rx="5" fill="#fff" stroke="#1d1d1f"/><text x="60" y="155" text-anchor="middle" font-size="9" fill="#1d1d1f">model</text>
      <rect x="180" y="40" width="40" height="22" rx="5" fill="#fff" stroke="#1d1d1f"/><text x="200" y="55" text-anchor="middle" font-size="9" fill="#1d1d1f">tool</text>
      <rect x="180" y="90" width="40" height="22" rx="5" fill="#fff" stroke="#1d1d1f"/><text x="200" y="105" text-anchor="middle" font-size="9" fill="#1d1d1f">tool</text>
      <rect x="180" y="140" width="40" height="22" rx="5" fill="#fff" stroke="#1d1d1f"/><text x="200" y="155" text-anchor="middle" font-size="9" fill="#1d1d1f">tool</text>
      <g stroke="#b25000" stroke-width="0.9" opacity="0.6">
        <line x1="80" y1="51" x2="180" y2="51"/><line x1="80" y1="51" x2="180" y2="101"/><line x1="80" y1="51" x2="180" y2="151"/>
        <line x1="80" y1="101" x2="180" y2="51"/><line x1="80" y1="101" x2="180" y2="101"/><line x1="80" y1="101" x2="180" y2="151"/>
        <line x1="80" y1="151" x2="180" y2="51"/><line x1="80" y1="151" x2="180" y2="101"/><line x1="80" y1="151" x2="180" y2="151"/>
      </g>
      <text x="125" y="195" text-anchor="middle" font-size="10" fill="#b25000">9 brittle custom connectors</text>

      <line x1="270" y1="30" x2="270" y2="205" stroke="#ddd"/>

      <text x="395" y="20" text-anchor="middle" font-size="11" font-weight="800" fill="#0a7d3c">AFTER · MCP standard</text>
      <rect x="300" y="40" width="40" height="22" rx="5" fill="#fff" stroke="#1d1d1f"/><text x="320" y="55" text-anchor="middle" font-size="9" fill="#1d1d1f">model</text>
      <rect x="300" y="90" width="40" height="22" rx="5" fill="#fff" stroke="#1d1d1f"/><text x="320" y="105" text-anchor="middle" font-size="9" fill="#1d1d1f">model</text>
      <rect x="300" y="140" width="40" height="22" rx="5" fill="#fff" stroke="#1d1d1f"/><text x="320" y="155" text-anchor="middle" font-size="9" fill="#1d1d1f">model</text>
      <rect x="378" y="78" width="44" height="56" rx="8" fill="#0071e3"/><text x="400" y="103" text-anchor="middle" font-size="10" font-weight="700" fill="#fff">MCP</text><text x="400" y="118" text-anchor="middle" font-size="8" fill="#cfe0ff">layer</text>
      <rect x="460" y="40" width="40" height="22" rx="5" fill="#fff" stroke="#1d1d1f"/><text x="480" y="55" text-anchor="middle" font-size="9" fill="#1d1d1f">tool</text>
      <rect x="460" y="90" width="40" height="22" rx="5" fill="#fff" stroke="#1d1d1f"/><text x="480" y="105" text-anchor="middle" font-size="9" fill="#1d1d1f">tool</text>
      <rect x="460" y="140" width="40" height="22" rx="5" fill="#fff" stroke="#1d1d1f"/><text x="480" y="155" text-anchor="middle" font-size="9" fill="#1d1d1f">tool</text>
      <g stroke="#0a7d3c" stroke-width="1.1">
        <line x1="340" y1="51" x2="378" y2="95"/><line x1="340" y1="101" x2="378" y2="103"/><line x1="340" y1="151" x2="378" y2="116"/>
        <line x1="422" y1="95" x2="460" y2="51"/><line x1="422" y1="103" x2="460" y2="101"/><line x1="422" y1="116" x2="460" y2="151"/>
      </g>
      <text x="400" y="195" text-anchor="middle" font-size="10" fill="#0a7d3c">6 standard connections</text>
    </svg>
    <div class="fig-cap">MCP is the USB-C of AI tools: one protocol so any model can use any tool. This is why it spread so fast.</div>
  </div>
  <p>MCP went from an Anthropic open-source release in late 2024 to an industry standard within a year — adopted across OpenAI, Google, and Microsoft products in 2025, with tens of thousands of community servers and (by Anthropic's December 2025 reporting) on the order of <strong>97 million monthly SDK downloads</strong>. In December 2025 it was placed under Linux Foundation governance, cementing it as vendor-neutral. For a PM, the practical upshot: <strong>connecting your agent to tools is now mostly a configuration and permissions decision, not a months-long integration project.</strong></p>

  <h2><span class="ix">5</span> Frameworks to Deploy</h2>
  <h3>① Capability vs blast radius</h3>
  <p>Grade every tool by what it can do if it goes wrong:</p>
  <table>
    <tr><th>Tier</th><th>Examples</th><th>Default policy</th></tr>
    <tr><td><strong>Read</strong></td><td>search, fetch a record, look up</td><td>Allow autonomously</td></tr>
    <tr><td><strong>Write (reversible)</strong></td><td>draft, tag, create a note</td><td>Allow with logging</td></tr>
    <tr><td><strong>Irreversible / high-stakes</strong></td><td>send money, email a customer, delete data</td><td>Human confirm — or don't grant</td></tr>
  </table>
  <h3>② Least privilege for agents</h3>
  <p>Give the agent the <em>minimum</em> tools the task needs. An email-triage agent that needs to read and label does not need delete or send-to-anyone. Every extra tool is extra blast radius for zero benefit. This is the security mindset, applied to agents.</p>
  <h3>③ Treat MCP tool access like API permissions</h3>
  <p>An MCP server can have real access to your systems — a filesystem server can read paths you allow, a database server can run queries. So vet what each connector exposes the same way you'd review an API key's scope. <strong>"It's just a connector" is how breaches happen.</strong></p>

  <h2><span class="ix">6</span> Worked Solution</h2>
  <div class="callout">
    <div class="ch">The prompt</div>
    <p style="font-family:var(--font-ui);font-weight:600;">"Design an agent that triages our support inbox: reads incoming emails, categorizes them, and helps the team respond faster. What tools does it get?"</p>
  </div>
  <p><strong>Step 1 — List the job, then the minimum tools.</strong> The job is read → categorize → prepare. Minimum tools: read inbox, apply labels/categories, draft a suggested reply. That's it.</p>
  <p><strong>Step 2 — Grade by blast radius:</strong></p>
  <ul>
    <li><strong>Read inbox, read CRM record:</strong> read tier → autonomous.</li>
    <li><strong>Apply label, draft reply:</strong> reversible write → autonomous with logging.</li>
    <li><strong>Send the reply, delete an email, refund:</strong> irreversible → <em>not granted</em>, or human-confirm only. The agent prepares; a person sends.</li>
  </ul>
  <p><strong>Step 3 — Least privilege.</strong> Notice what we did NOT give it: send-to-anyone, delete, account changes. It can't blast a wrong reply to 10,000 customers because it literally lacks the tool to send. That single scoping decision removes the scariest failure mode.</p>
  <p><strong>Step 4 — Observability.</strong> Require a log of every tool call. If the agent mislabels or drafts something off, you can trace exactly why — and you can prove to stakeholders what it can and can't touch.</p>
  <div class="callout good">
    <div class="ch">Why this wins</div>
    <p>You captured the value (fast triage, drafted replies) while making the catastrophic failure <em>impossible by construction</em> — the agent has no send/delete tool. That's permission scoping doing the work that no amount of prompt-engineering can guarantee.</p>
  </div>

  <h2><span class="ix">7</span> Industry Case</h2>
  <div class="sub">The standard that ate the ecosystem — and the risk that came with it.</div>
  <h3>MCP — from one company's experiment to the industry's tool layer in a year</h3>
  <p>MCP is the clearest sign of how fast the agentic stack matured. Anthropic open-sourced it in late 2024; within a year OpenAI, Google, and Microsoft had adopted it, the community had built tens of thousands of servers, and it was handed to the Linux Foundation for neutral governance. For PMs, this is enormous: the integration problem that used to dominate agent roadmaps is largely solved infrastructure now.</p>
  <p>But the same articles documenting MCP's rise carry the warning that <em>is</em> this chapter's thesis: MCP servers have real access to your systems. A connector can read files, run database queries, or execute commands within whatever scope you grant. <strong>The capability and the blast radius arrive together.</strong> The teams shipping safe agentic products in 2026 aren't the ones with the most connectors — they're the ones who scope each connector's permissions like a security review.</p>
  <div class="callout accent">
    <div class="ch">The PM takeaway</div>
    <p>The industry standardized <em>how</em> agents get tools. It did not standardize <em>which</em> tools your agent should have or what they're allowed to do — that judgment is the PM's, and it's where this whole chapter lands: <strong>add capability deliberately, scope the blast radius every time.</strong></p>
  </div>

  <h2><span class="ix">✓</span> Check Yourself</h2>
  <div class="quiz" data-correct="2">
    <div class="q">Your triage agent only needs to read and label emails. Why not also give it a "send" and "delete" tool, just in case?</div>
    <div class="opt" data-i="0"><span class="l">A</span><span>It would slow the agent down.</span></div>
    <div class="opt" data-i="1"><span class="l">B</span><span>Send and delete are hard to build.</span></div>
    <div class="opt" data-i="2"><span class="l">C</span><span>Every extra tool is extra blast radius; least privilege makes catastrophic actions impossible by construction.</span></div>
    <div class="opt" data-i="3"><span class="l">D</span><span>Users dislike automated emails.</span></div>
    <div class="qexp">If the agent lacks a send/delete tool, it physically cannot mass-send a wrong reply or erase data — no prompt can override a capability it doesn't have. Least privilege is the cheapest, strongest safety control.</div>
  </div>
  <div class="quiz" data-correct="0">
    <div class="q">What problem did MCP primarily solve?</div>
    <div class="opt" data-i="0"><span class="l">A</span><span>The M×N integration tangle — one standard protocol so any model can use any tool.</span></div>
    <div class="opt" data-i="1"><span class="l">B</span><span>It made models more accurate.</span></div>
    <div class="opt" data-i="2"><span class="l">C</span><span>It eliminated the need for permissions.</span></div>
    <div class="opt" data-i="3"><span class="l">D</span><span>It replaced RAG.</span></div>
    <div class="qexp">MCP standardized tool connectivity (M×N custom integrations → M+N standard ones). It explicitly does NOT handle which tools to grant or their permissions — that judgment stays with the PM.</div>
  </div>

  <h2><span class="ix">✎</span> Apply It Yourself</h2>
  <div class="sub">No worked answer this time — this one's your rep. Give it 10 minutes before you move on.</div>
  <div class="callout">
    <div class="ch">Your problem</div>
    <p style="font-family:var(--font-ui);font-weight:600;">"Design an agent that triages your support inbox: it reads incoming emails, categorizes them, and drafts replies. List exactly which tools it gets — and which it must not."</p>
  </div>
  <p><strong>Hints</strong> (peek only if you're stuck):</p>
  <ul>
    <li>Grade tools by blast radius: read / reversible-write / irreversible.</li>
    <li>Least privilege: the minimum tools the job needs, nothing more.</li>
    <li>The trap: granting 'send' and 'delete' 'just in case.'</li>
  </ul>
  <table>
    <tr><th>A strong answer...</th><th>A weak answer...</th></tr>
    <tr><td>Grants read + label + draft; withholds send/delete so a catastrophic action is impossible by construction.</td><td>Gives it every tool for flexibility.</td></tr>
    <tr><td>Requires a log of every tool call (observability).</td><td>Has no audit trail.</td></tr>
    <tr><td>Puts a human confirm on anything irreversible.</td><td>Lets it send to anyone autonomously.</td></tr>
  </table>
  <div class="callout accent">
    <div class="ch">Make it live</div>
    <p>Look at an AI agent or integration you use (or an MCP server). What can it actually touch — and would you have scoped it tighter?</p>
  </div>

  <div class="callout good" style="margin-top:40px;">
    <div class="ch">Chapter 2 complete</div>
    <p>You can now define what an agent is, decide single vs multi-agent by task shape, and scope tools by blast radius — all under one principle: <strong>agency is a liability you add on purpose.</strong> Next up, <strong>Chapter 3 — How It Works Under the Hood</strong>: the DSA and data concepts (search, sort, vector DBs, graphs) a PM needs to reason about RAG and agents, the smart way.</p>
  </div>
  __NAV__
</div>
`
