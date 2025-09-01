import type { Meta, StoryObj } from '@storybook/react';
import { ExtractList } from './Extract-List';
import { mockData } from './mock-example';

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
