#!/usr/bin/env bash

# Local skill registry — resolve SKILL.md paths during development.
case "${1:-}" in
  architect-backend)
    echo "skills/architect-backend/SKILL.md"
    ;;
  audit-backend-security)
    echo "skills/audit-backend-security/SKILL.md"
    ;;
  optimize-database)
    echo "skills/optimize-database/SKILL.md"
    ;;
  improve-backend-code)
    echo "skills/improve-backend-code/SKILL.md"
    ;;
  integrate-stripe)
    echo "skills/integrate-stripe/SKILL.md"
    ;;
  "")
    echo "Usage: source ./skill.sh <skill-name>"
    echo "Available skills: architect-backend audit-backend-security optimize-database improve-backend-code integrate-stripe"
    ;;
  *)
    echo "Unknown skill: $1" >&2
    exit 1
    ;;
esac
