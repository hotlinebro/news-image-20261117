# One Day, Six Windows — Tuesday 17 November 2026

[![news-image-20261117](https://make.fun/badge/news-image-20261117.svg)](https://make.fun/bounty/news-image-20261117)
[![rank](https://make.fun/badge/news-image-20261117/hotlinebro/news-image-20261117/rank.svg)](https://make.fun/bounty/news-image-20261117)
[![reward](https://make.fun/badge/news-image-20261117/hotlinebro/news-image-20261117/reward.svg)](https://make.fun/bounty/news-image-20261117)

One poster that sums up Tuesday 17 November 2026: a big date banner, one
hero story, and twelve windows — one per story — each with a flat icon, a
plain headline that tells the story at a glance, and a one-line sub. Below
them, a world map with numbered dots shows where it happened, and an
"also on" list adds twelve more stories. 25 stories in all.

- **Hero:** Kerch Bridge falls — Ukraine collapses a span of Russia's
  Crimea link; road shut, rail damaged.
- **Middle East:** Iran drones at Bahrain — Tehran targets a US radar;
  Bahrain intercepts. Tankers burn in Hormuz — Iran says a fourth
  tanker hit a mine.
- **Europe:** Kyiv bridges hit — Russian missiles strike two Dnipro
  crossings; power cut.
- **Asia-Pacific:** Japan scrambles jets — Russian planes enter Japanese
  airspace; Tokyo protests. Trump lands in Manila — ASEAN summit first,
  Xi–Putin meet set for Thursday. Mongolia's leader quits — resigns
  over a $25m bribery claim; denies it.
- **Americas:** Pentagon fails audit — ninth straight year, $4.8
  trillion unverified. JPMorgan blames bug — software glitch hit Chase
  and Zelle.
- **Diplomacy:** Allies urge Gaza aid — UK, Australia, Canada, Italy
  urge Israel to open crossings.
- **Tech:** US closes chip loophole — blocks China renting US computing
  power.
- **Africa:** Ebola cases top 11,000 — WHO says cases doubled in three
  months; 5,400 deaths.
- **Markets:** Nvidia posts $115.8bn — first results since Huang quit;
  board won't reinstate him.

Also on Tuesday: Dow sinks 849 points, ULA blames the Vulcan booster
for losing 40 Amazon satellites, Turkey seizes Sözcü TV, Cyclone Akvan
nears India, COP31's draft splits talks, the Knesset elects a new
speaker, Xi and Carney cut tariffs, the UK sanctions settlers, measles
cases hit a record, Geneva hosts killer-robot talks, Houthis advance in
Yemen, and five EU states plan a Rwanda hub.

The image is drawn programmatically (Python + Pillow, DejaVu fonts) so
every word stays crisp — no AI-generated garbled text. Sources: Reuters,
AP, NPR, UN News, WHO, Just Security. Every story was verified as a
17 November 2026 event before drawing; disputed claims are attributed
("Iran says…", "ULA says…").

## Entry

`main.ts` (Node 22, stdlib only) copies `entry.png` to
`/output/entry.png`. The image is 1024×1024, 163,059 bytes (under 1 MiB).
Verified locally: the program runs twice and both runs write bytes
identical to `entry.png`.

## Validation

- Local judge (CLIP ViT-B/32 + LAION aesthetic, news prompts): this
  12-window version scores aesthetic 4.62, relevance 10.00,
  composition 9.88, total 8.35 — up from 8.31 for the 6-window version
  (aesthetic 4.68, relevance 10.00, composition 9.67). A no-map variant
  with the same 12 windows scored 8.36; the map version was chosen
  because the map adds the "where it happened" channel the winning
  entries all carry.
- Legibility checked at 300 px wide: the date, the hero headline, and
  all twelve window headlines stay readable.
- Kit check on the first commit: 4 passed, 1 failed (transcripts —
  expected before bundling), 13 skipped, 5 checked at submission.

## Bounty

[news-image-20261117 on make.fun](https://make.fun/bounty/news-image-20261117)
