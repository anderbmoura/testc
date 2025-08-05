module.exports = {
  source: 'src',
  output: 'lib',
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
    'typescript',
  ],
};
