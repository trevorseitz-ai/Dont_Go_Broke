# Publication Brief

## Publication Information

**Title:** After Launch, the Meter Still Runs
**Publication Type:** Booklet
**Series:** Don’t Go Broke
**Version:** v1.0
**Status:** Approved for Publishing Factory handoff

## Purpose

Create a short, practical booklet for first-time AI builders that teaches them how to operate, monitor, and maintain their application after it launches.

The booklet should help the reader shift their mindset from "building a static product" to "operating a living system" by exposing hidden recurring costs, silent AI drift, and the responsibility of having users.

## Audience

This publication is for first-time AI app builders who have launched (or are about to launch) their first AI-generated version, draft, prototype, or demo into the real world.

Primary readers include:
- solo founders
- side-project builders
- students
- hobby developers
- non-technical founders
- small business owners experimenting with AI tools

Audience characteristics:
- beginner to early-intermediate experience
- limited budget
- relieved that the build is "done"
- unaware of how infrastructure scaling and token costs accumulate
- unprepared for APIs to deprecate or change behavior
- at risk of a surprise billing shock

The booklet must be understandable and useful to someone who thinks the finish line is deploying the code, but who needs to realize the starting line for operations just began.

## Core Lesson

Launch is not the end of the project; it is the beginning of operational responsibility and recurring costs.

## Required Concepts

The publication must include the following concepts:
- Building is a one-time cost; operating is a recurring cost.
- Tokens, databases, and compute scale automatically—which means your bills scale automatically.
- Setting hard limits and billing alerts is non-negotiable.
- AI drift: Language models change their behavior over time without you touching the code.
- Dependency decay: The APIs you rely on will deprecate or break.
- Having users means having a responsibility to keep the app secure and functional.
- The difference between active iteration (building) and passive monitoring (operating).
- Knowing when to shut a project down gracefully.

## Required Sections

Publishing Factory may improve structure and wording, but it may not remove these sections without escalation.

Required sections:

1. **Introduction: The Finish Line Is the Starting Line**
   Explain the shock of the transition from building to operating.

2. **The Invisible Meters**
   Explain what actually costs money when an app is live (Compute, Storage, Tokens/APIs).

3. **Setting Traps for Runaway Costs**
   Why billing alerts and spending limits are the most important things to set up on day one.

4. **Software Rots (Even If You Don't Touch It)**
   Explain the concept of dependency decay and how APIs change underneath the app.

5. **AI Drift: When the Model Changes Its Mind**
   Address how the underlying LLM's behavior might silently shift over time and break your prompts.

6. **The Burden of Users**
   What happens when people actually start depending on the tool you built.

7. **Maintenance vs. Building**
   How to carve out time to just keep the lights on versus adding new features.

8. **The Art of the Graceful Shutdown**
   When and how to kill a project that costs more to run than the value it provides.

9. **Conclusion: Operating with Your Eyes Open**
   Final encouragement to embrace the reality of operations as a mark of a true builder.

## Source Material

Approved source material includes:
- `publication-concept.md` for *After Launch, the Meter Still Runs*
- Publication Brief Standard v1
- approved Don’t Go Broke project knowledge
- approved non-platform booklet sequence
- approved final manuscripts for earlier sequence booklets (*Before the Idea Becomes Reality*, *Before the Build Starts*, *Before You Trust the First Draft*)

This brief must preserve the Publication Concept’s:
- reason for existing
- core lesson
- mistake prevented
- reader transformation
- role in the product ladder
- “not this” boundaries

## Constraints

Hard requirements:
- platform-independent
- beginner-safe
- plain language
- short, practical, and direct
- no accounting/finance jargon overload
- no DevOps/Kubernetes engineering overload
- no fear marketing
- no shame-based language
- no unsupported claims
- no platform-specific workflows (e.g., AWS billing tutorials)

Editorial constraints:
- The booklet must help the reader operate their live app safely.
- The booklet must not drift backward into review or testing (Booklet 3).
- The booklet must not assume the reader is a seasoned sysadmin.
- The booklet must distinguish between one-off building costs and recurring operational costs.

Tone constraints:
- calm
- realistic
- protective
- practical
- plainspoken
- empowering, not intimidating

## Reader Transformation Target

Before reading, the reader feels a sense of finality with the launch and is unaware of the recurring risks of infrastructure costs and software decay.

After reading, the reader should have:
- a clear mental model of how their app costs money
- the motivation to set up billing alerts immediately
- a realistic expectation that the app will require ongoing maintenance
- a strategy to deal with AI drift and API changes
- the confidence to operate their app safely

## Mistake This Publication Must Prevent

This publication must prevent the reader from abandoning their newly launched app to run on autopilot without monitoring costs, dependencies, or usage.

## Publishing Outcome Requirement

Publishing Factory should produce a booklet that feels like a sobering but empowering briefing from a seasoned operator. It must prepare the reader for the reality of running a live application without overwhelming them with DevOps or accounting jargon.
