---
sidebar_position: 1
title: Overview
---

# FlowMail

FlowMail is an AI-powered desktop email client for macOS that manages your inbox the way your brain actually works — not with folders and filters, but with context, knowledge, and learning.

## A different approach to email

Traditional email clients force you to organize messages into folders, create filter rules, and manually sort everything. This doesn't match how you actually think. You don't file conversations into folders in your head — you associate them with the projects you're working on, the people you're talking to, and the topics you care about.

FlowMail is built around this insight. Instead of folders, you have **Cards** — mental contexts that represent the projects, relationships, and topics in your life. Your brain naturally groups related information by context, and Cards work the same way. When an email arrives about a project you're working on, FlowMail knows which Card it belongs to and brings all the relevant context together automatically.

## AI that learns from you

FlowMail's AI doesn't just follow static rules — it gets smarter the more you use it.

When the AI makes a mistake (misclassifies an email, suggests the wrong priority, creates an unhelpful task), you correct it. From that correction, three things happen:

1. **Immediate analysis**: The AI examines what went wrong — what signals it missed, why it made the wrong call, and what the correct reasoning should have been.
2. **Pattern extraction**: After enough corrections accumulate, the AI identifies patterns across its mistakes and extracts general rules it can follow going forward.
3. **Rule consolidation**: Periodically, all learned rules are reviewed holistically — merging duplicates, resolving contradictions, and refining the AI's understanding of your preferences.

The result is an email assistant that genuinely adapts to how you work, not one that needs constant manual tuning.

## Knowledge graph

FlowMail builds a personal knowledge graph from your email — tracking people, organizations, projects, and facts. It understands your relationships, communication preferences, and interaction history. This means when you're drafting a reply, the AI knows the tone and level of formality that fits the relationship, what you've discussed before, and what matters in the current context.

## Calendar and agent

FlowMail includes a built-in calendar that syncs bi-directionally with your email provider, so scheduling decisions don't require switching apps. And with the AI agent accessible via `Cmd+K`, you can give natural language instructions — "draft a reply to Sarah about the budget" — and the agent builds and executes a plan on your behalf, with your approval at every sensitive step.

## Smart drafts

When you compose an email, FlowMail draws on everything it knows: the Card context for the project or topic, your memories, your history with the recipient, and the thread so far. Drafts feel like something you would actually write, not generic AI output.

FlowMail also adapts to your edits. Every time you modify a generated draft before sending, the AI learns from your changes so future drafts better match how you would actually respond.

## Getting things done

FlowMail loosely follows the Getting Things Done philosophy. Every email that needs action gets a clear next step — not a vague "follow up later" reminder. Action items are organized as plans — each with a clear type: compose a reply, take an action, research something, wait for someone else, delegate, or schedule a meeting. When a response requires multiple steps, FlowMail chains them into a connected plan so nothing gets lost between steps. This keeps your focus queue actionable and prevents items from going stale.

## How it's different

- **No folders.** Your emails live in the contexts where they belong.
- **No manual filter rules.** The AI classifies and routes email for you, and improves when corrected.
- **Your data stays local.** FlowMail is a desktop app with a local encrypted database — your emails and memories aren't stored on someone else's server.
- **macOS only.** Built as a native desktop app with Tauri, optimized for Apple Silicon (M1/M2/M3/M4).

## For the curious

FlowMail's learning system draws inspiration from several AI research concepts:

- **Reflexion** — The immediate self-analysis after each correction, where the AI reflects on what went wrong and why.
- **LEAP** (Learning from Extracted Abstractions and Patterns) — The rule extraction process that turns individual corrections into general principles.
- **CIPHER** — The structured memory encoding approach that helps FlowMail organize and retrieve social and contextual knowledge.

You don't need to know any of this to use FlowMail — these are just the ideas that shaped how it learns.
