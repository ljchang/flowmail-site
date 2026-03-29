---
sidebar_position: 4
title: "Plans"
---

# Plans

Every action FlowMail takes — from archiving a newsletter to drafting a multi-part response — follows a plan. A plan is a sequence of steps, organized as a directed graph, that the AI builds and executes on your behalf. Think of it like a recipe: each step has inputs, does something, and passes its results to the next step.

## From Simple to Complex

Most plans are simple. An email arrives, FlowMail classifies it, and archives it in one step. You never need to think about it.

But some situations require more. A client asks to reschedule a meeting — so FlowMail checks your calendar, finds open slots, drafts a reply with options, and queues a follow-up reminder. That's a multi-step plan, and you can see exactly what it's doing at each stage.

## How Plans Get Created

Plans are created in several ways:

- **Triage** — When an incoming email needs action, the AI automatically generates a plan to handle it.
- **Card templates** — Automation rules on your cards can trigger plans (e.g., "always draft an acknowledgment for emails from this client").
- **Quick-add** — You create an item in the Focus Queue, and FlowMail builds a plan to accomplish it.
- **Decomposition** — When a request is too complex for a single step, the AI breaks it into a multi-step plan automatically.

## What Happens Inside a Plan

Plans are made up of different types of nodes, each with a specific role:

- **Thinking** — The AI reasons about something: classifying an email, deciding priority, planning a response.
- **Gathering** — Collecting context before acting: loading relevant memories, checking your calendar, looking up contact history.
- **Action** — Doing something concrete: sending an email, archiving a thread, creating a calendar event.
- **Checkpoint** — Pausing for your input. Draft replies always stop here for your approval before sending.

## Approval Checkpoints

FlowMail never sends an email without your say-so. When a plan reaches a step that needs your approval — like a drafted reply — it pauses and surfaces that checkpoint in your [Focus Queue](/docs/features/focus-queue). You review the draft, edit it if needed, and approve or reject it. The plan picks up where it left off.

This is the connection between Plans and the Focus Queue: the Focus Queue is essentially a filtered view of all the plan checkpoints that are waiting on you.

## The Plans View

The Plans view gives you full visibility into what FlowMail is doing and has done:

- **Plan list** (left panel) — Browse all plans, filtered by status (Active, Completed, Failed, Paused) or level.
- **DAG canvas** (right panel) — See the selected plan's steps and connections laid out as a visual graph.
- **Node detail** — Click any node to inspect its inputs, outputs, and current state.

Most users won't need this view day-to-day — the Focus Queue handles the important checkpoints. But when you want to understand *why* FlowMail did something or debug a workflow that didn't go as expected, the Plans view shows you the full picture.

## Plan Levels

For power users, plans are organized into three levels:

- **L0 (Tasks)** — Your everyday workflows: handling emails, completing tasks, sending replies.
- **L1 (Improvement)** — The system improving its own prompts and classification based on your feedback.
- **L2 (Meta)** — Improving the improvement process itself.

You'll mostly interact with L0 plans. L1 and L2 run quietly in the background, making FlowMail smarter over time through the [learning system](/docs/features/learning).
