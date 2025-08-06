import type { Meta, StoryObj } from '@storybook/react';
import { Input } from '@superapp-caixa/dsc-library';

// More on how to set up stories at: https://storybook.js.org/docs/writing-stories#default-export
const meta: Meta<typeof Input> = {
  title: 'Components/Input',
  component: Input,
  parameters: {
    // Optional parameter to center the component in the Canvas. More info: https://storybook.js.org/docs/configure/story-layout
    layout: 'centered',
  },
  // This component will have an automatically generated Autodocs entry: https://storybook.js.org/docs/writing-docs/autodocs
  tags: ['autodocs'],
  // More on argTypes: https://storybook.js.org/docs/api/argtypes
  argTypes: {
    size: {
      control: { type: 'select' },
      options: ['$1', '$2', '$3', '$4', '$5', '$6', '$7', '$8', '$9', '$10'],
      description: 'Input size token',
    },
  },
};

export default meta;
type Story = StoryObj<typeof meta>;

// More on writing stories with args: https://storybook.js.org/docs/writing-stories/args
export const Default: Story = {
  render: () => (
    <Input>
      <Input.Box>
        <Input.Area placeholder="Enter text..." />
      </Input.Box>
    </Input>
  ),
};

export const WithLabel: Story = {
  render: () => (
    <Input>
      <Input.Label>Email Address</Input.Label>
      <Input.Box>
        <Input.Area placeholder="your.email@example.com" />
      </Input.Box>
    </Input>
  ),
};

export const WithSize: Story = {
  render: () => (
    <Input size="$6">
      <Input.Label>Large Input</Input.Label>
      <Input.Box>
        <Input.Area placeholder="Larger input field..." />
      </Input.Box>
    </Input>
  ),
};

export const WithSections: Story = {
  render: () => (
    <Input>
      <Input.Label>Input with Sections</Input.Label>
      <Input.Box>
        <Input.Section>📧</Input.Section>
        <Input.Area placeholder="Enter email..." />
        <Input.Section>✓</Input.Section>
      </Input.Box>
    </Input>
  ),
};
