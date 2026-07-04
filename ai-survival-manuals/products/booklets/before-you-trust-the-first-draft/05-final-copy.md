# Before You Trust the First Draft

## 1. Introduction: Why This Booklet Exists

You asked an AI builder to create the first version of your product, and it returned something that looks real. There are screens. There is logic. There are flows. You might even have a working demo you can click through.

That creates a dangerous feeling: “It looks real, so maybe it is right.”

The first AI-generated draft is the moment when you are most vulnerable to false confidence. The project looks more complete than it actually is. It is tempting to keep the momentum going, to add more features, or to show it to someone else. 

But this is not the point where trust should begin. This is the point where review must begin. The first draft is not proof that the product is correct. It is simply the first thing that must be questioned.

## 2. Why the First Draft Feels More Trustworthy Than It Is

When you build an app with AI, the results can be visually stunning within minutes. A polished interface, however, can hide weak thinking. A working demo can hide fragile logic. A confident AI response can hide a bad architectural decision.

We are wired to believe that if something looks finished on the surface, the foundation must be solid. In traditional software development, reaching a working UI meant weeks of careful architectural planning had already occurred. With AI, the UI often comes first, masking a hollow or assumed foundation underneath.

Momentum creates false confidence. Do not mistake a slick button for a sound application.

## 3. The Difference Between Generated Output and Reviewed Progress

Having a draft does not mean the design decisions were approved by you. It just means the AI generated some output.

Generated output is material. It is a sketch, a suggestion, a placeholder. It is not progress until you have verified it. Progress requires that you understand what the tool built, why it built it that way, and whether those decisions align with your goals. 

“It runs” is not the same as “I understand what it is doing.” True progress only happens once the assumptions have been surfaced and accepted. 

## 4. What Did AI Actually Decide for You?

AI hates being stuck. If your prompt leaves out a detail, the AI will not always stop and ask you for clarification. It will simply guess. 

It will make assumptions about user permissions, data structures, edge cases, and default behaviors. It will decide what happens when a user forgets their password, even if you never asked for a login screen. It will decide how data is stored, even if that storage method cannot scale.

You need to find these hidden decisions. What did it include that you didn't ask for? What did it exclude that you assumed would be there? What happens when something goes wrong? 

## 5. What Should Be Reviewed First?

Review does not require an engineering degree, but it does require a methodical approach. Do not start by looking at the colors or the fonts. Start with the core logic.

1.  **Check the Core Goal:** Does this draft actually do the one specific thing you needed it to do? 
2.  **Check the Data:** Where is the information going? Is it being saved?
3.  **Check the Boundaries:** Did the AI build three extra features you don't need? 

Review the constraints before you review the cosmetics. If the core logic is broken, the interface doesn't matter.

## 6. What Looks Fine but Might Not Be Fine?

Beware of the "happy path" illusion. A smooth demo usually only shows what happens when everything goes perfectly. 

What happens when a user clicks a button twice? What happens when a form is submitted empty? What happens if the network disconnects? 

A working demo is often fragile beneath the surface. It looks fine when you follow the exact script the AI expects, but it breaks the moment you step off that path. Look for incomplete logic behind the working buttons.

## 7. What Is Safe to Keep, and What Should Be Cut or Rebuilt?

You do not have to keep everything the AI generated. You are allowed to throw parts of the draft away.

If a section of the app does exactly what you need and you understand how it works, keep it. If a feature is overly complex, confusing, or unnecessary, cut it. 

If the logic is fundamentally broken, do not try to patch it. Often, it is faster and safer to delete the bad code and prompt the AI again with clearer, more specific instructions. Do not build on top of a shaky foundation just because you feel bad about deleting work.

## 8. Before You Show It to Someone Else

There is a strong temptation to share the first draft immediately. You want feedback. You want validation. 

But showing an unverified draft to collaborators or early users can be dangerous. If they see a polished UI, they will assume the app is almost done. They will start asking for tweaks to the interface rather than questioning the core logic. This locks in bad assumptions and increases the pressure on you to launch.

Only share what you can explain. Before you show it to anyone, make sure you understand what the draft is actually doing.

## 9. Continue, Rework, or Stop

At the end of your review, you must make a decision. 

-   **Continue:** You understand the draft. The assumptions are safe. The core logic is sound. It is reviewed enough to continue.
-   **Rework:** The draft has good parts, but there are hidden assumptions or fragile paths that must be fixed before adding new features.
-   **Stop:** The draft is a mess of assumptions and broken logic. Delete it, rethink your prompt, and start the generation process over.

"Reviewed enough to continue" means there are no hidden surprises in the foundation. 

## 10. Bridge to the Next Stage

Reviewing the first draft is not a delay from building; it is a critical part of building. 

By taking the time to question the output, surface the assumptions, and verify the logic, you transform a fragile generated draft into a trustworthy foundation. 

Build with your eyes open. Once the foundation is reviewed and secure, you can safely move on to iteration, refinement, and eventually, the responsibilities of a live launch.
