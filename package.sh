#!/usr/bin/env bash
# CPI Branding Kit — Package Script
# Creates a distributable ZIP of the complete skill for AI agent upload
# Usage: bash package.sh

set -e

VERSION="1.0.0"
NAME="cpi-branding-kit"
OUTPUT_DIR="$(dirname "$0")/docs/downloads"
OUTPUT_FILE="${OUTPUT_DIR}/${NAME}-v${VERSION}.zip"
SOURCE_DIR="$(dirname "$0")"

echo "=== CPI Branding Kit v${VERSION} — Package Builder ==="

# Create output directory
mkdir -p "${OUTPUT_DIR}"

# Build exclusion list
EXCLUDE=(
  "*.git*"
  "_raw/*"
  "node_modules/*"
  "docs/downloads/*"
  "*.zip"
  "package.sh"
)

echo "Packaging skill from: ${SOURCE_DIR}"
echo "Output: ${OUTPUT_FILE}"

# Create ZIP (excluding git, raw files, archives)
cd "${SOURCE_DIR}"
zip -r "${OUTPUT_FILE}" . \
  -x "*.git*" \
  -x "_raw/*" \
  -x "node_modules/*" \
  -x "docs/downloads/*" \
  -x "*.zip" \
  -x "package.sh" \
  > /dev/null 2>&1

# Verify
if [ -f "${OUTPUT_FILE}" ]; then
  SIZE=$(du -h "${OUTPUT_FILE}" | cut -f1)
  COUNT=$(unzip -l "${OUTPUT_FILE}" | tail -1 | awk '{print $2}')
  echo "✅ Package created successfully!"
  echo "   File: ${OUTPUT_FILE}"
  echo "   Size: ${SIZE}"
  echo "   Files: ${COUNT}"
else
  echo "❌ Failed to create package."
  exit 1
fi
