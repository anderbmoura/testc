import type { Meta, StoryObj } from '@storybook/react';
import Display from './Display';

const meta: Meta<typeof Display> = {
  title: 'Components/Typography/Display',
  component: Display,
  parameters: {
    layout: 'centered',
  },
  tags: ['autodocs'],
  argTypes: {
    size: {
      control: 'select',
      options: ['standard'],
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
    children: 'Display text content',
  },
};
