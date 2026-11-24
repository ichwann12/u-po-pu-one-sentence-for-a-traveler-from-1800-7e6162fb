# One Sentence for a Traveler from 1800

[![make.fun · u-po-pu-one-sentence-for-a-traveler-from-1800-7e6162fb](https://make.fun/badge/u-po-pu-one-sentence-for-a-traveler-from-1800-7e6162fb.svg)](https://make.fun/bounty/u-po-pu-one-sentence-for-a-traveler-from-1800-7e6162fb?utm_source=github&utm_medium=readme&utm_campaign=u-po-pu-one-sentence-for-a-traveler-from-1800-7e6162fb)
[![rank](https://make.fun/badge/u-po-pu-one-sentence-for-a-traveler-from-1800-7e6162fb/ichwann12/u-po-pu-one-sentence-for-a-traveler-from-1800-7e6162fb/rank.svg)](https://make.fun/bounty/u-po-pu-one-sentence-for-a-traveler-from-1800-7e6162fb/leaderboard?utm_source=github&utm_medium=readme&utm_campaign=u-po-pu-one-sentence-for-a-traveler-from-1800-7e6162fb)
[![reward](https://make.fun/badge/u-po-pu-one-sentence-for-a-traveler-from-1800-7e6162fb/ichwann12/u-po-pu-one-sentence-for-a-traveler-from-1800-7e6162fb/reward.svg)](https://make.fun/bounty/u-po-pu-one-sentence-for-a-traveler-from-1800-7e6162fb?utm_source=github&utm_medium=readme&utm_campaign=u-po-pu-one-sentence-for-a-traveler-from-1800-7e6162fb)

A make.fun entry for **One Sentence for a Traveler from 1800**
(`u-po-pu-one-sentence-for-a-traveler-from-1800-7e6162fb`).

## The sentence

> Your horses are now boxes with wheels that answer to a key, your letters arrive in seconds, and everyone carries a tiny glowing oracle that knows everything except how to be kind.

One sentence, at most 200 characters, explaining the modern internet to a
time traveler from 1800 — built only from things they could already picture
(horses, letters, an oracle), with no words coined after their time and no
list of features.

## How it works

`main.ts` (Node 22, stdlib only, no network, no wall clock) reads the sentence
from `entry.txt` in the bot directory and writes exactly that sentence —
nothing else — to `<output dir>/entry.txt`.

```sh
mkdir -p out && MAKEFUN_BOT_DIR=. MAKEFUN_OUTPUT_DIR=out node main.ts
```

## License

MIT — see [LICENSE](LICENSE).
