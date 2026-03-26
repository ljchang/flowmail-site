---
sidebar_position: 2
title: "Technical Details"
---

# Technical Details

A complete breakdown of how FlowMail handles your data, credentials, and external connections.

## Database Encryption

- SQLite database encrypted with **SQLCipher**
- **256-bit AES** encryption
- Encryption key: randomly generated 32-byte key on first launch, stored in macOS Keychain under `com.flowmail.app:db-encryption-key`
- WAL mode enabled for performance
- Foreign key constraints enforced

## OAuth & Authentication

- **PKCE** (Proof Key for Code Exchange) flow for both Gmail and Outlook
- Temporary localhost server (port 8923) for OAuth redirect, with 30-second timeout
- All OAuth token exchanges happen in the Rust backend, never exposed to the frontend

### Gmail OAuth Scopes

| Scope | Purpose |
|-------|---------|
| `gmail.readonly` | Read your emails |
| `gmail.send` | Send emails on your behalf |
| `gmail.modify` | Archive, trash, label emails |
| `calendar` | Read calendar for scheduling features |
| `calendar.events` | Create calendar events from emails |

### Microsoft OAuth Scopes

| Scope | Purpose |
|-------|---------|
| `Mail.Read` | Read your emails |
| `Mail.Send` | Send emails |
| `Mail.ReadWrite` | Archive, trash, move emails |
| `Calendars.ReadWrite` | Calendar access for scheduling |
| `offline_access` | Background sync when the app isn't focused |

## What Data Is Sent to AI Providers

### When classifying an email:

- Sender name and address
- Subject line
- Date received
- Email body (truncated to 3,000 characters)
- Your card definitions (for routing context)
- Learned classification rules

### When drafting a response:

- The email thread (each message truncated to 1,500 characters)
- Your card's system prompt
- Contact information for the sender
- Your notes relevant to this context

### What is NOT sent:

- Your full inbox or email list
- Other unrelated emails
- System information or device data
- Your API keys or credentials

## External Connections

| Service | Purpose | Data sent |
|---------|---------|-----------|
| Gmail API (googleapis.com) | Email sync, send, calendar | Email operations only |
| Microsoft Graph (graph.microsoft.com) | Email sync, send, calendar | Email operations only |
| Claude API (api.anthropic.com) | Classification, drafting, learning | Relevant email content (truncated) |
| OpenAI API (api.openai.com) | Alternative AI provider | Same as Claude |
| Gemini API (generativelanguage.googleapis.com) | Alternative AI provider | Same as Claude |
| GitHub (github.com) | Update checks | No personal data — fetches version metadata only |

No other external connections are made. No analytics services, no crash reporting, no CDNs.

## Update Security

- Updates delivered via GitHub Releases
- Each update is signed with an **Ed25519** key
- The app verifies the signature before installing any update
- Update checks happen every 4 hours (or manually via menu)
