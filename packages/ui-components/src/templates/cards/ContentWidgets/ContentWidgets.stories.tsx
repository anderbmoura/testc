import type { Meta, StoryObj } from '@storybook/react';
import React from 'react';
import { View } from 'react-native';
import { ContentWidgets } from './ContentWidgets';
import type { ContentWidgetsProps } from './ContentWidgets.model';
import { WidgetRow } from '../WidgetRow';
import { CardWidget } from '../../../components/CardWidget';
import { CardWidgetFooter } from '../../../components/CardWidgetFooter';
import {
  StatsUpSquare,
  StatsDownSquare,
  CreditCard,
  Wallet,
  ArrowUp,
  ArrowDown,
  Clock,
  Calendar,
  Percentage,
  DollarCircle,
} from 'iconoir-react-native';

const meta: Meta<ContentWidgetsProps> = {
  title: 'Templates/Cards/ContentWidgets',
  component: ContentWidgets,
  parameters: {
    layout: 'centered',
    docs: {
      description: {
        component: `
Template que organiza widgets com título, botão de ação e lista de WidgetRow organizados verticalmente.
Título e botão de ação são opcionais e podem ser usados independentemente.

## Como usar

\`\`\`tsx
import { ContentWidgets, WidgetRow, CardWidget, CardWidgetFooter } from '@superapp-caixa/dsc-library';

<ContentWidgets 
  title="Meus Cartões" 
  buttonActionName="Ver todos"
  onButtonAction={() => console.log('Ação executada')}
>
  <WidgetRow>
    <CardWidget topLabel="Saldo" mainLabel="R$ 1.234,56" variant="highlight">
      <CardWidgetFooter label="Disponível" value="Hoje" variant="neutral" />
    </CardWidget>
    <CardWidget topLabel="Limite" mainLabel="R$ 5.000,00" variant="success">
      <CardWidgetFooter label="Total" value="Mensal" variant="success" />
    </CardWidget>
  </WidgetRow>
</ContentWidgets>
\`\`\`

## Características

- **Organização vertical**: WidgetRows são organizados em coluna com espaçamento consistente
- **Header opcional**: Título e botão de ação podem ser usados independentemente
- **Flexibilidade**: Aceita múltiplos WidgetRow como filhos
        `,
      },
      source: {
        transform: (_: string, { args }: { args: ContentWidgetsProps }) => {
          const props = [
            args.title && `title="${args.title}"`,
            args.buttonActionName &&
              `buttonActionName="${args.buttonActionName}"`,
            'onButtonAction={() => {}}',
          ]
            .filter(Boolean)
            .join('\n  ');

          const widgetRowsCode = `  <WidgetRow>
    <CardWidget
      topLabel="Saldo disponível"
      mainLabel="R$ 1.234,56"
      variant="highlight"
      icon={<StatsUpSquare width={24} height={24} />}
      onPress={() => console.log('Saldo pressionado')}
    >
      <CardWidgetFooter 
        label="Disponível" 
        value="Hoje" 
        variant="neutral" 
        icon={Clock}
      />
    </CardWidget>
    <CardWidget
      topLabel="Gastos do mês"
      mainLabel="R$ 2.345,67"
      variant="danger"
      icon={<StatsDownSquare width={24} height={24} />}
      onPress={() => console.log('Gastos pressionado')}
    >
      <CardWidgetFooter 
        label="Restante" 
        value="15 dias" 
        variant="danger" 
        icon={Calendar}
      />
    </CardWidget>
  </WidgetRow>
  <WidgetRow>
    <CardWidget
      topLabel="Limite cartão"
      mainLabel="R$ 5.000,00"
      variant="success"
      icon={<CreditCard width={24} height={24} />}
      onPress={() => console.log('Limite pressionado')}
    >
      <CardWidgetFooter 
        label="Disponível" 
        value="R$ 3.500,00" 
        variant="success" 
        icon={DollarCircle}
      />
    </CardWidget>
    <CardWidget
      topLabel="Investimentos"
      mainLabel="R$ 15.000,00"
      variant="highlight"
      icon={<Wallet width={24} height={24} />}
      onPress={() => console.log('Investimentos pressionado')}
    >
      <CardWidgetFooter 
        label="Rendimento" 
        value="+2,5%" 
        variant="success" 
        icon={Percentage}
      />
    </CardWidget>
  </WidgetRow>`;

          return `<ContentWidgets
  ${props}
>
${widgetRowsCode}
</ContentWidgets>`;
        },
        state: 'open',
        excludeDecorators: true,
      },
    },
  },
  tags: ['autodocs'],
  decorators: [
    Story => (
      <View style={{ width: 400 }}>
        <Story />
      </View>
    ),
  ],
  argTypes: {
    children: {
      control: false,
      table: { disable: true },
    },
    title: {
      control: 'text',
      description: 'Título opcional para o cabeçalho do ContentWidgets',
    },
    buttonActionName: {
      control: 'text',
      description: 'Texto opcional para o botão de ação no cabeçalho',
    },
    onButtonAction: {
      action: 'buttonPressed',
      description: 'Callback executado quando o botão de ação é pressionado',
    },
  },
};

