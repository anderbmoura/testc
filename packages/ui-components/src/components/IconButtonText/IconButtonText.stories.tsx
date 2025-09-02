import type { Meta, StoryObj } from '@storybook/react';
import type { ImageProps } from 'tamagui';
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
        transform: (_: string, { args }: { args: Record<string, unknown> }) => {
          const getIconName = (iconKey: string) => {
            if (!iconKey || iconKey === 'None') return null;
            return iconKey;
          };

          const getImageCode = (image: unknown) => {
            if (!image || image === 'None') return null;
            if (typeof image === 'string') {
              // Se for uma string do mapping, converter para require com o nome da imagem
              if (image === 'INSS') {
                return `require('./inss.png')`;
              } else if (image === 'MCMV') {
                return `require('./minha-casa-minha-vida.png')`;
              }
            } else if (image && typeof image === 'object' && 'uri' in image) {
              // Se já for um objeto com uri, extrair o nome do arquivo
              const fileName = (image as { uri: string }).uri.split('/').pop();
              return `require('./${fileName}')`;
            }
            return null;
          };

          const getImageDimensions = (image: unknown) => {
            if (!image || image === 'None')
              return { width: null, height: null };
            if (typeof image === 'string') {
              if (image === 'INSS') {
                return { width: 36, height: 24 };
              } else if (image === 'MCMV') {
                return { width: 38, height: 24 };
              }
            } else if (image && typeof image === 'object' && 'uri' in image) {
              // Determinar dimensões baseado na URI
              const uri = (image as { uri: string }).uri;
              if (uri.includes('inss.png')) {
                return { width: 36, height: 24 };
              } else if (uri.includes('minha-casa-minha-vida.png')) {
                return { width: 38, height: 24 };
              }
            }
            return { width: null, height: null };
          };

          const imageDimensions =
            args['variant'] === 'image'
              ? getImageDimensions(args['image'])
              : { width: null, height: null };

          const props = [
            args['variant'] &&
              args['variant'] !== 'default' &&
              `variant="${args['variant']}"`,
            args['icon'] &&
              args['icon'] !== 'None' &&
              args['variant'] !== 'image' &&
              `icon={<${getIconName(args['icon'] as string)} />}`,
            args['image'] &&
              args['image'] !== 'None' &&
              args['variant'] === 'image' &&
              `image={${getImageCode(args['image'])}}`,
            imageDimensions.width &&
              args['variant'] === 'image' &&
              `imageWidth={${imageDimensions.width}}`,
            imageDimensions.height &&
              args['variant'] === 'image' &&
              `imageHeight={${imageDimensions.height}}`,
            args['disabled'] && 'disabled',
            args['loading'] && 'loading',
            args['onGrayBg'] && 'onGrayBg',
            args['badgeText'] && `badgeText="${args['badgeText']}"`,
            args['badgeColor'] &&
              args['badgeColor'] !== 'highlight' &&
              `badgeColor="${args['badgeColor']}"`,
            args['onPress'] && 'onPress={() => console.log("Clicado!")}',
          ]
            .filter(Boolean)
            .join(' ');

          const children = args['children'] || 'Label';

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

    // Determinar dimensões automaticamente baseado na imagem
    const getImageDimensions = (image: unknown) => {
      if (!image || image === 'None') return {};
      if (typeof image === 'string') {
        if (image === 'INSS') {
          return { imageWidth: 36, imageHeight: 24 };
        } else if (image === 'MCMV') {
          return { imageWidth: 38, imageHeight: 24 };
        }
      } else if (image && typeof image === 'object' && 'uri' in image) {
        const uri = (image as { uri: string }).uri;
        if (uri.includes('inss.png')) {
          return { imageWidth: 36, imageHeight: 24 };
        } else if (uri.includes('minha-casa-minha-vida.png')) {
          return { imageWidth: 38, imageHeight: 24 };
        }
      }
      return {};
    };

    const autoDimensions =
      args.variant === 'image' ? getImageDimensions(args.image) : {};

    // Usar dimensões explícitas se fornecidas, senão usar automáticas
    const finalImageWidth =
      args.imageWidth !== undefined
        ? args.imageWidth
        : autoDimensions.imageWidth;
    const finalImageHeight =
      args.imageHeight !== undefined
        ? args.imageHeight
        : autoDimensions.imageHeight;

    const {
      children,
      imageWidth: _imageWidth,
      imageHeight: _imageHeight,
      ...restArgs
    } = args;

    const componentProps: Record<string, unknown> = {
      ...restArgs,
      image: imageSource,
    };

    if (finalImageWidth !== undefined) {
      componentProps['imageWidth'] = finalImageWidth;
    }

    if (finalImageHeight !== undefined) {
      componentProps['imageHeight'] = finalImageHeight;
    }

    return (
      <IconButtonText key={key} {...componentProps}>
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
      action: 'clicked',
      description: 'Callback executado quando o botão é pressionado.',
      table: {
        type: { summary: '() => void' },
        defaultValue: { summary: 'undefined' },
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
type Story = StoryObj<typeof meta> & {
  args?: Partial<IconButtonTextProps> & {
    image?: keyof typeof imageMapping | ImageProps['source'];
    icon?: keyof typeof iconMapping | IconButtonTextProps['icon'];
  };
};

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
