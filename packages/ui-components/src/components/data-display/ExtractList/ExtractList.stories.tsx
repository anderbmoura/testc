import type { Meta, StoryObj } from '@storybook/react-native';
import { ExtractList } from './ExtractList';
import { mockData } from './mock-example';

const meta: Meta<typeof ExtractList> = {
  title: 'Componentes/Data Display/ExtractList',
  component: ExtractList,
  parameters: {
    layout: 'centered',
    docs: {
      description: {
        component: `
ExtractList exibe uma lista de extratos financeiros agrupados por data. Permite atualização dos dados e customização para testes automatizados. Ideal para mostrar movimentações financeiras, agrupadas por períodos, com suporte a ação de atualização assíncrona.

## Como usar

\`\`\`tsx
import { ExtractList } from '@superapp-caixa/dsc-library';

const mockData = [
  {
    date: 'Hoje',
    data: [
      {
        value: 'R$ 100,00',
        service: 'Transferência recebida',
        detail: 'Banco XPTO',
        supportTextValue: 'Pix',
      },
      {
        value: 'R$ -50,00',
        service: 'Pagamento realizado',
        detail: 'Mercado ABC',
        supportTextValue: 'Cartão',
      },
    ],
  },
  {
    date: 'Ontem',
    data: [
      {
        value: 'R$ 20,00',
        service: 'Depósito',
        detail: 'Agência 1234',
        supportTextValue: 'Dinheiro',
      },
    ],
  },
];

// Uso básico
<ExtractList
  data={mockData}
  testID="extract-list-basic"
/>

// Com ação de atualização assíncrona
<ExtractList
  data={mockData}
  testID="extract-list-refresh"
  refreshAction={async () => {
    // Sua lógica de atualização
    await fetch('/api/extract');
  }}
/>
\`\`\`
`,
      },
    },
  },
  tags: ['autodocs'],
  argTypes: {
    data: {
      control: 'object',
      description:
        'Array de seções, cada uma com propriedade "date" e array "data" de itens. Exemplo: [{ date: "Hoje", data: [{ service, detail, value }] }]',
    },
    testID: {
      control: 'text',
      description: 'Identificador para testes automatizados.',
    },
    refreshAction: {
      description:
        'Função chamada ao solicitar atualização dos dados. Deve retornar uma Promise.',
    },
  },
};

export default meta;
type Story = StoryObj<typeof ExtractList>;

export const Basic: Story = {
  args: {
    data: mockData,
    testID: 'extract-list-basic',
  },
  parameters: {
    docs: {
      description: {
        story: 'Lista básica de extratos agrupados por data.',
      },
    },
  },
};

export const WithRefresh: Story = {
  args: {
    data: mockData,
    testID: 'extract-list-refresh',
    refreshAction: async () => {
      await new Promise(resolve => setTimeout(resolve, 2000));
    },
  },
  parameters: {
    docs: {
      description: {
        story: 'Lista de extratos com ação de atualização assíncrona.',
      },
    },
  },
};
