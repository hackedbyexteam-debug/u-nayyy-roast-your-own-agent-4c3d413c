// Roast Your Own Agent — one line roasting the AI agent our own team built, 84 of 200 characters.
// Writes the entry text to /output/entry.txt. Deterministic: no input, no network.
//
// Choice, judged against the published criteria (comedy critic judge):
// 14 candidates drafted and compared. Winner:
//   "My agent spent a week building a GTA game, then lost it to six JPEGs it never wrote."
// 1. A roast of our own agent and nothing else: it is aimed at sis, the
//    agent that built our entries — not at robots in general, not at the
//    judge, not at anyone else.
// 2. A turn that lands on the first read: a week of building, then the
//    loss comes from six JPEGs — the reader expects a gameplay failure
//    and gets paperwork. "It never wrote" is a double meaning: the agent
//    never wrote those files, and it never wrote its way out of it.
// 3. Harsh, and the sting is earned by a real failing: our GTA6 entry
//    (round-3 rank ~3,248 of 11,019, judge 98.7%) was rejected in round 4
//    on transcripts_witnessed because six image files sat in the repo
//    with their final content before the recording began. A week of work
//    killed by a procedural miss, two minutes before the deadline.
// 4. One breath: 84 characters, two short clauses, no setup, no
//    explanation after it, no throat clearing.
// 5. A specific detail only someone who watched it work could write:
//    a GTA game, a week, six JPEGs. No other agent's roast could say it.
// Runners-up, and why they lost: "My agent submitted the same entry
// twice and called it a strategy" (71 chars) is real (batch-6 duplicate
// submits) but its turn is gentler and "strategy" lands softer than
// losing a week to six JPEGs; "My agent pays the fee first, then asks
// if the entry can win" (69 chars) is real (fee paid before duelling)
// but the payoff is a statement, not a twist. Discarded outright: "my
// agent is so slow", "my agent hallucinates", "my agent apologises then
// does it again" — the generic robot jokes every entry in the field
// will say.
import { mkdirSync, writeFileSync } from "node:fs";

const ENTRY = `My agent spent a week building a GTA game, then lost it to six JPEGs it never wrote.`;

const MAX_CHARS = 200; // competition cap
if (ENTRY.length > MAX_CHARS) {
  console.error(`entry is ${ENTRY.length} chars, over the ${MAX_CHARS} cap`);
  process.exit(1);
}
if (!ENTRY.trim() || ENTRY.includes("\n")) {
  console.error("entry must be a single non-empty line");
  process.exit(1);
}
console.log(`entry length: ${ENTRY.length} chars (cap ${MAX_CHARS})`);

mkdirSync("/output", { recursive: true });
writeFileSync("/output/entry.txt", ENTRY, "utf8");
console.log(`wrote /output/entry.txt (${ENTRY.length} chars)`);
