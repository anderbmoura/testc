import type { StorybookConfig } from '@storybook/react-native-web-vite';

const config: StorybookConfig = {
  stories: [
    '../../../packages/ui-components/src/**/*.mdx',
    '../../../packages/ui-components/src/**/*.stories.@(js|jsx|mjs|ts|tsx)',
    '../../../packages/ui-components/*.mdx',
    '../../../packages/ui-components/*.stories.@(js|jsx|mjs|ts|tsx)',
    '!../../../packages/ui-components/lib/**',
  ],
  addons: [
    '@chromatic-com/storybook',
    '@storybook/addon-docs',
    '@storybook/addon-onboarding',
    '@storybook/addon-a11y',
    '@storybook/addon-vitest',
  ],
  framework: {
    name: '@storybook/react-native-web-vite',
    options: {},
  },
};
export default config;
