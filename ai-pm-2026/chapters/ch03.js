/* ===== Chapter 03 lessons — AI PM by Rohit Swerashi =====
   One JS object entry per lesson: "N.Y": `<full lesson html>`
   Keep the 7-block structure. End each entry's content with __NAV__ (build injects nav). */

/* ---------------------------------------------------------------- 3.1 */
"3.1": `
<div class="wrap">
  <div class="les-kicker">Chapter 3 · Lesson 3.1</div>
  <h1 class="les-title">Search &amp; Sort — Why Vector DBs Use Approximate, Not Exact</h1>
  <div class="les-meta">
    <span class="pill">Under the hood</span><span class="pill">~22 min read</span>
    <span class="pill">Prereq: Ch.1 (RAG)</span><span class="pill">Difficulty: foundational</span>
  </div>
  <p class="motto">You don't need to code a search algorithm. You need to know one thing it does that will surprise your users: at scale, AI search deliberately doesn't look at everything — and that's a feature, not a bug.</p>

  <p class="lead">This chapter is the "smart sense" of DSA — searching, sorting, data structures — for a PM. Not so you can implement them, but because each one is a <strong>tradeoff that becomes a product behavior</strong>. That's the chapter's whole argument. We start with the one that explains the most confusing thing about RAG: why search sometimes "misses" an obvious document, and why that's by design.</p>

  <h2><span class="ix">1</span> Your Mandate</h2>
  <div class="sub">Why a PM needs to understand search at all.</div>
  <p>Your mandate is to <strong>set the right expectations and debug "misses" without blaming the model.</strong> When a stakeholder says "the AI didn't find a document that's clearly in our system, it's broken" — you need to know whether that's a real bug or the expected cost of fast search. Getting this wrong means you either chase phantom bugs or dismiss real ones.</p>

  <h2><span class="ix">2</span> Your Responsibilities</h2>
  <div class="sub">Two ways to search — and why products almost always pick the "worse" one.</div>
  <table>
    <tr><th></th><th>Exact search</th><th>Approximate (ANN)</th></tr>
    <tr><td><strong>What it does</strong></td><td>Compares the query to every item</td><td>Cleverly checks only a promising subset</td></tr>
    <tr><td><strong>Accuracy</strong></td><td>Always finds the true closest match</td><td>Usually finds it — occasionally misses</td></tr>
    <tr><td><strong>Speed at scale</strong></td><td>Slow — grows with the dataset</td><td>Fast — stays quick even at billions of items</td></tr>
    <tr><td><strong>Used by</strong></td><td>Tiny datasets</td><td>Essentially every real RAG product</td></tr>
  </table>
  <p>ANN = <em class="k">Approximate Nearest Neighbor</em>. Real products choose it because exact search over millions of documents per query would be too slow and expensive to ship. They <strong>trade a small amount of recall for a massive amount of speed.</strong> That trade is a product decision — and it's why search occasionally misses.</p>

  <h2><span class="ix">3</span> Metrics That Matter Here</h2>
  <table>
    <tr><th>Metric</th><th>Reads as</th><th>Why you watch it</th></tr>
    <tr><td><strong>Recall@k</strong></td><td>How often the right item is in the top-k returned</td><td>Directly measures "misses" (and caps answer quality — Ch.1)</td></tr>
    <tr><td><strong>Query latency</strong></td><td>Time to return results</td><td>The speed you bought by going approximate</td></tr>
    <tr><td><strong>Index build cost/time</strong></td><td>Cost to make data searchable</td><td>Big indexes are expensive to build and refresh</td></tr>
  </table>

  <h2><span class="ix">4</span> How to Think Here</h2>
  <div class="sub">Exact scans everything; approximate navigates to the right neighborhood.</div>
  <div class="fig">
    <div class="fig-title">Exact vs Approximate search</div>
    <svg viewBox="0 0 520 260" xmlns="http://www.w3.org/2000/svg" font-family="Hanken Grotesk, sans-serif">
      <text x="130" y="20" text-anchor="middle" font-size="11" font-weight="800" fill="#b25000">EXACT · check every point</text>
      <circle cx="60" cy="60" r="3" fill="#b25000"/><circle cx="100" cy="90" r="3" fill="#b25000"/><circle cx="150" cy="55" r="3" fill="#b25000"/><circle cx="190" cy="100" r="3" fill="#b25000"/><circle cx="70" cy="140" r="3" fill="#b25000"/><circle cx="120" cy="170" r="3" fill="#b25000"/><circle cx="180" cy="150" r="3" fill="#b25000"/><circle cx="90" cy="200" r="3" fill="#b25000"/><circle cx="160" cy="200" r="3" fill="#b25000"/>
      <g stroke="#b25000" stroke-width="0.7" opacity="0.5"><line x1="125" y1="125" x2="60" y2="60"/><line x1="125" y1="125" x2="100" y2="90"/><line x1="125" y1="125" x2="150" y2="55"/><line x1="125" y1="125" x2="190" y2="100"/><line x1="125" y1="125" x2="70" y2="140"/><line x1="125" y1="125" x2="120" y2="170"/><line x1="125" y1="125" x2="180" y2="150"/><line x1="125" y1="125" x2="90" y2="200"/><line x1="125" y1="125" x2="160" y2="200"/></g>
      <circle cx="125" cy="125" r="5" fill="#1d1d1f"/><text x="125" y="235" text-anchor="middle" font-size="10" fill="#b25000">accurate but O(n) — slow at scale</text>

      <line x1="270" y1="28" x2="270" y2="240" stroke="#ddd"/>

      <text x="395" y="20" text-anchor="middle" font-size="11" font-weight="800" fill="#0a7d3c">APPROXIMATE · jump to the neighborhood</text>
      <circle cx="320" cy="60" r="3" fill="#bbb"/><circle cx="360" cy="90" r="3" fill="#bbb"/><circle cx="470" cy="55" r="3" fill="#bbb"/><circle cx="330" cy="200" r="3" fill="#bbb"/><circle cx="460" cy="190" r="3" fill="#bbb"/>
      <ellipse cx="400" cy="130" rx="56" ry="46" fill="#0071e3" opacity="0.10" stroke="#0071e3" stroke-dasharray="4 3"/>
      <circle cx="385" cy="120" r="3" fill="#0a7d3c"/><circle cx="415" cy="140" r="3" fill="#0a7d3c"/><circle cx="400" cy="155" r="3" fill="#0a7d3c"/><circle cx="420" cy="110" r="3" fill="#0a7d3c"/>
      <circle cx="400" cy="130" r="5" fill="#1d1d1f"/>
      <path d="M300,40 Q360,80 388,118" fill="none" stroke="#0a7d3c" stroke-width="1.4" marker-end="url(#ar3)"/>
      <text x="395" y="235" text-anchor="middle" font-size="10" fill="#0a7d3c">fast — but may skip a far-off true match</text>
      <defs><marker id="ar3" markerWidth="8" markerHeight="8" refX="6" refY="3" orient="auto"><path d="M0,0 L6,3 L0,6 Z" fill="#0a7d3c"/></marker></defs>
    </svg>
    <div class="fig-cap">Approximate search navigates straight to a promising region and searches there. It's why retrieval is fast — and why it can occasionally miss a relevant doc sitting outside that region.</div>
  </div>
  <p>The mental model: exact search is reading every page of a library to find one book; approximate search is going straight to the right shelf. The shelf method is enormously faster and almost always right — but if a book was mis-shelved, you'll walk past it. <strong>That "walk past" is the occasional miss your users will report.</strong></p>

  <h2><span class="ix">5</span> Frameworks to Deploy</h2>
  <h3>① The recall knob is a product dial</h3>
  <p>Approximate search has a tunable setting: search a wider neighborhood → higher recall, slower and pricier; narrower → faster, cheaper, more misses. <strong>Where you set it is a product call you own</strong>, not an engineering default. High-stakes search (legal, medical) → turn recall up and eat the latency. Casual search → favor speed.</p>
  <h3>② "Why did it miss?" — exact vs approximate first</h3>
  <p>When search misses, the first fork: is the item even in the index (a data problem), and if so, was it just outside the approximate neighborhood (a recall-tuning problem)? Different fixes. Don't let the team "fix the model" for what is a search-tuning issue.</p>
  <h3>③ The same triangle, again</h3>
  <p>Recall vs latency vs cost is Chapter 1's Quality–Latency–Cost triangle wearing a search hat. You can't max all three. Naming which two matter for this product is, once more, the senior move.</p>

  <h2><span class="ix">6</span> Worked Solution</h2>
  <div class="callout">
    <div class="ch">The prompt</div>
    <p style="font-family:var(--font-ui);font-weight:600;">"Users say our AI search sometimes fails to surface a document that's obviously in our system. Is the product broken? What do you do?"</p>
  </div>
  <p><strong>Step 1 — Don't panic, and don't assume the model.</strong> An occasional miss on an indexed doc is the expected signature of approximate search, not necessarily a bug. First question: is the doc actually in the index, and was it embedded?</p>
  <p><strong>Step 2 — Measure recall@k on the failing queries.</strong> If recall is, say, 80%, the misses are the expected 20% the approximate neighborhood skipped. That's a tuning question, not a broken product.</p>
  <p><strong>Step 3 — Decide the tradeoff:</strong> if these misses matter (they're hurting trust), widen the recall knob and/or add a reranking pass, accepting slightly higher latency and cost. If they're rare and low-stakes, set expectations instead: "search finds the most relevant results, not an exhaustive list."</p>
  <p><strong>Step 4 — Metric:</strong> track recall@k as the canary. If it's stable and acceptable, the product is working as designed; if it's dropping, something upstream (indexing, freshness) broke.</p>
  <div class="callout good">
    <div class="ch">Why this wins</div>
    <p>You distinguished a real bug from an inherent tradeoff, measured instead of guessed, and turned a vague "it's broken" into a specific, ownable decision about the recall dial. That's what knowing the tradeoff buys you.</p>
  </div>

  <h2><span class="ix">7</span> Industry Case</h2>
  <div class="sub">Approximate search at the scale of millions of queries.</div>
  <h3>Perplexity — speed at scale is why it works</h3>
  <p>Recall from Chapter 1 that Perplexity runs hybrid retrieval (keyword + semantic) and serves millions of queries with low latency, powered by a platform (Vespa) built for large-scale, real-time retrieval. At that scale, <strong>exact nearest-neighbor search over the whole corpus per query is simply not viable</strong> — the latency and cost would sink the product. Approximate methods are what make sub-second answers possible across an enormous index.</p>
  <p>And notice their design choice: they pair approximate retrieval with a <em>reranking</em> pass (Ch.1) precisely to claw back the precision that fast, wide retrieval gives up. That's the recall knob and the reranker working together — exactly the tradeoff this lesson hands you.</p>
  <div class="callout accent">
    <div class="ch">The PM takeaway</div>
    <p>Every fast AI search you admire is making the approximate trade. The skill isn't avoiding the trade — it's knowing where to set the dial and when to add a reranker to compensate. "It missed a doc" is sometimes the price of "it answered in under a second."</p>
  </div>

  <h2><span class="ix">✓</span> Check Yourself</h2>
  <div class="quiz" data-correct="1">
    <div class="q">Why do production RAG systems use approximate nearest-neighbor search instead of exact search?</div>
    <div class="opt" data-i="0"><span class="l">A</span><span>Approximate search is always more accurate.</span></div>
    <div class="opt" data-i="1"><span class="l">B</span><span>Exact search is too slow and costly at scale; approximate trades a little recall for huge speed.</span></div>
    <div class="opt" data-i="2"><span class="l">C</span><span>Approximate search never misses anything.</span></div>
    <div class="opt" data-i="3"><span class="l">D</span><span>Exact search needs a GPU.</span></div>
    <div class="qexp">Exact search compares the query to every item — fine for tiny datasets, far too slow at millions of items. Approximate search navigates to a promising neighborhood: massively faster, with a small, tunable risk of missing a far-off match.</div>
  </div>
  <div class="quiz" data-correct="2">
    <div class="q">A stakeholder reports the AI "missed an obvious document." What's your FIRST diagnostic question?</div>
    <div class="opt" data-i="0"><span class="l">A</span><span>Should we buy a bigger model?</span></div>
    <div class="opt" data-i="1"><span class="l">B</span><span>Can we add more GPUs?</span></div>
    <div class="opt" data-i="2"><span class="l">C</span><span>Is the document actually in the index/embedded — and if so, what's our recall@k?</span></div>
    <div class="opt" data-i="3"><span class="l">D</span><span>Should we switch programming languages?</span></div>
    <div class="qexp">First check the data (is it indexed?), then recall@k (was it just outside the approximate neighborhood?). The fix for a search-tuning issue is the recall knob or a reranker — not the model.</div>
  </div>
  <h2><span class="ix">✎</span> Apply It Yourself</h2>
  <div class="sub">No worked answer this time — this one's your rep. Give it 10 minutes before you move on.</div>
  <div class="callout">
    <div class="ch">Your problem</div>
    <p style="font-family:var(--font-ui);font-weight:600;">"A stakeholder is furious: 'The AI search missed a document that's obviously in our system — it's broken!' Decide whether this is a real bug or expected behavior, and what you'd check first."</p>
  </div>
  <p><strong>Hints</strong> (peek only if you're stuck):</p>
  <ul>
    <li>Approximate (ANN) search occasionally misses — that can be by design, not a bug.</li>
    <li>First fork: is the doc even indexed/embedded? Then: recall@k.</li>
    <li>The trap: chasing a phantom bug, or dismissing a real one without measuring.</li>
  </ul>
  <table>
    <tr><th>A strong answer...</th><th>A weak answer...</th></tr>
    <tr><td>Distinguishes a data problem (not indexed) from a recall-tuning problem; measures recall@k.</td><td>Assumes the model is broken.</td></tr>
    <tr><td>Sets the recall-vs-latency dial deliberately for this use case.</td><td>Treats the miss as random.</td></tr>
    <tr><td>Sets expectations: search finds the most relevant, not an exhaustive list.</td><td>Promises it will never miss.</td></tr>
  </table>
  <div class="callout accent">
    <div class="ch">Make it live</div>
    <p>Search something obscure in a tool you use. If it 'misses,' is that the price of sub-second speed — or a real indexing gap?</p>
  </div>
  __NAV__
</div>
`,

