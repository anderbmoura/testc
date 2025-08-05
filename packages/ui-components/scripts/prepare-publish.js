#!/usr/bin/env node

const fs = require('fs');
const path = require('path');

// Read package.json
const packagePath = path.join(__dirname, '..', 'package.json');
const packageJson = JSON.parse(fs.readFileSync(packagePath, 'utf8'));

// Update paths to point to built files for publishing
packageJson.main = './lib/commonjs/index.js';
packageJson.module = './lib/module/index.js';
packageJson.types = './lib/typescript/commonjs/index.d.ts';
packageJson['react-native'] = './lib/module/index.js';

packageJson.exports = {
  '.': {
    'react-native': {
      types: './lib/typescript/module/index.d.ts',
      default: './lib/module/index.js',
    },
    import: {
      types: './lib/typescript/module/index.d.ts',
      default: './lib/module/index.js',
    },
    require: {
      types: './lib/typescript/commonjs/index.d.ts',
      default: './lib/commonjs/index.js',
    },
  },
  './package.json': './package.json',
};

// Write updated package.json
fs.writeFileSync(packagePath, JSON.stringify(packageJson, null, 2) + '\n');

console.log('✅ Package.json updated for publishing');
