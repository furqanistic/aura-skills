# Aura Skills

**Backend skills for AI coding agents.** Portable, agent-neutral `SKILL.md` files for any tool that supports the [Agent Skills](https://agentskills.io/) format, including Codex, Cursor, Claude Code, OpenCode, Gemini CLI, GitHub Copilot, and many others.

## Compatibility

Aura Skills are not tied to OpenAI or any single AI provider. The core instructions
live in standard `SKILL.md` files and work across compatible agents. Files named
`agents/openai.yaml` only add optional Codex/OpenAI interface metadata, such as a
display name and starter prompt. Other agents can ignore those files and still use
the complete skill.

## Install

### Branded installer

After the `aura-skills` package is published to npm, install from any terminal with:

```bash
npx aura-skills
```

Arguments are forwarded to the Skills CLI, so global Codex installation works with:

```bash
npx aura-skills -a codex -g
```

The launcher delegates to `npx skills add furqanistic/aura-skills`. The upstream
Skills CLI requires GitHub sources in `owner/repository` format, so
`npx skills add aura-skills` is not a supported portable alias.

### Codex (direct install)

Install all five skills into your personal Codex skills directory:

```bash
python3 ~/.codex/skills/.system/skill-installer/scripts/install-skill-from-github.py \
  --repo furqanistic/aura-skills \
  --path skills/architect-backend \
         skills/audit-backend-security \
         skills/optimize-database \
         skills/improve-backend-code \
         skills/integrate-stripe
```

Restart Codex after installation. You can then invoke a skill explicitly with
`$architect-backend`, `$audit-backend-security`, `$optimize-database`,
`$improve-backend-code`, or `$integrate-stripe`. Codex may also select them automatically
from their descriptions.

To install only one skill, pass only its path, for example:

```bash
python3 ~/.codex/skills/.system/skill-installer/scripts/install-skill-from-github.py \
  --repo furqanistic/aura-skills \
  --path skills/audit-backend-security
```

### Cross-agent installer

Uses the open [`npx skills add`](https://github.com/vercel-labs/skills) CLI — the same tool [Taste Skill](https://github.com/Leonxlnx/taste-skill) uses. It scans the `skills/` folder in this repo and gives you an **interactive picker** to choose skills and editors.

### Interactive install (recommended)

Run this in a normal terminal (PowerShell, Terminal.app, etc.):

```bash
npx skills add furqanistic/aura-skills
```

The CLI will prompt you to:

1. **Select skills** — pick one, some, or all 5
2. **Select agents** — Cursor, Codex, OpenCode, VS Code / Copilot, Claude Code, Gemini CLI, and [68+ others](https://github.com/vercel-labs/skills#supported-agents)
3. **Choose install method** — symlink (recommended) or copy
4. **Choose scope** — project (default) or global (`-g`)

You do **not** need to build your own installer. The picker is built into `npx skills`.

### Quick install (no prompts)

```bash
# All 5 skills, all detected agents
npx skills add furqanistic/aura-skills --all

# List available skills without installing
npx skills add furqanistic/aura-skills --list
```

Install one skill by its **install name** (the `name:` field in SKILL frontmatter):

```bash
npx skills add furqanistic/aura-skills --skill "architect-backend"
npx skills add furqanistic/aura-skills --skill "audit-backend-security"
npx skills add furqanistic/aura-skills --skill "optimize-database"
npx skills add furqanistic/aura-skills --skill "improve-backend-code"
npx skills add furqanistic/aura-skills --skill "integrate-stripe"
```

Target specific agents without the interactive picker:

```bash
npx skills add furqanistic/aura-skills -a codex -a cursor -a opencode
```

You can also copy any `SKILL.md` into your project or provide it to another compatible AI agent.

## Skills

| Skill (folder) | Install name | Description |
| --- | --- | --- |
| **architect-backend** | `architect-backend` | Sets up and organizes your backend files for a clean, scalable structure. |
| **audit-backend-security** | `audit-backend-security` | Analyzes your backend for security risks and explains how to fix them. |
| **optimize-database** | `optimize-database` | Improves database speed with better queries, indexes, pagination, caching, and safe migrations. |
| **improve-backend-code** | `improve-backend-code` | Helps you write clean, professional, maintainable, and scalable backend code. |
| **integrate-stripe** | `integrate-stripe` | Builds secure Stripe payments, subscriptions, webhooks, and marketplace flows. |

### Which one should I use?

- **architect-backend** — organize your backend files and folders
- **audit-backend-security** — find and fix backend security risks
- **optimize-database** — improve database speed and scalability
- **improve-backend-code** — write cleaner, professional backend code
- **integrate-stripe** — connect Stripe securely and handle the full payment lifecycle

Install all five for the full Aura Skills bundle, or pick the ones you need.

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
└── integrate-stripe/
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
