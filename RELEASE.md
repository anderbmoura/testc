# Release Guide

This project uses `release-it` for automated versioning, changelog generation, and releases.

## 🚀 Quick Start

### Automatic Release (Recommended)

```bash
# Automatically determine version bump based on conventional commits
npm run release
```

### Manual Version Bump

```bash
# Patch release (1.0.0 → 1.0.1)
npm run release:patch

# Minor release (1.0.0 → 1.1.0)
npm run release:minor

# Major release (1.0.0 → 2.0.0)
npm run release:major
```

### Dry Run (Test without changes)

```bash
# See what would happen without making changes
npm run release:dry-run
```

## 📋 Release Process

When you run a release command, `release-it` will:

1. **Pre-flight Checks**:
   - ✅ Ensure working directory is clean
   - ✅ Ensure you're on the `main` branch
   - ✅ Run linting (`npm run lint`)
   - ✅ Run type checking (`npm run type-check`)
   - ✅ Build library (`npm run build:lib`)

2. **Version Bump**:
   - 📝 Update `package.json` version
   - 📝 Update workspace package versions
   - 📝 Generate/update `CHANGELOG.md`

3. **Git Operations**:
   - 🏷️ Create git tag (e.g., `v1.2.3`)
   - 📤 Commit changes with message: `chore: release v1.2.3`
   - 📤 Push to origin

4. **GitHub Release**:
   - 🎉 Create GitHub release with changelog

## 🔧 Configuration

### Release-it Configuration (`.release-it.json`)

```json
{
  "git": {
    "commitMessage": "chore: release v${version}",
    "tagName": "v${version}",
    "requireCleanWorkingDir": true,
    "requireBranch": "main"
  },
  "github": {
    "release": true,
    "releaseName": "Release v${version}"
  },
  "plugins": {
    "@release-it/conventional-changelog": {
      "preset": "angular",
      "infile": "CHANGELOG.md"
    }
  }
}
```

### Conventional Commits

The changelog is generated based on conventional commits:

- `feat:` - New features (minor version bump)
- `fix:` - Bug fixes (patch version bump)
- `BREAKING CHANGE:` - Breaking changes (major version bump)
- `docs:` - Documentation changes
- `style:` - Code style changes
- `refactor:` - Code refactoring
- `test:` - Adding tests
- `chore:` - Maintenance tasks

### Examples:

```bash
git commit -m "feat(button): add primary variant"
git commit -m "fix(input): resolve focus state issue"
git commit -m "feat!: redesign component API" # Breaking change
```

## 📝 Changelog

The `CHANGELOG.md` is automatically generated based on:

- Conventional commit messages
- Previous releases and tags
- Angular preset for formatting

## 🛡️ Safety Features

### Pre-release Checks

- **Clean working directory**: No uncommitted changes
- **Correct branch**: Must be on `main` branch
- **Tests pass**: Linting and type checking must pass
- **Build succeeds**: Library must build successfully

### What if something goes wrong?

**Before pushing to remote:**

- Use `git reset --hard HEAD~1` to undo the commit
- Use `git tag -d v1.2.3` to delete the tag

**After pushing to remote:**

- Create a new patch release to fix issues
- Never delete remote tags/releases

## 🎯 Best Practices

### 1. Before Releasing

```bash
# Check current status
git status

# Run tests locally
npm test

# Dry run to preview changes
npm run release:dry-run
```

### 2. Release Workflow

1. Merge all features to `main` branch
2. Ensure all CI checks pass
3. Run `npm run release:dry-run` to preview
4. Run `npm run release` to create release

### 3. After Releasing

- Verify the GitHub release was created
- Check that the changelog is accurate
- Announce the release to your team

## 🔄 Automation Integration

The release process integrates with:

- **Husky**: Pre-commit hooks ensure code quality
- **Conventional Commits**: Automatic version determination
- **GitHub Actions**: CI/CD pipeline validates releases
- **Changelog**: Automatic generation from commit messages

## 📚 Resources

- [Release-it Documentation](https://github.com/release-it/release-it)
- [Conventional Commits](https://www.conventionalcommits.org/)
- [Semantic Versioning](https://semver.org/)
- [Keep a Changelog](https://keepachangelog.com/)
