/* ===== Chapter 06 lessons — AI PM by Rohit Swerashi =====
   One JS object entry per lesson: "N.Y": `<full lesson html>`
   Keep the 7-block structure. End each entry's content with __NAV__ (build injects nav). */

/* ---------------------------------------------------------------- 6.1 */
"6.1": `
<div class="wrap">
  <div class="les-kicker">Chapter 6 · Lesson 6.1</div>
  <h1 class="les-title">Roadmapping When the Model Keeps Changing</h1>
  <div class="les-meta">
    <span class="pill">Product planning</span><span class="pill">~24 min read</span>
    <span class="pill">Prereq: Ch.4</span><span class="pill">Difficulty: core</span>
  </div>
  <p class="motto">Your roadmap's biggest competitor isn't another company — it's the next version of the model you're building on. Plan as if it ships next quarter, because it will.</p>

  <p class="lead">Every roadmap framework you learned assumes a stable foundation: you decide what to build, engineering builds it, the ground stays put. In AI the ground moves under you — a frontier release every few weeks can hand you a feature for free or erase one you spent a quarter on. This lesson teaches you to roadmap on that shifting ground: to tell, for any bet, whether the model's improvement will <em class="k">strengthen it or submerge it</em> — and to build above the waterline.</p>

  <h2><span class="ix">1</span> Your Mandate</h2>
  <div class="sub">What you own when your foundation upgrades itself without asking.</div>
  <p>Your mandate is to <strong>sequence the roadmap against the model's trajectory, not against a frozen spec</strong>. You don't control when the next model ships or what it can do — that's the vendor's roadmap, not yours. What you own is the decision, for every item, of whether to <em class="k">build it now, wait for the model to do it, or never build it because the model will</em>. Get that judgment right and each release is a tailwind; get it wrong and you ship things that are obsolete the week they launch.</p>

  <h2><span class="ix">2</span> Your Responsibilities</h2>
  <div class="sub">The concrete planning calls that are yours.</div>
  <table>
    <tr><th>You own</th><th>You do NOT own</th></tr>
    <tr><td><strong>Classifying every bet</strong> by model-overhang exposure — will a better model help or kill it?</td><td>The vendor's release schedule and roadmap</td></tr>
    <tr><td><strong>Sequencing</strong> — what to build now vs wait for vs skip</td><td>How fast the frontier improves</td></tr>
    <tr><td><strong>Investing in the durable layer</strong> — data, workflow, distribution the model can't provide</td><td>The model's raw capability curve</td></tr>
    <tr><td><strong>Re-planning each release</strong> — treating a model drop as a roadmap event</td><td>Which capability ships next</td></tr>
  </table>
  <p>The junior move is to build a tidy 12-month roadmap and defend it. The senior move is to build a roadmap that <strong>assumes the model gets dramatically better on its own</strong>, and concentrates your team's effort only where that improvement <em>can't</em> reach.</p>

  <h2><span class="ix">3</span> Metrics That Matter Here</h2>
  <div class="sub">How you measure whether a roadmap is built on rock or on sand.</div>
  <table>
    <tr><th>Signal</th><th>Reads as</th><th>Why a PM watches it</th></tr>
    <tr><td><strong>Model-overhang exposure</strong></td><td>% of roadmap value the next model likely gives away free</td><td>It's the share of your plan with a ticking clock</td></tr>
    <tr><td><strong>Durable-value ratio</strong></td><td>Effort spent above the waterline (data/workflow/distribution) vs below</td><td>Whether the team compounds or runs in place</td></tr>
    <tr><td><strong>"Survives a better model" test</strong></td><td>Would this bet still matter if the model were 30% better?</td><td>The fastest filter for a fragile roadmap item</td></tr>
    <tr><td><strong>Time-to-obsolescence</strong></td><td>Rough shelf life of a feature given the release cadence</td><td>Stops you funding 6-month builds with 2-month lives</td></tr>
  </table>
  <div class="callout warn">
    <div class="ch">The trap — building into the overhang</div>
    <p>"Model overhang" is the gap between what the current model can do and what the next one will. Building a feature that sits in that gap — a clever workaround for a limitation the next release simply removes — is the most common way AI teams waste a quarter. <strong>If your feature exists only to patch a current model weakness, assume the model fixes it and you just shipped dead weight.</strong></p>
  </div>

  <h2><span class="ix">4</span> How to Think Here</h2>
  <div class="sub">Picture model capability as a rising waterline — and build above it.</div>
  <div class="fig">
    <div class="fig-title">The rising waterline — build above it, not below</div>
    <svg viewBox="0 0 520 300" xmlns="http://www.w3.org/2000/svg" font-family="Hanken Grotesk, sans-serif">
      <polygon points="70,213 490,73 490,250 70,250" fill="#0071e3" opacity="0.10"/>
      <line x1="70" y1="250" x2="490" y2="250" stroke="#1d1d1f" stroke-width="1.2"/>
      <line x1="70" y1="250" x2="70" y2="40" stroke="#1d1d1f" stroke-width="1.2"/>
      <polyline points="70,213 490,73" fill="none" stroke="#0071e3" stroke-width="2.4"/>
      <text x="486" y="62" text-anchor="end" font-size="10" font-weight="700" fill="#0058b0">model capability ↑ (every release)</text>
      <text x="300" y="95" text-anchor="middle" font-size="12" font-weight="700" fill="#0a7d3c">ABOVE THE LINE — durable</text>
      <text x="300" y="112" text-anchor="middle" font-size="9.5" fill="#0a7d3c">your data · workflow · distribution</text>
      <text x="178" y="222" text-anchor="middle" font-size="12" font-weight="700" fill="#b25000">UNDERWATER</text>
      <text x="178" y="239" text-anchor="middle" font-size="9.5" fill="#b25000">the model now does this for free</text>
      <text x="280" y="282" text-anchor="middle" font-size="11" fill="#86868b">time →</text>
      <text x="40" y="148" text-anchor="middle" font-size="11" fill="#86868b" transform="rotate(-90 40 148)">capability / value</text>
    </svg>
    <div class="fig-cap">As model capability rises (the line), it submerges whatever sits below it — those features become free commodities. Build above the line, on the data, workflow, and distribution the model can't hand your competitor.</div>
  </div>
  <p>When you plan, run every roadmap item through this loop:</p>
  <ol>
    <li><strong>Plot the trajectory.</strong> Assume the model gets meaningfully better on the obvious axes (reasoning, context length, multimodality, cost) within your roadmap window. It will.</li>
    <li><strong>Locate each bet.</strong> Is it below the waterline (the model will do this soon) or above it (it depends on something only you have)?</li>
    <li><strong>Below the line → wait or skip.</strong> Don't spend a quarter building what a release gives you free. Ride the model up.</li>
    <li><strong>Above the line → invest hard.</strong> Proprietary data, workflow integration, distribution — the durable layer compounds with every model upgrade instead of being erased by it.</li>
    <li><strong>Re-plan on every release.</strong> A new model is a roadmap event, not just an eng ticket.</li>
  </ol>
  <div class="callout accent">
    <div class="ch">Say this in the interview</div>
    <p>"I plan assuming the model gets much better on its own. So I won't spend the roadmap patching current limitations — I'll ride the model for raw capability and concentrate our build on the data and workflow a better model can't give our competitor."</p>
  </div>

  <h2><span class="ix">5</span> Frameworks to Deploy</h2>
  <div class="sub">Three tools for planning on moving ground.</div>
  <h3>① The waterline test</h3>
  <p>One question per roadmap item: <strong>"if the base model were 30% better next quarter, does this bet get stronger or pointless?"</strong> Stronger means it's above the line — build it. Pointless means it's overhang — wait or skip. This single test re-sorts most roadmaps in minutes.</p>
  <h3>② Build / Wait / Skip</h3>
  <p>Every AI bet gets one of three verdicts, not just "build." <em class="k">Build</em> what's durable and needed now. <em class="k">Wait</em> for the model on capabilities clearly on the trajectory (you'll get them cheaper and better by not building them). <em class="k">Skip</em> what's pure overhang. Naming "wait" and "skip" as legitimate outcomes is the discipline most roadmaps lack.</p>
  <h3>③ The durable layer</h3>
  <p>The part of your product the model can't replicate: <em class="k">proprietary data</em> (that compounds with use), <em class="k">workflow lock-in</em>, and <em class="k">distribution</em> (the moats from Ch.4). Every model upgrade makes a product built on these <em>better</em>. Concentrate roadmap capacity here, and the frontier's pace becomes your ally instead of your threat.</p>

  <h2><span class="ix">6</span> Worked Solution</h2>
  <div class="sub">A roadmap request that's half-trap.</div>
  <div class="callout">
    <div class="ch">The prompt</div>
    <p style="font-family:var(--font-ui);font-weight:600;">"Leadership wants a 6-month roadmap for our AI note-taking app. The top user request is 'better summaries.' How do you plan it?"</p>
  </div>
  <p><strong>Step 1 — Run the waterline test on "better summaries."</strong> Summarization quality is the most predictable thing on the model trajectory — every frontier release improves it for free. A 6-month in-house effort to make summaries marginally better is building straight into the overhang. <strong>Verdict: wait.</strong> Ride the model; swap in the better one when it ships.</p>
  <p><strong>Step 2 — Find what's above the line.</strong> What can the model never give a competitor? <em>Our</em> users' notes, their cross-note connections, their team's shared context, the integrations into their workflow. That's the durable layer.</p>
  <div class="flow">
<span class="st">BELOW (wait/skip)</span>   <span class="nt">raw summary quality · transcription · translation</span>
   <span class="ar">↓ the model commoditizes these</span>
<span class="st">ABOVE (build)</span>       <span class="nt">your knowledge graph of notes · workflow hooks · distribution</span>
   <span class="ar">↓ a better model makes these MORE valuable</span>
  </div>
  <p><strong>Step 3 — Sequence accordingly.</strong> Roadmap: (a) adopt an abstraction so we can take each model upgrade for free as summaries improve (Lesson 6.3); (b) spend the real build on connecting notes into a personal knowledge graph and embedding into users' daily tools — things a better model amplifies rather than replaces.</p>
  <p><strong>Step 4 — Set the re-plan trigger.</strong> "We revisit this roadmap on every major model release." If a release makes summaries excellent, we declare victory on that axis and double down above the line — we don't keep polishing what's now free.</p>
  <div class="callout good">
    <div class="ch">Why this wins</div>
    <p>You refused to burn six months in the overhang, redirected the team to the durable layer the model can't touch, and turned the frontier's pace into a tailwind. That's roadmapping on shifting ground — exactly what gets an AI PM trusted with the plan.</p>
  </div>

  <h2><span class="ix">7</span> Industry Case</h2>
  <div class="sub">The pace of 2025–26, and what it did to "model-wrapping" roadmaps.</div>
  <h3>The frontier cadence — when "use an LLM" stopped being a roadmap</h3>
  <p>The clearest proof of this lesson is the sheer release velocity of 2025–26. Frontier models from multiple labs — successive GPT, Claude, and Gemini generations plus strong open-weight models — shipped within weeks of each other; by early 2026 commentators were describing stretches with several frontier releases from different companies inside a few weeks. The effect on product roadmaps was brutal and clarifying: <strong>"can you call an LLM and wrap it in a feature" went from a differentiator in 2024 to table stakes in 2026.</strong> The skills and features that defined a product one year were commodities the next.</p>
  <p>What survived the rising waterline was not the wrapping but the <em>system around the model</em>: orchestration, evaluation, proprietary data, workflow, and cost control. Industry write-ups of the period converge on the same conclusion — value shifted from "model interaction" to "system architecture," because everyone got the same frontier models at roughly the same time. The teams whose roadmaps were a pile of clever model-overhang patches got submerged; the teams who built above the line — on data and workflow the model couldn't hand a rival — rode every release upward.</p>
  <ul>
    <li><strong>The waterline really does rise on schedule.</strong> Features that were impressive demos in 2024 (basic summarization, simple chat, single-step generation) became default model capabilities, exactly as a "wait" verdict would have predicted.</li>
    <li><strong>Durable beat clever.</strong> Products with proprietary data and workflow lock-in compounded; thin wrappers re-did work the next model gave away (the Ch.4 graveyard, seen from the planning side).</li>
    <li><strong>Re-planning became routine.</strong> Mature AI teams now treat a major model release as a scheduled roadmap event, not a surprise.</li>
  </ul>
  <div class="callout accent">
    <div class="ch">The PM takeaway</div>
    <p>You are roadmapping on ground that rises every few weeks. Plan around the model improving under you: wait for what the trajectory will deliver, skip the overhang patches, and pour your team into the durable layer. The frontier's speed is a threat to a fragile roadmap and a gift to a well-built one.</p>
  </div>

  <h2><span class="ix">✓</span> Check Yourself</h2>
  <div class="quiz" data-correct="1">
    <div class="q">A PM wants to spend Q3 building a clever workaround for the current model's weak long-document handling. What's the risk?</div>
    <div class="opt" data-i="0"><span class="l">A</span><span>None — workarounds always pay off.</span></div>
    <div class="opt" data-i="1"><span class="l">B</span><span>It's building into the overhang — the next model likely fixes long-document handling natively, making the workaround dead weight.</span></div>
    <div class="opt" data-i="2"><span class="l">C</span><span>Long documents can't be handled by any model.</span></div>
    <div class="opt" data-i="3"><span class="l">D</span><span>The only risk is that it takes too long to build.</span></div>
    <div class="qexp">A feature that exists only to patch a current model limitation sits in the model overhang. Capabilities like context length are squarely on the trajectory — assume the next release removes the limitation, and the workaround becomes wasted effort. Verdict: wait.</div>
  </div>
  <div class="quiz" data-correct="2">
    <div class="q">Which roadmap bet gets STRONGER when the base model improves?</div>
    <div class="opt" data-i="0"><span class="l">A</span><span>A hand-tuned prompt that compensates for the model's current weaknesses.</span></div>
    <div class="opt" data-i="1"><span class="l">B</span><span>A feature that simply reformats the model's raw output.</span></div>
    <div class="opt" data-i="2"><span class="l">C</span><span>A workflow built on your proprietary data and integrations, with the model as one swappable component.</span></div>
    <div class="opt" data-i="3"><span class="l">D</span><span>A wrapper that adds a nicer UI to a single prompt.</span></div>
    <div class="qexp">Bets built on proprietary data, workflow, and distribution sit above the waterline — a better model amplifies them. The others are overhang patches or thin wrappers that a stronger model erases. Build above the line.</div>
  </div>
  <h2><span class="ix">✎</span> Apply It Yourself</h2>
  <div class="sub">No worked answer this time — this one's your rep. Give it 10 minutes before you move on.</div>
  <div class="callout">
    <div class="ch">Your problem</div>
    <p style="font-family:var(--font-ui);font-weight:600;">"Leadership wants a 6-month roadmap for your AI writing assistant. The top user ask is 'better grammar and rewriting.' Plan it — deciding what to build vs what to ride the model for."</p>
  </div>
  <p><strong>Hints</strong> (peek only if you're stuck):</p>
  <ul>
    <li>Run the waterline test: does a 30%-better model erase this or strengthen it?</li>
    <li>Build above the line (data / workflow / distribution); wait for what the model gives free.</li>
    <li>The trap: spending the quarter polishing what the next release improves anyway.</li>
  </ul>
  <table>
    <tr><th>A strong answer...</th><th>A weak answer...</th></tr>
    <tr><td>Waits on raw rewriting quality (the model gives it free); builds the durable layer.</td><td>Spends 6 months improving grammar in-house.</td></tr>
    <tr><td>Treats a model release as a roadmap event.</td><td>Plans against a frozen spec.</td></tr>
    <tr><td>Invests in proprietary data / workflow a better model amplifies.</td><td>Builds overhang patches.</td></tr>
  </table>
  <div class="callout accent">
    <div class="ch">Make it live</div>
    <p>Take a feature on a product's roadmap and ask: would the next frontier model make this trivial? If so, why build it now?</p>
  </div>
  __NAV__
</div>
`,

