---
sidebar_position: 100
title: Changelog
---

# Changelog

Release notes for FlowMail. Updates are delivered automatically through the app.

<!-- RELEASES -->

## v0.2.23 (2026-04-04)

- Migrate remaining 5 tools to unified registry, clean up dead handlers
- Simplify: fix bugs and clean up from code review
- Add unified focus queue query for task-based approval surface
- Generate tasks from plan nodes requiring approval
- Add source_type/source_id to tasks for unified approval surface
- Migrate 28 tools to unified registry, clean up legacy fallbacks
- Wire agent loop to unified tool registry with legacy fallback
- Wire plan executor to unified tool registry with legacy fallback
- Add unified tool module with Tool trait and initial implementations
- Slim triage classification: 5 LLM fields, remove classify_email node, add read/action types


## v0.2.22 (2026-04-04)

- Multi-intent triage classifier with structured plan handoff
- Fix get_pending_approval_plans missing analysis column, clarify Plans UI labels


## v0.2.21 (2026-04-04)

- Fire-and-forget plan creation from Cmd+K agent dispatch
- Fix agent tool-use retry logic and system role handling
- Fix Gemma 4 runtime on newer Apple Silicon chips with Metal compilation and MoE fallback

## v0.2.20 (2026-04-04)

- Add tool-use support for local AI models, enabling agent inference without cloud API calls
- Fix plan approval UI labels and missing analysis column

## v0.2.19 (2026-04-03)

- Fix Gemma 4 model loading with multimodal builder

## v0.2.18 (2026-04-03)

- Add Gemma 4 and Qwen 3.5 model families for local inference
- Switch to upstream mistralrs v0.8.0

## v0.2.17 (2026-04-02)

- **AI Agent system** — Give natural language instructions via `Cmd+K` and the agent builds and executes plans on your behalf
- Multi-turn agent execution with a curated tool registry (search, draft, create plans, manage cards)
- Progressive trust: "Always allow" standing permissions for approved tool types
- Agent approval items appear in the Focus Queue for review before sensitive actions
- Agent execution transcript visible in the Plans page
- Streaming real-time output via SSE
- Context enrichment: agent receives email body, thread history, sender knowledge, and card instructions
- Automatic fallback from local to cloud LLM when needed

## v0.2.16 (2026-04-01)

- Add web research plan nodes for gathering external information during plan execution
- Fix 7 UI bugs: calendar sync, settings panel, plans inspector, multi-select, reply-all, CC/BCC handling

## v0.2.15 (2026-04-01)

- **Calendar integration** — Bi-directional sync with Gmail and Outlook calendars
- Three views: Month (with mini-calendar sidebar), Week (hour grid), and Agenda (list)
- Quick-create events by clicking time slots
- Card and plan integration: link events to cards, generate follow-up plans from events

## v0.2.14 (2026-03-31)

- **Plans page enhancements** — Floating NodeInspector panel, 4-tab structure (Plans, Templates, Triggers, Catalog)
- Save completed plans as reusable templates with automatic template matching
- Scheduled triggers for automated recurring plan generation
- CreatePlanModal for building plans from natural language instructions
- Partial replan: regenerate remaining steps with user feedback while preserving completed work
- Plan analysis summaries in plan headers
- Meta-improvement button for triggering L2 reviews
- Calendar event plan follow-up
- Fix 5 Knowledge tab bugs: inbox buttons, graph filtering, type change, panel collapse

## v0.2.13 (2026-03-31)

- **Knowledge tab rewrite** — Notes-app style UX with graph visualization and inline editing

## v0.2.12 (2026-03-31)

- Fix migration crash: disable FK constraints during migration to prevent V045 FK violation on upgrade

## v0.2.11 (2026-03-31)

- Fix startup crash caused by V045 migration foreign key violation

## v0.2.10 (2026-03-30)

- **Knowledge graph** — New unified system replacing the old Memory and People views
- Entity types: person, organization, project, concept, fact
- Interactive graph visualization with node types and edge relationships
- Health scoring (confidence, recency, access frequency) for all entities
- Vector embeddings and semantic search across your knowledge base
- Entity inbox for reviewing automatically extracted entities before saving
- Connection panels showing how entities relate to each other
- **Rumination system** — Background self-play process that generates diverse classification hypotheses to improve AI accuracy
- Remove 1,210 lines of dead contact/memory code

## v0.2.9 (2026-03-30)

- Fix memory leaks, draft collapse, markdown preview, Cmd+K behavior, navigation order, and sent tab display

## v0.2.8 (2026-03-30)

- Fix plan canvas: menu overflow, node/edge deletion, button styling

