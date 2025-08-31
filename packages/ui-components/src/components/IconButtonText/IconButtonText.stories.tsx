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
      description: {
        component: `
Componente para exibir botões com ícone e texto.

## Como usar

\`\`\`tsx
import { IconButtonText } from '@superapp-caixa/dsc-library';
import { Home, Settings, Trash } from 'iconoir-react-native';

// Botão padrão com ícone
<IconButtonText 
  icon={<Home />} 
  onPress={() => navigate('Home')}
>
  Home
</IconButtonText>

// Botão 'danger' com ícone
<IconButtonText 
  variant="danger" 
  icon={<Trash />} 
  onPress={() => deleteItem()}
>
  Excluir
</IconButtonText>

// Botão com imagem
<IconButtonText 
  variant="image" 
  image={require('./logo.png')}
  imageWidth={32}
  imageHeight={32}
  onPress={() => openApp()}
>
  Logo
</IconButtonText>

// Botão com loading
<IconButtonText 
  icon={<Settings />} 
  loading 
  onPress={() => save()}
>
  Salvando...
</IconButtonText>

// Botão com badge
<IconButtonText 
  icon={<Home />} 
  badgeText="3"
  badgeColor="highlight"
  onPress={() => navigate('Home')}
>
  Home
</IconButtonText>

// Botão com badge de perigo
<IconButtonText 
  icon={<Settings />} 
  badgeText="!"
  badgeColor="danger"
  onPress={() => openSettings()}
>
  Configurações
</IconButtonText>
\`\`\`
        `,
      },
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
            args.loading && 'loading',
            args.onGrayBg && 'onGrayBg',
            args.badgeText && `badgeText="${args.badgeText}"`,
            args.badgeColor &&
              args.badgeColor !== 'highlight' &&
              `badgeColor="${args.badgeColor}"`,
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
      description:
        'Variante visual que define o tema de cores aplicado ao botão.',
      table: {
        type: { summary: "'default' | 'danger' | 'image'" },
        defaultValue: { summary: "'default'" },
      },
    },
    children: {
      control: 'text',
      description: 'Texto exibido abaixo do ícone/imagem.',
      table: {
        type: { summary: 'React.ReactNode' },
        defaultValue: { summary: 'undefined' },
      },
    },
    icon: {
      control: 'select',
      options: Object.keys(iconMapping),
      description:
        'Ícone exibido no botão (usado quando variant é "default" ou "danger").',
      mapping: iconMapping,
      table: {
        type: {
          summary: 'React.ReactNode',
          detail: 'Componente de ícone do iconoir-react-native',
        },
        defaultValue: { summary: 'undefined' },
      },
      if: { arg: 'variant', neq: 'image' },
    },
    image: {
      control: 'select',
      options: Object.keys(imageMapping),
      description:
        'Fonte da imagem exibida no botão (usado quando variant é "image").',
      mapping: imageMapping,
      table: {
        type: {
          summary: 'ImageProps["source"]',
          detail: 'Fonte da imagem - pode ser URL string ou import require()',
        },
        defaultValue: { summary: 'undefined' },
      },
      if: { arg: 'variant', eq: 'image' },
    },
    imageWidth: {
      control: 'number',
      description:
        'Largura da imagem em pixels (usado quando variant é "image").',
      table: {
        type: { summary: 'number' },
        defaultValue: { summary: '24' },
      },
      if: { arg: 'variant', eq: 'image' },
    },
    imageHeight: {
      control: 'number',
      description:
        'Altura da imagem em pixels (usado quando variant é "image").',
      table: {
        type: { summary: 'number' },
        defaultValue: { summary: '24' },
      },
      if: { arg: 'variant', eq: 'image' },
    },
    disabled: {
      control: 'boolean',
      description: 'Desabilita a interação e aplica estilo desabilitado.',
      table: {
        type: { summary: 'boolean' },
        defaultValue: { summary: 'false' },
      },
    },
    loading: {
      control: 'boolean',
      description:
        'Exibe um spinner de carregamento e aplica estilo desabilitado.',
      table: {
        type: { summary: 'boolean' },
        defaultValue: { summary: 'false' },
      },
    },
    onGrayBg: {
      control: 'boolean',
      description: 'Aplica estilo alternativo para fundos cinzas.',
      table: {
        type: { summary: 'boolean' },
        defaultValue: { summary: 'false' },
      },
    },
    badgeText: {
      control: 'text',
      description: 'Texto do badge exibido flutuando sobre o container.',
      table: {
        type: { summary: 'string' },
        defaultValue: { summary: 'undefined' },
      },
    },
    badgeColor: {
      control: 'radio',
      options: ['highlight', 'danger'],
      description: 'Cor do badge.',
      table: {
        type: { summary: "'highlight' | 'danger'" },
        defaultValue: { summary: "'highlight'" },
      },
      if: { arg: 'badgeText', truthy: true },
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
    loading: false,
    onGrayBg: false,
  },
};
