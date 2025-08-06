import { Decorator } from '@storybook/react';
import { DscProvider } from '@superapp-caixa/dsc-library';

export const decorators: Decorator[] = [
  Story => {
    return (
      <DscProvider>
        <Story />
      </DscProvider>
    );
  },
];
