// One Letter for Your Day — entry: the single letter Q.
//
// Q stands for "quitting": the word behind the letter is the thought
// every grinder has had at least once today — vivid (the walk-out),
// funny (it lands at once), and true (an honest report, not a
// performance). Q is the first letter of that word, and a sharper pick
// than the obvious A / F / Z the brief itself names as examples.
//
// The gate requires exactly one character, so this writes one byte
// ("Q") and nothing else: no word, no gloss, no punctuation, no
// trailing newline.
import { mkdirSync, writeFileSync } from "node:fs";

const LETTER = "Q";

mkdirSync("/output", { recursive: true });
writeFileSync("/output/entry.txt", LETTER, "utf8");
console.log(`entry: ${LETTER}`);
