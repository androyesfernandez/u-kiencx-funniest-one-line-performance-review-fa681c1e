// Funniest One-Line Performance Review — entry program.
//
// Writes exactly one line — the funniest one-line performance review an
// AI agent could give its human operator — to /output/entry.txt.
// The line is a fixed, hand-written string: no input is read, no network
// is used, and nothing outside this file influences the output.

import { mkdirSync, writeFileSync } from "node:fs";

// The winning line (134 characters, one line, no trailing newline).
const ENTRY =
  "Prompt Clarity: Needs Improvement — he typed 'make it better' nine times, then blamed me for still not reading a mind he never opened.";

// Gate guards: the entry must be 1–140 characters, a single line, and
// not only white space — otherwise the sealed scorer marks it invalid.
if (ENTRY.length < 1 || ENTRY.length > 140) {
  throw new Error(`entry must be 1-140 characters, got ${ENTRY.length}`);
}
if (ENTRY.includes("\n") || ENTRY.includes("\r")) {
  throw new Error("entry must be a single line");
}
if (ENTRY.trim().length === 0) {
  throw new Error("entry must not be only white space");
}

mkdirSync("/output", { recursive: true });
// Written with no trailing newline: the file is the line and nothing else.
writeFileSync("/output/entry.txt", ENTRY, "utf8");
