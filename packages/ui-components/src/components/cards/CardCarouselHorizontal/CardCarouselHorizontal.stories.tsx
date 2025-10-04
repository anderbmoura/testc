import type { Meta, StoryObj } from '@storybook/react';
import { CardCarouselHorizontal } from './CardCarouselHorizontal';
import type { CardCarouselHorizontalProps } from './CardCarouselHorizontal.model';
import { YStack } from 'tamagui';
import { BodyStandard } from '../../data-display/Typography';

const meta: Meta<CardCarouselHorizontalProps> = {
  title: 'Componentes/Cards/CardCarouselHorizontal',
  component: CardCarouselHorizontal,
  parameters: {
    layout: 'centered',
    docs: {
      description: {
        component: `
CardCarouselHorizontal é um componente para exibir informações com área de slot customizável.
Suporta três variantes de tema (neutral, highlight, accent) e estados interativos quando uma ação é fornecida.

## Características

- **Texto à esquerda**: Título e descrição com quebra de linha automática
- **Estados interativos**: Hover, Pressed e Focus quando onPress é fornecido
- **Três temas**: neutral, highlight e accent

## Uso Básico

\`\`\`tsx
import { CardCarouselHorizontal } from '@superapp-caixa/dsc-library';

// Sem interação
<CardCarouselHorizontal
  theme="highlight"
  title="Título do Card"
  description="Descrição opcional"
>
  <Icon size={48} />
</CardCarouselHorizontal>

// Com interação
<CardCarouselHorizontal
  theme="accent"
  title="Card Interativo"
  onPress={() => console.log('Pressed!')}
>
  <Button>Ação</Button>
</CardCarouselHorizontal>
\`\`\`
        `,
      },
    },
  },
  argTypes: {
    theme: {
      control: 'select',
      options: ['neutral', 'highlight', 'accent'],
      description: 'Variação de tema do componente',
      table: {
        type: { summary: "'neutral' | 'highlight' | 'accent'" },
        defaultValue: { summary: "'neutral'" },
      },
    },
    title: {
      control: 'text',
      description: 'Título do card',
      table: {
        type: { summary: 'string' },
      },
    },
    description: {
      control: 'text',
      description: 'Descrição opcional',
      table: {
        type: { summary: 'string' },
      },
    },
    children: {
      control: false,
      description: 'Slot para conteúdo customizado',
      table: {
        type: { summary: 'React.ReactNode' },
      },
    },
    onPress: {
      action: 'pressed',
      description: 'Callback executado quando o card é pressionado',
      table: {
        type: { summary: '() => void' },
      },
    },
    testID: {
      control: false,
      table: {
        disable: true,
      },
    },
  },
  tags: ['autodocs'],
};

export default meta;

type Story = StoryObj<CardCarouselHorizontalProps>;

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

export const Default: Story = {
  args: {
    theme: 'neutral',
    title: 'Cartões disponíveis',
    description:
      'Você tem 3 cartões ativos em sua conta com diferentes limites',
  },
  render: args => (
    <CardCarouselHorizontal {...args}>
      <SlotContent />
    </CardCarouselHorizontal>
  ),
};
