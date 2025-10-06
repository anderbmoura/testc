import type { Meta, StoryObj } from '@storybook/react';
import { View } from '@tamagui/core';
import { Progress } from './Progress';
import type { ProgressProps } from './Progress.model';

const meta: Meta<ProgressProps> = {
  title: 'Componentes/Feedback/Progress',
  component: Progress,
  parameters: {
    layout: 'centered',
    docs: {
      description: {
        component: `
Componente para exibir progresso visual através de uma barra preenchida.

## Como usar

\`\`\`tsx
import { Progress } from '@superapp-caixa/dsc-library';

// Exemplo básico
<Progress 
  progress={50}
  size="medium"
/>

// Exemplo com diferentes tamanhos
<Progress 
  progress={75}
  size="large"
/>

// Exemplo com largura customizada
<Progress 
  progress={25}
  width={200}
/>
\`\`\`
        `,
      },
    },
  },
  tags: ['autodocs'],
  render: args => (
    <View width={400} padding="$medium">
      <Progress {...args} />
    </View>
  ),
  argTypes: {
    size: {
      description: 'Tamanho da altura do componente de progresso',
      control: { type: 'select' },
      options: ['smaller', 'small', 'medium', 'large', 'larger'],
      table: {
        type: { summary: 'ProgressSize' },
        defaultValue: { summary: 'medium' },
      },
    },
    progress: {
      description: 'Valor do progresso em porcentagem (0-100)',
      control: { type: 'range', min: 0, max: 100, step: 1 },
      table: {
        type: { summary: 'number' },
        defaultValue: { summary: '0' },
      },
    },
  },
};

export default meta;

type Story = StoryObj<ProgressProps>;

export const Default: Story = {
  args: {
    progress: 50,
    size: 'medium',
  },
};
