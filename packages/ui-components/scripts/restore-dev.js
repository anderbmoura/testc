#!/usr/bin/env node

const fs = require('fs');
const path = require('path');

// Read package.json
const packagePath = path.join(__dirname, '..', 'package.json');
const packageJson = JSON.parse(fs.readFileSync(packagePath, 'utf8'));

// Update paths to point to source files for development
packageJson.main = './src/index.ts';
packageJson.module = './src/index.ts';
packageJson.types = './src/index.ts';
packageJson['react-native'] = './src/index.ts';

packageJson.exports = {
  '.': {
    'react-native': './src/index.ts',
    import: './src/index.ts',
    require: './src/index.ts',
    default: './src/index.ts',
  },
  './package.json': './package.json',
};

// Write updated package.json
fs.writeFileSync(packagePath, JSON.stringify(packageJson, null, 2) + '\n');

console.log('✅ Package.json restored for development');
