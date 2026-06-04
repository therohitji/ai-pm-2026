/* ===== Chapter 01 lessons — AI PM by Rohit Swerashi =====
   One JS object entry per lesson: "N.Y": `<full lesson html>`
   Keep the 7-block structure. End each entry's content with __NAV__ (build injects nav). */

/* ---------------------------------------------------------------- 1.1 */
"1.1": `
<div class="wrap">
  <div class="les-kicker">Chapter 1 · Lesson 1.1</div>
  <h1 class="les-title">What "System Design" Means for an AI PM</h1>
  <div class="les-meta">
    <span class="pill">Technical literacy</span><span class="pill">~25 min read</span>
    <span class="pill">Prereq: none</span><span class="pill">Difficulty: foundational</span>
  </div>
  <p class="motto">You will never write the architecture. But if you can't draw it on a whiteboard and name where it breaks, you won't get the job — and you won't be trusted by the engineers once you have it.</p>

  <p class="lead">Most PMs entering AI roles in 2026 fail the same way: they can talk about "GPT-powered features" but freeze the moment an engineer says "do you want this synchronous or do we queue it?" This lesson fixes that. By the end you will see an AI product the way a senior engineer sees it — as a flow of boxes, each with a cost, a latency, and a failure mode — and you'll know which boxes are <em class="k">your</em> decisions to own.</p>

  <h2><span class="ix">1</span> Your Mandate</h2>
  <div class="sub">What you are actually expected to own in this lesson's domain.</div>
  <p>As an AI PM, your mandate in system design is <strong>not</strong> to choose the database or design the inference server. Your mandate is to <strong>own the tradeoff space</strong>. Every AI system is a negotiation between three forces that pull against each other:</p>

  <div class="fig">
    <div class="fig-title">The triangle you own</div>
    <svg viewBox="0 0 520 300" xmlns="http://www.w3.org/2000/svg" font-family="Hanken Grotesk, sans-serif">
      <polygon points="260,40 70,250 450,250" fill="none" stroke="#1d1d1f" stroke-width="1.5"/>
      <circle cx="260" cy="40" r="6" fill="#0071e3"/><circle cx="70" cy="250" r="6" fill="#0071e3"/><circle cx="450" cy="250" r="6" fill="#0071e3"/>
      <text x="260" y="24" text-anchor="middle" font-size="17" font-weight="700" fill="#1d1d1f">QUALITY</text>
      <text x="56" y="272" text-anchor="middle" font-size="17" font-weight="700" fill="#1d1d1f">LATENCY</text>
      <text x="464" y="272" text-anchor="middle" font-size="17" font-weight="700" fill="#1d1d1f">COST</text>
      <text x="260" y="160" text-anchor="middle" font-size="15" font-weight="800" fill="#0071e3">PICK 2</text>
      <text x="260" y="182" text-anchor="middle" font-size="12" fill="#86868b">the third pays for it</text>
    </svg>
    <div class="fig-cap">Push any vertex and the other two move. The PM decides which two matter for this product.</div>
  </div>

  <p>That is the whole job in one sentence: <strong>you decide what "good enough" means and where the system is allowed to be weak.</strong> An engineer can build any point on that triangle. Only you know whether a legal-research tool can tolerate a 4-second answer (yes — accuracy wins) or whether a customer-support autocomplete can (no — it has to feel instant, so you trade accuracy for speed).</p>

  <h2><span class="ix">2</span> Your Responsibilities</h2>
  <div class="sub">The concrete things that land on your desk.</div>
  <table>
    <tr><th>You own</th><th>You do NOT own</th></tr>
    <tr><td><strong>Defining quality bar</strong> — what counts as a correct/acceptable output, written down as evals</td><td>Implementing the eval harness</td></tr>
    <tr><td><strong>Latency budget</strong> — "answers must return under 2s p95"</td><td>Choosing the GPU or batching strategy</td></tr>
    <tr><td><strong>Cost ceiling per task</strong> — "must stay under $0.04 per query at scale"</td><td>Negotiating the cloud contract</td></tr>
    <tr><td><strong>Failure behavior</strong> — what the product does when the model is wrong or down</td><td>Writing the fallback code</td></tr>
    <tr><td><strong>Scope of the system</strong> — which sub-problems are in v1 vs deferred</td><td>The model weights</td></tr>
  </table>
  <p>Notice the pattern: you own <strong>the requirements and the boundaries</strong>; engineering owns <strong>the implementation</strong>. The mistake junior AI PMs make is drifting into implementation ("let's use Pinecone") while ignoring the boundary they actually own ("what happens when retrieval returns nothing relevant?"). Engineers will respect you for the second question and quietly resent the first.</p>

  <h2><span class="ix">3</span> Metrics That Matter Here</h2>
  <div class="sub">AI system design has its own scorecard — DAU is not on it.</div>
  <table>
    <tr><th>Metric</th><th>What it tells you</th><th>Why a PM watches it</th></tr>
    <tr><td><strong>p50 / p95 latency</strong></td><td>Typical and tail response time</td><td>Tail latency, not average, is what users feel and churn over</td></tr>
    <tr><td><strong>Cost per task</strong></td><td>$ per completed user job (tokens + retrieval + infra)</td><td>Decides whether your unit economics survive at scale</td></tr>
    <tr><td><strong>Eval score / quality rate</strong></td><td>% of outputs that meet your defined bar</td><td>The only objective signal that the system is actually good</td></tr>
    <tr><td><strong>Containment / deflection</strong></td><td>% of tasks finished without a human</td><td>The ROI number execs and customers actually buy</td></tr>
    <tr><td><strong>Hallucination / error rate</strong></td><td>% of confidently-wrong outputs</td><td>Drives trust, legal risk, and churn more than any feature</td></tr>
  </table>
  <div class="callout warn">
    <div class="ch">The trap</div>
    <p>Teams obsess over average latency and ignore <strong>p95</strong>. If your average is 1.1s but 5% of queries take 9s, that 5% includes your most complex (and often most valuable) users — and they're the ones telling everyone your product is slow. <strong>Always ask engineering for the tail, not the mean.</strong></p>
  </div>

  <h2><span class="ix">4</span> How to Think Here</h2>
  <div class="sub">The mental model you run every time you face an AI system question.</div>
  <p>When you're handed any AI product — in an interview or on the job — do not start with the model. Start by <strong>drawing the pipeline as boxes and arrows</strong>, then interrogate each box. This is the single habit that separates AI PMs from "ChatGPT enthusiasts." Run this four-step loop:</p>
  <ol>
    <li><strong>Draw the flow.</strong> Input → (retrieval?) → (model) → (post-process / guardrail) → output. Every AI product fits this skeleton.</li>
    <li><strong>Tag each box</strong> with its three numbers: latency, cost, failure mode.</li>
    <li><strong>Find the bottleneck.</strong> Which single box, if it breaks or slows, breaks the whole product?</li>
    <li><strong>Decide the tradeoff.</strong> For the bottleneck, pick which two of {quality, latency, cost} you protect — and say it out loud, with a reason.</li>
  </ol>
  <div class="callout accent">
    <div class="ch">Say this in the interview</div>
    <p>"Before I pick a model, I want to map the system. The model is usually not the bottleneck — retrieval quality and how we handle failure usually are." Saying this in the first 60 seconds signals seniority faster than any framework name-drop.</p>
  </div>

  <h2><span class="ix">5</span> Frameworks to Deploy</h2>
  <div class="sub">Use these by name — they make your thinking legible to engineers and interviewers.</div>
  <h3>① The Boxes-and-Arrows skeleton</h3>
  <p>Every LLM product reduces to: <em class="k">Input → Retrieve → Reason → Guard → Output</em>. Memorize it. In an interview, draw it first, then ask "which boxes does this product actually have?"</p>
  <h3>② The Quality–Latency–Cost triangle</h3>
  <p>Use it to <strong>force a decision</strong>: "We can't have all three. For a coding assistant, latency and quality win; cost is the thing we eat early to win users." Naming the sacrifice is the senior move.</p>
  <h3>③ The "Where does it break?" audit</h3>
  <p>For each box, ask: <strong>silent failure or loud failure?</strong> Silent failures (retrieval returns plausible-but-wrong docs, model hallucinates confidently) are far more dangerous than loud ones (timeout, error). <strong>Your job is to convert silent failures into loud ones</strong> — confidence scores, citations, "I'm not sure" fallbacks.</p>

  <h2><span class="ix">6</span> Worked Solution</h2>
  <div class="sub">A real prompt you'll get — solved end to end, the way you'd whiteboard it.</div>
  <div class="callout">
    <div class="ch">The prompt</div>
    <p style="font-family:var(--font-ui);font-weight:600;">"Design the system for an AI assistant that answers employees' questions from our internal company docs. Walk me through it."</p>
  </div>
  <p><strong>Step 1 — Draw the flow (don't mention models yet):</strong></p>
  <div class="flow">
<span class="st">[Employee question]</span>
   <span class="ar">↓</span>
<span class="st">[Retrieve]</span> <span class="nt">find relevant doc chunks from internal knowledge base</span>
   <span class="ar">↓</span>
<span class="st">[Rerank]</span> <span class="nt">keep only the few most relevant chunks</span>
   <span class="ar">↓</span>
<span class="st">[Reason]</span> <span class="nt">LLM writes answer using ONLY those chunks</span>
   <span class="ar">↓</span>
<span class="st">[Guard]</span> <span class="nt">attach citations · if no good chunk, say "not found"</span>
   <span class="ar">↓</span>
<span class="st">[Answer + sources]</span>
  </div>
  <p><strong>Step 2 — Tag each box and find the bottleneck.</strong> The model can write a fluent answer easily. The risk is upstream: if <em class="k">Retrieve</em> pulls the wrong chunks, the model will confidently answer from garbage. <strong>Retrieval is the bottleneck.</strong></p>
  <p><strong>Step 3 — Decide the tradeoffs out loud:</strong></p>
  <ul>
    <li><strong>Quality vs latency:</strong> Internal Q&amp;A can tolerate ~2–3s. I'll spend that budget on a reranking step. Latency is what I sacrifice.</li>
    <li><strong>Failure mode:</strong> Convert the silent failure into a loud one — if no chunk passes a relevance threshold, say <em>"I couldn't find this in our docs"</em> instead of guessing.</li>
    <li><strong>Cost:</strong> Cache answers to common questions so we don't pay for retrieval + generation on every repeat.</li>
  </ul>
  <p><strong>Step 4 — Define the metric.</strong> "Success = % of questions answered correctly <em>with a citation the employee can verify</em>, measured against a 100-question eval set I'll write with HR." <strong>That sentence is what gets you the offer.</strong></p>
  <div class="callout good">
    <div class="ch">Why this answer wins</div>
    <p>You never said "use GPT-5" or "use Pinecone." You mapped the system, found the real bottleneck (retrieval), named the tradeoff, designed the failure behavior, and defined a measurable quality bar. That is exactly what an AI PM does — and exactly what a generic PM cannot do.</p>
  </div>

  <h2><span class="ix">7</span> Industry Case</h2>
  <div class="sub">Real company, real architecture, real 2025–26 decisions.</div>
  <h3>Perplexity — the company that proved "retrieval is the bottleneck"</h3>
  <p>Perplexity (the AI answer engine, valued in the multi-billions by 2025) is the cleanest real-world example of everything in this lesson, because its team has written publicly about how the system works. Their architecture is the same skeleton you just learned. Per their own engineering writing, nearly every query runs through a multi-stage <strong>Retrieval-Augmented Generation</strong> pipeline:</p>
  <div class="flow">
<span class="st">1 Query intent parsing</span> <span class="nt">an LLM interprets what you really mean</span>
   <span class="ar">↓</span>
<span class="st">2 Hybrid retrieval</span> <span class="nt">keyword (BM25) + semantic (embeddings)</span>
   <span class="ar">↓</span>
<span class="st">3 Multi-layer rerank (L1→L3)</span> <span class="nt">cross-encoder + authority/recency signals</span>
   <span class="ar">↓</span>
<span class="st">4 Prompt assembly</span> <span class="nt">citations embedded BEFORE generation</span>
   <span class="ar">↓</span>
<span class="st">5 Constrained synthesis</span> <span class="nt">LLM answers bound to retrieved evidence</span>
  </div>
  <ul>
    <li><strong>The bottleneck is retrieval, not the model.</strong> Perplexity's engineers state plainly that retrieval quality — not raw LLM capability — is the primary constraint on answer quality. Exactly your worked-solution insight, validated at the scale of millions of queries.</li>
    <li><strong>They engineered a loud failure.</strong> The reranker applies a quality threshold (around 0.7); if candidates don't clear it, the system re-queries rather than serving weak citations. They refuse to answer from garbage.</li>
    <li><strong>The moat is orchestration, not one model.</strong> They route between multiple frontier models based on the task to balance latency, context length, and cost. The product is the pipeline.</li>
  </ul>
  <div class="callout accent">
    <div class="ch">The PM takeaway</div>
    <p>If you walked into a 2026 interview and were asked to design an answer engine, the answer above would be indistinguishable from what a billion-dollar company actually built. <strong>That's the bar. You just hit it.</strong></p>
  </div>

  <h2><span class="ix">✓</span> Check Yourself</h2>
  <div class="sub">If you can answer these without scrolling up, you've got the lesson.</div>
  <div class="quiz" data-correct="2">
    <div class="q">A team says: "Our AI answers are sometimes wrong. Let's upgrade to a bigger, more expensive model." As the PM, what's your first move?</div>
    <div class="opt" data-i="0"><span class="l">A</span><span>Approve it — bigger models are more accurate.</span></div>
    <div class="opt" data-i="1"><span class="l">B</span><span>Ask for the cost-per-task impact before deciding.</span></div>
    <div class="opt" data-i="2"><span class="l">C</span><span>Check whether the failures come from retrieval, not the model, before spending anything.</span></div>
    <div class="opt" data-i="3"><span class="l">D</span><span>Add a disclaimer that answers may be wrong.</span></div>
    <div class="qexp">In a RAG system, "wrong answers" usually trace back to bad retrieval feeding the model garbage — exactly Perplexity's stated bottleneck. Upgrading the model spends money on the wrong box. Diagnose the pipeline first.</div>
  </div>
  <div class="quiz" data-correct="1">
    <div class="q">Why do AI PMs care about p95 latency more than average latency?</div>
    <div class="opt" data-i="0"><span class="l">A</span><span>p95 is easier for engineers to measure.</span></div>
    <div class="opt" data-i="1"><span class="l">B</span><span>The slow tail hits your most complex, often most valuable, users — and that's who churns and complains.</span></div>
    <div class="opt" data-i="2"><span class="l">C</span><span>Average latency can't be improved.</span></div>
    <div class="opt" data-i="3"><span class="l">D</span><span>p95 is the same as cost-per-task.</span></div>
    <div class="qexp">A great average hides a painful tail. The 5% slowest queries are usually the hardest, highest-value tasks — and those users decide your reputation.</div>
  </div>
  <h2><span class="ix">✎</span> Apply It Yourself</h2>
  <div class="sub">No worked answer this time — this one's your rep. Give it 10 minutes before you move on.</div>
  <div class="callout">
    <div class="ch">Your problem</div>
    <p style="font-family:var(--font-ui);font-weight:600;">"A YC-backed startup is building an AI tool that drafts sales emails from a rep's CRM notes. The founder asks you to 'design the system' in the interview. Whiteboard it: draw the flow, find the bottleneck, and name the one tradeoff you'd make for v1."</p>
  </div>
  <p><strong>Hints</strong> (peek only if you're stuck):</p>
  <ul>
    <li>Start with boxes-and-arrows, not a model name.</li>
    <li>Where does quality actually get decided — generation, or what the model is fed about the customer?</li>
    <li>The trap: saying 'use GPT-5' in the first sentence.</li>
  </ul>
  <table>
    <tr><th>A strong answer...</th><th>A weak answer...</th></tr>
    <tr><td>Maps Input → Retrieve (CRM context) → Reason → Guard → Output and identifies retrieval/context as the bottleneck.</td><td>Picks a model and starts listing features.</td></tr>
    <tr><td>Names the tradeoff (e.g. 'latency is fine here; protect quality and personalization').</td><td>Claims it'll be fast, cheap, and perfect.</td></tr>
    <tr><td>Defines success: '% of drafts a rep sends with minor edits.'</td><td>Says 'the AI writes good emails.'</td></tr>
  </table>
  <div class="callout accent">
    <div class="ch">Make it live</div>
    <p>Find a real 2026 AI sales-email tool and guess its pipeline. What's its likely bottleneck — the model, or how much it knows about the prospect?</p>
  </div>
  __NAV__
</div>
`,

