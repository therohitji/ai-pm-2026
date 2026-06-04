#!/usr/bin/env bash
# One-shot deploy for the Hustlers Fellowship site.
# Updates ALL THREE places in one go:
#   1. Local folder  — rebuilds the course from sources
#   2. GitHub         — commits + pushes (therohitji/ai-pm-2026)
#   3. Hostinger      — uploads the live files via FTP (hustlersfellowship.com)
#
# Usage:
#   bash deploy.sh "what you changed"
#
# FTP credentials are read from .env (which is git-ignored — never pushed to GitHub).
set -e
cd "$(dirname "$0")"
MSG="${1:-Update site}"

echo "▸ 1/3  Rebuilding course from sources..."
python3 ai-pm-2026/build.py >/dev/null
echo "       done."

echo "▸ 2/3  Commit + push to GitHub..."
git add -A
git commit -m "$MSG" || echo "       (nothing new to commit)"
git push origin main
echo "       pushed."

echo "▸ 3/3  Upload live files to Hostinger..."
set -a; . ./.env; set +a
for f in index.html favicon.svg ai-pm-2026/ai-pm-course-master.html; do
  curl -sS --connect-timeout 30 --max-time 180 --ftp-create-dirs \
    -T "$f" -u "$FTP_USER:$FTP_PASS" "ftp://$FTP_HOST/$f"
  echo "       ✓ $f"
done

echo "✅ Done — local folder, GitHub, and hustlersfellowship.com all updated."
