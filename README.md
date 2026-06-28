# Aura Skills

**Backend skills for AI coding agents.** Portable `SKILL.md` files for Codex, Cursor, Claude Code, OpenCode, Gemini CLI, and other agents that support the [Agent Skills](https://agentskills.io/) format.

## Install

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
│   └── SKILL.md
├── security-check/
│   └── SKILL.md
├── database-optimization/
│   └── SKILL.md
└── better-backend/
    └── SKILL.md
```

## Local development

Test before publishing:

```bash
npx skills add . --list
npx skills add . --skill "project-structure"
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
