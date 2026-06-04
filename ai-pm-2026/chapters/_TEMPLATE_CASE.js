/* ============================================================================
   CASE TEMPLATE (Chapter 15 — The Case Lab). Copy this block into chapters/ch15.js.
   This is NOT the 7-block teaching template — it is the 6-part case format:
     1 The Product · 2 Problem Statement · 3 How It Was Solved (+ SVG) ·
     4 Learnings · 5 What You'd Execute · 6 What You'd Do Differently
   Then a "Your move" accent callout. NO MCQ quiz. End with __NAV__.
   HARD RULE: every fact must be web-verified. No invented numbers/quotes.
   Keep any direct quote under 15 words. Raw HTML in backticks — no Markdown,
   no unescaped backtick, no ${...}; use &amp; for literal ampersands in text.
   Give each case's SVG <marker> a UNIQUE id (e.g. a15Y) to avoid collisions.
============================================================================ */

"15.Y": `
<div class="wrap">
  <div class="les-kicker">Chapter 15 · Case 15.Y</div>
  <h1 class="les-title">PRODUCT NAME</h1>
  <div class="les-meta">
    <span class="pill">Category</span><span class="pill">Stage / traction</span>
    <span class="pill">~12 min</span><span class="pill">Study: THE ONE LESSON</span>
  </div>
  <p class="motto">A one-line, slightly contrarian framing of what this product really teaches an AI PM.</p>

  <h2><span class="ix">1</span> The Product</h2>
  <div class="sub">What it is + how it showed up.</div>
  <p>One short paragraph: what it does, who it's for, its launch context. Verified facts only.</p>

  <h2><span class="ix">2</span> Problem Statement</h2>
  <div class="sub">The real user problem.</div>
  <p>Name the specific workflow and why it hurt — not generic "people wanted X".</p>

  <h2><span class="ix">3</span> How It Was Solved</h2>
  <div class="sub">The actual product + AI approach.</div>
  <p>Describe the real approach; map it to Ch.1–3 architecture where relevant.</p>
  <div class="fig">
    <div class="fig-title">PROBLEM → SOLUTION → OUTCOME</div>
    <svg viewBox="0 0 520 150" xmlns="http://www.w3.org/2000/svg" font-family="Hanken Grotesk, sans-serif">
      <rect x="20" y="45" width="140" height="60" rx="10" fill="#fff" stroke="#b25000" stroke-width="1.4"/>
      <text x="90" y="72" text-anchor="middle" font-size="11" font-weight="700" fill="#b25000">PROBLEM</text>
      <text x="90" y="90" text-anchor="middle" font-size="9" fill="#86868b">the pain</text>
      <rect x="190" y="45" width="140" height="60" rx="10" fill="#0071e3" opacity="0.1" stroke="#0071e3" stroke-width="1.4"/>
      <text x="260" y="72" text-anchor="middle" font-size="11" font-weight="700" fill="#0058b0">SOLUTION</text>
      <text x="260" y="90" text-anchor="middle" font-size="9" fill="#0058b0">the bet</text>
      <rect x="360" y="45" width="140" height="60" rx="10" fill="#fff" stroke="#0a7d3c" stroke-width="1.4"/>
      <text x="430" y="72" text-anchor="middle" font-size="11" font-weight="700" fill="#0a7d3c">OUTCOME</text>
      <text x="430" y="90" text-anchor="middle" font-size="9" fill="#86868b">verified result</text>
      <line x1="160" y1="75" x2="188" y2="75" stroke="#86868b" stroke-width="1.4" marker-end="url(#a15Y)"/>
      <line x1="330" y1="75" x2="358" y2="75" stroke="#86868b" stroke-width="1.4" marker-end="url(#a15Y)"/>
      <defs><marker id="a15Y" markerWidth="8" markerHeight="8" refX="6" refY="3" orient="auto"><path d="M0,0 L6,3 L0,6 Z" fill="#86868b"/></marker></defs>
    </svg>
    <div class="fig-cap">Replace labels with the real problem, bet, and verified outcome for THIS product.</div>
  </div>

  <h2><span class="ix">4</span> Learnings</h2>
  <div class="sub">What an AI PM takes away.</div>
  <ul>
    <li><strong>Principle.</strong> The transferable lesson, tied to a course framework.</li>
  </ul>

  <h2><span class="ix">5</span> What You'd Execute</h2>
  <div class="sub">If you owned it now.</div>
  <p>Concrete, opinionated, sequenced moves — not "you could consider".</p>

  <h2><span class="ix">6</span> What You'd Do Differently / What Could Be Better</h2>
  <div class="sub">Honest critique + improvements.</div>
  <p>Name a real weakness or risk and a specific fix, applying a framework.</p>

  <div class="callout accent">
    <div class="ch">Your move</div>
    <p>A one-line challenge prompting the reader to apply a framework themselves.</p>
  </div>
  __NAV__
</div>
`
