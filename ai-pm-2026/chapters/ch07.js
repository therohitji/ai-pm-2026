/* ===== Chapter 07 lessons — AI PM by Rohit Swerashi =====
   One JS object entry per lesson: "N.Y": `<full lesson html>`
   Keep the 7-block structure. End each entry's content with __NAV__ (build injects nav). */

/* ---------------------------------------------------------------- 7.1 */
"7.1": `
<div class="wrap">
  <div class="les-kicker">Chapter 7 · Lesson 7.1</div>
  <h1 class="les-title">Writing a PRD for a Non-deterministic Feature</h1>
  <div class="les-meta">
    <span class="pill">AI documentation</span><span class="pill">~24 min read</span>
    <span class="pill">Prereq: Ch.1, Ch.5</span><span class="pill">Difficulty: core</span>
  </div>
  <p class="motto">A traditional PRD says "given this input, produce this output." Write that for an AI feature and you've specced a product that doesn't exist. The spec for something probabilistic is a spec for behavior, not output.</p>

  <p class="lead">The PRD is the PM's core artifact, and AI breaks it. You cannot write "the system shall return X for input Y" when the same input yields different outputs and quality is a distribution, not a guarantee. This lesson teaches you to write an AI PRD that an engineer can build and a QA can actually sign off on — one that specifies the <em class="k">quality bar, the failure behavior, and the acceptable error rate</em> instead of a fantasy of deterministic requirements.</p>

  <h2><span class="ix">1</span> Your Mandate</h2>
  <div class="sub">What you own when "the requirements" can't be a list of exact outputs.</div>
  <p>Your mandate is to <strong>turn a fuzzy, probabilistic feature into a spec people can build to and verify against</strong> — by specifying behavior, a measurable quality bar, and what happens when the model is wrong. You don't write the eval harness or the model logic. You own the document that answers the three questions a deterministic PRD never had to: <em class="k">How good is good enough? What does it do when it's wrong? When does a human step in?</em> Skip those and engineering fills the gaps with guesses, and QA has nothing to sign.</p>

  <h2><span class="ix">2</span> Your Responsibilities</h2>
  <div class="sub">How each section of a PRD changes when the feature is probabilistic.</div>
  <table>
    <tr><th>Traditional PRD</th><th>AI PRD replacement</th></tr>
    <tr><td><strong>Functional requirements</strong> (input → exact output)</td><td>Behavior spec — what it should do, in what priority, and what it must never do</td></tr>
    <tr><td><strong>Acceptance test</strong> (pass / fail)</td><td>Quality bar — an eval set with a threshold (a rate, not a binary)</td></tr>
    <tr><td><strong>Edge cases</strong></td><td>Failure behavior — what happens when wrong, uncertain, or out of scope</td></tr>
    <tr><td><strong>—</strong></td><td>Cost ceiling and latency budget per task (Ch.1)</td></tr>
    <tr><td><strong>—</strong></td><td>Human-in-the-loop checkpoints (Ch.2) + model dependency (Ch.6.3)</td></tr>
  </table>
  <p>The shift in one line: a deterministic PRD specifies <em>outputs</em>; an AI PRD specifies <em>behavior, a bar, and failure</em>. The three bottom rows are pure additions — sections a SaaS PRD never needed and an AI PRD is incomplete without.</p>

  <h2><span class="ix">3</span> Metrics That Matter Here</h2>
  <div class="sub">A good AI PRD is one whose every claim is measurable.</div>
  <table>
    <tr><th>The PRD must make measurable</th><th>Looks like</th><th>Why it belongs in the spec</th></tr>
    <tr><td><strong>Quality bar</strong></td><td>"≥90% correct on a 200-case eval set"</td><td>Turns "good" into something QA can verify</td></tr>
    <tr><td><strong>Acceptable error rate</strong></td><td>"Hallucination under 2%, measured weekly"</td><td>Names the error you'll tolerate, on purpose</td></tr>
    <tr><td><strong>Cost ceiling</strong></td><td>"Under $0.04 per task at scale"</td><td>Keeps unit economics in the spec, not a surprise</td></tr>
    <tr><td><strong>Latency budget</strong></td><td>"p95 under 3s"</td><td>The tail users feel (Ch.1), committed up front</td></tr>
    <tr><td><strong>Failure coverage</strong></td><td>Defined behavior for wrong / uncertain / out-of-scope</td><td>The difference between a trusted product and a liability</td></tr>
  </table>
  <div class="callout warn">
    <div class="ch">The trap — deterministic acceptance criteria</div>
    <p>The classic failure is writing "the AI shall correctly answer all user questions." That is <strong>untestable and impossible</strong> — no probabilistic system clears 100%, and "correctly" was never defined. Engineering can't build to it and QA can't sign it, so the feature ships on vibes. <strong>An acceptance criterion with no number and no failure behavior is not a spec — it's a wish.</strong></p>
  </div>

  <h2><span class="ix">4</span> How to Think Here</h2>
  <div class="sub">The mental shift: from hitting a target to clearing a bar on a distribution.</div>
  <div class="fig">
    <div class="fig-title">Deterministic spec vs probabilistic spec</div>
    <svg viewBox="0 0 520 280" xmlns="http://www.w3.org/2000/svg" font-family="Hanken Grotesk, sans-serif">
      <line x1="262" y1="44" x2="262" y2="250" stroke="#dddddd" stroke-width="1"/>
      <text x="135" y="44" text-anchor="middle" font-size="12" font-weight="700" fill="#1d1d1f">DETERMINISTIC</text>
      <circle cx="135" cy="142" r="46" fill="none" stroke="#86868b" stroke-width="1.2"/>
      <circle cx="135" cy="142" r="30" fill="none" stroke="#86868b" stroke-width="1.2"/>
      <circle cx="135" cy="142" r="14" fill="none" stroke="#86868b" stroke-width="1.2"/>
      <circle cx="135" cy="142" r="6" fill="#0071e3"/>
      <path d="M66,92 L126,136" fill="none" stroke="#0071e3" stroke-width="1.8" marker-end="url(#d71)"/>
      <text x="135" y="214" text-anchor="middle" font-size="9.5" fill="#86868b">input → one exact output</text>
      <text x="135" y="231" text-anchor="middle" font-size="10.5" font-weight="700" fill="#1d1d1f">pass / fail</text>
      <text x="390" y="44" text-anchor="middle" font-size="12" font-weight="700" fill="#1d1d1f">PROBABILISTIC</text>
      <line x1="300" y1="198" x2="490" y2="198" stroke="#86868b" stroke-width="1"/>
      <path d="M300,198 C342,198 362,100 392,98 C424,96 446,198 490,198 Z" fill="#0071e3" opacity="0.12" stroke="#0071e3" stroke-width="1.8"/>
      <line x1="346" y1="92" x2="346" y2="206" stroke="#b25000" stroke-width="1.4" stroke-dasharray="4 3"/>
      <text x="346" y="84" text-anchor="middle" font-size="9" font-weight="700" fill="#b25000">the bar</text>
      <text x="318" y="216" text-anchor="middle" font-size="8.5" fill="#b25000">below</text>
      <text x="432" y="216" text-anchor="middle" font-size="8.5" fill="#0a7d3c">acceptable →</text>
      <text x="390" y="233" text-anchor="middle" font-size="9.5" fill="#86868b">a quality bar on a distribution</text>
      <defs><marker id="d71" markerWidth="8" markerHeight="8" refX="6" refY="3" orient="auto"><path d="M0,0 L6,3 L0,6 Z" fill="#0071e3"/></marker></defs>
    </svg>
    <div class="fig-cap">A deterministic spec aims at one exact output and grades pass/fail. A probabilistic spec sets a bar on a distribution of outputs and commits to the share that must clear it. Write the second kind, or your PRD is unbuildable.</div>
  </div>
  <p>When you sit down to spec an AI feature, run this sequence:</p>
  <ol>
    <li><strong>Spec behavior, not output.</strong> What should it do, in what order of priority, and what must it never do? (This is the Model Spec shape — block 7.)</li>
    <li><strong>Set the quality bar as a rate.</strong> "≥X% on N real cases," never "it shall be correct."</li>
    <li><strong>Define the failure behavior.</strong> What happens when it's wrong, unsure, or out of scope — the trust feature.</li>
    <li><strong>Add the ceilings.</strong> Cost-per-task and p95 latency, committed in the spec.</li>
    <li><strong>Mark the human checkpoints</strong> and the model dependency you're building on.</li>
  </ol>
  <div class="callout accent">
    <div class="ch">Say this in the interview</div>
    <p>"For an AI feature I don't write deterministic requirements — I spec the behavior, a quality bar as an eval threshold, the failure behavior when it's wrong or unsure, and the cost and latency ceilings. That's a PRD engineering can build and QA can actually sign."</p>
  </div>

  <h2><span class="ix">5</span> Frameworks to Deploy</h2>
  <div class="sub">Three structures that make a probabilistic spec real.</div>
  <h3>① Behavior, not output</h3>
  <p>Spec the model the way OpenAI specs its own: <em class="k">objectives</em> (what it's trying to do), <em class="k">rules</em> (hard "never / always" constraints), and <em class="k">defaults</em> (how to resolve conflicts and ambiguity). You're describing how it should <em>behave</em> across a space of inputs, not the answer to any one input.</p>
  <h3>② The five AI-PRD additions</h3>
  <p>Every AI PRD adds five sections a SaaS PRD lacks: <strong>quality bar (eval + threshold), acceptable error rate, failure behavior, cost/latency ceiling, and human-in-the-loop + model dependency.</strong> Use it as a checklist — if any is missing, the spec isn't done.</p>
  <h3>③ Distributional acceptance</h3>
  <p>Write acceptance as a measured rate on a real set: "≥90% correct-with-citation on 200 labeled questions; hallucination under 2%." Quantified, testable, and honest that the number isn't 100. This single habit is what turns "does it work?" into "how well, and is that good enough?"</p>

  <h2><span class="ix">6</span> Worked Solution</h2>
  <div class="sub">The acceptance criteria your eng lead can actually build to.</div>
  <div class="callout">
    <div class="ch">The prompt</div>
    <p style="font-family:var(--font-ui);font-weight:600;">"Write the acceptance criteria for an AI feature that answers customer questions from our help docs. Your eng lead says your first draft — 'the assistant answers questions accurately' — is untestable. Fix it."</p>
  </div>
  <p><strong>Step 1 — Admit the draft is a wish.</strong> "Answers accurately" has no number, no failure behavior, no scope. It's deterministic thinking applied to a probabilistic system. The eng lead is right — there's nothing to build to or sign off.</p>
  <p><strong>Step 2 — Rewrite as behavior + bar + failure.</strong></p>
  <div class="flow">
<span class="st">BEHAVIOR</span>     <span class="nt">answer ONLY from retrieved docs · cite the source · refuse when none fits</span>
<span class="st">QUALITY BAR</span>  <span class="nt">≥90% correct-with-valid-citation on a 200-question eval set (written with Support)</span>
<span class="st">ERROR BUDGET</span> <span class="nt">hallucination under 2%, measured weekly on live traffic (Ch.5)</span>
<span class="st">ON FAILURE</span>   <span class="nt">below a confidence threshold → "I couldn't find this in our docs" + human handoff</span>
  </div>
  <p><strong>Step 3 — Add the ceilings and checkpoints.</strong> "Cost under $0.03 per answer at scale; p95 under 3s; any answer touching billing or account changes is drafted, not sent, pending an agent's review (HITL)." Now scope, economics, and safety are in the spec, not assumed.</p>
  <p><strong>Step 4 — Name the dependency.</strong> "Built on [model] via our abstraction layer; any model change re-runs the eval set before rollout (Ch.6.3)." The spec now survives a deprecation.</p>
  <div class="callout good">
    <div class="ch">Why this wins</div>
    <p>You converted an un-signable wish into a spec with a measurable bar, an explicit error budget, defined failure behavior, and committed ceilings. Engineering knows exactly what to build; QA knows exactly what to test; and "is it done?" has a numerical answer. That is an AI PRD.</p>
  </div>

  <h2><span class="ix">7</span> Industry Case</h2>
  <div class="sub">How the company that builds the models writes the spec for them.</div>
  <h3>OpenAI's Model Spec — a spec for behavior, not output</h3>
  <p>The single best public example of speccing a non-deterministic system is OpenAI's <strong>Model Spec</strong> — first published in <strong>May 2024</strong> and updated repeatedly through 2025. It exists precisely because you cannot write "given input X, return output Y" for a model. So instead it specifies <em>behavior</em>, in exactly the layered shape this lesson teaches:</p>
  <ul>
    <li><strong>Objectives</strong> — broad goals like "assist the developer and end user" and "benefit humanity." The intent, not an output.</li>
    <li><strong>Rules</strong> — hard constraints of the form "never do X" or "if X then Y." The non-negotiables.</li>
    <li><strong>Default behaviors</strong> — how to resolve conflicts and ambiguity when the rules don't fully decide. A <em>chain of command</em> assigns each instruction an authority level, so higher-authority instructions override lower ones.</li>
  </ul>
  <p>Notice what's absent: there is no table of inputs and required outputs, because that's impossible for a probabilistic system. The Model Spec is a behavior contract — priorities, hard rules, and how to handle the gray areas. That is the exact shape of a good AI PRD, written by the people with the most to lose from getting it wrong.</p>
  <div class="callout accent">
    <div class="ch">The PM takeaway</div>
    <p>If the world's leading model company specs its product as objectives, rules, and default behaviors — not input/output pairs — that's the template for your feature too. A PRD for a probabilistic feature specifies behavior, a measurable bar, and failure handling. Write deterministic requirements and you've specced a product that can't exist.</p>
  </div>

  <h2><span class="ix">✓</span> Check Yourself</h2>
  <div class="quiz" data-correct="2">
    <div class="q">Which is a usable acceptance criterion for an AI answering feature?</div>
    <div class="opt" data-i="0"><span class="l">A</span><span>"The assistant always answers correctly."</span></div>
    <div class="opt" data-i="1"><span class="l">B</span><span>"The assistant is helpful and accurate."</span></div>
    <div class="opt" data-i="2"><span class="l">C</span><span>"≥90% correct-with-citation on a 200-question eval set, hallucination under 2%, and a defined 'I couldn't find this' fallback below a confidence threshold."</span></div>
    <div class="opt" data-i="3"><span class="l">D</span><span>"The assistant never makes mistakes."</span></div>
    <div class="qexp">A and D are impossible for a probabilistic system; B has no number and no failure behavior. C specifies a measurable bar (a rate on a real set), an error budget, and what happens on failure — buildable and signable. That's a probabilistic acceptance criterion.</div>
  </div>
  <div class="quiz" data-correct="1">
    <div class="q">Why does OpenAI's Model Spec define objectives, rules, and default behaviors instead of input/output pairs?</div>
    <div class="opt" data-i="0"><span class="l">A</span><span>To keep the document short.</span></div>
    <div class="opt" data-i="1"><span class="l">B</span><span>Because you can't enumerate exact outputs for a probabilistic system — you spec behavior, hard rules, and how to handle ambiguity.</span></div>
    <div class="opt" data-i="2"><span class="l">C</span><span>Because input/output pairs are illegal.</span></div>
    <div class="opt" data-i="3"><span class="l">D</span><span>To avoid writing any rules at all.</span></div>
    <div class="qexp">A model gives different outputs for the same input, so a table of required outputs is impossible. The Model Spec instead specifies behavior (objectives), hard constraints (rules), and conflict/ambiguity handling (defaults + chain of command) — the template for any AI PRD.</div>
  </div>
  <h2><span class="ix">✎</span> Apply It Yourself</h2>
  <div class="sub">No worked answer this time — this one's your rep. Give it 10 minutes before you move on.</div>
  <div class="callout">
    <div class="ch">Your problem</div>
    <p style="font-family:var(--font-ui);font-weight:600;">"Write the acceptance criteria for an AI feature that summarizes customer-support tickets for managers. Your eng lead says your first draft, 'summaries should be accurate and useful,' is untestable. Fix it."</p>
  </div>
  <p><strong>Hints</strong> (peek only if you're stuck):</p>
  <ul>
    <li>Spec behavior + a quality bar + failure behavior, not exact outputs.</li>
    <li>Make the bar a rate on a real eval set, not a binary.</li>
    <li>The trap: 'the AI shall always be accurate.'</li>
  </ul>
  <table>
    <tr><th>A strong answer...</th><th>A weak answer...</th></tr>
    <tr><td>Specifies a behavior, an eval threshold (e.g. ≥90% on N labeled tickets), and a failure / fallback.</td><td>Writes 'accurate and useful.'</td></tr>
    <tr><td>Adds an error budget + cost / latency ceilings.</td><td>Leaves quality undefined.</td></tr>
    <tr><td>Defines what happens when unsure (flag for human review).</td><td>Has no failure behavior.</td></tr>
  </table>
  <div class="callout accent">
    <div class="ch">Make it live</div>
    <p>Take a real AI feature and write one testable acceptance line: a rate, on a set, with a fallback. Could QA actually sign it?</p>
  </div>
  __NAV__
</div>
`,

