import type { Meta, StoryObj } from '@storybook/react';
import { YStack } from 'tamagui';
import { WidgetRow } from './WidgetRow';
import type { WidgetRowProps } from './WidgetRow.model';
import { CardWidget } from '../../../components/CardWidget';
import { CardWidgetFooter } from '../../../components/CardWidgetFooter';
import { StatsUpSquare, StatsDownSquare } from 'iconoir-react-native';

const meta: Meta<WidgetRowProps> = {
  title: 'Templates/Cards/WidgetRow',
  component: WidgetRow,
  parameters: {
    layout: 'centered',
    docs: {
      description: {
        component: `
Template para organizar exatamente 2 componentes CardWidget em linha horizontal com larguras iguais.

## Como usar

\`\`\`tsx
import { WidgetRow, CardWidget, CardWidgetFooter } from '@superapp-caixa/dsc-library';

<WidgetRow>
  <CardWidget topLabel="Saldo" mainLabel="R$ 1.234,56" variant="highlight">
    <CardWidgetFooter label="Disponível" value="Hoje" variant="neutral" />
  </CardWidget>
  <CardWidget topLabel="Limite" mainLabel="R$ 5.000,00" variant="success">
    <CardWidgetFooter label="Total" value="Mensal" variant="success" />
  </CardWidget>
</WidgetRow>
\`\`\`

## Características

- **Largura igual**: Ambos os widgets ocupam exatamente 50% da largura disponível
- **Gap consistente**: Espaçamento padrão (\`$nano\`) entre os widgets
- **Alinhamento**: Widgets se esticam verticalmente para manter altura uniforme
- **Validação**: Aceita apenas 2 CardWidget
        `,
      },
    },
  },
  tags: ['autodocs'],
  decorators: [
    Story => (
      <YStack padding="$medium" width={400}>
        <Story />
      </YStack>
    ),
  ],
  argTypes: {
    children: {
      table: {
        disable: true,
      },
    },
  },
};

export default meta;

type Story = StoryObj<typeof meta>;

/**
 * Exemplo padrão com dois widgets usando CardWidgetFooter.
 */
export const Default: Story = {
  args: {
    children: [
      <CardWidget
        key="saldo"
        topLabel="Saldo disponível"
        mainLabel="R$ 1.234,56"
        variant="highlight"
        icon={<StatsUpSquare width={24} height={24} />}
        onPress={() => console.log('Saldo pressionado')}
      >
        <CardWidgetFooter label="Disponível" value="Hoje" variant="neutral" />
      </CardWidget>,
      <CardWidget
        key="gastos"
        topLabel="Gastos do mês"
        mainLabel="R$ 2.345,67"
        variant="danger"
        icon={<StatsDownSquare width={24} height={24} />}
        onPress={() => console.log('Gastos pressionado')}
      >
        <CardWidgetFooter label="Restante" value="15 dias" variant="danger" />
      </CardWidget>,
    ],
  },
};
