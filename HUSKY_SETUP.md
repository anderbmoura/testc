# Husky Cross-Platform Setup

This document explains the cross-platform Husky configuration for Linux, macOS, and Windows.

## ✅ Current Configuration

The project uses **Husky v9.x** with a cross-platform compatible setup that works on:

- 🐧 **Linux**
- 🍎 **macOS**
- 🪟 **Windows**

## 📁 Hook Files

### `.husky/pre-commit`

```sh
#!/bin/sh
npx lint-staged
```

### `.husky/commit-msg`

```sh
#!/bin/sh
npx --no -- commitlint --edit "$1"
```

## 🔧 Key Features for Cross-Platform Compatibility

### 1. **Simple Shebang**

- Uses `#!/bin/sh` instead of `#!/usr/bin/env sh`
- Works consistently across all platforms
- No deprecated `husky.sh` sourcing required for v9.x

### 2. **Git Configuration**

```bash
git config core.hooksPath .husky
```

### 3. **Executable Permissions**

```bash
chmod +x .husky/pre-commit .husky/commit-msg
```

## 🚀 How It Works

### Pre-commit Hook

1. **Triggers**: On `git commit`
2. **Runs**: `npx lint-staged`
3. **Actions**:
   - ✅ Lints staged JavaScript/TypeScript files
   - ✅ Formats code with Prettier
   - ✅ Auto-fixes ESLint issues
   - ❌ Blocks commit if unfixable errors exist

### Commit Message Hook

1. **Triggers**: On `git commit`
2. **Runs**: `npx commitlint --edit "$1"`
3. **Actions**:
   - ✅ Validates commit message format
   - ✅ Enforces conventional commits
   - ❌ Blocks commit if message format is invalid

## 🛠️ Platform-Specific Notes

### Windows

- Git Bash or WSL recommended
- PowerShell should work with recent Git versions
- Hooks are automatically executable

### macOS/Linux

- Standard terminal support
- Bash/Zsh/Fish compatible
- May need `chmod +x` after cloning

### CI/CD Environments

- Works in GitHub Actions
- Works in Azure DevOps
- Works in GitLab CI
- Works in any Unix-like environment

## 🔍 Troubleshooting

### Common Issues

**1. "Permission denied" errors**

```bash
chmod +x .husky/pre-commit .husky/commit-msg
```

**2. "command not found: npx"**

- Ensure Node.js is installed
- Run `npm install` to ensure dependencies

**3. Hooks not running**

```bash
git config core.hooksPath .husky
```

**4. "husky - DEPRECATED" warnings**

- This setup eliminates deprecation warnings
- Uses modern v9.x format without `husky.sh`

### Debug Commands

```bash
# Check Git hooks path
git config core.hooksPath

# Test hooks manually
.husky/pre-commit
.husky/commit-msg .git/COMMIT_EDITMSG

# Verify file permissions
ls -la .husky/
```

## 📋 Setup Verification

To verify the setup works on your platform:

1. **Make a change**:

   ```bash
   echo "test" > temp.txt
   git add temp.txt
   ```

2. **Attempt commit**:

   ```bash
   git commit -m "test: verify hooks"
   ```

3. **Expected behavior**:
   - Pre-commit runs lint-staged
   - Commit message validation occurs
   - Commit succeeds with proper format

4. **Cleanup**:
   ```bash
   git rm temp.txt
   git commit -m "chore: cleanup test"
   ```

## 🔄 Migration from Older Versions

If migrating from older Husky versions:

1. **Remove old config**:

   ```bash
   rm -rf .husky
   ```

2. **Reinitialize**:

   ```bash
   npx husky init
   ```

3. **Update hooks** with the content shown above

4. **Set Git config**:
   ```bash
   git config core.hooksPath .husky
   ```

## ✨ Benefits

- ✅ **No deprecation warnings**
- ✅ **Cross-platform compatibility**
- ✅ **Simplified hook files**
- ✅ **Better performance**
- ✅ **Future-proof for Husky v10+**

The current setup is optimized for reliability and compatibility across all development environments.
