# Changelog

All notable changes to Aura Skills are documented here.

## [1.1.1] - 2026-08-20

### Fixed

- Launch the Skills installer through npm's JavaScript CLI on Windows instead of trying to execute the `npx.cmd` shim directly

## [1.1.0] - 2026-08-15

### Added

- **integrate-1bill** — secure Pakistan 1LINK 1BILL collection workflows
- **integrate-easypaisa** — Easypaisa merchant payment integration and recovery workflows
- **integrate-jazzcash** — JazzCash wallet, voucher, card, and hosted payment workflows
- **screenshot-to-code** — responsive, accessible screenshot reconstruction with rendered fidelity checks

### Changed

- Grouped Stripe, 1BILL, Easypaisa, and JazzCash under `skills/payment-integrations/`
- Expanded backend architecture guidance for existing projects and all technology stacks
- Expanded database optimization coverage across correctness, indexes, concurrency, reliability, and scale
- Updated npm/GitHub installation and publishing guidance

## [1.0.0] - 2026-06-28

### Changed

- Removed scaffold skills (`aura-backend`, `api-design`, `database`) — repo now ships the 4 core Aura Skills only

## [0.5.0] - 2026-06-28

### Added

- **better-backend** — backend code quality skill for clean, readable, reusable, production-ready code that adapts to the existing project stack

## [0.4.0] - 2026-06-28

### Added

- **database-optimization** — database performance skill with index/query/pagination rules, MongoDB/PostgreSQL/MySQL/Redis guidance, ORM tuning, migration safety, and deletion safeguards

## [0.3.0] - 2026-06-28

### Added

- **security-check** — backend security auditor with folder-by-folder checklists, auth/token/payment/file upload rules, and structured review output format

## [0.2.0] - 2026-06-28

### Added

- **project-structure** — first skill: backend architecture, feature-based modules, security, scalability, and production workflows

## [0.1.0] - 2026-06-28

### Added

- Initial repository scaffold compatible with `npx skills add`
- **aura-backend** — backend skill (stack inference, API/data/auth/error patterns)
- **api-design** — REST/RPC API design skill
- **database** — schema, migration, and query skill
- `skill.sh` local registry helper
- README with install instructions for Codex, Cursor, OpenCode, and other agents
