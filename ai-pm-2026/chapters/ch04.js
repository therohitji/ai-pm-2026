/* ===== Chapter 04 lessons — AI PM by Rohit Swerashi =====
   One JS object entry per lesson: "N.Y": `<full lesson html>`
   Keep the 7-block structure. End each entry's content with __NAV__ (build injects nav). */

/* ---------------------------------------------------------------- 4.1 */
"4.1": `
<div class="wrap">
  <div class="les-kicker">Chapter 4 · Lesson 4.1</div>
  <h1 class="les-title">Finding the Right Problem in an AI-saturated Market</h1>
  <div class="les-meta">
    <span class="pill">Product research</span><span class="pill">~26 min read</span>
    <span class="pill">Prereq: Ch.1–3</span><span class="pill">Difficulty: core</span>
  </div>
  <p class="motto">The model is a commodity you rent by the token. The problem is the only thing you can actually own — and most teams are racing to build on a problem nobody will pay to keep solved.</p>

  <p class="lead">Chapters 1–3 made you literate in how AI systems work. This chapter makes you dangerous at the thing that actually decides whether a product lives: <em class="k">problem selection</em>. In a market where anyone can wrap a frontier model in a weekend, the scarce resource is no longer the model — it's a real workflow worth automating. By the end of this lesson you'll look at any AI product idea and say, with evidence, whether it's a <em class="k">feature</em> the next model release will erase, or a <em class="k">company</em> with something durable underneath.</p>

  <h2><span class="ix">1</span> Your Mandate</h2>
  <div class="sub">What you are actually expected to own when the market is flooded.</div>
  <p>Your mandate is to <strong>own the choice of problem</strong> — and to defend the team from falling in love with a demo. Everyone on the team can build the demo; the model makes that easy now. Almost no one is asking the only question that compounds: <em class="k">is this a workflow worth owning, or a trick worth tweeting?</em></p>
  <p>The reframe that makes you senior: <strong>the model is rented, the problem is owned.</strong> You can swap the underlying model in an afternoon — so the model is never your moat. The most expensive mistake in AI is not picking the wrong model; it's spending two years building on a problem that the next frontier release, or an incumbent's free checkbox, solves for nothing. Your job is to make sure that doesn't happen.</p>

  <h2><span class="ix">2</span> Your Responsibilities</h2>
  <div class="sub">The concrete judgment calls that land on your desk.</div>
  <table>
    <tr><th>You own</th><th>You do NOT own</th></tr>
    <tr><td><strong>Problem selection</strong> — which workflow is worth automating at all</td><td>The model and its raw capability (you rent both)</td></tr>
    <tr><td><strong>The "feature vs company" verdict</strong> — is there anything here to defend?</td><td>Whether the model improves — it will, on someone else's schedule</td></tr>
    <tr><td><strong>Workflow depth</strong> — how much of a real job the product owns end to end</td><td>The API price per token</td></tr>
    <tr><td><strong>Probabilistic fit</strong> — choosing problems where "sometimes wrong" is survivable (Lesson 4.2)</td><td>The model's benchmark scores</td></tr>
  </table>
  <p>Notice the pattern from Chapter 1, applied to strategy: you own <strong>the choice and the boundary</strong>, not the raw capability. A PM who debates which model to use is doing the easy, rentable part. A PM who can prove the problem will still be valuable after the next model release is doing the part that actually pays.</p>

  <h2><span class="ix">3</span> Metrics That Matter Here</h2>
  <div class="sub">Product-research has its own scorecard — and "the demo got 2M views" is not on it.</div>
  <table>
    <tr><th>Signal</th><th>Reads as</th><th>Why a PM watches it</th></tr>
    <tr><td><strong>Workflow depth</strong></td><td>How many steps of a real job you own end to end</td><td>Thin = anyone copies it; deep = hard to rip out</td></tr>
    <tr><td><strong>Willingness to pay</strong></td><td>Would they send an invoice, not just applause?</td><td>Separates a viral tweet from a business</td></tr>
    <tr><td><strong>Model-overhang exposure</strong></td><td>How much of your value the next model gives away free</td><td>It is literally your shelf life</td></tr>
    <tr><td><strong>Defensibility accrual</strong></td><td>Does usage build a moat — data, lock-in, distribution?</td><td>Whether you compound or stay flat and copyable</td></tr>
    <tr><td><strong>Problem intensity</strong></td><td>Frequency × pain of the underlying job</td><td>Low intensity = nobody bothers to switch to you</td></tr>
  </table>
  <div class="callout warn">
    <div class="ch">The trap — applause is not an invoice</div>
    <p>The deadliest research error in AI is treating a <strong>viral demo as validation</strong>. A demo measures novelty; a business needs need. Plenty of "look what AI can do" products rack up millions of views and zero retained, paying users. <strong>Always convert excitement into the invoice test: would this person pay to keep it next month?</strong> If the honest answer is "they'd shrug," you found a party trick, not a problem.</p>
  </div>

  <h2><span class="ix">4</span> How to Think Here</h2>
  <div class="sub">Two dials decide an AI product's fate. Plot any idea on them first.</div>
  <div class="fig">
    <div class="fig-title">The kill zone — feature vs company</div>
    <svg viewBox="0 0 520 320" xmlns="http://www.w3.org/2000/svg" font-family="Hanken Grotesk, sans-serif">
      <rect x="80" y="149" width="205" height="101" fill="#b25000" opacity="0.08"/>
      <rect x="285" y="48" width="205" height="101" fill="#0a7d3c" opacity="0.08"/>
      <line x1="285" y1="48" x2="285" y2="250" stroke="#dddddd" stroke-width="1"/>
      <line x1="80" y1="149" x2="490" y2="149" stroke="#dddddd" stroke-width="1"/>
      <line x1="80" y1="250" x2="490" y2="250" stroke="#1d1d1f" stroke-width="1.2"/>
      <line x1="80" y1="250" x2="80" y2="48" stroke="#1d1d1f" stroke-width="1.2"/>
      <text x="285" y="288" text-anchor="middle" font-size="11" fill="#86868b">workflow depth   (shallow → deep)</text>
      <text x="42" y="149" text-anchor="middle" font-size="11" fill="#86868b" transform="rotate(-90 42 149)">defensibility / moat</text>
      <text x="182" y="102" text-anchor="middle" font-size="9.5" fill="#86868b">niche · fragile</text>
      <text x="388" y="204" text-anchor="middle" font-size="9.5" fill="#86868b">deep but copyable</text>
      <text x="182" y="182" text-anchor="middle" font-size="12" font-weight="700" fill="#b25000">WRAPPER GRAVEYARD</text>
      <text x="182" y="199" text-anchor="middle" font-size="9" fill="#b25000">one model release from irrelevant</text>
      <rect x="132" y="211" width="100" height="23" rx="11.5" fill="#ffffff" stroke="#b25000" stroke-width="1"/>
      <text x="182" y="226" text-anchor="middle" font-size="9.5" fill="#1d1d1f">"ChatGPT for X"</text>
      <text x="388" y="81" text-anchor="middle" font-size="12" font-weight="700" fill="#0a7d3c">DURABLE COMPANY</text>
      <text x="388" y="98" text-anchor="middle" font-size="9" fill="#0a7d3c">model upgrades make it stronger</text>
      <rect x="338" y="110" width="100" height="23" rx="11.5" fill="#ffffff" stroke="#0a7d3c" stroke-width="1"/>
      <text x="388" y="125" text-anchor="middle" font-size="9.5" fill="#1d1d1f">vertical agent</text>
    </svg>
    <div class="fig-cap">Two dials decide an AI product's fate: how deep the workflow you own, and whether using it builds a moat. Bottom-left — a thin layer over a shallow task — is where the model maker or an incumbent steamrolls you; the job is to climb toward the top-right.</div>
  </div>
  <p>When you're handed an AI product idea, do not start with "which model" or "what features." Start by plotting it on those two dials, then run this loop:</p>
  <ol>
    <li><strong>Name the workflow, not the feature.</strong> "Writes copy" is a feature. "Runs a brand's entire campaign from brief to published, on-voice, with approvals" is a workflow. Always zoom out to the job.</li>
    <li><strong>Run the feature-vs-company test.</strong> Ask: if the best model got 30% better next quarter, does that <em>help</em> us or <em>erase</em> us? If it erases you, you're a feature.</li>
    <li><strong>Measure workflow depth.</strong> Count the steps of the real job you own end to end. One step = a wrapper. Many connected steps = something hard to rip out.</li>
    <li><strong>Check the moat accrual.</strong> Does every user make the product harder to leave — proprietary data, integrations, learned preferences? If usage doesn't compound, you stay copyable forever.</li>
    <li><strong>Confirm willingness to pay.</strong> The invoice test, not the applause test.</li>
  </ol>
  <div class="callout accent">
    <div class="ch">Say this in the interview</div>
    <p>"Before we talk about the model, I want to know if this is a feature or a company — would a frontier-model release next quarter erase our value or deepen it? That answer decides whether we should build this at all."</p>
  </div>

  <h2><span class="ix">5</span> Frameworks to Deploy</h2>
  <div class="sub">Name these and you sound like someone who has watched products die — because you'll have the vocabulary for why.</div>
  <h3>① The "feature or a company?" test</h3>
  <p>One question, brutally applied: <strong>would a frontier-model release, or an incumbent flipping on a free checkbox, erase your reason to exist?</strong> If yes, you're a feature — fine as a feature inside a bigger product, fatal as a standalone company. The graveyard is full of single-prompt tools that were a feature pretending to be a startup.</p>
  <h3>② The workflow-depth test</h3>
  <p>Draw the user's <em>actual job</em> as a sequence of steps and shade the ones your product owns. A wrapper owns one box (model in, text out). A defensible product owns the messy connective tissue around the model — data ingestion, approvals, integrations, the feedback loop. <strong>Depth is the moat the model can't hand to your competitor.</strong></p>
  <h3>③ The four moats — earn the defensibility</h3>
  <p>The model is not a moat. These four are: <em class="k">proprietary data</em> (that improves with use), <em class="k">workflow lock-in</em> (you're embedded in how work gets done), <em class="k">distribution</em> (you reach users others can't), and <em class="k">integrations</em> (switching means re-wiring their stack). Demand at least one. "We have the best prompts" is not on the list.</p>

  <h2><span class="ix">6</span> Worked Solution</h2>
  <div class="sub">A real pitch you'll get — pressure-tested the way you'd do it on the job.</div>
  <div class="callout">
    <div class="ch">The prompt</div>
    <p style="font-family:var(--font-ui);font-weight:600;">"A founder pitches you: 'an AI tool that writes marketing copy — like ChatGPT, but for ads.' Is this worth building in 2026, and how would you research it?"</p>
  </div>
  <p><strong>Step 1 — Recognize the graveyard.</strong> "Writes copy from a prompt" is a thin layer over a frontier model on a shallow task — bottom-left of the kill-zone map. This is, almost exactly, where Jasper started before the ground moved under it (block 7). I would not say "no" yet, but I'd name the risk out loud: as a feature it's copyable in a weekend and shippable for free by the model maker.</p>
  <p><strong>Step 2 — Run the feature-vs-company test.</strong> If the next model writes better ads natively, does this product win or die? Today, it dies — there's nothing underneath. So the research question isn't "is the copy good?" It's "is there a deeper workflow we could own?"</p>
  <div class="flow">
<span class="st">THIN WRAPPER</span>   <span class="nt">UI → prompt → frontier model → ad copy</span>
   <span class="ar">↓</span>
<span class="nt"># anyone rebuilds this in a weekend; the model maker ships it free</span>

<span class="st">DEEP WORKFLOW</span>   <span class="nt">brand voice data + approvals + channel publishing + performance feedback</span>
   <span class="ar">↓</span>
<span class="nt"># the model is one box; the data + workflow are the moat that compounds</span>
  </div>
  <p><strong>Step 3 — Hunt for workflow depth.</strong> Don't sell "copy." Own the campaign: ingest the brand's historical assets and tone (proprietary data), enforce its approval chain, publish into ad channels, then feed performance back so the system learns what converts for <em>this</em> brand. Now the model is one replaceable component, and every campaign makes you harder to leave.</p>
  <p><strong>Step 4 — Research willingness to pay, not demo delight.</strong> I'd run the invoice test with 10 target buyers: not "do you like this output?" but "would you route your real ad budget and approval workflow through this, and pay monthly?" And I'd pick the wedge where being <em>probabilistic is acceptable</em> — drafts a human approves before spend — rather than fully-autonomous spending, which no one trusts a sometimes-wrong system to do (straight into Lesson 4.2).</p>
  <div class="callout good">
    <div class="ch">Why this wins</div>
    <p>You didn't reject the idea or rubber-stamp it. You diagnosed it as a feature, then showed the path to a company — depth plus a compounding moat — and proposed research that measures money and trust, not applause. That's the difference between a PM who chases demos and one who picks problems that survive the next model.</p>
  </div>

  <h2><span class="ix">7</span> Industry Case</h2>
  <div class="sub">Real companies, real 2025–26 outcomes — the wrapper that got steamrolled, and the workflow that compounded.</div>
  <h3>Jasper vs Sierra — the same market, opposite fates</h3>
  <p><strong>Jasper</strong> is the cautionary tale every AI PM should know cold. It built a clean, well-designed interface over OpenAI's models for marketing copy and rode the early wave to a reported <strong>$1.5B valuation</strong>. Then the ground moved: when ChatGPT became a free, "good enough" alternative, Jasper's reason to exist as a standalone tool thinned out. By public reporting its revenue fell from a 2023 peak near <strong>$120M to roughly $35M in 2024</strong> — about a 50%+ drop — followed by a CEO change, an internal valuation cut, and a pivot to an enterprise "Copilot" platform (deeper workflow, brand knowledge, team features) to find something defensible. In April 2024 OpenAI's CEO bluntly warned builders who assume the models won't improve: <em>"we're gonna steamroll you."</em> Jasper is what being steamrolled looks like — and the enterprise pivot is a company scrambling, late, to add the depth it lacked at the start.</p>
  <p><strong>Sierra</strong> — founded by Bret Taylor — chose the opposite. Instead of a thin layer on a shallow task, it went deep on one workflow: enterprise customer service agents that actually resolve issues. The depth showed up in the business model: Sierra prices on <em>outcomes</em>, charging for successful resolutions rather than seats, with Taylor arguing the atomic unit of AI value is "a process, not a person." That depth compounded — Sierra reached a reported <strong>$10B valuation (a $350M round, Sept 2025)</strong> and <strong>~$100M ARR in under two years</strong>. When the underlying models improve, Sierra's resolutions get <em>better</em> — the model upgrade is a tailwind, not a tombstone.</p>
  <ul>
    <li><strong>Same starting ingredient, opposite dial.</strong> Both rent frontier models. Jasper owned one shallow step; Sierra owns a deep, measurable business process.</li>
    <li><strong>The moat is the workflow, not the model.</strong> Even Cursor — which began as a wrapper over GPT-4 and Claude — survived to a reported ~$2B annualized revenue by building compounding depth underneath the wrapper. Starting as a wrapper isn't fatal; <em>staying</em> one is.</li>
    <li><strong>The market punishes shallowness fast.</strong> Industry trackers reported on the order of a ~40% failure rate among the 2024 AI-startup wave within roughly two years, and that the large majority of thin wrappers never reach meaningful revenue.</li>
  </ul>
  <div class="callout accent">
    <div class="ch">The PM takeaway</div>
    <p>In an AI-saturated market the scarce thing is a real problem, not a model. Jasper had the model and the demo; Sierra had the workflow worth owning. Your job in research is to find the Sierra-shaped problem before you write a line of code — the one where every model upgrade makes you stronger, not obsolete.</p>
  </div>

  <h2><span class="ix">✓</span> Check Yourself</h2>
  <div class="quiz" data-correct="2">
    <div class="q">A team is thrilled that their AI demo got 3 million views and a flood of signups. What's your first move as the PM?</div>
    <div class="opt" data-i="0"><span class="l">A</span><span>Raise a round immediately — the demand is proven.</span></div>
    <div class="opt" data-i="1"><span class="l">B</span><span>Add more features to the demo.</span></div>
    <div class="opt" data-i="2"><span class="l">C</span><span>Run the invoice test — check whether those users would pay to keep it next month, and whether there's a workflow to own.</span></div>
    <div class="opt" data-i="3"><span class="l">D</span><span>Switch to a bigger model to improve output quality.</span></div>
    <div class="qexp">Views and signups measure novelty, not need. Applause is not an invoice. A viral demo over a shallow task is the classic feature-not-a-company trap — validate willingness to pay and hunt for workflow depth before celebrating.</div>
  </div>
  <div class="quiz" data-correct="1">
    <div class="q">Which idea is most defensible against the next frontier-model release?</div>
    <div class="opt" data-i="0"><span class="l">A</span><span>A nicer UI that turns a prompt into polished blog posts.</span></div>
    <div class="opt" data-i="1"><span class="l">B</span><span>A tool that ingests a company's private data, owns its approval workflow, and learns from outcomes over time.</span></div>
    <div class="opt" data-i="2"><span class="l">C</span><span>A wrapper that summarizes PDFs.</span></div>
    <div class="opt" data-i="3"><span class="l">D</span><span>A prompt library for writing emails.</span></div>
    <div class="qexp">B owns workflow depth and accrues a moat (proprietary data + lock-in + a feedback loop) — model upgrades make it better. A, C, and D are single shallow steps the model maker or an incumbent can ship natively, which is exactly the wrapper graveyard.</div>
  </div>
  <h2><span class="ix">✎</span> Apply It Yourself</h2>
  <div class="sub">No worked answer this time — this one's your rep. Give it 10 minutes before you move on.</div>
  <div class="callout">
    <div class="ch">Your problem</div>
    <p style="font-family:var(--font-ui);font-weight:600;">"A founder pitches 'an AI tool that writes social captions — like ChatGPT but for marketers.' Decide in the meeting: is this a feature or a company, and what would make it defensible?"</p>
  </div>
  <p><strong>Hints</strong> (peek only if you're stuck):</p>
  <ul>
    <li>Run the feature-vs-company test: would the next model release erase it?</li>
    <li>Look for workflow depth and a moat (data, lock-in, distribution).</li>
    <li>The trap: validating it because the demo got applause.</li>
  </ul>
  <table>
    <tr><th>A strong answer...</th><th>A weak answer...</th></tr>
    <tr><td>Calls it a thin wrapper; finds the deeper workflow / moat that could make it durable.</td><td>Greenlights it on demo buzz.</td></tr>
    <tr><td>Applies the invoice test (would they pay to keep it?).</td><td>Confuses signups with willingness to pay.</td></tr>
    <tr><td>Names a real moat (proprietary data / workflow / distribution).</td><td>Says 'we'll have the best prompts.'</td></tr>
  </table>
  <div class="callout accent">
    <div class="ch">Make it live</div>
    <p>Pick a trending AI product on Product Hunt and judge it: feature or company? What would a frontier release do to it?</p>
  </div>
  __NAV__
</div>
`,

