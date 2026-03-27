# FlowMail

AI-powered email management for macOS. FlowMail organizes email around your mental contexts, learns from your corrections, and drafts responses that sound like you.

**[Documentation](https://ljchang.github.io/flowmail-site/)** | **[Download](https://ljchang.github.io/flowmail-site/docs/getting-started/download)**

## Features

- **Cards** -- Mental contexts (projects, people, topics) that organize your email automatically
- **AI Triage** -- Classifies and prioritizes incoming email with self-improving accuracy
- **Focus Queue** -- GTD-inspired task extraction with concrete next actions
- **Smart Drafting** -- Context-aware responses that adapt to your editing style
- **Memory** -- Automatic knowledge extraction from your conversations
- **People** -- Relationship tracking for tone-appropriate communication
- **Local AI** -- Run open weight models on-device so your data never leaves your Mac

## Tech Stack

- **Desktop shell**: Tauri 2.0 (Rust)
- **Frontend**: Svelte 5 + Vite + Tailwind CSS v4
- **Database**: SQLite (SQLCipher encrypted)
- **Search**: Tantivy full-text search
- **AI**: Local models (recommended) or cloud providers (Claude, OpenAI, Gemini)

## Development

```bash
npm install           # Install frontend deps
npm run tauri dev     # Full dev mode (Rust + frontend)
npm run tauri build   # Production build
```

See the [docs](https://ljchang.github.io/flowmail-site/) for more details.

## Documentation Site

The documentation is built with [Docusaurus](https://docusaurus.io/) and hosted on GitHub Pages.

```bash
npm install       # Install deps
npm start         # Local dev server
npm run build     # Production build
```

## License

Copyright 2026 Luke Chang
