import type { Meta, StoryObj } from '@storybook/react';
import { ScrollView, View, XStack, YStack } from 'tamagui';
import { ForYouCard } from './ForYouCard';

const meta = {
  title: 'Componentes/ForYouCard',
  component: ForYouCard,
  parameters: {
    layout: 'padded',
    docs: {
      description: {
        component: `
# ForYouCard

Um componente de card projetado para a seção de recomendações "Para Você" que exibe conteúdo com sobreposições de fundo personalizadas e conteúdo de texto.

## Funcionalidades

- **Suporte a imagens em background**: Mostra imagens de URL pelo componente Form2
- **Cores de preenchimento personalizadas**: Suporta cores de preenchimento personalizadas através do componente Form1
- **Dimensões fixas**: 200px de largura x 243px de altura mínima para um layout consistente
- **Conteúdo sobreposto**: Conteúdo de texto com camadas de z-index apropriadas
- **Design arredondado**: Raio de borda de 10px para uma aparência moderna

## Estrutura

O card contém:
- **Form1**: Sobreposição de fundo com cor de preenchimento opcional
- **Form2**: Imagem de fundo da URL href
- **Conteúdo de Texto**: Subtítulo "Simule agora" e título "Habitação"

## Uso

\`\`\`tsx
import { ForYouCard } from '@superapp-caixa/dsc-library';

<ForYouCard
  href="https://picsum.photos/400/600?random=1"
  fill="#ff6b6b"
/>
\`\`\`
        `,
      },
    },
  },
  tags: ['autodocs'],
  argTypes: {
    href: {
      description: 'A URL ou caminho para a imagem de fundo',
      control: { type: 'text' },
    },
    fill: {
      description: 'Cor de preenchimento opcional para a sobreposição de fundo',
      control: { type: 'color' },
    },
  },
  decorators: [
    Story => (
      <View padding={16} backgroundColor="$background">
        <Story />
      </View>
    ),
  ],
} satisfies Meta<typeof ForYouCard>;

export default meta;
type Story = StoryObj<typeof ForYouCard>;

export const Default: Story = {
  args: {
    href: 'https://picsum.photos/400/600?random=1',
  },
};

/**
 * ForYouCard with a custom fill color overlay
 */
export const WithFillColor: Story = {
  args: {
    href: 'https://picsum.photos/400/600?random=2',
    fill: '#ff6b6b',
  },
};

/**
 * Multiple ForYouCards in a grid layout
 */
export const MultipleCards: Story = {
  render: () => (
    <YStack gap={16}>
      <XStack gap={12} flexWrap="wrap" justifyContent="center">
        <ForYouCard
          href="https://picsum.photos/400/600?random=10"
          fill="#e74c3c"
        />
        <ForYouCard
          href="https://picsum.photos/400/600?random=11"
          fill="#3498db"
        />
      </XStack>
      <XStack gap={12} flexWrap="wrap" justifyContent="center">
        <ForYouCard
          href="https://picsum.photos/400/600?random=12"
          fill="#2ecc71"
        />
        <ForYouCard
          href="https://picsum.photos/400/600?random=13"
          fill="#f39c12"
        />
      </XStack>
    </YStack>
  ),
  parameters: {
    docs: {
      description: {
        story:
          'Exemplo mostrando múltiplos ForYouCards dispostos em um layout de grade.',
      },
    },
  },
};

export const CardsCarousel: Story = {
  render: () => (
    <ScrollView horizontal showsHorizontalScrollIndicator={true}>
      <ForYouCard
        href="https://picsum.photos/400/600?random=20"
        fill="#8e44ad"
      />
      <ForYouCard
        href="https://picsum.photos/400/600?random=21"
        fill="#e67e22"
      />
      <ForYouCard
        href="https://picsum.photos/400/600?random=22"
        fill="#1abc9c"
      />
      <ForYouCard
        href="https://picsum.photos/400/600?random=23"
        fill="#34495e"
      />
    </ScrollView>
  ),
  parameters: {
    docs: {
      description: {
        story:
          'Exemplo mostrando um carousel de ForYouCards dispostos em um layout horizontal',
      },
    },
  },
};
