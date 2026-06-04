/* ===== Chapter 00 — Start Here (Introduction) — AI PM by Rohit Swerashi =====
   The welcome / how-to-use page. NOT a 7-block teaching lesson: no quizzes, no Apply block.
   Reuses the shared components. Ends with __NAV__. */

"0.1": `
<div class="wrap">
  <div class="les-kicker">Start Here · Read This First</div>
  <h1 class="les-title">This Isn't a Course. It's How the Job Is Done.</h1>
  <div class="les-meta">
    <span class="pill">A practical field guide</span><span class="pill">by Rohit Swerashi</span>
    <span class="pill">Founder, GeniOS</span><span class="pill">~8 min</span>
  </div>
  <p class="motto">Most "AI PM" material teaches you to talk about AI. This teaches you to do the work — map the system, find the bottleneck, ship the proof. Read it like a practitioner, not a student.</p>

  <p class="lead">Welcome. This is a practical guide to AI product management in 2026, written by <strong>Rohit Swerashi</strong> — Founder of <strong>GeniOS</strong> — from how the job is actually done, not from a syllabus. It won't make you sound clever at a dinner party. It will make you able to <em class="k">walk into a real AI PM problem, attempt it, and know whether you nailed it</em> — and then prove it to the people who hire. Five minutes here makes the next forty-five lessons pay off. Here's how to use it.</p>

  <h2><span class="ix">1</span> What This Is — and What It Isn't</h2>
  <div class="sub">Set the right expectation before you read a word of Chapter 1.</div>
  <p>This is a field guide, not a textbook. It's the distilled judgment of someone building AI products — the decisions you actually own, the traps that actually sink products, and the moves that actually get people hired in 2026. It is opinionated on purpose: it gives you the answer, then the reasoning, instead of ten options and a shrug.</p>
  <table>
    <tr><th>What this is</th><th>What it isn't</th></tr>
    <tr><td>A field guide to the decisions an AI PM actually makes</td><td>A theory textbook or a glossary of AI terms</td></tr>
    <tr><td>Built on real 2025–26 products — how they won, and how they broke</td><td>Abstract frameworks with nothing at stake</td></tr>
    <tr><td>A gym: every lesson ends with a rep <em>you</em> attempt</td><td>A lecture you watch go by</td></tr>
    <tr><td>Opinionated — the senior move, said plainly</td><td>"It depends," endlessly hedged</td></tr>
  </table>
  <p>One promise and one warning: if you read it actively, you will be able to do the job. If you only read it, it will have failed. The point is to change what you can <strong>do</strong>, not what you can recite.</p>

  <h2><span class="ix">2</span> How to Read It</h2>
  <div class="sub">The shape of the guide, and the order to move through it.</div>
  <p>There are fifteen chapters and forty-five lessons, plus this one. They build in three arcs:</p>
  <ul>
    <li><strong>Chapters 1–3 — the technical spine.</strong> System design, agents, and the data structures under AI. Read these <em class="k">first and in order</em>; everything later leans on them.</li>
    <li><strong>Chapters 4–12 — the craft.</strong> Research, metrics, planning, PRDs, communication, prototyping, prompting, improvement loops, and honest go-to-market.</li>
    <li><strong>Chapters 13–15 — turning it into a job.</strong> Case interviews, your portfolio, and a Case Lab of ten real products torn down so you practice on reality.</li>
  </ul>
  <p>Every lesson follows the same shape, so you can skim or go deep: a one-line <strong>motto</strong>, your <strong>mandate</strong> (what you own vs what engineering owns), the <strong>metrics</strong> that matter, a <strong>way to think</strong> with a diagram, named <strong>frameworks</strong>, a <strong>worked solution</strong>, and a real <strong>industry case</strong>. Each chapter has one <em class="k">through-line</em> — a single argument every lesson reinforces. Hold the through-line and the details stick.</p>

  <h2><span class="ix">3</span> How to Act On It</h2>
  <div class="sub">Reading is recognition. Acting is skill. The rep is the difference.</div>
  <p>Every lesson ends with <strong>Apply It Yourself</strong> — an unsolved problem, a few hints, and a self-scoring rubric, with <em>no answer given</em>. That is the rep. Spend ten minutes on it before you move on, and grade yourself honestly against the rubric. The "Make it live" prompt pushes you further — critique a real product, or open a tool and build the thing. Do the reps and this stops being something you read and becomes something you can do.</p>
  <div class="fig">
    <div class="fig-title">How to use this guide</div>
    <svg viewBox="0 0 520 160" xmlns="http://www.w3.org/2000/svg" font-family="Hanken Grotesk, sans-serif">
      <rect x="12" y="48" width="88" height="64" rx="10" fill="#ffffff" stroke="#1d1d1f" stroke-width="1.2"/>
      <text x="56" y="76" text-anchor="middle" font-size="12" font-weight="700" fill="#1d1d1f">Read</text>
      <text x="56" y="92" text-anchor="middle" font-size="8.5" fill="#86868b">the lesson</text>
      <rect x="114" y="48" width="88" height="64" rx="10" fill="#0071e3" opacity="0.10" stroke="#0071e3" stroke-width="1.3"/>
      <text x="158" y="76" text-anchor="middle" font-size="12" font-weight="700" fill="#0058b0">Apply</text>
      <text x="158" y="92" text-anchor="middle" font-size="8.5" fill="#0058b0">the rep</text>
      <rect x="216" y="48" width="88" height="64" rx="10" fill="#0071e3" opacity="0.10" stroke="#0071e3" stroke-width="1.3"/>
      <text x="260" y="76" text-anchor="middle" font-size="12" font-weight="700" fill="#0058b0">Build</text>
      <text x="260" y="92" text-anchor="middle" font-size="8.5" fill="#0058b0">an artifact</text>
      <rect x="318" y="48" width="88" height="64" rx="10" fill="#0a7d3c" opacity="0.10" stroke="#0a7d3c" stroke-width="1.3"/>
      <text x="362" y="76" text-anchor="middle" font-size="12" font-weight="700" fill="#0a7d3c">Showcase</text>
      <text x="362" y="92" text-anchor="middle" font-size="8.5" fill="#0a7d3c">post it</text>
      <rect x="420" y="48" width="88" height="64" rx="10" fill="#0a7d3c" opacity="0.10" stroke="#0a7d3c" stroke-width="1.3"/>
      <text x="464" y="76" text-anchor="middle" font-size="12" font-weight="700" fill="#0a7d3c">Land</text>
      <text x="464" y="92" text-anchor="middle" font-size="8.5" fill="#0a7d3c">the role</text>
      <line x1="100" y1="80" x2="114" y2="80" stroke="#86868b" stroke-width="1.4" marker-end="url(#a00)"/>
      <line x1="202" y1="80" x2="216" y2="80" stroke="#86868b" stroke-width="1.4" marker-end="url(#a00)"/>
      <line x1="304" y1="80" x2="318" y2="80" stroke="#86868b" stroke-width="1.4" marker-end="url(#a00)"/>
      <line x1="406" y1="80" x2="420" y2="80" stroke="#86868b" stroke-width="1.4" marker-end="url(#a00)"/>
      <text x="260" y="138" text-anchor="middle" font-size="9.5" fill="#86868b">every rep can become a post, and every post an opening — it compounds</text>
      <defs><marker id="a00" markerWidth="8" markerHeight="8" refX="6" refY="3" orient="auto"><path d="M0,0 L6,3 L0,6 Z" fill="#86868b"/></marker></defs>
    </svg>
    <div class="fig-cap">Read, do the rep, build something real, show it, land the opportunity. The middle three are where almost everyone stops — and exactly where the edge is.</div>
  </div>

  <h2><span class="ix">4</span> How to Showcase It — LinkedIn &amp; X</h2>
  <div class="sub">Turn private practice into public proof. This is where reading becomes a reputation.</div>
  <p>The 2026 market does not reward what you've read; it rewards what you've <em>built and can reason about</em>. So make your reps visible — every one is potential content:</p>
  <ul>
    <li><strong>Post your teardowns.</strong> Take a product you use, run the Case Lab's six-part teardown on it, and publish it. "Here's how I'd fix [product]'s retrieval" is a recruiter magnet.</li>
    <li><strong>Show the artifact.</strong> When you build the prototype from Chapter 14, post the link with a short teardown — the system map, the bottleneck, the tradeoff. <em class="k">"Here's what I built" beats "here's what I'd do."</em></li>
    <li><strong>Build in public.</strong> Document the 30-day plan as you do it — one short post per milestone. The journey itself is the content.</li>
    <li><strong>Match the platform.</strong> On <strong>X</strong>, punchy threads — one framework, one figure, one sharp take. On <strong>LinkedIn</strong>, the same with the business angle and a clear "what I learned / what I'd do."</li>
  </ul>
  <div class="callout accent">
    <div class="ch">A post you could write today</div>
    <p>"I mapped [a product you use] as boxes-and-arrows and found its real bottleneck isn't the model — it's retrieval. Here's the teardown 🧵" — then walk the five-step framework from Chapter 13. You've just turned Lesson 1.1 into visible proof that you can do the job.</p>
  </div>

  <h2><span class="ix">5</span> How to Turn It Into Opportunities — for You and for Others</h2>
  <div class="sub">The payoff: a role, a network, and people you lifted on the way.</div>
  <p>The path from "finished the guide" to "have an offer" is concrete, and it's laid out in Chapter 14: build one real artifact, reposition yourself around proof instead of pedigree, and <strong>lead every application and message with the link</strong>, not your title. Showcasing your work in public flips the funnel — recruiters and founders start finding <em>you</em>. The 30-day plan in Lesson 14.3 is the literal week-by-week.</p>
  <p>And take others with you. Teaching is the fastest way to master a thing <em>and</em> the fastest way to grow a network: share a teardown, run a mock case with a peer, give honest feedback on someone's artifact, point a friend to this guide. The AI PM world in 2026 is small and reputation-driven — the people who help others are the ones who get pulled into the best rooms. Generosity compounds the same way the reps do.</p>

  <div class="callout good">
    <div class="ch">Your first move</div>
    <p>Don't bookmark this and "get to it later." Hit <strong>Next</strong>, read Lesson 1.1, and do its Apply It Yourself rep before you close the tab. One rep today beats a week of intending to start. Turn the page — the work begins.</p>
  </div>
  __NAV__
</div>
`
