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
    echo "skills/payment-integrations/integrate-stripe/SKILL.md"
    ;;
  integrate-1bill)
    echo "skills/payment-integrations/integrate-1bill/SKILL.md"
    ;;
  integrate-easypaisa)
    echo "skills/payment-integrations/integrate-easypaisa/SKILL.md"
    ;;
  integrate-jazzcash)
    echo "skills/payment-integrations/integrate-jazzcash/SKILL.md"
    ;;
  screenshot-to-code)
    echo "skills/screenshot-to-code/SKILL.md"
    ;;
  "")
    echo "Usage: source ./skill.sh <skill-name>"
    echo "Available skills: architect-backend audit-backend-security optimize-database improve-backend-code integrate-stripe integrate-1bill integrate-easypaisa integrate-jazzcash screenshot-to-code"
    ;;
  *)
    echo "Unknown skill: $1" >&2
    exit 1
    ;;
esac
