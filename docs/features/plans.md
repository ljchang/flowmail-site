---
sidebar_position: 4
title: "Plans"
---

# Plans

Every action FlowMail takes — from archiving a newsletter to drafting a multi-part response — follows a plan. A plan is a directed acyclic graph (DAG) of steps that the AI builds and executes on your behalf. Think of it like a recipe: each step has inputs, does something, and passes its results to the next step. Steps that don't depend on each other run in parallel.

## From Simple to Complex

Most plans are simple. An email arrives, FlowMail classifies it, and archives it in one step. You never need to think about it.

But some situations require more. A client asks to reschedule a meeting — so FlowMail checks your calendar, finds open slots, drafts a reply with options, and queues a follow-up reminder. That's a multi-step plan, and you can see exactly what it's doing at each stage.

## How Plans Get Created

Plans are created in several ways:

- **Triage** — When an incoming email needs action, the AI automatically generates a plan to handle it.
- **Agent dispatch** — Give the [AI agent](/docs/features/agent) a natural language instruction via `Cmd+K`, and it creates a plan on the fly.
- **Create from instruction** — Open the CreatePlanModal and describe what you want in plain text. FlowMail builds a plan from your description.
- **Card templates** — Automation rules on your cards can trigger plans (e.g., "always draft an acknowledgment for emails from this client").
- **Quick-add** — You create an item in the Focus Queue, and FlowMail builds a plan to accomplish it.
- **Scheduled triggers** — Recurring plans that run on a schedule (see below).
- **Decomposition** — When a request is too complex for a single step, the AI breaks it into a multi-step plan automatically.

## What Happens Inside a Plan

Plans are made up of different types of nodes, each with a specific role:

- **Thinking** — The AI reasons about something: classifying an email, deciding priority, planning a response.
- **Gathering** — Collecting context before acting: loading relevant knowledge, checking your calendar, looking up contact history.
- **Action** — Doing something concrete: sending an email, archiving a thread, creating a calendar event.
- **Checkpoint** — Pausing for your input. Draft replies always stop here for your approval before sending.
- **Web Research** — Gathering information from the web to enrich the plan with external context.

## Approval Checkpoints

FlowMail never sends an email without your say-so. When a plan reaches a step that needs your approval — like a drafted reply — it pauses and surfaces that checkpoint in your [Focus Queue](/docs/features/focus-queue). You review the draft, edit it if needed, and approve or reject it. The plan picks up where it left off.

This is the connection between Plans and the Focus Queue: the Focus Queue is essentially a filtered view of all the plan checkpoints that are waiting on you.

## The Plans View

The Plans page has four tabs:

- **Plans** — Browse all plans, filtered by status (Active, Completed, Failed, Paused) or level. Select a plan to see its DAG on the canvas.
- **Templates** — Save completed plans as reusable templates. When a similar situation comes up, FlowMail can match and instantiate a template instead of generating a new plan from scratch. This is faster and more predictable for recurring workflows.
- **Triggers** — Set up automated schedules that generate plans at regular intervals — daily, weekly, monthly, or on a custom schedule. Useful for recurring tasks like weekly report preparation or monthly invoice follow-ups.
- **Node Catalog** — Browse the available node types and their capabilities.

### Floating Inspector

Click any node on the DAG canvas to open the floating inspector panel. It shows the node's inputs, outputs, current state, metadata badges (like which card it's assigned to), and timing information. Drag it anywhere on the canvas to keep it out of the way.

### Plan Analysis

Each plan includes an analysis summary in its header — a brief explanation of why the plan was created and what it's trying to accomplish. This helps you quickly understand the intent behind a plan without reading every node.

## Plan Templates

When a plan completes successfully, you can save it as a template for reuse. Templates are the first thing FlowMail checks when creating a new plan:

1. **Template match (Tier 0)** — If a saved template fits the situation, FlowMail instantiates it directly. Fast, predictable, and no AI generation needed.
2. **AI generation (Tier 1)** — If no template matches, the AI generates a plan from scratch.

This tiered approach means common workflows get faster over time as you build up your template library.

## Partial Replan

Sometimes a plan goes off track partway through. Instead of starting over, you can provide feedback on the remaining steps and FlowMail will regenerate just the unfinished portion — preserving the work that's already been completed.

## Plan Levels

For power users, plans are organized into three levels:

- **L0 (Tasks)** — Your everyday workflows: handling emails, completing tasks, sending replies.
- **L1 (Improvement)** — The system improving its own prompts and classification based on your feedback. Trigger these from the Components tab in [Learning](/docs/features/learning).
- **L2 (Meta)** — Improving the improvement process itself. Use the meta-improvement button to kick off an L2 review.

You'll mostly interact with L0 plans. L1 and L2 run quietly in the background, making FlowMail smarter over time through the [learning system](/docs/features/learning).