/* ---------------------------------------------------------------- 4.2 */
"4.2": `
<div class="wrap">
  <div class="les-kicker">Chapter 4 · Lesson 4.2</div>
  <h1 class="les-title">User Research When the Product Is Probabilistic</h1>
  <div class="les-meta">
    <span class="pill">Product research</span><span class="pill">~25 min read</span>
    <span class="pill">Prereq: 4.1</span><span class="pill">Difficulty: core</span>
  </div>
  <p class="motto">Normal research asks whether people want the feature. For a probabilistic product the only question that predicts success is how they feel the first time it's confidently, fluently wrong.</p>

  <p class="lead">Lesson 4.1 found the right problem; now you have to research it the right way — for a product that is wrong on purpose, sometimes. A deterministic feature either works or has a bug. An AI feature has a <em class="k">success rate</em>, and the user lives in the gap. The PM who only researches the happy path ships something that demos beautifully and gets abandoned the week it makes its first confident mistake. This lesson teaches you to research the <em class="k">failure experience</em>: how much error a use case tolerates, how cheaply a user can catch it, and the trap on the other side — users who trust it too much.</p>

  <h2><span class="ix">1</span> Your Mandate</h2>
  <div class="sub">What you own when the product can't promise it's right.</div>
  <p>Your mandate is to <strong>own the trust model</strong>: define, per use case, how good is good enough, and design for the moment the product is wrong. You do not own the model's accuracy — engineering and the model push that number up over time. You own whether the <em>failure experience</em> is survivable: can the user notice the mistake, fix it cheaply, and keep trusting the product afterward? Get that right and a 70%-correct product can be beloved. Get it wrong and a 95%-correct product gets uninstalled after one bad answer at the wrong moment.</p>

  <h2><span class="ix">2</span> Your Responsibilities</h2>
  <div class="sub">The research a normal PM skips — and an AI PM can't.</div>
  <table>
    <tr><th>You research</th><th>Not just (the happy-path version)</th></tr>
    <tr><td><strong>The failure experience</strong> — what users do when it's wrong</td><td>Whether they like it when it's right</td></tr>
    <tr><td><strong>Verification cost</strong> — how fast/cheap it is to catch a bad answer</td><td>How fast it produces an answer</td></tr>
    <tr><td><strong>Consequence of acting on a wrong answer</strong></td><td>The value of a correct answer</td></tr>
    <tr><td><strong>Trust calibration</strong> — do users over- or under-trust it?</td><td>Top-line satisfaction score</td></tr>
    <tr><td><strong>The recovery path</strong> — can trust survive the first mistake?</td><td>First-impression delight</td></tr>
  </table>
  <p>The through-line of this chapter: in an AI-saturated market you win by understanding a real workflow deeply — and "deeply" includes its failure modes. <strong>Researching only the happy path is how you mistake a fragile product for a strong one.</strong></p>

  <h2><span class="ix">3</span> Metrics That Matter Here</h2>
  <div class="sub">The trust scorecard. Satisfaction-on-the-happy-path is the vanity metric to avoid.</div>
  <table>
    <tr><th>Metric</th><th>Reads as</th><th>Why a PM watches it</th></tr>
    <tr><td><strong>Error tolerance threshold</strong></td><td>The accuracy bar below which this use case is unusable</td><td>It sets your real quality target — and it differs per task</td></tr>
    <tr><td><strong>Verification cost</strong></td><td>Time/effort to confirm or reject an output</td><td>Cheap-to-verify tasks tolerate far more error</td></tr>
    <tr><td><strong>Time-to-detect a wrong answer</strong></td><td>How long before the user notices a mistake</td><td>Slow detection = the mistake does damage</td></tr>
    <tr><td><strong>Over-reliance / automation-bias rate</strong></td><td>% of wrong outputs accepted without checking</td><td>The silent failure: users trusting garbage</td></tr>
    <tr><td><strong>Trust-after-error retention</strong></td><td>Do users come back after the first visible mistake?</td><td>The truest signal that the failure experience works</td></tr>
  </table>
  <div class="callout warn">
    <div class="ch">The trap — "they accepted it" is not "it was right"</div>
    <p>Acceptance and correctness are different things, and conflating them is the most dangerous metric error in AI products. Users accept wrong answers all the time — that's <strong>automation bias</strong>. If your only signal is "% accepted" or "satisfaction," a confidently-wrong product can look great in the data right up until it causes real harm. <strong>Measure whether accepted outputs were actually correct, not just whether users clicked yes.</strong></p>
  </div>

  <h2><span class="ix">4</span> How to Think Here</h2>
  <div class="sub">The "good enough" bar isn't one number — it's a function of two things you must research.</div>
  <div class="fig">
    <div class="fig-title">The good-enough bar = verification cost × consequence of error</div>
    <svg viewBox="0 0 520 300" xmlns="http://www.w3.org/2000/svg" font-family="Hanken Grotesk, sans-serif">
      <rect x="70" y="145" width="206" height="107" fill="#0a7d3c" opacity="0.07"/>
      <rect x="283" y="35" width="212" height="110" fill="#b25000" opacity="0.07"/>
      <line x1="70" y1="252" x2="495" y2="252" stroke="#1d1d1f" stroke-width="1.2"/>
      <line x1="70" y1="252" x2="70" y2="35" stroke="#1d1d1f" stroke-width="1.2"/>
      <line x1="282" y1="40" x2="282" y2="252" stroke="#dddddd" stroke-width="1"/>
      <line x1="70" y1="145" x2="490" y2="145" stroke="#dddddd" stroke-width="1"/>
      <text x="285" y="284" text-anchor="middle" font-size="11" fill="#86868b">cost to verify / fix a wrong answer   (cheap → expensive)</text>
      <text x="26" y="145" text-anchor="middle" font-size="11" fill="#86868b" transform="rotate(-90 26 145)">consequence of acting on it</text>
      <text x="175" y="196" text-anchor="middle" font-size="11.5" font-weight="700" fill="#0a7d3c">SHIP AGGRESSIVELY</text>
      <text x="175" y="214" text-anchor="middle" font-size="9" fill="#0a7d3c">autocomplete · drafts · suggestions</text>
      <text x="386" y="196" text-anchor="middle" font-size="11.5" font-weight="700" fill="#86868b">PROCEED WITH CARE</text>
      <text x="386" y="214" text-anchor="middle" font-size="9" fill="#86868b">verify-heavy, low-stakes tasks</text>
      <text x="175" y="92" text-anchor="middle" font-size="11.5" font-weight="700" fill="#0058b0">CITE · LET USER CHECK</text>
      <text x="175" y="110" text-anchor="middle" font-size="9" fill="#0058b0">answer engines · research</text>
      <text x="386" y="92" text-anchor="middle" font-size="11.5" font-weight="700" fill="#b25000">HUMAN-IN-THE-LOOP</text>
      <text x="386" y="110" text-anchor="middle" font-size="9" fill="#b25000">diagnosis · legal · payments</text>
    </svg>
    <div class="fig-cap">The bar is set by two things you must research, not guess: how cheaply a user can catch and fix a wrong answer, and how badly a wrong answer hurts if they don't. Copilot lives bottom-left; an autonomous medical tool lives top-right.</div>
  </div>
  <p>The mental model: <strong>tolerance for error is not a property of the model — it's a property of the use case.</strong> The same 80%-accurate model is a delight in one quadrant and a lawsuit in another. So when you research a probabilistic product, you're really locating it on this grid:</p>
  <ol>
    <li><strong>Estimate the consequence.</strong> If the user acts on a wrong answer, how bad is it — a wasted second, or real harm?</li>
    <li><strong>Measure the verification cost.</strong> How fast and cheap is it to tell a good answer from a bad one? (A citation, a visible diff, an instant reject key all lower this.)</li>
    <li><strong>Place it on the grid</strong> and let the quadrant dictate the design: ship-aggressively, cite-and-verify, or hard human-in-the-loop.</li>
    <li><strong>Lower the verification cost as a product lever.</strong> You can often move a product into a safer quadrant by making errors cheaper to catch — that's a design decision you own.</li>
  </ol>
  <div class="callout accent">
    <div class="ch">Say this in the interview</div>
    <p>"The acceptable error rate isn't one number — it depends on how cheaply the user can verify an answer and how badly a wrong one hurts. So I'd research the failure experience per use case, and I'd treat 'make mistakes cheap to catch' as a core feature, not a nice-to-have."</p>
  </div>

  <h2><span class="ix">5</span> Frameworks to Deploy</h2>
  <div class="sub">Three tools for researching a product that's wrong on purpose.</div>
  <h3>① The error-tolerance matrix</h3>
  <p>The 2×2 above, used as a research instrument: for each task your product does, place it by <em class="k">verification cost</em> and <em class="k">consequence of error</em>. The quadrant tells you the acceptable quality bar and the required guardrails. Different tasks in the same product can land in different quadrants — research them separately.</p>
  <h3>② Research the failure path, not the happy path</h3>
  <p>In every interview and usability test, deliberately show users a <strong>wrong</strong> output and watch what they do. Do they catch it? How fast? Do they fix it, abandon the product, or — worse — accept it? The happy path tells you almost nothing about whether the product survives contact with reality. The failure path tells you everything.</p>
  <h3>③ Calibrate for both failure modes of trust</h3>
  <p>Reliance fails in two directions. <em class="k">Under-trust</em>: users ignore a correct, useful product. <em class="k">Over-trust</em> (automation bias): users accept wrong outputs without checking. Research both. The fix for under-trust is showing reliability; the fix for over-trust is friction that prompts verification — and the published research is clear that "AI literacy" alone does <em>not</em> protect users from over-trust, so you have to design for it.</p>

  <h2><span class="ix">6</span> Worked Solution</h2>
  <div class="sub">A real research brief — planned the way you'd actually run it.</div>
  <div class="callout">
    <div class="ch">The prompt</div>
    <p style="font-family:var(--font-ui);font-weight:600;">"We're building an AI feature that drafts replies to customer emails for our support agents. Plan the user research."</p>
  </div>
  <p><strong>Step 1 — Place the task on the grid first.</strong> Drafting a reply that a human agent reviews and sends is <em>cheap to verify</em> (the agent reads it in seconds) and <em>medium consequence</em> (a bad draft caught is harmless; a bad draft sent is not). That's near the ship-aggressively / cite-and-check border — good fit for a probabilistic product, <em>if</em> the human stays in the loop.</p>
  <p><strong>Step 2 — Research the failure experience explicitly.</strong> I'd run sessions where agents are shown deliberately flawed drafts — a wrong refund amount, a subtly off policy — and observe:</p>
  <div class="flow">
<span class="st">1 Map the wrong answers</span>   <span class="nt">what does a bad draft actually look like?</span>
   <span class="ar">↓</span>
<span class="st">2 Measure verify cost</span>       <span class="nt">how fast can an agent spot the flaw?</span>
   <span class="ar">↓</span>
<span class="st">3 Watch what they do</span>        <span class="nt">edit it, discard it — or send it blind?</span>
   <span class="ar">↓</span>
<span class="st">4 Set the good-enough bar</span>   <span class="nt">per reply type, by consequence</span>
  </div>
  <p><strong>Step 3 — Hunt for over-trust, not just errors.</strong> The scary finding wouldn't be "the draft was wrong" — it's "the agent sent it without reading because it looked confident." So I'd measure the over-reliance rate directly, and test design friction that forces a glance: surfacing the policy the draft relied on, highlighting the dollar amount, requiring a one-click confirm on anything irreversible.</p>
  <p><strong>Step 4 — Define the bar per reply type.</strong> Low-stakes replies (where's my order) can auto-draft freely. High-stakes replies (refunds, account changes) need the draft plus a verification cue and a human send. The research output isn't "users like it" — it's a per-task tolerance bar and a failure-experience design.</p>
  <div class="callout good">
    <div class="ch">Why this wins</div>
    <p>You researched what actually predicts retention — the failure experience — instead of happy-path delight. You separated tasks by consequence, measured verification cost, and caught the silent killer (over-trust). That's a research plan that ships a product people keep using after it makes its first mistake.</p>
  </div>

  <h2><span class="ix">7</span> Industry Case</h2>
  <div class="sub">The product that's "wrong" most of the time — and beloved anyway — plus the trap on its flip side.</div>
  <h3>GitHub Copilot — why a ~70%-rejected product still wins</h3>
  <p>Copilot is the cleanest proof that tolerance for error is a property of the use case, not the model. Multiple independent studies put its suggestion <strong>acceptance rate in the ~21–34% range</strong> (an Accenture enterprise study landed around 30%; peer-reviewed work reported low-to-mid 20s). Read naively, that's damning — developers reject most of what it offers. Yet the same body of research reports <strong>high satisfaction (around 72%)</strong> and real productivity gains, and GitHub's own studies found acceptance rate is a strong predictor of perceived productivity.</p>
  <p>Why does a product that's "wrong" most of the time delight users? Because it lives in the bottom-left quadrant: <strong>verification is nearly free.</strong> A wrong suggestion costs one keystroke to dismiss; a right one saves minutes. When the cost of catching an error rounds to zero, error tolerance is enormous — exactly the failure-experience design this lesson is about.</p>
  <ul>
    <li><strong>Low acceptance is fine when rejection is free.</strong> The product optimizes for cheap-to-dismiss misses and high-value hits — not for being right every time.</li>
    <li><strong>The over-trust caveat is real and documented.</strong> A widely-cited Stanford study found developers using an AI assistant wrote <em>more</em> insecure code while being <em>more</em> confident it was secure — automation bias in the wild. Cheap verification only helps if users actually verify.</li>
    <li><strong>Felt-speed can outrun real-speed.</strong> One controlled 2025 study found developers <em>felt</em> faster with AI help yet were measurably slower once validation overhead was counted — a reminder to research real behavior, not self-reported delight.</li>
  </ul>
  <div class="callout accent">
    <div class="ch">The PM takeaway</div>
    <p>Copilot won by understanding its workflow deeply enough to know that, for coding autocomplete, a wrong answer is almost free to reject — so "be helpful often" beats "be right always." Your research job is to find that same truth for <em>your</em> use case: where the failure experience is cheap, ship boldly; where it's costly or invisible, design for verification and human checkpoints before you ship at all.</p>
  </div>

  <h2><span class="ix">✓</span> Check Yourself</h2>
  <div class="quiz" data-correct="3">
    <div class="q">GitHub Copilot users accept only ~30% of suggestions yet report high satisfaction. What's the right lesson?</div>
    <div class="opt" data-i="0"><span class="l">A</span><span>The model is bad and needs replacing.</span></div>
    <div class="opt" data-i="1"><span class="l">B</span><span>Acceptance rate is the only metric that matters.</span></div>
    <div class="opt" data-i="2"><span class="l">C</span><span>Users are irrational.</span></div>
    <div class="opt" data-i="3"><span class="l">D</span><span>When a wrong answer is nearly free to reject, users tolerate a high error rate — error tolerance depends on verification cost, not just accuracy.</span></div>
    <div class="qexp">A wrong suggestion costs one keystroke to dismiss; a right one saves minutes. Cheap verification creates huge error tolerance. Tolerance for error is a property of the use case (where it sits on the verification-cost / consequence grid), not a fixed property of the model.</div>
  </div>
  <div class="quiz" data-correct="1">
    <div class="q">Your AI feature shows a 95% "user accepted the answer" rate. Why might that NOT mean the product is good?</div>
    <div class="opt" data-i="0"><span class="l">A</span><span>Acceptance is always equivalent to correctness.</span></div>
    <div class="opt" data-i="1"><span class="l">B</span><span>Automation bias — users accept confident-looking wrong answers without verifying, so high acceptance can hide real errors.</span></div>
    <div class="opt" data-i="2"><span class="l">C</span><span>95% is a low number.</span></div>
    <div class="opt" data-i="3"><span class="l">D</span><span>Acceptance rate can't be measured reliably.</span></div>
    <div class="qexp">Acceptance is not correctness. Users over-trust fluent, confident outputs (automation bias) — documented even among experts, and not prevented by "AI literacy." Measure whether accepted outputs were actually right, and design friction that prompts verification on high-consequence actions.</div>
  </div>

  <h2><span class="ix">✎</span> Apply It Yourself</h2>
  <div class="sub">No worked answer this time — this one's your rep. Give it 10 minutes before you move on.</div>
  <div class="callout">
    <div class="ch">Your problem</div>
    <p style="font-family:var(--font-ui);font-weight:600;">"You're researching an AI feature that auto-suggests medical-billing codes for clinicians. Plan the research — focusing on what classic PM research would miss."</p>
  </div>
  <p><strong>Hints</strong> (peek only if you're stuck):</p>
  <ul>
    <li>Research the failure experience, not just the happy path.</li>
    <li>Place the task on the verification-cost × consequence grid.</li>
    <li>The trap: measuring happy-path satisfaction and shipping.</li>
  </ul>
  <table>
    <tr><th>A strong answer...</th><th>A weak answer...</th></tr>
    <tr><td>Studies how users behave on a wrong suggestion; measures verification cost and over-trust.</td><td>Only tests when it's right.</td></tr>
    <tr><td>Sets a per-use-case 'good enough' bar by consequence.</td><td>Picks one accuracy target for everything.</td></tr>
    <tr><td>Watches automation bias (accepting wrong codes unchecked).</td><td>Assumes users will catch errors.</td></tr>
  </table>
  <div class="callout accent">
    <div class="ch">Make it live</div>
    <p>Use an AI feature and deliberately accept a wrong output. How cheap was it to catch — and would you have, if you weren't looking?</p>
  </div>
  __NAV__
</div>
`,

