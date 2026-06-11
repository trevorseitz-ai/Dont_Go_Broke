import fs from "node:fs";
import path from "node:path";
import OpenAI from "openai";
import Anthropic from "@anthropic-ai/sdk";

const openai = new OpenAI({
  apiKey: process.env.OPENAI_API_KEY,
});

const anthropic = new Anthropic({
  apiKey: process.env.ANTHROPIC_API_KEY,
});

const OPENAI_MODEL = process.env.OPENAI_MODEL;
const ANTHROPIC_MODEL = process.env.ANTHROPIC_MODEL;

const ROOT = process.cwd();
const BRIEFS_DIR = path.join(ROOT, "briefs");

function read(filePath) {
  return fs.readFileSync(filePath, "utf8");
}

function write(filePath, content) {
  fs.writeFileSync(filePath, content.trim() + "\n", "utf8");
}

function exists(filePath) {
  return fs.existsSync(filePath);
}

function listProviderFolders() {
  if (!exists(BRIEFS_DIR)) return [];

  return fs
    .readdirSync(BRIEFS_DIR)
    .map((name) => path.join(BRIEFS_DIR, name))
    .filter((fullPath) => fs.statSync(fullPath).isDirectory());
}

function validateEnvironment() {
  const missing = [];

  if (!process.env.OPENAI_API_KEY) missing.push("OPENAI_API_KEY");
  if (!process.env.ANTHROPIC_API_KEY) missing.push("ANTHROPIC_API_KEY");
  if (!OPENAI_MODEL) missing.push("OPENAI_MODEL");
  if (!ANTHROPIC_MODEL) missing.push("ANTHROPIC_MODEL");

  if (missing.length > 0) {
    throw new Error(`Missing required environment variables: ${missing.join(", ")}`);
  }
}

async function callOpenAI(prompt) {
  const response = await openai.responses.create({
    model: OPENAI_MODEL,
    input: prompt,
  });

  return response.output_text;
}

async function callClaude(prompt) {
  const message = await anthropic.messages.create({
    model: ANTHROPIC_MODEL,
    max_tokens: 12000,
    messages: [
      {
        role: "user",
        content: prompt,
      },
    ],
  });

  return message.content
    .map((block) => (block.type === "text" ? block.text : ""))
    .join("\n")
    .trim();
}

function getSeriesContext() {
  return `
SERIES CONTEXT

Series:
DON'T GO BROKE IN THE AGE OF AI

Format:
Short 5-page pamphlets for first-time solo AI app builders.

Established tone:
Clear, calm, warning-oriented, practical, slightly blunt, not anti-tool, not anti-AI, accessible to smart beginners.

User preference:
Trevor only wants to approve final copy. Do not ask him to choose tone or beginner traps.

Known provider traps already assigned:
- Replit: The agent keeps building past the beginner's understanding and budget.
- Vercel: Deployment feels like the finish line before the beginner understands production responsibility.

For each new provider:
- Research and identify two unique beginner traps.
- Choose the strongest main trap.
- Use the secondary trap as a sidebar, checklist item, or supporting warning.
- Do not duplicate previous provider traps.
- Keep provider-specific facts separate.
- Do not invent exact prices or limits.
- Use conservative claims when publication facts may change.
`;
}

function buildSpecPrompt(providerRequest) {
  return `
You are ChatGPT acting as prompt architect and editorial lead for Trevor's AI brief series.

TASK:
Create the final Claude prompt for the next provider brief.

${getSeriesContext()}

PROVIDER REQUEST:
${providerRequest}

REQUIREMENTS:
1. Identify two unique beginner traps for this provider.
2. Choose the strongest main trap.
3. Reserve the second trap as a secondary warning.
4. Explain briefly why this provider's trap does not duplicate Replit or Vercel.
5. Create a Claude-ready prompt that asks Claude to draft the full 5-page pamphlet.
6. Include source/fact-check targets Claude must be careful about.
7. The Claude prompt must request the pamphlet draft only, not extra commentary.
8. Do not ask Trevor questions.
9. Return a complete brief spec suitable to save as 01-brief-spec.md.

OUTPUT FORMAT:
# Brief Spec

## Provider

## Two Unique Beginner Traps

## Chosen Main Trap

## Secondary Trap

## Non-Duplication Note

## Claude Prompt
`;
}

function buildClaudeDraftPrompt(briefSpec) {
  return `
You are Claude. Write the first full draft of the pamphlet using the brief spec below.

IMPORTANT:
- Return the pamphlet draft only.
- Do not include meta commentary.
- Do not include "next steps."
- Do not include a changelog.
- Keep the established 5-page pamphlet structure.
- Use clear, calm, practical warning language.
- Do not invent exact prices or plan limits.

BRIEF SPEC:
${briefSpec}
`;
}

