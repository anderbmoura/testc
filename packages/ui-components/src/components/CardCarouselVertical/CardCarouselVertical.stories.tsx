import type { Meta, StoryObj } from '@storybook/react';
import { View, type ImageProps } from 'tamagui';
import { CardCarouselVertical } from './CardCarouselVertical';
import type { CardCarouselVerticalProps } from './CardCarouselVertical.model';

const imageMapping = {
  'Casa Bonita': { uri: '/images/example/casa-bonita.jpg' },
  'Apartamento Moderno': { uri: '/images/example/apartamento-moderno.jpg' },
};

const meta = {
  title: 'Componentes/CardCarouselVertical',
  component: CardCarouselVertical,
  parameters: {
    layout: 'padded',
    docs: {
      description: {
        component: `
Componente DSC CardCarouselVertical para exibir recomendações personalizadas.

## Como usar

\`\`\`tsx
import { CardCarouselVertical } from '@superapp-caixa/dsc-library';

// Card padrão com tema highlight
<CardCarouselVertical 
  source={require('./assets/casa-bonita.jpg')}
/>

// Card com tema de sucesso
<CardCarouselVertical 
  source={require('./assets/apartamento.jpg')}
  variant="success"
/>

// Card com tema de perigo
<CardCarouselVertical 
  source={require('./assets/casa-popular.jpg')}
  variant="danger"
/>

// Card com tema de aviso
<CardCarouselVertical 
  source={require('./assets/terreno.jpg')}
  variant="warning"
/>

// Card com tema informativo
<CardCarouselVertical 
  source={require('./assets/comercial.jpg')}
  variant="info"
/>

// Card com tema neutro
<CardCarouselVertical 
  source={require('./assets/industrial.jpg')}
  variant="neutral"
/>

// Card com tema decorativo
<CardCarouselVertical 
  source={require('./assets/rural.jpg')}
  variant="decorative"
/>

// Card com tema de destaque
<CardCarouselVertical 
  source={require('./assets/luxo.jpg')}
  variant="accent"
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
              args['variant'] !== 'highlight' &&
              `variant="${args['variant']}"`,
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
      description: 'Variante que aplica um tema ao background',
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
    variant: 'highlight',
  },
} satisfies Story;
