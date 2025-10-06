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
  None: undefined,
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
  title: 'Componentes/Data Display/Avatar',
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
          const getIconName = (icon: any) =>
            icon && icon !== 'None'
              ? typeof icon === 'string'
                ? icon
                : Object.entries(iconMapping).find(
                    ([name, comp]) => comp === icon && name !== 'None'
                  )?.[0]
              : null;

          const getImageName = (imageSource: any) => {
            if (typeof imageSource === 'string') {
              return imageSource !== 'None' ? imageSource : null;
            }
            // Se for um objeto do imageMapping, encontrar seu nome
            for (const [key, value] of Object.entries(imageMapping)) {
              if (value === imageSource) {
                return key;
              }
            }
            return null;
          };

          const iconName = getIconName(args.icon);
          const imageName = getImageName(args.imageSource);

          const props = [
            args.style && `style="${args.style}"`,
            args.size && args.size !== 'standard' && `size="${args.size}"`,
            args.monogramChar &&
              args.style === 'monogram' &&
              `monogramChar="${args.monogramChar}"`,
            imageName &&
              args.style === 'image' &&
              `imageSource={{ uri: "${imageMapping[imageName as keyof typeof imageMapping]?.uri}" }}`,
            iconName && args.style === 'icon' && `icon={${iconName}}`,
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
    const key = `avatar-${Date.now()}`;
    return <Avatar key={key} {...args} />;
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
        defaultValue: { summary: 'W' },
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
        defaultValue: { summary: 'INSS' },
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
        defaultValue: { summary: 'BadgeCheck' },
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
    style: 'monogram',
    size: 'standard',
    monogramChar: 'W',
    imageSource: imageMapping.INSS,
    icon: BadgeCheck,
  },
};
