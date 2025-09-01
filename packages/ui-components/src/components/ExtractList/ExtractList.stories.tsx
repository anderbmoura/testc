import type { Meta, StoryObj } from '@storybook/react-native';
import { ExtractList } from './ExtractList';
import { mockData } from './mock-example';

const meta: Meta<typeof ExtractList> = {
  title: 'Componentes/ExtractList',
  component: ExtractList,
  parameters: {
    layout: 'centered',
    docs: {
      description: {
        component:
          'ExtractList exibe uma lista de extratos financeiros agrupados por data. Permite atualização dos dados e customização para testes automatizados. Ideal para mostrar movimentações financeiras, agrupadas por períodos, com suporte a ação de atualização assíncrona.',
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
