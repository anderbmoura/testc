import type { Meta, StoryObj } from '@storybook/react';
import { ExtractList } from './Extract-List';

const meta = {
  title: 'Componentes/ExtractList',
  component: ExtractList,
  parameters: {
    layout: 'centered',
    docs: {
      description: {
        component:
          'ExtractList exibe uma lista de extratos financeiros agrupados por data. Permite atualização dos dados e customização para testes automatizados.',
      },
    },
  },
  tags: ['autodocs'],
  argTypes: {
    data: {
      description:
        'Dados exibidos na lista de extrato. Deve ser um array de seções, cada uma com uma propriedade "date" e um array "data" de itens.',
      control: 'object',
    },
    testID: {
      control: 'text',
      description: 'Identificador para testes automatizados.',
    },
    refreshAction: {
      description: 'Função chamada ao solicitar atualização dos dados.',
    },
  },
} satisfies Meta<typeof ExtractList>;

export default meta;
type Story = StoryObj<typeof meta>;

export const mockData = [
  {
    date: 'Hoje',
    data: [
      {
        service: 'Pix Enviado',
        detail: 'Evelyn Almeida Souza',
        value: 'R$ -1000,00',
      },
      {
        service: 'Recebimento Pix',
        detail: 'Ryan Melo Cardoso',
        value: 'R$ 550,00',
      },
    ],
  },
  {
    date: 'Qui. 14 de ago.',
    data: [
      {
        service: 'Depósito',
        detail: 'Caixa Eletrônico',
        value: 'R$ 800,00',
      },
      {
        service: 'Resgate',
        detail: 'Fundo Fic Executivo',
        value: 'R$ 550,00',
      },
      {
        service: 'Seguro Vida',
        detail: 'Caixa Vida e Previdência',
        value: 'R$ -58,00',
      },
    ],
  },
  {
    date: 'Seg. 11 de ago.',
    data: [
      {
        service: 'Pagamento de Boleto',
        detail: 'P&G Com e Serviços',
        value: 'R$ -150,00',
      },
      {
        service: 'Compra',
        detail: 'DC Empreendimentos',
        value: 'R$ -1.345.550,00',
      },
    ],
  },
];

export const Basic: Story = {
  args: {
    data: mockData,
    testID: 'extract-list-basic',
  },
};

export const WithRefresh: Story = {
  args: {
    data: mockData,
    testID: 'extract-list-refresh',
    refreshAction: async () => {
      for (let i = 0; i < 2; i++) {
        await new Promise(resolve => setTimeout(resolve, 5000));
      }
    },
  },
};
