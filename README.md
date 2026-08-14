# Aura Skills

**Backend skills for AI coding agents.** Portable `SKILL.md` files for Codex, Cursor, Claude Code, OpenCode, Gemini CLI, and other agents that support the [Agent Skills](https://agentskills.io/) format.

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

Install all four skills into your personal Codex skills directory:

```bash
python3 ~/.codex/skills/.system/skill-installer/scripts/install-skill-from-github.py \
  --repo furqanistic/aura-skills \
  --path skills/project-structure \
         skills/security-check \
         skills/database-optimization \
         skills/better-backend
```

Restart Codex after installation. You can then invoke a skill explicitly with
`$project-structure`, `$security-check`, `$database-optimization`, or
`$better-backend`. Codex may also select them automatically from their descriptions.

To install only one skill, pass only its path, for example:

```bash
python3 ~/.codex/skills/.system/skill-installer/scripts/install-skill-from-github.py \
  --repo furqanistic/aura-skills \
  --path skills/security-check
```

### Cross-agent installer

Uses the open [`npx skills add`](https://github.com/vercel-labs/skills) CLI — the same tool [Taste Skill](https://github.com/Leonxlnx/taste-skill) uses. It scans the `skills/` folder in this repo and gives you an **interactive picker** to choose skills and editors.

### Interactive install (recommended)

Run this in a normal terminal (PowerShell, Terminal.app, etc.):

```bash
npx skills add furqanistic/aura-skills
```

The CLI will prompt you to:

1. **Select skills** — pick one, some, or all 4
2. **Select agents** — Cursor, Codex, OpenCode, VS Code / Copilot, Claude Code, Gemini CLI, and [68+ others](https://github.com/vercel-labs/skills#supported-agents)
3. **Choose install method** — symlink (recommended) or copy
4. **Choose scope** — project (default) or global (`-g`)

You do **not** need to build your own installer. The picker is built into `npx skills`.

### Quick install (no prompts)

```bash
# All 4 skills, all detected agents
npx skills add furqanistic/aura-skills --all

# List available skills without installing
npx skills add furqanistic/aura-skills --list
```

Install one skill by its **install name** (the `name:` field in SKILL frontmatter):

```bash
npx skills add furqanistic/aura-skills --skill "project-structure"
npx skills add furqanistic/aura-skills --skill "security-check"
npx skills add furqanistic/aura-skills --skill "database-optimization"
npx skills add furqanistic/aura-skills --skill "better-backend"
```

Target specific agents without the interactive picker:

```bash
npx skills add furqanistic/aura-skills -a codex -a cursor -a opencode
```

You can also copy any `SKILL.md` into your project or paste it into a Codex / ChatGPT conversation.

## Skills

| Skill (folder) | Install name | Description |
| --- | --- | --- |
| **project-structure** | `project-structure` | Backend architecture and project structure. Feature-based modules, stack adaptation, production workflows. |
| **security-check** | `security-check` | Backend security auditor. Auth, tokens, payments, file uploads, data leaks, folder-by-folder checklists. |
| **database-optimization** | `database-optimization` | Database performance: indexes, queries, pagination, caching, MongoDB/PostgreSQL/MySQL/Redis, migration safety. |
| **better-backend** | `better-backend` | Backend code quality: clean, readable, reusable, maintainable code that adapts to your existing stack. |

### Which one should I use?

- **project-structure** — architecture, folder layout, new features, refactoring
- **security-check** — security audit, hardening, vulnerability review
- **database-optimization** — slow queries, indexes, pagination, scaling
- **better-backend** — code quality, readability, production-ready output

Install all four for the full Aura Skills bundle, or pick the ones you need.

## Repo structure

```
skills/
├── project-structure/
│   ├── SKILL.md
│   ├── agents/openai.yaml
│   └── references/architecture-guide.md
├── security-check/
│   ├── SKILL.md
│   ├── agents/openai.yaml
│   └── references/security-guide.md
├── database-optimization/
│   ├── SKILL.md
│   ├── agents/openai.yaml
│   └── references/database-guide.md
└── better-backend/
    ├── SKILL.md
    └── agents/openai.yaml
```

## Local development

Test before publishing:

```bash
npx skills add . --list
npx skills add . --skill "project-structure"
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

Resolve a skill path locally:

```bash
source ./skill.sh project-structure
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
