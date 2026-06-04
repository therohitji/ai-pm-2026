/* ===== Chapter 13 lessons — AI PM by Rohit Swerashi =====
   One JS object entry per lesson: "N.Y": `<full lesson html>`
   Keep the 7-block structure. End each entry's content with __NAV__ (build injects nav). */

/* ---------------------------------------------------------------- 13.1 */
"13.1": `
<div class="wrap">
  <div class="les-kicker">Chapter 13 · Lesson 13.1</div>
  <h1 class="les-title">The 2026 AI PM Case Framework</h1>
  <div class="les-meta">
    <span class="pill">Case interviews</span><span class="pill">~24 min read</span>
    <span class="pill">Prereq: Ch.1–12</span><span class="pill">Difficulty: core</span>
  </div>
  <p class="motto">The candidate who brainstorms ten features loses to the one who draws five boxes and names where it breaks. The AI PM case isn't a creativity test — it's a systems test.</p>

  <p class="lead">Everything in this course converges here. An AI PM case interview doesn't reward clever feature ideas; it rewards the ability to <em class="k">map a system, find its bottleneck, name the tradeoff, define the metric, and design the failure</em>. This lesson gives you one repeatable framework that handles any AI PM case — and it's nothing new. It's Chapters 1 through 12, run in order, under pressure.</p>

  <h2><span class="ix">1</span> Your Mandate</h2>
  <div class="sub">What the interviewer is actually testing.</div>
  <p>Your mandate in a case is to <strong>demonstrate AI-PM reasoning, not generate features</strong>. The interviewer wants to see whether you can think in systems and tradeoffs the way this course trained you. They are explicitly <em>not</em> looking for a list of cool capabilities — a candidate who jumps to "I'd add X, Y, and Z" signals junior every time. Own the structure: map before you solve, and let the framework show your seniority in the first sixty seconds.</p>

  <h2><span class="ix">2</span> Your Responsibilities</h2>
  <div class="sub">The five steps — and the chapter each one comes from.</div>
  <table>
    <tr><th>Step</th><th>What you do</th><th>From</th></tr>
    <tr><td><strong>1 · Map the system</strong></td><td>Draw boxes-and-arrows: input → retrieve → reason → guard → output</td><td>Ch.1.1</td></tr>
    <tr><td><strong>2 · Find the bottleneck</strong></td><td>Which box, if it breaks, breaks the product? (usually retrieval)</td><td>Ch.1.2</td></tr>
    <tr><td><strong>3 · Name the tradeoff</strong></td><td>Pick 2 of quality / latency / cost — say the sacrifice out loud</td><td>Ch.1.1</td></tr>
    <tr><td><strong>4 · Define the metric</strong></td><td>Eval score, cost-per-task, containment — never DAU</td><td>Ch.5</td></tr>
    <tr><td><strong>5 · Design the failure</strong></td><td>Loud failure, fallback, human-in-the-loop</td><td>Ch.1, Ch.4.2</td></tr>
  </table>
  <p>That's the whole framework. Run it top to bottom on any prompt — "design an answer engine," "fix our chatbot," "should we build an agent?" — and you will sound like someone who has shipped AI products, because the framework <em>is</em> what shipping them taught.</p>

  <h2><span class="ix">3</span> Metrics That Matter Here</h2>
  <div class="sub">How a strong case answer is actually scored.</div>
  <table>
    <tr><th>What they grade</th><th>Strong signal</th><th>Weak signal</th></tr>
    <tr><td><strong>Structure</strong></td><td>You mapped the system before proposing anything</td><td>You started listing features</td></tr>
    <tr><td><strong>Bottleneck</strong></td><td>You found the real constraint (often retrieval)</td><td>You blamed "the model"</td></tr>
    <tr><td><strong>Tradeoff fluency</strong></td><td>You named the sacrifice (e.g., latency for quality)</td><td>You implied you can have it all</td></tr>
    <tr><td><strong>Evals</strong></td><td>You defined how quality is measured and monitored</td><td>You had no evaluation plan</td></tr>
  </table>
  <div class="callout warn">
    <div class="ch">The trap — feature brainstorming and the missing eval plan</div>
    <p>Two moves end an interview early. First, <strong>brainstorming features before mapping the system</strong> — it reads as a generic PM who doesn't understand AI. Second, <strong>skipping the evaluation plan</strong> — interviewers treat "how will you measure quality and catch regressions?" as a production-readiness litmus test. As one frequently-cited line from OpenAI's product leadership puts it: <em>the most important thing a PM can learn to do is write evals.</em> No eval plan, no offer.</p>
  </div>

  <h2><span class="ix">4</span> How to Think Here</h2>
  <div class="sub">One framework, five steps, run in order — every time.</div>
  <div class="fig">
    <div class="fig-title">The 2026 AI PM case framework</div>
    <svg viewBox="0 0 520 200" xmlns="http://www.w3.org/2000/svg" font-family="Hanken Grotesk, sans-serif">
      <rect x="14" y="64" width="84" height="66" rx="9" fill="#0071e3" opacity="0.10" stroke="#0071e3" stroke-width="1.3"/>
      <text x="56" y="90" text-anchor="middle" font-size="12" font-weight="700" fill="#0058b0">1 Map</text>
      <text x="56" y="106" text-anchor="middle" font-size="9" fill="#0058b0">the system</text>
      <text x="56" y="123" text-anchor="middle" font-size="8.5" fill="#86868b">Ch.1</text>
      <rect x="116" y="64" width="84" height="66" rx="9" fill="#ffffff" stroke="#1d1d1f" stroke-width="1.2"/>
      <text x="158" y="90" text-anchor="middle" font-size="12" font-weight="700" fill="#1d1d1f">2 Find</text>
      <text x="158" y="106" text-anchor="middle" font-size="9" fill="#1d1d1f">bottleneck</text>
      <text x="158" y="123" text-anchor="middle" font-size="8.5" fill="#86868b">Ch.1</text>
      <rect x="218" y="64" width="84" height="66" rx="9" fill="#ffffff" stroke="#1d1d1f" stroke-width="1.2"/>
      <text x="260" y="90" text-anchor="middle" font-size="12" font-weight="700" fill="#1d1d1f">3 Name</text>
      <text x="260" y="106" text-anchor="middle" font-size="9" fill="#1d1d1f">tradeoff</text>
      <text x="260" y="123" text-anchor="middle" font-size="8.5" fill="#86868b">Ch.1</text>
      <rect x="320" y="64" width="84" height="66" rx="9" fill="#ffffff" stroke="#1d1d1f" stroke-width="1.2"/>
      <text x="362" y="90" text-anchor="middle" font-size="12" font-weight="700" fill="#1d1d1f">4 Define</text>
      <text x="362" y="106" text-anchor="middle" font-size="9" fill="#1d1d1f">metric</text>
      <text x="362" y="123" text-anchor="middle" font-size="8.5" fill="#86868b">Ch.5</text>
      <rect x="422" y="64" width="84" height="66" rx="9" fill="#ffffff" stroke="#1d1d1f" stroke-width="1.2"/>
      <text x="464" y="90" text-anchor="middle" font-size="12" font-weight="700" fill="#1d1d1f">5 Design</text>
      <text x="464" y="106" text-anchor="middle" font-size="9" fill="#1d1d1f">failure</text>
      <text x="464" y="123" text-anchor="middle" font-size="8.5" fill="#86868b">Ch.4</text>
      <line x1="98" y1="97" x2="116" y2="97" stroke="#86868b" stroke-width="1.4" marker-end="url(#c131)"/>
      <line x1="200" y1="97" x2="218" y2="97" stroke="#86868b" stroke-width="1.4" marker-end="url(#c131)"/>
      <line x1="302" y1="97" x2="320" y2="97" stroke="#86868b" stroke-width="1.4" marker-end="url(#c131)"/>
      <line x1="404" y1="97" x2="422" y2="97" stroke="#86868b" stroke-width="1.4" marker-end="url(#c131)"/>
      <text x="260" y="160" text-anchor="middle" font-size="9.5" fill="#86868b">map before you solve — the whole course, run in order</text>
      <defs><marker id="c131" markerWidth="7" markerHeight="7" refX="5" refY="3" orient="auto"><path d="M0,0 L5,3 L0,6 Z" fill="#86868b"/></marker></defs>
    </svg>
    <div class="fig-cap">Five steps, in order, on any AI PM case: map the system, find the bottleneck, name the tradeoff, define the metric, design the failure. It's Chapters 1–12 turned into an interview reflex.</div>
  </div>
  <p>Run the framework like this:</p>
  <ol>
    <li><strong>Map the system first.</strong> Resist solving. Draw the boxes-and-arrows out loud (Ch.1.1).</li>
    <li><strong>Find the bottleneck.</strong> Name the box that breaks the product — and resist blaming the model (Ch.1.2).</li>
    <li><strong>Name the tradeoff.</strong> Pick two of quality/latency/cost and state the sacrifice (Ch.1.1).</li>
    <li><strong>Define the metric.</strong> Eval score, cost-per-task, containment — and a monitoring plan (Ch.5).</li>
    <li><strong>Design the failure.</strong> What happens when it's wrong: loud failure, fallback, human-in-the-loop (Ch.4.2).</li>
  </ol>
  <div class="callout accent">
    <div class="ch">Say this in the first 60 seconds</div>
    <p>"Before I propose anything, let me map the system and find the bottleneck — for most AI products it's retrieval or failure-handling, not the model. Then I'll name the tradeoff, define how we'd measure quality with evals, and design what happens when it's wrong."</p>
  </div>

  <h2><span class="ix">5</span> Frameworks to Deploy</h2>
  <div class="sub">Three reflexes that carry the whole interview.</div>
  <h3>① The five-step spine</h3>
  <p>Map → bottleneck → tradeoff → metric → failure. Memorize the order; it converts a blank-page panic into a confident walk-through. Every other framework in this course slots into one of these five steps.</p>
  <h3>② Map before you solve</h3>
  <p>The single highest-signal move is drawing the system before proposing anything. It instantly separates you from candidates who feature-brainstorm, and it gives you the boxes you'll need for every later step. Narrate it: "Let me sketch the pipeline first."</p>
  <h3>③ Always bring evals</h3>
  <p>End every case with how you'd measure quality and catch regressions — eval set, cost-per-task, monitoring (Ch.5). Interviewers use the presence or absence of an eval plan as a direct readiness signal. Bringing it unprompted is the closing move that confirms you can actually drive the work, not just talk about it.</p>

  <h2><span class="ix">6</span> Worked Solution</h2>
  <div class="sub">The framework, demonstrated fast (full cases come in 13.2–13.3).</div>
  <div class="callout">
    <div class="ch">The prompt</div>
    <p style="font-family:var(--font-ui);font-weight:600;">"Design an AI assistant that answers patients' basic medical questions. Walk me through your thinking."</p>
  </div>
  <p><strong>1 · Map.</strong> Question → retrieve from a vetted medical knowledge base → reason → guard (cite sources, safety-check) → answer. I'd say this out loud before anything else.</p>
  <p><strong>2 · Bottleneck.</strong> Two: retrieval (a wrong source yields a confident wrong medical answer) and the guard (safety). The model's fluency isn't the risk; what it's grounded in, and what it does when unsure, is.</p>
  <p><strong>3 · Tradeoff.</strong> This is high-consequence, so I protect quality and safety and sacrifice latency and cost — crank retrieval recall, set a high relevance threshold, add a safety check, and accept it's slower and pricier.</p>
  <p><strong>4 · Metric.</strong> Percent of answers correct-with-citation, hallucination rate, and "referred to a clinician" rate — measured on an eval set built with medical professionals. Not engagement.</p>
  <p><strong>5 · Failure.</strong> A loud failure by design: below the confidence threshold, or on any high-risk symptom, it says "please see a clinician" and routes to a human rather than guessing. The dangerous failure (confident wrong advice) is engineered out.</p>
  <div class="callout good">
    <div class="ch">Why this wins</div>
    <p>In under two minutes you mapped a system, located the real risk (retrieval and safety, not the model), named the tradeoff for a high-stakes domain, defined medical-appropriate metrics with an eval plan, and designed a safe failure. You never brainstormed a feature — and that's exactly why it lands as senior.</p>
  </div>

  <h2><span class="ix">7</span> Industry Case</h2>
  <div class="sub">What 2025–26 AI PM interviews actually ask — and reward.</div>
  <h3>The real hiring loop — system design and evals, not feature lists</h3>
  <p>Reports from 2025–26 AI PM hiring loops describe exactly the framework above. Interviewers test <strong>tradeoff fluency</strong> directly — making candidates reason through choices like retrieval speed vs context length, prompt-engineering vs fine-tuning, or GPU cost vs latency — because, as the guidance puts it, every real generative system survives on balanced tradeoffs. The common prompts are the ones this course rehearsed: design a customer-support agent (intent + RAG retrieval + scoped actions), design a RAG system that handles conflicting sources, or fix a vector search returning irrelevant results. And the most-cited red flag is the one block 3 warned about: <strong>skipping the evaluation and monitoring plan signals a lack of production readiness.</strong></p>
  <p>The bar is also explicitly about <em>driving</em> versus being <em>adjacent</em>: interviewers probe technical details, and if you can't name the architecture, the eval metrics, and the business impact, they assume you watched rather than led. That is the whole purpose of this course's spine — Chapters 1 through 5 give you the architecture and metrics, Chapters 6 through 12 give you the planning, specs, and tradeoffs, and this framework lets you deploy all of it on demand.</p>
  <ul>
    <li><strong>The cases mirror real systems you studied.</strong> "Design an answer engine" is Perplexity; "support agent" is Sierra/Klarna; "fix the RAG" is Harvey's bottleneck — you've already worked these.</li>
    <li><strong>Evals are the differentiator.</strong> OpenAI's product leadership calling eval-writing the top PM skill is not hype; it's the interview rubric.</li>
    <li><strong>Structure beats brilliance.</strong> A calm five-step walk-through beats a flashy feature pitch every time.</li>
  </ul>
  <div class="callout accent">
    <div class="ch">The PM takeaway</div>
    <p>The 2026 AI PM case rewards system-mapping and tradeoff-naming over feature brainstorming — and you already hold the system, the tradeoffs, and the metrics from this course. The framework just sequences them. Map, bottleneck, tradeoff, metric, failure: run it on autopilot, and the next two lessons drill it on full cases.</p>
  </div>

  <h2><span class="ix">✓</span> Check Yourself</h2>
  <div class="quiz" data-correct="1">
    <div class="q">An interviewer says "design an AI customer-support tool." What's the strongest opening move?</div>
    <div class="opt" data-i="0"><span class="l">A</span><span>List ten features it could have.</span></div>
    <div class="opt" data-i="1"><span class="l">B</span><span>Map the system out loud (input → retrieve → reason → guard → output), then find the bottleneck.</span></div>
    <div class="opt" data-i="2"><span class="l">C</span><span>Recommend a specific model and vector database immediately.</span></div>
    <div class="opt" data-i="3"><span class="l">D</span><span>Ask what the budget is.</span></div>
    <div class="qexp">Map before you solve. Drawing the pipeline first signals AI-PM seniority and gives you the boxes for every later step (bottleneck, tradeoff, metric, failure). Feature-listing (A) and naming the stack before mapping (C) are the classic junior tells.</div>
  </div>
  <div class="quiz" data-correct="3">
    <div class="q">You've mapped the system, found the bottleneck, named the tradeoff. What must you not forget before finishing?</div>
    <div class="opt" data-i="0"><span class="l">A</span><span>The company's stock price.</span></div>
    <div class="opt" data-i="1"><span class="l">B</span><span>A list of competitor logos.</span></div>
    <div class="opt" data-i="2"><span class="l">C</span><span>Which programming language to use.</span></div>
    <div class="opt" data-i="3"><span class="l">D</span><span>The metric and the failure design — how you'd measure quality with evals, and what happens when it's wrong.</span></div>
    <div class="qexp">Steps 4 and 5 are where many candidates stop short. Interviewers treat a missing eval/monitoring plan as a production-readiness red flag, and a missing failure design as not understanding probabilistic products. Always close with metric + failure.</div>
  </div>
  <h2><span class="ix">✎</span> Apply It Yourself</h2>
  <div class="sub">No worked answer this time — and no notes. This is the rep that mirrors the real interview.</div>
  <div class="callout">
    <div class="ch">Your problem</div>
    <p style="font-family:var(--font-ui);font-weight:600;">"An interviewer says: 'Design an AI assistant that helps users file their taxes.' You have 60 seconds to open. Run the 5-step framework out loud — no notes."</p>
  </div>
  <p><strong>Hints</strong> (peek only if you're stuck):</p>
  <ul>
    <li>Map before you solve: boxes-and-arrows first.</li>
    <li>High-consequence domain — protect quality/safety, design the failure.</li>
    <li>The trap: brainstorming features or naming a model first.</li>
  </ul>
  <table>
    <tr><th>A strong answer...</th><th>A weak answer...</th></tr>
    <tr><td>Maps system → bottleneck → tradeoff → metric → failure, in order.</td><td>Lists features or picks a model.</td></tr>
    <tr><td>Defines an eval + monitoring plan unprompted.</td><td>Skips how quality is measured.</td></tr>
    <tr><td>Designs a loud failure (escalate to a human when unsure).</td><td>Leaves confident wrong answers.</td></tr>
  </table>
  <div class="callout accent">
    <div class="ch">Make it live</div>
    <p>Have someone throw you a random 'design an AI X' prompt and run all 5 steps in under two minutes. Where did you stall?</p>
  </div>
  __NAV__
</div>
`,

