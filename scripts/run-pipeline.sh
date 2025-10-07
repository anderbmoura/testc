#!/bin/bash

# Interactive Azure DevOps Pipeline Runner
# Usage: ./scripts/run-pipeline.sh

set -e

# Colors for output
GREEN='\033[0;32m'
BLUE='\033[0;34m'
YELLOW='\033[1;33m'
RED='\033[0;31m'
NC='\033[0m' # No Color

# Pipeline IDs
PIPELINE_ID_DSC_UI=2687  # LIB_DSC-UI_RN
PIPELINE_ID_SECOND=2718  # Second pipeline

echo -e "${BLUE}🚀 Azure DevOps Pipeline Runner${NC}"
echo -e "${BLUE}━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━${NC}"
echo ""

# Get current branch
CURRENT_BRANCH=$(git rev-parse --abbrev-ref HEAD)

# List available branches
echo -e "${YELLOW}📋 Available branches:${NC}"
echo -e "  ${GREEN}1${NC} - develop (default)"
echo -e "  ${GREEN}2${NC} - main-develop"
echo -e "  ${GREEN}3${NC} - main"
echo -e "  ${GREEN}4${NC} - Current branch (${CURRENT_BRANCH})"
echo -e "  ${GREEN}5${NC} - Custom branch name"
echo ""

read -p "Choose branch [1]: " BRANCH_OPTION
BRANCH_OPTION=${BRANCH_OPTION:-1}

case $BRANCH_OPTION in
    1)
        BRANCH="develop"
        ;;
    2)
        BRANCH="main-develop"
        ;;
    3)
        BRANCH="main"
        ;;
    4)
        BRANCH="$CURRENT_BRANCH"
        ;;
    5)
        read -p "Enter branch name: " BRANCH
        ;;
    *)
        BRANCH="develop"
        ;;
esac

echo ""
echo -e "${GREEN}✓ Selected branch: ${BRANCH}${NC}"
echo ""

# Get current version from package.json or git tags
echo -e "${BLUE}🔍 Detecting current version...${NC}"

# Try to get version from package.json in the library
CURRENT_VERSION=""
if [ -f "packages/ui-components/package.json" ]; then
    CURRENT_VERSION=$(grep -o '"version": *"[^"]*"' packages/ui-components/package.json | head -1 | sed 's/"version": *"//;s/"//')
fi

# Fallback to git tags if no package.json version found
if [ -z "$CURRENT_VERSION" ]; then
    CURRENT_VERSION=$(git describe --tags --abbrev=0 2>/dev/null | sed 's/^v//')
fi

# Fallback to default if still not found
if [ -z "$CURRENT_VERSION" ]; then
    CURRENT_VERSION="0.0.0"
fi

echo -e "${GREEN}✓ Current version detected: ${CURRENT_VERSION}${NC}"
echo ""

# Parse version components
IFS='.' read -r MAJOR MINOR PATCH <<< "$CURRENT_VERSION"

# Calculate suggested versions
NEXT_PATCH="$MAJOR.$MINOR.$((PATCH + 1))"
NEXT_MINOR="$MAJOR.$((MINOR + 1)).0"
NEXT_MAJOR="$((MAJOR + 1)).0.0"

# Ask for version
echo -e "${YELLOW}📦 Service Version (Versão do Serviço):${NC}"
echo -e "  Current version: ${BLUE}${CURRENT_VERSION}${NC}"
echo ""
echo -e "  ${GREEN}1${NC} - Patch ${BLUE}${NEXT_PATCH}${NC} (Bug fixes, small changes)"
echo -e "  ${GREEN}2${NC} - Minor ${BLUE}${NEXT_MINOR}${NC} (New features, backwards compatible)"
echo -e "  ${GREEN}3${NC} - Major ${BLUE}${NEXT_MAJOR}${NC} (Breaking changes)"
echo -e "  ${GREEN}4${NC} - Custom version (enter manually)"
echo -e "  ${GREEN}5${NC} - Skip version (use default)"
echo ""

read -p "Choose version option [1]: " VERSION_OPTION
VERSION_OPTION=${VERSION_OPTION:-1}

case $VERSION_OPTION in
    1)
        SERVICE_VERSION="$NEXT_PATCH"
        VERSION_DESC="Patch: ${SERVICE_VERSION}"
        USE_VERSION=true
        ;;
    2)
        SERVICE_VERSION="$NEXT_MINOR"
        VERSION_DESC="Minor: ${SERVICE_VERSION}"
        USE_VERSION=true
        ;;
    3)
        SERVICE_VERSION="$NEXT_MAJOR"
        VERSION_DESC="Major: ${SERVICE_VERSION}"
        USE_VERSION=true
        ;;
    4)
        read -p "Enter custom version (X.Y.Z): " SERVICE_VERSION
        VERSION_DESC="Custom: ${SERVICE_VERSION}"
        USE_VERSION=true
        ;;
    5)
        VERSION_DESC="No version specified (will use default)"
        USE_VERSION=false
        ;;
    *)
        SERVICE_VERSION="$NEXT_PATCH"
        VERSION_DESC="Patch: ${SERVICE_VERSION}"
        USE_VERSION=true
        ;;
esac

echo ""
echo -e "${GREEN}✓ ${VERSION_DESC}${NC}"
echo ""

