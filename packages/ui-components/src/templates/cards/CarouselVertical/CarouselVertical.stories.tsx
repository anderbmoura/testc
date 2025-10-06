import type { Meta, StoryObj } from '@storybook/react';
import React from 'react';
import { CarouselVertical } from './CarouselVertical';
import type { CarouselVerticalProps } from './CarouselVertical.model';
import { CardCarouselVertical } from '../../../components/cards/CardCarouselVertical';

const meta: Meta<CarouselVerticalProps> = {
  title: 'Templates/Cards/CarouselVertical',
  component: CarouselVertical,
  tags: ['autodocs'],
  parameters: {
    layout: 'centered',
    docs: {
      description: {
        component: `
Template que organiza cards CardCarouselVertical em um carousel horizontal rolável.
Possui título opcional e botão de ação opcional no header. O conteúdo é rolável horizontalmente através dos cards.

## Como usar

\`\`\`tsx
import { CarouselVertical, CardCarouselVertical } from '@superapp-caixa/dsc-library';

<CarouselVertical
  title="Produtos Recomendados"
  buttonActionName="Ver todos"
  onButtonAction={() => console.log('Ver todos produtos')}
>
  <CardCarouselVertical
    source={require('./assets/produto1.jpg')}
    variant="highlight"
  />
  <CardCarouselVertical
    source={require('./assets/produto2.jpg')}
    variant="success"
  />
</CarouselVertical>
\`\`\`

## Características

- **Scroll horizontal**: Cards organizados horizontalmente com scroll nativo
- **Header opcional**: Título e botão de ação podem ser usados independentemente
- **Children diretos**: Aceita CardCarouselVertical como children diretos
        `,
      },
    },
    viewport: {
      defaultViewport: 'mobile1',
    },
  },
  decorators: [
    Story => (
      <div style={{ width: '520px', margin: '0 auto' }}>
        <Story />
      </div>
    ),
  ],
  argTypes: {
    title: {
      control: 'text',
      description: 'Título exibido na parte superior esquerda',
    },
    buttonActionName: {
      control: 'text',
      description: 'Nome do botão de ação exibido na parte superior direita',
    },
    onButtonAction: {
      action: 'onButtonAction',
      description: 'Callback executado quando o botão de ação é pressionado',
    },
    children: {
      control: false,
      description: 'Componentes CardCarouselVertical a serem exibidos',
    },
  },
};

export default meta;
type Story = StoryObj<CarouselVerticalProps>;

// Mock de imagens para as stories
const mockImageSource = { uri: 'https://picsum.photos/200/300' };

/**
 * Template que organiza cards CardCarouselVertical em um carousel horizontal rolável.
 * Possui título opcional e botão de ação opcional no header.
 */
export const Default: Story = {
  args: {
    title: 'Produtos Recomendados',
    buttonActionName: 'Ver todos',
  },
  render: args => (
    <CarouselVertical {...args}>
      <CardCarouselVertical source={mockImageSource} variant="highlight" />
      <CardCarouselVertical source={mockImageSource} variant="success" />
      <CardCarouselVertical source={mockImageSource} variant="accent" />
      <CardCarouselVertical source={mockImageSource} variant="warning" />
      <CardCarouselVertical source={mockImageSource} variant="danger" />
      <CardCarouselVertical source={mockImageSource} variant="info" />
      <CardCarouselVertical source={mockImageSource} variant="neutral" />
      <CardCarouselVertical source={mockImageSource} variant="decorative" />
    </CarouselVertical>
  ),
};
