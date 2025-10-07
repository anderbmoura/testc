#!/bin/bash

# Script to automate branch creation, commit, push and PR creation
# Usage: ./scripts/create-pr.sh <branch-type> <branch-name> <commit-message> <pr-description>
# Example: ./scripts/create-pr.sh chore update-dependencies "chore: update project dependencies" "Update all dependencies to latest versions"

set -e

# Colors for output
GREEN='\033[0;32m'
BLUE='\033[0;34m'
RED='\033[0;31m'
NC='\033[0m' # No Color

# Check if correct number of arguments
if [ "$#" -lt 3 ]; then
    echo -e "${RED}Error: Missing arguments${NC}"
    echo "Usage: $0 <branch-type> <branch-name> <commit-message> [pr-description]"
    echo ""
    echo "Branch types: feat, fix, chore, docs, style, refactor, test, ci, build"
    echo ""
    echo "Example:"
    echo "  $0 chore update-scripts \"chore: update build scripts\" \"Update build scripts for better performance\""
    exit 1
fi

BRANCH_TYPE=$1
BRANCH_NAME=$2
COMMIT_MESSAGE=$3
PR_DESCRIPTION=${4:-$COMMIT_MESSAGE}
FULL_BRANCH_NAME="${BRANCH_TYPE}/${BRANCH_NAME}"
TARGET_BRANCH="main-develop"

echo -e "${BLUE}🚀 Starting automated PR creation process...${NC}"
echo ""

# Save current branch name
CURRENT_BRANCH=$(git rev-parse --abbrev-ref HEAD)

# Step 1: Save changes if needed and checkout develop
echo -e "${BLUE}💾 Step 1: Saving current state...${NC}"
STASH_NEEDED=false
if [[ -n $(git status -s) ]]; then
    git stash push -u -m "auto-pr-script-temp-stash"
    STASH_NEEDED=true
    echo -e "${GREEN}✓ Changes saved to stash${NC}"
else
    echo -e "${GREEN}✓ Working directory clean${NC}"
fi
echo ""

# Step 2: Checkout develop and pull latest changes
echo -e "${BLUE}📥 Step 2: Updating develop branch...${NC}"
git checkout develop 2>/dev/null || git checkout -b develop
git pull origin develop 2>/dev/null || echo "Note: Could not pull from origin/develop"
echo -e "${GREEN}✓ Develop branch updated${NC}"
echo ""

# Step 3: Restore changes if they were stashed
if [ "$STASH_NEEDED" = true ]; then
    echo -e "${BLUE}📤 Step 3: Restoring changes...${NC}"
    git stash pop
    echo -e "${GREEN}✓ Changes restored${NC}"
    echo ""
fi

# Step 4: Create new branch
STEP_NUM=4
if [ "$STASH_NEEDED" = true ]; then
    STEP_NUM=4
else
    STEP_NUM=3
fi

echo -e "${BLUE}🌿 Step ${STEP_NUM}: Creating branch '${FULL_BRANCH_NAME}'...${NC}"
git checkout -b "${FULL_BRANCH_NAME}"
echo -e "${GREEN}✓ Branch created${NC}"
echo ""

# Step 5: Add all changes
STEP_NUM=$((STEP_NUM + 1))
echo -e "${BLUE}📦 Step ${STEP_NUM}: Staging changes...${NC}"
git add -A
echo -e "${GREEN}✓ Changes staged${NC}"
echo ""

# Step 6: Commit changes
STEP_NUM=$((STEP_NUM + 1))
echo -e "${BLUE}💾 Step ${STEP_NUM}: Committing changes...${NC}"
git commit -m "${COMMIT_MESSAGE}"
echo -e "${GREEN}✓ Changes committed${NC}"
echo ""

# Step 7: Push branch
STEP_NUM=$((STEP_NUM + 1))
echo -e "${BLUE}🔼 Step ${STEP_NUM}: Pushing branch to remote...${NC}"
git push -u origin "${FULL_BRANCH_NAME}"
echo -e "${GREEN}✓ Branch pushed${NC}"
echo ""

# Step 8: Create PR with auto-complete
STEP_NUM=$((STEP_NUM + 1))
echo -e "${BLUE}📝 Step ${STEP_NUM}: Creating Pull Request...${NC}"
PR_OUTPUT=$(az repos pr create \
    --source-branch "${FULL_BRANCH_NAME}" \
    --target-branch "${TARGET_BRANCH}" \
    --title "${COMMIT_MESSAGE}" \
    --description "${PR_DESCRIPTION}" \
    --auto-complete true \
    2>&1)

if [ $? -eq 0 ]; then
    PR_ID=$(echo "$PR_OUTPUT" | grep -o '"pullRequestId": [0-9]*' | grep -o '[0-9]*')
    PR_URL=$(echo "$PR_OUTPUT" | grep -o '"url": "[^"]*"' | head -1 | grep -o 'https://[^"]*')
    
    echo -e "${GREEN}✓ Pull Request created successfully!${NC}"
    echo ""
    echo -e "${GREEN}━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━${NC}"
    echo -e "${GREEN}✨ SUCCESS! PR #${PR_ID} created and auto-completed${NC}"
    echo -e "${GREEN}━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━${NC}"
    echo ""
    echo -e "📋 Summary:"
    echo -e "  Branch: ${BLUE}${FULL_BRANCH_NAME}${NC}"
    echo -e "  Target: ${BLUE}${TARGET_BRANCH}${NC}"
    echo -e "  PR ID:  ${BLUE}#${PR_ID}${NC}"
    echo -e "  URL:    ${BLUE}${PR_URL}${NC}"
    echo ""
else
    echo -e "${RED}✗ Failed to create Pull Request${NC}"
    echo "$PR_OUTPUT"
    exit 1
fi
