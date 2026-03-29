---
sidebar_position: 8
title: "Learning & Self-Improvement"
---

# Learning & Self-Improvement

Most AI tools make the same mistakes over and over. FlowMail is different. Every correction you make — every time you fix a classification, dismiss a bad task, or reject a draft — FlowMail learns from it. Not superficially, but through a structured three-tier system that genuinely improves over time.

This is FlowMail's key differentiator: **an AI that gets smarter the more you use it.**

## Tier 1 — Immediate Learning (Self-Reflection)

When you correct a classification or dismiss a task, FlowMail doesn't just record "that was wrong." It asks itself: *Why* was I wrong? What signal did I miss? What should the correct reasoning have been?

This self-reflection happens automatically in the background after every correction. Within seconds, FlowMail has a written analysis of its own mistake — not just the fact that it was wrong, but the reasoning behind the error.

**Example:** You mark an email as "Important" that FlowMail classified as "Other." FlowMail's self-reflection might determine: *"I missed that the sender asked a direct question in the third paragraph. Emails containing direct questions addressed to the user should be classified as Important, even when the subject line appears informational."*

## Tier 2 — Pattern Recognition (Rule Extraction)

After accumulating several corrections and their analyses, FlowMail looks across them for patterns. Instead of treating each correction as an isolated event, it extracts general rules that apply broadly.

**Examples of learned rules:**

- "Emails from the legal team about contracts should always be Important"
- "Weekly digest emails are never urgent"
- "When Sarah from Marketing sends a document, it usually needs review within 24 hours"

These rules are additive — they build on each other over time. Each new rule makes FlowMail more attuned to the specific patterns of your inbox.

## Tier 3 — Rule Consolidation (Self-Editing)

Periodically, FlowMail reviews all its learned rules holistically. Over time, rules can become redundant, contradictory, or outdated. Consolidation cleans this up by:

- **Merging duplicates** — Two rules that say the same thing become one clear rule
- **Resolving contradictions** — When rules conflict, the more recent and better-supported rule wins
- **Removing stale rules** — Rules that no longer apply to your current workflow are retired

This keeps FlowMail's understanding clean, current, and free of accumulated noise.

## The Learning Dashboard

Track how FlowMail is improving with the Learning dashboard:

- **Corrections log** — See every correction you've made and the AI's self-reflection for each one
- **Learned rules** — Browse the rules FlowMail has extracted from your corrections
- **Accuracy metrics** — Watch the AI's accuracy improve over time as it learns your preferences

## Custom Rules

Want to set a rule explicitly? Write your own custom rules that FlowMail will always follow. Custom rules take the highest priority — they're never overwritten or modified by the learning system.

**Examples:**

- "Never mark emails from my CEO as Other"
- "Emails with 'URGENT' in the subject are always Important"
- "Messages from noreply addresses are never Important"

## Multi-Domain Learning

FlowMail learns separately for each type of AI task:

- **Triage classification** — How to categorize and prioritize your emails
- **Planning** — What actions to take and how to structure multi-step workflows
- **Draft generation** — Your writing style, tone preferences, and communication habits
- **Memory extraction** — What facts are worth remembering and how to phrase them

A correction to email classification improves triage without affecting planning, and vice versa. Each domain has its own set of learned rules tuned to its specific purpose.

## Prompt Improvement

Beyond learning rules, FlowMail can also improve its own internal prompt templates based on correction patterns. When the system notices consistent themes in your feedback, it refines the instructions it gives itself for future similar situations. This means the AI doesn't just learn *what* to do differently — it learns how to *think* about your emails differently.

---

<details>
<summary><strong>For the curious: the research behind FlowMail's learning</strong></summary>

FlowMail's learning system draws on several AI research methodologies:

- **Tier 1 (Immediate Learning)** is based on the **Reflexion** algorithm — a technique where an AI agent improves through verbal self-reflection. Instead of simply being told "you were wrong," the agent generates its own causal analysis of why the error occurred, which leads to more durable learning than raw correction data alone.

- **Tiers 2 and 3 (Pattern Recognition and Rule Consolidation)** are based on **LEAP (Learning through Episodic Abstraction and Pattern recognition)** — an approach where concrete experiences are abstracted into general principles, then periodically consolidated to maintain a coherent and non-contradictory rule set.

- **The Memory system** incorporates concepts from **CIPHER (Contextual Integration and Pattern-based Hierarchical Encoding for Retrieval)** — a framework for organizing extracted knowledge with confidence scoring, temporal relevance, and hierarchical relationships between facts.

These methodologies are adapted and combined to create a learning system that is specifically optimized for the email management domain.

</details>
