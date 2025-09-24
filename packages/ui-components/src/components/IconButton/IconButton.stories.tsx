import type { Meta, StoryObj } from '@storybook/react';
import { IconButton } from './IconButton';
import type { IconButtonProps } from './IconButton.model';
import { Heart, Settings, Download, Upload } from 'iconoir-react-native';

const iconMapping = {
  Heart: 'Heart',
  Settings: 'Settings',
  Download: 'Download',
  Upload: 'Upload',
};

const meta: Meta<IconButtonProps> = {
  title: 'Componentes/IconButton',
  component: IconButton,
  parameters: {
    layout: 'centered',
    docs: {
      description: {
        component:
          'Componente para exibir botões circulares com apenas um ícone.',
      },
      source: {
        transform: (
          _: string,
          { args }: { args: Partial<IconButtonProps> }
        ) => {
          const props = [
            args.type && args.type !== 'plain' && `type="${args.type}"`,
            args.size && args.size !== 'large' && `size="${args.size}"`,
            args.color && args.color !== 'highlight' && `color="${args.color}"`,
            args.icon &&
              `icon={<${iconMapping[args.icon as keyof typeof iconMapping]} />}`,
            args.disabled && 'disabled',
            args.loading && 'loading',
            args.accessibilityLabel &&
              `accessibilityLabel="${args.accessibilityLabel}"`,
          ]
            .filter(Boolean)
            .join(' ');

          return `<IconButton${props && ` ${props}`} onPress={() => {}} />`;
        },
        state: 'open',
      },
    },
  },
  tags: ['autodocs'],
  argTypes: {
    type: {
      control: { type: 'select' },
      options: ['plain', 'chromeless', 'outline'],
    },
    size: {
      control: { type: 'select' },
      options: ['large', 'standard', 'small', 'tiny'],
    },
    color: {
      control: { type: 'select' },
      options: ['highlight', 'danger', 'white'],
    },
    icon: {
      control: { type: 'select' },
      options: Object.keys(iconMapping),
      mapping: {
        Heart: <Heart />,
        Settings: <Settings />,
        Download: <Download />,
        Upload: <Upload />,
      },
    },
    disabled: {
      control: { type: 'boolean' },
    },
    loading: {
      control: { type: 'boolean' },
    },
    accessibilityLabel: {
      control: { type: 'text' },
    },
    onPress: { action: 'pressed' },
  },
};

export default meta;
type Story = StoryObj<IconButtonProps>;

export const Default: Story = {
  args: {
    type: 'plain',
    size: 'large',
    color: 'highlight',
    icon: <Heart />,
    disabled: false,
    loading: false,
    accessibilityLabel: 'Curtir',
  },
};
