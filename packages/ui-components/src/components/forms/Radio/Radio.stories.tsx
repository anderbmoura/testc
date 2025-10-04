import React, { useState } from 'react';
import { Meta, StoryObj } from '@storybook/react';
import DscRadioGroup from './Radio';

const meta: Meta<typeof DscRadioGroup> = {
  title: 'Componentes/Forms/Radio',
  component: DscRadioGroup,
  argTypes: {
    defaultValue: { control: 'text' },
    name: { control: 'text' },
    onValueChange: { action: 'changed' },
  },
};

export default meta;

type Story = StoryObj<typeof DscRadioGroup>;

const options = [
  { value: 'option1', label: 'Option 1' },
  { value: 'option2', label: 'Option 2' },
  { value: 'option3', label: 'Option 3', disabled: true },
];

export const Default: Story = {
  render: args => {
    const [selected, setSelected] = useState(args.defaultValue ?? 'option1');
    return (
      <DscRadioGroup
        {...args}
        options={options}
        defaultValue={selected}
        onValueChange={setSelected}
      />
    );
  },
  args: {
    defaultValue: 'option1',
    name: 'exampleRadioGroup',
  },
};

export const DisabledOption: Story = {
  render: args => {
    const [selected, setSelected] = useState(args.defaultValue ?? 'option2');
    return (
      <DscRadioGroup
        {...args}
        options={options}
        defaultValue={selected}
        onValueChange={setSelected}
      />
    );
  },
  args: {
    defaultValue: 'option2',
    name: 'disabledRadioGroup',
  },
};
