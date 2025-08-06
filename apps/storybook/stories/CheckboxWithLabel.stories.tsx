import { Meta, StoryObj } from '@storybook/react';
import { CheckboxWithLabel } from '@superapp-caixa/dsc-library';

// More on how to set up stories at: https://storybook.js.org/docs/writing-stories#default-export
const meta: Meta<typeof CheckboxWithLabel> = {
  title: 'Components/CheckboxWithLabel',
  component: CheckboxWithLabel,
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
      options: [
        '$sm',
        '$md',
        '$lg',
        '$1',
        '$2',
        '$3',
        '$4',
        '$5',
        '$6',
        '$7',
        '$8',
        '$9',
        '$10',
      ],
      description: 'Checkbox size token',
    },
    pad: {
      control: { type: 'select' },
      options: ['$sm', '$md', '$lg'],
      description: 'Padding size token for the checkbox',
    },
    label: {
      control: 'text',
      description: 'Checkbox label text',
    },
    disabled: {
      control: 'boolean',
      description: 'Disables the checkbox if true',
    },
    theme: {
      control: { type: 'select' },
      options: ['default', 'error', 'accent', 'warning', 'success'],
      description: 'Checkbox theme variant',
    },
  },
};

export default meta;
type Story = StoryObj<typeof meta>;

// More on writing stories with args: https://storybook.js.org/docs/writing-stories/args
export const Default: Story = {
  args: {
    label: 'Checkbox',
  },
};

export const WithCustomText: Story = {
  args: {
    label: 'Accept terms and conditions',
  },
};

export const Disabled: Story = {
  args: {
    label: 'Accept terms and conditions',
    disabled: true,
  },
};

export const WithThemeError: Story = {
  args: {
    label: 'Accept terms and conditions',
    theme: 'error',
  },
};

export const WithThemeWarning: Story = {
  args: {
    label: 'Accept terms and conditions',
    theme: 'warning',
  },
};

export const WithThemeSuccess: Story = {
  args: {
    label: 'Accept terms and conditions',
    theme: 'success',
  },
};
