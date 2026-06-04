/* ===== Chapter 10 lessons — AI PM by Rohit Swerashi =====
   One JS object entry per lesson: "N.Y": `<full lesson html>`
   Keep the 7-block structure. End each entry's content with __NAV__ (build injects nav). */

/* ---------------------------------------------------------------- 10.1 */
"10.1": `
<div class="wrap">
  <div class="les-kicker">Chapter 10 · Lesson 10.1</div>
  <h1 class="les-title">The Prompt Is the Spec</h1>
  <div class="les-meta">
    <span class="pill">Prompting</span><span class="pill">~23 min read</span>
    <span class="pill">Prereq: Ch.7</span><span class="pill">Difficulty: core</span>
  </div>
  <p class="motto">A vague prompt is a vague product. The words you write aren't "instructions for the AI" — they are the spec, and the model builds exactly, ruthlessly, what you actually said.</p>

  <p class="lead">PMs treat prompting as a clever trick — something you tweak until the demo looks good. That framing is why so many AI features feel inconsistent and off-brand. The reframe that makes you dangerous: for an AI feature, <em class="k">the prompt is the product spec</em>. It defines the behavior, the rules, the voice, and the output contract — in English. Writing one precisely isn't wordplay; it's the same product-definition work you did in Chapter 7, now expressed as the thing the model literally executes.</p>

  <h2><span class="ix">1</span> Your Mandate</h2>
  <div class="sub">What you own when the spec and the implementation are the same document.</div>
  <p>Your mandate is to <strong>own the prompt as a product spec</strong>, not delegate it as a technical detail. You don't tune temperature or sampling — but the words that define what the feature <em>is</em> (its role, its rules, its format, its failure behavior) are product decisions, and they're yours. The trap is treating the prompt as a magic incantation someone tweaks until it "feels right." It isn't magic — it's a specification, and <em class="k">a loose prompt produces a loose product</em>, every time.</p>

  <h2><span class="ix">2</span> Your Responsibilities</h2>
  <div class="sub">What a prompt-as-spec must pin down — and the PRD question each answers.</div>
  <table>
    <tr><th>The prompt must specify</th><th>The product question it answers</th></tr>
    <tr><td><strong>Role / persona</strong></td><td>Who is this product, and in what voice?</td></tr>
    <tr><td><strong>Task / objective</strong></td><td>What exactly is it doing?</td></tr>
    <tr><td><strong>Rules / constraints</strong></td><td>What must it never (or always) do? (Ch.7)</td></tr>
    <tr><td><strong>Output format</strong></td><td>The contract with the rest of the system</td></tr>
    <tr><td><strong>Examples</strong></td><td>The quality bar, shown not told</td></tr>
    <tr><td><strong>Failure behavior</strong></td><td>What to do when unsure or out of scope</td></tr>
  </table>
  <p>Compare that list to the AI PRD from Chapter 7 — it's nearly identical. That's the point: <strong>the prompt is where the PRD becomes executable.</strong> Every ambiguity you leave in the prompt is an ambiguity the model resolves for you, usually not the way you'd want.</p>

  <h2><span class="ix">3</span> Metrics That Matter Here</h2>
  <div class="sub">How you tell a real spec from a hopeful suggestion.</div>
  <table>
    <tr><th>Signal</th><th>Reads as</th><th>Why a PM watches it</th></tr>
    <tr><td><strong>Output consistency</strong></td><td>Same kind of input → same shape of output</td><td>Inconsistency means the spec left gaps</td></tr>
    <tr><td><strong>Format adherence</strong></td><td>Does it return the structure you specified?</td><td>Downstream systems depend on the contract</td></tr>
    <tr><td><strong>Rule compliance</strong></td><td>Does it respect the never/always rules?</td><td>The guardrails are only real if obeyed</td></tr>
    <tr><td><strong>Eval pass rate</strong></td><td>Score of this prompt on your eval set</td><td>The objective measure of the spec (Lesson 10.2)</td></tr>
  </table>
  <div class="callout warn">
    <div class="ch">The trap — the prompt nobody owns</div>
    <p>Because a prompt looks like "just text," it often has no owner, no version, and no review. Someone tweaks a line to fix one bug, the product's behavior shifts everywhere, and no one notices until users do. <strong>A prompt is a product spec — version it, review it, and own it like one.</strong> An unowned prompt is an unowned product definition drifting in production.</p>
  </div>

  <h2><span class="ix">4</span> How to Think Here</h2>
  <div class="sub">A fuzzy intent isn't a spec until you make it one.</div>
  <div class="fig">
    <div class="fig-title">A wish becomes the spec</div>
    <svg viewBox="0 0 520 280" xmlns="http://www.w3.org/2000/svg" font-family="Hanken Grotesk, sans-serif">
      <rect x="28" y="108" width="150" height="58" rx="10" fill="#b25000" opacity="0.10" stroke="#b25000" stroke-width="1.2"/>
      <text x="103" y="133" text-anchor="middle" font-size="11.5" font-weight="700" fill="#b25000">"make it helpful</text>
      <text x="103" y="149" text-anchor="middle" font-size="11.5" font-weight="700" fill="#b25000">and accurate"</text>
      <text x="103" y="186" text-anchor="middle" font-size="9" fill="#b25000">a wish, not a spec</text>
      <line x1="184" y1="137" x2="252" y2="137" stroke="#1d1d1f" stroke-width="1.6" marker-end="url(#p101)"/>
      <text x="218" y="128" text-anchor="middle" font-size="9" font-weight="700" fill="#1d1d1f">becomes</text>
      <text x="375" y="44" text-anchor="middle" font-size="11" font-weight="700" fill="#0058b0">THE PROMPT = THE SPEC</text>
      <rect x="260" y="54" width="232" height="26" rx="6" fill="#0071e3" opacity="0.08" stroke="#0071e3" stroke-width="1"/><text x="272" y="71" font-size="10.5" fill="#1d1d1f">Role · who it is, what voice</text>
      <rect x="260" y="84" width="232" height="26" rx="6" fill="#0071e3" opacity="0.08" stroke="#0071e3" stroke-width="1"/><text x="272" y="101" font-size="10.5" fill="#1d1d1f">Task · what it does</text>
      <rect x="260" y="114" width="232" height="26" rx="6" fill="#0071e3" opacity="0.08" stroke="#0071e3" stroke-width="1"/><text x="272" y="131" font-size="10.5" fill="#1d1d1f">Rules · never / always</text>
      <rect x="260" y="144" width="232" height="26" rx="6" fill="#0071e3" opacity="0.08" stroke="#0071e3" stroke-width="1"/><text x="272" y="161" font-size="10.5" fill="#1d1d1f">Format · the output contract</text>
      <rect x="260" y="174" width="232" height="26" rx="6" fill="#0071e3" opacity="0.08" stroke="#0071e3" stroke-width="1"/><text x="272" y="191" font-size="10.5" fill="#1d1d1f">Examples · the bar, shown</text>
      <rect x="260" y="204" width="232" height="26" rx="6" fill="#0071e3" opacity="0.08" stroke="#0071e3" stroke-width="1"/><text x="272" y="221" font-size="10.5" fill="#1d1d1f">Failure · what to do when unsure</text>
      <defs><marker id="p101" markerWidth="8" markerHeight="8" refX="6" refY="3" orient="auto"><path d="M0,0 L6,3 L0,6 Z" fill="#1d1d1f"/></marker></defs>
    </svg>
    <div class="fig-cap">"Helpful and accurate" is a wish. The spec is the prompt: role, task, rules, format, examples, failure behavior. Each line you pin down is one fewer ambiguity the model gets to decide on its own.</div>
  </div>
  <p>To turn intent into a prompt-spec, run this:</p>
  <ol>
    <li><strong>Treat the prompt as the spec</strong>, not as instructions to a helper. The model builds exactly what it says.</li>
    <li><strong>Specify the six</strong>: role, task, rules, format, examples, failure behavior.</li>
    <li><strong>Hunt the ambiguity.</strong> For each vague word ("helpful," "concise"), ask "how would the model interpret this?" and pin it down.</li>
    <li><strong>Version it.</strong> Give the prompt an owner and a change history — it's a product artifact.</li>
    <li><strong>Hand it to evals</strong> (10.2) to refine against real cases.</li>
  </ol>
  <div class="callout accent">
    <div class="ch">Say this in the interview</div>
    <p>"For an AI feature, the prompt is the spec — it defines the role, rules, output format, and failure behavior the model executes. So I write it like a PRD, version it, and own it as a product artifact, not as a one-off tweak."</p>
  </div>

  <h2><span class="ix">5</span> Frameworks to Deploy</h2>
  <div class="sub">Three ways to keep the prompt a spec, not a sticky note.</div>
  <h3>① The prompt-as-PRD mapping</h3>
  <p>Each prompt section maps to a PRD section: role and task = the behavior spec; rules = the hard constraints; format = the acceptance contract; examples = the quality bar; failure behavior = the fallback (Ch.7). Write the prompt by walking that list and you've written a real spec, not a hopeful paragraph.</p>
  <h3>② Specify, don't suggest</h3>
  <p>The model does exactly what you said, not what you meant. "Be concise" is a suggestion; "answer in 2–3 sentences" is a spec. Hunt every soft word and replace it with something the model can't misinterpret. Ambiguity isn't flexibility — it's you handing the product decision to the model.</p>
  <h3>③ Version the prompt</h3>
  <p>A prompt is a product artifact with outsized blast radius — one edited line changes behavior for every user. Treat it like code or a spec doc: an owner, version history, and review before changes ship. The fix for "the prompt nobody owns" is simply to own it.</p>

  <h2><span class="ix">6</span> Worked Solution</h2>
  <div class="sub">From a one-line wish to an actual spec.</div>
  <div class="callout">
    <div class="ch">The prompt</div>
    <p style="font-family:var(--font-ui);font-weight:600;">"A teammate says: 'the prompt should just make the support bot helpful and on-brand.' Turn that into a real spec."</p>
  </div>
  <p><strong>Step 1 — Name what's missing.</strong> "Helpful and on-brand" specifies nothing the model can act on consistently. It's a wish. I'll translate it into the six components, pinning down every soft word.</p>
  <div class="flow">
<span class="st">ROLE</span>      <span class="nt">you are Acme's support assistant — warm, concise, never pushy</span>
<span class="st">TASK</span>      <span class="nt">answer the user's question using ONLY the retrieved docs</span>
<span class="st">RULES</span>     <span class="nt">never promise refunds · never speculate on legal or pricing terms</span>
<span class="st">FORMAT</span>    <span class="nt">2-3 sentences, then a source link</span>
<span class="st">EXAMPLES</span>  <span class="nt">[two ideal on-brand answers, shown in full]</span>
<span class="st">ON FAIL</span>   <span class="nt">if the docs do not answer it: "let me connect you with a teammate"</span>
  </div>
  <p><strong>Step 2 — Pin the vague words.</strong> "On-brand" became a role plus two real examples. "Helpful" became a task scoped to the docs plus a length format. "Accurate" became a rule (answer only from docs) plus a failure behavior (escalate when unsure). Nothing is left to interpretation.</p>
  <p><strong>Step 3 — Make it ownable.</strong> This prompt now reads like the Chapter 7 PRD, because it is one. It gets an owner, a version, and review — and it's ready to iterate against an eval set (10.2).</p>
  <div class="callout good">
    <div class="ch">Why this wins</div>
    <p>You converted a feeling into a specification the model executes the same way every time. The bot is now consistent and on-brand by design, not by luck — because the prompt stopped being a wish and became the spec.</p>
  </div>

  <h2><span class="ix">7</span> Industry Case</h2>
  <div class="sub">The most valuable spec in many AI products is its system prompt.</div>
  <h3>The leaked system prompts — proof the prompt is the product</h3>
  <p>Through 2025 a striking thing happened: the <strong>system prompts of shipping AI products began leaking</strong> and were collected into public GitHub repositories — one cataloguing the prompts of <strong>28+ tools (Cursor, v0, Claude Code, Lovable, Devin, Windsurf, and more) reached on the order of 134,000 stars.</strong> Reading them is illuminating: these aren't one-liners. They're long, precise English documents specifying the product's role, its hard rules, its output format, its tools, and its behavior in edge cases. <strong>For these products, the system prompt</strong> is <strong>the spec</strong> — the single artifact that most defines what the product does.</p>
  <p>Two facts make the point unmissable. First, companies guard these prompts like intellectual property (the leaks were framed as exposing serious competitive value), because the prompt encodes the product. Second, Anthropic deliberately <em>publishes</em> Claude's system prompts for transparency — treating the prompt as a behavior specification worth documenting, exactly like the Model Spec in Chapter 7. Whether guarded or published, the industry agrees on the underlying truth: <strong>the prompt is not a trick layered on the product; it largely is the product.</strong></p>
  <ul>
    <li><strong>Real products are defined by long, precise prompts.</strong> Cursor's agent prompt, v0's prompt — these are specs in English, not clever one-liners.</li>
    <li><strong>The prompt is treated as IP.</strong> You guard a spec that valuable; you don't guard a party trick.</li>
    <li><strong>Transparency, too.</strong> Anthropic publishing Claude's system prompt is the Chapter 7 Model-Spec instinct applied to the live prompt: the behavior contract, written down.</li>
  </ul>
  <div class="callout accent">
    <div class="ch">The PM takeaway</div>
    <p>If the companies building the best AI products treat their system prompt as the product's defining spec — guarded or published, but always owned — so should you. Writing the prompt is product definition. Do it precisely, version it, own it. The next lesson makes it rigorous: how to iterate that spec against evals instead of vibes.</p>
  </div>

  <h2><span class="ix">✓</span> Check Yourself</h2>
  <div class="quiz" data-correct="2">
    <div class="q">Why is "be concise and helpful" a poor line in a prompt-spec?</div>
    <div class="opt" data-i="0"><span class="l">A</span><span>It's too long.</span></div>
    <div class="opt" data-i="1"><span class="l">B</span><span>The model can't read adjectives.</span></div>
    <div class="opt" data-i="2"><span class="l">C</span><span>It's a suggestion, not a specification — the model interprets "concise" and "helpful" however it likes; "answer in 2–3 sentences from the docs" is a spec.</span></div>
    <div class="opt" data-i="3"><span class="l">D</span><span>Prompts shouldn't mention tone at all.</span></div>
    <div class="qexp">The model does exactly what you said, not what you meant. Soft words like "concise" leave the product decision to the model. A prompt is a spec — replace every vague word with something unambiguous (a length, a rule, an example).</div>
  </div>
  <div class="quiz" data-correct="0">
    <div class="q">What does the leak (and publication) of major products' system prompts demonstrate for a PM?</div>
    <div class="opt" data-i="0"><span class="l">A</span><span>The system prompt is the product's defining spec — long, precise, and owned like IP, not a clever trick.</span></div>
    <div class="opt" data-i="1"><span class="l">B</span><span>That prompts don't matter once a product ships.</span></div>
    <div class="opt" data-i="2"><span class="l">C</span><span>That you should copy competitors' prompts.</span></div>
    <div class="opt" data-i="3"><span class="l">D</span><span>That prompts are short and unimportant.</span></div>
    <div class="qexp">Shipping products' system prompts are long, precise behavior specs — guarded as IP or published as transparency. Either way they prove the prompt largely is the product. Writing one is product definition, so own and version it like a spec.</div>
  </div>
  <h2><span class="ix">✎</span> Apply It Yourself</h2>
  <div class="sub">No worked answer this time — this one's your rep. Give it 10 minutes before you move on.</div>
  <div class="callout">
    <div class="ch">Your problem</div>
    <p style="font-family:var(--font-ui);font-weight:600;">"A teammate says 'just make the prompt return helpful, on-brand product answers.' Turn that one-line wish into an actual prompt-spec."</p>
  </div>
  <p><strong>Hints</strong> (peek only if you're stuck):</p>
  <ul>
    <li>Specify role, task, rules, format, examples, failure behavior.</li>
    <li>Replace every soft word ('helpful') with something unambiguous.</li>
    <li>The trap: treating the prompt as a magic phrase, not a versioned spec.</li>
  </ul>
  <table>
    <tr><th>A strong answer...</th><th>A weak answer...</th></tr>
    <tr><td>Writes the six components; pins 'on-brand' to a role + examples and 'helpful' to a scoped task + format.</td><td>Tweaks adjectives and hopes.</td></tr>
    <tr><td>Defines the failure behavior (say 'I don't know' when unsure).</td><td>Leaves ambiguity for the model to resolve.</td></tr>
    <tr><td>Treats the prompt as an owned, versioned artifact.</td><td>Edits it ad hoc with no owner.</td></tr>
  </table>
  <div class="callout accent">
    <div class="ch">Make it live</div>
    <p>Open Claude and write that prompt-spec as a real system prompt. Run 5 inputs — does it behave consistently, or did you leave a gap?</p>
  </div>
  __NAV__
</div>
`,

