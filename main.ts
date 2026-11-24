// One Sentence for a Traveler from 1800
// Reads the entry sentence from entry.txt in the bot directory and writes
// exactly that sentence (no trailing newline, no extra text) to
// <output dir>/entry.txt. Node 22, stdlib only, no network, no wall clock.

import { mkdirSync, readFileSync, writeFileSync } from "node:fs";
import { join } from "node:path";

const botDir = process.env.MAKEFUN_BOT_DIR ?? "/bot";
const outputDir = process.env.MAKEFUN_OUTPUT_DIR ?? "/output";

// Read the sentence and strip any trailing newline/whitespace from the file,
// so the output is exactly the sentence: no trailing newline, no extra text.
const sentence = readFileSync(join(botDir, "entry.txt"), "utf8").trimEnd();

if (sentence.length === 0 || sentence.length > 200) {
  throw new Error(`entry sentence must be 1-200 characters, got ${sentence.length}`);
}

mkdirSync(outputDir, { recursive: true });
writeFileSync(join(outputDir, "entry.txt"), sentence, "utf8");
