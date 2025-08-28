import type { Meta, StoryObj } from '@storybook/react';
import Switch from './Switch';
import type { SwitchProps } from './Switch.model';

const meta: Meta<SwitchProps> = {
  title: 'Componentes/Switch',
  component: Switch,
  parameters: {
    layout: 'centered',
    docs: {
      source: {
        transform: (_: string, { args }: any) => {
          const props = [
            args.checked && `checked={${args.checked}}`,
            args.defaultChecked &&
              args.defaultChecked !== false &&
              `defaultChecked={${args.defaultChecked}}`,
            args.disabled && 'disabled',
            args.text && `text="${args.text}"`,
          ]
            .filter(Boolean)
            .join(' ');

          return `<Switch${props && ` ${props}`} />`;
        },
        state: 'open',
        excludeDecorators: true,
      },
    },
  },
  tags: ['autodocs'],
  render: args => {
    const key = `switch-${Date.now()}`;
    return <Switch key={key} {...args} />;
  },
  argTypes: {
    checked: {
      control: 'boolean',
      description:
        'Controls the checked state (controlled mode). When provided, component becomes controlled.',
    },
    defaultChecked: {
      control: 'boolean',
      description:
        'Initial checked state for uncontrolled mode. Only used when "checked" is not provided.',
    },
    disabled: {
      control: 'boolean',
      description:
        'Disables the switch, preventing user interaction and applying disabled styling.',
    },
    text: {
      control: 'text',
      description:
        'Optional text label displayed next to the switch. Clicking the text also toggles the switch.',
    },
    onCheckedChange: {
      action: 'onCheckedChange',
      description:
        'Callback fired when switch state changes. Required for controlled mode.',
      table: {
        type: { summary: '(checked: boolean) => void' },
      },
    },
  },
};

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {
    defaultChecked: false,
    disabled: false,
    text: 'Switch Label',
  },
};