/* ---------------------------------------------------------------- 1.2 */
"1.2": `
<div class="wrap">
  <div class="les-kicker">Chapter 1 · Lesson 1.2</div>
  <h1 class="les-title">RAG, End to End — Why Retrieval Is the Bottleneck</h1>
  <div class="les-meta">
    <span class="pill">Technical literacy</span><span class="pill">~28 min read</span>
    <span class="pill">Prereq: 1.1</span><span class="pill">Difficulty: core</span>
  </div>
  <p class="motto">Everyone obsesses over the model. The model is the easy part. The product lives or dies in the five steps that happen before the model ever sees the question.</p>

  <p class="lead">RAG — Retrieval-Augmented Generation — is the single most common architecture you will manage as an AI PM in 2026. Chatbots over docs, support assistants, legal research, internal search: almost all of it is RAG. This lesson takes you through every stage so that when an engineer says "we'll just RAG it," you know precisely which step is about to break and what to ask.</p>

  <h2><span class="ix">1</span> Your Mandate</h2>
  <div class="sub">What you own when the architecture is RAG.</div>
  <p>Your mandate is to <strong>guarantee that the right information reaches the model</strong>, and to decide what happens when it doesn't. You do not tune the embedding model. You do not pick the vector index. You own three questions: <em class="k">What's in the knowledge base?</em> · <em class="k">How do we know retrieval found the right thing?</em> · <em class="k">What does the product do when it didn't?</em></p>

  <h2><span class="ix">2</span> Your Responsibilities</h2>
  <div class="sub">The concrete deliverables in a RAG product.</div>
  <p>RAG is six stages. Here is the full pipeline, and the box you must watch is stage 2–3:</p>
  <div class="flow">
<span class="st">1 Ingest &amp; chunk</span>  <span class="nt">break source docs into searchable pieces</span>
<span class="st">2 Embed &amp; index</span>  <span class="nt">turn chunks into vectors, store in a vector DB</span>
<span class="st">3 Retrieve</span>       <span class="nt">find candidate chunks for the query  ← BOTTLENECK</span>
<span class="st">4 Rerank</span>         <span class="nt">re-score candidates, keep the best few</span>
<span class="st">5 Generate</span>       <span class="nt">LLM writes the answer from those chunks</span>
<span class="st">6 Guard &amp; cite</span>   <span class="nt">attach sources, refuse if confidence is low</span>
  </div>
  <table>
    <tr><th>Stage</th><th>What you, the PM, decide</th></tr>
    <tr><td><strong>Chunking</strong></td><td>How big a chunk is — too big = noisy retrieval, too small = lost context. This is a product call, not just eng.</td></tr>
    <tr><td><strong>Retrieve</strong></td><td>How many candidates to pull (recall vs noise). Whether to combine keyword + semantic search.</td></tr>
    <tr><td><strong>Rerank</strong></td><td>The relevance <em>threshold</em> below which you'd rather say nothing.</td></tr>
    <tr><td><strong>Guard</strong></td><td>The exact "I don't know" behavior. This is the trust feature.</td></tr>
  </table>

  <h2><span class="ix">3</span> Metrics That Matter Here</h2>
  <div class="sub">RAG fails quietly — these metrics are how you catch it.</div>
  <table>
    <tr><th>Metric</th><th>Reads as</th><th>Catches</th></tr>
    <tr><td><strong>Retrieval recall@k</strong></td><td>Did the right chunk appear in the top-k pulled?</td><td>The root cause of most bad answers</td></tr>
    <tr><td><strong>Context precision</strong></td><td>How much of what we sent the model was actually relevant?</td><td>Noise that confuses the model</td></tr>
    <tr><td><strong>Faithfulness / groundedness</strong></td><td>Did the answer stick to the retrieved sources?</td><td>Hallucination despite good retrieval</td></tr>
    <tr><td><strong>Citation accuracy</strong></td><td>Do the cited sources actually support the claim?</td><td>Fake-confidence answers users will trust</td></tr>
    <tr><td><strong>"No-answer" rate</strong></td><td>How often the system correctly declines</td><td>Whether your guard is working or guessing</td></tr>
  </table>
  <div class="callout warn">
    <div class="ch">The insight that separates seniors</div>
    <p>If retrieval recall is 70%, <strong>no model on earth can answer the other 30% correctly</strong> — the right information never reached it. Buying a better model to fix bad retrieval is the most expensive mistake in AI products. Diagnose retrieval first, always.</p>
  </div>

  <h2><span class="ix">4</span> How to Think Here</h2>
  <div class="sub">The mental picture: retrieval is a funnel, and quality leaks at the top.</div>
  <div class="fig">
    <div class="fig-title">The retrieval funnel — where answer quality is decided</div>
    <svg viewBox="0 0 520 300" xmlns="http://www.w3.org/2000/svg" font-family="Hanken Grotesk, sans-serif">
      <polygon points="40,40 480,40 380,110 140,110" fill="#0071e3" opacity="0.12" stroke="#0071e3" stroke-width="1.2"/>
      <polygon points="140,120 380,120 320,185 200,185" fill="#0071e3" opacity="0.22" stroke="#0071e3" stroke-width="1.2"/>
      <polygon points="200,195 320,195 300,250 220,250" fill="#0071e3" opacity="0.4" stroke="#0071e3" stroke-width="1.2"/>
      <text x="260" y="78" text-anchor="middle" font-size="13" font-weight="700" fill="#1d1d1f">RETRIEVE · hundreds of candidate chunks</text>
      <text x="260" y="158" text-anchor="middle" font-size="13" font-weight="700" fill="#1d1d1f">RERANK · keep the best dozen</text>
      <text x="260" y="227" text-anchor="middle" font-size="12" font-weight="700" fill="#1d1d1f">TOP ~5 → LLM</text>
      <text x="497" y="44" text-anchor="end" font-size="11" fill="#86868b">recall lives here</text>
      <text x="300" y="282" text-anchor="middle" font-size="11" fill="#b25000" font-weight="600">if the right chunk fell out up top, it's gone for good</text>
    </svg>
    <div class="fig-cap">Quality is capped at the widest point. Reranking can only choose from what retrieval already pulled.</div>
  </div>
  <p>Think of retrieval as a funnel. The model only ever sees what survives to the bottom. If the right chunk never made it into the top of the funnel, <strong>every downstream step is polishing the wrong answer.</strong> So when an answer is bad, your first question is never "is the model dumb?" — it's "did the right chunk even get retrieved?"</p>

  <h2><span class="ix">5</span> Frameworks to Deploy</h2>
  <h3>① The "trace the chunk" debug</h3>
  <p>For any wrong answer, walk it backwards: <em>Did the source even exist in the KB? → Was it retrieved? → Did it survive reranking? → Did the model use it?</em> The stage where it breaks tells you exactly where to spend effort. Nine times out of ten it breaks in the first two steps.</p>
  <h3>② Hybrid retrieval as default</h3>
  <p>Pure semantic (vector) search misses exact terms — product codes, names, acronyms. Pure keyword misses meaning. <strong>Hybrid (keyword + semantic) is the safe default</strong>; this is what Perplexity and Harvey both do. If an engineer proposes vector-only, ask how exact-match queries will work.</p>
  <h3>③ The relevance threshold = the trust dial</h3>
  <p>Set a minimum relevance score below which the system says "I don't know." Raise it → fewer wrong answers, more "not founds." Lower it → more coverage, more risk. <strong>This single number is a product decision you own</strong>, not an engineering detail.</p>

  <h2><span class="ix">6</span> Worked Solution</h2>
  <div class="callout">
    <div class="ch">The prompt</div>
    <p style="font-family:var(--font-ui);font-weight:600;">"Our support bot built on RAG keeps giving confident answers that are subtly wrong. Users are losing trust. Fix it."</p>
  </div>
  <p><strong>Step 1 — Resist the model upgrade.</strong> "Subtly wrong but confident" is the signature of a <em>retrieval</em> problem, not a model problem. The model is faithfully answering from chunks that were almost-but-not-quite right.</p>
  <p><strong>Step 2 — Trace the chunk on 20 failing cases.</strong> I'd pull 20 wrong answers and check: was the correct chunk in the KB? retrieved? reranked in? Almost always you find recall is the leak — the right doc exists but isn't being pulled.</p>
  <p><strong>Step 3 — Fix in order of cost:</strong></p>
  <ul>
    <li><strong>Cheapest:</strong> add hybrid retrieval so exact terms (error codes, product names) match. Often fixes a third of failures alone.</li>
    <li><strong>Next:</strong> add a reranker so the best chunk rises to the top of what gets sent.</li>
    <li><strong>The trust fix:</strong> raise the relevance threshold and make the bot say "I'm not certain — here's the closest doc" instead of guessing. <strong>A confident wrong answer costs more trust than ten honest "I don't knows."</strong></li>
  </ul>
  <p><strong>Step 4 — Metric:</strong> track retrieval recall@5 and citation accuracy weekly. If recall climbs and "subtly wrong" complaints fall, you fixed the right box.</p>
  <div class="callout good">
    <div class="ch">Why this wins</div>
    <p>You diagnosed the actual failure (retrieval, not model), fixed it cheapest-first, and turned a silent failure into a loud one. You spent zero dollars on a bigger model and solved the trust problem.</p>
  </div>

  <h2><span class="ix">7</span> Industry Case</h2>
  <div class="sub">Real company, real RAG decisions.</div>
  <h3>Harvey — RAG in the highest-stakes domain there is: law</h3>
  <p>Harvey is a legal-AI platform used by large law firms and serving users across dozens of countries by 2026. Law is the hardest place to ship an AI product, because a confidently-wrong answer isn't an annoyance — it's malpractice. How they handle it is a masterclass in everything above:</p>
  <ul>
    <li><strong>RAG to kill hallucination.</strong> Harvey grounds answers in retrieval over jurisdiction-specific legal databases and surfaces citations with links back to the primary source, so an attorney can verify the law in its original context. The citation isn't decoration — it's the product.</li>
    <li><strong>Retrieval, not a custom model, is the moat.</strong> Harvey is built on frontier models plus domain data and RAG — and by their own reporting reached roughly <strong>91% preference over a general assistant in tax-law tasks</strong>. The edge came from retrieval quality and domain grounding, not from inventing a new model.</li>
    <li><strong>The scaling limit is real.</strong> Harvey's document vault has reportedly capped at around <strong>10,000 documents per project</strong> — a concrete reminder that retrieval at scale is an engineering constraint a PM must scope around (split matters, prioritize corpora), not wish away.</li>
  </ul>
  <div class="callout accent">
    <div class="ch">The PM takeaway</div>
    <p>The most trusted AI product in the most unforgiving industry won by obsessing over retrieval and citations — the exact two things this lesson told you to own. Not by having the biggest model.</p>
  </div>

  <h2><span class="ix">✓</span> Check Yourself</h2>
  <div class="quiz" data-correct="0">
    <div class="q">Your RAG product's retrieval recall@5 is 65%. What is the maximum answer accuracy the model can possibly achieve?</div>
    <div class="opt" data-i="0"><span class="l">A</span><span>About 65% — it can't answer from information it never received.</span></div>
    <div class="opt" data-i="1"><span class="l">B</span><span>100% if you use a frontier model.</span></div>
    <div class="opt" data-i="2"><span class="l">C</span><span>Depends only on the prompt.</span></div>
    <div class="opt" data-i="3"><span class="l">D</span><span>Recall doesn't affect accuracy.</span></div>
    <div class="qexp">If the right chunk reaches the model only 65% of the time, the other 35% has no correct information to work from. Retrieval recall is a hard ceiling on accuracy — this is THE lesson of RAG.</div>
  </div>
  <div class="quiz" data-correct="2">
    <div class="q">Why does Harvey attach a clickable citation to every answer?</div>
    <div class="opt" data-i="0"><span class="l">A</span><span>To make answers look longer.</span></div>
    <div class="opt" data-i="1"><span class="l">B</span><span>Because the law requires footnotes.</span></div>
    <div class="opt" data-i="2"><span class="l">C</span><span>To convert a silent failure (confident wrong answer) into a verifiable, loud one the lawyer can check.</span></div>
    <div class="opt" data-i="3"><span class="l">D</span><span>To slow the user down.</span></div>
    <div class="qexp">In high-stakes domains, a verifiable citation lets the human catch a wrong answer before it does damage. It's the loud-failure design from Lesson 1.1, applied where it matters most.</div>
  </div>
  <h2><span class="ix">✎</span> Apply It Yourself</h2>
  <div class="sub">No worked answer this time — this one's your rep. Give it 10 minutes before you move on.</div>
  <div class="callout">
    <div class="ch">Your problem</div>
    <p style="font-family:var(--font-ui);font-weight:600;">"A Series A legal-tech startup's contract-review AI is getting complaints that it 'misses clauses.' The eng lead wants to switch to a bigger model. You have 20 failing examples. Diagnose where the failure really is and what you'd fix first."</p>
  </div>
  <p><strong>Hints</strong> (peek only if you're stuck):</p>
  <ul>
    <li>Trace the chunk: was the clause even retrieved before the model saw it?</li>
    <li>Recall caps answer quality — a bigger model can't use what it never received.</li>
    <li>The trap: approving the model upgrade before checking retrieval.</li>
  </ul>
  <table>
    <tr><th>A strong answer...</th><th>A weak answer...</th></tr>
    <tr><td>Traces retrieval first; checks recall@k on the 20 cases and fixes retrieval / hybrid search.</td><td>Upgrades the model without diagnosing.</td></tr>
    <tr><td>Adds a relevance threshold + citations so misses become loud, not silent.</td><td>Leaves confident wrong answers in place.</td></tr>
    <tr><td>Defines a metric: retrieval recall@k and 'answers-with-valid-citation.'</td><td>Says 'make it more accurate.'</td></tr>
  </table>
  <div class="callout accent">
    <div class="ch">Make it live</div>
    <p>Open a RAG product you use, ask it something obscure, and judge: did it miss because the model is weak, or because retrieval didn't find the source?</p>
  </div>
  __NAV__
</div>
`,