export default meta;
type Story = StoryObj<typeof meta>;

const sampleWidgetRows = [
  <WidgetRow key="row1">
    <CardWidget
      topLabel="Saldo disponível"
      mainLabel="R$ 1.234,56"
      variant="highlight"
      icon={<StatsUpSquare width={24} height={24} />}
      onPress={() => console.log('Saldo pressionado')}
    >
      <CardWidgetFooter
        label="Disponível"
        value="Hoje"
        variant="neutral"
        icon={Clock}
      />
    </CardWidget>
    <CardWidget
      topLabel="Gastos do mês"
      mainLabel="R$ 2.345,67"
      variant="danger"
      icon={<StatsDownSquare width={24} height={24} />}
      onPress={() => console.log('Gastos pressionado')}
    >
      <CardWidgetFooter
        label="Restante"
        value="15 dias"
        variant="danger"
        icon={Calendar}
      />
    </CardWidget>
  </WidgetRow>,
  <WidgetRow key="row2">
    <CardWidget
      topLabel="Limite cartão"
      mainLabel="R$ 5.000,00"
      variant="success"
      icon={<CreditCard width={24} height={24} />}
      onPress={() => console.log('Limite pressionado')}
    >
      <CardWidgetFooter
        label="Disponível"
        value="R$ 3.500,00"
        variant="success"
        icon={DollarCircle}
      />
    </CardWidget>
    <CardWidget
      topLabel="Investimentos"
      mainLabel="R$ 15.000,00"
      variant="highlight"
      icon={<Wallet width={24} height={24} />}
      onPress={() => console.log('Investimentos pressionado')}
    >
      <CardWidgetFooter
        label="Rendimento"
        value="+2,5%"
        variant="success"
        icon={Percentage}
      />
    </CardWidget>
  </WidgetRow>,
  <WidgetRow key="row3">
    <CardWidget
      topLabel="Receitas"
      mainLabel="R$ 8.500,00"
      variant="success"
      icon={<ArrowUp width={24} height={24} />}
      onPress={() => console.log('Receitas pressionado')}
    >
      <CardWidgetFooter
        label="Este mês"
        value="+15%"
        variant="success"
        icon={ArrowUp}
      />
    </CardWidget>
    <CardWidget
      topLabel="Despesas"
      mainLabel="R$ 3.200,00"
      variant="danger"
      icon={<ArrowDown width={24} height={24} />}
      onPress={() => console.log('Despesas pressionado')}
    >
      <CardWidgetFooter
        label="Este mês"
        value="-8%"
        variant="danger"
        icon={ArrowDown}
      />
    </CardWidget>
  </WidgetRow>,
];

/**
 * Exemplo padrão com título, botão de ação e múltiplos WidgetRows.
 */
export const Default: Story = {
  args: {
    title: 'Resumo Financeiro',
    buttonActionName: 'Ver detalhes',
    children: sampleWidgetRows,
  },
};
