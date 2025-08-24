import type { Meta, StoryObj } from '@storybook/react';
import Button from '@superapp-caixa/dsc-library/src/components/Button';

// More on how to set up stories at: https://storybook.js.org/docs/writing-stories#default-export
const meta: Meta<typeof Button> = {
  title: 'Componentes/Button Tamagui',
  component: Button,
  parameters: {
    // Optional parameter to center the component in the Canvas. More info: https://storybook.js.org/docs/configure/story-layout
    layout: 'centered',
  },
  // This component will have an automatically generated Autodocs entry: https://storybook.js.org/docs/writing-docs/autodocs
  tags: ['autodocs'],
  // More on argTypes: https://storybook.js.org/docs/api/argtypes
  argTypes: {
    onPress: {
      action: 'pressed',
      description: 'Function called when button is pressed',
    },
    title: {
      control: 'text',
      description: 'Button text content',
    },
  },
  // Use `fn` to spy on the onClick arg, which will appear in the actions panel once invoked: https://storybook.js.org/docs/essentials/actions#action-args
  args: {
    onPress: () => console.log('Button pressed'),
  },
};

export default meta;
type Story = StoryObj<typeof meta>;

// More on writing stories with args: https://storybook.js.org/docs/writing-stories/args
export const Default: Story = {
  args: {
    title: 'Button',
  },
};

export const WithCustomText: Story = {
  args: {
    title: 'Custom Button Text',
  },
};
