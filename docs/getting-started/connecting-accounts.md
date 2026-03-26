---
sidebar_position: 2
title: Connecting Accounts
---

# Connecting accounts

FlowMail works with Gmail and Microsoft Outlook, and uses an AI provider for its intelligent features. You'll need to connect at least one email account and one AI account to get started.

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

## AI account

FlowMail's intelligent features — email classification, task extraction, smart drafting, and learning — require an AI provider.

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