function buildReviewPrompt(briefSpec, claudeDraft) {
  return `
You are ChatGPT acting as fact-checker, editor, and final-copy producer.

TASK:
Review Claude's draft and decide whether you can produce publishable final copy directly or whether Claude must revise once.

${getSeriesContext()}

BRIEF SPEC:
${briefSpec}

CLAUDE DRAFT:
${claudeDraft}

DECISION RULE:
Only send back to Claude if there are serious factual problems, duplicated provider trap, structural failure, missing core warning, or too much generic content.

If the draft only needs line editing, tightening, removal of extra bits, fact-safe wording, or final polish, produce final copy yourself.

OUTPUT FORMAT:
Start with exactly one of these labels:

DECISION: FINALIZE

or

DECISION: REVISE

If FINALIZE:
Return the publishable pamphlet only after the decision line.
No notes, no alternatives, no changelog, no source scaffolding.

If REVISE:
Return only specific revision instructions for Claude after the decision line.
No final copy.
`;
}

function buildClaudeRevisionPrompt(briefSpec, claudeDraft, reviewNotes) {
  return `
You are Claude. Revise the pamphlet using the original brief spec and ChatGPT's revision instructions.

IMPORTANT:
- Return the revised pamphlet only.
- No notes.
- No changelog.
- No alternatives.
- No "next steps."
- Preserve the 5-page brief structure.

BRIEF SPEC:
${briefSpec}

ORIGINAL DRAFT:
${claudeDraft}

REVISION INSTRUCTIONS:
${reviewNotes}
`;
}

function buildFinalizerPrompt(briefSpec, revisedDraft) {
  return `
You are ChatGPT. Produce the final publishable pamphlet copy.

${getSeriesContext()}

BRIEF SPEC:
${briefSpec}

REVISED DRAFT:
${revisedDraft}

TASK:
Return the publishable brief only.

RULES:
- Remove notes, alternatives, changelog, source placeholders, and scaffolding.
- Keep only the final pamphlet copy.
- Preserve the 5-page pamphlet structure.
- Make claims conservative and publication-safe.
- Do not invent exact prices or plan limits.
- Do not include commentary to Trevor.
`;
}

async function processProvider(providerDir) {
  const requestPath = path.join(providerDir, "00-provider-request.md");
  const specPath = path.join(providerDir, "01-brief-spec.md");
  const draftPath = path.join(providerDir, "02-claude-draft.md");
  const reviewPath = path.join(providerDir, "03-openai-review.md");
  const revisionPath = path.join(providerDir, "04-claude-revision.md");
  const finalPath = path.join(providerDir, "05-final-copy.md");

  if (!exists(requestPath)) {
    return;
  }

  if (exists(finalPath)) {
    console.log(`Skipping ${providerDir}: final copy already exists.`);
    return;
  }

  const providerRequest = read(requestPath);

  if (!exists(specPath)) {
    console.log(`Creating brief spec for ${providerDir}`);
    const spec = await callOpenAI(buildSpecPrompt(providerRequest));
    write(specPath, spec);
  }

  const briefSpec = read(specPath);

  if (!exists(draftPath)) {
    console.log(`Creating Claude draft for ${providerDir}`);
    const draft = await callClaude(buildClaudeDraftPrompt(briefSpec));
    write(draftPath, draft);
  }

  const claudeDraft = read(draftPath);

  if (!exists(reviewPath)) {
    console.log(`Reviewing Claude draft for ${providerDir}`);
    const review = await callOpenAI(buildReviewPrompt(briefSpec, claudeDraft));
    write(reviewPath, review);
  }

  const review = read(reviewPath);

  if (review.startsWith("DECISION: FINALIZE")) {
    console.log(`Finalizing directly for ${providerDir}`);
    const finalCopy = review.replace(/^DECISION:\s*FINALIZE\s*/i, "").trim();
    write(finalPath, finalCopy);
    return;
  }

  if (!review.startsWith("DECISION: REVISE")) {
    throw new Error(
      `Review file must start with DECISION: FINALIZE or DECISION: REVISE. Check ${reviewPath}`
    );
  }

  if (!exists(revisionPath)) {
    console.log(`Creating Claude revision for ${providerDir}`);
    const revision = await callClaude(
      buildClaudeRevisionPrompt(briefSpec, claudeDraft, review)
    );
    write(revisionPath, revision);
  }

  const revisedDraft = read(revisionPath);

  console.log(`Creating final copy after Claude revision for ${providerDir}`);
  const finalCopy = await callOpenAI(buildFinalizerPrompt(briefSpec, revisedDraft));
  write(finalPath, finalCopy);
}

async function main() {
  validateEnvironment();

  const providerFolders = listProviderFolders();

  if (providerFolders.length === 0) {
    console.log("No provider folders found.");
    return;
  }

  for (const providerDir of providerFolders) {
    await processProvider(providerDir);
  }
}

main().catch((error) => {
  console.error(error);
  process.exit(1);
});
