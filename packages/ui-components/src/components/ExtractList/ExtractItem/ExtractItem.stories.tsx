import type { Meta, StoryObj } from '@storybook/react';
import { ExtractItem } from './ExtractItem';
import type { ExtractItemProps } from './ExtractItem.model';
import {
  SendDollars,
  ReceiveDollars,
  InfoCircle,
  WarningTriangle,
  Star,
  Heart,
  Settings,
  Home,
  User,
  Circle,
  Barcode,
  PiggyBank,
  GraphUp,
  CreditCard,
  XmarkCircle,
  UndoCircle,
} from 'iconoir-react-native';

const iconMapping = {
  None: undefined,
  SendDollars: <SendDollars />,
  ReceiveDollars: <ReceiveDollars />,
  InfoCircle: <InfoCircle />,
  WarningTriangle: <WarningTriangle />,
  Star: <Star />,
  Heart: <Heart />,
  Settings: <Settings />,
  Home: <Home />,
  User: <User />,
  Circle: <Circle />,
  barcode: <Barcode />,
  saveMoney: <PiggyBank />,
  investments: <GraphUp />,
  creditCard: <CreditCard />,
  cancellation: <XmarkCircle />,
  refund: <UndoCircle />,
};

const meta: Meta<ExtractItemProps> = {
  title: 'Componentes/ExtractItem',
  component: ExtractItem,
  parameters: {
    layout: 'centered',
    docs: {
      description: {
        component: `
Componente DSC ExtractItem para exibir um item de extrato financeiro, com ícone, serviço, detalhe, valor e texto de suporte. Permite customização visual por variante (success, neutral, danger) e ícone personalizado.

## Como usar

\`\`\`tsx
import { ExtractItem } from '@superapp-caixa/dsc-library';
import { SendDollars } from 'iconoir-react-native';

<ExtractItem
  item={{
    value: 'R$ 100,00',
    service: 'Transferência recebida',
    detail: 'Banco XPTO',
    supportTextValue: 'Pix',
  }}
  icon={<SendDollars />}
  variant="success"
  showIcon={true}
  showSupportTextValue={true}
/>
\`\`\`
        `,
      },
      source: {
        transform: (_: string, { args }: any) => {
          const getIconName = (iconKey: string) => {
            if (!iconKey || iconKey === 'None') return null;
            return iconKey;
          };

          const props = [
            args.variant && `variant="${args.variant}"`,
            args.icon &&
              args.icon !== 'None' &&
              `icon={<${getIconName(args.icon)} />}`,
            args.showIcon === true && 'showIcon={true}',
            args.showSupportTextValue === false &&
              'showSupportTextValue={false}',
          ]
            .filter(Boolean)
            .join(' ');

          return `<ExtractItem${props && ` ${props}`}
  item={{ value: "${args.item?.value || 'R$ 100,00'}", service: "${args.item?.service || 'Serviço'}", detail: "${args.item?.detail || 'Detalhe'}", supportTextValue: "${args.item?.supportTextValue || ''}" }}
/>`;
        },
        state: 'open',
        excludeDecorators: true,
      },
    },
  },
  tags: ['autodocs'],
  render: args => {
    return <ExtractItem {...args} icon={args.icon} />;
  },
  argTypes: {
    variant: {
      control: 'radio',
      options: ['success', 'neutral', 'danger'],
      description: 'Variante visual do item.',
    },
    item: {
      control: 'object',
      description: 'Objeto do item do extrato.',
    },
    icon: {
      control: 'select',
      options: Object.keys(iconMapping),
      description: 'Ícone personalizado exibido no item.',
      mapping: iconMapping,
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
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {
    variant: 'success',
    item: {
      value: 'R$ 100,00',
      service: 'Transferência recebida',
      detail: 'Banco XPTO',
      supportTextValue: 'Pix',
    },
    icon: 'SendDollars',
    showIcon: true,
    showSupportTextValue: true,
  },
};
