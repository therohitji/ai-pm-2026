/* ===== Chapter 12 lessons — AI PM by Rohit Swerashi =====
   One JS object entry per lesson: "N.Y": `<full lesson html>`
   Keep the 7-block structure. End each entry's content with __NAV__ (build injects nav). */

/* ---------------------------------------------------------------- 12.1 */
"12.1": `
<div class="wrap">
  <div class="les-kicker">Chapter 12 · Lesson 12.1</div>
  <h1 class="les-title">Selling Probabilistic Outcomes Honestly</h1>
  <div class="les-meta">
    <span class="pill">Go-to-market</span><span class="pill">~22 min read</span>
    <span class="pill">Prereq: Ch.4.2</span><span class="pill">Difficulty: core</span>
  </div>
  <p class="motto">Every AI landing page says "it just works." The first time it doesn't — and there is always a first time — that sentence becomes the reason they churn. Sell the probability, not the magic.</p>

  <p class="lead">Marketing an AI product pulls hard toward the words "automatic," "effortless," "it just works." Those words convert — and then they betray you, because the product is probabilistic and will be visibly wrong at some point. This lesson is about closing the gap between the promise and the product: how to message accuracy and limits so that <em class="k">trust survives the first mistake</em> instead of dying with it. Honest expectation-setting isn't timidity; it's the highest-leverage retention work you'll do.</p>

  <h2><span class="ix">1</span> Your Mandate</h2>
  <div class="sub">What you own when sales and marketing want to promise magic.</div>
  <p>Your mandate is to <strong>make the promise match the probability</strong>. Go-to-market will reach for "fully automated" and "always accurate" because that language wins demos and signups. Your job is to ensure the claim is one the product can actually keep — because the gap between what you promised and what the model delivers is exactly where trust, retention, and (increasingly) regulators come for you. You own the honesty of the claim, and honesty here is a growth strategy, not a brake on one.</p>

  <h2><span class="ix">2</span> Your Responsibilities</h2>
  <div class="sub">Honest framing vs the over-promise that feels good and ends badly.</div>
  <table>
    <tr><th>Honest framing</th><th>The over-promise (the trap)</th></tr>
    <tr><td><strong>"Drafts a reply you approve and send"</strong></td><td>"Fully automated support"</td></tr>
    <tr><td><strong>"Right about 90% of the time — with sources so you can verify"</strong></td><td>"Always accurate"</td></tr>
    <tr><td><strong>"Handles routine questions; escalates the rest to your team"</strong></td><td>"Replaces your support team"</td></tr>
    <tr><td><strong>Shows the limits up front</strong></td><td>Hides them until the user finds them</td></tr>
    <tr><td><strong>Clear, predictable pricing</strong></td><td>Surprise costs revealed on the bill</td></tr>
  </table>
  <p>The left column converts a little worse on day one and dramatically better over a year, because every claim is one the product keeps. The right column is a loan against future trust — and the interest is churn.</p>

  <h2><span class="ix">3</span> Metrics That Matter Here</h2>
  <div class="sub">The numbers that reveal an expectation gap before it becomes a churn spike.</div>
  <table>
    <tr><th>Metric</th><th>Reads as</th><th>Why a PM watches it</th></tr>
    <tr><td><strong>Expectation gap</strong></td><td>What you promised minus what the product delivers</td><td>The size of the gap is the size of the future disappointment</td></tr>
    <tr><td><strong>Trust-after-first-error retention</strong></td><td>Do users stay after the first visible mistake?</td><td>The truest test of whether your messaging was honest</td></tr>
    <tr><td><strong>Disappointment churn</strong></td><td>Cancellations citing "not what I expected"</td><td>The bill for over-promising, paid monthly</td></tr>
    <tr><td><strong>"It didn't work like you said" tickets</strong></td><td>Support volume blaming the marketing claim</td><td>A direct readout of the promise–product gap</td></tr>
  </table>
  <div class="callout warn">
    <div class="ch">The trap — the claim that converts then betrays</div>
    <p>"It just works" is the highest-converting and most destructive line in AI marketing. It maximizes signups and sets a 100% expectation no probabilistic product can keep, so the first visible error reads as a broken promise, not a normal limitation. You bought signups with future churn — and in 2024–25 regulators began treating exaggerated AI claims as deceptive practice. <strong>An overclaim is a debt; the first mistake is when it comes due.</strong></p>
  </div>

  <h2><span class="ix">4</span> How to Think Here</h2>
  <div class="sub">Two ways to set expectations — and what each does to trust at the first mistake.</div>
  <div class="fig">
    <div class="fig-title">The trust curve — over-promise vs honest</div>
    <svg viewBox="0 0 520 290" xmlns="http://www.w3.org/2000/svg" font-family="Hanken Grotesk, sans-serif">
      <line x1="60" y1="244" x2="492" y2="244" stroke="#1d1d1f" stroke-width="1.2"/>
      <line x1="60" y1="244" x2="60" y2="46" stroke="#1d1d1f" stroke-width="1.2"/>
      <text x="276" y="272" text-anchor="middle" font-size="11" fill="#86868b">time →</text>
      <text x="38" y="146" text-anchor="middle" font-size="11" fill="#86868b" transform="rotate(-90 38 146)">customer trust</text>
      <line x1="300" y1="58" x2="300" y2="244" stroke="#b25000" stroke-width="1.3" stroke-dasharray="4 3"/>
      <text x="300" y="50" text-anchor="middle" font-size="9" font-weight="700" fill="#b25000">first visible mistake</text>
      <polyline points="70,78 300,92 332,196 490,206" fill="none" stroke="#b25000" stroke-width="2.4"/>
      <polyline points="70,162 300,138 326,152 490,108" fill="none" stroke="#0a7d3c" stroke-width="2.4"/>
      <circle cx="490" cy="206" r="3.5" fill="#b25000"/><circle cx="490" cy="108" r="3.5" fill="#0a7d3c"/>
      <text x="486" y="224" text-anchor="end" font-size="9.5" font-weight="700" fill="#b25000">over-promise: "it just works"</text>
      <text x="486" y="98" text-anchor="end" font-size="9.5" font-weight="700" fill="#0a7d3c">honest: "~90%, you verify"</text>
    </svg>
    <div class="fig-cap">Over-promising buys a high start — until the first mistake (and there is always one), when trust collapses below where honesty even began. An honest promise survives the miss and compounds past it.</div>
  </div>
  <p>To set an expectation that survives contact with reality:</p>
  <ol>
    <li><strong>State the probability, not a guarantee.</strong> "Usually," "most of the time," "drafts for your review" — never "always."</li>
    <li><strong>Name the limits up front.</strong> Telling users what it can't do builds more trust than pretending it can do everything.</li>
    <li><strong>Make verification easy.</strong> Citations and sources (Ch.1) turn "trust me" into "check for yourself."</li>
    <li><strong>Promise the floor, deliver above it.</strong> Under-promise on purpose; let the product pleasantly exceed the claim.</li>
    <li><strong>Communicate changes early and clearly</strong> — especially pricing. How you say it is part of the product.</li>
  </ol>
  <div class="callout accent">
    <div class="ch">Say this in the interview</div>
    <p>"I sell a probability, not a guarantee. I'd message it as 'handles the routine cases and escalates the rest, with sources to verify' rather than 'fully automated' — because the first visible mistake is inevitable, and honest framing is what lets trust survive it instead of collapse."</p>
  </div>

  <h2><span class="ix">5</span> Frameworks to Deploy</h2>
  <div class="sub">Three rules for selling a probabilistic product without lying about it.</div>
  <h3>① Under-promise, over-deliver</h3>
  <p>Set the public bar where the product reliably clears it, then let it beat the claim. A user who expected "handles routine questions" and gets 90% coverage is delighted; a user who expected "fully automated" and gets 90% feels cheated by the same product. Same reality, opposite trust — the only difference is the promise.</p>
  <h3>② Sell the workflow, not the magic</h3>
  <p>Describe what the product actually does in the user's workflow — "drafts replies for your approval," "flags risky contracts for review" — instead of an outcome it can't guarantee. Workflow language is honest, concrete, and conveniently bakes the human-in-the-loop (Ch.2) right into the pitch, so the limit is a feature, not a surprise.</p>
  <h3>③ How you communicate change is part of the product</h3>
  <p>A pricing change, a capability cut, a model swap — the <em>communication</em> of it can do more damage than the change itself. Tell users early, plainly, and before the bill or the bug does. Surprise is the trust-killer; a change announced well is absorbed, a change discovered is resented.</p>

  <h2><span class="ix">6</span> Worked Solution</h2>
  <div class="sub">The landing-page line that would convert — and cost you.</div>
  <div class="callout">
    <div class="ch">The prompt</div>
    <p style="font-family:var(--font-ui);font-weight:600;">"Marketing wants the homepage to say 'AI that handles all your customer support, fully automated.' You know it resolves about 50% and escalates the rest. What do you do?"</p>
  </div>
  <p><strong>Step 1 — Refuse the overclaim, with the reason.</strong> "Fully automated" sets a 100% expectation against a 50% reality. It will convert well and then betray every customer at their first escalation, generating churn, bad reviews, and — given the FTC's stance on exaggerated AI claims — real legal exposure.</p>
  <div class="flow">
<span class="st">OVER-PROMISE</span>  <span class="nt">"fully automated support" → signups soar</span>
   <span class="ar">↓ first escalation (inevitable)</span>
<span class="st">BETRAYAL</span>      <span class="nt">"you said it just works" → churn · bad reviews · regulatory risk</span>

<span class="st">HONEST</span>        <span class="nt">"resolves routine questions instantly, escalates the rest to your team"</span>
   <span class="ar">↓ first escalation (expected)</span>
<span class="st">TRUST HOLDS</span>   <span class="nt">"it did exactly what it promised" → retention</span>
  </div>
  <p><strong>Step 2 — Reframe to the honest, still-compelling claim.</strong> "Resolves your routine support questions instantly and routes the rest to your team — so customers always reach a human when they need one." That's accurate, it's a genuinely strong pitch (instant + safe), and it pre-sells the escalation as a feature rather than a failure.</p>
  <p><strong>Step 3 — Make the limit a selling point.</strong> "Always escalates to a human when unsure" is reassuring, not weak. Pairing the AI's speed with a visible human safety net is more attractive to a buyer than an unbelievable "fully automated."</p>
  <p><strong>Step 4 — Set the internal metric.</strong> Track trust-after-first-escalation retention, not just signup conversion. If the honest page converts slightly lower but retains far better, it wins on the only number that compounds.</p>
  <div class="callout good">
    <div class="ch">Why this wins</div>
    <p>You traded a fragile conversion spike for durable trust. The honest claim still sells (instant answers, human safety net), survives the inevitable escalation, and keeps you clear of deceptive-marketing risk. You optimized for the customer who's still here in a year, not just the one who clicked today.</p>
  </div>

  <h2><span class="ix">7</span> Industry Case</h2>
  <div class="sub">Three flavors of the same lesson: the legal, reputational, and communication costs of overclaiming.</div>
  <h3>DoNotPay, Klarna, and Cursor — when the promise outran the product</h3>
  <p><strong>The legal cost — DoNotPay.</strong> In September 2024 the FTC launched <em>Operation AI Comply</em>, a crackdown on deceptive AI claims it calls "AI washing." A headline case: DoNotPay marketed the "world's first robot lawyer," but the FTC found the service couldn't live up to claims that it could substitute for a human lawyer — and DoNotPay settled. The lesson is stark: selling a probabilistic AI as a guaranteed outcome is now not just risky for trust, it's an enforcement target with real penalties.</p>
  <p><strong>The reputational cost — Klarna.</strong> Klarna's 2024 messaging that its AI did the work of <strong>~700 agents</strong> and handled two-thirds of support was a marketing triumph — until 2025, when it publicly walked back the most aggressive automation and reintroduced human agents after quality slipped on harder cases (Ch.2, Ch.5). The overclaim outran the product, and the correction became its own news story.</p>
  <p><strong>The communication cost — Cursor.</strong> Cursor's flat "$20/month" plan implied effectively unlimited use; in 2025 it moved to usage-based pricing, and users discovered "unlimited" had meant only an auto-selected model and hit surprise overage bills. The CEO publicly apologized and refunded charges around July 2025. Crucially, the damage came less from the pricing change than from how it was <em>communicated</em> — a surprise on the bill instead of a clear heads-up (Ch.1.4).</p>
  <ul>
    <li><strong>Overclaiming now has a regulator.</strong> "It just works" can be a deceptive-practices problem, not just a churn problem.</li>
    <li><strong>The correction is louder than the claim.</strong> Walking back an overclaim (Klarna) makes news the original hype primed.</li>
    <li><strong>How you communicate is the product.</strong> Cursor's substance was defensible; the surprise was not.</li>
  </ul>
  <div class="callout accent">
    <div class="ch">The PM takeaway</div>
    <p>You sell a probability, not a guarantee. Promise what the product reliably keeps, name the limits, make verification easy, and communicate every change before the user discovers it. Honest expectation-setting costs you a little conversion today and saves you churn, reputation, and legal exposure tomorrow — set it honestly, or the first mistake collects the debt.</p>
  </div>

  <h2><span class="ix">✓</span> Check Yourself</h2>
  <div class="quiz" data-correct="1">
    <div class="q">Why is "fully automated, it just works" a dangerous tagline for a probabilistic AI product?</div>
    <div class="opt" data-i="0"><span class="l">A</span><span>It's too short.</span></div>
    <div class="opt" data-i="1"><span class="l">B</span><span>It sets a 100% expectation the product can't keep, so the inevitable first mistake reads as a broken promise — driving churn and even deceptive-claims risk.</span></div>
    <div class="opt" data-i="2"><span class="l">C</span><span>Customers prefer long taglines.</span></div>
    <div class="opt" data-i="3"><span class="l">D</span><span>It mentions automation.</span></div>
    <div class="qexp">A probabilistic product will be visibly wrong sometimes. A 100% promise turns that normal limitation into a betrayal, spiking disappointment-churn — and regulators (FTC's Operation AI Comply) now treat exaggerated AI claims as deceptive. Promise what the product reliably keeps.</div>
  </div>
  <div class="quiz" data-correct="2">
    <div class="q">Cursor's 2025 pricing change caused an uproar. What's the core GTM lesson?</div>
    <div class="opt" data-i="0"><span class="l">A</span><span>Never change pricing.</span></div>
    <div class="opt" data-i="1"><span class="l">B</span><span>Usage-based pricing is always wrong.</span></div>
    <div class="opt" data-i="2"><span class="l">C</span><span>How you communicate a change can do more damage than the change itself — surprise on the bill breaks trust; an early, clear heads-up preserves it.</span></div>
    <div class="opt" data-i="3"><span class="l">D</span><span>Pricing doesn't affect trust.</span></div>
    <div class="qexp">The pricing shift was defensible; discovering it as a surprise overage (after "unlimited" implied otherwise) was not. Communicating change early and plainly — before the bill or the bug reveals it — is part of the product. Surprise is the trust-killer.</div>
  </div>

  <h2><span class="ix">✎</span> Apply It Yourself</h2>
  <div class="sub">No worked answer this time — this one's your rep. Give it 10 minutes before you move on.</div>
  <div class="callout">
    <div class="ch">Your problem</div>
    <p style="font-family:var(--font-ui);font-weight:600;">"Marketing wants your homepage to say 'AI that handles all your customer support, fully automated.' You know it resolves about 50% and escalates the rest. Decide what you do — and write the honest line that still sells."</p>
  </div>
  <p><strong>Hints</strong> (peek only if you're stuck):</p>
  <ul>
    <li>A 100% promise on a probabilistic product betrays at the first miss.</li>
    <li>Sell the workflow ('resolves routine, escalates the rest'), not magic.</li>
    <li>The trap: optimizing signup conversion with an overclaim.</li>
  </ul>
  <table>
    <tr><th>A strong answer...</th><th>A weak answer...</th></tr>
    <tr><td>Rejects the overclaim; writes an honest, still-compelling line; makes the limit a feature.</td><td>Ships 'fully automated.'</td></tr>
    <tr><td>Optimizes trust-after-first-error retention, not just conversion.</td><td>Maximizes signups, ignores churn.</td></tr>
    <tr><td>Notes the regulatory / trust risk of deceptive AI claims.</td><td>Treats overclaiming as harmless.</td></tr>
  </table>
  <div class="callout accent">
    <div class="ch">Make it live</div>
    <p>Find a real AI landing page that says 'it just works.' Rewrite its headline honestly — and decide which version you'd actually trust.</p>
  </div>

  <div class="callout good" style="margin-top:40px;">
    <div class="ch">Chapter 12 complete</div>
    <p>You can now take a probabilistic product to market without lying about it: promise what it reliably keeps, name the limits, make verification easy, and communicate change before users discover it. Honesty isn't the cautious choice — it's the one that survives the first mistake and compounds into trust. Next, <strong>Chapter 13 — AI PM Case Interviews</strong>: turning everything in this course into a repeatable way to crack the interview.</p>
  </div>
  __NAV__
</div>
`