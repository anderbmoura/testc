import type { Meta, StoryObj } from '@storybook/react';
import { Avatar } from './Avatar';
import type { AvatarProps } from './Avatar.model';
import {
  UserCart,
  BadgeCheck,
  Star,
  Heart,
  Mail,
  Bell,
} from 'iconoir-react-native';

// Mapeamento de ícones
const iconMapping = {
  UserCart: UserCart,
  BadgeCheck: BadgeCheck,
  Star: Star,
  Heart: Heart,
  Mail: Mail,
  Bell: Bell,
};

// Mapeamento de imagens estáticas
const imageMapping = {
  None: undefined,
  INSS: { uri: '/images/example/inss.png' },
  MCMV: { uri: '/images/example/minha-casa-minha-vida.png' },
};

const meta: Meta<AvatarProps> = {
  title: 'Componentes/Avatar',
  component: Avatar,
  parameters: {
    layout: 'centered',
    docs: {
      description: {
        component: `
Componente de avatar para exibir imagem, ícone ou monograma com diferentes estilos e tamanhos.

## Exemplos

\`\`\`tsx
import { Avatar } from '@superapp-caixa/dsc-library';
import { BadgeCheck } from 'iconoir-react-native';

<Avatar style="monogram" monogramChar="W" size="large" />
<Avatar style="image" imageSource={{ uri: "https://placehold.co/32x32" }} size="large" />
<Avatar style="icon" icon={BadgeCheck} size="large" />
\`\`\`
        `,
      },
      source: {
        transform: (_: string, { args }: any) => {
          const getIconName = (iconKey: string) =>
            iconKey && iconKey !== 'None' ? iconKey : null;

          const props = [
            args.style && `style="${args.style}"`,
            args.size && `size="${args.size}"`,
            args.monogramChar &&
              args.style === 'monogram' &&
              `monogramChar="${args.monogramChar}"`,
            args.imageSource &&
              args.style === 'image' &&
              `imageSource={{ uri: "${args.imageSource.uri}" }}`,
            args.icon &&
              args.style === 'icon' &&
              `icon={<${getIconName(args.icon)} />}`,
          ]
            .filter(Boolean)
            .join(' ');

          return `<Avatar${props && ` ${props}`} />`;
        },
        state: 'open',
        excludeDecorators: true,
      },
    },
  },
  tags: ['autodocs'],
  render: args => {
    const imageSource =
      typeof args.imageSource === 'string'
        ? imageMapping[args.imageSource as keyof typeof imageMapping]
        : args.imageSource;

    const icon =
      typeof args.icon === 'string'
        ? iconMapping[args.icon as keyof typeof iconMapping]
        : args.icon;

    return (
      <Avatar
        {...args}
        imageSource={imageSource}
        icon={icon}
        monogramChar={args.monogramChar}
      />
    );
  },
  argTypes: {
    style: {
      control: 'radio',
      options: ['monogram', 'image', 'icon'],
      description: 'Estilo visual do avatar',
      table: {
        type: { summary: "'monogram' | 'image' | 'icon'" },
        defaultValue: { summary: "'monogram'" },
      },
    },
    size: {
      control: 'radio',
      options: ['small', 'standard', 'large'],
      description: 'Tamanho do avatar',
      table: {
        type: { summary: "'small' | 'standard' | 'large'" },
        defaultValue: { summary: "'standard'" },
      },
    },
    monogramChar: {
      control: 'text',
      if: { arg: 'style', eq: 'monogram' },
      description: 'Texto exibido no estilo monograma',
      table: {
        type: { summary: 'string' },
        defaultValue: { summary: 'undefined' },
      },
    },
    imageSource: {
      control: 'select',
      options: Object.keys(imageMapping),
      mapping: imageMapping,
      if: { arg: 'style', eq: 'image' },
      description: 'Imagem exibida no estilo imagem',
      table: {
        type: {
          summary: 'ImageSource',
          detail: 'require(...) | { uri: string }',
        },
        defaultValue: { summary: 'undefined' },
      },
    },
    icon: {
      control: 'select',
      options: Object.keys(iconMapping),
      mapping: iconMapping,
      if: { arg: 'style', eq: 'icon' },
      description: 'Ícone exibido no estilo ícone',
      table: {
        type: {
          summary: 'React.ReactNode',
          detail: 'Componente do iconoir-react-native',
        },
        defaultValue: { summary: 'undefined' },
      },
    },
    styleProps: {
      control: 'object',
      description: 'Estilos adicionais aplicados ao contêiner do avatar',
      table: {
        type: { summary: 'ViewStyle' },
        defaultValue: { summary: '{}' },
      },
    },
  },
};

export default meta;

type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {
    style: 'icon',
    icon: BadgeCheck,
    size: 'large',
  },
};