/* ---------------------------------------------------------------- 6.2 */
"6.2": `
<div class="wrap">
  <div class="les-kicker">Chapter 6 · Lesson 6.2</div>
  <h1 class="les-title">Prioritizing AI Bets (RICE for Probabilistic Features)</h1>
  <div class="les-meta">
    <span class="pill">Product planning</span><span class="pill">~24 min read</span>
    <span class="pill">Prereq: 6.1, Ch.5</span><span class="pill">Difficulty: core</span>
  </div>
  <p class="motto">RICE was built for features that either work or they don't. AI features work 73% of the time and cost more to verify than to build. Score them like SaaS features and you'll fund exactly the wrong ones.</p>

  <p class="lead">Prioritization frameworks like RICE assume two things AI breaks: that a feature's value is certain once shipped, and that "effort" means engineering. For a probabilistic feature, value is gated by <em class="k">how reliable the model is</em>, and the real cost is often the evals and data, not the code. This lesson re-defines RICE for AI so you sequence bets on what actually matters — reliability and true cost — instead of on optimism.</p>

  <h2><span class="ix">1</span> Your Mandate</h2>
  <div class="sub">What you own when "how valuable" depends on "how often it's right."</div>
  <p>Your mandate is to <strong>decide which AI bets get scarce capacity</strong>, with a scoring method that respects probability. You don't choose the model or set its accuracy; you make the prioritization honest about reliability and cost — so a flashy "high-impact" feature the model can't do reliably loses to a humbler one it can. The discipline you bring: <em class="k">impact you can't deliver reliably is not impact.</em></p>

  <h2><span class="ix">2</span> Your Responsibilities</h2>
  <div class="sub">RICE, re-defined term by term for probabilistic features.</div>
  <table>
    <tr><th>RICE term</th><th>Classic meaning</th><th>The AI fix</th></tr>
    <tr><td><strong>Reach</strong></td><td>How many users it touches</td><td><em class="k">Eligible</em> reach — only the slice where the model is reliable enough to ship</td></tr>
    <tr><td><strong>Impact</strong></td><td>Value per user when used</td><td>Value when right × how often it's right (the hit-rate)</td></tr>
    <tr><td><strong>Confidence</strong></td><td>Your gut certainty in the estimate</td><td>Literally <em class="k">model reliability</em> — your eval score on this task, not a feeling</td></tr>
    <tr><td><strong>Effort</strong></td><td>Engineering weeks</td><td>Build + eval set + data + ongoing re-tuning when the model changes</td></tr>
  </table>
  <p>The two terms that change most are Confidence and Effort — and they're the ones SaaS instincts get most wrong. In AI, "Confidence" stops being optimism and becomes a measured eval number; "Effort" stops being just code (which vibe-coding made cheap) and becomes the evals, data, and maintenance that are now the real cost.</p>

  <h2><span class="ix">3</span> Metrics That Matter Here</h2>
  <div class="sub">The inputs that feed an honest AI prioritization score.</div>
  <table>
    <tr><th>Input</th><th>Reads as</th><th>Why it changes the ranking</th></tr>
    <tr><td><strong>Eligible reach</strong></td><td>Users in the slice the model handles reliably</td><td>A feature reliable for 10% of cases has 10% of its claimed reach</td></tr>
    <tr><td><strong>Model reliability (eval score)</strong></td><td>Measured hit-rate on this exact task</td><td>It's your real Confidence — and it caps Impact</td></tr>
    <tr><td><strong>Verification / eval cost</strong></td><td>Cost to build and run the eval + review loop</td><td>Often the dominant Effort term, not the code</td></tr>
    <tr><td><strong>Maintenance burden</strong></td><td>Re-tuning needed when the model changes (Ch.6.3)</td><td>A bet that needs constant re-tuning is more expensive than it looks</td></tr>
  </table>
  <div class="callout warn">
    <div class="ch">The trap — scoring Effort as engineering only</div>
    <p>Vibe coding (Ch.9) made building a feature cheap, which fools teams into scoring AI bets as low-effort. But the build was never the expensive part — <strong>the evals, the labeled data, and the re-tuning are</strong>. A feature that's two days to build and two months to make trustworthy is a high-effort bet. Score it as one, or you'll greenlight a swamp.</p>
  </div>

  <h2><span class="ix">4</span> How to Think Here</h2>
  <div class="sub">The same RICE formula — with every term re-read for probability.</div>
  <div class="fig">
    <div class="fig-title">RICE, re-defined for AI</div>
    <svg viewBox="0 0 520 290" xmlns="http://www.w3.org/2000/svg" font-family="Hanken Grotesk, sans-serif">
      <rect x="36" y="64" width="112" height="42" rx="8" fill="#ffffff" stroke="#1d1d1f" stroke-width="1.2"/>
      <text x="92" y="90" text-anchor="middle" font-size="13" font-weight="700" fill="#1d1d1f">Reach</text>
      <text x="159" y="92" text-anchor="middle" font-size="15" fill="#86868b">×</text>
      <rect x="170" y="64" width="112" height="42" rx="8" fill="#ffffff" stroke="#1d1d1f" stroke-width="1.2"/>
      <text x="226" y="90" text-anchor="middle" font-size="13" font-weight="700" fill="#1d1d1f">Impact</text>
      <text x="293" y="92" text-anchor="middle" font-size="15" fill="#86868b">×</text>
      <rect x="304" y="64" width="112" height="42" rx="8" fill="#0071e3" opacity="0.10" stroke="#0071e3" stroke-width="1.3"/>
      <text x="360" y="90" text-anchor="middle" font-size="13" font-weight="700" fill="#0058b0">Confidence</text>
      <text x="92" y="126" text-anchor="middle" font-size="9.5" fill="#86868b">eligible reach only</text>
      <text x="226" y="126" text-anchor="middle" font-size="9.5" fill="#86868b">value × hit-rate</text>
      <text x="360" y="126" text-anchor="middle" font-size="9.5" fill="#0058b0">= your eval score</text>
      <line x1="36" y1="150" x2="416" y2="150" stroke="#1d1d1f" stroke-width="1.6"/>
      <text x="452" y="156" text-anchor="middle" font-size="12" font-weight="700" fill="#1d1d1f">= rank</text>
      <rect x="150" y="170" width="152" height="42" rx="8" fill="#b25000" opacity="0.09" stroke="#b25000" stroke-width="1.3"/>
      <text x="226" y="196" text-anchor="middle" font-size="13" font-weight="700" fill="#b25000">Effort</text>
      <text x="226" y="232" text-anchor="middle" font-size="9.5" fill="#b25000">build + evals + data + re-tuning</text>
    </svg>
    <div class="fig-cap">Same formula, two big re-reads: Confidence becomes your measured eval score (not optimism), and Effort includes the evals, data, and re-tuning — usually more than the code. Reach narrows to the slice the model handles reliably.</div>
  </div>
  <p>Score every AI bet with the formula re-read like this:</p>
  <ol>
    <li><strong>Eligible reach, not total.</strong> Count only the users in cases the model is reliable enough to serve.</li>
    <li><strong>Impact = value × hit-rate.</strong> A huge payoff that only lands 40% of the time is 40% of the payoff.</li>
    <li><strong>Confidence = the eval score.</strong> Replace gut feel with a measured reliability number (Ch.5). No eval, no confidence.</li>
    <li><strong>Effort = build + evals + data + re-tuning.</strong> Price the trust, not just the code.</li>
    <li><strong>Use RICE to sequence, not to choose strategy.</strong> It ranks comparable bets well; for wildly different bets, make a portfolio call first.</li>
  </ol>
  <div class="callout accent">
    <div class="ch">Say this in the interview</div>
    <p>"I'd score it with RICE, but redefined: Confidence is the model's eval score on the task, Impact is discounted by how often it's actually right, and Effort includes the eval and data work — which is usually bigger than the build."</p>
  </div>

  <h2><span class="ix">5</span> Frameworks to Deploy</h2>
  <div class="sub">Three adjustments that keep prioritization honest.</div>
  <h3>① RICE, re-defined for AI</h3>
  <p>The four fixes above, applied as a habit: eligible reach, hit-rate-discounted impact, eval-score confidence, all-in effort. The framework name stays familiar to your team; the inputs become probabilistic. That familiarity is a feature — you're upgrading a tool they trust, not importing jargon.</p>
  <h3>② Confidence is a number, not a vibe</h3>
  <p>The single most important fix: <strong>"Confidence" must be the eval score</strong>, not how sure the room feels. This forces a discipline — you can't prioritize a bet you haven't measured the model's reliability on, which means a quick eval becomes the price of entry to the roadmap (ties to Ch.5 and Ch.7).</p>
  <h3>③ Sequence vs portfolio</h3>
  <p>RICE is good at "of these comparable bets, which goes first?" and bad at "of these very different bets, which deserves capacity at all?" For the second question use a portfolio lens (or an opportunity tree) to pick the arena, <em>then</em> RICE to order within it. Don't let a tidy RICE score make a strategy decision it isn't built for.</p>

  <h2><span class="ix">6</span> Worked Solution</h2>
  <div class="sub">Two bets, both "high impact" — score them honestly.</div>
  <div class="callout">
    <div class="ch">The prompt</div>
    <p style="font-family:var(--font-ui);font-weight:600;">"Two AI features compete for next quarter: (A) auto-categorize incoming support tickets, (B) auto-draft legal responses for customers. Both are pitched as 'high impact.' Which do you prioritize?"</p>
  </div>
  <p><strong>Step 1 — Score A with the AI re-read.</strong> Categorization is a task models do reliably — a quick eval likely shows a high hit-rate, so <em>Confidence is high</em>. Eligible reach is broad (most tickets). A wrong category is cheap to fix, so Impact holds and verification Effort is low. <strong>High RICE.</strong></p>
  <p><strong>Step 2 — Score B honestly.</strong> "Auto-draft legal responses" sounds high-impact, but model reliability on legal is lower and a wrong answer is high-consequence (Ch.4). So <em>Confidence (eval score) is low</em>, eligible reach shrinks to a few safe templates, and Effort is enormous — a serious eval set, legal review, and re-tuning. <strong>Lower RICE than it looked, despite the big "impact" claim.</strong></p>
  <div class="flow">
<span class="st">A · categorize tickets</span>   <span class="nt">high eval score · broad eligible reach · cheap to verify → ship now</span>
<span class="st">B · draft legal replies</span>   <span class="nt">low eval score · narrow safe slice · heavy eval+review → wait / human-in-loop</span>
  </div>
  <p><strong>Step 3 — Decide and sequence.</strong> Prioritize A now: high reliability, broad reach, low cost — it earns trust and ships fast. Defer B until the model is reliable enough, or scope it to a human-in-the-loop draft on a narrow slice (Ch.2). Its "high impact" is real only if it's reliable, and today it isn't.</p>
  <p><strong>Step 4 — Make the eval the entry ticket.</strong> Before B gets roadmap space, require an eval on the legal task. If the score is low, that's the answer — and it's a measured one, not an argument.</p>
  <div class="callout good">
    <div class="ch">Why this wins</div>
    <p>You didn't rank by the loudest "impact" claim. You discounted impact by reliability, priced the eval and review effort honestly, and used a measured eval score as Confidence. That's prioritization that survives contact with a probabilistic reality.</p>
  </div>

  <h2><span class="ix">7</span> Industry Case</h2>
  <div class="sub">Why the classic frameworks needed a 2026 patch.</div>
  <h3>RICE's "2026 fix" — and the bets that aged badly</h3>
  <p>By 2025–26, product-leadership writing converged on a clear point: the classic prioritization frameworks still help, but each needs an AI-era adjustment — for RICE specifically, an <strong>"eligible reach" fix</strong> (counting only the users a probabilistic feature can reliably serve) and a re-think of confidence around model reliability. The reason was practical: two assumptions broke. As one widely-shared framing put it, <em>vibe coding broke the engineering-as-bottleneck assumption</em> (so Effort-as-code under-counts the real cost) and agentic usage broke the human-click-as-value assumption (so Reach and Impact need re-reading).</p>
  <p>The cost of ignoring this showed up as a pattern, not a single company: teams that prioritized bets the model trajectory was about to commoditize — basic summarization, simple chat, single-step generation — burned capacity on features that became default model capabilities within a release or two (the Lesson 6.1 waterline, in prioritization form). The teams that scored honestly — discounting impact by reliability, pricing the eval and data work, and checking each bet against the model trajectory — funded the bets that compounded.</p>
  <ul>
    <li><strong>Eligible reach is the headline fix.</strong> A feature "for everyone" that's only reliable for a fraction has a fraction of its claimed reach — and the score must say so.</li>
    <li><strong>Effort moved from code to trust.</strong> When building is cheap, the eval set, the data, and the re-tuning become the real denominator.</li>
    <li><strong>Confidence got measurable.</strong> The shift from gut-feel confidence to an eval score is the same eval-driven discipline this course pushes everywhere (Ch.5, Ch.7).</li>
  </ul>
  <div class="callout accent">
    <div class="ch">The PM takeaway</div>
    <p>You're prioritizing on shifting ground (6.1), so prioritize honestly: impact you can't deliver reliably isn't impact, effort is the trust work and not just the code, and confidence is a number you measured. Re-defined RICE keeps your team's familiar tool while making it tell the truth about a probabilistic product.</p>
  </div>

  <h2><span class="ix">✓</span> Check Yourself</h2>
  <div class="quiz" data-correct="2">
    <div class="q">In RICE re-defined for AI, what should "Confidence" actually be?</div>
    <div class="opt" data-i="0"><span class="l">A</span><span>How sure the team feels about the idea.</span></div>
    <div class="opt" data-i="1"><span class="l">B</span><span>The CEO's enthusiasm.</span></div>
    <div class="opt" data-i="2"><span class="l">C</span><span>The model's measured reliability on this task — your eval score.</span></div>
    <div class="opt" data-i="3"><span class="l">D</span><span>The size of the addressable market.</span></div>
    <div class="qexp">For a probabilistic feature, "Confidence" should be the measured eval score — how reliably the model does this exact task — not optimism. This forces you to run an eval before a bet earns roadmap space, replacing gut feel with a number.</div>
  </div>
  <div class="quiz" data-correct="0">
    <div class="q">A feature takes 2 days to build with vibe-coding tools but needs a serious eval set and ongoing review. How should you score its Effort?</div>
    <div class="opt" data-i="0"><span class="l">A</span><span>High — Effort is build + evals + data + re-tuning, and the trust work dwarfs the 2-day build.</span></div>
    <div class="opt" data-i="1"><span class="l">B</span><span>Low — it only took 2 days to build.</span></div>
    <div class="opt" data-i="2"><span class="l">C</span><span>Zero — AI tools build it for free.</span></div>
    <div class="opt" data-i="3"><span class="l">D</span><span>Effort doesn't matter for AI features.</span></div>
    <div class="qexp">The build was never the expensive part. For AI bets, Effort is dominated by the eval set, labeled data, and re-tuning needed to make the output trustworthy. A cheap-to-build, expensive-to-trust feature is a high-effort bet — score it honestly.</div>
  </div>
  <h2><span class="ix">✎</span> Apply It Yourself</h2>
  <div class="sub">No worked answer this time — this one's your rep. Give it 10 minutes before you move on.</div>
  <div class="callout">
    <div class="ch">Your problem</div>
    <p style="font-family:var(--font-ui);font-weight:600;">"Two AI bets compete for next quarter: (A) auto-tag uploaded documents, (B) auto-generate legal disclaimers for those documents. Both are pitched 'high impact.' Score them with RICE re-defined for AI, and pick one."</p>
  </div>
  <p><strong>Hints</strong> (peek only if you're stuck):</p>
  <ul>
    <li>Confidence = the model's eval score on the task, not optimism.</li>
    <li>Effort = build + evals + data + re-tuning, not just code.</li>
    <li>The trap: ranking by the loudest 'impact' claim.</li>
  </ul>
  <table>
    <tr><th>A strong answer...</th><th>A weak answer...</th></tr>
    <tr><td>Scores tagging higher (reliable, broad, cheap to verify); defers the low-reliability, high-consequence bet.</td><td>Picks B because 'legal sounds high-impact.'</td></tr>
    <tr><td>Uses eligible reach (only where the model is reliable).</td><td>Counts total reach regardless of reliability.</td></tr>
    <tr><td>Prices the eval / review effort honestly.</td><td>Calls a 2-day build 'low effort.'</td></tr>
  </table>
  <div class="callout accent">
    <div class="ch">Make it live</div>
    <p>Take two features you'd prioritize and score them with adapted RICE. Did 'Confidence = eval score' change the ranking?</p>
  </div>
  __NAV__
</div>
`,

