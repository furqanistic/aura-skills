# Aura Skills

**Production-ready development skills for AI coding agents.** Aura Skills helps agents build accurate interfaces, organize backend architecture, audit security, optimize databases, improve code quality, and create secure payment integrations.

The package includes nine skills:

- `architect-backend` — design new backends or safely improve existing ones in any stack
- `audit-backend-security` — find and fix backend security risks
- `optimize-database` — audit and improve database correctness, indexes, speed, reliability, and scale
- `improve-backend-code` — write clean, maintainable, professional backend code
- `integrate-stripe` — build or repair secure Stripe payment flows
- `integrate-1bill` — build or repair Pakistan 1LINK 1BILL collections
- `integrate-easypaisa` — build or repair Easypaisa merchant payment flows
- `integrate-jazzcash` — build or repair JazzCash merchant payment flows
- `screenshot-to-code` — recreate screenshots as responsive, accessible frontend code

## Compatibility

Aura Skills are not tied to OpenAI or any single AI provider. The core instructions
live in standard `SKILL.md` files and work across compatible agents. Files named
`agents/openai.yaml` only add optional Codex/OpenAI interface metadata, such as a
display name and starter prompt. Other agents can ignore those files and still use
the complete skill.

## Install

Install Aura Skills from npm or GitHub. Both methods provide the same skills,
agent picker, installation options, and project/global scopes.

| Method | Command |
| --- | --- |
| npm | `npx aura-skills` |
| GitHub | `npx skills add furqanistic/aura-skills` |

Run either command in Terminal, PowerShell, or another command prompt. The
interactive installer will ask you to:

1. **Select skills** — pick one, some, or all 9
2. **Select agents** — Cursor, Codex, OpenCode, VS Code / Copilot, Claude Code, Gemini CLI, and [68+ others](https://github.com/vercel-labs/skills#supported-agents)
3. **Choose install method** — symlink (recommended) or copy
4. **Choose scope** — project (default) or global (`-g`)

The npm command is a short launcher for the same GitHub-backed Skills CLI flow.

### Install every skill

| Method | Command |
| --- | --- |
| npm | `npx aura-skills --all` |
| GitHub | `npx skills add furqanistic/aura-skills --all` |

### List skills without installing

| Method | Command |
| --- | --- |
| npm | `npx aura-skills --list` |
| GitHub | `npx skills add furqanistic/aura-skills --list` |

### Install one skill

Replace `<skill-name>` with a name from the skills table below.

| Method | Command |
| --- | --- |
| npm | `npx aura-skills --skill <skill-name>` |
| GitHub | `npx skills add furqanistic/aura-skills --skill <skill-name>` |

Example:

```bash
# npm
npx aura-skills --skill integrate-stripe

# GitHub
npx skills add furqanistic/aura-skills --skill integrate-stripe
```

### Install for specific agents

Pass one or more supported agent names:

```bash
# npm
npx aura-skills -a codex -a cursor -a opencode

# GitHub
npx skills add furqanistic/aura-skills -a codex -a cursor -a opencode
```

Add `-g` to either command to install globally for the selected agents.

You can also copy any `SKILL.md` into your project or provide it to another compatible AI agent.

## Skills

| Skill (folder) | Install name | Description |
| --- | --- | --- |
| **architect-backend** | `architect-backend` | Designs new backends or gives existing backends a safe, stack-specific improvement path. |
| **audit-backend-security** | `audit-backend-security` | Analyzes your backend for security risks and explains how to fix them. |
| **optimize-database** | `optimize-database` | Audits indexes, queries, schemas, concurrency, caching, migrations, backups, security, and scaling. |
| **improve-backend-code** | `improve-backend-code` | Helps you write clean, professional, maintainable, and scalable backend code. |
| **integrate-stripe** | `integrate-stripe` | Builds secure Stripe payments, subscriptions, webhooks, and marketplace flows. |
| **integrate-1bill** | `integrate-1bill` | Builds reliable Pakistan 1LINK 1BILL inquiry, payment, status, and reconciliation flows. |
| **integrate-easypaisa** | `integrate-easypaisa` | Builds secure Easypaisa Mobile Account and OTC payment flows. |
| **integrate-jazzcash** | `integrate-jazzcash` | Builds secure JazzCash wallet, voucher, card, and hosted payment flows. |
| **screenshot-to-code** | `screenshot-to-code` | Recreates UI screenshots as accurate, responsive, accessible frontend code. |

### Which one should I use?

- **architect-backend** — design a backend or safely improve the one you already have
- **audit-backend-security** — find and fix backend security risks
- **optimize-database** — run a complete database health, performance, and scaling audit
- **improve-backend-code** — write cleaner, professional backend code
- **integrate-stripe** — connect Stripe securely and handle the full payment lifecycle
- **integrate-1bill** — accept and reconcile Pakistan 1LINK 1BILL collections
- **integrate-easypaisa** — accept Easypaisa merchant payments and handle callbacks, status, and reconciliation
- **integrate-jazzcash** — accept JazzCash merchant payments and handle hashes, callbacks, status, and reconciliation
- **screenshot-to-code** — turn a UI screenshot or mockup into working frontend code

Install all nine for the full Aura Skills bundle, or pick the ones you need.

## Repo structure

```
skills/
├── architect-backend/
│   ├── SKILL.md
│   ├── agents/openai.yaml
│   └── references/architecture-guide.md
├── audit-backend-security/
│   ├── SKILL.md
│   ├── agents/openai.yaml
│   └── references/security-guide.md
├── optimize-database/
│   ├── SKILL.md
│   ├── agents/openai.yaml
│   └── references/database-guide.md
├── improve-backend-code/
│   ├── SKILL.md
│   └── agents/openai.yaml
├── screenshot-to-code/
│   ├── SKILL.md
│   ├── agents/openai.yaml
│   └── references/
└── payment-integrations/
    ├── integrate-stripe/
    │   ├── SKILL.md
    │   ├── agents/openai.yaml
    │   └── references/
    ├── integrate-1bill/
    │   ├── SKILL.md
    │   ├── agents/openai.yaml
    │   └── references/
    ├── integrate-easypaisa/
    │   ├── SKILL.md
    │   ├── agents/openai.yaml
    │   └── references/
    └── integrate-jazzcash/
        ├── SKILL.md
        ├── agents/openai.yaml
        └── references/
```

## Local development

Test before publishing:

```bash
npx skills add . --list
npx skills add . --skill "architect-backend"
```

Test the npm package contents before publishing:

```bash
npm pack --dry-run
node --check bin/aura-skills.js
```

Publish the branded installer:

```bash
npm login
npm publish
```

### Publishing updates

The `aura-skills` npm launcher downloads the skills from GitHub when it runs.
If you only change files inside `skills/`, push those changes to GitHub; you do
not need to publish a new npm version:

```bash
git add .
git commit -m "update skills"
git push
```

Publish a new npm version only when the launcher or npm package changes, such as
`bin/aura-skills.js` or `package.json`:

```bash
git add .
git commit -m "update installer"
npm version patch
npm publish
git push --follow-tags
```

Use `npm version minor` for a significant backward-compatible feature and
`npm version major` for a breaking change. Each npm version can be published
only once.

Resolve a skill path locally:

```bash
source ./skill.sh architect-backend
```

## Web prototype

A minimal placeholder site lives in `web/`:

```bash
cd web
npm install
npm run dev
```

## License

[MIT License](LICENSE)
