#!/bin/bash

# Interactive PR Creation Script
# Analyzes changes and suggests appropriate branch names, commit messages, and descriptions
# Usage: ./scripts/create-pr-interactive.sh

set -e

# Colors for output
GREEN='\033[0;32m'
BLUE='\033[0;34m'
YELLOW='\033[1;33m'
RED='\033[0;31m'
NC='\033[0m' # No Color

TARGET_BRANCH="main-develop"

echo -e "${BLUE}🤖 AI-Assisted PR Creation${NC}"
echo -e "${BLUE}━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━${NC}"
echo ""

# Check for changes
if [[ -z $(git status -s) ]]; then
    echo -e "${RED}❌ No changes detected${NC}"
    echo "Make some changes first, then run this script again."
    exit 1
fi

# Show current changes
echo -e "${YELLOW}📝 Changes detected:${NC}"
git status -s
echo ""

# Analyze changes and suggest type
echo -e "${BLUE}🔍 Analyzing changes...${NC}"
echo ""

# Detect change patterns
CHANGED_FILES=$(git status -s | awk '{print $2}')
HAS_PACKAGE_JSON=$(echo "$CHANGED_FILES" | grep -c "package.json" || true)
HAS_DOCS=$(echo "$CHANGED_FILES" | grep -cE "\.(md|mdx)$" || true)
HAS_TESTS=$(echo "$CHANGED_FILES" | grep -cE "\.(test|spec)\." || true)
HAS_COMPONENTS=$(echo "$CHANGED_FILES" | grep -c "components/" || true)
HAS_CONFIG=$(echo "$CHANGED_FILES" | grep -cE "\.(config|rc)\.(js|ts|json)$" || true)
HAS_CI=$(echo "$CHANGED_FILES" | grep -cE "(azure-pipelines|\.github)" || true)
HAS_STORIES=$(echo "$CHANGED_FILES" | grep -c "\.stories\." || true)

# Suggest branch type
SUGGESTED_TYPE=""
CONFIDENCE=""

if [ "$HAS_PACKAGE_JSON" -gt 0 ] && [ "$HAS_COMPONENTS" -eq 0 ]; then
    SUGGESTED_TYPE="chore"
    CONFIDENCE="High confidence - package.json changes"
elif [ "$HAS_DOCS" -gt 0 ] && [ "$HAS_COMPONENTS" -eq 0 ]; then
    SUGGESTED_TYPE="docs"
    CONFIDENCE="High confidence - documentation files only"
elif [ "$HAS_TESTS" -gt 0 ] && [ "$HAS_COMPONENTS" -eq 0 ]; then
    SUGGESTED_TYPE="test"
    CONFIDENCE="High confidence - test files only"
elif [ "$HAS_CI" -gt 0 ]; then
    SUGGESTED_TYPE="ci"
    CONFIDENCE="High confidence - CI/CD files"
elif [ "$HAS_CONFIG" -gt 0 ] && [ "$HAS_COMPONENTS" -eq 0 ]; then
    SUGGESTED_TYPE="chore"
    CONFIDENCE="Medium confidence - configuration changes"
elif [ "$HAS_STORIES" -gt 0 ]; then
    SUGGESTED_TYPE="chore"
    CONFIDENCE="Medium confidence - Storybook stories"
elif [ "$HAS_COMPONENTS" -gt 0 ]; then
    SUGGESTED_TYPE="feat"
    CONFIDENCE="Low confidence - component changes (could be feat/fix/refactor)"
else
    SUGGESTED_TYPE="chore"
    CONFIDENCE="Low confidence - mixed changes"
fi

echo -e "${GREEN}💡 Suggested type: ${SUGGESTED_TYPE}${NC}"
echo -e "   ${CONFIDENCE}"
echo ""

# Suggest branch name from changed files
MAIN_FILE=$(echo "$CHANGED_FILES" | head -1 | sed 's/.*\///' | sed 's/\..*//')
SUGGESTED_NAME=$(echo "$MAIN_FILE" | tr '[:upper:]' '[:lower:]' | tr ' ' '-' | sed 's/[^a-z0-9-]//g')

echo -e "${GREEN}💡 Suggested branch name: ${SUGGESTED_NAME}${NC}"
echo ""

# Ask user for confirmation or input
echo -e "${YELLOW}━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━${NC}"
echo -e "${YELLOW}Options:${NC}"
echo -e "  ${GREEN}1${NC} - Use AI suggestions (${SUGGESTED_TYPE}/${SUGGESTED_NAME})"
echo -e "  ${GREEN}2${NC} - Customize branch details"
echo -e "  ${GREEN}3${NC} - Cancel"
echo ""
read -p "Choose option [1]: " OPTION
OPTION=${OPTION:-1}

if [ "$OPTION" = "3" ]; then
    echo -e "${RED}❌ Cancelled${NC}"
    exit 0
fi