/* ---------------------------------------------------------------- 4.3 */
"4.3": `
<div class="wrap">
  <div class="les-kicker">Chapter 4 · Lesson 4.3</div>
  <h1 class="les-title">Sizing the AI Opportunity — Build, Wait, or Wrap</h1>
  <div class="les-meta">
    <span class="pill">Product research</span><span class="pill">~24 min read</span>
    <span class="pill">Prereq: 4.1, 4.2</span><span class="pill">Difficulty: core</span>
  </div>
  <p class="motto">Three things can be true of an AI idea: build it now, wait for the model to make it possible, or it's a wrapper you should never build a company on. Telling them apart is the difference between a startup and a tombstone.</p>

  <p class="lead">You've found a real problem (4.1) and researched how users tolerate it being probabilistic (4.2). Now you size and <em class="k">time</em> it. Not every good problem should be built today: some are thin wrappers to pass on, some are real but waiting on a model capability that hasn't arrived, and some are ready now. This lesson gives you the <em class="k">build / wait / wrap</em> verdict — judging an opportunity by both its durability and its timing, so you don't ship a wrapper, build too early, or miss the window.</p>

  <h2><span class="ix">1</span> Your Mandate</h2>
  <div class="sub">What you own once a problem looks real.</div>
  <p>Your mandate is to <strong>render the build / wait / wrap verdict</strong> on a validated opportunity. You don't forecast the model roadmap to the week; you judge two things — is this <em class="k">durable</em> (a deep workflow with a moat, not a thin wrapper), and can the model <em class="k">do it well enough now</em>? Those two answers decide whether you build, wait for a capability threshold, or pass. Get it wrong three ways: build a wrapper and get steamrolled, build too early and burn cash on a limitation the next release removes, or wait too long and miss the window.</p>

  <h2><span class="ix">2</span> Your Responsibilities</h2>
  <div class="sub">Three verdicts — and what each one means.</div>
  <table>
    <tr><th>Verdict</th><th>When</th><th>What you do</th></tr>
    <tr><td><strong>BUILD now</strong></td><td>Durable workflow + the model can do the core task today</td><td>Build it — the window is open and you own something</td></tr>
    <tr><td><strong>WAIT</strong></td><td>Durable, but the model isn't good enough yet (threshold coming)</td><td>Prepare; build when the capability crosses the line</td></tr>
    <tr><td><strong>WRAP (pass)</strong></td><td>Thin — the model already does it, or the next release will</td><td>Don't build a company on it; it's a feature, not a moat</td></tr>
  </table>
  <p>The two questions that produce the verdict, in order: <strong>is it durable?</strong> (if no, WRAP) and <strong>can the model do it now?</strong> (if yes, BUILD; if not-yet-but-coming, WAIT). Durability is the 4.1 test; timing is the new one this lesson adds.</p>

  <h2><span class="ix">3</span> Metrics That Matter Here</h2>
  <div class="sub">What you actually assess to size and time an opportunity.</div>
  <table>
    <tr><th>Signal</th><th>Reads as</th><th>Why it decides the verdict</th></tr>
    <tr><td><strong>Durability</strong></td><td>Workflow depth + a moat (4.1)</td><td>No durability → WRAP, regardless of timing</td></tr>
    <tr><td><strong>Capability gap</strong></td><td>How far is the model from doing the core task well?</td><td>Zero gap → BUILD; closing gap → WAIT</td></tr>
    <tr><td><strong>Market window</strong></td><td>Is the threshold just crossing (others rushing in)?</td><td>An open window favors BUILD now over waiting</td></tr>
    <tr><td><strong>Prize size</strong></td><td>How big is the workflow if you own it?</td><td>Sizes the opportunity, not just its validity</td></tr>
  </table>
  <div class="callout warn">
    <div class="ch">The trap — building in the "wait" zone too early</div>
    <p>The seductive mistake is building a "WAIT" opportunity as if it were a "BUILD" — pouring a year into elaborate scaffolding to compensate for a model that can't quite do the task yet. That's building into the model overhang (Ch.6.1): the next release removes the limitation and your scaffolding becomes dead weight. The opposite error is mistaking a <strong>WRAP for a BUILD</strong> — falling for a thin idea because the demo is slick (4.1). <strong>Wait deliberately; wrap nothing.</strong></p>
  </div>

  <h2><span class="ix">4</span> How to Think Here</h2>
  <div class="sub">Two questions, three verdicts.</div>
  <div class="fig">
    <div class="fig-title">Build, wait, or wrap</div>
    <svg viewBox="0 0 520 250" xmlns="http://www.w3.org/2000/svg" font-family="Hanken Grotesk, sans-serif">
      <rect x="150" y="22" width="220" height="46" rx="9" fill="#ffffff" stroke="#1d1d1f" stroke-width="1.3"/>
      <text x="260" y="42" text-anchor="middle" font-size="12" font-weight="700" fill="#1d1d1f">Durable? deep workflow + moat</text>
      <text x="260" y="58" text-anchor="middle" font-size="9.5" fill="#86868b">(not a thin wrapper — 4.1)</text>
      <line x1="370" y1="45" x2="392" y2="45" stroke="#b25000" stroke-width="1.3"/>
      <rect x="394" y="28" width="112" height="34" rx="8" fill="#b25000" opacity="0.12" stroke="#b25000"/>
      <text x="450" y="49" text-anchor="middle" font-size="10.5" font-weight="700" fill="#b25000">NO → WRAP</text>
      <line x1="260" y1="68" x2="260" y2="100" stroke="#86868b" stroke-width="1.3"/>
      <rect x="150" y="100" width="220" height="46" rx="9" fill="#ffffff" stroke="#1d1d1f" stroke-width="1.3"/>
      <text x="260" y="120" text-anchor="middle" font-size="12" font-weight="700" fill="#1d1d1f">Model good enough now?</text>
      <text x="260" y="136" text-anchor="middle" font-size="9.5" fill="#86868b">(for the core task)</text>
      <line x1="370" y1="123" x2="392" y2="123" stroke="#0a7d3c" stroke-width="1.3"/>
      <rect x="394" y="106" width="112" height="34" rx="8" fill="#0a7d3c" opacity="0.12" stroke="#0a7d3c"/>
      <text x="450" y="127" text-anchor="middle" font-size="10.5" font-weight="700" fill="#0a7d3c">YES → BUILD</text>
      <line x1="260" y1="146" x2="260" y2="174" stroke="#86868b" stroke-width="1.3"/>
      <rect x="150" y="174" width="220" height="44" rx="9" fill="#0071e3" opacity="0.10" stroke="#0071e3" stroke-width="1.3"/>
      <text x="260" y="194" text-anchor="middle" font-size="11.5" font-weight="700" fill="#0058b0">NOT YET → WAIT</text>
      <text x="260" y="209" text-anchor="middle" font-size="9" fill="#0058b0">for the capability threshold</text>
      <text x="260" y="238" text-anchor="middle" font-size="9.5" fill="#86868b">wrap nothing · wait deliberately · build the durable thing when it's ready</text>
    </svg>
    <div class="fig-cap">Two questions decide it. Not durable → wrap (it's a feature, pass). Durable and the model can do it now → build. Durable but the model isn't ready → wait for the threshold, don't build into the overhang.</div>
  </div>
  <p>Size and time an opportunity like this:</p>
  <ol>
    <li><strong>Confirm durability</strong> — deep workflow plus a moat (4.1). If it's thin, it's a WRAP; pass.</li>
    <li><strong>Assess the capability gap</strong> — can the model do the core task well enough today, or not yet?</li>
    <li><strong>Render the verdict</strong> — BUILD (durable + ready), WAIT (durable + not yet), WRAP (thin).</li>
    <li><strong>If WAIT, name the threshold</strong> you're watching for (a latency, a quality, a cost the next release will cross).</li>
    <li><strong>Size the prize</strong> — if you own this workflow, how big is it?</li>
  </ol>
  <div class="callout accent">
    <div class="ch">Say this in the interview</div>
    <p>"I'd size it on two axes: is it durable, and can the model do it now? Thin ideas I wrap and pass; durable ideas the model can't do yet I wait on — naming the capability threshold I'm watching — and durable ideas it can do today I build. I won't build into the overhang."</p>
  </div>

  <h2><span class="ix">5</span> Frameworks to Deploy</h2>
  <div class="sub">Three tools for sizing and timing.</div>
  <h3>① The build / wait / wrap trichotomy</h3>
  <p>Force every opportunity into one of three buckets, not a vague "maybe." The discipline of naming WAIT and WRAP as real verdicts — not just BUILD — is what stops you from pouring resources into a thin idea or a too-early one. Most ideas are WRAP; a few are WAIT; the rare durable-and-ready one is BUILD.</p>
  <h3>② The capability-threshold test</h3>
  <p>For a WAIT idea, ask precisely: <em class="k">what would the model have to do that it can't yet, and what release might deliver it?</em> Naming the threshold (sub-second latency, a quality bar, a price drop) turns "wait" from passive into a trigger you watch for — so you build the day it crosses, not a year late.</p>
  <h3>③ "Wait" is a strategy, not a failure</h3>
  <p>Choosing not to build yet is a legitimate, often-correct decision (it becomes roadmap sequencing in Ch.6.1). The teams that win an emerging category are usually the ones who waited for the capability threshold and then moved fast — not the ones who burned two years building before the model was ready.</p>

  <h2><span class="ix">6</span> Worked Solution</h2>
  <div class="sub">Three pitches, three verdicts.</div>
  <div class="callout">
    <div class="ch">The prompt</div>
    <p style="font-family:var(--font-ui);font-weight:600;">"A founder pitches three AI ideas: (a) a tool that summarizes any webpage, (b) a voice agent that takes restaurant phone orders, (c) a vertical AI for insurance-claims processing with proprietary claims data. Which do you build?"</p>
  </div>
  <p><strong>Run each through durable? then model-ready?</strong></p>
  <div class="flow">
<span class="st">(a) summarize a webpage</span>   <span class="nt">thin · the browser and model already do it · no moat → WRAP, pass</span>
<span class="st">(b) voice ordering agent</span>   <span class="nt">durable workflow · threshold just crossed (2024 real-time voice) → BUILD now</span>
<span class="st">(c) insurance-claims AI</span>    <span class="nt">proprietary data + deep workflow · model can reason today via RAG → BUILD now</span>
  </div>
  <p><strong>(a) WRAP.</strong> Summarizing a page is a single shallow step the model and the browser already do for free. No workflow depth, no moat — a feature, not a company. Pass (4.1's graveyard).</p>
  <p><strong>(b) BUILD now — and own the workflow, not the voice.</strong> Real-time voice only became viable when latency and quality crossed the human-conversation threshold (around late 2024). It <em>was</em> a WAIT idea; now the window is open. But I'd build the ordering <em>workflow</em> (menu, POS integration, the restaurant's data) with voice as the wedge — a thin voice wrapper would itself be a WRAP.</p>
  <p><strong>(c) BUILD now.</strong> Durable by construction — proprietary claims data plus a deep, regulated workflow (a moat) — and the model can do the reasoning today with RAG. Durable and ready: build.</p>
  <div class="callout good">
    <div class="ch">Why this wins</div>
    <p>You didn't rank by which demo was coolest; you sized each by durability and timing. You passed the wrapper, recognized the voice opportunity's window had just opened (and refused to build it thin), and greenlit the durable, model-ready vertical. That's opportunity sizing — the research-stage judgment that decides what's even worth building.</p>
  </div>

  <h2><span class="ix">7</span> Industry Case</h2>
  <div class="sub">Timing a capability threshold — and the graveyard for those who didn't.</div>
  <h3>Voice agents — a "wait" that became a "build" overnight</h3>
  <p>Voice agents are the cleanest 2025–26 example of timing an opportunity. For years, real-time voice was a WAIT: the round-trip of speech-to-text, model, and text-to-speech couldn't hit the ~300–500ms window human conversation needs, so voice products felt robotic and stalled. Then the threshold crossed — by late 2024, real-time conversational models and steep price cuts (OpenAI dropped its real-time API price sharply) brought latency and cost into range — and the window flung open: by some counts <strong>around 22% of a late-2024 Y Combinator cohort were voice-first startups.</strong> The opportunity didn't change; the model's capability did, converting a WAIT into a BUILD. And the seasoned framing of that wave — <em>voice will be the wedge, not the product</em> — is the WRAP warning restated: a thin voice layer is a feature, so the durable play is the workflow behind it.</p>
  <p>The contrast cases you already know. The WRAP graveyard — thin single-prompt wrappers eaten by frontier features (4.1) — is full of teams that built what they should have passed on. The BUILD winners — <strong>Cursor</strong> (which rode coding capability crossing a threshold and built real workflow depth on top, reaching billions in revenue) and the vertical agents like <strong>Sierra</strong> and <strong>Harvey</strong> — are durable workflows built when the model was ready. Same market, three verdicts, three fates.</p>
  <ul>
    <li><strong>Capability thresholds convert WAIT to BUILD.</strong> Voice was un-buildable, then suddenly buildable — the model moved, not the problem.</li>
    <li><strong>Even a hot window can hide a WRAP.</strong> A thin voice wrapper is still a wrapper; "voice is the wedge, not the product."</li>
    <li><strong>The durable, ready opportunity is the rare BUILD.</strong> Cursor, Sierra, Harvey — workflow depth, built at the right time.</li>
  </ul>
  <div class="callout accent">
    <div class="ch">The PM takeaway</div>
    <p>In an AI-saturated market the scarce thing is a real problem — and the next-scarcest is the judgment to build it at the right time. Size every opportunity by durability and timing: wrap the thin ones, wait deliberately for the ones whose threshold is coming, and build the durable, model-ready ones now. That verdict, made well, is where a real product begins.</p>
  </div>

  <h2><span class="ix">✓</span> Check Yourself</h2>
  <div class="quiz" data-correct="2">
    <div class="q">An idea is a genuinely deep workflow with a real moat, but today's models can't do the core task well enough — though the trajectory is clearly heading there. What's the verdict?</div>
    <div class="opt" data-i="0"><span class="l">A</span><span>WRAP — pass on it.</span></div>
    <div class="opt" data-i="1"><span class="l">B</span><span>BUILD now — pour resources in immediately.</span></div>
    <div class="opt" data-i="2"><span class="l">C</span><span>WAIT — it's durable but not yet model-ready; name the capability threshold and build when it crosses.</span></div>
    <div class="opt" data-i="3"><span class="l">D</span><span>Fine-tune a model from scratch to force it.</span></div>
    <div class="qexp">Durable but not-yet-feasible is the WAIT verdict. Building now means scaffolding around a limitation the next release will remove (the overhang trap). Name the threshold you're watching and build the day it crosses — that's how the winners timed voice agents.</div>
  </div>
  <div class="quiz" data-correct="0">
    <div class="q">Real-time voice agents went from stalled to a startup gold rush around late 2024. What changed?</div>
    <div class="opt" data-i="0"><span class="l">A</span><span>The model's capability crossed a threshold (latency, quality, and cost reached the human-conversation window) — converting a WAIT opportunity into a BUILD.</span></div>
    <div class="opt" data-i="1"><span class="l">B</span><span>People suddenly started liking voice.</span></div>
    <div class="opt" data-i="2"><span class="l">C</span><span>The underlying problem changed.</span></div>
    <div class="opt" data-i="3"><span class="l">D</span><span>Voice wrappers became durable on their own.</span></div>
    <div class="qexp">The problem didn't change; the model did. Once real-time voice hit the ~300–500ms latency and cost window, the opportunity flipped from WAIT to BUILD. (And note: voice is the wedge, not the product — the durable build is the workflow behind it, not a thin voice wrapper.)</div>
  </div>

  <h2><span class="ix">✎</span> Apply It Yourself</h2>
  <div class="sub">No worked answer this time — this one's your rep. Give it 10 minutes before you move on.</div>
  <div class="callout">
    <div class="ch">Your problem</div>
    <p style="font-family:var(--font-ui);font-weight:600;">"A founder has three ideas: (a) summarize-any-PDF, (b) an AI that runs a small law firm's client intake end-to-end, (c) real-time AI translation for live events. Give each a verdict — build, wait, or wrap — and why."</p>
  </div>
  <p><strong>Hints</strong> (peek only if you're stuck):</p>
  <ul>
    <li>Two questions: is it durable, and can the model do it well enough now?</li>
    <li>Not durable → wrap. Durable but not-ready → wait (name the threshold).</li>
    <li>The trap: building a thin one, or building a 'wait' one too early.</li>
  </ul>
  <table>
    <tr><th>A strong answer...</th><th>A weak answer...</th></tr>
    <tr><td>Wraps the thin one; builds the durable, model-ready one; waits on the one needing a threshold.</td><td>Builds whichever demo is coolest.</td></tr>
    <tr><td>For a 'wait,' names the capability threshold to watch.</td><td>Builds into the overhang too early.</td></tr>
    <tr><td>Sizes the prize, not just the validity.</td><td>Treats all three as equally buildable.</td></tr>
  </table>
  <div class="callout accent">
    <div class="ch">Make it live</div>
    <p>Take your own AI idea and verdict it: build, wait, or wrap? If 'wait,' what model capability are you waiting for?</p>
  </div>

  <div class="callout good" style="margin-top:40px;">
    <div class="ch">Chapter 4 complete</div>
    <p>You can now find a problem worth owning in an AI-saturated market (4.1), research it for the failure experience rather than just the happy path (4.2), and size and time it with the build / wait / wrap verdict (4.3) — wrapping nothing, waiting deliberately, and building the durable, model-ready opportunities. The scarce thing was never the model; it was the real problem, built at the right time. Next, <strong>Chapter 5 — Product Analytics &amp; AI Metrics</strong>: why DAU lies for AI products, and the quality, cost-per-task, and trust metrics you measure instead.</p>
  </div>
  __NAV__
</div>
`