/* ---------------------------------------------------------------- 13.2 */
"13.2": `
<div class="wrap">
  <div class="les-kicker">Chapter 13 · Lesson 13.2</div>
  <h1 class="les-title">Worked Case: Design an AI Agent</h1>
  <div class="les-meta">
    <span class="pill">Case interviews</span><span class="pill">~24 min read</span>
    <span class="pill">Prereq: 13.1, Ch.2</span><span class="pill">Difficulty: core</span>
  </div>
  <p class="motto">"Design an agent that books meetings." The trap is to start listing what it can do. The win is to ask how much autonomy it gets — and where you'd never let it act alone.</p>

  <p class="lead">The agent-design case is the most common — and most mishandled — AI PM interview. Candidates rush to make it powerful and autonomous; the strong answer treats autonomy as a liability granted deliberately (Ch.2). This lesson walks a full agent case end to end with the framework from 13.1, so you can run the same play on any "design an agent" prompt: map the job, decompose actions by <em class="k">blast radius</em>, set the leash, bound the loop, and measure it.</p>

  <h2><span class="ix">1</span> Your Mandate</h2>
  <div class="sub">What the interviewer is testing in an agent case.</div>
  <p>Your mandate is to <strong>show that you grant autonomy on purpose, scoped to risk</strong> — the core Chapter 2 lesson. The interviewer wants to see you resist "make it fully autonomous," decompose the agent's actions by what each can break, and put hard human checkpoints on the irreversible ones. Demonstrating that judgment — not the longest feature list — is what wins the case.</p>

  <h2><span class="ix">2</span> Your Responsibilities</h2>
  <div class="sub">The checklist a complete agent answer covers.</div>
  <table>
    <tr><th>Cover this</th><th>From</th></tr>
    <tr><td><strong>Workflow vs agent</strong> — does the path even need runtime decisions?</td><td>Ch.2.1</td></tr>
    <tr><td><strong>Single vs multi-agent</strong> — coherence task or breadth task?</td><td>Ch.2.2</td></tr>
    <tr><td><strong>Tools, scoped by blast radius</strong> — read / write / irreversible</td><td>Ch.2.3</td></tr>
    <tr><td><strong>The autonomy leash</strong> — which level per action</td><td>Ch.2.1</td></tr>
    <tr><td><strong>Loop bounds + failure</strong> — max steps, escalation</td><td>Ch.2.1</td></tr>
    <tr><td><strong>Metrics</strong> — autonomous completion, escalation quality</td><td>Ch.2, Ch.5</td></tr>
  </table>

  <h2><span class="ix">3</span> Metrics That Matter Here</h2>
  <div class="sub">How the agent case is scored.</div>
  <table>
    <tr><th>What they grade</th><th>Strong signal</th><th>Weak signal</th></tr>
    <tr><td><strong>Autonomy judgment</strong></td><td>Different autonomy per action, by risk</td><td>"Fully autonomous" by default</td></tr>
    <tr><td><strong>Blast-radius scoping</strong></td><td>Human confirm on irreversible actions</td><td>Same permissions for everything</td></tr>
    <tr><td><strong>Loop control</strong></td><td>Bounded steps + a clean escalation</td><td>An unbounded loop that can spin</td></tr>
    <tr><td><strong>Failure behavior</strong></td><td>Asks when ambiguous, doesn't guess</td><td>Acts confidently on ambiguity</td></tr>
  </table>
  <div class="callout warn">
    <div class="ch">The trap — "make it fully autonomous"</div>
    <p>The instinct that sinks the case is granting full autonomy because it sounds impressive. It's the opposite of senior. The strong candidate says: autonomy is a liability you add deliberately, so I'll grant it generously on low-blast-radius actions and put a human in front of anything irreversible. <strong>The grade is in the gradient, not the maximum.</strong></p>
  </div>

  <h2><span class="ix">4</span> How to Think Here</h2>
  <div class="sub">Sort every action the agent can take by what it can break.</div>
  <div class="fig">
    <div class="fig-title">Grant autonomy by blast radius</div>
    <svg viewBox="0 0 520 250" xmlns="http://www.w3.org/2000/svg" font-family="Hanken Grotesk, sans-serif">
      <rect x="60" y="44" width="420" height="56" rx="10" fill="#0a7d3c" opacity="0.10" stroke="#0a7d3c" stroke-width="1.2"/>
      <text x="270" y="68" text-anchor="middle" font-size="11.5" font-weight="700" fill="#0a7d3c">READ — let it act autonomously</text>
      <text x="270" y="86" text-anchor="middle" font-size="9.5" fill="#0a7d3c">check the calendar · look up availability</text>
      <rect x="60" y="108" width="420" height="56" rx="10" fill="#0071e3" opacity="0.10" stroke="#0071e3" stroke-width="1.2"/>
      <text x="270" y="132" text-anchor="middle" font-size="11.5" font-weight="700" fill="#0058b0">WRITE, reversible — autonomous + logged</text>
      <text x="270" y="150" text-anchor="middle" font-size="9.5" fill="#0058b0">draft an invite · propose times</text>
      <rect x="60" y="172" width="420" height="56" rx="10" fill="#b25000" opacity="0.10" stroke="#b25000" stroke-width="1.2"/>
      <text x="270" y="196" text-anchor="middle" font-size="11.5" font-weight="700" fill="#b25000">IRREVERSIBLE — a human confirms</text>
      <text x="270" y="214" text-anchor="middle" font-size="9.5" fill="#b25000">send to others · delete an event · pay</text>
    </svg>
    <div class="fig-cap">Decompose the agent into the actions it can take and sort them by blast radius. Read actions run free; reversible writes run with logging; irreversible actions get a human checkpoint. The design lives in this gradient.</div>
  </div>
  <p>Run the agent case like this:</p>
  <ol>
    <li><strong>Map the job</strong> as a set of concrete actions (read X, draft Y, send Z).</li>
    <li><strong>Decide workflow vs agent</strong> — only go agentic if the path needs runtime decisions (Ch.2.1).</li>
    <li><strong>Sort actions by blast radius</strong> into read / reversible-write / irreversible.</li>
    <li><strong>Set the leash per tier</strong> — autonomous, autonomous-plus-logging, human-confirm.</li>
    <li><strong>Bound the loop and define metrics</strong> — max steps, escalation, autonomous-completion, error rate.</li>
  </ol>
  <div class="callout accent">
    <div class="ch">Say this in the interview</div>
    <p>"I'd decompose the agent into its actions and grant autonomy by blast radius: read freely, reversible writes with logging, and a human checkpoint on anything irreversible — sending to other people, deleting, or paying. Autonomy is a liability I add deliberately, not a default."</p>
  </div>

  <h2><span class="ix">5</span> Frameworks to Deploy</h2>
  <div class="sub">The Chapter 2 toolkit, deployed under interview pressure.</div>
  <h3>① Workflow vs agent</h3>
  <p>First, earn the agent. If the steps are known in advance, it's a workflow — cheaper, more reliable (Ch.2.1). Say so; only reach for an agent when the path genuinely must be decided at runtime. Defaulting to "agent" is itself a junior tell.</p>
  <h3>② Single vs multi-agent by task shape</h3>
  <p>Coherence task (one consistent thread, like managing one calendar) → single agent. Breadth task (many independent threads) → multi-agent (Ch.2.2). Naming the task shape and choosing accordingly shows you won't reach for a "swarm" because it sounds advanced.</p>
  <h3>③ Blast-radius tiers + least privilege</h3>
  <p>Grant the minimum tools, and gate by reversibility (Ch.2.3). The most catastrophic failure (mass-sending, deleting, paying wrongly) is made <em>impossible by construction</em> when the agent simply lacks unsupervised access to those actions. That's the design move that wins the case.</p>

  <h2><span class="ix">6</span> Worked Solution</h2>
  <div class="sub">A full agent case, end to end.</div>
  <div class="callout">
    <div class="ch">The prompt</div>
    <p style="font-family:var(--font-ui);font-weight:600;">"Design an AI agent that manages a user's calendar and books meetings for them."</p>
  </div>
  <p><strong>1 · Map the job into actions.</strong> Read the calendar, find free slots, propose times, draft invites, send invites, reschedule, cancel. That action list is the whole design surface.</p>
  <p><strong>2 · Workflow vs agent, and topology.</strong> Negotiating times across constraints needs runtime decisions, so a (bounded) agent is justified — not a fixed workflow. It's a coherence task — one user's calendar must stay internally consistent — so a single agent, not a multi-agent swarm.</p>
  <p><strong>3 · Sort actions by blast radius and set the leash.</strong></p>
  <div class="flow">
<span class="st">READ</span>          <span class="nt">check calendar · find availability → autonomous</span>
<span class="st">WRITE (rev.)</span>  <span class="nt">draft invite · propose times → autonomous, logged</span>
<span class="st">IRREVERSIBLE</span>  <span class="nt">send to attendees · delete · accept on user's behalf → human confirms</span>
  </div>
  <p>Sending an invite touches other people and is socially irreversible, so it gets a one-tap confirm, not silent autonomy. The agent prepares everything; the user okays the send.</p>
  <p><strong>4 · Bound the loop and design failure.</strong> Cap the agent at, say, a handful of steps; if it can't find a slot or the request is ambiguous ("lunch with Sam" — which Sam?), it stops and asks rather than guessing. A wrong autonomous booking costs more trust than a quick clarifying question.</p>
  <p><strong>5 · Metrics.</strong> Autonomous-completion rate (booked correctly with no human), escalation quality (are its clarifying questions good?), and wrong-booking rate as the canary — if it ticks up, tighten the leash before it becomes a complaint.</p>
  <div class="callout good">
    <div class="ch">Why this wins</div>
    <p>You earned the agent, chose single over multi by task shape, scoped actions by blast radius with a human gate on the irreversible ones, bounded the loop, and defined real metrics with a failure design. You demonstrated every Chapter 2 idea on one prompt — and never once said "make it fully autonomous."</p>
  </div>

  <h2><span class="ix">7</span> Industry Case</h2>
  <div class="sub">The companies whose real products are these case prompts.</div>
  <h3>Sierra — the agent case is a real job</h3>
  <p>Agent design isn't a hypothetical: companies like <strong>Sierra</strong> (the customer-service-agent company from Ch.4, reportedly valued around $10B by late 2025) hire product managers specifically for agents, and their interview loops test exactly this reasoning. A real support-agent design has the same anatomy you'd present: intent understanding, knowledge retrieval via RAG over help docs and policies, and a scoped set of <em>actions</em> — check order status, process a refund, or escalate — where the refund (money, irreversible) is precisely the action you'd gate behind limits and human review, while answering a question runs free.</p>
  <p>This is the Klarna arc (Ch.2) seen from the design side: full autonomy on the easy, low-blast-radius majority, human checkpoints on the high-stakes tail. The candidate who designs that gradient is describing what the best agent companies actually shipped — and learned, sometimes the expensive way, to build. The interviewer recognizes it instantly.</p>
  <ul>
    <li><strong>Real agent products are action-scoped.</strong> Support agents separate "answer" (free) from "refund" (gated) exactly as blast-radius tiering predicts.</li>
    <li><strong>The leash is the lesson the market learned.</strong> Klarna's walk-back to a human-checkpointed hybrid is the canonical proof.</li>
    <li><strong>Your case answer mirrors production.</strong> Design the gradient and you're describing how Sierra-class products are actually built.</li>
  </ul>
  <div class="callout accent">
    <div class="ch">The PM takeaway</div>
    <p>An agent case rewards the same judgment a real agent PM uses daily: earn the agent, pick the topology by task shape, scope actions by blast radius, and gate the irreversible ones. Run that play and you don't just pass the case — you sound like you already do the job.</p>
  </div>

  <h2><span class="ix">✓</span> Check Yourself</h2>
  <div class="quiz" data-correct="2">
    <div class="q">In an agent-design case, how should you handle an action like "send the invitation to all attendees"?</div>
    <div class="opt" data-i="0"><span class="l">A</span><span>Fully autonomous — it's just sending an email.</span></div>
    <div class="opt" data-i="1"><span class="l">B</span><span>Give the agent every permission so it's flexible.</span></div>
    <div class="opt" data-i="2"><span class="l">C</span><span>Human confirm — it touches other people and is socially irreversible, so the agent prepares it and the user approves the send.</span></div>
    <div class="opt" data-i="3"><span class="l">D</span><span>Skip it entirely.</span></div>
    <div class="qexp">Sending to other people is irreversible (you can't un-send), so it belongs in the top blast-radius tier: the agent drafts everything, a human okays the send. Reads and reversible drafts can run autonomously; the irreversible action gets the checkpoint.</div>
  </div>
  <div class="quiz" data-correct="0">
    <div class="q">The case is "design an agent to write one coherent legal contract." Single or multi-agent?</div>
    <div class="opt" data-i="0"><span class="l">A</span><span>Single — it's a coherence task; one consistent document, where parallel agents would make conflicting clauses.</span></div>
    <div class="opt" data-i="1"><span class="l">B</span><span>Multi-agent — more agents is always better.</span></div>
    <div class="opt" data-i="2"><span class="l">C</span><span>Multi-agent — to look sophisticated.</span></div>
    <div class="opt" data-i="3"><span class="l">D</span><span>It doesn't matter.</span></div>
    <div class="qexp">A single coherent contract is a coherence task: every clause must be consistent with every other, so isolated parallel agents would produce conflicts (Ch.2.2). Single agent. Multi-agent is for breadth tasks with independent threads — and reaching for it to "look advanced" is the trap.</div>
  </div>
  <h2><span class="ix">✎</span> Apply It Yourself</h2>
  <div class="sub">No worked answer this time — this one's your rep. Give it 10 minutes before you move on.</div>
  <div class="callout">
    <div class="ch">Your problem</div>
    <p style="font-family:var(--font-ui);font-weight:600;">"Interview prompt: 'Design an AI agent that manages a small business's social media — drafting posts, scheduling, and replying to comments.' Work the full case."</p>
  </div>
  <p><strong>Hints</strong> (peek only if you're stuck):</p>
  <ul>
    <li>Decompose into actions; grade each by blast radius.</li>
    <li>Single vs multi by task shape; bound the loop.</li>
    <li>The trap: 'make it fully autonomous.'</li>
  </ul>
  <table>
    <tr><th>A strong answer...</th><th>A weak answer...</th></tr>
    <tr><td>Scopes actions by blast radius (publishing and replies-to-complaints get a human gate; drafts run free).</td><td>Grants full autonomy by default.</td></tr>
    <tr><td>Picks topology by task shape; bounds the loop + escalation.</td><td>Reaches for a 'swarm' to impress.</td></tr>
    <tr><td>Names autonomous-completion + a canary metric.</td><td>Has no plan for a bad post.</td></tr>
  </table>
  <div class="callout accent">
    <div class="ch">Make it live</div>
    <p>Pick any agent product and reverse-engineer its leash: which actions does it take alone, and which make it ask you first?</p>
  </div>
  __NAV__
</div>
`,

