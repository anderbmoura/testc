import type { Meta, StoryObj } from '@storybook/react';
import { ValueSection } from './ValueSection';
import { View } from 'tamagui';

const meta: Meta<typeof ValueSection> = {
  title: 'Componentes/Value Section',
  component: ValueSection,
  parameters: {
    layout: 'centered',
    docs: {
      description: {
        component: `
Seção para exibição de valores, com suporte a rótulo, valor, moeda e botão de ação.

## Como usar

\`\`\`tsx
import { ValueSection } from '@superapp-caixa/dsc-library';

// Exemplo básico - com valor
<ValueSection 
  label="Saldo Disponível"
  value={1234.56}
  currency="R$"
  onButtonPress={() => console.log('Mais opções')}
/>

// Exemplo sem valor (exibe "Sem valor")
<ValueSection 
  label="Saldo Bloqueado"
/>

// Exemplo sem botão de ação
<ValueSection 
  label="Saldo Total"
  value={5000.00}
  showButton={false}
/>
\`\`\`
        `,
      },
      source: {
        transform: (_: string, { args }: any) => {
          const props = [
            args.label && `label="${args.label}"`,
            args.value && `value={${args.value}}`,
            args.currency &&
              args.currency !== 'R$' &&
              `currency="${args.currency}"`,
            args.size && args.size !== 'standard' && `size="${args.size}"`,
            args.showButton && `showButton={true}`,
            args.showButton && 'onButtonPress={() => {}}',
          ]
            .filter(Boolean)
            .join('\n  ');

          return `<ValueSection
  ${props}
/>`;
        },
        state: 'open',
        excludeDecorators: true,
      },
    },
  },
  tags: ['autodocs'],
  decorators: [
    Story => (
      <View width={400} padding="$small">
        <Story />
      </View>
    ),
  ],
  argTypes: {
    label: {
      description: 'Rótulo exibido acima do valor',
      control: { type: 'text' },
      table: {
        type: { summary: 'string' },
      },
    },
    value: {
      description: 'Valor principal exibido (número)',
      control: { type: 'number' },
      table: {
        type: { summary: 'number' },
      },
    },
    currency: {
      description: 'Moeda exibida ao lado do valor',
      control: { type: 'text' },
      table: {
        type: { summary: 'string' },
        defaultValue: { summary: 'R$' },
      },
    },
    size: {
      description: 'Tamanho do componente',
      control: { type: 'select' },
      options: ['standard', 'large'],
      table: {
        type: { summary: "'standard' | 'large'" },
        defaultValue: { summary: 'standard' },
      },
    },
    showButton: {
      description: 'Exibe botão de ação à direita',
      control: { type: 'boolean' },
      table: {
        type: { summary: 'boolean' },
        defaultValue: { summary: 'true' },
      },
    },
    onButtonPress: {
      description: 'Callback do botão de ação',
      action: 'onButtonPress',
      table: {
        type: { summary: '() => void' },
      },
    },
  },
};

export default meta;
type Story = StoryObj<typeof ValueSection>;

export const Default: Story = {
  args: {
    label: 'Saldo Disponível',
    value: 1234.56,
    currency: 'R$',
    size: 'standard',
    showButton: true,
  },
};
