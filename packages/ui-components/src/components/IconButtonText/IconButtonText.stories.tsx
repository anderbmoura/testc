import type { Meta, StoryObj } from '@storybook/react';
import IconButtonText from './IconButtonText';
import type { IconButtonTextProps } from './IconButtonText.model';
import { Home, Settings, User, Heart } from 'iconoir-react-native';

const iconMapping = {
  None: undefined,
  Home: <Home />,
  Settings: <Settings />,
  User: <User />,
  Heart: <Heart />,
};

const imageMapping = {
  None: undefined,
  INSS: { uri: '/images/example/inss.png' },
  MCMV: { uri: '/images/example/minha-casa-minha-vida.png' },
};

const meta: Meta<IconButtonTextProps> = {
  title: 'Componentes/IconButtonText',
  component: IconButtonText,
  parameters: {
    layout: 'centered',
    docs: {
      source: {
        transform: (_: string, { args }: any) => {
          const getIconName = (iconKey: string) => {
            if (!iconKey || iconKey === 'None') return null;
            return iconKey;
          };

          const props = [
            args.variant &&
              args.variant !== 'default' &&
              `variant="${args.variant}"`,
            args.icon &&
              args.icon !== 'None' &&
              args.variant !== 'image' &&
              `icon={<${getIconName(args.icon)} />}`,
            args.image &&
              args.image !== 'None' &&
              args.variant === 'image' &&
              `image="${args.image}"`,
            args.imageWidth &&
              args.variant === 'image' &&
              `imageWidth={${args.imageWidth}}`,
            args.imageHeight &&
              args.variant === 'image' &&
              `imageHeight={${args.imageHeight}}`,
            args.disabled && 'disabled',
            args.onGrayBg && 'onGrayBg',
          ]
            .filter(Boolean)
            .join(' ');

          const children = args.children || 'Label';

          return `<IconButtonText${props && ` ${props}`}>
  ${children}
</IconButtonText>`;
        },
        state: 'open',
        excludeDecorators: true,
      },
    },
  },
  tags: ['autodocs'],
  render: args => {
    const key = `icon-button-text-${Date.now()}`;
    const imageSource =
      args.image && typeof args.image === 'string'
        ? imageMapping[args.image as keyof typeof imageMapping]
        : args.image;

    const { children, ...restArgs } = args;
    return (
      <IconButtonText key={key} {...restArgs} image={imageSource}>
        {children}
      </IconButtonText>
    );
  },
  argTypes: {
    variant: {
      control: 'radio',
      options: ['default', 'danger', 'image'],
      description: 'Variant of the button that determines styling and behavior',
      table: {
        type: { summary: "'default' | 'danger' | 'image'" },
        defaultValue: { summary: "'default'" },
      },
    },
    children: {
      control: 'text',
      description: 'Text content to display below the icon button',
      table: {
        type: { summary: 'React.ReactNode' },
        defaultValue: { summary: 'undefined' },
      },
    },
    icon: {
      control: 'select',
      options: Object.keys(iconMapping),
      description:
        'Icon element to display inside the button (used when variant is default or danger)',
      mapping: iconMapping,
      table: {
        type: {
          summary: 'React.ReactNode',
          detail: 'Icon component from iconoir-react-native',
        },
        defaultValue: { summary: 'undefined' },
      },
      if: { arg: 'variant', neq: 'image' },
    },
    image: {
      control: 'select',
      options: Object.keys(imageMapping),
      description:
        'Image source to display inside the button (used when variant is image)',
      mapping: imageMapping,
      table: {
        type: {
          summary: 'ImageProps["source"]',
          detail: 'Image source - can be URL string or require() import',
        },
        defaultValue: { summary: 'undefined' },
      },
      if: { arg: 'variant', eq: 'image' },
    },
    imageWidth: {
      control: 'number',
      description: 'Width of the image in pixels (used when variant is image)',
      table: {
        type: { summary: 'number' },
        defaultValue: { summary: '24' },
      },
      if: { arg: 'variant', eq: 'image' },
    },
    imageHeight: {
      control: 'number',
      description: 'Height of the image in pixels (used when variant is image)',
      table: {
        type: { summary: 'number' },
        defaultValue: { summary: '24' },
      },
      if: { arg: 'variant', eq: 'image' },
    },
    disabled: {
      control: 'boolean',
      description: 'Prevents user interaction and shows disabled styling',
      table: {
        type: { summary: 'boolean' },
        defaultValue: { summary: 'false' },
      },
    },
    onGrayBg: {
      control: 'boolean',
      description:
        'When true, applies alternative styling for gray backgrounds',
      table: {
        type: { summary: 'boolean' },
        defaultValue: { summary: 'false' },
      },
    },
    onPress: {
      table: {
        disable: true,
      },
    },
    touchableProps: {
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
    variant: 'default',
    children: 'Home',
    icon: 'Home',
    disabled: false,
    onGrayBg: false,
  },
};

export const Danger: Story = {
  args: {
    variant: 'danger',
    children: 'Delete',
    icon: 'Heart',
    disabled: false,
    onGrayBg: false,
  },
};

export const WithImage: Story = {
  args: {
    variant: 'image',
    children: 'INSS',
    image: 'INSS' as any,
    imageWidth: 36,
    imageHeight: 24,
    disabled: false,
    onGrayBg: false,
  },
};

export const WithImageMinhaCasa: Story = {
  args: {
    variant: 'image',
    children: 'Minha Casa',
    image: 'MCMV' as any,
    imageWidth: 38,
    imageHeight: 24,
    disabled: false,
    onGrayBg: false,
  },
};
