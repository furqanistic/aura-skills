#!/usr/bin/env bash

# Local skill registry — resolve SKILL.md paths during development
declare -A SKILLS=(
  [project-structure]="skills/project-structure/SKILL.md"
  [security-check]="skills/security-check/SKILL.md"
  [database-optimization]="skills/database-optimization/SKILL.md"
  [better-backend]="skills/better-backend/SKILL.md"
)

if [[ $# -eq 0 ]]; then
  echo "Usage: source ./skill.sh <skill-name>"
  echo "Available skills: ${!SKILLS[@]}"
else
  echo "${SKILLS[$1]}"
fi
