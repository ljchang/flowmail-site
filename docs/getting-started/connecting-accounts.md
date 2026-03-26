---
sidebar_position: 2
title: Connecting Accounts
---

# Connecting accounts

FlowMail works with Gmail and Microsoft Outlook, and uses AI models for its intelligent features. You'll need to connect at least one email account to get started.

:::info Beta Notice
FlowMail is currently in beta. Email provider integrations have some limitations during this stage — see the notes below for Gmail and Outlook.
:::

## Gmail

1. Open **Settings** in FlowMail.
2. Click **Add Account** and choose **Gmail**.
3. Sign in with your Google account in the browser window that opens.
4. Review and approve the permissions FlowMail requests.

**Permissions requested:**

- **Read email** — So FlowMail can fetch and display your messages.
- **Send email** — So you can send replies and new messages from within FlowMail.
- **Modify labels** — So FlowMail can mark messages as read, archive them, and manage labels on your behalf.
- **Calendar access** — So FlowMail can create calendar events when you schedule tasks.

:::note Beta Limitation
FlowMail's Google integration is not yet verified by Google. During the beta period, your Google account must be added as a test account by the developer before you can connect. Please reach out to us to get your account added.
:::

## Microsoft Outlook

1. Open **Settings** in FlowMail.
2. Click **Add Account** and choose **Outlook**.
3. Sign in with your Microsoft account in the browser window that opens.
4. Review and approve the permissions FlowMail requests.

**Permissions requested:**

- **Read mail** — So FlowMail can fetch and display your messages.
- **Send mail** — So you can send replies and new messages from within FlowMail.
- **Modify mail** — So FlowMail can mark messages as read, move them, and manage folders.
- **Calendar access** — So FlowMail can create calendar events when you schedule tasks.
- **Offline access** — So FlowMail can sync your email in the background even when you're not actively using the app.

:::note Beta Limitation
Outlook integration is currently configured as single-tenant for Dartmouth College users only. Support for additional organizations is coming soon.
:::

## AI models

FlowMail's intelligent features — email classification, task extraction, smart drafting, and learning — require AI models.

### Local models (recommended)

We recommend using local open weight models by default so that your information never leaves your computer. FlowMail includes built-in support for running models directly on your Mac — no API key or account needed.

1. Open **Settings** and navigate to the **Models** section.
2. Select a local model. FlowMail will download it automatically on first use.

Local models run entirely on your device using Apple Silicon acceleration. Your email content is never sent to any external service.

### Cloud AI providers (optional)

If you would like faster or more powerful models, you can connect your own API keys to a cloud AI provider:

1. Open **Settings** and navigate to the **Models** section.
2. Click **Add AI Account**.
3. Choose your provider:
   - **Claude** (recommended) — From [Anthropic](https://console.anthropic.com/). Best results for email understanding and drafting.
   - **OpenAI** — From [OpenAI](https://platform.openai.com/).
   - **Google Gemini** — From [Google AI Studio](https://aistudio.google.com/).
4. Enter your API key from your chosen provider.

If you don't have an API key yet, visit your provider's website to create an account and generate one.

## Security

All credentials — email OAuth tokens and AI API keys — are stored securely in your **macOS Keychain**. They are never saved to disk as plain text and never leave your machine except to authenticate with the respective services.
