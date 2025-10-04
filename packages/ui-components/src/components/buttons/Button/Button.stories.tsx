import type { Meta, StoryObj } from '@storybook/react';
import { Button } from './Button';
import type { ButtonProps } from './Button.model';
import {
  Home,
  Settings,
  User,
  Heart,
  Star,
  Airplay,
  Search,
  Bell,
  Mail,
  Download,
  Upload,
  Trash,
} from 'iconoir-react-native';

const iconMapping = {
  None: undefined,
  Home,
  Settings,
  User,
  Heart,
  Star,
  Airplay,
  Search,
  Bell,
  Mail,
  Download,
  Upload,
  Trash,
};

const meta: Meta<ButtonProps> = {
  title: 'Componentes/Buttons/Button',
  component: Button,
  parameters: {
    layout: 'centered',
    docs: {
      source: {
        transform: (_: string, { args }: any) => {
          const getIconName = (icon: any) =>
            icon && icon !== 'None'
              ? typeof icon === 'string'
                ? icon
                : Object.entries(iconMapping).find(
                    ([name, comp]) => comp === icon && name !== 'None'
                  )?.[0]
              : null;

          const props = [
            args.icon && `icon={${getIconName(args.icon)}}`,
            args.iconAfter && `iconAfter={${getIconName(args.iconAfter)}}`,
            args.type !== 'plain' && `type="${args.type}"`,
            args.size !== 'standard' && `size="${args.size}"`,
            args.theme !== 'highlight' && `theme="${args.theme}"`,
            args.disabled && 'disabled',
            args.loading && 'loading',
          ]
            .filter(Boolean)
            .join(' ');

          return `<Button${props && ` ${props}`}>${args.children || 'Button'}</Button>`;
        },
        state: 'open',
        excludeDecorators: true,
      },
    },
  },
  tags: ['autodocs'],
  render: args => {
    const key = `button-${Date.now()}`;
    return <Button key={key} {...args} />;
  },
  argTypes: {
    theme: {
      control: 'select',
      options: ['highlight', 'accent', 'warning', 'error', 'success', 'info'],
      description: 'Button theme variant',
    },
    type: {
      control: 'select',
      options: ['plain', 'outline', 'chromeless'],
      description: 'Button type variant',
    },
    size: {
      control: 'select',
      options: ['large', 'standard', 'small'],
      description: 'Button size variant',
    },
    disabled: {
      control: 'boolean',
      description: 'Whether the button is disabled',
    },
    loading: {
      control: 'boolean',
      description: 'Whether the button is in loading state',
    },
    children: {
      control: 'text',
      description: 'Button content',
    },
    icon: {
      control: 'select',
      options: Object.keys(iconMapping),
      description: 'Icon to display before text',
      mapping: iconMapping,
      table: {
        type: {
          summary: 'IconProp',
          detail: 'Icon component from iconoir-react-native',
        },
      },
    },
    iconAfter: {
      control: 'select',
      options: Object.keys(iconMapping),
      description: 'Icon to display after text',
      mapping: iconMapping,
      table: {
        type: {
          summary: 'IconProp',
          detail: 'Icon component from iconoir-react-native',
        },
      },
    },
    onPress: {
      table: {
        disable: true,
      },
    },
  },
};

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {
    children: 'Button',
    type: 'plain',
    size: 'standard',
    theme: 'highlight',
    icon: undefined,
    iconAfter: undefined,
    disabled: false,
    loading: false,
  },
};