# Summary and confirmation
echo -e "${BLUE}━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━${NC}"
echo -e "${YELLOW}📋 Pipelines Configuration:${NC}"
echo -e "  Pipeline 1 (DSC-UI):  ${BLUE}${PIPELINE_ID_DSC_UI}${NC}"
echo -e "  Pipeline 2:           ${BLUE}${PIPELINE_ID_SECOND}${NC}"
echo -e "  Branch:               ${BLUE}${BRANCH}${NC}"
if [ "$USE_VERSION" = true ]; then
    echo -e "  Service Version:      ${BLUE}${SERVICE_VERSION}${NC}"
else
    echo -e "  Service Version:      ${BLUE}(not specified)${NC}"
fi
echo -e "${BLUE}━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━${NC}"
echo ""

read -p "Run pipeline? [Y/n]: " CONFIRM
CONFIRM=${CONFIRM:-Y}

if [[ ! "$CONFIRM" =~ ^[Yy]$ ]]; then
    echo -e "${RED}❌ Cancelled${NC}"
    exit 0
fi

echo ""
echo -e "${BLUE}🚀 Starting pipelines...${NC}"
echo ""

# Function to run a pipeline
run_pipeline() {
    local PIPELINE_ID=$1
    local PIPELINE_NAME=$2
    
    echo -e "${BLUE}━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━${NC}"
    echo -e "${BLUE}📦 Running Pipeline: ${PIPELINE_NAME}${NC}"
    echo -e "${BLUE}━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━${NC}"
    echo ""
    
    if [ "$USE_VERSION" = false ]; then
        echo -e "${YELLOW}Command: az pipelines run --id ${PIPELINE_ID} --branch ${BRANCH}${NC}"
        echo ""
        PIPELINE_OUTPUT=$(az pipelines run \
            --id ${PIPELINE_ID} \
            --branch ${BRANCH} \
            2>&1)
        EXIT_CODE=$?
    else
        echo -e "${YELLOW}Command: az pipelines run --id ${PIPELINE_ID} --branch ${BRANCH} --variables serviceVersion=${SERVICE_VERSION}${NC}"
        echo ""
        PIPELINE_OUTPUT=$(az pipelines run \
            --id ${PIPELINE_ID} \
            --branch ${BRANCH} \
            --variables serviceVersion=${SERVICE_VERSION} \
            2>&1)
        EXIT_CODE=$?
    fi
    
    if [ $EXIT_CODE -eq 0 ]; then
        RUN_ID=$(echo "$PIPELINE_OUTPUT" | grep -o '"id": [0-9]*' | head -1 | grep -o '[0-9]*')
        BUILD_NUMBER=$(echo "$PIPELINE_OUTPUT" | grep -o '"buildNumber": "[^"]*"' | head -1 | sed 's/"buildNumber": "//;s/"//')
        
        echo -e "${GREEN}✓ ${PIPELINE_NAME} started successfully!${NC}"
        echo -e "  Run ID:       ${BLUE}${RUN_ID}${NC}"
        echo -e "  Build Number: ${BLUE}${BUILD_NUMBER}${NC}"
        echo ""
        
        return 0
    else
        echo -e "${RED}✗ Failed to start ${PIPELINE_NAME}${NC}"
        echo ""
        echo -e "${YELLOW}Error details:${NC}"
        echo "$PIPELINE_OUTPUT"
        echo ""
        return 1
    fi
}

# Run Pipeline 1 (DSC-UI)
run_pipeline ${PIPELINE_ID_DSC_UI} "LIB_DSC-UI_RN (${PIPELINE_ID_DSC_UI})"
PIPELINE1_RESULT=$?

# Run Pipeline 2
run_pipeline ${PIPELINE_ID_SECOND} "Pipeline ${PIPELINE_ID_SECOND}"
PIPELINE2_RESULT=$?

# Check overall results
if [ $PIPELINE1_RESULT -eq 0 ] && [ $PIPELINE2_RESULT -eq 0 ]; then
    EXIT_CODE=0
else
    EXIT_CODE=1
fi

if [ $EXIT_CODE -eq 0 ]; then
    echo -e "${GREEN}━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━${NC}"
    echo -e "${GREEN}✨ Both Pipelines Started Successfully!${NC}"
    echo -e "${GREEN}━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━${NC}"
    echo ""
    echo -e "📋 Summary:"
    echo -e "  Branch:  ${BLUE}${BRANCH}${NC}"
    if [ "$USE_VERSION" = true ]; then
        echo -e "  Version: ${BLUE}${SERVICE_VERSION}${NC}"
    fi
    echo ""
    echo -e "🔗 View pipelines in browser:"
    echo -e "  Pipeline 1: ${BLUE}https://dev.azure.com/CAIXAAZURE/ComunidadeCanaisMobile/_build?definitionId=${PIPELINE_ID_DSC_UI}${NC}"
    echo -e "  Pipeline 2: ${BLUE}https://dev.azure.com/CAIXAAZURE/ComunidadeCanaisMobile/_build?definitionId=${PIPELINE_ID_SECOND}${NC}"
    echo ""
else
    echo -e "${RED}━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━${NC}"
    echo -e "${RED}✗ One or more pipelines failed to start${NC}"
    echo -e "${RED}━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━${NC}"
    echo ""
    echo -e "${YELLOW}💡 Troubleshooting:${NC}"
    echo "  1. Check if you have permissions to run these pipelines"
    echo "  2. Verify the branch exists: ${BRANCH}"
    echo "  3. Ensure Azure CLI is authenticated: az login"
    echo "  4. Check pipeline IDs are correct: ${PIPELINE_ID_DSC_UI}, ${PIPELINE_ID_SECOND}"
    exit 1
fi