/* ---------------------------------------------------------------- 3.2 */
"3.2": `
<div class="wrap">
  <div class="les-kicker">Chapter 3 · Lesson 3.2</div>
  <h1 class="les-title">Embeddings, Vector DBs &amp; Indexes (PM-level)</h1>
  <div class="les-meta">
    <span class="pill">Under the hood</span><span class="pill">~24 min read</span>
    <span class="pill">Prereq: 3.1</span><span class="pill">Difficulty: foundational</span>
  </div>
  <p class="motto">An embedding is just coordinates for meaning. Once you see it that way, half the "magic" of AI search becomes a map you can reason about — and a few product decisions you didn't know were yours to make.</p>

  <p class="lead">In 3.1 you learned how AI search moves; now you learn what it's moving through. Embeddings, vector databases, and indexes are the plumbing under every RAG product. You won't build them — but three decisions inside them are pure product calls: what goes in the knowledge base, how it's chunked, and how fresh it stays.</p>

  <h2><span class="ix">1</span> Your Mandate</h2>
  <div class="sub">The plumbing is eng's; the contents are yours.</div>
  <p>Your mandate is to <strong>own what knowledge the system can draw on and how it's shaped.</strong> Engineering picks the embedding model and the database. You decide which documents belong in the knowledge base, how they're split into chunks, and how often they refresh. Those three decisions move recall and answer quality more than any model swap.</p>

  <h2><span class="ix">2</span> Your Responsibilities</h2>
  <div class="sub">Three concepts, one sentence each — then the part you control.</div>
  <table>
    <tr><th>Concept</th><th>What it is (PM-level)</th><th>Your decision</th></tr>
    <tr><td><strong>Embedding</strong></td><td>A text's meaning turned into coordinates; similar meaning → nearby coordinates</td><td>(eng picks the model) — you ensure the content embedded is the right content</td></tr>
    <tr><td><strong>Vector DB</strong></td><td>Where those coordinates are stored and searched</td><td>What goes in it; access/privacy boundaries</td></tr>
    <tr><td><strong>Index</strong></td><td>The structure that makes search fast (the "filing system")</td><td>Refresh cadence — stale index = wrong answers</td></tr>
    <tr><td><strong>Chunking</strong></td><td>How documents are cut into searchable pieces</td><td>Chunk size &amp; boundaries — a real product call</td></tr>
  </table>

  <h2><span class="ix">3</span> Metrics That Matter Here</h2>
  <table>
    <tr><th>Metric</th><th>Catches</th></tr>
    <tr><td><strong>Recall &amp; context precision by chunk size</strong></td><td>Whether chunks are too big (noisy) or too small (lost context)</td></tr>
    <tr><td><strong>Index freshness / staleness</strong></td><td>Answers based on outdated content</td></tr>
    <tr><td><strong>Embedding &amp; storage cost</strong></td><td>The cost of a large or frequently re-embedded corpus</td></tr>
    <tr><td><strong>Coverage</strong></td><td>Is the knowledge the user needs even in the KB?</td></tr>
  </table>

  <h2><span class="ix">4</span> How to Think Here</h2>
  <div class="sub">Picture meaning as a map — and chunking as how you cut the map up.</div>
  <div class="fig">
    <div class="fig-title">Embedding space: similar meaning lands nearby</div>
    <svg viewBox="0 0 520 250" xmlns="http://www.w3.org/2000/svg" font-family="Hanken Grotesk, sans-serif">
      <rect x="40" y="30" width="440" height="190" rx="10" fill="#fff" stroke="#eee"/>
      <ellipse cx="135" cy="90" rx="60" ry="42" fill="#0071e3" opacity="0.08"/>
      <text x="135" y="58" text-anchor="middle" font-size="10" font-weight="700" fill="#0058b0">"refunds &amp; returns"</text>
      <circle cx="115" cy="95" r="3.5" fill="#0071e3"/><circle cx="150" cy="85" r="3.5" fill="#0071e3"/><circle cx="140" cy="110" r="3.5" fill="#0071e3"/><circle cx="120" cy="115" r="3.5" fill="#0071e3"/>
      <ellipse cx="360" cy="95" rx="64" ry="44" fill="#0a7d3c" opacity="0.08"/>
      <text x="360" y="60" text-anchor="middle" font-size="10" font-weight="700" fill="#0a7d3c">"shipping &amp; delivery"</text>
      <circle cx="345" cy="100" r="3.5" fill="#0a7d3c"/><circle cx="378" cy="90" r="3.5" fill="#0a7d3c"/><circle cx="365" cy="118" r="3.5" fill="#0a7d3c"/>
      <ellipse cx="240" cy="175" rx="58" ry="38" fill="#b25000" opacity="0.08"/>
      <text x="240" y="150" text-anchor="middle" font-size="10" font-weight="700" fill="#b25000">"account &amp; login"</text>
      <circle cx="225" cy="180" r="3.5" fill="#b25000"/><circle cx="255" cy="172" r="3.5" fill="#b25000"/><circle cx="245" cy="195" r="3.5" fill="#b25000"/>
      <polygon points="128,103 134,103 131,109" fill="#1d1d1f"/><circle cx="131" cy="100" r="6" fill="none" stroke="#1d1d1f" stroke-width="1.6"/>
      <text x="131" y="135" text-anchor="middle" font-size="9.5" fill="#1d1d1f" font-weight="700">query: "how do I get my money back?"</text>
    </svg>
    <div class="fig-cap">The query "how do I get my money back?" has no shared keywords with "refunds &amp; returns" — but its <em>meaning</em> lands in that cluster. That's why semantic search beats keyword search for paraphrased questions.</div>
  </div>
  <p>Now chunking — the decision that quietly governs quality. Cut documents too big and each chunk is noisy (the relevant sentence is buried among irrelevant ones, dragging the embedding off-target). Cut too small and you lose context (a chunk says "it's not covered" without the "what" it refers to). <strong>The right chunk size is a product decision, and it's tunable per content type.</strong></p>
  <div class="callout warn">
    <div class="ch">The under-the-hood trap</div>
    <p>A <strong>stale index</strong> is the silent killer. If your docs update but the index doesn't re-embed them, the AI confidently answers from old content — and nobody notices until a customer acts on outdated info. Refresh cadence is a product requirement you must state explicitly, not assume.</p>
  </div>

  <h2><span class="ix">5</span> Frameworks to Deploy</h2>
  <h3>① Chunking as a product decision</h3>
  <p>Match chunk size to content: short FAQ-style content → small chunks; flowing policy docs → larger chunks that keep context. Test recall and context precision at two or three chunk sizes and pick by data, not by default. This single knob often moves answer quality more than a model upgrade.</p>
  <h3>② Freshness is a requirement, not a nice-to-have</h3>
  <p>For any content that changes (pricing, policies, inventory), specify how fast the index must reflect updates. "Within 1 hour of a doc change" is a real spec. Without it, you've shipped a product that lies politely as soon as anything changes.</p>
  <h3>③ Metadata filters narrow before you search</h3>
  <p>Tag chunks with metadata (product, region, date, access level) so search can filter first, then rank. This boosts precision and enforces access control — e.g., a user only retrieves docs they're allowed to see. Often the cheapest accuracy and security win available.</p>

  <h2><span class="ix">6</span> Worked Solution</h2>
  <div class="callout">
    <div class="ch">The prompt</div>
    <p style="font-family:var(--font-ui);font-weight:600;">"Design what goes into the knowledge base for a customer support assistant, and how it's organized."</p>
  </div>
  <p><strong>Step 1 — Decide coverage (what's in).</strong> Help-center articles, policy docs, product specs, recent FAQ. Explicitly exclude internal/confidential docs the user shouldn't see — coverage is also about what to keep out.</p>
  <p><strong>Step 2 — Chunk by content type.</strong> FAQ entries → one chunk each (self-contained). Long policy docs → section-sized chunks that preserve the "what does this clause refer to" context. I'd test two chunk sizes and pick by recall.</p>
  <p><strong>Step 3 — Add metadata + freshness.</strong> Tag chunks by product, region, and access level so the assistant filters to the user's context. Set a freshness rule: when a policy doc changes, it re-embeds within an hour so the bot never quotes a retired policy.</p>
  <p><strong>Step 4 — Metric:</strong> recall@k, context precision, and a freshness check (does a doc edit show up in answers within the SLA?). These three tell you the KB is healthy.</p>
  <div class="callout good">
    <div class="ch">Why this wins</div>
    <p>You treated the knowledge base as a product surface — coverage, chunking, freshness, access — rather than "dump the docs in." Every one of those is a decision that moves quality, and every one is yours.</p>
  </div>

  <h2><span class="ix">7</span> Industry Case</h2>
  <div class="sub">Vector DBs in production, with real constraints.</div>
  <h3>Harvey — three knowledge sources, and a hard size ceiling</h3>
  <p>Harvey's legal RAG (Ch.1) runs on specialized vector databases (it has used systems like LanceDB and Postgres with PGVector) across three distinct knowledge sources: user-uploaded files, long-term "vault" projects, and third-party legal databases. That separation is a product decision — different content, different freshness, different access rules.</p>
  <p>And the constraint that makes this lesson concrete: Harvey's document vault has reportedly capped at around <strong>10,000 documents per project</strong>. That's not laziness — it's the reality that a vector index has size, cost, and retrieval-quality limits. For a PM, it means the "just put everything in" instinct is wrong; you scope the corpus, split large matters, and prioritize what's indexed. The knowledge base is a bounded, designed surface — not an infinite bucket.</p>
  <div class="callout accent">
    <div class="ch">The PM takeaway</div>
    <p>Even the leading legal-AI product treats its knowledge base as something to <em>design and bound</em> — sources, chunking, freshness, and hard size limits. "Add more documents" is a product decision with a cost, not a free quality lever.</p>
  </div>

  <h2><span class="ix">✓</span> Check Yourself</h2>
  <div class="quiz" data-correct="3">
    <div class="q">Your docs are updated weekly but answer quality is degrading on changed topics. Most likely cause?</div>
    <div class="opt" data-i="0"><span class="l">A</span><span>The model got worse on its own.</span></div>
    <div class="opt" data-i="1"><span class="l">B</span><span>Users are asking harder questions.</span></div>
    <div class="opt" data-i="2"><span class="l">C</span><span>The embeddings are too accurate.</span></div>
    <div class="opt" data-i="3"><span class="l">D</span><span>A stale index — updated docs aren't being re-embedded, so it answers from old content.</span></div>
    <div class="qexp">If content changes but the index doesn't refresh, the system retrieves outdated chunks and answers confidently from them. Freshness cadence is a product requirement you must specify explicitly.</div>
  </div>
  <div class="quiz" data-correct="0">
    <div class="q">Why is chunk size a product decision rather than a pure engineering detail?</div>
    <div class="opt" data-i="0"><span class="l">A</span><span>Too-big chunks add noise; too-small chunks lose context — and that directly changes answer quality the user feels.</span></div>
    <div class="opt" data-i="1"><span class="l">B</span><span>Chunk size sets the model's price.</span></div>
    <div class="opt" data-i="2"><span class="l">C</span><span>It determines the programming language.</span></div>
    <div class="opt" data-i="3"><span class="l">D</span><span>It has no real effect.</span></div>
    <div class="qexp">Chunk size trades context against noise, and that trade surfaces as recall and precision — a user-visible behavior. So you tune it by data and own the call, just like every tradeoff in this chapter.</div>
  </div>
  <h2><span class="ix">✎</span> Apply It Yourself</h2>
  <div class="sub">No worked answer this time — this one's your rep. Give it 10 minutes before you move on.</div>
  <div class="callout">
    <div class="ch">Your problem</div>
    <p style="font-family:var(--font-ui);font-weight:600;">"Your support assistant's answers are degrading on topics whose docs changed last week, even though the model didn't change. Find the most likely cause and the fix."</p>
  </div>
  <p><strong>Hints</strong> (peek only if you're stuck):</p>
  <ul>
    <li>If content changed but answers didn't, ask what didn't update.</li>
    <li>Stale index: updated docs that were never re-embedded.</li>
    <li>The trap: blaming the model for a freshness problem.</li>
  </ul>
  <table>
    <tr><th>A strong answer...</th><th>A weak answer...</th></tr>
    <tr><td>Diagnoses a stale index; specifies a re-embed / refresh cadence (an SLA).</td><td>Says the model 'got worse.'</td></tr>
    <tr><td>Treats chunking and freshness as product decisions, not eng defaults.</td><td>Ignores how content is cut and refreshed.</td></tr>
    <tr><td>Adds a freshness check: does a doc edit show up in answers within the SLA?</td><td>Has no way to detect staleness.</td></tr>
  </table>
  <div class="callout accent">
    <div class="ch">Make it live</div>
    <p>Edit a source a RAG tool relies on and see how long until its answers reflect the change. That lag is the freshness SLA.</p>
  </div>
  __NAV__
</div>
`,

