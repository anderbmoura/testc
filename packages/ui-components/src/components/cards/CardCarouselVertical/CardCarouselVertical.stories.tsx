import type { Meta, StoryObj } from '@storybook/react';
import { View, type ImageProps } from 'tamagui';
import { CardCarouselVertical } from './CardCarouselVertical';
import type { CardCarouselVerticalProps } from './CardCarouselVertical.model';

const imageMapping = {
  'Casa Bonita': { uri: '/images/example/casa-bonita.jpg' },
  'Apartamento Moderno': { uri: '/images/example/apartamento-moderno.jpg' },
};

const meta = {
  title: 'Componentes/Cards/CardCarouselVertical',
  component: CardCarouselVertical,
  parameters: {
    layout: 'padded',
    docs: {
      description: {
        component: `
Componente DSC CardCarouselVertical para exibir recomendações personalizadas.

Suporta duas variantes:
- **image**: Card com background colorido e imagem com máscara/clip
- **custom**: Card com imagem simples sem efeitos (192x148)

## Como usar

\`\`\`tsx
import { CardCarouselVertical } from '@superapp-caixa/dsc-library';

// Card variant image (padrão) com tema highlight
<CardCarouselVertical 
  source={require('./assets/casa-bonita.jpg')}
  variant="image"
  color="highlight"
  title="Habitação"
  description="Simule agora"
/>

// Card variant image com tema de sucesso
<CardCarouselVertical 
  source={require('./assets/apartamento.jpg')}
  variant="image"
  color="success"
  title="Apartamento"
  description="Confira"
/>

// Card variant custom (imagem simples)
<CardCarouselVertical 
  source={require('./assets/casa-popular.jpg')}
  variant="custom"
  title="Casa Popular"
  description="Financie"
/>
\`\`\`
        `,
      },
      source: {
        transform: (_: string, { args }: { args: Record<string, unknown> }) => {
          const getImageRequire = (imageKey: string) => {
            if (imageKey === 'Casa Bonita') {
              return "require('../storybook/assets/images/example/casa-bonita.jpg')";
            }
            if (imageKey === 'Apartamento Moderno') {
              return "require('../storybook/assets/images/example/apartamento-moderno.jpg')";
            }
            return "require('../storybook/assets/images/example/casa-bonita.jpg')";
          };

          const props = [
            args['source'] &&
              `source={${getImageRequire(args['source'] as string)}}`,
            args['variant'] &&
              args['variant'] !== 'image' &&
              `variant="${args['variant']}"`,
            args['color'] &&
              args['color'] !== 'highlight' &&
              `color="${args['color']}"`,
            args['title'] && `title="${args['title']}"`,
            args['description'] && `description="${args['description']}"`,
          ]
            .filter(Boolean)
            .join(' ');

          return `<CardCarouselVertical${props && ` ${props}`} />`;
        },
        state: 'open',
        excludeDecorators: true,
      },
    },
  },
  tags: ['autodocs'],
  render: args => {
    const imageSource =
      args.source && typeof args.source === 'string'
        ? imageMapping[args.source as keyof typeof imageMapping]
        : args.source;

    return <CardCarouselVertical {...args} source={imageSource} />;
  },
  argTypes: {
    source: {
      description: 'Fonte da imagem a ser exibida',
      control: 'select',
      options: Object.keys(imageMapping),
      mapping: imageMapping,
    },
    variant: {
      description:
        'Variante do card (image: com background e clip | custom: imagem simples)',
      control: 'select',
      options: ['image', 'custom'],
      table: {
        type: { summary: 'CardCarouselVerticalVariant' },
        defaultValue: { summary: 'image' },
      },
    },
    color: {
      description:
        'Cor do tema aplicada ao background (quando variant="image")',
      control: 'select',
      options: [
        'highlight',
        'accent',
        'success',
        'warning',
        'danger',
        'info',
        'neutral',
        'decorative',
      ],
      table: {
        type: { summary: 'BackgroundImageVariant' },
        defaultValue: { summary: 'highlight' },
      },
    },
    title: {
      description: 'Título do card (obrigatório)',
      control: 'text',
      table: {
        type: { summary: 'string' },
      },
    },
    description: {
      description: 'Descrição do card (obrigatório)',
      control: 'text',
      table: {
        type: { summary: 'string' },
      },
    },
  },
  decorators: [
    Story => (
      <View padding={16} backgroundColor="$background">
        <Story />
      </View>
    ),
  ],
} satisfies Meta<typeof CardCarouselVertical>;

export default meta;
type Story = StoryObj<typeof CardCarouselVertical> & {
  args?: Partial<CardCarouselVerticalProps> & {
    source?: keyof typeof imageMapping | ImageProps['source'];
  };
};

export const Default = {
  args: {
    source: 'Casa Bonita',
    variant: 'image',
    color: 'highlight',
    title: 'Habitação',
    description: 'Simule agora',
  },
} satisfies Story;

export const CustomVariant = {
  args: {
    source: 'Casa Bonita',
    variant: 'custom',
    title: 'Habitação',
    description: 'Simule agora',
  },
} satisfies Story;
