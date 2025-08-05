module.exports = {
  presets: [
    // Bob's preset handles TypeScript, JSX, and module transformations
    'react-native-builder-bob/babel-preset',
  ],
  plugins: [
    // Disable Tamagui babel plugin during build to avoid config resolution issues
    // The runtime config will still work fine for the published package
    // [
    //   '@tamagui/babel-plugin',
    //   {
    //     exclude: /node_modules/,
    //     config: path.resolve(__dirname, 'src/config/tamagui.config.ts'),
    //     components: ['@superapp-caixa/dsc-library', 'tamagui'],
    //   },
    // ],
  ],
};