/* ---------------------------------------------------------------- 7.2 */
"7.2": `
<div class="wrap">
  <div class="les-kicker">Chapter 7 · Lesson 7.2</div>
  <h1 class="les-title">Speccing Evals &amp; Acceptance Criteria</h1>
  <div class="les-meta">
    <span class="pill">AI documentation</span><span class="pill">~23 min read</span>
    <span class="pill">Prereq: 7.1, Ch.5</span><span class="pill">Difficulty: core</span>
  </div>
  <p class="motto">"Definition of done" for normal software is a checkbox. For an AI feature it's a number you chose on purpose — and the eval set is the only thing that can ever tick it.</p>

  <p class="lead">Lesson 7.1 said an AI PRD specs a quality bar. This lesson is how you actually write that bar so it can decide whether a feature ships. The artifact is the <em class="k">eval set</em> — a graded test of real tasks — and the <em class="k">acceptance threshold</em> on it. Together they turn "the team feels it works" into a measurable, defensible "done." Get this right and a probabilistic feature becomes shippable; get it wrong and you're guessing forever.</p>

  <h2><span class="ix">1</span> Your Mandate</h2>
  <div class="sub">What you own when "done" can't mean 100%.</div>
  <p>Your mandate is to <strong>define the eval set and the acceptance threshold</strong> — the artifact that makes a fuzzy feature shippable. You choose the tasks, the way each is graded, and the bar each must clear. Engineering runs the harness; you decide what "good enough" means and on which dimensions. The discipline you enforce: <em class="k">"done" is the eval clearing the bar, not the demo feeling good.</em></p>

  <h2><span class="ix">2</span> Your Responsibilities</h2>
  <div class="sub">The anatomy of an eval spec — four parts, all your call.</div>
  <table>
    <tr><th>Part</th><th>What it is</th><th>Your decision</th></tr>
    <tr><td><strong>Task set</strong></td><td>The cases the feature is graded on</td><td>Pull from real usage and past failures — not synthetic happy-path examples</td></tr>
    <tr><td><strong>Grader</strong></td><td>How each task is scored</td><td>Deterministic state check / rubric / LLM-as-judge — pick per dimension</td></tr>
    <tr><td><strong>Dimensions</strong></td><td>What "good" means here</td><td>Correctness, citation, tone, turns, latency, cost — usually several</td></tr>
    <tr><td><strong>Thresholds</strong></td><td>The bar each dimension must clear</td><td>The "done" line — a number you set on purpose</td></tr>
  </table>
  <p>The mandate compresses to one sentence: <strong>the eval set IS the acceptance criteria.</strong> Everything else in the PRD points at it. When someone asks "is it done?", the answer is "the eval cleared the thresholds on the real task set" — or it isn't done.</p>

  <h2><span class="ix">3</span> Metrics That Matter Here</h2>
  <div class="sub">How you know the eval itself is any good.</div>
  <table>
    <tr><th>Metric</th><th>Reads as</th><th>Why a PM watches it</th></tr>
    <tr><td><strong>Representativeness</strong></td><td>Do the eval tasks match real production usage?</td><td>A green eval on unreal tasks is worse than no eval</td></tr>
    <tr><td><strong>Label quality</strong></td><td>Are the "correct" answers actually correct?</td><td>Bad labels make the bar meaningless</td></tr>
    <tr><td><strong>Per-dimension thresholds</strong></td><td>A bar for each success dimension, not one blob</td><td>One number hides multidimensional failure</td></tr>
    <tr><td><strong>Regression coverage</strong></td><td>Are past failures permanent test cases?</td><td>Stops fixed bugs from silently returning (Ch.5)</td></tr>
  </table>
  <div class="callout warn">
    <div class="ch">The trap — the eval that's green while production is red</div>
    <p>The most dangerous eval is one built from <strong>synthetic, easy, happy-path tasks</strong>. It passes, you ship, and reality — full of the messy real questions you didn't include — fails. An eval set is only as honest as its tasks. <strong>Build it from real usage and real failures, or it certifies a product that only works in the demo.</strong></p>
  </div>

  <h2><span class="ix">4</span> How to Think Here</h2>
  <div class="sub">"Done" is multidimensional — every bar must clear, not just one.</div>
  <div class="fig">
    <div class="fig-title">Definition of done = every dimension clears its bar</div>
    <svg viewBox="0 0 520 262" xmlns="http://www.w3.org/2000/svg" font-family="Hanken Grotesk, sans-serif">
      <text x="300" y="30" text-anchor="middle" font-size="9.5" fill="#86868b">bar = % of eval cases passing · dashed line = required threshold</text>
      <!-- row 1 -->
      <text x="150" y="72" text-anchor="end" font-size="10.5" fill="#1d1d1f">Correct resolution</text>
      <rect x="160" y="60" width="300" height="16" rx="4" fill="#eeeeee"/>
      <rect x="160" y="60" width="276" height="16" rx="4" fill="#0a7d3c" opacity="0.55"/>
      <line x1="430" y1="55" x2="430" y2="81" stroke="#1d1d1f" stroke-width="1.3" stroke-dasharray="3 2"/>
      <text x="472" y="72" font-size="12" fill="#0a7d3c">✓</text>
      <!-- row 2 -->
      <text x="150" y="110" text-anchor="end" font-size="10.5" fill="#1d1d1f">Valid citation</text>
      <rect x="160" y="98" width="300" height="16" rx="4" fill="#eeeeee"/>
      <rect x="160" y="98" width="288" height="16" rx="4" fill="#0a7d3c" opacity="0.55"/>
      <line x1="445" y1="93" x2="445" y2="119" stroke="#1d1d1f" stroke-width="1.3" stroke-dasharray="3 2"/>
      <text x="472" y="110" font-size="12" fill="#0a7d3c">✓</text>
      <!-- row 3 -->
      <text x="150" y="148" text-anchor="end" font-size="10.5" fill="#1d1d1f">Appropriate tone</text>
      <rect x="160" y="136" width="300" height="16" rx="4" fill="#eeeeee"/>
      <rect x="160" y="136" width="279" height="16" rx="4" fill="#0a7d3c" opacity="0.55"/>
      <line x1="430" y1="131" x2="430" y2="157" stroke="#1d1d1f" stroke-width="1.3" stroke-dasharray="3 2"/>
      <text x="472" y="148" font-size="12" fill="#0a7d3c">✓</text>
      <!-- row 4 (fails) -->
      <text x="150" y="186" text-anchor="end" font-size="10.5" fill="#1d1d1f">Finishes under 10 turns</text>
      <rect x="160" y="174" width="300" height="16" rx="4" fill="#eeeeee"/>
      <rect x="160" y="174" width="234" height="16" rx="4" fill="#b25000" opacity="0.6"/>
      <line x1="415" y1="169" x2="415" y2="195" stroke="#1d1d1f" stroke-width="1.3" stroke-dasharray="3 2"/>
      <text x="472" y="186" font-size="12" fill="#b25000">✗</text>
      <!-- row 5 -->
      <text x="150" y="224" text-anchor="end" font-size="10.5" fill="#1d1d1f">Within cost ceiling</text>
      <rect x="160" y="212" width="300" height="16" rx="4" fill="#eeeeee"/>
      <rect x="160" y="212" width="294" height="16" rx="4" fill="#0a7d3c" opacity="0.55"/>
      <line x1="445" y1="207" x2="445" y2="233" stroke="#1d1d1f" stroke-width="1.3" stroke-dasharray="3 2"/>
      <text x="472" y="224" font-size="12" fill="#0a7d3c">✓</text>
      <text x="300" y="252" text-anchor="middle" font-size="9.5" fill="#b25000">four dimensions clear — but "turns" misses, so the feature is NOT done</text>
    </svg>
    <div class="fig-cap">"Done" isn't one score. A feature ships only when every dimension clears its threshold. Here correctness, citation, tone, and cost all pass — but the agent takes too many turns, so it's not done. One miss blocks the ship.</div>
  </div>
  <p>Write the eval spec in this order:</p>
  <ol>
    <li><strong>Pull real tasks.</strong> Start with 20–30 cases from real usage and past failures. Real failures make better tests than invented ones.</li>
    <li><strong>Pick a grader per dimension.</strong> State check for "did it resolve" (deterministic), a transcript constraint for "under N turns," an LLM-judge for "right tone."</li>
    <li><strong>Set a threshold per dimension.</strong> The bar each must clear — chosen from how much error that dimension can tolerate (Ch.4.2).</li>
    <li><strong>Define done as "all clear."</strong> Every dimension over its bar on the real set — not an average that hides a failing one.</li>
    <li><strong>Curate failures back in.</strong> Each new production failure becomes a permanent eval case (Ch.5's flywheel).</li>
  </ol>
  <div class="callout accent">
    <div class="ch">Say this in the interview</div>
    <p>"I'd define done as an eval: real tasks pulled from production, graded per dimension — resolution as a state check, tone with an LLM-judge — each clearing a threshold I set deliberately. 'Done' is every dimension over its bar, not the demo looking good."</p>
  </div>

  <h2><span class="ix">5</span> Frameworks to Deploy</h2>
  <div class="sub">Three moves that make an eval spec trustworthy.</div>
  <h3>① The eval set from real failures</h3>
  <p>Anthropic's own guidance is blunt: pull your first ~20 tasks straight from your real queue, because <strong>real failures make better evals than synthetic scenarios.</strong> Synthetic tasks flatter the model; production tasks expose it. Start from reality and the bar means something.</p>
  <h3>② The three graders</h3>
  <p>Match the grader to the dimension: a <em class="k">state check</em> for objectively verifiable outcomes ("ticket resolved?"), a <em class="k">transcript/trajectory constraint</em> for process ("finished in under 10 turns?"), and an <em class="k">LLM-as-judge rubric</em> for fuzzy qualities ("appropriate tone?"). Most real features need all three.</p>
  <h3>③ Multidimensional done</h3>
  <p>Success is rarely one number. A support agent is "done" only if it <strong>resolves the issue AND stays under the turn limit AND holds the right tone AND stays in budget.</strong> Spec a threshold per dimension and require all of them — an average lets a catastrophic failure on one dimension hide behind strength on the others.</p>

  <h2><span class="ix">6</span> Worked Solution</h2>
  <div class="sub">Turning "it works, ship it" into a real decision.</div>
  <div class="callout">
    <div class="ch">The prompt</div>
    <p style="font-family:var(--font-ui);font-weight:600;">"An eng team says the new AI support agent 'works' and wants to ship Friday. How do you define 'done' so that's a real decision, not a vibe?"</p>
  </div>
  <p><strong>Step 1 — Refuse to ship on a feeling.</strong> "Works" is not a decision criterion for a probabilistic feature. I'd say: let's define done as a number on a real eval set, and ship when it clears — could be Friday, could be later.</p>
  <p><strong>Step 2 — Build the eval from reality.</strong></p>
  <div class="flow">
<span class="st">tasks</span>       <span class="nt">30 real tickets from the queue, including past failures (not synthetic)</span>
<span class="st">graders</span>     <span class="nt">resolved = state check · turns = transcript constraint · tone = LLM-judge</span>
<span class="st">thresholds</span>  <span class="nt">≥90% resolved · ≥95% valid citation · tone ≥90% · under cost ceiling</span>
<span class="st">done</span>        <span class="nt">clears EVERY threshold on the real set — then it ships</span>
  </div>
  <p><strong>Step 3 — Run it and read it honestly.</strong> Say correctness, citation, tone, and cost all clear, but it resolves in too many turns. Per multidimensional done, it is <em>not</em> done — even though four of five pass. That one dimension is a real user pain, and the eval caught it before Friday's users did.</p>
  <p><strong>Step 4 — Wire it as a gate and a flywheel.</strong> The eval becomes the release gate (Ch.5) and every new production failure is curated back in, so "done" stays honest over time and fixed issues can't silently regress.</p>
  <div class="callout good">
    <div class="ch">Why this wins</div>
    <p>You turned "ship it Friday" from a vibe into a measurable, multidimensional decision grounded in real tasks — and the eval caught a failure mode a demo would have hidden. "Done" is now a number the team agreed to, not the loudest engineer's confidence.</p>
  </div>

  <h2><span class="ix">7</span> Industry Case</h2>
  <div class="sub">How a frontier lab tells teams to define "done" for an agent.</div>
  <h3>Anthropic — "Demystifying evals for AI agents"</h3>
  <p>Anthropic's engineering team published practical guidance (circulated widely in early 2026) on exactly this problem, and it reads like an acceptance-criteria playbook. Their definition of an eval is the definition of done this lesson argues for: <em>"a structured test where an AI agent is given a task and is graded on whether it succeeds,"</em> turning vague notions of quality into <strong>measurable, repeatable signals.</strong></p>
  <ul>
    <li><strong>Build the set from real failures.</strong> Their concrete advice: extract ~20 tasks from your real support queue — real failures beat synthetic scenarios. Exactly framework ①.</li>
    <li><strong>Success is multidimensional.</strong> For a conversational agent they grade several things at once: <em>is the ticket resolved</em> (a state check), <em>did it finish in under ~10 turns</em> (a transcript constraint), and <em>was the tone appropriate</em> (an LLM-judge rubric). Three graders, three dimensions — the figure above, in production.</li>
    <li><strong>Evals run as CI.</strong> The eval isn't a one-time launch check; it's wired into the pipeline as a gate, so quality is verified on every change (Ch.5).</li>
  </ul>
  <p>The broader industry shift backs this up: teams now write "definition of done" for AI as <em>a calibration about acceptable variance, not a binary result</em> — often keeping two sets of criteria on one feature: deterministic ones for the vending-machine parts (auth, billing) and distributional ones for the probabilistic parts (the actual AI behavior).</p>
  <div class="callout accent">
    <div class="ch">The PM takeaway</div>
    <p>The lab that builds frontier agents defines "done" as a graded eval over real tasks, scored on several dimensions, run as a gate. That's your acceptance criteria. The eval set isn't documentation you write after — it <em>is</em> the spec that decides whether a probabilistic feature is allowed to ship.</p>
  </div>

  <h2><span class="ix">✓</span> Check Yourself</h2>
  <div class="quiz" data-correct="3">
    <div class="q">Your eval set is built from clean, synthetic example questions and it passes at 98%. Why might you still be in trouble?</div>
    <div class="opt" data-i="0"><span class="l">A</span><span>98% is too high to be real.</span></div>
    <div class="opt" data-i="1"><span class="l">B</span><span>Synthetic tasks are illegal in evals.</span></div>
    <div class="opt" data-i="2"><span class="l">C</span><span>You should always target 100%.</span></div>
    <div class="opt" data-i="3"><span class="l">D</span><span>The eval may not represent real usage — it can be green while production (full of messy real questions) is red.</span></div>
    <div class="qexp">An eval is only as honest as its tasks. Synthetic, happy-path sets flatter the model and certify a product that works in the demo and fails in reality. Build the set from real usage and real failures, or the green checkmark is meaningless.</div>
  </div>
  <div class="quiz" data-correct="0">
    <div class="q">An agent scores: resolution 92%, citation 96%, tone 94%, but finishes under the turn limit only 78% of the time (threshold 85%). Is it done?</div>
    <div class="opt" data-i="0"><span class="l">A</span><span>No — done means every dimension clears its threshold, and turns misses, even though the others pass.</span></div>
    <div class="opt" data-i="1"><span class="l">B</span><span>Yes — three out of four is a passing average.</span></div>
    <div class="opt" data-i="2"><span class="l">C</span><span>Yes — turns don't matter.</span></div>
    <div class="opt" data-i="3"><span class="l">D</span><span>Can't tell without DAU.</span></div>
    <div class="qexp">Done is multidimensional: every threshold must clear, not an average. A 78% on turns (against an 85% bar) is a real user pain — too many back-and-forths. One miss blocks the ship; that's the point of speccing a threshold per dimension.</div>
  </div>

  <h2><span class="ix">✎</span> Apply It Yourself</h2>
  <div class="sub">No worked answer this time — this one's your rep. Give it 10 minutes before you move on.</div>
  <div class="callout">
    <div class="ch">Your problem</div>
    <p style="font-family:var(--font-ui);font-weight:600;">"An eng team says your new AI agent 'works' and wants to ship Friday. Define 'done' so that's a real decision, not a vibe."</p>
  </div>
  <p><strong>Hints</strong> (peek only if you're stuck):</p>
  <ul>
    <li>The eval set IS the acceptance criteria — build it from real cases.</li>
    <li>Success is multidimensional: pick a threshold per dimension.</li>
    <li>The trap: a green synthetic eval that doesn't match production.</li>
  </ul>
  <table>
    <tr><th>A strong answer...</th><th>A weak answer...</th></tr>
    <tr><td>Pulls ~30 real tasks, grades per dimension (state check / rubric / transcript), sets thresholds.</td><td>Ships on 'it works.'</td></tr>
    <tr><td>Defines done as every dimension clearing its bar.</td><td>Averages dimensions, hiding a failure.</td></tr>
    <tr><td>Builds the set from real failures, not synthetic happy paths.</td><td>Tests only easy cases.</td></tr>
  </table>
  <div class="callout accent">
    <div class="ch">Make it live</div>
    <p>For an AI feature you'd ship, write its 'definition of done' as 3 measurable dimensions, each with a threshold. Is it shippable yet?</p>
  </div>

  <div class="callout good" style="margin-top:40px;">
    <div class="ch">Chapter 7 complete</div>
    <p>You can now write the spec for a feature that's never 100%: a PRD that specs behavior, a quality bar, and failure handling (7.1), and an eval set whose multidimensional thresholds <em>are</em> the definition of done (7.2). The through-line: you don't list deterministic requirements — you set a measurable bar and the behavior around it. Next, <strong>Chapter 8 — Cross-functional Communication</strong>: earning ML engineers' trust by asking the right question, not faking the answer.</p>
  </div>
  __NAV__
</div>
`