/* ---------------------------------------------------------------- 10.2 */
"10.2": `
<div class="wrap">
  <div class="les-kicker">Chapter 10 · Lesson 10.2</div>
  <h1 class="les-title">Prompt Patterns &amp; Iteration</h1>
  <div class="les-meta">
    <span class="pill">Prompting</span><span class="pill">~23 min read</span>
    <span class="pill">Prereq: 10.1, Ch.5</span><span class="pill">Difficulty: core</span>
  </div>
  <p class="motto">Stop wordsmithing prompts by vibes. The pros don't tweak until it "feels right" — they run the prompt against an eval set and let the numbers pick the winner.</p>

  <p class="lead">Lesson 10.1 made the prompt a spec; this lesson makes refining it a discipline. There are dozens of prompting techniques, but a PM needs only a handful that reliably move quality — and one habit that separates professionals from dabblers: <em class="k">iterating against evals, not opinions</em>. By the end you'll know the patterns to reach for and how to prove a prompt change actually improved things instead of just changing them.</p>

  <h2><span class="ix">1</span> Your Mandate</h2>
  <div class="sub">What you own once the prompt-spec exists.</div>
  <p>Your mandate is to <strong>know the few patterns that matter and to iterate the prompt against an eval set</strong>, not against gut feel. You don't need the 50-plus documented techniques; you need about five reliable patterns and the discipline to test changes the way engineers test code. The thing that makes you credible here isn't a clever phrasing — it's refusing to ship a prompt change you can't show is better.</p>

  <h2><span class="ix">2</span> Your Responsibilities</h2>
  <div class="sub">The pattern toolkit — the handful worth knowing by name.</div>
  <table>
    <tr><th>Pattern</th><th>What it does</th><th>Reach for it when</th></tr>
    <tr><td><strong>Few-shot examples</strong></td><td>Show 2–3 input→output examples</td><td>The behavior is easier to show than describe (big, reliable gains)</td></tr>
    <tr><td><strong>Output format / schema</strong></td><td>Constrain the shape (e.g., JSON)</td><td>The output feeds another system</td></tr>
    <tr><td><strong>Role / persona</strong></td><td>Set voice and stance</td><td>Tone and perspective matter</td></tr>
    <tr><td><strong>Constraints / rules</strong></td><td>Explicit never / always</td><td>You need hard guardrails (Ch.7)</td></tr>
    <tr><td><strong>Step-by-step (reasoning)</strong></td><td>Ask it to reason before answering</td><td>Multi-step or analytical tasks</td></tr>
    <tr><td><strong>Delimiters</strong></td><td>Separate instructions from user data</td><td>Always — it prevents confusion and injection</td></tr>
  </table>
  <p>That's the toolkit. <strong>Few-shot examples are the highest-leverage one</strong> — showing the model two or three ideal input/output pairs reliably moves accuracy more than any amount of describing. Most prompt problems a PM hits are solved by adding examples, fixing the format, or tightening a rule.</p>

  <h2><span class="ix">3</span> Metrics That Matter Here</h2>
  <div class="sub">How you prove a prompt change helped instead of just changed.</div>
  <table>
    <tr><th>Metric</th><th>Reads as</th><th>Why a PM watches it</th></tr>
    <tr><td><strong>Eval pass rate per version</strong></td><td>v1 vs v2 score on the same set</td><td>The only honest answer to "is v2 better?"</td></tr>
    <tr><td><strong>Format adherence</strong></td><td>% of outputs matching the spec'd shape</td><td>Often the whole point of the change</td></tr>
    <tr><td><strong>Regression on other cases</strong></td><td>Did fixing one case break others?</td><td>The hidden cost of vibe-tweaking</td></tr>
    <tr><td><strong>A/B win rate</strong></td><td>Which version wins across the set</td><td>Turns "I think" into "the data says"</td></tr>
  </table>
  <div class="callout warn">
    <div class="ch">The trap — iterating by vibes</div>
    <p>The default everywhere: tweak the prompt, re-run the one example you were staring at, decide it "feels better," ship. The problem is you fixed one case and may have silently broken five others — and you have no idea, because you only looked at one. <strong>A prompt change you didn't run against an eval set isn't an improvement; it's a guess wearing a confidence costume.</strong></p>
  </div>

  <h2><span class="ix">4</span> How to Think Here</h2>
  <div class="sub">Treat a prompt change like a code change: test it against the set.</div>
  <div class="fig">
    <div class="fig-title">The prompt experiment — let the eval set pick the winner</div>
    <svg viewBox="0 0 520 270" xmlns="http://www.w3.org/2000/svg" font-family="Hanken Grotesk, sans-serif">
      <rect x="24" y="58" width="130" height="50" rx="9" fill="#ffffff" stroke="#86868b" stroke-width="1.2"/>
      <text x="89" y="80" text-anchor="middle" font-size="11.5" font-weight="700" fill="#1d1d1f">Prompt v1</text>
      <text x="89" y="96" text-anchor="middle" font-size="9" fill="#86868b">baseline</text>
      <rect x="24" y="162" width="130" height="50" rx="9" fill="#0071e3" opacity="0.10" stroke="#0071e3" stroke-width="1.3"/>
      <text x="89" y="184" text-anchor="middle" font-size="11.5" font-weight="700" fill="#0058b0">Prompt v2</text>
      <text x="89" y="200" text-anchor="middle" font-size="9" fill="#0058b0">one change</text>
      <rect x="205" y="92" width="120" height="86" rx="10" fill="#1d1d1f"/>
      <text x="265" y="124" text-anchor="middle" font-size="11.5" font-weight="700" fill="#ffffff">EVAL SET</text>
      <text x="265" y="142" text-anchor="middle" font-size="9" fill="#cfe0ff">N real cases</text>
      <text x="265" y="158" text-anchor="middle" font-size="9" fill="#cfe0ff">(same for both)</text>
      <line x1="154" y1="83" x2="203" y2="118" stroke="#86868b" stroke-width="1.4" marker-end="url(#p102)"/>
      <line x1="154" y1="187" x2="203" y2="152" stroke="#86868b" stroke-width="1.4" marker-end="url(#p102)"/>
      <line x1="325" y1="135" x2="376" y2="135" stroke="#86868b" stroke-width="1.4" marker-end="url(#p102)"/>
      <rect x="380" y="92" width="116" height="86" rx="10" fill="#ffffff" stroke="#1d1d1f" stroke-width="1.2"/>
      <text x="438" y="118" text-anchor="middle" font-size="11" fill="#86868b">v1 — 82%</text>
      <text x="438" y="140" text-anchor="middle" font-size="12.5" font-weight="700" fill="#0a7d3c">v2 — 91%</text>
      <text x="438" y="162" text-anchor="middle" font-size="10" font-weight="700" fill="#0a7d3c">ship v2 ✓</text>
      <text x="260" y="248" text-anchor="middle" font-size="9.5" fill="#86868b">the eval picks the winner — not your gut</text>
      <defs><marker id="p102" markerWidth="8" markerHeight="8" refX="6" refY="3" orient="auto"><path d="M0,0 L6,3 L0,6 Z" fill="#86868b"/></marker></defs>
    </svg>
    <div class="fig-cap">Run both prompt versions against the same eval set, score them, and ship the winner. The numbers — not the way one output "feels" — decide whether a change is an improvement.</div>
  </div>
  <p>Iterate a prompt the way you'd iterate code:</p>
  <ol>
    <li><strong>Start from the spec</strong> (the 10.1 prompt) and a real eval set (Ch.5, Ch.7).</li>
    <li><strong>Pick the pattern</strong> most likely to fix the problem — few-shot for format/behavior, step-by-step for reasoning, a rule for a guardrail.</li>
    <li><strong>Make one change</strong> so the eval can attribute the difference.</li>
    <li><strong>Run v1 and v2 on the same set</strong> and compare scores — including whether you broke other cases.</li>
    <li><strong>Keep the winner; revert the loser.</strong> The set decides, not your gut.</li>
  </ol>
  <div class="callout accent">
    <div class="ch">Say this in the interview</div>
    <p>"I iterate prompts like code: one change at a time, run against an eval set, keep the version that scores higher. Few-shot examples are usually my first move, and I never ship a prompt change I can't show beats the baseline on real cases."</p>
  </div>

  <h2><span class="ix">5</span> Frameworks to Deploy</h2>
  <div class="sub">Three rules for iterating well.</div>
  <h3>① The pattern toolkit</h3>
  <p>Keep the five-or-six patterns ready and reach for the fitting one: <em class="k">few-shot</em> when behavior is easier shown than told, <em class="k">format/schema</em> when output feeds a system, <em class="k">role</em> for voice, <em class="k">rules</em> for guardrails, <em class="k">step-by-step</em> for reasoning, <em class="k">delimiters</em> always. You almost never need exotic techniques — these handle the vast majority of real problems.</p>
  <h3>② One change at a time</h3>
  <p>Change one thing per iteration so the eval can tell you what caused the delta. Bundle three changes and a score move tells you nothing about which helped or hurt. This is the same discipline as a clean commit — and it's why "I rewrote the whole prompt and it's better" is a non-answer.</p>
  <h3>③ The prompt experiment</h3>
  <p>Treat the prompt as code and test it like code: run versions against a dataset, score with checks or an LLM-judge, check for regressions, and gate the winner — exactly what tools like Promptfoo, Braintrust, and DeepEval exist to do. This is where prompting stops being art and becomes engineering you can trust (and it's the bridge to Chapter 11).</p>

  <h2><span class="ix">6</span> Worked Solution</h2>
  <div class="sub">Right answers, wrong shape — fixed and proven.</div>
  <div class="callout">
    <div class="ch">The prompt</div>
    <p style="font-family:var(--font-ui);font-weight:600;">"Our support bot's answers are usually correct but inconsistently formatted and often too long. How do you fix the prompt — and know you actually fixed it?"</p>
  </div>
  <p><strong>Step 1 — Diagnose the pattern, not the model.</strong> Correct-but-messy is a format problem, not an accuracy problem. The fixes are pattern fixes: an explicit output-format spec and a couple of few-shot examples of the ideal shape. No model change needed.</p>
  <p><strong>Step 2 — Make one change, then prove it.</strong></p>
  <div class="flow">
<span class="st">change</span>    <span class="nt">add format spec ("2-3 sentences + a source link") + 2 few-shot examples</span>
   <span class="ar">↓ one change only</span>
<span class="st">run</span>       <span class="nt">v1 (old) and v2 (new) on the SAME 50-case eval set</span>
   <span class="ar">↓</span>
<span class="st">measure</span>   <span class="nt">format-adherence and length — not "feels tighter"</span>
   <span class="ar">↓</span>
<span class="st">decide</span>    <span class="nt">v2 hits 91% format-adherence vs v1's 60% → ship · check accuracy didn't regress</span>
  </div>
  <p><strong>Step 3 — Guard against regression.</strong> I'd confirm the format fix didn't drop answer correctness on the same set (a tighter format can sometimes truncate a needed detail). The eval shows both numbers, so I'm not trading one problem for another blindly.</p>
  <p><strong>Step 4 — Lock it in.</strong> The winning prompt version becomes the new baseline and the eval becomes the gate (Ch.5), so the next change has to beat it too.</p>
  <div class="callout good">
    <div class="ch">Why this wins</div>
    <p>You picked the right patterns (format spec + few-shot), changed one thing, and proved the improvement on real cases instead of declaring victory off one nice-looking output. That's prompt iteration as engineering — repeatable, measurable, and safe from silent regressions.</p>
  </div>

  <h2><span class="ix">7</span> Industry Case</h2>
  <div class="sub">A whole tooling category for treating prompts like code.</div>
  <h3>Prompt-evaluation tools — Promptfoo, Braintrust, DeepEval</h3>
  <p>The clearest sign that "iterate against evals, not vibes" is the professional standard is that an entire tooling category grew up around it. By 2025, tools like <strong>Promptfoo</strong> (open-source, "treat prompt evaluation like software testing" with batch tests and regression checks), <strong>Braintrust</strong> (prompt creation, testing, and performance tracking with iterative workflows that diagnose regressions), and <strong>DeepEval</strong> (50-plus research-backed metrics, runnable in pytest to gate CI/CD) all do the same core thing: run a <em class="k">prompt experiment</em> — one or more prompt versions against a dataset, scored by checks or an LLM-judge — so you get metrics instead of guessing which prompt is best.</p>
  <p>On the patterns side, the discipline matured too: a widely-cited 2025 survey ("The Prompt Report") catalogued <strong>58 documented text-prompting techniques</strong>, while practitioners converged on the handful that reliably pay off — few-shot (reported to deliver double-digit accuracy gains), format constraints, role, step-by-step reasoning. The lesson for a PM is the union of the two: <strong>use the few patterns that work, and prove every change against an eval set</strong>, the same loop you'll formalize in Chapter 11.</p>
  <ul>
    <li><strong>Prompts are tested like code now.</strong> Batch runs, regression checks, CI gates — the vibe era is over for serious teams.</li>
    <li><strong>A few patterns do most of the work.</strong> You don't need 58 techniques; few-shot, format, role, rules, and step-by-step cover the bulk.</li>
    <li><strong>The eval is the arbiter.</strong> "Which prompt is better?" is answered by a score on real cases, not by whoever argues hardest.</li>
  </ul>
  <div class="callout accent">
    <div class="ch">The PM takeaway</div>
    <p>Know the handful of patterns, and never ship a prompt change you can't show beats the baseline on an eval set. The prompt is the spec (10.1); iterating it against evals is how that spec gets reliably better — engineering, not art. Chapter 11 turns this single loop into your product's whole improvement engine.</p>
  </div>

  <h2><span class="ix">✓</span> Check Yourself</h2>
  <div class="quiz" data-correct="3">
    <div class="q">You tweak a prompt, re-read the one output you were looking at, decide it "feels better," and ship. What's the risk?</div>
    <div class="opt" data-i="0"><span class="l">A</span><span>None — if it looks better it is better.</span></div>
    <div class="opt" data-i="1"><span class="l">B</span><span>The prompt got too long.</span></div>
    <div class="opt" data-i="2"><span class="l">C</span><span>You used too many examples.</span></div>
    <div class="opt" data-i="3"><span class="l">D</span><span>You fixed one case but may have silently broken others — without an eval set you can't tell if v2 actually beats v1.</span></div>
    <div class="qexp">Vibe-tweaking optimizes the one example you're staring at and is blind to regressions everywhere else. Run both versions against an eval set and compare scores (including other cases) — that's the only honest way to know a change is an improvement.</div>
  </div>
  <div class="quiz" data-correct="1">
    <div class="q">A support answer is correct but too long and inconsistently formatted. Best first pattern to reach for?</div>
    <div class="opt" data-i="0"><span class="l">A</span><span>Switch to a bigger model.</span></div>
    <div class="opt" data-i="1"><span class="l">B</span><span>Add an explicit output-format spec plus 2–3 few-shot examples of the ideal shape.</span></div>
    <div class="opt" data-i="2"><span class="l">C</span><span>Fine-tune the model on formatting.</span></div>
    <div class="opt" data-i="3"><span class="l">D</span><span>Remove all instructions and hope.</span></div>
    <div class="qexp">Correct-but-messy is a format problem, solved with pattern fixes: specify the format and show a couple of few-shot examples of the ideal output. Few-shot is the highest-leverage pattern — then prove the fix on the eval set and check accuracy didn't regress.</div>
  </div>

  <h2><span class="ix">✎</span> Apply It Yourself</h2>
  <div class="sub">No worked answer this time — this one's your rep. Give it 10 minutes before you move on.</div>
  <div class="callout">
    <div class="ch">Your problem</div>
    <p style="font-family:var(--font-ui);font-weight:600;">"Your AI feature's answers are correct but inconsistently formatted and often too long. Fix the prompt — and design how you'd prove the fix actually worked."</p>
  </div>
  <p><strong>Hints</strong> (peek only if you're stuck):</p>
  <ul>
    <li>Correct-but-messy is a format problem: output-format spec + few-shot examples.</li>
    <li>Change one thing, then run v1 vs v2 on the same eval set.</li>
    <li>The trap: re-reading one output and declaring it 'feels better.'</li>
  </ul>
  <table>
    <tr><th>A strong answer...</th><th>A weak answer...</th></tr>
    <tr><td>Adds a format spec + 2 few-shot examples; A/B's v1 vs v2 on the eval set.</td><td>Wordsmiths by vibes.</td></tr>
    <tr><td>Changes one thing at a time so the delta is attributable.</td><td>Rewrites everything and can't tell what helped.</td></tr>
    <tr><td>Checks accuracy didn't regress while format improved.</td><td>Fixes format, silently breaks correctness.</td></tr>
  </table>
  <div class="callout accent">
    <div class="ch">Make it live</div>
    <p>Take a prompt you use, add 2 few-shot examples of the ideal output, and compare 5 results before/after. Did examples beat instructions?</p>
  </div>

  <div class="callout good" style="margin-top:40px;">
    <div class="ch">Chapter 10 complete</div>
    <p>You can now treat the prompt as what it is — the product spec (10.1) — and iterate it the way engineers iterate code: a few reliable patterns, one change at a time, proven against an eval set (10.2). The prompt isn't a party trick; it's product definition you write precisely and refine rigorously. Next, <strong>Chapter 11 — AI Product Improvement Loops</strong>: turning that single eval loop into your product's whole improvement engine.</p>
  </div>
  __NAV__
</div>
`