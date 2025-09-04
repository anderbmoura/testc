import type { Meta, StoryObj } from '@storybook/react';
import { View } from 'tamagui';
import { Separator } from './Separator';
import type { SeparatorProps } from './Separator.model';

const meta: Meta<SeparatorProps> = {
  title: 'Componentes/Separator',
  component: Separator,
  parameters: {
    layout: 'centered',
    docs: {
      description: {
        component: `
Componente visual de separação que pode ser exibido horizontal ou verticalmente.
Segue as especificações do design system com valores fixos:
- Horizontal: largura 100%, altura 1px
- Vertical: largura 1px, altura 100px
- Opacidade: sempre 1
- Cor: sempre "$outlined1"

## Como usar

\`\`\`tsx
import { Separator } from '@superapp-caixa/dsc-library';

// Separator horizontal
<Separator direction="horizontal" />

// Separator vertical
<Separator direction="vertical" />
\`\`\`
`,
      },
      source: {
        transform: (_: string, { args }: any) => {
          return `<Separator direction="${args.direction}" />`;
        },
        state: 'open',
        excludeDecorators: true,
      },
    },
  },
  decorators: [
    (Story) => (
      <View 
        style={{ 
          padding: 20, 
          backgroundColor: '#f5f5f5',
          minWidth: 300,
          minHeight: 200,
          display: 'flex',
          justifyContent: 'center',
          alignItems: 'center',
        }}
      >
        <Story />
      </View>
    ),
  ],
  tags: ['autodocs'],
  argTypes: {
    direction: {
      control: 'radio',
      options: ['horizontal', 'vertical'],
      description: 'Direção do separador (horizontal ou vertical).',
      table: {
        type: { summary: "'horizontal' | 'vertical'" },
        defaultValue: { summary: "obrigatório" },
      },
    },
  },
};

export default meta;
type Story = StoryObj<SeparatorProps>;

/**
 * Separator horizontal seguindo as especificações do design system.
 * Largura: 100%, Altura: 1px, Cor: $outlined1, Opacidade: 1
 */
export const Horizontal: Story = {
  args: {
    direction: 'horizontal',
  },
};

/**
 * Separator vertical seguindo as especificações do design system.
 * Largura: 1px, Altura: 100px, Cor: $outlined1, Opacidade: 1
 */
export const Vertical: Story = {
  args: {
    direction: 'vertical',
  },
};