/* ---------------------------------------------------------------- 13.3 */
"13.3": `
<div class="wrap">
  <div class="les-kicker">Chapter 13 · Lesson 13.3</div>
  <h1 class="les-title">Worked Case: Fix a Broken RAG Product + a Metrics Case</h1>
  <div class="les-meta">
    <span class="pill">Case interviews</span><span class="pill">~24 min read</span>
    <span class="pill">Prereq: 13.1, Ch.1, Ch.5</span><span class="pill">Difficulty: core</span>
  </div>
  <p class="motto">Half of AI PM cases aren't "design something new" — they're "this is broken, fix it." The fix is never the first thing the room shouts; it's the box you find by tracing the chain.</p>

  <p class="lead">Beyond design cases, interviewers love two diagnostic prompts: <em class="k">fix a broken RAG product</em> and <em class="k">read an AI product's metrics</em>. Both reward diagnosis over guessing — tracing a chain to the failing box, and rejecting a vanity number for the real one. This lesson works both end to end, drawing on Chapters 1 and 5, so the "it's broken" and "is it working?" prompts become as routine for you as the design case.</p>

  <h2><span class="ix">1</span> Your Mandate</h2>
  <div class="sub">What these two diagnostic cases test.</div>
  <p>Your mandate is to <strong>diagnose, not guess</strong>. In a fix-it case, that means tracing the pipeline to find the failing box instead of reaching for "a bigger model" (Ch.1, Ch.11). In a metrics case, it means refusing the flattering number and naming the one that maps to value (Ch.5). Both test the same instinct: an AI PM follows the evidence to the real problem rather than the loudest assumption in the room.</p>

  <h2><span class="ix">2</span> Your Responsibilities</h2>
  <div class="sub">The two case types and what each demands.</div>
  <table>
    <tr><th>Case type</th><th>What to demonstrate</th><th>From</th></tr>
    <tr><td><strong>Fix a broken RAG</strong></td><td>Trace the chunk; localize the failing stage; fix the cheapest lever</td><td>Ch.1.2, Ch.11</td></tr>
    <tr><td><strong>Metrics case</strong></td><td>Reject vanity; define the value metric; read the real signal</td><td>Ch.5.1</td></tr>
    <tr><td><strong>Both</strong></td><td>Diagnosis before solution; evidence over assumption</td><td>Ch.11.1</td></tr>
  </table>

  <h2><span class="ix">3</span> Metrics That Matter Here</h2>
  <div class="sub">How the diagnostic cases are scored.</div>
  <table>
    <tr><th>What they grade</th><th>Strong signal</th><th>Weak signal</th></tr>
    <tr><td><strong>Diagnosis</strong></td><td>You traced the chain to the failing box</td><td>You guessed "upgrade the model"</td></tr>
    <tr><td><strong>Cheapest lever</strong></td><td>Fix retrieval/prompt before model</td><td>Most expensive fix first</td></tr>
    <tr><td><strong>Metric judgment</strong></td><td>You named resolution/eval, not DAU</td><td>You celebrated engagement</td></tr>
    <tr><td><strong>Failure framing</strong></td><td>You turned a silent failure loud (citations)</td><td>You left confident-wrong answers</td></tr>
  </table>
  <div class="callout warn">
    <div class="ch">The trap — "upgrade the model" and "engagement is up"</div>
    <p>The two reflexes that fail these cases. In a fix-it case, jumping to a bigger model spends the most to fix the least — the failure is almost always a cheaper box (Ch.11). In a metrics case, celebrating rising engagement misses that retries from <em>bad</em> answers inflate it (Ch.5). Both are the same error: trusting the loud assumption instead of tracing the evidence.</p>
  </div>

  <h2><span class="ix">4</span> How to Think Here</h2>
  <div class="sub">For a broken RAG, walk the chain backwards until you find the break.</div>
  <div class="fig">
    <div class="fig-title">Trace the chain — where did the wrong answer come from?</div>
    <svg viewBox="0 0 520 240" xmlns="http://www.w3.org/2000/svg" font-family="Hanken Grotesk, sans-serif">
      <rect x="16" y="58" width="108" height="44" rx="9" fill="#ffffff" stroke="#1d1d1f" stroke-width="1.2"/>
      <text x="70" y="84" text-anchor="middle" font-size="10.5" font-weight="700" fill="#1d1d1f">In the KB?</text>
      <rect x="138" y="58" width="108" height="44" rx="9" fill="#ffffff" stroke="#1d1d1f" stroke-width="1.2"/>
      <text x="192" y="84" text-anchor="middle" font-size="10.5" font-weight="700" fill="#1d1d1f">Retrieved?</text>
      <rect x="260" y="58" width="108" height="44" rx="9" fill="#ffffff" stroke="#1d1d1f" stroke-width="1.2"/>
      <text x="314" y="80" text-anchor="middle" font-size="10.5" font-weight="700" fill="#1d1d1f">Survived</text>
      <text x="314" y="94" text-anchor="middle" font-size="10.5" font-weight="700" fill="#1d1d1f">rerank?</text>
      <rect x="382" y="58" width="108" height="44" rx="9" fill="#ffffff" stroke="#1d1d1f" stroke-width="1.2"/>
      <text x="436" y="80" text-anchor="middle" font-size="10.5" font-weight="700" fill="#1d1d1f">Model</text>
      <text x="436" y="94" text-anchor="middle" font-size="10.5" font-weight="700" fill="#1d1d1f">used it?</text>
      <line x1="124" y1="80" x2="138" y2="80" stroke="#86868b" stroke-width="1.4" marker-end="url(#c133)"/>
      <line x1="246" y1="80" x2="260" y2="80" stroke="#86868b" stroke-width="1.4" marker-end="url(#c133)"/>
      <line x1="368" y1="80" x2="382" y2="80" stroke="#86868b" stroke-width="1.4" marker-end="url(#c133)"/>
      <text x="70" y="130" text-anchor="middle" font-size="8.5" fill="#b25000">no → add data</text>
      <text x="192" y="130" text-anchor="middle" font-size="8.5" fill="#b25000">no → fix recall (1.2)</text>
      <text x="314" y="130" text-anchor="middle" font-size="8.5" fill="#b25000">no → tune rerank</text>
      <text x="436" y="130" text-anchor="middle" font-size="8.5" fill="#b25000">no → fix the prompt</text>
      <text x="260" y="172" text-anchor="middle" font-size="9.5" fill="#0a7d3c">the fix is wherever the chain breaks — usually retrieval, almost never the model</text>
      <defs><marker id="c133" markerWidth="7" markerHeight="7" refX="5" refY="3" orient="auto"><path d="M0,0 L5,3 L0,6 Z" fill="#86868b"/></marker></defs>
    </svg>
    <div class="fig-cap">For any wrong RAG answer, walk the chain: was the doc in the KB, retrieved, kept by reranking, and used by the model? The stage where it breaks is your fix — and it's rarely the model.</div>
  </div>
  <p>Run a diagnostic case like this:</p>
  <ol>
    <li><strong>Resist the loud assumption</strong> — not "the model," not "engagement is great."</li>
    <li><strong>Trace the chain</strong> (RAG) or pull the real metric (metrics case).</li>
    <li><strong>Localize the break</strong> — the failing stage, or the gap between vanity and value.</li>
    <li><strong>Fix the cheapest lever</strong> and turn silent failures loud (citations).</li>
    <li><strong>Re-measure</strong> on an eval set to confirm the fix.</li>
  </ol>
  <div class="callout accent">
    <div class="ch">Say this in the interview</div>
    <p>"Before changing anything, I'd diagnose: for the RAG, trace whether the right chunk was even retrieved; for the metric, pull resolution and cost, not engagement. The fix is wherever the evidence points — and it's almost never the model."</p>
  </div>

  <h2><span class="ix">5</span> Frameworks to Deploy</h2>
  <div class="sub">Three diagnostic reflexes.</div>
  <h3>① Trace the chunk</h3>
  <p>For a broken RAG, walk it backwards: in the KB? retrieved? survived rerank? used by the model? (Ch.1.2). The stage that breaks tells you exactly where to spend — and nine times in ten it's retrieval, not the model.</p>
  <h3>② Cheapest lever first</h3>
  <p>Fix in cost order: prompt → retrieval → data → model (Ch.1.3, Ch.11). Reaching for the model first is the expensive reflex; the model is rarely the bottleneck. Show the interviewer you spend the least to fix the most.</p>
  <h3>③ Vanity vs value</h3>
  <p>In a metrics case, ask of every number: is this activity or outcome? "Handled," "engagement," "sessions" are vanity; "resolved," "correct," "cost-per-task" are value (Ch.5.1). Rising engagement can even be the symptom of falling quality — retries look like usage.</p>

  <h2><span class="ix">6</span> Worked Solution</h2>
  <div class="sub">Two diagnostic cases, both solved fast.</div>
  <div class="callout">
    <div class="ch">Case A — the prompt</div>
    <p style="font-family:var(--font-ui);font-weight:600;">"Our RAG support bot gives confident, subtly wrong answers. Users are losing trust. Fix it."</p>
  </div>
  <p><strong>Diagnose, don't guess.</strong> "Confident but wrong" is the signature of a retrieval problem — the model is faithfully answering from chunks that were almost-but-not-right. I'd pull 20 failures and trace the chunk: in the KB? retrieved? reranked in? Almost always recall is the leak.</p>
  <p><strong>Fix cheapest-first.</strong> Add hybrid retrieval so exact terms match (Ch.1.2); add a relevance threshold so weak matches don't get answered; and turn the silent failure loud — attach citations and say "I couldn't find this" below the threshold (Ch.1.1). Re-eval on recall@k and citation accuracy. No model upgrade required.</p>
  <div class="callout">
    <div class="ch">Case B — the prompt</div>
    <p style="font-family:var(--font-ui);font-weight:600;">"Our AI feature's dashboard looks great — sessions and messages-per-user are up. Is it working?"</p>
  </div>
  <p><strong>Distrust the vanity metric.</strong> Rising sessions on an AI product can mean users <em>retrying</em> after wrong answers — engagement up, quality down (Ch.5.1). I wouldn't celebrate yet.</p>
  <p><strong>Pull the value metrics.</strong> Resolution/containment rate, repeat-inquiry rate, cost-per-task, and an eval-based quality score on a sample. If repeat inquiries are climbing alongside "engagement," the product is getting worse while the dashboard looks better. The honest read comes from the outcome metrics, not the activity ones.</p>
  <div class="callout good">
    <div class="ch">Why both win</div>
    <p>In each case you refused the loud assumption (bigger model / rising engagement), traced the evidence to the real issue (retrieval recall / retries masking failure), fixed or measured the right thing cheapest-first, and closed on an eval. That diagnostic discipline — not a flashy idea — is exactly what the interviewer is grading.</p>
  </div>

  <h2><span class="ix">7</span> Industry Case</h2>
  <div class="sub">The real systems these diagnostic cases are built from.</div>
  <h3>Perplexity, Harvey, and the metric that gets monetized</h3>
  <p>These cases aren't invented — they're the real bottlenecks of real products. The "fix the RAG" prompt is the exact lesson <strong>Perplexity</strong> and <strong>Harvey</strong> (Ch.1) learned: answer quality is capped by retrieval, not model fluency, and the fixes that matter are hybrid retrieval, reranking thresholds, and citations that turn a silent wrong answer into a verifiable one. An interviewer asking you to fix a RAG is asking you to re-derive what the best retrieval products already shipped.</p>
  <p>The metrics case is just as grounded. <strong>Intercom Fin</strong> prices on <em>resolution</em> (Ch.5), not messages handled, precisely because activity is not value — and <strong>Klarna's</strong> "handled two-thirds of chats" headline was an activity metric that masked a quality story that later forced a walk-back. A candidate who, shown a rosy engagement dashboard, asks "but what's the resolution rate and the repeat-inquiry rate?" is demonstrating the exact judgment that separates a real AI PM from someone reading a vanity chart.</p>
  <ul>
    <li><strong>Fix-it cases re-derive real fixes.</strong> Retrieval recall, reranking, citations — Perplexity and Harvey, restated as an interview.</li>
    <li><strong>Metrics cases test vanity-vs-value.</strong> Resolution over "handled," the lesson Intercom monetized and Klarna learned.</li>
    <li><strong>Diagnosis is the differentiator.</strong> Tracing evidence to the real box beats any confident guess.</li>
  </ul>
  <div class="callout accent">
    <div class="ch">The PM takeaway</div>
    <p>The "it's broken" and "is it working?" cases reward the same instinct: diagnose with evidence, fix the cheapest lever, measure the right thing. You've already studied the real products these prompts are drawn from — so trace the chain, reject the vanity number, and let the evidence, not the loudest assumption, lead.</p>
  </div>

  <h2><span class="ix">✓</span> Check Yourself</h2>
  <div class="quiz" data-correct="1">
    <div class="q">A RAG bot gives confident wrong answers. The room says "upgrade to a bigger model." Your move?</div>
    <div class="opt" data-i="0"><span class="l">A</span><span>Agree — bigger models are more accurate.</span></div>
    <div class="opt" data-i="1"><span class="l">B</span><span>Trace the chunk first — confident-but-wrong usually means a retrieval problem, fixable with hybrid retrieval, a threshold, and citations, not a model swap.</span></div>
    <div class="opt" data-i="2"><span class="l">C</span><span>Add more documents to the knowledge base at random.</span></div>
    <div class="opt" data-i="3"><span class="l">D</span><span>Remove the citations to reduce clutter.</span></div>
    <div class="qexp">"Confident but wrong" is the fingerprint of bad retrieval feeding the model almost-right chunks. Trace whether the right chunk was retrieved; fix recall and add a threshold plus citations (turning a silent failure loud). A bigger model spends the most to fix the wrong box.</div>
  </div>
  <div class="quiz" data-correct="2">
    <div class="q">A metrics-case dashboard shows engagement climbing. What do you ask for before declaring success?</div>
    <div class="opt" data-i="0"><span class="l">A</span><span>The marketing budget.</span></div>
    <div class="opt" data-i="1"><span class="l">B</span><span>Nothing — engagement up is always good.</span></div>
    <div class="opt" data-i="2"><span class="l">C</span><span>Resolution rate, repeat-inquiry rate, cost-per-task, and an eval-based quality score — because retries from wrong answers can inflate engagement.</span></div>
    <div class="opt" data-i="3"><span class="l">D</span><span>The number of features shipped.</span></div>
    <div class="qexp">Engagement is a vanity metric for AI products: rising sessions can mean users retrying after bad answers. The value metrics — resolution, repeat inquiries, cost-per-task, eval quality — tell you whether it's actually working or quietly getting worse.</div>
  </div>

  <h2><span class="ix">✎</span> Apply It Yourself</h2>
  <div class="sub">No worked answer this time — this one's your rep. Give it 10 minutes before you move on.</div>
  <div class="callout">
    <div class="ch">Your problem</div>
    <p style="font-family:var(--font-ui);font-weight:600;">"Two-part case. (A) 'Our RAG product gives confident wrong answers — fix it.' (B) 'Our dashboard shows engagement climbing — is the product working?' Diagnose both."</p>
  </div>
  <p><strong>Hints</strong> (peek only if you're stuck):</p>
  <ul>
    <li>A: trace the chunk; confident-wrong usually means retrieval, not the model.</li>
    <li>B: separate vanity (engagement) from value (resolution); retries inflate usage.</li>
    <li>The trap: 'upgrade the model' and 'engagement is up, we're winning.'</li>
  </ul>
  <table>
    <tr><th>A strong answer...</th><th>A weak answer...</th></tr>
    <tr><td>A: traces retrieval, fixes recall + threshold + citations.</td><td>Upgrades the model blindly.</td></tr>
    <tr><td>B: pulls resolution, repeat-inquiry, cost, and eval quality.</td><td>Celebrates rising engagement.</td></tr>
    <tr><td>Both: diagnoses with evidence before acting.</td><td>Trusts the loud assumption.</td></tr>
  </table>
  <div class="callout accent">
    <div class="ch">Make it live</div>
    <p>Run case A on a real RAG tool: ask it something it gets subtly wrong, then guess which box failed — retrieval or generation?</p>
  </div>

  <div class="callout good" style="margin-top:40px;">
    <div class="ch">Chapter 13 complete</div>
    <p>You now hold the AI PM case as a repeatable method: the five-step framework (13.1), the agent-design case by blast radius (13.2), and the diagnostic cases — fix-the-RAG and read-the-metrics — by tracing evidence (13.3). It's Chapters 1–12, deployable under pressure. Next, the finale: <strong>Chapter 14 — Portfolio &amp; Positioning for 2026 Roles</strong>, where reading becomes an offer.</p>
  </div>
  __NAV__
</div>
`