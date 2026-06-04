/* ===== Chapter 05 lessons — AI PM by Rohit Swerashi =====
   One JS object entry per lesson: "N.Y": `<full lesson html>`
   Keep the 7-block structure. End each entry's content with __NAV__ (build injects nav). */

/* ---------------------------------------------------------------- 5.1 */
"5.1": `
<div class="wrap">
  <div class="les-kicker">Chapter 5 · Lesson 5.1</div>
  <h1 class="les-title">Beyond DAU: Evals, Quality &amp; Cost-per-task</h1>
  <div class="les-meta">
    <span class="pill">Analytics &amp; metrics</span><span class="pill">~26 min read</span>
    <span class="pill">Prereq: Ch.1, Ch.4</span><span class="pill">Difficulty: core</span>
  </div>
  <p class="motto">Engagement is the one number an AI product can fake. A model that is quietly getting worse will light up every dashboard you inherited from your SaaS job — right up until the users are gone.</p>

  <p class="lead">Every PM arrives in AI fluent in DAU, retention, and session time. Those metrics will actively mislead you here. An AI product can show <em class="k">rising engagement while its quality falls</em> — because a wrong answer makes users try again, and a retry looks like engagement. This lesson hands you the real scorecard: the AI metric stack of <em class="k">eval score, cost-per-task, containment, and hallucination rate</em> — the numbers that tell you whether the product is actually good, not just busy.</p>

  <h2><span class="ix">1</span> Your Mandate</h2>
  <div class="sub">What you own when the product's quality is a probability, not a guarantee.</div>
  <p>Your mandate is to <strong>own the definition of "good" and make it measurable</strong> — and to refuse to run an AI product on borrowed SaaS vanity metrics. In deterministic software, "it works" is binary, so you can get away with measuring usage. In a probabilistic product, "it works" is a rate you have to define, measure, and defend. You don't build the eval harness (that's 5.2 and engineering); you decide <em class="k">what counts as a correct answer</em>, which single metric equals value, and what bar a release has to clear before it ships.</p>

  <h2><span class="ix">2</span> Your Responsibilities</h2>
  <div class="sub">The concrete deliverables of an AI analytics function.</div>
  <table>
    <tr><th>You own</th><th>You do NOT own</th></tr>
    <tr><td><strong>The eval set + quality bar</strong> — the questions and the "what counts as right"</td><td>Building the eval/logging pipeline (eng — Lesson 5.2)</td></tr>
    <tr><td><strong>The north-star value metric</strong> — the one number that means the product worked</td><td>The model and its raw benchmark scores</td></tr>
    <tr><td><strong>Separating vanity from value</strong> — killing the metrics that lie</td><td>The dashboards' visual implementation</td></tr>
    <tr><td><strong>The review cadence</strong> — who looks at quality, how often</td><td>The data warehouse plumbing</td></tr>
  </table>
  <p>The trap junior AI PMs fall into is inheriting the growth-team dashboard and assuming a rising line is good news. <strong>Your job is to be the person in the room who asks "rising how — resolved, or just re-tried?"</strong></p>

  <h2><span class="ix">3</span> Metrics That Matter Here</h2>
  <div class="sub">The AI metric stack. Memorize it — this is the scorecard that replaces DAU.</div>
  <table>
    <tr><th>Metric</th><th>Reads as</th><th>Why a PM watches it</th></tr>
    <tr><td><strong>Eval score (quality rate)</strong></td><td>% of outputs that meet your defined bar</td><td>The only objective "is it actually good" signal</td></tr>
    <tr><td><strong>Cost per task</strong></td><td>$ per completed job — tokens + retrieval + retries</td><td>Whether unit economics survive at scale (Ch.1)</td></tr>
    <tr><td><strong>Containment / resolution</strong></td><td>% of tasks finished correctly with no human</td><td>The ROI number execs and customers actually buy</td></tr>
    <tr><td><strong>Hallucination / error rate</strong></td><td>% of confidently-wrong outputs</td><td>Drives trust, churn, and legal risk more than any feature</td></tr>
    <tr><td><strong>Faithfulness / groundedness</strong></td><td>Did the answer stick to its retrieved sources?</td><td>Catches hallucination even when retrieval was fine</td></tr>
  </table>
  <div class="callout warn">
    <div class="ch">The trap — a rising line can be a symptom of failure</div>
    <p>On an AI product, <strong>engagement and quality can move in opposite directions</strong>. If answers get worse, users re-ask, rephrase, and retry — and your session count, messages-per-user, and time-in-product all go <em>up</em>. A growth PM celebrates; an AI PM gets suspicious. The single most important habit in this chapter: <strong>never read an engagement metric without checking the quality metric beside it.</strong></p>
  </div>

  <h2><span class="ix">4</span> How to Think Here</h2>
  <div class="sub">Picture the two curves that a single dashboard line hides.</div>
  <div class="fig">
    <div class="fig-title">Why DAU lies — engagement up, quality down</div>
    <svg viewBox="0 0 520 300" xmlns="http://www.w3.org/2000/svg" font-family="Hanken Grotesk, sans-serif">
      <polygon points="250,148 470,80 470,210" fill="#b25000" opacity="0.10"/>
      <line x1="70" y1="250" x2="490" y2="250" stroke="#1d1d1f" stroke-width="1.2"/>
      <line x1="70" y1="250" x2="70" y2="40" stroke="#1d1d1f" stroke-width="1.2"/>
      <text x="280" y="282" text-anchor="middle" font-size="11" fill="#86868b">time / successive releases   →</text>
      <text x="40" y="148" text-anchor="middle" font-size="11" fill="#86868b" transform="rotate(-90 40 148)">metric value</text>
      <polyline points="80,200 250,148 470,80" fill="none" stroke="#0071e3" stroke-width="2.4"/>
      <polyline points="80,100 250,148 470,210" fill="none" stroke="#b25000" stroke-width="2.4"/>
      <circle cx="470" cy="80" r="3.5" fill="#0071e3"/><circle cx="470" cy="210" r="3.5" fill="#b25000"/>
      <text x="464" y="68" text-anchor="end" font-size="10" font-weight="700" fill="#0058b0">engagement (DAU) ↑</text>
      <text x="464" y="226" text-anchor="end" font-size="10" font-weight="700" fill="#b25000">real quality / resolution ↓</text>
      <text x="392" y="150" text-anchor="middle" font-size="9.5" fill="#b25000">the gap DAU hides</text>
    </svg>
    <div class="fig-cap">One dashboard line — "usage is up" — can hide two diverging truths. As quality falls, frustrated users retry, which pushes engagement up. The only way to see the orange line is to measure it on purpose.</div>
  </div>
  <p>When you're handed an AI product's metrics, run this loop before you believe any of it:</p>
  <ol>
    <li><strong>Distrust inherited metrics.</strong> DAU, sessions, and time-in-product were built for deterministic software. Assume they're misleading until proven otherwise.</li>
    <li><strong>Name the one value metric.</strong> The single number that means a user's job got done — "resolved correctly," "task completed," "answer accepted and right." Everything else is secondary.</li>
    <li><strong>Separate vanity from value.</strong> "Handled," "engaged," "messages sent" are activity. "Resolved," "correct," "contained" are outcomes. Demand the outcome.</li>
    <li><strong>Read cost-per-task next to quality.</strong> They must be watched as a pair — a quality gain that triples cost may not be worth shipping (Ch.1's triangle).</li>
    <li><strong>Gate releases on an eval.</strong> No shipping a prompt or model change that drops the eval score, no matter what the demo looks like.</li>
  </ol>
  <div class="callout accent">
    <div class="ch">Say this in the interview</div>
    <p>"I don't trust DAU for an AI product — engagement can rise while quality falls, because retries look like usage. I'd define an eval-based quality score and cost-per-task as the real scorecard, and gate releases on the eval."</p>
  </div>

  <h2><span class="ix">5</span> Frameworks to Deploy</h2>
  <div class="sub">Three tools that make you the most trusted voice in the metrics review.</div>
  <h3>① The AI metric stack</h3>
  <p>Name the four that matter — <em class="k">quality (eval) rate, cost-per-task, containment/resolution, hallucination rate</em> — and put them on one board. The discipline is reporting all four together: a quality number with no cost number, or a cost number with no quality number, is half a story and usually the flattering half.</p>
  <h3>② Vanity vs value — "handled" is not "resolved"</h3>
  <p>For every metric, ask: is this <em>activity</em> or <em>outcome</em>? "Chats handled," "queries processed," "users engaged" measure that something happened — not that it worked. The outcome twin ("resolved correctly," "task completed") is the one that maps to money. When a vendor or exec quotes you an activity metric, your reflex is to ask for its outcome twin.</p>
  <h3>③ Evals as the production gate</h3>
  <p>Through 2025 the industry consensus hardened that <strong>evals are to AI products what unit tests are to software</strong> — they moved from a research nicety to a release gate. Practically: you maintain a fixed eval set, and a prompt/model/retrieval change must clear it before it ships. This is the single habit that stops "we improved it" from quietly meaning "we made it worse on the cases we forgot to check."</p>

  <h2><span class="ix">6</span> Worked Solution</h2>
  <div class="sub">A real moment you'll face — the dashboard that looks like a win.</div>
  <div class="callout">
    <div class="ch">The prompt</div>
    <p style="font-family:var(--font-ui);font-weight:600;">"Our AI support bot's dashboard looks fantastic — chats handled up 40%, average session time up. The CEO wants to expand it everywhere. What do you check before you celebrate?"</p>
  </div>
  <p><strong>Step 1 — Spot the vanity metrics.</strong> "Chats handled" is a routing number — it counts conversations the bot touched, not ones it resolved. "Session time up" is exactly the signal that should worry me, not reassure me: longer sessions can mean users fighting a bot that won't help.</p>
  <p><strong>Step 2 — Pull the outcome twins.</strong></p>
  <div class="flow">
<span class="st">VANITY</span>   <span class="nt">"chats handled +40%, session time up" → looks like a win</span>
   <span class="ar">↓ dig</span>
<span class="st">REAL</span>     <span class="nt">resolution rate · repeat-inquiry rate · cost per resolution · eval quality</span>
   <span class="ar">↓</span>
<span class="nt"># if sessions rose because users re-asked after wrong answers, quality FELL</span>
  </div>
  <p><strong>Step 3 — Check the tell-tale: repeat inquiries.</strong> If the same users are coming back about the same issue, the bot is deflecting, not resolving. A rising repeat-inquiry rate alongside rising "handled" is the fingerprint of the engagement-up-quality-down trap.</p>
  <p><strong>Step 4 — Run an eval before expanding.</strong> Sample a few hundred real conversations, score them for correct resolution and hallucination, and put cost-per-resolution next to it. <em>Then</em> decide on expansion. "We resolve 48% correctly at $0.30 each, and repeat inquiries are flat" is a green light; "handled is up but resolution is down" is a stop.</p>
  <div class="callout good">
    <div class="ch">Why this wins</div>
    <p>You refused to be fooled by a flattering activity metric, named the outcome metric that maps to value, and caught the silent failure (retries masquerading as engagement) with a quality eval — before scaling a possibly-broken product to everyone. That is exactly the judgment an AI PM is hired for.</p>
  </div>

  <h2><span class="ix">7</span> Industry Case</h2>
  <div class="sub">The metric that gets monetized vs the metric that gets headlines.</div>
  <h3>Intercom Fin vs Klarna — pricing on resolution, reporting on "handled"</h3>
  <p><strong>Intercom Fin</strong> is the clearest signal of where the industry landed on AI metrics, because it puts its money where the real metric is: Fin is priced at roughly <strong>$0.99 per resolution</strong> — you pay only when a customer issue is actually resolved, not for messages handled or for the AI being available. If a customer asks for a human, or the automation fails to complete, it is not counted and not billed. That pricing model is a metric philosophy made concrete: <em>resolution is the unit of value, activity is not</em>. And Intercom is honest about the bar — its own published case studies report real-world resolution rates around <strong>42–50%</strong> (Linktree ~42%, Robin ~50%), not the 90s.</p>
  <p><strong>Klarna</strong> shows the other side. Its 2024 announcement was a sensation: the AI assistant handled <strong>2.3M chats in its first month — two-thirds of its support volume</strong>, equivalent to ~700 agents, with a projected ~$40M profit improvement and resolution time cut from ~11 minutes to under 2. Genuinely impressive. But notice the headline verb: <em>handled</em>. That is a routing metric — which channel the query hit first — not a measure of how many issues were actually resolved well. By 2025 Klarna publicly walked back its most aggressive automation, acknowledging quality had slipped on harder cases (Ch.2). The activity number stayed enormous while the quality story got complicated.</p>
  <ul>
    <li><strong>"Handled" ≠ "resolved."</strong> The most-quoted AI-support number in the world (two-thirds of chats) is an activity metric. The metric that maps to value is resolution — and it's a different, smaller, harder number.</li>
    <li><strong>The market rewards the real metric.</strong> Fin charging per resolution is the industry agreeing that outcome, not activity, is what a customer will actually pay for.</li>
    <li><strong>Honest beats heroic.</strong> A reported ~45% resolution rate you can trust is worth more than a "two-thirds handled" headline that hides whether anything got fixed.</li>
  </ul>
  <div class="callout accent">
    <div class="ch">The PM takeaway</div>
    <p>DAU lies, and so does "handled." Measure quality, cost-per-task, and resolution — the numbers a customer would pay for — or you're flying blind on a dashboard that looks great while the product gets worse. The company that prices on resolution is telling you which metric is real.</p>
  </div>

  <h2><span class="ix">✓</span> Check Yourself</h2>
  <div class="quiz" data-correct="1">
    <div class="q">Your AI feature's daily sessions and messages-per-user are climbing. Why might that be bad news?</div>
    <div class="opt" data-i="0"><span class="l">A</span><span>More usage is always good — ship it wider.</span></div>
    <div class="opt" data-i="1"><span class="l">B</span><span>Rising engagement can mean users are retrying after wrong answers — quality may be falling while usage rises.</span></div>
    <div class="opt" data-i="2"><span class="l">C</span><span>Sessions can't be measured accurately.</span></div>
    <div class="opt" data-i="3"><span class="l">D</span><span>It means the model is too cheap.</span></div>
    <div class="qexp">On a probabilistic product, a wrong answer triggers retries, and retries inflate engagement. A rising line can be the fingerprint of falling quality. Always read engagement next to a quality metric (eval score, resolution, repeat-inquiry rate).</div>
  </div>
  <div class="quiz" data-correct="2">
    <div class="q">A vendor brags their AI "handles two-thirds of support chats." What's your sharpest follow-up?</div>
    <div class="opt" data-i="0"><span class="l">A</span><span>"Can it handle three-quarters?"</span></div>
    <div class="opt" data-i="1"><span class="l">B</span><span>"What model is it built on?"</span></div>
    <div class="opt" data-i="2"><span class="l">C</span><span>"How many does it actually resolve correctly, and at what cost per resolution?"</span></div>
    <div class="opt" data-i="3"><span class="l">D</span><span>"How fast are the responses?"</span></div>
    <div class="qexp">"Handled" is a routing/activity metric, not an outcome. The value metric is correct resolution (and its cost). Intercom Fin literally prices on resolution for this reason — activity is not what a customer pays for.</div>
  </div>
  <h2><span class="ix">✎</span> Apply It Yourself</h2>
  <div class="sub">No worked answer this time — this one's your rep. Give it 10 minutes before you move on.</div>
  <div class="callout">
    <div class="ch">Your problem</div>
    <p style="font-family:var(--font-ui);font-weight:600;">"Leadership is thrilled: your AI support bot's 'chats handled' is up 40% and session time is up. They want to expand it everywhere. What do you check before celebrating?"</p>
  </div>
  <p><strong>Hints</strong> (peek only if you're stuck):</p>
  <ul>
    <li>Separate vanity (handled, sessions) from value (resolved, correct).</li>
    <li>Rising engagement can be retries after wrong answers.</li>
    <li>The trap: celebrating activity metrics.</li>
  </ul>
  <table>
    <tr><th>A strong answer...</th><th>A weak answer...</th></tr>
    <tr><td>Pulls resolution rate, repeat-inquiry rate, cost-per-resolution, and an eval sample.</td><td>Celebrates 'handled' and session time.</td></tr>
    <tr><td>Reads rising sessions as a possible quality red flag.</td><td>Assumes more usage = better.</td></tr>
    <tr><td>Gates expansion on a quality eval, not the dashboard.</td><td>Scales a possibly-broken product.</td></tr>
  </table>
  <div class="callout accent">
    <div class="ch">Make it live</div>
    <p>Find an AI product bragging about a usage number. Ask: is that activity or an outcome? What's the value metric it's not showing?</p>
  </div>
  __NAV__
</div>
`,

