import type { Meta, StoryObj } from '@storybook/react';
import React from 'react';
import { CarouselHorizontal } from './CarouselHorizontal';
import type { CarouselHorizontalProps } from './CarouselHorizontal.model';
import CardCarouselHorizontal from '../../../components/CardCarouselHorizontal';
import { YStack } from 'tamagui';
import { BodyStandard } from '../../../components/Typography';

const SlotContent = () => (
  <YStack
    flex={1}
    height="100%"
    width={130}
    justifyContent="center"
    alignItems="center"
    backgroundColor="$infoBg"
  >
    <BodyStandard>Slot</BodyStandard>
  </YStack>
);

const meta: Meta<CarouselHorizontalProps> = {
  title: 'Templates/Cards/CarouselHorizontal',
  component: CarouselHorizontal,
  tags: ['autodocs'],
  parameters: {
    layout: 'centered',
    docs: {
      description: {
        component: `
Template que organiza cards CardCarouselHorizontal em um carousel horizontal rolável.
Possui título opcional e botão de ação opcional no header. O conteúdo é rolável horizontalmente através dos cards.

## Como usar

\`\`\`tsx
import { CarouselHorizontal, CardCarouselHorizontal } from '@superapp-caixa/dsc-library';

<CarouselHorizontal
  title="Produtos Recomendados"
  buttonActionName="Ver todos"
  onButtonAction={() => console.log('Ver todos produtos')}
>
  <CardCarouselHorizontal
    title="Produto 1"
    description="Descrição do produto 1"
    theme="highlight"
  />
  <CardCarouselHorizontal
    title="Produto 2" 
    description="Descrição do produto 2"
    theme="accent"
  />
</CarouselHorizontal>
\`\`\`

## Características

- **Scroll horizontal**: Cards organizados horizontalmente com scroll nativo
- **Header opcional**: Título e botão de ação podem ser usados independentemente
- **Children diretos**: Aceita CardCarouselHorizontal como children diretos
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
      description: 'Componentes CardCarouselHorizontal a serem exibidos',
    },
  },
};

export default meta;
type Story = StoryObj<CarouselHorizontalProps>;

export const Default: Story = {
  args: {
    title: 'Produtos Recomendados',
    buttonActionName: 'Ver todos',
  },
  render: args => (
    <CarouselHorizontal {...args}>
      <CardCarouselHorizontal
        title="Cartão de Crédito"
        description="Solicite já o seu"
        theme="highlight"
      >
        <SlotContent />
      </CardCarouselHorizontal>
      <CardCarouselHorizontal
        title="Conta Corrente"
        description="Abra sua conta agora"
        theme="accent"
      >
        <SlotContent />
      </CardCarouselHorizontal>
      <CardCarouselHorizontal
        title="Investimentos"
        description="Faça seu dinheiro render"
        theme="neutral"
      >
        <SlotContent />
      </CardCarouselHorizontal>
      <CardCarouselHorizontal
        title="Empréstimos"
        description="Crédito rápido e fácil"
        theme="highlight"
      >
        <SlotContent />
      </CardCarouselHorizontal>
      <CardCarouselHorizontal
        title="Seguros"
        description="Proteja o que é importante"
        theme="accent"
      >
        <SlotContent />
      </CardCarouselHorizontal>
      <CardCarouselHorizontal
        title="Previdência"
        description="Planeje seu futuro"
        theme="neutral"
      >
        <SlotContent />
      </CardCarouselHorizontal>
    </CarouselHorizontal>
  ),
};
