import { Decorator } from '@storybook/react';
import { TGProvider } from '../../../packages/ui-components/dist';

export const decorators: Decorator[] = [
  Story => {
    return (
      <TGProvider>
        <Story />
      </TGProvider>
    );
  },
];
