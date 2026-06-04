/* ===== Chapter 11 lessons — AI PM by Rohit Swerashi =====
   One JS object entry per lesson: "N.Y": `<full lesson html>`
   Keep the 7-block structure. End each entry's content with __NAV__ (build injects nav). */

/* ---------------------------------------------------------------- 11.1 */
"11.1": `
<div class="wrap">
  <div class="les-kicker">Chapter 11 · Lesson 11.1</div>
  <h1 class="les-title">Eval-driven Iteration</h1>
  <div class="les-meta">
    <span class="pill">Improvement loops</span><span class="pill">~23 min read</span>
    <span class="pill">Prereq: Ch.5, Ch.10</span><span class="pill">Difficulty: core</span>
  </div>
  <p class="motto">When your AI product is weak, the junior instinct is to wait for the next model. The senior move is to look at thirty of your own failures — the fix is almost never the model.</p>

  <p class="lead">AI products don't get better because a bigger model showed up. They get better because someone ran a disciplined loop: <em class="k">ship, look at the failures, find the pattern, fix the cheapest lever, re-measure</em>. This lesson teaches that loop and its beating heart — <em class="k">error analysis</em>, the unglamorous practice of reading your product's real failures. Master it and you can improve any AI product on demand, instead of praying for the next release.</p>

  <h2><span class="ix">1</span> Your Mandate</h2>
  <div class="sub">What you own when "make it better" lands on your desk.</div>
  <p>Your mandate is to <strong>own the improvement loop and the discipline of looking at your data</strong>. You don't retrain the model; you find the failure classes and direct the cheapest fix that closes them — usually a prompt, retrieval, or data change, rarely a model swap (Ch.1.1). The trap is treating quality as something that arrives from outside (a vendor's new model). It's something you manufacture, iteration by iteration, by reading failures and fixing the biggest pattern.</p>

  <h2><span class="ix">2</span> Your Responsibilities</h2>
  <div class="sub">The loop, stage by stage — and where the PM actually works.</div>
  <table>
    <tr><th>Stage</th><th>What happens</th><th>Your role</th></tr>
    <tr><td><strong>Ship + log</strong></td><td>The feature runs; traces are captured (Ch.5.2)</td><td>Make sure failures are observable</td></tr>
    <tr><td><strong>Error analysis</strong></td><td>Read 30–50 real outputs; label and cluster failures</td><td>This is your core job — do it by hand</td></tr>
    <tr><td><strong>Find the failure class</strong></td><td>Group failures into a few named patterns</td><td>Decide which class is biggest and worth fixing</td></tr>
    <tr><td><strong>Fix the cheapest lever</strong></td><td>Prompt (10.2) / retrieval (1.2) / data — rarely model</td><td>Pick the lever that closes that class cheapest</td></tr>
    <tr><td><strong>Re-eval</strong></td><td>Run the eval set; did the class shrink?</td><td>Gate the change; then repeat</td></tr>
  </table>
  <p>The stage that separates real AI PMs from the rest is <strong>error analysis</strong>: actually reading the failures. It's tedious and un-delegatable, and it's where every other decision in the loop comes from. Skip it and you'll fix problems you imagine instead of the ones you have.</p>

  <h2><span class="ix">3</span> Metrics That Matter Here</h2>
  <div class="sub">How you know the loop is turning and the gains are real.</div>
  <table>
    <tr><th>Metric</th><th>Reads as</th><th>Why a PM watches it</th></tr>
    <tr><td><strong>Eval score over iterations</strong></td><td>Is quality trending up loop by loop?</td><td>The loop's whole purpose, made visible</td></tr>
    <tr><td><strong>Failure-class distribution</strong></td><td>Which pattern accounts for most failures?</td><td>Tells you exactly where to spend effort</td></tr>
    <tr><td><strong>Fix → re-eval cycle time</strong></td><td>How fast you close one loop</td><td>Faster loops compound into faster improvement</td></tr>
    <tr><td><strong>Share of gains from non-model fixes</strong></td><td>How much improvement came from prompt/retrieval/data</td><td>Usually most of it — the lesson's whole point</td></tr>
  </table>
  <div class="callout warn">
    <div class="ch">The trap — writing evals without looking at the data</div>
    <p>Teams love to design elaborate eval criteria up front — before reading a single real output. The result: you build careful tests for failures that rarely happen and miss the ones that dominate. Worse, your criteria <em>shift</em> once you finally look (a documented effect called "criteria drift"). <strong>Error analysis comes first: read the failures, let them tell you the criteria. Evaluation is human-driven sensemaking, not a spec you write blind.</strong></p>
  </div>

  <h2><span class="ix">4</span> How to Think Here</h2>
  <div class="sub">Turn a pile of failures into named classes — then fix the biggest one.</div>
  <div class="fig">
    <div class="fig-title">Error analysis — a pile of failures becomes a to-do list</div>
    <svg viewBox="0 0 520 280" xmlns="http://www.w3.org/2000/svg" font-family="Hanken Grotesk, sans-serif">
      <rect x="34" y="64" width="150" height="150" rx="10" fill="#f5f5f7" stroke="#dddddd" stroke-width="1"/>
      <circle cx="60" cy="84" r="3" fill="#86868b"/><circle cx="96" cy="78" r="3" fill="#86868b"/><circle cx="134" cy="90" r="3" fill="#86868b"/><circle cx="165" cy="82" r="3" fill="#86868b"/>
      <circle cx="55" cy="116" r="3" fill="#86868b"/><circle cx="100" cy="110" r="3" fill="#86868b"/><circle cx="140" cy="120" r="3" fill="#86868b"/><circle cx="168" cy="114" r="3" fill="#86868b"/>
      <circle cx="68" cy="148" r="3" fill="#86868b"/><circle cx="110" cy="152" r="3" fill="#86868b"/><circle cx="150" cy="144" r="3" fill="#86868b"/>
      <circle cx="60" cy="182" r="3" fill="#86868b"/><circle cx="105" cy="186" r="3" fill="#86868b"/><circle cx="150" cy="180" r="3" fill="#86868b"/>
      <text x="109" y="234" text-anchor="middle" font-size="9.5" fill="#86868b">~30 raw failures</text>
      <text x="109" y="249" text-anchor="middle" font-size="9" fill="#86868b">(look at your data)</text>
      <line x1="192" y1="139" x2="240" y2="139" stroke="#1d1d1f" stroke-width="1.5" marker-end="url(#e111)"/>
      <text x="216" y="130" text-anchor="middle" font-size="9" font-weight="700" fill="#1d1d1f">label</text>
      <text x="250" y="76" font-size="10" fill="#1d1d1f">Retrieval miss</text>
      <rect x="250" y="82" width="195" height="13" rx="3" fill="#b25000" opacity="0.65"/><text x="452" y="92" font-size="10" font-weight="700" fill="#b25000">14</text>
      <text x="250" y="115" font-size="10" fill="#1d1d1f">Wrong format</text>
      <rect x="250" y="121" width="112" height="13" rx="3" fill="#0071e3" opacity="0.6"/><text x="369" y="131" font-size="10" font-weight="700" fill="#0058b0">8</text>
      <text x="250" y="154" font-size="10" fill="#1d1d1f">Off tone</text>
      <rect x="250" y="160" width="70" height="13" rx="3" fill="#0071e3" opacity="0.45"/><text x="327" y="170" font-size="10" font-weight="700" fill="#1d1d1f">5</text>
      <text x="250" y="193" font-size="10" fill="#1d1d1f">Model too weak</text>
      <rect x="250" y="199" width="42" height="13" rx="3" fill="#86868b" opacity="0.5"/><text x="299" y="209" font-size="10" font-weight="700" fill="#86868b">3</text>
      <text x="350" y="240" text-anchor="middle" font-size="9.5" fill="#0a7d3c">fix the biggest class first — the model is the smallest bar</text>
      <defs><marker id="e111" markerWidth="8" markerHeight="8" refX="6" refY="3" orient="auto"><path d="M0,0 L6,3 L0,6 Z" fill="#1d1d1f"/></marker></defs>
    </svg>
    <div class="fig-cap">Error analysis turns a shapeless pile of failures into a ranked list of named classes. The biggest bar is where the gains are — and it's almost never "the model is too weak."</div>
  </div>
  <p>Run the loop like this:</p>
  <ol>
    <li><strong>Don't reach for the model.</strong> Before any upgrade, look at your data.</li>
    <li><strong>Pull 30–50 real failures</strong> from production traces.</li>
    <li><strong>Label and cluster them</strong> into a few named failure classes.</li>
    <li><strong>Fix the biggest class with the cheapest lever</strong> — prompt, then retrieval, then data; model last.</li>
    <li><strong>Re-eval and repeat.</strong> Confirm the class shrank without breaking others, then attack the next-biggest.</li>
  </ol>
  <div class="callout accent">
    <div class="ch">Say this in the interview</div>
    <p>"Before upgrading anything, I'd do error analysis — read 30 to 50 real failures and cluster them into classes. The biggest class is usually retrieval or prompt, not the model, so I fix that cheapest lever and re-run the eval. Quality is a loop you run, not a model you buy."</p>
  </div>

  <h2><span class="ix">5</span> Frameworks to Deploy</h2>
  <div class="sub">Three disciplines that make the loop work.</div>
  <h3>① Error analysis first</h3>
  <p>Always start by reading the data, not by writing eval criteria. Spend 30 minutes on 20–50 real outputs whenever you make a meaningful change; let the failures define the criteria. This is the single highest-leverage habit in AI product work, and the one teams most often skip because it isn't glamorous.</p>
  <h3>② The cheapest-lever order</h3>
  <p>To close a failure class, try levers in cost order: <em class="k">prompt → retrieval → data → model</em> (Ch.1.3). Most classes are closed by the first three. Reaching for the model first is the expensive reflex this whole course pushes against — it's rarely the bottleneck (Ch.1.1).</p>
  <h3>③ The closed loop, gated by evals</h3>
  <p>Ship → observe (Ch.5.2) → analyze → fix → re-eval, with the eval set as the gate (Ch.5.1, Ch.7.2). The loop only compounds if every fix is verified against real cases and locked in as a regression test. An "improvement" you didn't re-eval is a guess.</p>

  <h2><span class="ix">6</span> Worked Solution</h2>
  <div class="sub">The model-upgrade reflex, intercepted.</div>
  <div class="callout">
    <div class="ch">The prompt</div>
    <p style="font-family:var(--font-ui);font-weight:600;">"Our AI feature's quality is mediocre. An engineer wants to upgrade to the newest, most expensive model to fix it. What do you do first?"</p>
  </div>
  <p><strong>Step 1 — Intercept the reflex.</strong> Upgrading the model is the expensive guess. Before spending, I'd do error analysis — because if the failures are retrieval or format problems, a bigger model fixes none of them and we've paid more for the same mediocrity.</p>
  <div class="flow">
<span class="st">resist</span>     <span class="nt">don't buy the bigger model yet</span>
   <span class="ar">↓</span>
<span class="st">analyze</span>    <span class="nt">pull 30 real failures · label · cluster into classes</span>
   <span class="ar">↓</span>
<span class="st">find</span>       <span class="nt">retrieval misses 40% · bad format 25% · model-weakness only 10%</span>
   <span class="ar">↓</span>
<span class="st">fix cheap</span>  <span class="nt">hybrid retrieval (1.2) + a format spec (10.2) → re-eval</span>
  </div>
  <p><strong>Step 2 — Read the failures.</strong> Thirty real cases, labeled, cluster into classes. Say it comes back: 40% retrieval misses, 25% wrong format, 15% tone, and only ~10% genuine "the model couldn't reason it." That distribution is the answer.</p>
  <p><strong>Step 3 — Fix the biggest classes cheaply.</strong> Retrieval misses → add hybrid retrieval (Ch.1.2). Format → tighten the prompt with a format spec and few-shot (Ch.10.2). These are days of work, near-zero ongoing cost, and they target two-thirds of the failures.</p>
  <p><strong>Step 4 — Re-eval, then reconsider the model.</strong> Re-run the eval set; if retrieval and format gains lift the score materially, the "mediocre" problem is largely solved without a model swap. If a real failure class genuinely needs more capability, <em>now</em> the model upgrade is an evidence-based decision, not a reflex.</p>
  <div class="callout good">
    <div class="ch">Why this wins</div>
    <p>You replaced an expensive guess with a measured diagnosis, fixed the two biggest failure classes with the cheapest levers, and kept the model upgrade as an evidence-gated option. Research backs the instinct: studies in 2025–26 found roughly half of the gain from a model upgrade actually comes from better prompting, and structured prompts alone can lift accuracy 20–30%. The model is rarely the bottleneck.</p>
  </div>

  <h2><span class="ix">7</span> Industry Case</h2>
  <div class="sub">The methodology that became AI product management's core skill.</div>
  <h3>Error analysis — "look at your data" as the standard practice</h3>
  <p>By 2025, the most-repeated advice from practitioners running real AI products (notably ML engineer Hamel Husain and collaborators, whose eval guidance circulated widely among PMs) converged on a single, almost stubborn point: <strong>"evals aren't about writing tests first — they're about error analysis."</strong> The recommended ritual is concrete and humble: whenever you make a meaningful change, spend ~30 minutes manually reading 20–50 of your product's outputs, labeling pass/fail with a short critique, and clustering the failures into classes. Their warning is pointed — many teams craft elaborate eval criteria <em>without first looking at the data</em>, then waste effort on failures that barely occur. And they document <strong>"criteria drift"</strong>: your sense of what "good" means actually changes once you read real outputs, which is exactly why evaluation has to be a human-driven loop, not a spec written blind.</p>
  <p>The "model is rarely the bottleneck" half is now backed by research, not just intuition. A 2025–26 MIT Sloan study found that <strong>only about half of the performance gain from adopting a more advanced model came from the model itself</strong> — the other half came from how users adapted their prompts; and separate work found structured prompting alone improving accuracy on the order of 20–30% with no model change. The leading AI companies, the same sources note, win not by having the biggest model but by having the best <em>data and retrieval</em> for their domain.</p>
  <ul>
    <li><strong>Reading failures is the job.</strong> The highest-leverage AI-PM activity is unglamorous manual error analysis — and most teams skip it.</li>
    <li><strong>Criteria emerge from data.</strong> You discover your real eval criteria by looking, not by guessing up front.</li>
    <li><strong>Gains live in the cheap levers.</strong> Prompt, retrieval, and data improvements deliver most of the quality — the model upgrade is the last resort, not the first.</li>
  </ul>
  <div class="callout accent">
    <div class="ch">The PM takeaway</div>
    <p>AI products improve by closing a loop you run by hand: read the failures, find the biggest class, fix the cheapest lever, re-eval. Waiting for a bigger model is the amateur's substitute for the work. The professional looks at the data — and almost always finds the fix was never the model.</p>
  </div>

  <h2><span class="ix">✓</span> Check Yourself</h2>
  <div class="quiz" data-correct="2">
    <div class="q">Your AI feature is underperforming. What should you do before considering a model upgrade?</div>
    <div class="opt" data-i="0"><span class="l">A</span><span>Nothing — just buy the biggest model available.</span></div>
    <div class="opt" data-i="1"><span class="l">B</span><span>Write a detailed eval spec from your imagination, then build to it.</span></div>
    <div class="opt" data-i="2"><span class="l">C</span><span>Error analysis — read 30–50 real failures, cluster them into classes, and fix the biggest class with the cheapest lever.</span></div>
    <div class="opt" data-i="3"><span class="l">D</span><span>Ask users to be more patient.</span></div>
    <div class="qexp">Improvement starts by looking at your data. Reading and clustering real failures reveals the dominant class — usually retrieval or prompt, not the model — which you then fix with the cheapest lever and re-eval. Writing eval criteria before looking (B) creates tests for problems you don't have.</div>
  </div>
  <div class="quiz" data-correct="0">
    <div class="q">Error analysis on 30 failures shows: 40% retrieval misses, 25% format, 15% tone, 10% genuine model weakness. Best first move?</div>
    <div class="opt" data-i="0"><span class="l">A</span><span>Fix retrieval (the biggest class) with the cheapest lever, then re-eval — not upgrade the model.</span></div>
    <div class="opt" data-i="1"><span class="l">B</span><span>Upgrade the model to fix the 10%.</span></div>
    <div class="opt" data-i="2"><span class="l">C</span><span>Fix tone first because it's most visible.</span></div>
    <div class="opt" data-i="3"><span class="l">D</span><span>Do nothing until the next model release.</span></div>
    <div class="qexp">Attack the biggest failure class first, and use the cheapest lever that closes it — here, retrieval (Ch.1.2). The model-weakness class is the smallest (10%), so a model upgrade would spend the most to fix the least. Fix, re-eval, then move to the next-biggest class.</div>
  </div>
  <h2><span class="ix">✎</span> Apply It Yourself</h2>
  <div class="sub">No worked answer this time — this one's your rep. Give it 10 minutes before you move on.</div>
  <div class="callout">
    <div class="ch">Your problem</div>
    <p style="font-family:var(--font-ui);font-weight:600;">"Your AI feature's quality is mediocre and an engineer wants to upgrade to the newest, most expensive model. What do you do first — and how do you decide if the model is even the problem?"</p>
  </div>
  <p><strong>Hints</strong> (peek only if you're stuck):</p>
  <ul>
    <li>Error analysis first: read 30 real failures and cluster them.</li>
    <li>Fix the biggest class with the cheapest lever (prompt / retrieval / data).</li>
    <li>The trap: buying a bigger model before looking at the data.</li>
  </ul>
  <table>
    <tr><th>A strong answer...</th><th>A weak answer...</th></tr>
    <tr><td>Does error analysis, finds the dominant failure class, fixes the cheapest lever, re-evals.</td><td>Upgrades the model on a hunch.</td></tr>
    <tr><td>Reserves the model swap for a class that genuinely needs more capability.</td><td>Treats the model as the default fix.</td></tr>
    <tr><td>Confirms the fix on the eval set.</td><td>Declares victory off one example.</td></tr>
  </table>
  <div class="callout accent">
    <div class="ch">Make it live</div>
    <p>Pull 20 real outputs from any AI tool you use, label them pass/fail, and cluster the failures. Bet: is the biggest class really 'the model'?</p>
  </div>
  __NAV__
</div>
`,

