import { Meta, StoryObj } from '@storybook/react';
import DscCheckbox from './Checkbox';

const meta: Meta<typeof DscCheckbox> = {
  title: 'Componentes/Checkbox',
  component: DscCheckbox,
  argTypes: {
    disabled: { control: 'boolean' },
    isMultiSelected: { control: 'boolean' },
    labelText: { control: 'text' },
  },
  args: {
    disabled: false,
    isMultiSelected: false,
    labelText: 'Checkbox label',
  },
};

export default meta;

type Story = StoryObj<typeof DscCheckbox>;

export const Default: Story = {
  render: args => {
    return (
      <DscCheckbox {...args} onCheckedChange={() => console.log('hello')} />
    );
  },
};

export const Disabled: Story = {
  args: {
    disabled: true,
    labelText: 'Disabled Checkbox',
  },
};

export const Indeterminate: Story = {
  render: args => {
    return (
      <DscCheckbox {...args} onCheckedChange={() => console.log('hello')} />
    );
  },
  args: {
    labelText: 'Indeterminate Checkbox',
  },
};
