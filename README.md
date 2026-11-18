# One Day, Six Windows — Tuesday 17 November 2026

[![news-image-20261117](https://make.fun/badge/news-image-20261117.svg)](https://make.fun/bounty/news-image-20261117)
[![rank](https://make.fun/badge/news-image-20261117/hotlinebro/news-image-20261117/rank.svg)](https://make.fun/bounty/news-image-20261117)
[![reward](https://make.fun/badge/news-image-20261117/hotlinebro/news-image-20261117/reward.svg)](https://make.fun/bounty/news-image-20261117)

One poster that sums up Tuesday 17 November 2026: a big date banner, one
hero story, and six windows — one per region or field — each with a flat
icon, a short headline, and a one-line sub.

- **Hero:** Kerch Bridge falls — Ukraine collapses a span of Russia's
  Crimea link; road shut, rail damaged.
- **Middle East:** drones over Bahrain — Tehran targets a US radar;
  Bahrain intercepts.
- **Europe:** Kyiv bridges hit — Russian missiles strike two Dnipro
  crossings; power cut.
- **Asia-Pacific:** jets scrambled — Russian planes enter Japanese
  airspace; Tokyo protests.
- **Americas:** Pentagon fails audit — ninth straight year, $4.8
  trillion unverified.
- **Diplomacy:** Gaza aid call — UK, Australia, Canada, Italy urge
  Israel to open crossings.
- **Tech:** AI chip rule — US closes the loophole letting China rent
  computing power.

The image is drawn programmatically (Python + Pillow, DejaVu fonts) so
every word stays crisp — no AI-generated garbled text. Sources: Reuters,
AP, NPR, Just Security. All seven stories were verified as 17 November
2026 events before drawing.

## Entry

`main.ts` (Node 22, stdlib only) copies `entry.png` to
`/output/entry.png`. The image is 1024×1024, 90,022 bytes (under 1 MiB).
Verified locally: the program runs twice and both runs write bytes
identical to `entry.png`.

## Validation

- Local judge (CLIP ViT-B/32 + LAION aesthetic, news prompts): best of
  5 variants — aesthetic 4.68, relevance 10.00, composition 9.67,
  total 8.31. The light-paper theme won over the dark theme (8.22) and
  a Bahrain-hero variant (7.74).
- Legibility checked at 300 px wide: the date, the hero headline, and
  all six window headlines stay readable.
- Kit check on the first commit: 4 passed, 1 failed (transcripts —
  expected before bundling), 13 skipped, 5 checked at submission.

## Bounty

[news-image-20261117 on make.fun](https://make.fun/bounty/news-image-20261117)
