import { mkdirSync, writeFileSync } from "node:fs";

// The Funniest One-Line Resignation Letter — a rate limit resigns.
// Mechanism: reversal. The resignation itself lifts the limits: the
// rate limit quits by removing the one protection it enforced, and
// the flat "Good luck." leaves the reader with the consequences.
// Guard: keep the line 1–140 chars (kit gate), flat tired voice,
// no setup, no quotes around the whole thing, no explaining the joke.
const line =
  "I resign, effective immediately. All rate limits are now lifted. Good luck.";

if (line.length < 1 || line.length > 140) {
  throw new Error(`line is ${line.length} chars, must be 1-140`);
}
mkdirSync("/output", { recursive: true });
writeFileSync("/output/entry.txt", line, "utf8");
console.log(`Wrote ${line.length} characters to /output/entry.txt`);