/* ---------------------------------------------------------------- 1.3 */
"1.3": `
<div class="wrap">
  <div class="les-kicker">Chapter 1 · Lesson 1.3</div>
  <h1 class="les-title">Prompt vs RAG vs Fine-tune: The Decision Tree</h1>
  <div class="les-meta">
    <span class="pill">Technical literacy</span><span class="pill">~24 min read</span>
    <span class="pill">Prereq: 1.2</span><span class="pill">Difficulty: core</span>
  </div>
  <p class="motto">"Let's fine-tune a model" is the most expensive sentence a junior AI PM can say — and it's almost always wrong. Your job is to talk the room down to the cheapest thing that works.</p>

  <p class="lead">When a product needs the model to "know" something or "behave" a certain way, there are three levers: better prompting, retrieval (RAG), or fine-tuning. They differ in cost, speed, and maintenance by orders of magnitude. Picking the wrong one burns weeks and budget. This lesson gives you a decision tree you can run in any meeting.</p>

  <h2><span class="ix">1</span> Your Mandate</h2>
  <div class="sub">What you own in this decision.</div>
  <p>Your mandate is to <strong>protect the team from over-engineering.</strong> Engineers and founders are drawn to fine-tuning because it sounds like building real IP. Your job is to ask "what's the cheapest lever that hits the quality bar?" and to make the team <em>earn</em> the right to fine-tune by proving the cheaper levers failed first.</p>

  <h2><span class="ix">2</span> Your Responsibilities</h2>
  <div class="sub">The three levers, what each actually does.</div>
  <table>
    <tr><th>Lever</th><th>Changes</th><th>Use it for</th></tr>
    <tr><td><strong>Prompting</strong></td><td>How you ask — instructions, examples, format</td><td>Behavior, tone, format, simple reasoning</td></tr>
    <tr><td><strong>RAG</strong></td><td>What the model knows at answer time</td><td>Facts, private/changing knowledge, citations</td></tr>
    <tr><td><strong>Fine-tuning</strong></td><td>The model's weights — its ingrained habits</td><td>Deep style, narrow specialized tasks, latency/cost at huge scale</td></tr>
  </table>
  <div class="callout warn">
    <div class="ch">The most common confusion — burn this in</div>
    <p><strong>Fine-tuning teaches behavior, not facts.</strong> Teams constantly try to fine-tune a model "so it knows our docs." Wrong tool. Facts that change belong in RAG. Fine-tuning is for <em>how</em> the model responds, not <em>what</em> it knows. Confusing these two wastes the most money in AI products.</p>
  </div>

  <h2><span class="ix">3</span> Metrics That Matter Here</h2>
  <table>
    <tr><th>Lever</th><th>Setup cost</th><th>Time to ship</th><th>Maintenance</th></tr>
    <tr><td><strong>Prompting</strong></td><td>Near zero</td><td>Hours</td><td>Trivial — edit text</td></tr>
    <tr><td><strong>RAG</strong></td><td>Moderate</td><td>Days–weeks</td><td>Update the knowledge base</td></tr>
    <tr><td><strong>Fine-tuning</strong></td><td>High (data + training + eval)</td><td>Weeks–months</td><td>Painful — re-train when base model changes</td></tr>
  </table>
  <div class="fig">
    <div class="fig-title">Effort & ongoing cost rises sharply — start at the left</div>
    <svg viewBox="0 0 520 260" xmlns="http://www.w3.org/2000/svg" font-family="Hanken Grotesk, sans-serif">
      <line x1="60" y1="210" x2="500" y2="210" stroke="#1d1d1f" stroke-width="1.2"/>
      <line x1="60" y1="210" x2="60" y2="30" stroke="#1d1d1f" stroke-width="1.2"/>
      <text x="30" y="120" text-anchor="middle" font-size="11" fill="#86868b" transform="rotate(-90 30 120)">effort + cost</text>
      <rect x="100" y="180" width="80" height="30" fill="#0071e3" opacity="0.30"/>
      <rect x="230" y="120" width="80" height="90" fill="#0071e3" opacity="0.55"/>
      <rect x="360" y="48" width="80" height="162" fill="#0071e3" opacity="0.85"/>
      <text x="140" y="200" text-anchor="middle" font-size="11" font-weight="700" fill="#1d1d1f">low</text>
      <text x="270" y="160" text-anchor="middle" font-size="11" font-weight="700" fill="#ffffff">medium</text>
      <text x="400" y="135" text-anchor="middle" font-size="11" font-weight="700" fill="#ffffff">high</text>
      <text x="140" y="230" text-anchor="middle" font-size="12" font-weight="600" fill="#1d1d1f">Prompting</text>
      <text x="270" y="230" text-anchor="middle" font-size="12" font-weight="600" fill="#1d1d1f">RAG</text>
      <text x="400" y="230" text-anchor="middle" font-size="12" font-weight="600" fill="#1d1d1f">Fine-tune</text>
      <text x="400" y="40" text-anchor="middle" font-size="10" fill="#b25000" font-weight="600">re-train on every base-model update</text>
    </svg>
    <div class="fig-cap">Each step right is roughly an order of magnitude more effort. Move right only when the cheaper lever provably failed.</div>
  </div>

  <h2><span class="ix">4</span> How to Think Here — The Decision Tree</h2>
  <div class="sub">Run this top to bottom. Stop at the first "yes."</div>
  <div class="fig">
    <div class="fig-title">The lever decision tree</div>
    <svg viewBox="0 0 520 340" xmlns="http://www.w3.org/2000/svg" font-family="Hanken Grotesk, sans-serif">
      <rect x="150" y="20" width="220" height="44" rx="8" fill="#ffffff" stroke="#1d1d1f" stroke-width="1.3"/>
      <text x="260" y="40" text-anchor="middle" font-size="12" font-weight="700" fill="#1d1d1f">Can better prompting +</text>
      <text x="260" y="56" text-anchor="middle" font-size="12" font-weight="700" fill="#1d1d1f">examples hit the bar?</text>
      <line x1="260" y1="64" x2="260" y2="92" stroke="#86868b" stroke-width="1.2"/>
      <rect x="370" y="30" width="120" height="30" rx="8" fill="#0a7d3c" opacity="0.12" stroke="#0a7d3c"/>
      <text x="430" y="50" text-anchor="middle" font-size="11" font-weight="700" fill="#0a7d3c">YES → Prompt</text>
      <line x1="370" y1="45" x2="370" y2="45" stroke="#0a7d3c"/>
      <line x1="334" y1="42" x2="370" y2="45" stroke="#0a7d3c" stroke-width="1.2"/>

      <rect x="150" y="92" width="220" height="44" rx="8" fill="#ffffff" stroke="#1d1d1f" stroke-width="1.3"/>
      <text x="260" y="112" text-anchor="middle" font-size="12" font-weight="700" fill="#1d1d1f">Does it need facts / private</text>
      <text x="260" y="128" text-anchor="middle" font-size="12" font-weight="700" fill="#1d1d1f">or changing knowledge?</text>
      <line x1="260" y1="136" x2="260" y2="164" stroke="#86868b" stroke-width="1.2"/>
      <rect x="370" y="102" width="120" height="30" rx="8" fill="#0071e3" opacity="0.12" stroke="#0071e3"/>
      <text x="430" y="122" text-anchor="middle" font-size="11" font-weight="700" fill="#0058b0">YES → RAG</text>
      <line x1="334" y1="114" x2="370" y2="117" stroke="#0071e3" stroke-width="1.2"/>

      <rect x="150" y="164" width="220" height="44" rx="8" fill="#ffffff" stroke="#1d1d1f" stroke-width="1.3"/>
      <text x="260" y="184" text-anchor="middle" font-size="12" font-weight="700" fill="#1d1d1f">Is it a narrow, repeated task</text>
      <text x="260" y="200" text-anchor="middle" font-size="12" font-weight="700" fill="#1d1d1f">at huge scale, bar still missed?</text>
      <line x1="260" y1="208" x2="260" y2="240" stroke="#86868b" stroke-width="1.2"/>
      <rect x="150" y="240" width="220" height="40" rx="8" fill="#b25000" opacity="0.12" stroke="#b25000"/>
      <text x="260" y="258" text-anchor="middle" font-size="11" font-weight="700" fill="#b25000">ONLY NOW → Fine-tune</text>
      <text x="260" y="273" text-anchor="middle" font-size="10" fill="#86868b">and prove the cheaper levers failed first</text>
      <text x="260" y="312" text-anchor="middle" font-size="11" fill="#86868b">90% of products never need to reach the bottom box.</text>
    </svg>
    <div class="fig-cap">The order is the whole point: cheapest lever first, fine-tuning last and rarely.</div>
  </div>

  <h2><span class="ix">5</span> Frameworks to Deploy</h2>
  <h3>① "Behavior vs knowledge" split</h3>
  <p>First question for any request: is the gap a <strong>behavior</strong> gap (it answers in the wrong style/format) or a <strong>knowledge</strong> gap (it doesn't know our facts)? Behavior → prompt, then maybe fine-tune. Knowledge → RAG. Naming this correctly settles most debates instantly.</p>
  <h3>② The "earn the fine-tune" rule</h3>
  <p>Fine-tuning is allowed only after you can show, with evals, that prompting and RAG were tried and fell short — and that the task is narrow and high-volume enough that the maintenance cost pays back. Make the team produce that evidence. Usually producing it reveals the cheaper lever actually works.</p>

  <h2><span class="ix">6</span> Worked Solution</h2>
  <div class="callout">
    <div class="ch">The prompt</div>
    <p style="font-family:var(--font-ui);font-weight:600;">"A founder says: 'Let's fine-tune our own model on all our company docs so it becomes an expert in our product.' You report to him. What do you say?"</p>
  </div>
  <p><strong>Step 1 — Diagnose the lever confusion (kindly).</strong> "Docs" = facts = a knowledge gap. Fine-tuning bakes behavior into weights; it's the wrong tool for facts that also change every release. Fine-tuning on docs would produce a model that <em>sounds</em> expert but still hallucinates specifics — and goes stale the day the docs update.</p>
  <p><strong>Step 2 — Propose the cheaper path.</strong> "This is a RAG problem. We index the docs, retrieve the relevant ones per question, and the model answers from them — with citations. We ship in days, it updates instantly when docs change, and answers are verifiable."</p>
  <p><strong>Step 3 — Leave the door open honestly.</strong> "If, after RAG, we find the model still writes in the wrong voice or fumbles one narrow high-volume task, <em>then</em> fine-tuning for that specific behavior is on the table — and I'll bring evals to prove it's worth the maintenance cost."</p>
  <div class="callout good">
    <div class="ch">Why this wins</div>
    <p>You saved months and budget, fixed the real problem (knowledge → RAG), and didn't just say "no" — you gave a faster path to the founder's actual goal and kept fine-tuning as an evidence-gated option. That's how you challenge an idea without killing trust.</p>
  </div>

  <h2><span class="ix">7</span> Industry Case</h2>
  <div class="sub">Real company, real choice.</div>
  <h3>Harvey — built on frontier models + RAG, not a fine-tuned-from-scratch model</h3>
  <p>You'd assume the leading legal-AI company trained its own bespoke legal model. It largely didn't. Harvey is built on top of frontier models, layered with domain data and RAG over authoritative legal databases. The product advantage came from <strong>retrieval quality, workflow design, and grounding</strong> — the cheaper levers — rather than from sinking months into training a model from scratch.</p>
  <p>This is the lesson in the wild: even in the most specialized, highest-stakes domain, the winning move was to reach for prompting and RAG first and let frontier models do the heavy lifting. Teams that opened with "we'll train our own legal model" mostly aren't the ones serving the Fortune 500 today.</p>
  <div class="callout accent">
    <div class="ch">The PM takeaway</div>
    <p>If the leading legal-AI company didn't need to fine-tune from scratch to win, your seed-stage startup almost certainly doesn't either. Default to the cheap levers. Make fine-tuning earn its place.</p>
  </div>

  <h2><span class="ix">✓</span> Check Yourself</h2>
  <div class="quiz" data-correct="1">
    <div class="q">Your product needs to answer questions about your pricing, which changes monthly. Which lever?</div>
    <div class="opt" data-i="0"><span class="l">A</span><span>Fine-tune on the pricing sheet.</span></div>
    <div class="opt" data-i="1"><span class="l">B</span><span>RAG — pricing is changing factual knowledge; retrieve it fresh each time.</span></div>
    <div class="opt" data-i="2"><span class="l">C</span><span>Fine-tune monthly to keep it current.</span></div>
    <div class="opt" data-i="3"><span class="l">D</span><span>Nothing — the model already knows.</span></div>
    <div class="qexp">Changing facts belong in RAG, never in weights. Fine-tuning on monthly-changing data means re-training monthly — absurd cost for something retrieval handles instantly and correctly.</div>
  </div>
  <div class="quiz" data-correct="3">
    <div class="q">When is fine-tuning actually the right call?</div>
    <div class="opt" data-i="0"><span class="l">A</span><span>Whenever you want the model to know your docs.</span></div>
    <div class="opt" data-i="1"><span class="l">B</span><span>At the start, to build real IP.</span></div>
    <div class="opt" data-i="2"><span class="l">C</span><span>Whenever a founder asks for it.</span></div>
    <div class="opt" data-i="3"><span class="l">D</span><span>A narrow, high-volume task where prompting and RAG provably fell short and maintenance cost pays back.</span></div>
    <div class="qexp">Fine-tuning is the last lever, for ingrained behavior on narrow repeated tasks at scale — and only after evals prove the cheaper levers weren't enough.</div>
  </div>
  <h2><span class="ix">✎</span> Apply It Yourself</h2>
  <div class="sub">No worked answer this time — this one's your rep. Give it 10 minutes before you move on.</div>
  <div class="callout">
    <div class="ch">Your problem</div>
    <p style="font-family:var(--font-ui);font-weight:600;">"A founder says: 'Let's fine-tune our own model on all our company docs so it becomes an expert in our product.' You report to him. Pick the right lever and justify it in two sentences."</p>
  </div>
  <p><strong>Hints</strong> (peek only if you're stuck):</p>
  <ul>
    <li>Separate behavior from knowledge — which one is 'our docs'?</li>
    <li>Walk the decision tree: prompt → RAG → fine-tune, cheapest first.</li>
    <li>The trap: agreeing to fine-tune because it sounds like real IP.</li>
  </ul>
  <table>
    <tr><th>A strong answer...</th><th>A weak answer...</th></tr>
    <tr><td>Names it a knowledge problem → RAG; explains fine-tuning bakes behavior, not changing facts that update.</td><td>Agrees to fine-tune on the docs.</td></tr>
    <tr><td>Keeps fine-tuning as an evidence-gated last resort.</td><td>Treats fine-tuning as the default.</td></tr>
    <tr><td>Offers the faster path to the founder's actual goal.</td><td>Just says 'no.'</td></tr>
  </table>
  <div class="callout accent">
    <div class="ch">Make it live</div>
    <p>Take a product idea of your own and decide its lever (prompt / RAG / fine-tune). Could you defend that choice to a skeptical engineer?</p>
  </div>
  __NAV__
</div>
`,

