---
sidebar_position: 5
title: "AI Agent"
---

# AI Agent

FlowMail's AI agent lets you give natural language instructions through the command palette (`Cmd+K`). Instead of navigating menus, you describe what you want and the agent figures out the steps.

## How It Works

Open the command palette with `Cmd+K`, switch to agent mode, and type what you want:

- *"Draft a reply to Sarah's email about the budget review"*
- *"Create a plan for preparing next week's board presentation"*
- *"Search my emails for anything about the Henderson contract"*
- *"Create a new Card for the website redesign project"*

The agent breaks your instruction into steps, uses the appropriate tools, and streams its progress back to you in real time. When it's done, the result appears as a plan in the Plans view with a full transcript of what it did and why.

## What the Agent Can Do

The agent has access to a curated set of tools:

- **Email** — Search, read, and compose emails
- **Plans** — Create plans from natural language instructions
- **Cards** — Create and manage context cards
- **Drafting** — Generate email drafts with full context
- **Search** — Semantic search across your knowledge base using vector embeddings
- **Calendar** — Create and check calendar events
- **Knowledge** — Look up entities and relationships

Each tool call is visible in the agent's execution transcript, so you can always see exactly what it did.

## Progressive Trust

Not every agent action happens automatically. FlowMail uses a progressive trust system:

- **Ask every time** — The default for sensitive actions like sending emails. The agent pauses and shows you what it wants to do.
- **Always allow** — For actions you've approved before (like searching emails), you can grant standing permission so the agent doesn't need to ask again.

Trust is scoped — approving "search emails" doesn't approve "send emails." You stay in control of what the agent can do autonomously.

## Approval Flow

When the agent needs your approval for an action, it creates an approval item in your [Focus Queue](/docs/features/focus-queue). You see exactly what the agent wants to do — the tool it wants to call, the arguments it will use — and you can approve, reject, or modify it before it proceeds.

This means the agent never takes sensitive actions without your explicit sign-off. You can queue up instructions and review the results at your own pace.

## Agent Transcript

Every agent execution is recorded as a plan with a full transcript. Open the [Plans](/docs/features/plans) page to see:

- Each step the agent took
- Which tools it called and with what arguments
- Its reasoning at each decision point
- The final outcome

This transparency means you can always understand *why* the agent did what it did, and provide feedback if it got something wrong.

## Context Enrichment

The agent doesn't work in a vacuum. When you give it an instruction, it automatically gathers relevant context:

- The full email body and thread history (when working with a specific email)
- Knowledge about the sender from your knowledge base
- Card instructions and context for the relevant card
- Your learned rules and preferences

This context helps the agent make better decisions without you having to spell out every detail.