/* ---------------------------------------------------------------- 3.3 */
"3.3": `
<div class="wrap">
  <div class="les-kicker">Chapter 3 · Lesson 3.3</div>
  <h1 class="les-title">Trees, Graphs &amp; Why They Matter for AI Products</h1>
  <div class="les-meta">
    <span class="pill">Under the hood</span><span class="pill">~23 min read</span>
    <span class="pill">Prereq: 3.2</span><span class="pill">Difficulty: foundational</span>
  </div>
  <p class="motto">Vector search finds things that are <em>similar</em>. Some of your hardest questions aren't about similarity at all — they're about how things are <em>connected</em>. Knowing the difference tells you when vectors will quietly fail.</p>

  <p class="lead">The last under-the-hood concept, and the one that explains a whole class of RAG failures. Trees and graphs are how machines represent <strong>structure and relationships</strong>. You won't implement graph traversal — but you must recognize when a question is relational, because that's exactly when the vector search you just learned hits a wall.</p>

  <h2><span class="ix">1</span> Your Mandate</h2>
  <div class="sub">Recognize the shape of the question.</div>
  <p>Your mandate is to <strong>tell a similarity problem from a relationship problem</strong> — because they need different machinery. When users ask connected, multi-hop questions and the product fails, the fix usually isn't a better model or more documents; it's a different data structure. Spotting that early saves the team from tuning the wrong thing for weeks.</p>

  <h2><span class="ix">2</span> Your Responsibilities</h2>
  <div class="sub">Three structures, what each is for.</div>
  <table>
    <tr><th>Structure</th><th>Answers</th><th>Shows up in</th></tr>
    <tr><td><strong>Vector space</strong></td><td>"What's similar to this?"</td><td>Standard RAG, semantic search</td></tr>
    <tr><td><strong>Graph</strong></td><td>"What's connected to this, and how?"</td><td>Knowledge graphs, GraphRAG, agent planning</td></tr>
    <tr><td><strong>Tree</strong></td><td>"Where does this sit in a hierarchy / which branch?"</td><td>Routing, decision flows, document structure</td></tr>
  </table>

  <h2><span class="ix">3</span> Metrics That Matter Here</h2>
  <table>
    <tr><th>Metric</th><th>Catches</th></tr>
    <tr><td><strong>Multi-hop accuracy</strong></td><td>Questions needing 2+ connected facts — where vector RAG collapses</td></tr>
    <tr><td><strong>Relationship-query coverage</strong></td><td>How many real user questions are relational vs similarity</td></tr>
    <tr><td><strong>Indexing cost</strong></td><td>Graphs are far more expensive to build than vector indexes</td></tr>
  </table>

  <h2><span class="ix">4</span> How to Think Here</h2>
  <div class="sub">Similar vs connected — the picture that decides the architecture.</div>
  <div class="fig">
    <div class="fig-title">Vector "similar" vs Graph "connected"</div>
    <svg viewBox="0 0 520 250" xmlns="http://www.w3.org/2000/svg" font-family="Hanken Grotesk, sans-serif">
      <text x="125" y="20" text-anchor="middle" font-size="11" font-weight="800" fill="#0071e3">VECTOR · find similar</text>
      <ellipse cx="125" cy="120" rx="80" ry="68" fill="#0071e3" opacity="0.07" stroke="#0071e3" stroke-dasharray="4 3"/>
      <circle cx="110" cy="110" r="4" fill="#0071e3"/><circle cx="140" cy="125" r="4" fill="#0071e3"/><circle cx="125" cy="145" r="4" fill="#0071e3"/><circle cx="100" cy="140" r="4" fill="#0071e3"/>
      <text x="125" y="210" text-anchor="middle" font-size="10" fill="#0071e3">great for "what's like this?"</text>

      <line x1="270" y1="28" x2="270" y2="235" stroke="#ddd"/>

      <text x="395" y="20" text-anchor="middle" font-size="11" font-weight="800" fill="#0a7d3c">GRAPH · traverse connections</text>
      <circle cx="330" cy="70" r="16" fill="#fff" stroke="#0a7d3c" stroke-width="1.6"/><text x="330" y="74" text-anchor="middle" font-size="9" fill="#1d1d1f">bug</text>
      <circle cx="420" cy="70" r="16" fill="#fff" stroke="#0a7d3c" stroke-width="1.6"/><text x="420" y="74" text-anchor="middle" font-size="9" fill="#1d1d1f">module</text>
      <circle cx="465" cy="150" r="16" fill="#fff" stroke="#0a7d3c" stroke-width="1.6"/><text x="465" y="154" text-anchor="middle" font-size="9" fill="#1d1d1f">team</text>
      <circle cx="350" cy="160" r="16" fill="#fff" stroke="#0a7d3c" stroke-width="1.6"/><text x="350" y="164" text-anchor="middle" font-size="9" fill="#1d1d1f">cust.</text>
      <line x1="346" y1="70" x2="404" y2="70" stroke="#0a7d3c" stroke-width="1.4"/><text x="375" y="62" text-anchor="middle" font-size="8" fill="#86868b">in</text>
      <line x1="431" y1="84" x2="458" y2="136" stroke="#0a7d3c" stroke-width="1.4"/><text x="455" y="110" text-anchor="middle" font-size="8" fill="#86868b">owned by</text>
      <line x1="412" y1="82" x2="362" y2="148" stroke="#0a7d3c" stroke-width="1.4"/><text x="372" y="120" text-anchor="middle" font-size="8" fill="#86868b">affects</text>
      <text x="397" y="215" text-anchor="middle" font-size="10" fill="#0a7d3c">great for "what's connected, and how?"</text>
    </svg>
    <div class="fig-cap">"Which customers are hit by the bug in the module team X owns?" is a 3-hop walk across connections. Vectors can't traverse relationships; a graph is built for exactly this.</div>
  </div>
  <p>The test: count the <strong>entities and hops</strong> in the question. "What's our refund policy?" is one hop, one entity — vectors nail it. "Which customers are affected by the bug in the module that team X owns?" is a chain across four connected entities — vector search degrades fast as that chain grows, because it can only find chunks that <em>sound like</em> the query, not chunks <em>connected through</em> the query.</p>

  <h2><span class="ix">5</span> Frameworks to Deploy</h2>
  <h3>① The similarity-vs-relationship test</h3>
  <p>For any failing query class, ask: "Is the answer in one place (similarity) or spread across connections (relationship)?" Single-hop factual → vectors. Multi-hop / "how are these related" → you need graph structure. This one question tells you whether to tune retrieval or change the architecture.</p>
  <h3>② Vectors + graph = hybrid, not either/or</h3>
  <p>You rarely replace vectors with graphs; you <em>add</em> graph traversal for the relational queries while keeping vectors for the similarity majority. Hybrid retrieval (vector + graph) is the production pattern for enterprise data with both kinds of questions.</p>
  <h3>③ Respect the cost curve</h3>
  <p>Graphs (knowledge graphs / GraphRAG) are powerful but historically far more expensive to build than vector indexes. So the move is: ship vector RAG first, measure where it fails for <em>structural</em> (not semantic) reasons, and add graph only there. Don't open with a graph because it sounds advanced — that's Chapter 2's "don't over-engineer," again.</p>

  <h2><span class="ix">6</span> Worked Solution</h2>
  <div class="callout">
    <div class="ch">The prompt</div>
    <p style="font-family:var(--font-ui);font-weight:600;">"Our internal assistant nails policy questions but completely fails on questions like 'which clients are affected by the outage in the service team Y maintains?' Why, and what do you do?"</p>
  </div>
  <p><strong>Step 1 — Diagnose the shape.</strong> Policy questions are single-hop similarity — vectors handle them. The failing question is multi-hop relational: outage → service → team Y → clients. Vector search can't traverse those links; it only finds text that <em>resembles</em> the query, so it returns noise.</p>
  <p><strong>Step 2 — Name the real fix.</strong> This isn't a model, prompt, or chunking problem. It's a data-structure mismatch. Relational questions need a <strong>graph</strong> (a knowledge graph linking services, teams, and clients) so the system can walk the connections.</p>
  <p><strong>Step 3 — Add graph where it's needed, keep vectors elsewhere.</strong> Build a graph over the structured entities (services, teams, ownership, client mappings) for relational queries; keep vector RAG for the policy/FAQ majority. Hybrid, scoped to the failure class.</p>
  <p><strong>Step 4 — Weigh the cost honestly.</strong> Graph indexing is expensive. So I'd quantify how many real queries are relational first; if it's a meaningful slice, the graph pays off. If it's a rare edge case, set expectations instead. Measure before you build.</p>
  <div class="callout good">
    <div class="ch">Why this wins</div>
    <p>You diagnosed a structural failure (not a model failure), prescribed the right machinery (graph for relations, vectors for similarity), and gated the expensive option on measurement. That's the chapter's whole thesis: the structure <em>is</em> the product behavior.</p>
  </div>

  <h2><span class="ix">7</span> Industry Case</h2>
  <div class="sub">The structure-vs-similarity wall, named and measured.</div>
  <h3>GraphRAG — when Microsoft showed vector RAG's ceiling</h3>
  <p>In 2024 Microsoft Research introduced <strong>GraphRAG</strong>, which builds a knowledge graph from documents and retrieves by traversing entity relationships rather than by similarity alone. The motivation was precisely the failure in your worked solution: standard vector RAG struggles on <em>multi-hop</em> and <em>global</em> questions ("what are the main themes across this whole corpus?", "which X connects to Y through Z?"), because the answer isn't in any single similar chunk — it lives in the connections between chunks.</p>
  <p>The published comparisons are stark: on relationship-heavy, multi-hop enterprise queries, graph-based retrieval dramatically outperforms vector-only RAG, and vector accuracy <em>degrades toward zero</em> as the number of entities in a query climbs. The honest caveat — also the lesson — is cost: GraphRAG's indexing was originally very expensive, which killed many 2024 projects, until cheaper variants (e.g. LazyGraphRAG) brought it down. So the mature pattern is exactly framework ③: <strong>vector RAG by default, graph added where queries are structurally relational and the volume justifies the cost.</strong></p>
  <div class="callout accent">
    <div class="ch">The PM takeaway</div>
    <p>A multi-billion-dollar research org formalized the exact instinct this chapter trains: similarity and relationship are different problems needing different structures. Recognizing which one a failing query is — before throwing models or documents at it — is the credibility this whole chapter buys you.</p>
  </div>

  <h2><span class="ix">✓</span> Check Yourself</h2>
  <div class="quiz" data-correct="2">
    <div class="q">Which question is a poor fit for vector search and a good fit for a graph?</div>
    <div class="opt" data-i="0"><span class="l">A</span><span>"What is our refund policy?"</span></div>
    <div class="opt" data-i="1"><span class="l">B</span><span>"Summarize this one document."</span></div>
    <div class="opt" data-i="2"><span class="l">C</span><span>"Which suppliers are affected by the recall on the part used in product line Z?"</span></div>
    <div class="opt" data-i="3"><span class="l">D</span><span>"Find articles similar to this one."</span></div>
    <div class="qexp">C is a multi-hop relationship query (recall → part → product line → suppliers). Vector search finds similar text, not connected entities — it degrades as the chain grows. Graphs are built to traverse exactly these connections.</div>
  </div>
  <div class="quiz" data-correct="1">
    <div class="q">Your vector RAG fails on relational questions. What's the right move?</div>
    <div class="opt" data-i="0"><span class="l">A</span><span>Immediately replace the whole system with a graph database.</span></div>
    <div class="opt" data-i="1"><span class="l">B</span><span>Measure how many queries are relational; if it's a real slice, add graph for those while keeping vectors for the rest.</span></div>
    <div class="opt" data-i="2"><span class="l">C</span><span>Upgrade to a bigger model.</span></div>
    <div class="opt" data-i="3"><span class="l">D</span><span>Add more documents.</span></div>
    <div class="qexp">Graphs are expensive to build, so gate them on measurement. The production pattern is hybrid: vectors for similarity (the majority), graph traversal added for the relational failure class. Don't over-engineer; don't ignore a real structural gap either.</div>
  </div>

  <h2><span class="ix">✎</span> Apply It Yourself</h2>
  <div class="sub">No worked answer this time — this one's your rep. Give it 10 minutes before you move on.</div>
  <div class="callout">
    <div class="ch">Your problem</div>
    <p style="font-family:var(--font-ui);font-weight:600;">"Your internal assistant nails policy questions but fails on 'which clients are affected by the outage in the service team Y maintains?' Explain why, and decide what you'd build — and whether it's worth it."</p>
  </div>
  <p><strong>Hints</strong> (peek only if you're stuck):</p>
  <ul>
    <li>Count the entities and hops in the failing question.</li>
    <li>Similarity (vectors) vs relationship (graph) — which does this need?</li>
    <li>The trap: throwing a bigger model or more docs at a structural problem.</li>
  </ul>
  <table>
    <tr><th>A strong answer...</th><th>A weak answer...</th></tr>
    <tr><td>Identifies a multi-hop relational query; prescribes a graph for that class, vectors for the rest.</td><td>Upgrades the model or adds documents.</td></tr>
    <tr><td>Gates the expensive graph on measuring how many queries are relational.</td><td>Builds a knowledge graph because it sounds advanced.</td></tr>
    <tr><td>Keeps hybrid: vectors for similarity, graph for connections.</td><td>Replaces the whole system.</td></tr>
  </table>
  <div class="callout accent">
    <div class="ch">Make it live</div>
    <p>Find a question your favorite AI tool can't answer because it's relational (X connected to Y through Z). That's the vector/graph wall.</p>
  </div>

  <div class="callout good" style="margin-top:40px;">
    <div class="ch">Chapter 3 complete</div>
    <p>You can now reason about search, embeddings, freshness, and graphs the smart way — enough to debug RAG, scope a knowledge base, and know when a question needs a graph, without ever writing the code. That's the technical literacy spine done (Ch.1–3). Next, <strong>Chapter 4 — Product Research for AI</strong>: finding a real problem worth building in an AI-saturated market.</p>
  </div>
  __NAV__
</div>
`