/* ---------------------------------------------------------------- 6.3 */
"6.3": `
<div class="wrap">
  <div class="les-kicker">Chapter 6 · Lesson 6.3</div>
  <h1 class="les-title">Managing Model-Dependency Risk</h1>
  <div class="les-meta">
    <span class="pill">Product planning</span><span class="pill">~24 min read</span>
    <span class="pill">Prereq: 6.1</span><span class="pill">Difficulty: core</span>
  </div>
  <p class="motto">You don't own your most important dependency. A vendor can deprecate your model, triple its price, or change its behavior overnight — and your roadmap finds out the same day your users do.</p>

  <p class="lead">Your AI product runs on a model you rent from a vendor who can change the terms without asking. That's not a reason to panic — it's a risk to manage, the way you'd manage any critical dependency. This lesson covers the four ways a model dependency bites — <em class="k">deprecation, price hikes, behavior changes, and outages</em> — and how to de-risk a roadmap so a vendor's decision can't take your product down with it.</p>

  <h2><span class="ix">1</span> Your Mandate</h2>
  <div class="sub">What you own when the engine is rented, not bought.</div>
  <p>Your mandate is to <strong>treat the model as a vendor dependency with real failure modes, and design the product to survive them</strong>. You don't control the vendor's pricing, deprecation schedule, or the next version's behavior. You control your <em class="k">exposure</em> — how hard it would be to switch, how fast you'd notice a regression, and how much of your value lives in something the vendor can't take away. Owning that is the difference between a vendor's roadmap being an inconvenience and being an existential event.</p>

  <h2><span class="ix">2</span> Your Responsibilities</h2>
  <div class="sub">The four ways a model dependency bites — and your mitigation for each.</div>
  <table>
    <tr><th>Risk</th><th>Looks like</th><th>Your mitigation</th></tr>
    <tr><td><strong>Deprecation</strong></td><td>Your model is retired on the vendor's timeline, not yours</td><td>Abstraction layer + a tested fallback provider</td></tr>
    <tr><td><strong>Price hike</strong></td><td>Cost-per-task jumps on a new version or plan</td><td>Cost monitoring, model routing, right-sizing (Ch.1)</td></tr>
    <tr><td><strong>Behavior change</strong></td><td>An "upgrade" silently regresses your use case</td><td>Eval gate on every model change; pin versions (Ch.5)</td></tr>
    <tr><td><strong>Outage / rate limits</strong></td><td>The provider is down or throttling at your peak</td><td>Multi-provider failover, graceful degraded mode</td></tr>
  </table>
  <p>And the meta-risk under all four: <strong>lock-in</strong>. The more tightly your product is wired to one model's exact quirks, the less these mitigations are even possible. Your standing job is to keep switching <em>cheap</em>.</p>

  <h2><span class="ix">3</span> Metrics That Matter Here</h2>
  <div class="sub">How you measure exposure before it becomes a fire.</div>
  <table>
    <tr><th>Metric</th><th>Reads as</th><th>Why a PM watches it</th></tr>
    <tr><td><strong>Provider concentration</strong></td><td>% of traffic on a single model/vendor</td><td>Your blast radius if that one vendor moves</td></tr>
    <tr><td><strong>Switching cost / time</strong></td><td>Effort to move to another model</td><td>How fast you can respond to a deprecation or price hike</td></tr>
    <tr><td><strong>Eval-gate coverage</strong></td><td>% of model changes run through your eval set first</td><td>Whether a silent behavior regression can slip in</td></tr>
    <tr><td><strong>Cost exposure</strong></td><td>Bill impact if your model's price changed materially</td><td>How a vendor's pricing decision hits your margin</td></tr>
  </table>
  <div class="callout warn">
    <div class="ch">The trap — quirk lock-in</div>
    <p>The subtle killer isn't choosing one provider — it's building so tightly to <strong>one model's specific quirks</strong> (its exact prompt format, its idiosyncratic behavior, its undocumented strengths) that switching means a rewrite. You can depend on a model and still keep switching cheap — but only if you resist hard-coding to its personality. <strong>Treat the model as replaceable from day one, or you'll discover it isn't on the worst possible day.</strong></p>
  </div>

  <h2><span class="ix">4</span> How to Think Here</h2>
  <div class="sub">Put a layer between your product and the vendor — and keep a fallback warm.</div>
  <div class="fig">
    <div class="fig-title">The abstraction layer — swap or fail over without touching the product</div>
    <svg viewBox="0 0 520 290" xmlns="http://www.w3.org/2000/svg" font-family="Hanken Grotesk, sans-serif">
      <rect x="20" y="116" width="124" height="54" rx="9" fill="#ffffff" stroke="#1d1d1f" stroke-width="1.3"/>
      <text x="82" y="139" text-anchor="middle" font-size="12" font-weight="700" fill="#1d1d1f">Your product</text>
      <text x="82" y="156" text-anchor="middle" font-size="9" fill="#86868b">calls ONE interface</text>
      <rect x="198" y="110" width="140" height="66" rx="9" fill="#0071e3" opacity="0.10" stroke="#0071e3" stroke-width="1.4"/>
      <text x="268" y="138" text-anchor="middle" font-size="12" font-weight="700" fill="#0058b0">Abstraction layer</text>
      <text x="268" y="155" text-anchor="middle" font-size="9" fill="#0058b0">gateway / router</text>
      <line x1="144" y1="143" x2="194" y2="143" stroke="#86868b" stroke-width="1.4" marker-end="url(#a63)"/>
      <rect x="398" y="34" width="106" height="38" rx="8" fill="#ffffff" stroke="#0a7d3c" stroke-width="1.4"/>
      <text x="451" y="58" text-anchor="middle" font-size="10.5" font-weight="700" fill="#1d1d1f">OpenAI</text>
      <rect x="398" y="92" width="106" height="38" rx="8" fill="#ffffff" stroke="#1d1d1f" stroke-width="1"/>
      <text x="451" y="116" text-anchor="middle" font-size="10.5" fill="#1d1d1f">Anthropic</text>
      <rect x="398" y="150" width="106" height="38" rx="8" fill="#ffffff" stroke="#1d1d1f" stroke-width="1"/>
      <text x="451" y="174" text-anchor="middle" font-size="10.5" fill="#1d1d1f">Google</text>
      <rect x="398" y="208" width="106" height="38" rx="8" fill="#ffffff" stroke="#1d1d1f" stroke-width="1"/>
      <text x="451" y="232" text-anchor="middle" font-size="10.5" fill="#1d1d1f">open / self-host</text>
      <line x1="338" y1="140" x2="398" y2="53" stroke="#0a7d3c" stroke-width="1.9"/>
      <line x1="338" y1="143" x2="398" y2="111" stroke="#86868b" stroke-width="1.2" stroke-dasharray="4 3"/>
      <line x1="338" y1="146" x2="398" y2="169" stroke="#86868b" stroke-width="1.2" stroke-dasharray="4 3"/>
      <line x1="338" y1="150" x2="398" y2="227" stroke="#86868b" stroke-width="1.2" stroke-dasharray="4 3"/>
      <defs><marker id="a63" markerWidth="8" markerHeight="8" refX="6" refY="3" orient="auto"><path d="M0,0 L6,3 L0,6 Z" fill="#86868b"/></marker></defs>
    </svg>
    <div class="fig-cap">Don't call a vendor's SDK directly. Put an abstraction layer between your product and the models so you can swap providers — or survive a deprecation, price hike, or outage — without touching the product itself. Green is the model you're on; the dashed lines are fallbacks kept warm.</div>
  </div>
  <p>De-risk the dependency with this sequence:</p>
  <ol>
    <li><strong>Inventory the dependency.</strong> Know exactly which model each feature relies on and what breaks if it vanishes.</li>
    <li><strong>Insert an abstraction.</strong> Call your own interface (or a gateway), never the vendor SDK directly, so the model is swappable.</li>
    <li><strong>Keep a fallback warm.</strong> Have a second provider tested and ready, not theoretical.</li>
    <li><strong>Eval-gate every model change.</strong> A vendor "upgrade" is a release — re-run your eval set before trusting it (Ch.5).</li>
    <li><strong>Own what the vendor can't.</strong> Your data, distribution, and workflow are the part no deprecation can take (Ch.4, Ch.6.1).</li>
  </ol>
  <div class="callout accent">
    <div class="ch">Say this in the interview</div>
    <p>"I treat the model as a vendor dependency. We call an abstraction layer, not the vendor SDK; we keep a fallback provider tested; and we eval-gate every model change — so a deprecation or price hike is a migration, not a crisis."</p>
  </div>

  <h2><span class="ix">5</span> Frameworks to Deploy</h2>
  <div class="sub">Three practices that keep a rented engine from owning you.</div>
  <h3>① The abstraction layer</h3>
  <p>Route model calls through a gateway or your own interface (the LiteLLM / OpenRouter / Portkey pattern) instead of hard-wiring a vendor SDK. This is what makes every other mitigation — fallback, routing, swapping — possible. Without it, "switch providers" is a rewrite; with it, it's a config change.</p>
  <h3>② Eval-gate every model change</h3>
  <p>Never let a model version change reach users untested — including the vendor's own "upgrades," which can silently regress your use case. Re-run your eval set (Ch.5) on any new version and pin the version you've validated. A behavior change you didn't test for is a regression you shipped.</p>
  <h3>③ Own what the vendor can't take</h3>
  <p>The ultimate de-risk is strategic, not technical: the more of your value lives in <em class="k">proprietary data, distribution, and workflow</em>, the less any single model decision can hurt you. The model becomes a swappable component; your moat stays yours (the through-line of this whole chapter).</p>

  <h2><span class="ix">6</span> Worked Solution</h2>
  <div class="sub">The deprecation panic — handled like an engineer, not a victim.</div>
  <div class="callout">
    <div class="ch">The prompt</div>
    <p style="font-family:var(--font-ui);font-weight:600;">"Our product calls one model's API directly. Your CEO just read it's being deprecated in three months and is panicking. What's your plan?"</p>
  </div>
  <p><strong>Step 1 — Calm it with a plan, not a promise.</strong> A three-month deprecation is a migration, not a death sentence — if we move now. The real problem isn't this deprecation; it's that we call the vendor directly, so we're exposed to every future one too.</p>
  <p><strong>Step 2 — Short term: migrate safely.</strong> Insert an abstraction layer, pick a replacement model, and — critically — <em>re-run our eval set on the replacement</em> before switching (Ch.5). Migrate behind the abstraction so the product code barely changes. The eval tells us if the new model regresses our use case before users feel it.</p>
  <div class="flow">
<span class="st">now</span>        <span class="nt">add abstraction layer · pick + eval a replacement · migrate behind it</span>
   <span class="ar">↓</span>
<span class="st">next</span>       <span class="nt">warm fallback provider · cost + quality monitoring · pin versions</span>
   <span class="ar">↓</span>
<span class="st">ongoing</span>    <span class="nt">invest in data + distribution so the model is swappable</span>
  </div>
  <p><strong>Step 3 — Medium term: never be here again.</strong> Stand up multi-provider routing with a tested fallback, monitor cost and quality, and eval-gate every future model change. Now a deprecation or a price hike is a routing decision, not a fire drill.</p>
  <p><strong>Step 4 — Long term: reduce the dependency's leverage.</strong> Pour roadmap into the durable layer (6.1) — our data and workflow — so that whichever model we run on, the reason customers stay is something no vendor can deprecate.</p>
  <div class="callout good">
    <div class="ch">Why this wins</div>
    <p>You turned a panic into a migration, fixed the root cause (direct vendor coupling) not just the symptom, protected quality with an eval gate, and reduced the dependency's long-term leverage. That's managing a critical dependency like a professional instead of being managed by it.</p>
  </div>

  <h2><span class="ix">7</span> Industry Case</h2>
  <div class="sub">Real deprecations, real price jumps — and the layer that absorbs them.</div>
  <h3>OpenAI's 2026 retirements — and why teams build a gateway</h3>
  <p>Model dependency stopped being theoretical in early 2026. OpenAI announced the retirement of a batch of models — including GPT-4o, GPT-4.1, and others — from ChatGPT, with a cutoff around <strong>mid-February 2026</strong> and only about a <strong>three-month notice</strong>; enterprises, who typically want 6–12 month horizons, felt the squeeze. The recommended API migration path (toward GPT-5.1-class models) also came with a <strong>materially higher input price</strong> (reported on the order of $5 to $15 per million input tokens for the relevant tiers) and more verbose outputs — i.e., a deprecation, a price change, and a behavior change arriving together. Every risk in this lesson's table, in one announcement.</p>
  <p>This is exactly why an entire layer of tooling exists. <strong>Gateways and routers like LiteLLM, OpenRouter, and Portkey</strong> sit between a product and the models, offering one interface to 100+ providers with built-in failover, routing, and cost tracking — explicitly to avoid vendor lock-in. The pattern is industry-standard practice now: call the gateway, keep providers swappable, fail over automatically. Two products you already know prove the point — <strong>Perplexity</strong> routes across multiple frontier models by task (resilience and cost, not loyalty, Ch.1), and <strong>Cursor</strong>'s 2025 pricing crunch (Ch.1) showed how directly a model's economics flow through to a product's survival.</p>
  <ul>
    <li><strong>Deprecation is real and fast.</strong> A ~3-month notice on a model you built on is a roadmap event; if you call the vendor directly, it's a scramble.</li>
    <li><strong>Price and behavior change together.</strong> The "upgrade" path cost more and behaved differently — exactly why you eval-gate and monitor cost, not just swap blindly.</li>
    <li><strong>The market's answer is abstraction.</strong> A whole category (gateways/routers) exists so a vendor's decision is a config change, not a crisis.</li>
  </ul>
  <div class="callout accent">
    <div class="ch">The PM takeaway</div>
    <p>The model is a vendor, and vendors change terms. Manage it like any critical dependency: abstract it, keep a fallback warm, eval-gate every change, and own the data and distribution no deprecation can touch. Do that and the next retirement notice is a Tuesday, not a five-alarm fire.</p>
  </div>

  <h2><span class="ix">✓</span> Check Yourself</h2>
  <div class="quiz" data-correct="3">
    <div class="q">Your product calls a single vendor's model SDK directly throughout the codebase. What's the core risk?</div>
    <div class="opt" data-i="0"><span class="l">A</span><span>None — fewer dependencies is simpler.</span></div>
    <div class="opt" data-i="1"><span class="l">B</span><span>The model might get too good.</span></div>
    <div class="opt" data-i="2"><span class="l">C</span><span>Your code will be too readable.</span></div>
    <div class="opt" data-i="3"><span class="l">D</span><span>Quirk lock-in — a deprecation, price hike, or behavior change forces a costly rewrite because switching providers means touching the whole product.</span></div>
    <div class="qexp">Calling a vendor SDK directly couples your product to one model's quirks, so any vendor decision (deprecation, price, behavior, outage) becomes a rewrite. An abstraction layer makes switching a config change — the foundation for every other mitigation.</div>
  </div>
  <div class="quiz" data-correct="1">
    <div class="q">A vendor pushes a new version of your model and calls it an "upgrade." Before routing users to it, what should you do?</div>
    <div class="opt" data-i="0"><span class="l">A</span><span>Switch immediately — newer is always better.</span></div>
    <div class="opt" data-i="1"><span class="l">B</span><span>Re-run your eval set on the new version first — an "upgrade" can silently regress your specific use case.</span></div>
    <div class="opt" data-i="2"><span class="l">C</span><span>Ignore it and stay on the old version forever.</span></div>
    <div class="opt" data-i="3"><span class="l">D</span><span>Ask users to test it in production.</span></div>
    <div class="qexp">A vendor upgrade is a model change, and model changes can regress your use case even while improving on average. Eval-gate it (Ch.5) before trusting it, and pin the version you validated. A behavior change you didn't test for is a regression you shipped.</div>
  </div>

  <h2><span class="ix">✎</span> Apply It Yourself</h2>
  <div class="sub">No worked answer this time — this one's your rep. Give it 10 minutes before you move on.</div>
  <div class="callout">
    <div class="ch">Your problem</div>
    <p style="font-family:var(--font-ui);font-weight:600;">"Your product calls one vendor's model API directly throughout the code. The CEO read that the model is being deprecated in three months and is panicking. Give the plan."</p>
  </div>
  <p><strong>Hints</strong> (peek only if you're stuck):</p>
  <ul>
    <li>The real problem isn't this deprecation — it's the direct coupling.</li>
    <li>Abstraction layer + a tested fallback + eval-gate the replacement.</li>
    <li>The trap: just swapping models without re-running evals.</li>
  </ul>
  <table>
    <tr><th>A strong answer...</th><th>A weak answer...</th></tr>
    <tr><td>Inserts an abstraction layer, picks + eval-tests a replacement, migrates behind it.</td><td>Hard-swaps the model and hopes.</td></tr>
    <tr><td>Adds multi-provider routing + cost/quality monitoring for next time.</td><td>Stays exposed to the next deprecation.</td></tr>
    <tr><td>Invests in the data / distribution moat the vendor can't take.</td><td>Treats the model as the moat.</td></tr>
  </table>
  <div class="callout accent">
    <div class="ch">Make it live</div>
    <p>Check a tool you depend on: if its underlying model vanished tomorrow, how fast could it switch — and how would you know quality held?</p>
  </div>

  <div class="callout good" style="margin-top:40px;">
    <div class="ch">Chapter 6 complete</div>
    <p>You can now plan on shifting ground: roadmap around the model improving under you (6.1), prioritize bets honestly by reliability and true cost (6.2), and manage the model as a vendor dependency you've de-risked (6.3). The through-line: don't fight the moving foundation — build above it and own what it can't take. Next, <strong>Chapter 7 — AI PRDs &amp; Documentation</strong>: writing the spec for a feature that's never 100%.</p>
  </div>
  __NAV__
</div>
`