## v0.2.7 (2026-03-30)

- Add node kind catalog with 23 node types
- Add calendar and delegation plan handlers

## v0.2.6 (2026-03-30)

- Improve plan approval gate behavior

## v0.2.5 (2026-03-30)

- Add plan approval gate: PendingApproval status with rendered prompt viewing

## v0.2.4 (2026-03-29)

- Add plan feedback system: correction snapshots, node annotations, partial replan feedback, DAG-level feedback bar


## v0.2.3 (2026-03-29)

- Add inline prompt viewer to Components tab, remove dead model selectors
- Add implementation plan: benchmark Phase 3 - pipeline benchmarks
- Add memory task type to benchmark UI: config, results, test case generation
- Add memory benchmark: benchmark_memory, run_memory_test, score_memory, test case generation
- Fix plan executor skipping Ready nodes and graph over-zoom
- Add memory benchmark fields: fact_precision, fact_recall, entity_accuracy
- Add implementation plan: benchmark Phase 2 - memory task type
- Add plan task type to benchmark UI: config, results, test case generation
- Add plan benchmark: benchmark_plan, run_plan_test, score_plan, test case generation
- Add plan benchmark fields: complexity_correct, urgency_delta, node_kinds_correct
- Add implementation plan: benchmark Phase 1 - plan task type
- Add design spec: comprehensive benchmark system update


## v0.2.2 (2026-03-29)

- Fix: remove card_notes from feature-gated benchmark DraftContext


## v0.2.0 (2026-03-29)

- Update Cargo.lock
- Fix review: FK constraint, transaction, compute mode, node delete, double load, click-outside
- Wire plan editing into PlansPage and add editable config to detail panel
- Add AddNodeMenu and enable interactive DAG editing in canvas
- Add plan mutation queries and commands: add/remove node/edge, update config
- Add Phase C full DAG editing implementation plan
- Implement PlansPage with split layout: plan list + DAG canvas
- Add list_plans query and command with status/level filters
- Add Plans to sidebar navigation with placeholder page
- Add Phase B Plans page implementation plan
- Fix review: cache plan data, null guard dagre, in-place selection, merge plan commands
- Integrate inline plan DAG canvas into Focus Queue TaskInputWidget
- Add plan inspector components: dagre layout, PlanNodeCard, DAGCanvas, DetailPanel
- Add get_plan_with_edges command returning plan + nodes + edges
- Add @xyflow/svelte and @dagrejs/dagre dependencies
- Add Phase A plan inspector implementation plan
- Add plan inspector and DAG editor design spec
- Fix review: correct prompt variables, batch planning count, use shared Button
- Add Components tab to Learning page showing improvable component registry
- Add Planning domain to Learning tab: reflexions, rules, prompts, thresholds
- Add deep tier inference settings to backend and frontend model store
- Add Deep variant to ModelTask enum to fix manifest deserialization
- Fix model defaults: Fast=Qwen3-4B, Standard=Qwen3-8B, Deep=Qwen3-32B
- Add three-tier model selector (Fast/Standard/Deep) with Qwen 3 defaults
- Add multi-input trigger commands and frontend polling for scheduled triggers
- Add V036 scheduled_triggers table with types and queries
- Add PlanEvent enum and generalize plan generator for multi-input triggers
- Add Phase 8 implementation plan: multi-input triggers
- Add trigger_meta_improvement command with configurable frequency via learning_settings
- Add L2 meta-improvement: plan generation, analysis handler, L1 proposal
- Add Phase 7 implementation plan: L2 meta-improvement
- Fix review: transaction for activate_version, log seed errors, fix node types and domain mapping
- Add Tauri commands for component registry and L1 improvement trigger
- Add L1 node handlers: retrieve_component, analyze, generate_improved, apply
- Add L1 improvement plan generation and improve_prompt template
- Add component seeding and DB-first prompt loading
- Add component registry: V035 migration, types, CRUD queries
- Add Phase 6 implementation plan: L1 improvement plans + component registry
- Fix review: log correction errors, truncate reflexion body, optimize node lookup
- Wire plan corrections into approve_plan_node and add frontend wrapper
- Add record_plan_correction command with background reflexion generation
- Add planning domain to reflexion system with prompt and correction queries
- Add Phase 5 implementation plan: planning corrections + LEAP
- Update planner prompt for extraction and add candidate review wrappers
- Implement extract_knowledge and update_contact plan node handlers
- Add Phase 4 implementation plan: knowledge extraction
- Fix review: unify node types, fix archive template, efficiency improvements
- Add template CRUD commands and seed default templates
- Integrate tiered generation: template match (Tier 0) before LLM (Tier 1)
- Add template matching, instantiation, and tier assignment
- Add plan template CRUD queries
- Add V034 plan_templates migration and PlanTemplate types
- Add Phase 3 implementation plan: tiered generation + plan templates
- Fix review issues: generator lock, NULL input_data, debounce events, json_extract, retry logging
- Add Tauri event listeners for real-time plan status updates
- Add wait condition support: query waiting nodes, resume on reply
- Rewrite executor for parallel DAG execution with Tauri event emission
- Refactor handlers to use `Arc<Mutex<Connection>>` with short lock holds
- Add Phase 2 implementation plan: parallel DAG execution
- Fix review issues: edge type, started_at, error handling, N+1 queries, From impl
- Add plan service and update Focus Queue to show plan nodes
- Add Tauri commands for plan operations: generate, focus queue, details, approve
- Add sequential plan executor with output passing and checkpoint support
- Add node handlers: classify, draft, send, archive, retrieve, extract
- Add Tier 1 light plan generator for email events
- Add plan_generator.toml prompt template and loader
- Add plan/node CRUD queries and Focus Queue query
- Add plan module with core types: Node, Plan, enums, FocusQueueItem
- Add V033 migration: plans, plan_nodes, plan_node_edges, plan_corrections
- Add Phase 1 implementation plan: core schema + linear plans
- Add FlowMail v2 plan-centric architecture design spec