/* ---------------------------------------------------------------- 5.2 */
"5.2": `
<div class="wrap">
  <div class="les-kicker">Chapter 5 · Lesson 5.2</div>
  <h1 class="les-title">Instrumenting an LLM Product</h1>
  <div class="les-meta">
    <span class="pill">Analytics &amp; metrics</span><span class="pill">~25 min read</span>
    <span class="pill">Prereq: 5.1</span><span class="pill">Difficulty: core</span>
  </div>
  <p class="motto">An LLM fails silently and fluently. If you're not logging the prompt, the context, and the output together, your first sign of a quality regression will be a customer telling the internet before they tell you.</p>

  <p class="lead">Lesson 5.1 told you which metrics to watch; this one is about <em class="k">how you can see them at all</em>. Instrumentation is the difference between catching a regression in an eval run on Tuesday and discovering it from an angry post on Friday. By the end you'll know exactly what to log on every AI request — <em class="k">prompt, retrieved context, output, tool calls, feedback</em> — and how that turns a silent, probabilistic product into one you can actually debug, measure, and trust.</p>

  <h2><span class="ix">1</span> Your Mandate</h2>
  <div class="sub">What you own when the product can't tell you it's broken.</div>
  <p>Your mandate is to <strong>own what gets logged and what the dashboard shows</strong> — the observability requirements. Engineering builds the pipeline; you specify the <em class="k">trace</em> (what must be captured on every request) and the <em class="k">alerts</em> (what quality drop should page someone). The non-negotiable you defend: <strong>quality must be observable.</strong> A product whose failures are invisible until a user complains is, for a PM, an unmanageable product.</p>

  <h2><span class="ix">2</span> Your Responsibilities</h2>
  <div class="sub">What to log — and why each piece earns its place.</div>
  <table>
    <tr><th>Capture on every request</th><th>So that you can…</th></tr>
    <tr><td><strong>Prompt</strong> (final, assembled)</td><td>See exactly what the model was actually asked</td></tr>
    <tr><td><strong>Retrieved context</strong></td><td>Localize failure — was it bad retrieval or bad generation? (Ch.1)</td></tr>
    <tr><td><strong>Output</strong></td><td>Score it, replay it, compare across releases</td></tr>
    <tr><td><strong>Tool calls + arguments</strong></td><td>See what the agent did, not just what it said (Ch.2)</td></tr>
    <tr><td><strong>User feedback signals</strong></td><td>Thumbs, edits, regenerates, escalations — free quality labels</td></tr>
    <tr><td><strong>Cost + latency per task</strong></td><td>Watch unit economics and the p95 tail (Ch.1)</td></tr>
  </table>
  <p>The thing that separates an AI trace from a normal log: <strong>you must capture the prompt and the retrieved context, not just the output.</strong> Logging only the final answer tells you <em>that</em> it failed; logging the whole chain tells you <em>where</em> — and "where" is the entire game (Ch.1's trace-the-chunk).</p>

  <h2><span class="ix">3</span> Metrics That Matter Here</h2>
  <div class="sub">The scorecard for your instrumentation itself.</div>
  <table>
    <tr><th>Metric</th><th>Reads as</th><th>Why a PM watches it</th></tr>
    <tr><td><strong>Trace coverage</strong></td><td>% of requests with a full, replayable trace</td><td>Blind spots are where regressions hide</td></tr>
    <tr><td><strong>Online eval score</strong></td><td>Quality scored on live production traffic</td><td>Your early-warning system, before users react</td></tr>
    <tr><td><strong>Regression-detection lead time</strong></td><td>How long from a quality drop to you knowing</td><td>The whole point — beat the user to the bad news</td></tr>
    <tr><td><strong>Feedback capture rate</strong></td><td>% of interactions with a usable feedback signal</td><td>More labels = cheaper, faster evals</td></tr>
  </table>
  <div class="callout warn">
    <div class="ch">The trap — logging the output only</div>
    <p>The most common instrumentation mistake is saving the model's final answer and nothing else. Then a bad answer shows up and you're stuck: was retrieval wrong, was the prompt wrong, did the model regress? You can't tell, so you guess — and guessing on a probabilistic system burns weeks. <strong>Capture the full chain (prompt + context + output + tools), or you've logged the symptom and thrown away the diagnosis.</strong></p>
  </div>

  <h2><span class="ix">4</span> How to Think Here</h2>
  <div class="sub">Instrumentation isn't a log file — it's a loop that catches problems before users do.</div>
  <div class="fig">
    <div class="fig-title">The observability loop</div>
    <svg viewBox="0 0 520 300" xmlns="http://www.w3.org/2000/svg" font-family="Hanken Grotesk, sans-serif">
      <rect x="185" y="22" width="150" height="46" rx="9" fill="#0071e3" opacity="0.10" stroke="#0071e3" stroke-width="1.3"/>
      <text x="260" y="42" text-anchor="middle" font-size="12.5" font-weight="700" fill="#0058b0">1 · Trace everything</text>
      <text x="260" y="58" text-anchor="middle" font-size="10" fill="#0058b0">prompt → context → output</text>
      <rect x="372" y="118" width="132" height="48" rx="9" fill="#ffffff" stroke="#1d1d1f" stroke-width="1.3"/>
      <text x="438" y="138" text-anchor="middle" font-size="12.5" font-weight="700" fill="#1d1d1f">2 · Score online</text>
      <text x="438" y="154" text-anchor="middle" font-size="10" fill="#86868b">evals on live traffic</text>
      <rect x="185" y="224" width="150" height="48" rx="9" fill="#ffffff" stroke="#1d1d1f" stroke-width="1.3"/>
      <text x="260" y="244" text-anchor="middle" font-size="12.5" font-weight="700" fill="#1d1d1f">3 · Detect &amp; alert</text>
      <text x="260" y="260" text-anchor="middle" font-size="10" fill="#86868b">quality drop → page you</text>
      <rect x="16" y="118" width="132" height="48" rx="9" fill="#ffffff" stroke="#1d1d1f" stroke-width="1.3"/>
      <text x="82" y="138" text-anchor="middle" font-size="12.5" font-weight="700" fill="#1d1d1f">4 · Curate &amp; fix</text>
      <text x="82" y="154" text-anchor="middle" font-size="10" fill="#86868b">failures → eval set</text>
      <path d="M335,48 Q420,55 438,116" fill="none" stroke="#86868b" stroke-width="1.4" marker-end="url(#o52)"/>
      <path d="M438,166 Q400,238 337,248" fill="none" stroke="#86868b" stroke-width="1.4" marker-end="url(#o52)"/>
      <path d="M185,248 Q100,238 82,168" fill="none" stroke="#86868b" stroke-width="1.4" marker-end="url(#o52)"/>
      <path d="M82,116 Q120,55 183,46" fill="none" stroke="#86868b" stroke-width="1.4" marker-end="url(#o52)"/>
      <text x="260" y="146" text-anchor="middle" font-size="10.5" font-weight="800" fill="#1d1d1f">CLOSE THE LOOP</text>
      <text x="260" y="163" text-anchor="middle" font-size="9.5" fill="#b25000">catch it before users do</text>
      <defs><marker id="o52" markerWidth="8" markerHeight="8" refX="6" refY="3" orient="auto"><path d="M0,0 L6,3 L0,6 Z" fill="#86868b"/></marker></defs>
    </svg>
    <div class="fig-cap">Logging isn't the goal — the loop is. Trace every request, score traffic with online evals, alert when quality drops, and feed each real failure back into the eval set so it can never silently return.</div>
  </div>
  <p>The mental model is a flywheel, not a filing cabinet. Run it like this:</p>
  <ol>
    <li><strong>Trace everything</strong> — full chain on every request, so any failure is reproducible.</li>
    <li><strong>Score it online</strong> — run evals (LLM-as-judge plus checks) on live traffic, asynchronously, so quality is measured continuously, not just at launch.</li>
    <li><strong>Alert on the drop</strong> — when the online score falls below a threshold, someone gets paged. This is how you beat the user to the bad news.</li>
    <li><strong>Curate failures into the eval set</strong> — every confirmed bad case becomes a permanent test, so the next release can't reintroduce it (this is the bridge to Ch.11's eval-driven iteration).</li>
  </ol>
  <div class="callout accent">
    <div class="ch">Say this in the interview</div>
    <p>"I'd trace the full chain — prompt, retrieved context, output, tool calls — not just the answer, so I can localize failures. Then I'd run online evals on production traffic with alerting, so we catch a regression before a customer does."</p>
  </div>

  <h2><span class="ix">5</span> Frameworks to Deploy</h2>
  <div class="sub">Three practices that turn a black box into a managed product.</div>
  <h3>① Trace the full chain</h3>
  <p>Log <em class="k">prompt + retrieved context + output + tool calls</em> as one linked trace, not scattered lines. This is what lets you answer the only question that matters when something breaks: <em>which box failed?</em> (Ch.1). Without the context in the trace, you can't separate a retrieval failure from a generation failure — and you'll "fix" the wrong one.</p>
  <h3>② Online evals + alerting</h3>
  <p>Evals aren't only a pre-launch gate (5.1) — run them continuously on a sample of live traffic, scored in the background with zero user-facing latency, with an alert when the score drops. This converts "we found out from a support ticket" into "we got paged at 2pm and rolled back by 2:30."</p>
  <h3>③ The production-to-eval flywheel</h3>
  <p>Every real-world failure your traces surface should be <strong>curated into the eval set as a permanent test case</strong>. Production becomes your richest source of test data, and your eval suite gets stronger every week instead of going stale. Bad cases stop being one-off fires and become regressions you can never ship again.</p>

  <h2><span class="ix">6</span> Worked Solution</h2>
  <div class="sub">The "it got worse" complaint — and whether you can even tell.</div>
  <div class="callout">
    <div class="ch">The prompt</div>
    <p style="font-family:var(--font-ui);font-weight:600;">"Users say your AI feature 'got worse' after last week's release. You have no idea whether that's true. What instrumentation should have been there — and what do you do right now?"</p>
  </div>
  <p><strong>Step 1 — Diagnose the real problem: you're blind.</strong> The complaint may be real or may be noise — and the fact that I can't tell <em>is</em> the failure. The fix is observability, not a guess.</p>
  <p><strong>Step 2 — What should have existed.</strong> A full trace on every request, so any answer is reproducible and attributable:</p>
  <div class="flow">
<span class="st">[one request, traced]</span>
   <span class="ar">↓</span>
<span class="st">prompt</span>     <span class="nt">what we actually asked the model</span>
<span class="st">context</span>    <span class="nt">what retrieval fed in   ← localize the failure here (Ch.1)</span>
<span class="st">output</span>     <span class="nt">what it returned</span>
<span class="st">feedback</span>   <span class="nt">thumbs · edit · regenerate · escalate</span>
   <span class="ar">↓</span>
<span class="nt"># now retrieval-fail vs generation-fail is visible — and replayable</span>
  </div>
  <p><strong>Step 3 — What I do now.</strong> Pull a sample of pre- and post-release traces and run the eval set on both. If the post-release eval score dropped, the regression is real — and the traces tell me where (retrieval, prompt, or model). If the score held, the complaints are perception or a narrow slice I can isolate.</p>
  <p><strong>Step 4 — Make sure it never happens blind again.</strong> Stand up online evals on live traffic with an alert threshold, and a pre-release eval gate (5.1). Curate the failing cases into the eval set so this exact regression is now a permanent test.</p>
  <div class="callout good">
    <div class="ch">Why this wins</div>
    <p>You turned a vague "it got worse" into a measurable question, answered it with traces and an eval instead of opinion, localized the cause, and closed the loop so the next regression gets caught by a machine at 2pm — not by a customer on Friday night. That is what instrumentation buys.</p>
  </div>

  <h2><span class="ix">7</span> Industry Case</h2>
  <div class="sub">A whole tooling category that exists for exactly this problem.</div>
  <h3>The LLM observability stack — LangSmith, Langfuse, Braintrust</h3>
  <p>The clearest proof that instrumentation is now core AI-PM infrastructure is that an entire tooling category grew up around it in 2024–25. <strong>LangSmith</strong> (from the LangChain team), <strong>Langfuse</strong> (open-source, self-hostable), and <strong>Braintrust</strong> (managed, fast trace search) all do the same essential job: capture full traces, run evals on them — including LLM-as-judge — and monitor production quality over time. By 2025 the pattern these tools converged on is exactly this lesson's loop: <em>structured tracing + continuous online evals + regression tests wired into CI/CD</em>, with online scoring run asynchronously on live traffic so it adds no latency.</p>
  <p>The payoff is concrete. Braintrust reports production users including <strong>Notion, Stripe, Zapier, and Vercel</strong>; by Braintrust's own account, <strong>Notion went from fixing on the order of 3 issues a day to about 30</strong> after adopting systematic tracing and evals. That's not a model upgrade — it's the same team catching and fixing roughly ten times more quality issues purely because they could finally <em>see</em> them. The model didn't get smarter; the product got observable.</p>
  <ul>
    <li><strong>Tracing is the foundation.</strong> Every tool starts by capturing the full chain — prompt, context, output, tool calls — because you can't evaluate or debug what you didn't record.</li>
    <li><strong>Online evals are the early-warning system.</strong> Scoring live traffic and alerting on drops is how teams catch regressions before users, instead of after.</li>
    <li><strong>The loop closes in CI.</strong> Production failures become eval cases that gate the next release — the flywheel, in real tooling.</li>
  </ul>
  <div class="callout accent">
    <div class="ch">The PM takeaway</div>
    <p>You measure quality (5.1) only if you instrument for it (5.2) — and a whole industry now exists to help you. The teams shipping trustworthy AI in 2026 aren't the ones with the biggest model; they're the ones who can see their product fail in a dashboard before a customer sees it fail in their face.</p>
  </div>

  <h2><span class="ix">✓</span> Check Yourself</h2>
  <div class="quiz" data-correct="0">
    <div class="q">Your AI product logs only the final output of each request. Why is that a problem when a bad answer appears?</div>
    <div class="opt" data-i="0"><span class="l">A</span><span>You can see THAT it failed but not WHERE — you can't tell a retrieval failure from a generation failure without the prompt and context in the trace.</span></div>
    <div class="opt" data-i="1"><span class="l">B</span><span>Outputs take too much storage.</span></div>
    <div class="opt" data-i="2"><span class="l">C</span><span>It's fine — the output is all that matters.</span></div>
    <div class="opt" data-i="3"><span class="l">D</span><span>Logging slows the model down too much to allow.</span></div>
    <div class="qexp">Logging the output is logging the symptom. To diagnose, you need the full chain — prompt + retrieved context + output + tool calls — so you can localize the failure (Ch.1's trace-the-chunk). Otherwise you guess, and guessing on a probabilistic system wastes weeks.</div>
  </div>
  <div class="quiz" data-correct="2">
    <div class="q">What's the point of running evals on live production traffic (online evals), not just before launch?</div>
    <div class="opt" data-i="0"><span class="l">A</span><span>To increase model latency.</span></div>
    <div class="opt" data-i="1"><span class="l">B</span><span>To replace user feedback entirely.</span></div>
    <div class="opt" data-i="2"><span class="l">C</span><span>To catch a quality regression early — get alerted when scores drop, before users notice and complain.</span></div>
    <div class="opt" data-i="3"><span class="l">D</span><span>To make the dashboard look busier.</span></div>
    <div class="qexp">Online evals score live traffic asynchronously and alert when quality drops below a threshold — your early-warning system. Combined with a pre-release eval gate and curating failures back into the eval set, that's the observability loop that beats users to the bad news.</div>
  </div>

  <h2><span class="ix">✎</span> Apply It Yourself</h2>
  <div class="sub">No worked answer this time — this one's your rep. Give it 10 minutes before you move on.</div>
  <div class="callout">
    <div class="ch">Your problem</div>
    <p style="font-family:var(--font-ui);font-weight:600;">"Users say your AI feature 'got worse' after last week's release. You have no data to confirm it. Decide what instrumentation should have existed and what you do right now."</p>
  </div>
  <p><strong>Hints</strong> (peek only if you're stuck):</p>
  <ul>
    <li>You need the full trace: prompt + retrieved context + output, not just the answer.</li>
    <li>Compare pre/post-release on an eval set to confirm it's real.</li>
    <li>The trap: guessing or arguing instead of measuring.</li>
  </ul>
  <table>
    <tr><th>A strong answer...</th><th>A weak answer...</th></tr>
    <tr><td>Specifies full-chain tracing; runs the eval set on pre/post traces to localize the cause.</td><td>Guesses it's the model.</td></tr>
    <tr><td>Stands up online evals + alerting so the next regression is caught first.</td><td>Waits for more complaints.</td></tr>
    <tr><td>Curates the failures into the eval set as regression tests.</td><td>Fixes one case and moves on.</td></tr>
  </table>
  <div class="callout accent">
    <div class="ch">Make it live</div>
    <p>Open an LLM observability tool's demo (LangSmith / Langfuse / Braintrust) and look at a trace. Could you tell retrieval-fail from generation-fail from it?</p>
  </div>

  <div class="callout good" style="margin-top:40px;">
    <div class="ch">Chapter 5 complete</div>
    <p>You can now run an AI product on the metrics that tell the truth — eval quality, cost-per-task, resolution — instead of vanity engagement, and you know how to instrument a product so you see its failures before your users do. DAU lies; you no longer fly blind. Next, <strong>Chapter 6 — Product Planning &amp; Prioritization</strong>: how to roadmap when the model keeps improving under you.</p>
  </div>
  __NAV__
</div>
`