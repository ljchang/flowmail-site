---
sidebar_position: 8
title: "Knowledge"
---

# Knowledge

FlowMail builds a personal knowledge graph from your email — tracking people, organizations, projects, and facts so its AI always has the right context. Think of it as a second brain that reads your email for you and remembers the important details.

## Entity Types

Everything in your knowledge base is an entity with a type:

- **Person** — People you communicate with: their roles, preferences, and your relationship with them.
- **Organization** — Companies, teams, and groups that appear in your email.
- **Project** — Initiatives, deliverables, and ongoing work with deadlines and stakeholders.
- **Concept** — Ideas, topics, and domains that come up across your conversations.
- **Fact** — Specific pieces of information: dates, decisions, budgets, preferences, and commitments.

Entities are connected to each other through relationships, forming a graph that reflects how the different parts of your work and life relate.

## The Knowledge View

The Knowledge page has a three-panel layout:

- **Entry list** (left) — Browse, search, and filter your entities by type. Switch to the Inbox tab to review new entities waiting for your approval.
- **Editor** (center) — View and edit the selected entity's details, notes, and metadata inline.
- **Connections** (right) — See how the current entity connects to other entities in your graph.

## Graph Visualization

Switch to the graph view to see your knowledge base as an interactive network. Nodes represent entities and edges represent relationships between them. You can:

- Filter by entity type to focus on people, projects, or any other category
- Click nodes to inspect them in the editor
- Explore how entities connect to discover relationships you might not have noticed

## Entity Inbox

As emails flow through FlowMail, the AI automatically identifies new entities and facts. These appear as candidates in the Knowledge inbox — you review and approve them before they enter your knowledge base.

FlowMail never silently adds information. You always see what was extracted, and you can edit, approve, or reject each candidate.

## Health Scoring

Each entity has a health score based on three factors:

- **Confidence** — How certain the AI is that this information is correct
- **Recency** — How recently the entity was confirmed or referenced in your email
- **Access frequency** — How often this entity has been used in AI actions (drafting, classification, planning)

Stale or low-confidence entities naturally fade in influence, while frequently validated ones remain strong. Time-limited facts (like "the deadline is April 3rd") automatically lose relevance after they expire.

## Semantic Search

Your knowledge base is indexed with vector embeddings, enabling natural language search. Instead of remembering exact keywords, you can search by meaning:

- *"What was the budget for the marketing campaign?"*
- *"Who manages the Henderson account?"*
- *"When is the next board meeting?"*

The AI agent and FlowMail's other features also use semantic search internally to find relevant context when drafting replies, classifying emails, or building plans.

## Powering Smarter AI

Your knowledge graph isn't just a reference for you — it's the foundation for everything FlowMail's AI does:

- **Drafting** — When composing a reply, the AI draws on your knowledge of the recipient, the project context, and relevant facts to write something that sounds informed and natural.
- **Classification** — Knowing who people are and what projects they're associated with helps the AI route emails to the right cards and set the right priority.
- **Planning** — Multi-step plans use your knowledge base to gather context before taking action.
- **Agent** — The AI agent searches your knowledge base when answering questions or carrying out instructions.

The more FlowMail knows, the more personalized and accurate it becomes.
