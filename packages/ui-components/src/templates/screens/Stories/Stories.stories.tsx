import type { Meta, StoryObj } from '@storybook/react';
import React from 'react';
import { Stories } from './Stories';
import type { StoriesProps } from './Stories.model';
import { View } from 'tamagui';

const mockImages = [
  {
    imageSource: 'https://picsum.photos/400/600?random=1',
    id: '1',
  },
  {
    imageSource: 'https://picsum.photos/400/600?random=2',
    id: '2',
  },
  {
    imageSource: 'https://picsum.photos/400/600?random=3',
    id: '3',
  },
  {
    imageSource: 'https://picsum.photos/400/600?random=4',
    id: '4',
  },
];

const StoriesWrapper = ({ children }: { children: React.ReactNode }) => (
  <View width={375} height={600} backgroundColor="$neutral1">
    {children}
  </View>
);

const meta: Meta<StoriesProps> = {
  title: 'Templates/Screens/Stories',
  component: Stories,
  tags: ['autodocs'],
  parameters: {
    layout: 'fullscreen',
    docs: {
      description: {
        component: `
Template que exibe uma sequência de imagens com barras de progresso automáticas.
Cada imagem é exibida por um tempo determinado, com transição automática.
Permite interação através das barras de progresso e renderização de conteúdo sobreposto.

## Como usar

\`\`\`tsx
import { Stories } from '@superapp-caixa/dsc-library';

<Stories
  images={[
    { imageSource: 'https://example.com/image1.jpg', id: '1' },
    { imageSource: 'https://example.com/image2.jpg', id: '2' },
    { imageSource: 'https://example.com/image3.jpg', id: '3' },
  ]}
  duration={5000}
  onItemChange={(index) => console.log('Item atual:', index)}
  onComplete={() => console.log('Stories finalizados')}
>
  <Text>Conteúdo sobreposto</Text>
</Stories>
\`\`\`

## Características

- Progressão automática de imagens
- Barras de progresso interativas
- Sobreposição de conteúdo personalizado
- Efeito de blur opcional
- Callbacks para eventos de navegação
- Controle de pausa
- Duração configurável por item
        `,
      },
    },
  },
  argTypes: {
    images: {
      description: 'Array de imagens a serem exibidas sequencialmente',
      control: { type: 'object' },
    },
    duration: {
      description: 'Tempo em milissegundos que cada imagem fica visível',
      control: { type: 'number', min: 1000, max: 30000, step: 1000 },
    },
    showBlur: {
      description: 'Se deve exibir um blur por cima das imagens',
      control: { type: 'boolean' },
    },
    blurIntensity: {
      description: 'Intensidade do blur (0-10)',
      control: { type: 'range', min: 0, max: 10, step: 1 },
    },
    paused: {
      description: 'Se deve pausar a progressão automática',
      control: { type: 'boolean' },
    },
    onProgressBarPress: {
      description: 'Callback executado quando uma barra de progresso é clicada',
      action: 'onProgressBarPress',
    },
    onItemChange: {
      description: 'Callback executado quando o item atual muda',
      action: 'onItemChange',
    },
    onImagesLoaded: {
      description:
        'Callback executado quando todas as imagens terminam de carregar',
      action: 'onImagesLoaded',
    },
    onImageLoadError: {
      description: 'Callback executado quando uma imagem falha ao carregar',
      action: 'onImageLoadError',
    },
  },
};

export default meta;
type StoriesType = StoryObj<StoriesProps>;

export const Default: StoriesType = {
  args: {
    images: mockImages,
    duration: 8000,
    showBlur: false,
    paused: false,
  },
  parameters: {
    docs: {
      description: {
        story:
          'Stories básico com 4 imagens e progressão automática de 8 segundos.',
      },
    },
  },
  render: args => (
    <StoriesWrapper>
      <Stories {...args} />
    </StoriesWrapper>
  ),
};
