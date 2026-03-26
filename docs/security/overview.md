---
sidebar_position: 1
title: "Security & Privacy"
---

# Security & Privacy

FlowMail is designed with a simple principle: **your email is your business, not ours.**

## Our Promises

1. **All your data stays on your Mac** — Emails, tasks, memories, contacts, and learned rules are stored in a locally encrypted database. Nothing is synced to our servers.

2. **Credentials secured by macOS Keychain** — API keys and OAuth tokens are stored in your Mac's Keychain, not in files or databases.

3. **No analytics, tracking, or telemetry** — FlowMail doesn't phone home. No usage data, crash reports, or analytics of any kind are collected.

4. **Minimal data sent to AI** — When classifying or drafting, only the relevant email content is sent (truncated to ~3000 characters). Your full inbox is never transmitted.

5. **Signed and notarized** — The app is code-signed with an Apple Developer certificate and notarized by Apple.

6. **Secure updates** — App updates are verified with Ed25519 cryptographic signatures before installation.

## How It Works

FlowMail connects to exactly three types of external services:

- **Your email provider** (Gmail or Outlook) — to sync, send, and manage your email.
- **Your AI provider** (Claude, OpenAI, or Gemini) — to classify emails and draft responses.
- **GitHub** — to check for app updates. No personal data is sent.

That's it. No analytics services, no crash reporting, no CDNs, no third-party trackers.

Your email provider connection uses industry-standard **OAuth with PKCE** — the same security flow used by major apps like Slack, Zoom, and VS Code. FlowMail never sees or stores your email password.

For a full breakdown of encryption, OAuth scopes, and exactly what data is sent where, see [Technical Details](./technical-details.md).
