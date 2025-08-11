module.exports = {
  source: 'src',
  output: 'lib',
  exclude: '**/*.stories.*',
  targets: [
    [
      'module',
      {
        esm: true,
        configFile: './babel.bob.config.js',
      },
    ],
    [
      'commonjs',
      {
        esm: true,
        configFile: './babel.bob.config.js',
      },
    ],
    [
      'typescript',
      {
        tsc: '../../node_modules/.bin/tsc',
      },
    ],
  ],
};
