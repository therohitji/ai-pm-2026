/* ===== Chapter 08 lessons — AI PM by Rohit Swerashi =====
   One JS object entry per lesson: "N.Y": `<full lesson html>`
   Keep the 7-block structure. End each entry's content with __NAV__ (build injects nav). */

/* ---------------------------------------------------------------- 8.1 */
"8.1": `
<div class="wrap">
  <div class="les-kicker">Chapter 8 · Lesson 8.1</div>
  <h1 class="les-title">Talking to ML Engineers Without Faking It</h1>
  <div class="les-meta">
    <span class="pill">Cross-functional</span><span class="pill">~22 min read</span>
    <span class="pill">Prereq: Ch.1–3</span><span class="pill">Difficulty: core</span>
  </div>
  <p class="motto">The fastest way to lose an ML engineer's respect is to walk in with the answer. The fastest way to earn it is to walk in with the one question nobody had asked yet.</p>

  <p class="lead">You will often be the least technical person in the room — surrounded by engineers and researchers who can out-math you on any axis. Trying to bluff your way to credibility is the single most common way AI PMs lose it. This lesson flips the move: your currency isn't faked expertise, it's <em class="k">the right question</em> and a clear grip on the problem. By the end you'll know which questions earn an engineer's trust, which moves burn it, and how to hold a hard technical disagreement without faking or folding.</p>

  <h2><span class="ix">1</span> Your Mandate</h2>
  <div class="sub">What you own in a room full of people who know the tech better than you.</div>
  <p>Your mandate is to <strong>own the problem, the quality bar, and the tradeoff — never the implementation</strong>. You don't need to out-engineer the engineers; you need to out-<em>frame</em> them: bring the sharpest question, the clearest definition of "good enough," and the business call on which tradeoff to accept. Credibility in a technical room is not earned by knowing the answer — it's earned by <em class="k">asking the question that makes the answer obvious</em>, and by being honest about what you don't know.</p>

  <h2><span class="ix">2</span> Your Responsibilities</h2>
  <div class="sub">The moves that build trust — and the ones that quietly destroy it.</div>
  <table>
    <tr><th>Earns respect</th><th>Loses respect</th></tr>
    <tr><td><strong>Asking the right question</strong> — "is the bottleneck retrieval or generation?" (Ch.1)</td><td><strong>Prescribing the stack</strong> — "let's just use Pinecone and fine-tune"</td></tr>
    <tr><td><strong>Bringing the bar</strong> — "we need ≥90% with a citation; below that, fall back"</td><td><strong>Vague asks</strong> — "make it more accurate"</td></tr>
    <tr><td><strong>Owning the tradeoff</strong> — "we'll eat latency to protect quality here"</td><td><strong>Bluffing</strong> — name-dropping papers you didn't read</td></tr>
    <tr><td><strong>"What's one thing that would make your job easier?"</strong></td><td><strong>Assuming everything needs AI</strong> when a rule would do</td></tr>
  </table>
  <p>The pattern is the one from Chapter 1, applied to people: <strong>you own the what and the why; they own the how.</strong> Drift into prescribing the how and you're both overstepping and exposing how little you actually know about it. Stay in your lane and ask sharp questions across the line, and engineers will pull you <em>into</em> the hard decisions instead of routing around you.</p>

  <h2><span class="ix">3</span> Metrics That Matter Here</h2>
  <div class="sub">You can't put a number on trust, but you can read its signals.</div>
  <table>
    <tr><th>Signal</th><th>Reads as</th><th>Why it matters</th></tr>
    <tr><td><strong>Engineers bring you problems early</strong></td><td>They trust your judgment under uncertainty</td><td>Early problems are cheap; late ones are expensive</td></tr>
    <tr><td><strong>Tradeoff decisions move fast</strong></td><td>A shared frame, not posturing</td><td>Velocity comes from trust, not authority</td></tr>
    <tr><td><strong>Low spec rework</strong></td><td>You asked the right questions up front</td><td>Vague specs get rebuilt; clear ones ship</td></tr>
    <tr><td><strong>You're invited into technical debates</strong></td><td>They want your framing in the room</td><td>The ultimate credibility signal</td></tr>
  </table>
  <div class="callout warn">
    <div class="ch">The trap — mistaking jargon for credibility</div>
    <p>The instinct, when outgunned technically, is to <strong>sound</strong> technical — drop model names, cite a paper, talk about "the embedding space." Engineers detect a bluff instantly, and the moment they do, everything you say gets discounted. <strong>"I don't know — walk me through it" buys you more credibility than any term you half-understand.</strong> Curiosity reads as strength; fakery reads as weakness.</p>
  </div>

  <h2><span class="ix">4</span> How to Think Here</h2>
  <div class="sub">Know exactly where your lane ends and theirs begins — then talk across the line.</div>
  <div class="fig">
    <div class="fig-title">Stay in your lane — ask across it, don't cross it</div>
    <svg viewBox="0 0 520 250" xmlns="http://www.w3.org/2000/svg" font-family="Hanken Grotesk, sans-serif">
      <rect x="28" y="56" width="184" height="150" rx="12" fill="#0071e3" opacity="0.08" stroke="#0071e3" stroke-width="1.3"/>
      <text x="120" y="84" text-anchor="middle" font-size="13" font-weight="700" fill="#0058b0">YOU OWN</text>
      <text x="120" y="102" text-anchor="middle" font-size="10" fill="#0058b0">the question</text>
      <text x="52" y="132" font-size="11" fill="#1d1d1f">· the problem</text>
      <text x="52" y="153" font-size="11" fill="#1d1d1f">· the quality bar</text>
      <text x="52" y="174" font-size="11" fill="#1d1d1f">· the tradeoff to make</text>
      <text x="52" y="195" font-size="11" fill="#1d1d1f">· the priority</text>
      <rect x="308" y="56" width="184" height="150" rx="12" fill="#ffffff" stroke="#1d1d1f" stroke-width="1.3"/>
      <text x="400" y="84" text-anchor="middle" font-size="13" font-weight="700" fill="#1d1d1f">THEY OWN</text>
      <text x="400" y="102" text-anchor="middle" font-size="10" fill="#86868b">the answer</text>
      <text x="332" y="142" font-size="11" fill="#1d1d1f">· the model</text>
      <text x="332" y="163" font-size="11" fill="#1d1d1f">· the stack</text>
      <text x="332" y="184" font-size="11" fill="#1d1d1f">· the implementation</text>
      <line x1="214" y1="138" x2="306" y2="138" stroke="#0a7d3c" stroke-width="1.7" marker-start="url(#c81s)" marker-end="url(#c81e)"/>
      <text x="260" y="128" text-anchor="middle" font-size="9.5" font-weight="700" fill="#0a7d3c">the right question</text>
      <defs>
        <marker id="c81e" markerWidth="8" markerHeight="8" refX="6" refY="3" orient="auto"><path d="M0,0 L6,3 L0,6 Z" fill="#0a7d3c"/></marker>
        <marker id="c81s" markerWidth="8" markerHeight="8" refX="2" refY="3" orient="auto"><path d="M6,0 L0,3 L6,6 Z" fill="#0a7d3c"/></marker>
      </defs>
    </svg>
    <div class="fig-cap">You own the question; the engineer owns the answer. Credibility is asking sharp questions across the line. Cross it — by prescribing the stack or faking expertise — and you lose them.</div>
  </div>
  <p>In any technical conversation, run this loop:</p>
  <ol>
    <li><strong>Bring the problem and the bar, not the solution.</strong> "Users need answers they can trust to ≥90%," not "use a reranker."</li>
    <li><strong>Ask about the bottleneck.</strong> The Ch.1–3 questions: recall, eval score, latency tail, where it breaks. These signal you understand the system without claiming to build it.</li>
    <li><strong>Never prescribe the stack.</strong> The tools are their call. Prescribing them is overstepping <em>and</em> exposing your shallow end.</li>
    <li><strong>Don't bluff.</strong> "I don't know that — explain it to me" beats a confident wrong term every time.</li>
    <li><strong>In a disagreement, find the shared frame</strong> — the differently-shaped problem underneath (block 7).</li>
  </ol>
  <div class="callout accent">
    <div class="ch">Say this to an engineer</div>
    <p>"I'm not going to tell you which model or database to use — that's your call. What I need to lock is the quality bar and the failure behavior. So: where does this break first, and what would it take to get retrieval recall where we need it?"</p>
  </div>

  <h2><span class="ix">5</span> Frameworks to Deploy</h2>
  <div class="sub">Three habits that make you the PM engineers actually want in the room.</div>
  <h3>① The right-question toolkit</h3>
  <p>Keep the Ch.1–3 questions loaded: <em class="k">"Is the bottleneck retrieval or the model?" "What's our recall@k / eval score?" "What's the p95, not the average?" "Is this a feature the next model gives us free?"</em> You're not claiming the answers — you're proving you understand the shape of the system, which is exactly what earns a technical room's trust.</p>
  <h3>② Bring the problem, not the prescription</h3>
  <p>Show up with a crisp problem, a measurable bar, and the tradeoff you're willing to make — and leave the <em>how</em> open. Engineers respect a PM who hands them a well-framed problem and trusts them to solve it; they resent one who hands them a half-baked solution and calls it a requirement.</p>
  <h3>③ Disagree on the frame, not the person</h3>
  <p>When you and an engineer clash, don't argue tech you don't own and don't pull rank. Ask what problem each of you is actually optimizing for. Most "disagreements" dissolve once you find that the two sides are solving differently-shaped problems — the move you'll see two world-class teams make in the case below.</p>

  <h2><span class="ix">6</span> Worked Solution</h2>
  <div class="sub">The "it's not feasible" standoff — handled without faking or steamrolling.</div>
  <div class="callout">
    <div class="ch">The prompt</div>
    <p style="font-family:var(--font-ui);font-weight:600;">"An ML engineer pushes back hard on your feature: 'this isn't technically feasible.' You suspect it's more 'hard' than 'impossible.' How do you run the conversation without faking expertise or steamrolling?"</p>
  </div>
  <p><strong>Step 1 — Don't argue the tech; interrogate the claim.</strong> I won't pretend to know the architecture better than they do, and I won't overrule them. I'll ask precise questions that separate a real wall from an expensive hill.</p>
  <div class="flow">
<span class="st">DON'T</span>        <span class="nt">argue tech you don't own · fake certainty · pull rank</span>
   <span class="ar">↓ instead</span>
<span class="st">ASK</span>          <span class="nt">"what exactly is the blocker — retrieval, latency, or data?"</span>
<span class="st">SEPARATE</span>     <span class="nt">"is it impossible, or expensive and slow?" — very different answers</span>
<span class="st">BRING THE BAR</span> <span class="nt">"does it need 95%, or is 85% with a fallback acceptable?"</span>
<span class="st">CLOSE</span>        <span class="nt">"what's one thing that would make this feasible?"</span>
  </div>
  <p><strong>Step 2 — Separate impossible from costly.</strong> Nine times in ten, "not feasible" means "not feasible at the quality/latency/cost I assume you want." Surfacing that turns a dead end into a tradeoff conversation — which is my lane.</p>
  <p><strong>Step 3 — Move the bar, not the engineer.</strong> If the blocker is hitting 95% accuracy, I own that number — maybe 85% plus a human-in-the-loop fallback (Ch.2) is fine for v1. I'm not changing their architecture; I'm changing the requirement, which is mine to change.</p>
  <p><strong>Step 4 — Close on their terms.</strong> "What's one thing that would make this feasible?" hands them the solution space and signals I'm here to unblock, not to win. Often they'll propose the scoped-down version themselves.</p>
  <div class="callout good">
    <div class="ch">Why this wins</div>
    <p>You never faked knowledge or pulled rank. You used sharp questions to convert "impossible" into a tradeoff, moved the one thing you own (the bar), and let the engineer own the solution. That's how a PM disagrees productively — and gets invited to the next hard decision instead of worked around.</p>
  </div>

  <h2><span class="ix">7</span> Industry Case</h2>
  <div class="sub">Two elite teams disagreeing in public — and the senior move neither faked.</div>
  <h3>Cognition vs Anthropic — how to hold a technical disagreement well</h3>
  <p>In mid-June 2025, within about a day of each other, two of the best agent teams alive published seemingly opposite advice. Cognition (makers of the Devin coding agent) wrote <em>"Don't Build Multi-Agents,"</em> arguing parallel sub-agents are fragile because of context isolation. The next day Anthropic published <em>"How we built our multi-agent research system,"</em> reporting a large performance gain from exactly that architecture. The internet read it as a fight and rushed to pick a winner.</p>
  <p>The senior move — the one this lesson is about — was what the thoughtful readers did instead: they didn't pick a side or fake certainty about whose benchmarks were "right." They asked the framing question: <strong>what problem is each team actually solving?</strong> Cognition builds a <em>coding</em> agent (a coherence task, where context isolation is poison); Anthropic built a <em>research</em> agent (a breadth task, where parallel contexts are the unlock). Both were correct — for differently-shaped problems (Ch.2.2). The disagreement dissolved the moment you found the shared frame.</p>
  <ul>
    <li><strong>Picking a side was the junior move.</strong> The credible response wasn't "Anthropic is right" — it was "right for what kind of task?"</li>
    <li><strong>Nobody faked the tech.</strong> You didn't need to out-engineer either team; you needed the question that revealed they weren't actually in conflict.</li>
    <li><strong>This is exactly the PM's job in an eng disagreement.</strong> Find the differently-shaped problem under the clash, and you resolve it without bluffing or steamrolling.</li>
  </ul>
  <div class="callout accent">
    <div class="ch">The PM takeaway</div>
    <p>Credibility with engineers comes from asking the right question, not pretending to know the answer. When even two frontier teams "disagree," the move that earns respect is to find the frame that makes both right — not to fake a verdict. Be the person who asks that question, and you become the person they want in the room.</p>
  </div>

  <h2><span class="ix">✓</span> Check Yourself</h2>
  <div class="quiz" data-correct="2">
    <div class="q">You're in a design review and don't understand a retrieval technique the engineer just described. Best move?</div>
    <div class="opt" data-i="0"><span class="l">A</span><span>Nod along and look it up later so you don't seem uninformed.</span></div>
    <div class="opt" data-i="1"><span class="l">B</span><span>Suggest a specific vector database to sound technical.</span></div>
    <div class="opt" data-i="2"><span class="l">C</span><span>Say "I don't know that one — walk me through it," then ask how it affects recall and latency.</span></div>
    <div class="opt" data-i="3"><span class="l">D</span><span>Change the subject to the timeline.</span></div>
    <div class="qexp">Honest curiosity earns credibility; bluffing destroys it the instant it's detected. Asking to be walked through it — then connecting it to a metric you do own (recall, latency) — shows you understand the system's shape without faking expertise.</div>
  </div>
  <div class="quiz" data-correct="0">
    <div class="q">An engineer says your feature is "not technically feasible." What's the most productive first response?</div>
    <div class="opt" data-i="0"><span class="l">A</span><span>"What exactly is the blocker — and is it impossible, or expensive and slow?"</span></div>
    <div class="opt" data-i="1"><span class="l">B</span><span>"I think it's feasible, let's just try harder."</span></div>
    <div class="opt" data-i="2"><span class="l">C</span><span>"Fine, we'll cut it from the roadmap."</span></div>
    <div class="opt" data-i="3"><span class="l">D</span><span>"Let me tell you how to architect it."</span></div>
    <div class="qexp">"Not feasible" usually means "not feasible at the quality, latency, or cost I assume you want." A precise question separates a true wall from a tradeoff — and the tradeoff (e.g., moving the quality bar) is exactly what you own. B steamrolls, C surrenders, D oversteps into their lane.</div>
  </div>

  <h2><span class="ix">✎</span> Apply It Yourself</h2>
  <div class="sub">No worked answer this time — this one's your rep. Give it 10 minutes before you move on.</div>
  <div class="callout">
    <div class="ch">Your problem</div>
    <p style="font-family:var(--font-ui);font-weight:600;">"In a design review, an ML engineer says your feature 'isn't technically feasible.' You suspect it's more 'hard' than 'impossible.' Script your next three sentences — without faking expertise or pulling rank."</p>
  </div>
  <p><strong>Hints</strong> (peek only if you're stuck):</p>
  <ul>
    <li>Don't argue the tech you don't own; ask a sharp diagnostic question.</li>
    <li>Separate 'impossible' from 'expensive/slow'; bring the quality bar you DO own.</li>
    <li>The trap: prescribing the architecture, or steamrolling with authority.</li>
  </ul>
  <table>
    <tr><th>A strong answer...</th><th>A weak answer...</th></tr>
    <tr><td>Asks what exactly blocks it; separates impossible from costly; offers to move the bar.</td><td>Argues the tech or pulls rank.</td></tr>
    <tr><td>Owns the requirement (e.g. 85% + fallback instead of 95%).</td><td>Insists 'just make it work.'</td></tr>
    <tr><td>Closes with 'what's one thing that would make this feasible?'</td><td>Cuts it or overrides the engineer.</td></tr>
  </table>
  <div class="callout accent">
    <div class="ch">Make it live</div>
    <p>Next time you don't understand something technical, try 'I don't know that — walk me through it.' Watch whether it builds or costs credibility.</p>
  </div>

  <div class="callout good" style="margin-top:40px;">
    <div class="ch">Chapter 8 complete</div>
    <p>You can now earn credibility in a room of people more technical than you — by owning the problem, the bar, and the tradeoff, asking the Ch.1–3 questions that prove you understand the system, never faking or prescribing, and resolving disagreements by finding the shared frame. Next, <strong>Chapter 9 — Prototyping &amp; Vibe Coding</strong>: how a PM ships a working demo in a day and wins arguments slides never could.</p>
  </div>
  __NAV__
</div>
`