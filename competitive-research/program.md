# Crown Years — Competitive Research Protocol

Adapted from Karpathy's autoresearch pattern. One metric, keep/discard loop, TSV logging, bounded sessions.

## Purpose

Systematically monitor and learn from competitors in the midlife women's market. Every session improves our understanding of what works, what doesn't, and where Crown Years should move next.

## The Metric — Steal Score

Every competitor insight gets scored 1-10 on three dimensions:

| Dimension | 1 (weak) | 5 (moderate) | 10 (strong) |
|---|---|---|---|
| **Applicability** | Interesting but not relevant to Crown Years | Could adapt with effort | Directly applicable, can implement this week |
| **Proven** | Theory or guess | Some evidence it works | Clear revenue/growth proof |
| **Gap** | We already do this | We partially do this | We don't do this at all and should |

**Steal Score = (A × P × G) / 10**

- **Score > 50** → implement immediately
- **Score 20-50** → add to roadmap
- **Score < 20** → log and move on

## The Competitors — Watchlist

### Tier 1 (Direct — same audience, different angle)
- **NOON / Eleanor Mills** — noon.org.uk, substack.noon.org.uk — community, newsletter, events
- **Sixty and Me** — sixtyandme.com — content, YouTube, community (skews 60+)
- **NextTribe** — nexttribe.com — editorial + travel experiences
- **Prime Women** — primewomen.com — online magazine
- **The Girlfriend (AARP)** — girlfriend.aarp.org — newsletter
- **The Flow Space** — theflowspace.com — online magazine

### Tier 2 (Adjacent — overlapping audience, different product)
- **Goop** — goop.com — lifestyle commerce + content
- **Boom! Beauty** — boombeauty.com — DTC beauty, Facebook marketing
- **Stripes** — stripesbeauty.com — menopause beauty, L Catterton backed
- **Trinny London** — trinnylondon.com — beauty DTC, founded by 50+ woman
- **Fabulous50s** — fabulous50s.com — YouTube fitness, 2.2M subs

### Tier 3 (Model — not same audience but same playbook)
- **Morning Brew** — newsletter → acquisition by Insider ($75M)
- **theSkimm** — newsletter → acquisition by Ziff Davis
- **The Hustle** — newsletter → acquisition by HubSpot
- **Bon Appetit / Epicurious** — editorial → commerce model

## Session Protocol

Each research session is bounded: 10-15 minutes, 5-8 insights, log everything.

### Step 1: Pick a focus
Choose ONE of:
- **New competitor scan** — search for new players entering the midlife women market
- **Deep dive on one competitor** — analyze their latest content, products, pricing, traffic
- **Channel analysis** — what's working on Pinterest / Instagram / YouTube / Facebook for this demo
- **Product scan** — what digital products are selling on Etsy/Gumroad for women 45+
- **Content gap scan** — what are competitors ranking for that we're not covering

### Step 2: Research
Search → extract key findings → score each insight.

For each insight, note:
- What the competitor is doing
- Evidence it's working (traffic, revenue, engagement, growth)
- How Crown Years could apply it
- Steal Score (A × P × G / 10)

### Step 3: Log to TSV
Append every finding to `competitive-research/findings.tsv`.

### Step 4: Decide
- **Score ≥ 50** → add to Crown Years backlog as HIGH priority
- **Score 20-50** → add to backlog as MEDIUM priority
- **Score < 20** → logged for reference, move on

## Logging Format

`competitive-research/findings.tsv` — tab-separated:

```
date	competitor	finding	score	A	P	G	status	action
```

- **date** — YYYY-MM-DD
- **competitor** — company name
- **finding** — what they're doing (1-2 sentences)
- **score** — Steal Score
- **A/P/G** — individual dimension scores
- **status** — `implement`, `roadmap`, or `noted`
- **action** — specific next step for Crown Years (blank for `noted`)

## Rules

- **Don't admire, steal.** Every finding must end with "How does this apply to Crown Years?"
- **Evidence over theory.** A competitor doing something doesn't mean it works. Look for proof: revenue, traffic growth, engagement, subscriber counts.
- **One session, one focus.** Don't try to research everything at once. Pick a theme.
- **Log everything.** Even "noted" items compound into patterns over time.
- **Credit-conscious.** 5-8 web searches max per session. Extract signal fast.
- **Check the TSV first.** Before researching, read existing findings to avoid duplicate work.
