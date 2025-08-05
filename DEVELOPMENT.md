# Development Guide

## 🚀 Getting Started

### Prerequisites

- Node.js 18+
- npm or yarn
- VS Code (recommended)

### Installation

```bash
npm install
```

## 📋 Development Workflow

### 1. Pre-commit Hooks

This project uses **Husky** and **lint-staged** to ensure code quality:

- **Automatic formatting**: Prettier formats your code on commit
- **Linting**: ESLint checks for code quality issues
- **Type checking**: TypeScript validates types
- **Conventional commits**: Commit messages must follow conventional format

### 2. Commit Message Format

Follow the [Conventional Commits](https://www.conventionalcommits.org/) specification:

```
type(scope): description

Examples:
feat(button): add new primary button variant
fix(input): resolve focus state issue
docs(readme): update installation instructions
style(components): format code with prettier
refactor(utils): simplify helper functions
test(button): add unit tests for button component
```

**Types:**

- `feat`: New feature
- `fix`: Bug fix
- `docs`: Documentation changes
- `style`: Code style changes (formatting, etc.)
- `refactor`: Code refactoring
- `test`: Adding or updating tests
- `chore`: Maintenance tasks

### 3. VS Code Setup

1. Open the workspace: `.vscode/workspace.code-workspace`
2. Install recommended extensions
3. Format on save is automatically enabled
4. ESLint auto-fix on save is enabled

## 🛠️ Available Scripts

### Development

```bash
# Start Expo development server
npm run start:expo

# Build library in watch mode
npm run watch:lib

# Build library
npm run build:lib
```

### Code Quality

```bash
# Lint all files
npm run lint

# Auto-fix linting issues
npm run lint:fix

# Format all files
npm run format

# Check formatting
npm run format:check

# Type checking
npm run type-check

# Run all tests (lint + type-check)
npm test
```

### Git Hooks

```bash
# Pre-commit (runs automatically)
npm run pre-commit
```

### Release Management

```bash
# Create automatic release based on conventional commits
npm run release

# Specific version bumps
npm run release:patch      # 1.0.0 → 1.0.1
npm run release:minor      # 1.0.0 → 1.1.0
npm run release:major      # 1.0.0 → 2.0.0

# Test release without making changes
npm run release:dry-run
```

## 📁 Project Structure

```
rn-superapp-dsc-library/
├── apps/
│   └── example/          # Expo example app
├── packages/
│   └── ui-components/    # UI component library
├── .github/              # GitHub Actions & PR templates
├── .husky/               # Git hooks
├── .vscode/              # VS Code configuration
└── docs/                 # Documentation
```

## 🔧 Best Practices

### 1. Code Style

- Use TypeScript for all new code
- Follow ESLint rules
- Use Prettier for consistent formatting
- Write meaningful commit messages

### 2. Component Development

- Create components in `packages/ui-components/src/components/`
- Export components from `packages/ui-components/src/index.ts`
- Test components in the example app
- Document component props and usage

### 3. Testing

- Write unit tests for components
- Test in the example app
- Ensure all TypeScript types are correct

### 4. Git Workflow

1. Create a feature branch: `git checkout -b feat/your-feature`
2. Make your changes
3. Stage files: `git add .`
4. Commit with conventional message: `git commit -m "feat: add new component"`
5. Push and create PR

### 5. Pull Request Process

1. Ensure all checks pass (lint, type-check, build)
2. Use the PR template
3. Request reviews from team members
4. Address feedback and update PR

## 🚨 Troubleshooting

### Common Issues

**Husky hooks not working:**

```bash
npm run prepare
```

**ESLint errors:**

```bash
npm run lint:fix
```

**TypeScript errors:**

```bash
npm run type-check
```

**Build issues:**

```bash
npm run build:lib
```

## 📚 Additional Resources

- [Conventional Commits](https://www.conventionalcommits.org/)
- [ESLint Rules](https://eslint.org/docs/rules/)
- [Prettier Configuration](https://prettier.io/docs/en/configuration.html)
- [TypeScript Handbook](https://www.typescriptlang.org/docs/)
- [React Native Documentation](https://reactnative.dev/docs/getting-started)
- [Expo Documentation](https://docs.expo.dev/)
