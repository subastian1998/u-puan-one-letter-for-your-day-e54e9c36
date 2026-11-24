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
import { mkdirSync, readFileSync, writeFileSync } from "node:fs";
import { join } from "node:path";

const LETTER = "Q";

// The gate requires exactly one character, A-Z, and nothing else:
// a lowercase letter, a digit, punctuation, or a trailing newline
// all fail it, so validate before writing anything.
function assertSingleLetter(letter) {
  if (typeof letter !== "string" || letter.length !== 1) {
    throw new Error(`entry must be exactly one character, got ${JSON.stringify(letter)}`);
  }
  if (letter < "A" || letter > "Z") {
    throw new Error(`entry must be a single letter A-Z, got ${JSON.stringify(letter)}`);
  }
}

assertSingleLetter(LETTER);

const outDir = process.env.MAKEFUN_OUTPUT_DIR ?? "/output";
mkdirSync(outDir, { recursive: true });
const outPath = join(outDir, "entry.txt");
writeFileSync(outPath, LETTER, "utf8");

// The written file must be exactly one byte: a trailing newline or
// any extra content would make the entry invalid, so verify the
// bytes on disk rather than trusting the write.
const written = readFileSync(outPath);
if (written.length !== 1 || written.toString("utf8") !== LETTER) {
  throw new Error(`entry file must hold exactly one byte (${LETTER}), got ${written.length}`);
}
console.log(`entry: ${LETTER}`);
