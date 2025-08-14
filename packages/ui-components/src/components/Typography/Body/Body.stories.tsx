import type { Meta, StoryObj } from '@storybook/react';
import Body from './Body';

const meta: Meta<typeof Body> = {
  title: 'Components/Typography/Body',
  component: Body,
  parameters: {
    layout: 'centered',
  },
  tags: ['autodocs'],
  argTypes: {
    size: {
      control: 'select',
      options: ['large', 'standard', 'small'],
    },
    emphasized: {
      control: 'boolean',
    },
    children: {
      control: 'text',
    },
  },
};

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {
    size: 'standard',
    emphasized: false,
    children: 'Body text content',
  },
};
