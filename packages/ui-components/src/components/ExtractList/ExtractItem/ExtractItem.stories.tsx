import type { Meta, StoryObj } from '@storybook/react-native';
import { ExtractItem } from './ExtractItem';
import { ExtractListVariant } from '../ExtractList.model';
import { ReceiveDollars, SendDollars, XmarkCircle } from 'iconoir-react-native';

const meta: Meta<typeof ExtractItem> = {
  title: 'Componentes/ExtractItem',
  component: ExtractItem,
  parameters: {
    layout: 'centered',
    docs: {
      description: {
        component:
          'O componente ExtractItem exibe um item de extrato financeiro, incluindo ícone, serviço, detalhe, valor e texto de suporte. Permite customização visual por variante (success, neutral, danger), exibição opcional de ícone e texto de suporte. Ideal para listas de movimentações financeiras, com integração ao Design System DSC.',
      },
    },
  },
  tags: ['autodocs'],
  argTypes: {
    item: {
      control: 'object',
      description:
        'Objeto do item do extrato: { value, service, detail, supportTextValue }',
    },
    variant: {
      control: 'radio',
      options: ['success', 'neutral', 'danger'],
      description: 'Variante visual do item (cor e ícone).',
    },
    showIcon: {
      control: 'boolean',
      description: 'Exibe o ícone do item.',
    },
    showSupportTextValue: {
      control: 'boolean',
      description: 'Exibe o texto de suporte do item.',
    },
  },
};

export default meta;
type Story = StoryObj<typeof ExtractItem>;

export const NeutroSemIcone: Story = {
  args: {
    item: {
      value: 'R$ 20,00',
      service: 'Depósito',
      detail: 'Agência 1234',
    },
    variant: 'neutral' as ExtractListVariant,
    showIcon: false,
    showSupportTextValue: true,
  },
  parameters: {
    docs: {
      description: {
        story: 'Exemplo de item de extrato neutro, sem ícone.',
      },
    },
  },
};

export const Success: Story = {
  args: {
    item: {
      value: 'R$ 100,00',
      service: 'Transferência recebida',
      detail: 'Banco XPTO',
      supportTextValue: 'Pix',
    },
    icon: ReceiveDollars,
    variant: 'success' as ExtractListVariant,
    showIcon: true,
    showSupportTextValue: true,
  },
  parameters: {
    docs: {
      description: {
        story:
          'Exemplo de item de extrato com variante de sucesso (entrada de valor).',
      },
    },
  },
};

export const Neutral: Story = {
  args: {
    item: {
      value: 'R$ 50,00',
      service: 'Pagamento realizado',
      detail: 'Mercado ABC',
      supportTextValue: 'Cartão',
    },
    icon: SendDollars,
    variant: 'neutral' as ExtractListVariant,
    showIcon: true,
    showSupportTextValue: true,
  },
  parameters: {
    docs: {
      description: {
        story:
          'Exemplo de item de extrato com variante de perigo (saída de valor).',
      },
    },
  },
};

export const NeutroSemTextoSuporte: Story = {
  args: {
    item: {
      value: 'R$ 10,00',
      service: 'Transferência enviada',
      detail: 'Banco XYZ',
    },
    icon: SendDollars,
    variant: 'neutral' as ExtractListVariant,
    showIcon: true,
    showSupportTextValue: false,
  },
  parameters: {
    docs: {
      description: {
        story: 'Exemplo de item de extrato neutro, sem texto de suporte.',
      },
    },
  },
};

export const Danger: Story = {
  args: {
    item: {
      value: 'R$ 10,00',
      service: 'Pagamento',
      detail: 'Fatura tag Caixa',
      supportTextValue: 'Cancelado',
    },
    icon: XmarkCircle,
    variant: 'danger' as ExtractListVariant,
    showIcon: true,
    showSupportTextValue: true,
  },
  parameters: {
    docs: {
      description: {
        story: 'Exemplo de item de extrato neutro, sem texto de suporte.',
      },
    },
  },
};
