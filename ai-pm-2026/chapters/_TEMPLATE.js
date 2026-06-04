/* ============================================================================
   LESSON TEMPLATE — copy this block into chapters/chNN.js and fill it in.
   Replace N.Y with the lesson id (must match course_map.json).
   Keep ALL 7 numbered <h2> blocks, in this order. Keep at least one <div class="fig">
   (an SVG chart/diagram). End the content with the literal token  __NAV__.
   Do NOT use Markdown here — it is raw HTML inside a JS template literal (backticks).
   Available component classes are shown below; use them, don't invent new ones.
============================================================================ */

"N.Y": `
<div class="wrap">

  <!-- ===== HEADER ===== -->
  <div class="les-kicker">Chapter NN · Lesson N.Y</div>
  <h1 class="les-title">LESSON TITLE HERE</h1>
  <div class="les-meta">
    <span class="pill">DOMAIN TAG</span><span class="pill">~NN min read</span>
    <span class="pill">Prereq: ...</span><span class="pill">Difficulty: foundational | core | advanced</span>
  </div>
  <p class="motto">One sharp, slightly contrarian sentence that frames the whole lesson. This is the hook — make it memorable, not generic.</p>

  <p class="lead">Opening paragraph. State what the reader will be able to DO after this lesson, and tie it to this chapter's through_line (from course_map.json). 2–4 sentences. Use <em class="k">key term</em> for the one or two phrases worth highlighting.</p>

  <!-- ===== BLOCK 1: MANDATE ===== -->
  <h2><span class="ix">1</span> Your Mandate</h2>
  <div class="sub">What the AI PM is actually expected to own in this domain.</div>
  <p>Define the PM's ownership boundary. What they own vs what eng owns. Be specific and opinionated.</p>

  <!-- ===== BLOCK 2: RESPONSIBILITIES ===== -->
  <h2><span class="ix">2</span> Your Responsibilities</h2>
  <div class="sub">The concrete deliverables that land on your desk.</div>
  <table>
    <tr><th>You own</th><th>You do NOT own</th></tr>
    <tr><td><strong>...</strong> — ...</td><td>...</td></tr>
    <tr><td><strong>...</strong> — ...</td><td>...</td></tr>
  </table>

  <!-- ===== BLOCK 3: METRICS ===== -->
  <h2><span class="ix">3</span> Metrics That Matter Here</h2>
  <div class="sub">The scorecard for this domain — AI-specific, not vanity metrics.</div>
  <table>
    <tr><th>Metric</th><th>Reads as</th><th>Why a PM watches it</th></tr>
    <tr><td><strong>...</strong></td><td>...</td><td>...</td></tr>
  </table>
  <div class="callout warn">
    <div class="ch">The trap</div>
    <p>The common mistake teams make with these metrics, and how to avoid it.</p>
  </div>

  <!-- ===== BLOCK 4: HOW TO THINK (must contain at least one SVG figure) ===== -->
  <h2><span class="ix">4</span> How to Think Here</h2>
  <div class="sub">The mental model the PM runs every time they face this kind of question.</div>

  <div class="fig">
    <div class="fig-title">FIGURE TITLE (uppercase, short)</div>
    <svg viewBox="0 0 520 260" xmlns="http://www.w3.org/2000/svg" font-family="Hanken Grotesk, sans-serif">
      <!-- COLOR PALETTE (hardcode these hex values — they match the theme):
           ink #1d1d1f · accent #0071e3 · good #0a7d3c · warn #b25000 · mute #86868b · line #eee
           Build clean diagrams/charts. Keep stroke-width ~1.2–1.8. Label with <text font-size 9–13>.
           Examples to imitate live in chapters/ch01.js (triangle, funnel, bar, decision tree),
           ch02.js (loop, compounding curve, topology), ch03.js (exact-vs-ANN, embedding space, graph). -->
      <rect x="40" y="40" width="440" height="160" rx="10" fill="#fff" stroke="#eee"/>
      <text x="260" y="125" text-anchor="middle" font-size="13" fill="#86868b">replace with a real chart or diagram</text>
    </svg>
    <div class="fig-cap">One-sentence caption that states the takeaway the figure proves.</div>
  </div>

  <p>Explain the model. Often a numbered list of the mental steps works well:</p>
  <ol>
    <li><strong>Step.</strong> ...</li>
    <li><strong>Step.</strong> ...</li>
  </ol>
  <div class="callout accent">
    <div class="ch">Say this in the interview</div>
    <p>A line the reader can literally say in an interview to signal seniority.</p>
  </div>

  <!-- ===== BLOCK 5: FRAMEWORKS ===== -->
  <h2><span class="ix">5</span> Frameworks to Deploy</h2>
  <div class="sub">Named tools the reader can deploy by name — legible to engineers and interviewers.</div>
  <h3>① Framework name</h3>
  <p>What it is, when to use it.</p>
  <h3>② Framework name</h3>
  <p>What it is, when to use it.</p>
  <h3>③ Framework name</h3>
  <p>What it is, when to use it.</p>

  <!-- ===== BLOCK 6: WORKED SOLUTION ===== -->
  <h2><span class="ix">6</span> Worked Solution</h2>
  <div class="sub">A real prompt the reader will get — solved end to end, the way you'd whiteboard it.</div>
  <div class="callout">
    <div class="ch">The prompt</div>
    <p style="font-family:var(--font-ui);font-weight:600;">"A realistic interview / on-the-job prompt for this domain."</p>
  </div>
  <p><strong>Step 1 — ...</strong> ...</p>
  <p><strong>Step 2 — ...</strong> ...</p>
  <!-- A monospace flow diagram is great for pipelines/sequences: -->
  <div class="flow">
<span class="st">[Stage]</span> <span class="nt">note</span>
   <span class="ar">↓</span>
<span class="st">[Stage]</span> <span class="nt">note</span>
  </div>
  <p><strong>Step 3 — ...</strong> ...</p>
  <div class="callout good">
    <div class="ch">Why this wins</div>
    <p>Spell out exactly why this answer would impress an interviewer / work on the job.</p>
  </div>

  <!-- ===== BLOCK 7: INDUSTRY CASE (must be a REAL, current 2025–26 company) ===== -->
  <h2><span class="ix">7</span> Industry Case</h2>
  <div class="sub">Real company, real architecture/decision, real 2025–26 facts.</div>
  <h3>Company — one-line framing of why this case matters</h3>
  <p>Tell the real story. Ground every claim in something the company actually did/published. If you reconstruct internal reasoning, label it as a realistic reconstruction — never fabricate quotes or numbers. Keep any direct quote under 15 words.</p>
  <ul>
    <li><strong>Point 1.</strong> ...</li>
    <li><strong>Point 2.</strong> ...</li>
    <li><strong>Point 3.</strong> ...</li>
  </ul>
  <div class="callout accent">
    <div class="ch">The PM takeaway</div>
    <p>Tie the case back to the chapter through_line and the lesson's core skill.</p>
  </div>

  <!-- ===== CHECK YOURSELF: 1–2 quizzes ===== -->
  <h2><span class="ix">✓</span> Check Yourself</h2>
  <div class="quiz" data-correct="INDEX_OF_CORRECT_OPTION_0_BASED">
    <div class="q">Question text?</div>
    <div class="opt" data-i="0"><span class="l">A</span><span>Option A</span></div>
    <div class="opt" data-i="1"><span class="l">B</span><span>Option B</span></div>
    <div class="opt" data-i="2"><span class="l">C</span><span>Option C</span></div>
    <div class="opt" data-i="3"><span class="l">D</span><span>Option D</span></div>
    <div class="qexp">Explanation shown after answering. Reinforce the key insight; don't just say "correct".</div>
  </div>

  <!-- ===== APPLY IT YOURSELF (open problem, NO answer given) — every lesson ends with one rep ===== -->
  <h2><span class="ix">✎</span> Apply It Yourself</h2>
  <div class="sub">No worked answer this time — this one's your rep. Give it 10 minutes before you move on.</div>
  <div class="callout">
    <div class="ch">Your problem</div>
    <p style="font-family:var(--font-ui);font-weight:600;">"A realistic, current scenario the reader must solve using this lesson's skill. Reference a real product type / 2025–26 situation. End with a crisp ask: 'Map it / Decide X / Name the tradeoff.'"</p>
  </div>
  <p><strong>Hints</strong> (peek only if you're stuck):</p>
  <ul>
    <li>A nudge toward the right first move — not the answer.</li>
    <li>A reminder of which framework from this lesson applies.</li>
    <li>The trap to avoid (the obvious-but-wrong move).</li>
  </ul>
  <table>
    <tr><th>A strong answer...</th><th>A weak answer...</th></tr>
    <tr><td>Does the senior move this lesson taught (maps the system / names the tradeoff / scopes the blast radius / does the cost math).</td><td>Jumps to the obvious-but-wrong move (upgrade the model / add an agent / "use Pinecone").</td></tr>
    <tr><td>Defines a measurable success metric.</td><td>Stays vague ("make it better").</td></tr>
    <tr><td>States what it would sacrifice and why.</td><td>Pretends you can have everything.</td></tr>
  </table>
  <div class="callout accent">
    <div class="ch">Make it live</div>
    <p>Optional stretch grounded in the real world right now: e.g. "find a real 2026 product doing this and critique its choice," or "open v0/Claude and actually prototype the fallback you designed."</p>
  </div>

  <!-- LAST lesson of a chapter ONLY: order is Check Yourself → Apply It Yourself → completion callout → __NAV__ -->
  <!--
  <div class="callout good" style="margin-top:40px;">
    <div class="ch">Chapter NN complete</div>
    <p>Recap the chapter's through_line in one sentence, then name what Chapter NN+1 covers.</p>
  </div>
  -->

  __NAV__
</div>
`
