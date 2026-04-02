---
sidebar_position: 100
title: Changelog
---

# Changelog

Release notes for FlowMail. Updates are delivered automatically through the app.

<!-- RELEASES -->

## v0.2.14 (2026-04-02)

- Merge branch 'wire-planning-features'
- Fix 5 Knowledge tab bugs: inbox buttons, graph filtering, type change, panel collapse, shared_card edges
- Simplify: parallel refreshes, optimistic deletion, remove noise
- Fix drag listener leak and modal state reset
- Add meta-improvement button and calendar event plan follow-up
- Add plan templates tab and save-as-template modal
- Add scheduled triggers tab and create trigger modal
- Add CreatePlanModal for plans from instruction
- Add plan analysis display and node card metadata badges
- Rewire PlansPage: floating inspector, partial replan, 4-tab structure
- Add NodeInspector floating panel component
- Add analysis field to Plan sites, add 5 missing service wrappers
- Switch plan queries to named columns, add V043 fields
- Add V043 columns to PlanNode and Plan structs


## v0.2.13 (2026-04-02)

- Rewrite Knowledge tab: notes-app UX, graph viz, inline editing


## v0.2.12 (2026-04-01)

- Fix V045 migration crash: disable FK during migrations, add regression test


## v0.2.11 (2026-04-01)

- Fix startup crash: V045 migration FK violation on upgrade


## v0.2.10 (2026-04-01)

- Fix clippy warnings: needless borrows, transmute annotation, too_many_arguments
- Merge branch 'main' of github.com:ljchang/flowmail
- Simplify: deduplicate JSON extraction, consolidate locks, fix FK ordering
- Fix review findings: resolve scored_fields default, cache test contexts
- Merge knowledge-graph + add rumination module with replay scoring
- Add rumination prompt template for diverse hypothesis generation
- Fix review findings: assigned_by value, optional query_row, function rename
- Remove 1,210 lines of dead contact/memory code
- Add rumination DB migration and query layer
- Add Rumination design spec for self-play classification improvement
- Fix frontend components for Node object compatibility
- Fix remaining dropped-table references across plan handlers, memory, and contact commands
- Fix critical runtime bugs and code quality issues from review
- Remove old People view and dead contact commands, replace with Knowledge nav
- Update fact extraction and email sync to use knowledge graph
- Rewrite context assembly to use knowledge graph for entity retrieval
- Add Knowledge view replacing People and Memory nav items
- Add node indexing functions to Tantivy search index
- Add frontend knowledge service and store
- Add Tauri commands for knowledge graph CRUD operations
- Add NodeEmbeddingStore and format_node_for_embedding for knowledge graph nodes
- Add graph traversal, health scoring, and node exclusion to graph.rs
- Fix db::graph code review issues: Result types, SQL bugs, upsert semantics
- Add graph module with Node/Edge types, CRUD, entity resolution, and search
- Add V044 knowledge graph migration
- Remove dead embeddings feature flag references
- Make fastembed and sqlite-vec default dependencies
- Add Knowledge Graph Foundation implementation plan
- Scope spec to knowledge graph + gap detection + context enrichment
- Add Knowledge-Aware Email Intelligence design spec
- Fix review findings: regex statics, mutex batching, ask node mismatch, code dedup
- Fix test failures: remove non-existent email_classifications ALTER, fix PlannedNode Default in test
- Optimize local model inference: compact prompts, triage defaults, token budgets
- Add user preference learning for approval patterns
- Add debounced reflexions, triage progress events, cancellation support
- Add TokenBudget calculator and FallbackChain provider wrapper
- Add static/dynamic prompt split for Anthropic prompt caching
- Add ask node input widgets, confidence indicators, partial re-plan button
- Add handle_ask handler for interactive checkpoint nodes
- Add partial re-planning: preserve completed nodes, regenerate remaining steps
- Add confidence-gated execution and mid-execution re-analysis in plan executor
- Add semantic output keys, conditional execution, and expandable node decomposition
- Add email sanitization, injection defense, classification validation, prompt hash tracking
- Add injection defense to triage prompt, enrich planning reflexion context
- Rewrite plan_generator prompt: two-phase analysis, operations table, few-shot patterns
- Add plan validation and adaptive checkpoints from correction history
- Add EmailAnalysis, NodeCondition types and extend PlannedNode/PlannerOutput
- Add migration for AI system improvements: plan node extensions, preferences table
- Add AI system improvements implementation plan (17 tasks, 7 groups)
- Add AI system improvements design spec


## v0.2.9 (2026-03-31)

- Fix 6 bugs: draft collapse, markdown preview, button order, cmd+k, nav order, sent tab
- Fix memory leaks: cap trash concurrency, clean up focus queue listeners


## v0.2.8 (2026-03-30)

- Fix plan canvas: menu overflow, node deletion, edge deletion, button styling, detail close
- Fix clippy redundant closure warnings


## v0.2.7 (2026-03-30)

- Simplify plan handlers: extract shared helpers, fix lock scope
- Implement calendar and delegation plan node handlers
- Fix Templates tab, missing prompts, add Node Catalog, simplify
- Add tab bar to PlansPage with Node Catalog tab
- Update kindLabels to include all 23 node kinds
- Add NodeCatalogTab component for browsing plan node types
- Add get_node_catalog and get_prompt_for_node_kind commands
- Add getNodeCatalog and getPromptForNodeKind service functions
- Add node kind catalog registry with all 23 node kinds
- Fix triage shift+arrow selection bug, overhaul plan UI in Focus Queue


## v0.2.6 (2026-03-30)

- Centralize PendingApproval guard in execute_plan, fix review issues


## v0.2.5 (2026-03-30)

- Add Escape key to close dismiss feedback panel
- Add rendered prompt viewing to PlanDetailPanel
- Reorganize PlanDetailPanel: collapsible Compute and Feedback sections
- Add plan approval gate: PendingApproval status, approve/reject commands, focus queue integration
- Fix create_lightweight_plan: skip decompose when action is known, preserve placeholder in multi-step
- Fix clippy too_many_arguments on update_node_kind


## v0.2.4 (2026-03-29)

- Simplify: extract CorrectionContext helper, merge replan commands, fix snapshot/annotation bugs
- Fix frontend/backend parameter mismatches: updateNodeKind, skipPlanNode, replan node_id
- Add correction-derived benchmark cases query and command
- Add DAG-level re-plan feedback bar to PlanDAGCanvas
- Add DAG node annotations: kind editing, annotation textarea, skip button in PlanDetailPanel
- Replace dismiss dropdown with feedback panel in TaskInputWidget
- Add plan feedback backend commands: replan, node annotations, skip
- Pass user_feedback through planning reflexion pipeline
- Add plan feedback DB schema: correction snapshots, node annotations, query helpers
- Add .worktrees/ to gitignore
- Add plan cancel/retry actions and fix Plans layout
- Simplify benchmarks: merge error constructors, hoist prompt load, rename cmd, remove unused import
- Add learning benchmark UI: A/B comparison, snapshots display, domain selector
- Add learning benchmark: A/B runner, snapshots storage, get_learning_snapshots
- Add learning benchmark schema: snapshots table, learning_variant field
- Add implementation plan: benchmark Phase 4 - learning A/B benchmarks
- Add pipeline task type to benchmark UI
- Add pipeline benchmark: run_pipeline_test, score_pipeline, end-to-end orchestration
- Fix clippy too_many_arguments on create_lightweight_plan
- Add pipeline benchmark fields: action_surfaced, urgency_band, card_assignment, node_count, llm_calls


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