/* ---------------------------------------------------------------- 11.2 */
"11.2": `
<div class="wrap">
  <div class="les-kicker">Chapter 11 · Lesson 11.2</div>
  <h1 class="les-title">The Data Flywheel</h1>
  <div class="les-meta">
    <span class="pill">Improvement loops</span><span class="pill">~23 min read</span>
    <span class="pill">Prereq: 11.1, Ch.4</span><span class="pill">Difficulty: core</span>
  </div>
  <p class="motto">Anyone can rent the same model you use. The one thing they can't rent is the data your users generate every day — if you designed the product to capture it.</p>

  <p class="lead">Lesson 11.1 was the tactical loop; this is the strategic one. A <em class="k">data flywheel</em> is the cycle where usage produces data, data improves the product, and a better product drives more usage — compounding into the one moat in AI that competitors can't buy. But flywheels don't spin for free: they turn only if you design the product to <em class="k">capture the right feedback</em>. This lesson is how a PM builds a moat out of usage.</p>

  <h2><span class="ix">1</span> Your Mandate</h2>
  <div class="sub">What you own when the model is rentable but the moat isn't.</div>
  <p>Your mandate is to <strong>design the product so usage compounds into proprietary advantage</strong> — to make the flywheel turn. You don't train the model; you decide what signal each interaction produces, how it's captured, and how it feeds back into improvement (the 11.1 loop). The strategic truth underneath: the model is a commodity anyone can rent, so your durable edge is the data only your users can generate — and capturing it is a <em class="k">product-design decision you own</em>, not an ML detail.</p>

  <h2><span class="ix">2</span> Your Responsibilities</h2>
  <div class="sub">What makes a flywheel spin — and what leaves it stalled.</div>
  <table>
    <tr><th>A flywheel needs</th><th>What stalls it</th></tr>
    <tr><td><strong>A closed loop</strong> — signal feeds a real improvement</td><td>Data collected but never used to improve anything</td></tr>
    <tr><td><strong>Domain-specific signals</strong> — you capture the <em>right</em> data</td><td>Generic logs that don't reveal quality</td></tr>
    <tr><td><strong>An action layer</strong> — the data changes the product</td><td>A dashboard nobody acts on</td></tr>
    <tr><td><strong>Lightweight capture</strong> — easy to give feedback</td><td>Relying on a thumbs button nobody clicks</td></tr>
  </table>
  <p>The most common failure is the last row. Teams add a thumbs up/down, ship, and discover the flywheel has no fuel because <strong>almost nobody clicks it</strong>. The PM's real design work is capturing signal users give <em>for free</em> — their corrections and their behavior — not begging for ratings.</p>

  <h2><span class="ix">3</span> Metrics That Matter Here</h2>
  <div class="sub">How you tell a spinning flywheel from a decorative one.</div>
  <table>
    <tr><th>Metric</th><th>Reads as</th><th>Why a PM watches it</th></tr>
    <tr><td><strong>Feedback capture rate</strong></td><td>% of interactions that yield a usable signal</td><td>No signal, no fuel — this is the tank gauge</td></tr>
    <tr><td><strong>Signal quality</strong></td><td>Does the signal actually indicate good vs bad?</td><td>Corrections beat thumbs; implicit beats nothing</td></tr>
    <tr><td><strong>Signal → shipped-fix time</strong></td><td>How fast feedback becomes a real improvement</td><td>A closed loop, or a data graveyard?</td></tr>
    <tr><td><strong>Quality-vs-usage trend</strong></td><td>Is the product getting better as usage grows?</td><td>The flywheel actually compounding (or not)</td></tr>
  </table>
  <div class="callout warn">
    <div class="ch">The trap — the thumbs button nobody clicks</div>
    <p>The default feedback design is a thumbs up/down, and the default outcome is that the analytics show almost no one uses it. You've built a flywheel with an empty tank. <strong>The fix is to capture signal users produce naturally:</strong> let them <em>edit</em> the output (a correction is the richest signal there is — it shows not just that it was wrong but how to make it right), and log <em>implicit</em> behavior (did they accept it, copy it, re-ask, or abandon?). Explicit ratings are the garnish, not the meal.</p>
  </div>

  <h2><span class="ix">4</span> How to Think Here</h2>
  <div class="sub">Usage feeds data; data feeds the product; the product feeds usage.</div>
  <div class="fig">
    <div class="fig-title">The data flywheel — the only AI moat that compounds</div>
    <svg viewBox="0 0 520 290" xmlns="http://www.w3.org/2000/svg" font-family="Hanken Grotesk, sans-serif">
      <path d="M260,82 A68,68 0 0 1 328,150" fill="none" stroke="#0071e3" stroke-width="2.4" marker-end="url(#fw)"/>
      <path d="M328,150 A68,68 0 0 1 260,218" fill="none" stroke="#0071e3" stroke-width="2.4" marker-end="url(#fw)"/>
      <path d="M260,218 A68,68 0 0 1 192,150" fill="none" stroke="#0071e3" stroke-width="2.4" marker-end="url(#fw)"/>
      <path d="M192,150 A68,68 0 0 1 260,82" fill="none" stroke="#0071e3" stroke-width="2.4" marker-end="url(#fw)"/>
      <text x="260" y="146" text-anchor="middle" font-size="11.5" font-weight="800" fill="#1d1d1f">DATA</text>
      <text x="260" y="162" text-anchor="middle" font-size="11.5" font-weight="800" fill="#1d1d1f">FLYWHEEL</text>
      <text x="260" y="46" text-anchor="middle" font-size="11" font-weight="700" fill="#0058b0">More usage</text>
      <text x="344" y="154" text-anchor="start" font-size="11" font-weight="700" fill="#0058b0">More proprietary data</text>
      <text x="260" y="262" text-anchor="middle" font-size="11" font-weight="700" fill="#0058b0">Better product</text>
      <text x="176" y="154" text-anchor="end" font-size="11" font-weight="700" fill="#0058b0">Stickier, more trust</text>
      <text x="260" y="284" text-anchor="middle" font-size="9.5" fill="#0a7d3c">after 12–24 months of compounding, the gap becomes hard to cross</text>
      <defs><marker id="fw" markerWidth="9" markerHeight="9" refX="6" refY="3" orient="auto"><path d="M0,0 L6,3 L0,6 Z" fill="#0071e3"/></marker></defs>
    </svg>
    <div class="fig-cap">Each turn feeds the next: usage generates proprietary data, which improves the product, which deepens trust and drives more usage. The model is rentable; this loop is not — and it compounds.</div>
  </div>
  <p>To build a flywheel that actually turns:</p>
  <ol>
    <li><strong>Name the signal</strong> each interaction can produce (an accept, an edit, a re-ask).</li>
    <li><strong>Capture it lightweight</strong> — corrections and implicit behavior, not just a thumbs button.</li>
    <li><strong>Build the action layer</strong> — feed signals into the 11.1 loop so the product measurably improves.</li>
    <li><strong>Close the loop fast</strong> — the quicker signal becomes a shipped fix, the faster it spins.</li>
    <li><strong>Protect it</strong> — it's the moat; it's what makes you un-rentable (Ch.4, Ch.6).</li>
  </ol>
  <div class="callout accent">
    <div class="ch">Say this in the interview</div>
    <p>"Our moat isn't the model — anyone can rent that. It's the data flywheel: every interaction produces a signal we capture (mostly user corrections and implicit behavior, not thumbs), feed into our eval loop, and ship as improvements. After a year of compounding, a competitor can't catch up just by using the same model."</p>
  </div>

  <h2><span class="ix">5</span> Frameworks to Deploy</h2>
  <div class="sub">Three rules for building a moat out of usage.</div>
  <h3>① The three elements</h3>
  <p>A real flywheel needs all three: a <em class="k">closed feedback loop</em> (signal actually improves the product), <em class="k">domain-specific signals</em> (you capture data that reveals quality in <em>your</em> domain), and an <em class="k">action layer</em> (the data drives real changes, not a dashboard). Missing any one and the wheel is decorative.</p>
  <h3>② Capture correction, not just rating</h3>
  <p>Rank your signals by richness: a <strong>correction</strong> (the user edits the output) is gold — it shows what was wrong <em>and</em> the right answer; <strong>implicit behavior</strong> (accept, copy, re-ask, abandon) is plentiful and free; an <strong>explicit thumbs</strong> is the weakest and rarest. Design the product so giving a correction is the natural next action, and log behavior automatically.</p>
  <h3>③ The flywheel is the moat</h3>
  <p>This is the strategic payoff of the whole course's "the model isn't the moat" thread (Ch.4, Ch.6). Proprietary, compounding, usage-generated data is the one advantage a competitor can't rent, copy, or skip — they'd need your users and your time. Treat the flywheel as the company's core asset and design to protect it.</p>

  <h2><span class="ix">6</span> Worked Solution</h2>
  <div class="sub">"We have no moat — anyone can use the same model."</div>
  <div class="callout">
    <div class="ch">The prompt</div>
    <p style="font-family:var(--font-ui);font-weight:600;">"Leadership is worried our AI product has no moat — competitors can use the exact same model. How do you build one?"</p>
  </div>
  <p><strong>Step 1 — Agree, then reframe.</strong> They're right that the model is no moat — it's rentable. The moat we can build is a data flywheel: an advantage that grows with every user and can't be bought off the shelf.</p>
  <div class="flow">
<span class="st">not the model</span>  <span class="nt">anyone can rent it — that is not a moat</span>
   <span class="ar">↓</span>
<span class="st">capture</span>        <span class="nt">let users EDIT outputs (corrections) + log implicit signals (accept · copy · re-ask)</span>
   <span class="ar">↓</span>
<span class="st">act</span>            <span class="nt">feed signals into the eval loop (11.1) so the product measurably improves</span>
   <span class="ar">↓</span>
<span class="st">compound</span>       <span class="nt">more usage → more data → better product → more usage</span>
  </div>
  <p><strong>Step 2 — Design the capture.</strong> Crucially, not a thumbs button (nobody clicks it). I'd make <em>editing the output</em> a natural part of the flow — every edit is a labeled correction — and log implicit signals (did they accept it, copy it, re-ask, abandon?). That's high-volume, high-quality fuel users give us for free.</p>
  <p><strong>Step 3 — Build the action layer.</strong> Pipe those signals into the eval-driven loop from 11.1: corrections become eval cases and training-data candidates; implicit signals surface failure classes. The product improves on data only we have.</p>
  <p><strong>Step 4 — Let it compound, and protect it.</strong> Each turn makes us a little better and a little stickier, which brings more usage and more data. Over a year that lead compounds into something a competitor on the same model can't close — because they don't have our users' corrections. That's the moat.</p>
  <div class="callout good">
    <div class="ch">Why this wins</div>
    <p>You reframed "no moat" into a concrete, ownable plan: capture the right signals (corrections and implicit behavior, not thumbs), close the loop so they improve the product, and let usage compound the advantage. The model stays rentable; your data flywheel becomes the thing competitors can't rent.</p>
  </div>

  <h2><span class="ix">7</span> Industry Case</h2>
  <div class="sub">The moat that compounds — and why thumbs buttons don't fill it.</div>
  <h3>Tesla and Copilot — flywheels you can't rent your way past</h3>
  <p>The canonical data flywheel is <strong>Tesla's self-driving program</strong>: by 2023 its fleet had reportedly accumulated <strong>over 300 million miles of real-world driving data</strong>, and every time a driver engages or disengages Autopilot, the car captures another edge case that feeds the next model. No competitor can rent that — it would take their own fleet and their own years. <strong>GitHub Copilot</strong> shows the same shape in software: after <strong>12–24 months of interaction data inside customers' codebases</strong>, internally tuned instances reportedly outperform any public model, and switching away becomes impractical. The reported pattern across cases is blunt — more usage produces more proprietary data, which produces a better product, which produces more usage, and after roughly a year or two of compounding <strong>the gap becomes very hard to cross</strong>.</p>
  <p>But the same body of practice is equally blunt about how flywheels stall: teams lean on a thumbs up/down and find <em>almost nobody clicks it</em>. The fix that recurs everywhere is to capture what users give naturally — <strong>corrections</strong> (letting users edit the output, which reveals both the error and the fix) and <strong>implicit signals</strong> (abandonment, copy/paste, follow-up queries). Explicit ratings offer precision but no volume; implicit signals offer volume; corrections offer both richness and intent. The flywheel only spins if the feedback design fills the tank.</p>
  <ul>
    <li><strong>The moat is usage-generated data, not the model.</strong> Tesla's miles and Copilot's in-codebase data are un-rentable by construction.</li>
    <li><strong>It compounds, and then it's a wall.</strong> A year-plus of accumulated signal is a lead competitors can't buy their way past.</li>
    <li><strong>Capture is a design decision.</strong> Corrections and implicit behavior fuel the wheel; a thumbs button leaves it empty.</li>
  </ul>
  <div class="callout accent">
    <div class="ch">The PM takeaway</div>
    <p>The only AI moat that compounds is the data your users generate — and whether you capture it is a product-design choice you own. Build the flywheel: capture corrections and behavior (not thumbs), close the loop into eval-driven improvement (11.1), and let usage turn a rentable model into an un-rentable advantage.</p>
  </div>

  <h2><span class="ix">✓</span> Check Yourself</h2>
  <div class="quiz" data-correct="1">
    <div class="q">Your AI product added a thumbs up/down for feedback, but analytics show almost nobody uses it. Best fix?</div>
    <div class="opt" data-i="0"><span class="l">A</span><span>Make the thumbs buttons bigger and nag users to click.</span></div>
    <div class="opt" data-i="1"><span class="l">B</span><span>Capture signal users give naturally — let them edit outputs (corrections) and log implicit behavior (accept, copy, re-ask).</span></div>
    <div class="opt" data-i="2"><span class="l">C</span><span>Give up on feedback entirely.</span></div>
    <div class="opt" data-i="3"><span class="l">D</span><span>Only use a bigger model so feedback isn't needed.</span></div>
    <div class="qexp">Thumbs buttons reliably go unused, starving the flywheel. The richest, most plentiful signals are corrections (an edit shows what was wrong and the fix) and implicit behavior (accept/copy/re-ask/abandon) — captured automatically, in the natural flow, without begging for a rating.</div>
  </div>
  <div class="quiz" data-correct="3">
    <div class="q">Why is a data flywheel a stronger moat than the model an AI product runs on?</div>
    <div class="opt" data-i="0"><span class="l">A</span><span>Models are illegal to reuse.</span></div>
    <div class="opt" data-i="1"><span class="l">B</span><span>Flywheels are cheaper to build.</span></div>
    <div class="opt" data-i="2"><span class="l">C</span><span>The model never matters at all.</span></div>
    <div class="opt" data-i="3"><span class="l">D</span><span>Competitors can rent the same model, but they can't rent your users' compounding, usage-generated data — after 12–24 months that lead is very hard to cross.</span></div>
    <div class="qexp">The model is a commodity anyone can rent; proprietary data generated by your users (Tesla's miles, Copilot's in-codebase signal) is not. It compounds — more usage, more data, better product — into a lead competitors can't buy. Capturing that data is the PM's design job.</div>
  </div>

  <h2><span class="ix">✎</span> Apply It Yourself</h2>
  <div class="sub">No worked answer this time — this one's your rep. Give it 10 minutes before you move on.</div>
  <div class="callout">
    <div class="ch">Your problem</div>
    <p style="font-family:var(--font-ui);font-weight:600;">"Leadership worries your AI product has 'no moat — competitors use the same model.' Design the moat: what signal you'd capture and how you'd make it compound."</p>
  </div>
  <p><strong>Hints</strong> (peek only if you're stuck):</p>
  <ul>
    <li>The model is rentable; the moat is the data your users generate.</li>
    <li>Capture corrections and implicit behavior, not just a thumbs button.</li>
    <li>The trap: relying on thumbs up/down that nobody clicks.</li>
  </ul>
  <table>
    <tr><th>A strong answer...</th><th>A weak answer...</th></tr>
    <tr><td>Designs correction + implicit-signal capture feeding an eval / improvement loop.</td><td>Adds a thumbs button and hopes.</td></tr>
    <tr><td>Builds the action layer so signal becomes shipped improvement.</td><td>Collects data nobody uses.</td></tr>
    <tr><td>Explains the compounding (usage → data → better → more usage).</td><td>Treats the model as the moat.</td></tr>
  </table>
  <div class="callout accent">
    <div class="ch">Make it live</div>
    <p>Look at an AI product you use: what signal are you giving it for free (edits, re-asks, copies)? Is it capturing that — or wasting it?</p>
  </div>

  <div class="callout good" style="margin-top:40px;">
    <div class="ch">Chapter 11 complete</div>
    <p>You can now improve an AI product the way the best teams do: run the eval-driven loop and fix the cheapest lever from real failure analysis (11.1), and design the data flywheel so usage compounds into a moat the model alone can never give you (11.2). Improvement is a loop you run and a wheel you build — not a release you wait for. Next, <strong>Chapter 12 — Customer Comms &amp; GTM for AI</strong>: selling a probability honestly.</p>
  </div>
  __NAV__
</div>
`