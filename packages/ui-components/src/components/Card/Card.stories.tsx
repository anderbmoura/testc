import type { Meta, StoryObj } from '@storybook/react';
import { Card } from './Card';
import type { CardProps } from './Card.model';
import { YStack } from 'tamagui';
import { TitleStandard, BodySmall } from '../Typography';

const meta: Meta<CardProps> = {
  title: 'Componentes/Card',
  component: Card,
  parameters: {
    layout: 'centered',
    docs: {
      description: {
        component: `
Componente de card versátil para exibir conteúdo agrupado com diferentes estilos visuais.

## Uso Básico

\`\`\`tsx
import { Card } from '@superapp-caixa/dsc-library';

function ExampleCard() {
  return (
    <Card>
      <Text>Conteúdo do card</Text>
    </Card>
  );
}
\`\`\`

## Variantes Disponíveis

### Plain (Padrão)
Card com fundo preenchido, sem borda.

\`\`\`tsx
<Card type="plain">
  <Text>Card com fundo</Text>
</Card>
\`\`\`

### Outline
Card com borda e fundo transparente.

\`\`\`tsx
<Card type="outline">
  <Text>Card com borda</Text>
</Card>
\`\`\`

## Card Interativo

\`\`\`tsx
<Card onPress={() => console.log('Card clicado!')}>
  <Text>Card clicável</Text>
</Card>
\`\`\`

## Especificações de Design

- **Dimensões**: 312x132px (baseado no Figma)
- **Padding**: 16px
- **Border Radius**: 24px
- **Gap interno**: 16px
        `,
      },
    },
  },
  argTypes: {
    type: {
      control: { type: 'select' },
      options: ['outline', 'plain'],
      description: 'Variante visual do card',
      table: {
        type: {
          summary: "'outline' | 'plain'",
        },
        defaultValue: {
          summary: "'plain'",
        },
      },
    },
    children: {
      control: false,
      description: 'Conteúdo exibido dentro do card',
      table: {
        type: {
          summary: 'React.ReactNode',
        },
      },
    },
    onPress: {
      action: 'pressed',
      description: 'Callback executado quando o card é pressionado',
      table: {
        type: {
          summary: '() => void',
        },
      },
    },
  },
  tags: ['autodocs'],
};

export default meta;

type Story = StoryObj<CardProps>;

const SampleContent = () => (
  <YStack gap="$tiny" padding="$tiny">
    <TitleStandard color="$color12">Card Title</TitleStandard>
    <BodySmall color="$color11">
      This is sample content inside the card. You can put any React components
      here.
    </BodySmall>
  </YStack>
);

export const Default: Story = {
  args: {
    type: 'plain',
    children: <SampleContent />,
  },
  parameters: {
    docs: {
      source: {
        code: `<Card>
  <YStack gap="$tiny" padding="$tiny">
    <TitleStandard>Card Title</TitleStandard>
    <BodySmall>Card content goes here</BodySmall>
  </YStack>
</Card>`,
      },
    },
  },
};