/* ---------------------------------------------------------------- 1.4 */
"1.4": `
<div class="wrap">
  <div class="les-kicker">Chapter 1 · Lesson 1.4</div>
  <h1 class="les-title">Scaling, Latency, Cost & Failure Modes</h1>
  <div class="les-meta">
    <span class="pill">Technical literacy</span><span class="pill">~26 min read</span>
    <span class="pill">Prereq: 1.1–1.3</span><span class="pill">Difficulty: core</span>
  </div>
  <p class="motto">Every AI product is beautiful in the demo. The demo runs once, on one easy query, with someone else paying the bill. Your job is to design for the 10,000th user at 2am on the hardest query.</p>

  <p class="lead">This lesson is about the gap between "it works" and "it works at scale, profitably, when things go wrong." It's where most AI products quietly die — and where the most painful, public failures of 2025 happened. Learn the four failure modes, the cost math, and the latency reality, and you'll design products that survive contact with real usage.</p>

  <h2><span class="ix">1</span> Your Mandate</h2>
  <div class="sub">What you own once the thing actually has users.</div>
  <p>Your mandate is to <strong>own the unit economics and the failure behavior</strong> before launch, not after the bill arrives. Two numbers must live in your head: <em class="k">cost per task at scale</em> and <em class="k">p95 latency under load</em>. And one design question must be answered for every component: <em class="k">what does the user experience when this breaks?</em></p>

  <h2><span class="ix">2</span> Your Responsibilities — The Four Failure Modes</h2>
  <div class="sub">Every AI system fails in one of these four ways. You design the response to each.</div>
  <table>
    <tr><th>Failure mode</th><th>Looks like</th><th>Your product response</th></tr>
    <tr><td><strong>It's wrong</strong> (hallucination)</td><td>Confident, plausible, false</td><td>Citations, confidence thresholds, "not sure" fallback</td></tr>
    <tr><td><strong>It's slow</strong> (latency)</td><td>Spinner of death on hard queries</td><td>Streaming, timeouts, a fast cheap fallback model</td></tr>
    <tr><td><strong>It's down</strong> (availability)</td><td>Model API errors / rate limits</td><td>Retries, a backup provider, graceful degraded mode</td></tr>
    <tr><td><strong>It's expensive</strong> (cost)</td><td>Margin evaporates as usage grows</td><td>Caching, model routing, usage caps, right-sized models</td></tr>
  </table>

  <h2><span class="ix">3</span> Metrics That Matter Here — and the Cost Math</h2>
  <div class="sub">The whiteboard math an interviewer will ask you to do live.</div>
  <p>Cost per task is the number that kills startups. The math is simple and you must be able to do it out loud:</p>
  <div class="flow">
<span class="nt"># Per task</span>
cost = (input_tokens + output_tokens) × price_per_token
     + retrieval_cost
     + (retries × the above)

<span class="nt"># Then multiply by tasks/user/day × users.</span>
<span class="nt"># A $0.03 task feels free — until 100k users × 20/day = $60k/day.</span>
  </div>
  <div class="fig">
    <div class="fig-title">Why "cheap per task" lies — the scale curve</div>
    <svg viewBox="0 0 520 270" xmlns="http://www.w3.org/2000/svg" font-family="Hanken Grotesk, sans-serif">
      <line x1="60" y1="220" x2="500" y2="220" stroke="#1d1d1f" stroke-width="1.2"/>
      <line x1="60" y1="220" x2="60" y2="30" stroke="#1d1d1f" stroke-width="1.2"/>
      <text x="280" y="252" text-anchor="middle" font-size="11" fill="#86868b">usage  (demo  →  growth  →  scale)</text>
      <text x="28" y="125" text-anchor="middle" font-size="11" fill="#86868b" transform="rotate(-90 28 125)">total cost</text>
      <path d="M60,215 C200,210 300,180 380,120 C430,82 470,55 495,40" fill="none" stroke="#0071e3" stroke-width="2.4"/>
      <line x1="60" y1="150" x2="500" y2="150" stroke="#b25000" stroke-width="1" stroke-dasharray="5 4"/>
      <text x="498" y="143" text-anchor="end" font-size="10" font-weight="700" fill="#b25000">revenue / margin line</text>
      <circle cx="120" cy="212" r="4" fill="#0a7d3c"/><text x="120" y="200" text-anchor="middle" font-size="10" fill="#0a7d3c" font-weight="700">demo: fine</text>
      <circle cx="400" cy="105" r="4" fill="#b25000"/><text x="400" y="95" text-anchor="middle" font-size="10" fill="#b25000" font-weight="700">crosses the line</text>
    </svg>
    <div class="fig-cap">The per-task cost looks trivial early. At scale the curve crosses your margin line — and the product becomes a money pit unless you engineered cost controls in from the start.</div>
  </div>

  <h2><span class="ix">4</span> How to Think Here — Latency Is a Distribution, Not a Number</h2>
  <div class="fig">
    <div class="fig-title">p50 vs p95 — the number you brag about vs the one users feel</div>
    <svg viewBox="0 0 520 250" xmlns="http://www.w3.org/2000/svg" font-family="Hanken Grotesk, sans-serif">
      <line x1="50" y1="200" x2="500" y2="200" stroke="#1d1d1f" stroke-width="1.2"/>
      <text x="275" y="232" text-anchor="middle" font-size="11" fill="#86868b">response time  →</text>
      <path d="M50,200 C120,200 150,60 200,60 C250,60 280,150 340,175 C400,193 460,197 500,199" fill="#0071e3" opacity="0.14" stroke="#0071e3" stroke-width="1.8"/>
      <line x1="185" y1="40" x2="185" y2="200" stroke="#0a7d3c" stroke-width="1.4" stroke-dasharray="4 3"/>
      <text x="185" y="32" text-anchor="middle" font-size="11" font-weight="700" fill="#0a7d3c">p50 ≈ 1.1s</text>
      <text x="185" y="220" text-anchor="middle" font-size="9" fill="#0a7d3c">"our average!"</text>
      <line x1="380" y1="40" x2="380" y2="200" stroke="#b25000" stroke-width="1.4" stroke-dasharray="4 3"/>
      <text x="395" y="32" text-anchor="middle" font-size="11" font-weight="700" fill="#b25000">p95 ≈ 8s</text>
      <text x="405" y="220" text-anchor="middle" font-size="9" fill="#b25000">what 1-in-20 feel</text>
    </svg>
    <div class="fig-cap">The long right tail is your hardest, often most valuable queries. Design and report on p95, not the mean.</div>
  </div>
  <p>The mental model: <strong>latency and cost are distributions with long tails, and the tail is where the danger lives.</strong> Averages hide the queries that hurt. When you scope a feature, ask for the p95 and the worst-case cost, never just the average. The demo only ever shows you the happy middle of the curve.</p>

  <h2><span class="ix">5</span> Frameworks to Deploy</h2>
  <h3>① Model routing (cheap-by-default)</h3>
  <p>Don't send every query to the biggest model. Route easy queries to a small/cheap model, escalate hard ones. This is exactly how Perplexity manages cost and latency. It can cut cost-per-task dramatically with almost no quality loss on the easy majority.</p>
  <h3>② Cache the repeats</h3>
  <p>A large share of real traffic is duplicate or near-duplicate questions. Caching common answers means you don't pay for retrieval + generation every time. Often the single biggest cost win available.</p>
  <h3>③ Design the degraded mode</h3>
  <p>Decide in advance what the product does when the model is slow or down: a faster cheaper model, a cached answer, or an honest "try again in a moment." A graceful degraded mode is a product feature you own — not an afterthought eng bolts on after the first outage.</p>

  <h2><span class="ix">6</span> Worked Solution</h2>
  <div class="callout">
    <div class="ch">The prompt</div>
    <p style="font-family:var(--font-ui);font-weight:600;">"Our AI feature crushed it in beta with 500 users. We're about to open to 100,000. What breaks, and what do you do before launch?"</p>
  </div>
  <p><strong>Step 1 — Run the cost math.</strong> Take beta cost-per-task × projected tasks/user/day × 100k. If a $0.04 task at 15 tasks/day hits 100k users, that's $60k/day = ~$1.8M/month. <strong>Does revenue cover that?</strong> If not, the product is insolvent at scale and that's the #1 thing to fix before launch.</p>
  <p><strong>Step 2 — Add cost controls now:</strong> model routing (cheap model for easy queries), caching for repeats, and a hard per-user usage cap so a few power users can't blow the budget.</p>
  <p><strong>Step 3 — Check the latency tail.</strong> Beta at 500 users never stressed the model API. At 100k I'd expect rate limits and a worse p95. Add streaming so it <em>feels</em> fast, timeouts with a fallback model, and a backup provider for outages.</p>
  <p><strong>Step 4 — Design degraded mode + a kill switch.</strong> Decide what users see when things break, and ship a feature flag to throttle or disable if costs spike unexpectedly. <strong>Launch behind a gradual ramp (1% → 10% → 100%), not a big-bang open.</strong></p>
  <div class="callout good">
    <div class="ch">Why this wins</div>
    <p>You caught the silent killer (unit economics) with math, controlled cost and latency before they bit, designed for failure, and de-risked the launch with a ramp. This is the difference between a PM who ships demos and one who ships products.</p>
  </div>

  <h2><span class="ix">7</span> Industry Case</h2>
  <div class="sub">Real company, real scaling pain — with receipts.</div>
  <h3>Cursor — the $1B product whose unit economics broke in public</h3>
  <p>Cursor, the AI code editor, became one of the fastest-growing AI products ever — crossing roughly <strong>$1B in annualized revenue with over a million paying developers</strong>, used inside companies like Stripe and OpenAI. And in 2025 it ran straight into the wall this lesson is about.</p>
  <ul>
    <li><strong>The subsidy bet.</strong> Cursor's early "$20/month, generous limits" plan effectively subsidized expensive frontier-model usage to win adoption — betting that a developer's lifetime value would dwarf the per-request API cost. The classic "cheap per task" assumption.</li>
    <li><strong>The wall.</strong> As users leaned harder on the most expensive models and long-context "agent" tasks, that flat pricing became unsustainable. The hardest requests can cost many times a simple one. On <strong>June 16, 2025</strong> Cursor moved to usage-based pricing tied to real API costs.</li>
    <li><strong>The trust scar.</strong> The rollout was poorly communicated — some users saw surprise overage bills, and "unlimited" turned out to mean only the auto-selected model. The CEO publicly apologized around <strong>July 4, 2025</strong> and refunded unexpected charges. The product survived; the trust took a hit that forums still reference.</li>
  </ul>
  <div class="callout accent">
    <div class="ch">The PM takeaway</div>
    <p>A billion-dollar product nearly tripped over cost-per-task and the latency/cost tail — the exact things this lesson told you to own. And note the second failure: the <em>communication</em> of the pricing change did more reputational damage than the change itself. Unit economics and how you tell users about them are both your job.</p>
  </div>

  <h2><span class="ix">✓</span> Check Yourself</h2>
  <div class="quiz" data-correct="2">
    <div class="q">A feature costs $0.05 per task in beta and feels free. Why might it bankrupt the product at scale?</div>
    <div class="opt" data-i="0"><span class="l">A</span><span>It won't — $0.05 is always cheap.</span></div>
    <div class="opt" data-i="1"><span class="l">B</span><span>Because beta users are nicer.</span></div>
    <div class="opt" data-i="2"><span class="l">C</span><span>cost × tasks/user/day × users can dwarf revenue; the per-task number hides the total.</span></div>
    <div class="opt" data-i="3"><span class="l">D</span><span>Latency is the only thing that matters at scale.</span></div>
    <div class="qexp">$0.05 × 20 tasks/day × 100k users ≈ $100k/day. The per-task number feels trivial; the aggregate is what bankrupts you. Always multiply out — this is the Cursor lesson.</div>
  </div>
  <div class="quiz" data-correct="0">
    <div class="q">What's the cheapest, highest-impact lever to cut cost-per-task on an AI feature with lots of repeat queries?</div>
    <div class="opt" data-i="0"><span class="l">A</span><span>Cache common answers and route easy queries to a cheaper model.</span></div>
    <div class="opt" data-i="1"><span class="l">B</span><span>Always use the biggest model for consistency.</span></div>
    <div class="opt" data-i="2"><span class="l">C</span><span>Fine-tune to reduce tokens.</span></div>
    <div class="opt" data-i="3"><span class="l">D</span><span>Remove citations.</span></div>
    <div class="qexp">Caching kills repeat cost entirely, and routing sends the easy majority to cheap models. Together they cut cost dramatically with little quality loss — far cheaper and faster than fine-tuning.</div>
  </div>

  <h2><span class="ix">✎</span> Apply It Yourself</h2>
  <div class="sub">No worked answer this time — this one's your rep. Do the math on paper.</div>
  <div class="callout">
    <div class="ch">Your problem</div>
    <p style="font-family:var(--font-ui);font-weight:600;">"Your AI feature costs $0.08 per task in beta and feels free. You're about to open to 250,000 users who'll average 12 tasks/day. Compute the daily model bill. Does a $15/month plan survive it? Name the three levers you pull before launch."</p>
  </div>
  <p><strong>Hints</strong> (peek only if you're stuck):</p>
  <ul>
    <li>Multiply it out: cost × tasks/user/day × users. Then compare to monthly revenue.</li>
    <li>Remember the tail — power users cost far more than the average.</li>
    <li>The trap: trusting the per-task number because it 'feels cheap.'</li>
  </ul>
  <table>
    <tr><th>A strong answer...</th><th>A weak answer...</th></tr>
    <tr><td>Actually computes it (~$240k/day) and shows revenue can't cover it.</td><td>Says '$0.08 is cheap, we're fine.'</td></tr>
    <tr><td>Names real levers: caching, model routing, usage caps.</td><td>Says 'we'll optimize later.'</td></tr>
    <tr><td>Adds a launch ramp + a cost kill-switch.</td><td>Opens to all 250k at once.</td></tr>
  </table>
  <div class="callout accent">
    <div class="ch">Make it live</div>
    <p>This is the exact wall Cursor hit in 2025 (case 15.1). Re-read what they did and decide: would your three levers have saved their margins without the trust damage?</p>
  </div>

  <div class="callout good" style="margin-top:40px;">
    <div class="ch">Chapter 1 complete</div>
    <p>You can now map any AI system, find its bottleneck, choose the right lever, and design it to survive scale. That's the technical credibility that gets an AI PM hired. <strong>Chapter 2 — Agentic Architecture — is next.</strong></p>
  </div>
  __NAV__
</div>
`