if [ "$OPTION" = "2" ]; then
    # Manual input
    echo ""
    echo -e "${BLUE}📋 Enter branch details:${NC}"
    echo ""
    
    echo "Branch types: feat, fix, chore, docs, style, refactor, test, ci, build"
    read -p "Branch type [$SUGGESTED_TYPE]: " BRANCH_TYPE
    BRANCH_TYPE=${BRANCH_TYPE:-$SUGGESTED_TYPE}
    
    read -p "Branch name [$SUGGESTED_NAME]: " BRANCH_NAME
    BRANCH_NAME=${BRANCH_NAME:-$SUGGESTED_NAME}
    
    read -p "Commit message: " COMMIT_MESSAGE
    
    read -p "PR description (optional): " PR_DESCRIPTION
    PR_DESCRIPTION=${PR_DESCRIPTION:-$COMMIT_MESSAGE}
else
    # Use AI suggestions
    BRANCH_TYPE=$SUGGESTED_TYPE
    BRANCH_NAME=$SUGGESTED_NAME
    
    # Generate commit message
    FILE_LIST=$(echo "$CHANGED_FILES" | head -3 | tr '\n' ', ' | sed 's/,$//')
    
    if [ "$HAS_PACKAGE_JSON" -gt 0 ]; then
        COMMIT_MESSAGE="${BRANCH_TYPE}: update package.json scripts and dependencies"
        PR_DESCRIPTION="Update package.json configuration. Modified files: ${FILE_LIST}"
    elif [ "$HAS_DOCS" -gt 0 ]; then
        COMMIT_MESSAGE="${BRANCH_TYPE}: update documentation"
        PR_DESCRIPTION="Update project documentation. Modified files: ${FILE_LIST}"
    elif [ "$HAS_STORIES" -gt 0 ]; then
        COMMIT_MESSAGE="${BRANCH_TYPE}: remove unused story files"
        PR_DESCRIPTION="Clean up unused Storybook story files. Removed files: ${FILE_LIST}"
    elif [ "$HAS_TESTS" -gt 0 ]; then
        COMMIT_MESSAGE="${BRANCH_TYPE}: update test files"
        PR_DESCRIPTION="Update test files. Modified: ${FILE_LIST}"
    else
        COMMIT_MESSAGE="${BRANCH_TYPE}: update ${SUGGESTED_NAME}"
        PR_DESCRIPTION="Update ${SUGGESTED_NAME}. Modified files: ${FILE_LIST}"
    fi
    
    echo ""
    echo -e "${GREEN}✨ Generated details:${NC}"
    echo -e "   Type: ${BLUE}${BRANCH_TYPE}${NC}"
    echo -e "   Name: ${BLUE}${BRANCH_NAME}${NC}"
    echo -e "   Message: ${BLUE}${COMMIT_MESSAGE}${NC}"
    echo ""
    read -p "Proceed? [Y/n]: " CONFIRM
    CONFIRM=${CONFIRM:-Y}
    
    if [[ ! "$CONFIRM" =~ ^[Yy]$ ]]; then
        echo -e "${RED}❌ Cancelled${NC}"
        exit 0
    fi
fi

FULL_BRANCH_NAME="${BRANCH_TYPE}/${BRANCH_NAME}"

echo ""
echo -e "${BLUE}🚀 Creating PR...${NC}"
echo -e "${BLUE}━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━${NC}"
echo ""

# Save current branch name
CURRENT_BRANCH=$(git rev-parse --abbrev-ref HEAD)

# Execute PR creation steps
echo -e "${BLUE}� Saving current changes...${NC}"
STASH_NEEDED=false
if [[ -n $(git status -s) ]]; then
    git stash push -u -m "auto-pr-script-temp-stash"
    STASH_NEEDED=true
    echo -e "${GREEN}✓ Changes saved to stash${NC}"
else
    echo -e "${GREEN}✓ No need to stash${NC}"
fi
echo ""

echo -e "${BLUE}�📥 Updating develop branch...${NC}"
git checkout develop 2>/dev/null || git checkout -b develop
git pull origin develop 2>/dev/null || echo "Note: Could not pull from origin/develop"
echo -e "${GREEN}✓ Develop branch ready${NC}"
echo ""

if [ "$STASH_NEEDED" = true ]; then
    echo -e "${BLUE}📤 Restoring changes...${NC}"
    git stash pop
    echo -e "${GREEN}✓ Changes restored${NC}"
    echo ""
fi

echo -e "${BLUE}🌿 Creating branch '${FULL_BRANCH_NAME}'...${NC}"
git checkout -b "${FULL_BRANCH_NAME}"
echo -e "${GREEN}✓ Branch created${NC}"
echo ""

echo -e "${BLUE}📦 Staging changes...${NC}"
git add -A
echo -e "${GREEN}✓ Changes staged${NC}"
echo ""

echo -e "${BLUE}💾 Committing changes...${NC}"
git commit -m "${COMMIT_MESSAGE}"
echo -e "${GREEN}✓ Changes committed${NC}"
echo ""

echo -e "${BLUE}🔼 Pushing branch to remote...${NC}"
git push -u origin "${FULL_BRANCH_NAME}"
echo -e "${GREEN}✓ Branch pushed${NC}"
echo ""

echo -e "${BLUE}📝 Creating Pull Request...${NC}"
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
