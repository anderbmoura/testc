module.exports = {
  // TypeScript and JavaScript files
  '**/*.{js,jsx,ts,tsx}': ['eslint --fix', 'prettier --write'],

  // JSON files (package.json, tsconfig.json, etc.)
  '**/*.json': ['prettier --write'],

  // Markdown files
  '**/*.{md,mdx}': ['prettier --write'],

  // YAML files (CI configs, etc.)
  '**/*.{yml,yaml}': ['prettier --write'],

  // Package.json files - also run dependency checks
  '**/package.json': [
    'prettier --write',
    // () => 'npm audit --audit-level=moderate',
  ],

  // TypeScript files - run type checking on the entire project
  // Only run if TypeScript files are changed
  // '**/*.{ts,tsx}': [() => 'npm run type-check'],

  // Library source files - ensure build works
  'packages/ui-components/src/**/*.{ts,tsx}': [() => 'npm run build:lib'],

  // Test files - run related tests
  '**/*.{test,spec}.{js,jsx,ts,tsx}': ['jest --bail --findRelatedTests'],

  // Style files (if any)
  '**/*.{css,scss,sass}': ['prettier --write'],

  // Configuration files
  '**/*.{config,conf}.{js,ts}': ['eslint --fix', 'prettier --write'],
};
