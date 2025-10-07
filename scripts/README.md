# Development Scripts

Automated scripts to streamline development workflow including PR creation and pipeline execution.

## Scripts Available

### PR Creation

#### 1. `create-pr-interactive.sh` - AI-Assisted (Recommended)

Analyzes your changes and suggests appropriate branch names, commit messages, and descriptions automatically.

#### 2. `create-pr.sh` - Manual

Requires you to specify all details explicitly.

### Pipeline Execution

#### 3. `run-pipeline.sh` - Azure DevOps Pipeline Runner

Interactive script to run Azure DevOps pipelines with custom branch and version selection.

## Usage

### Option 1: AI-Assisted (Recommended) ⭐

Let the script analyze your changes and suggest everything:

```bash
# Via script
./scripts/create-pr-interactive.sh

# Via yarn
yarn pr:auto
```

The script will:

- 🔍 Analyze changed files
- 💡 Suggest branch type (feat/fix/chore/docs/etc)
- 🏷️ Generate branch name
- ✍️ Create commit message
- 📝 Write PR description
- ✅ Give you option to confirm or customize

### Option 2: Manual (Full Control)

Specify all details explicitly:

```bash
# Via script
./scripts/create-pr.sh <branch-type> <branch-name> <commit-message> [pr-description]

# Via yarn
yarn pr:create <branch-type> <branch-name> <commit-message> [pr-description]
```

## Parameters

1. **branch-type**: Type of change (feat, fix, chore, docs, style, refactor, test, ci, build)
2. **branch-name**: Descriptive name for the branch (use kebab-case)
3. **commit-message**: Full commit message following conventional commits
4. **pr-description** (optional): Detailed PR description (defaults to commit message)

## Examples

### Example 1: Update Dependencies (Chore)

```bash
./scripts/create-pr.sh chore update-dependencies \
  "chore: update project dependencies to latest versions" \
  "Update all npm dependencies to their latest stable versions. Includes security patches and performance improvements."
```

### Example 2: Add Feature

```bash
./scripts/create-pr.sh feat dark-mode-support \
  "feat: add dark mode support to application" \
  "Implement dark mode theme switching capability. Includes theme context, toggle component, and persistent storage of user preference."
```

### Example 3: Bug Fix

```bash
./scripts/create-pr.sh fix button-padding \
  "fix: correct button padding on mobile devices" \
  "Fix padding inconsistency in Button component on mobile viewports."
```

### Example 4: Documentation

```bash
./scripts/create-pr.sh docs update-readme \
  "docs: update installation and setup instructions"
```

## What the Script Does

1. ✅ Checks out and updates the `develop` branch
2. ✅ Creates a new feature branch with format `<type>/<name>`
3. ✅ Stages all changes (`git add -A`)
4. ✅ Commits with the provided message
5. ✅ Pushes the branch to remote
6. ✅ Creates a Pull Request targeting `main-develop`
7. ✅ Enables auto-complete for automatic merge

## Branch Types (Conventional Commits)

| Type         | Description             | Example                                 |
| ------------ | ----------------------- | --------------------------------------- |
| **feat**     | New feature             | `feat: add user authentication`         |
| **fix**      | Bug fix                 | `fix: resolve login redirect issue`     |
| **docs**     | Documentation only      | `docs: update API documentation`        |
| **style**    | Code style/formatting   | `style: format code with prettier`      |
| **refactor** | Code refactoring        | `refactor: simplify user service logic` |
| **perf**     | Performance improvement | `perf: optimize image loading`          |
| **test**     | Add/update tests        | `test: add unit tests for Button`       |
| **chore**    | Maintenance tasks       | `chore: update dependencies`            |
| **ci**       | CI/CD changes           | `ci: add automated deployment`          |
| **build**    | Build system changes    | `build: update webpack config`          |

## Requirements

- Git configured and authenticated
- Azure CLI installed and authenticated (`az login`)
- Proper permissions on the repository
- Current working directory must be the repository root

## Tips

- Always write commit messages in **English**
- Use **conventional commits** format
- Be **descriptive** but **concise**
- Add **context** in the PR description
- The script automatically enables **auto-complete** for PRs

## Troubleshooting

### Script not executable

```bash
chmod +x scripts/create-pr.sh
```

### Azure CLI not authenticated

```bash
az login
az repos pr list # Test connection
```

### No changes staged

Make sure you have uncommitted changes before running the script.

## Using with GitHub Copilot

### AI-Assisted Mode (Zero thinking required)

Simply tell Copilot to analyze and create:

```
Auto PR
```

or

```
Create a PR with AI suggestions
```

or

```
Create a PR for my current changes. Analyze and decide everything.
```

### Manual Mode with Copilot

Specify the details yourself:

```
Create a PR for my changes:
- Type: chore
- Name: update-scripts
- Message: chore: migrate npm scripts to yarn
- Description: Replace npm commands with yarn equivalents for consistency
```

See `.github/PR_TEMPLATES.md` for more prompt examples.

---

## Running Azure DevOps Pipeline

### Usage

Run the interactive pipeline script:

```bash
# Via script
./scripts/run-pipeline.sh

# Via yarn
yarn pipeline:run
```

### Features

The script allows you to:

- 🎯 **Select branch**: develop, main-develop, main, current branch, or custom
- 📦 **Choose version bump**: patch, minor, major, or no bump
- 👀 **View confirmation**: Review configuration before running
- 📺 **Follow logs**: Optional real-time pipeline log viewing

### Example Flow

```
🚀 Azure DevOps Pipeline Runner
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

📋 Available branches:
  1 - develop (default)
  2 - main-develop
  3 - main
  4 - Current branch (chore/my-feature)
  5 - Custom branch name

Choose branch [1]: 1

✓ Selected branch: develop

📦 Version configuration:
  1 - Patch (x.x.X) - Bug fixes
  2 - Minor (x.X.0) - New features
  3 - Major (X.0.0) - Breaking changes
  4 - No version bump (just build)

Choose version bump [1]: 2

✓ Selected version: Minor version (new features)

━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
📋 Pipeline Configuration:
  Pipeline ID:  2687
  Branch:       develop
  Version:      Minor version (new features)
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

Run pipeline? [Y/n]: Y

🚀 Starting pipeline...
✓ Pipeline started successfully!
```

### Version Types

| Type      | Description | When to use                         |
| --------- | ----------- | ----------------------------------- |
| **Patch** | x.x.X       | Bug fixes, small improvements       |
| **Minor** | x.X.0       | New features, backwards compatible  |
| **Major** | X.0.0       | Breaking changes                    |
| **None**  | No bump     | Just rebuild without version change |

### Direct Azure CLI Commands

If you prefer direct commands:

```bash
# Run pipeline on develop with patch version
az pipelines run --id 2687 --branch develop --parameters versionBump=patch

# Run pipeline on custom branch with minor version
az pipelines run --id 2687 --branch feature/my-branch --parameters versionBump=minor

# Run pipeline without version bump
az pipelines run --id 2687 --branch main-develop
```
