---
sidebar_position: 100
title: Changelog
---

# Changelog

Release notes for FlowMail. Updates are delivered automatically through the app.

<!-- RELEASES -->

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