## v0.1.50 (2026-03-27)

- Skip triage for sent emails, extract memories, fix Sent Tab
- Fix triage keyboard navigation: highlight, scroll-into-view, and select-next after delete
- Fix email readability by overriding inline dark text colors in HTML emails
- Add Create Template option to template picker dropdown
- Add production context as benchmark parameter, fix charts and card accuracy
- Fix Focus Queue to use approve_and_send_draft for CIPHER learning
- Remove unused avatar placeholder from top bar

## v0.1.49 (2026-03-27)

- Add benchmark comparison charts with metric selector and config toggles
- Fix clippy: use strip_suffix instead of manual suffix stripping


## v0.1.48 (2026-03-27)

- Refactor BehaviorsTab to unified task type system
- Integrate template picker and save-to-template into compose components
- Add frontend template service, store, picker, and save modal
- Sync task types to V030 schema: add remember/ask, remove approval/input_needed
- Refactor behavior executor to unified create_task dispatch and fix triggers
- Add template Tauri commands with placeholder resolution and signature stripping
- Add reply_templates table, template_id on tasks, and behavior migration (V030)
- Fix benchmark results: add thinking column, richer detail, CSV/JSON export
- Fix email triage filter and add keyword detection to EmailPreview task input
- Add thinking mode toggle to benchmark config UI

## v0.1.47 (2026-03-27)

- Add draft writing rules UI and opt-in Self-Refine for drafts
- Add max test cases limit to benchmark (default 5)
- Fix clippy: use is_some_and instead of map_or(false, ...)

## v0.1.46 (2026-03-27)

- Fix all Svelte a11y warnings and unused CSS
- Remove broken Metal PagedAttention, fix benchmark to use production inference
- Add Reconnect button to email account settings

## v0.1.45 (2026-03-27)

- Hide triaged emails from triage view by default
- Fix People tab: email direction, self-contact, org classification, auto-relationships
- Add account filtering in triage and account selection in focus compose
- Add docs link to Settings preferences
- Fix OAuth re-auth fallback: handle plain string errors from Tauri IPC

## v0.1.44 (2026-03-27)

- Fix notify-site: use github.token to read release notes
- Allow clippy::too_many_arguments on contact update functions

## v0.1.43 (2026-03-26)

- Fix calendar event creation: add timezone and non-blocking extraction
- Fix multi-account sync: restore incremental sync and accurate counts
- Connect task extraction to Reflexion+LEAP learning pipeline
- Remove Context panel (RightPanel) feature
- Fix CIPHER draft self-learning pipeline and learning tab display
- Add sent email view, account-specific signatures, and card drag fixes
- Persist new email drafts and add markdown preview in InlineCompose
- Add customizable keyboard shortcuts and fix People view navigation
- Add People page improvements: CRUD, sorting, org classification, email preview, network graph
- Fix thread-level importance reclassification in triage view
- Move releases to public repo and simplify updater

## v0.1.42 (2026-03-26)

- Add domain filtering to Learning overview charts
- Add People system, delegate action, and keyword detection
- Move benchmark to Settings tab and update scoring to use action_needed
- Add Shift+Arrow keyboard multi-select in triage view
- Add schedule task type and scope Add to Calendar button to it
