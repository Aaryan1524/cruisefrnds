#!/bin/bash

# Auto-commit script for cruisefrnds
# This script checks for changes and commits them daily

# Navigate to the repository
cd "$(dirname "$0")" || exit 1

# Configuration
REPO_DIR="/Users/aaryan/Desktop/cruisefrnds"
LOG_FILE="$REPO_DIR/.auto-commit.log"

# Function to log messages
log_message() {
    echo "[$(date '+%Y-%m-%d %H:%M:%S')] $1" | tee -a "$LOG_FILE"
}

log_message "Starting auto-commit check..."

# Check if we're in a git repository
if [ ! -d .git ]; then
    log_message "ERROR: Not a git repository"
    exit 1
fi

# Fetch latest changes from remote (optional, to avoid conflicts)
git fetch origin

# Check if there are any changes to commit
if [ -n "$(git status --porcelain)" ]; then
    log_message "Changes detected. Committing..."
    
    # Add all changes
    git add .
    
    # Commit with timestamp
    COMMIT_MSG="Auto-commit: $(date '+%Y-%m-%d %H:%M:%S')"
    git commit -m "$COMMIT_MSG"
    
    # Push to remote
    if git push origin main; then
        log_message "✅ Successfully committed and pushed changes"
    else
        # Try 'master' if 'main' fails
        if git push origin master; then
            log_message "✅ Successfully committed and pushed changes to master"
        else
            log_message "❌ Failed to push changes"
            exit 1
        fi
    fi
else
    log_message "No changes to commit"
fi

log_message "Auto-commit check completed"
