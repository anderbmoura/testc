import type { Meta, StoryObj } from '@storybook/react';
import React from 'react';
import { StatementList } from './StatementList';
import type { StatementListProps } from './StatementList.model';
import { ExtractItem } from '../../../components/ExtractList/ExtractItem/ExtractItem';
import { SendDollars, ReceiveDollars, Page } from 'iconoir-react-native';

const meta: Meta<StatementListProps> = {
  title: 'Templates/Lists/StatementList',
  component: StatementList,
  parameters: {
    layout: 'centered',
    docs: {
      description: {
        component: `
Template StatementList - Lista de extrato bancário que combina ListHeading, Separator e múltiplos ExtractItems
para exibir transações financeiras de forma organizada.

## Como usar

\`\`\`tsx
import { StatementList, ExtractItem } from '@superapp-caixa/dsc-library';
import { SendDollars, ReceiveDollars, CreditCard } from 'iconoir-react-native';

<StatementList title="Hoje">
  <ExtractItem
    item={{
      value: '-R$ 1.000,00',
      service: 'Pix enviado',
      detail: 'Evelyn Almeida Souza'
    }}
    iconVariant="danger"
    icon={<SendDollars width={24} height={24} />}
  />
  <ExtractItem
    item={{
      value: 'R$ 550,00',
      service: 'Pix recebido',
      detail: 'Ryan Melo Cardoso'
    }}
    iconVariant="success"
    icon={<ReceiveDollars width={24} height={24} />}
  />
</StatementList>
\`\`\`

## Características

- **Cabeçalho customizável**: Define título da seção com ListHeading
- **Separator opcional**: Controla exibição do separador após cabeçalho
- **Lista dinâmica**: Aceita ExtractItem components como children
        `,
      },
      source: {
        transform: (_: string, { args }: { args: StatementListProps }) => {
          const { title, showSeparator } = args;
          return `<StatementList
  title="${title}"${showSeparator !== undefined ? `\n  showSeparator={${showSeparator}}` : ''}
>
  <ExtractItem
    item={{
      value: '-R$ 1.000,00',
      service: 'Pix enviado',
      detail: 'Evelyn Almeida Souza'
    }}
    iconVariant="danger"
    icon={<SendDollars width={24} height={24} />}
  />
  <ExtractItem
    item={{
      value: 'R$ 550,00',
      service: 'Pix recebido',
      detail: 'Ryan Melo Cardoso'
    }}
    iconVariant="success"
    icon={<ReceiveDollars width={24} height={24} />}
  />
  <ExtractItem
    item={{
      value: '-R$ 149,99',
      service: 'Pagamento de boleto',
      detail: 'P&G Com e Serviços'
    }}
    iconVariant="danger"
    icon={<Page width={24} height={24} />}
  />
</StatementList>`;
        },
        state: 'open',
        excludeDecorators: true,
      },
    },
  },
  tags: ['autodocs'],
  render: args => <StatementList {...args} />,
  argTypes: {
    title: {
      description: 'Título do cabeçalho da lista (ex: "Hoje", "Ontem", etc.)',
      control: { type: 'text' },
      table: {
        type: { summary: 'string' },
      },
    },
    children: {
      description: 'Lista de componentes ExtractItem que serão renderizados',
      control: false,
      table: {
        type: {
          summary:
            'ReactElement<ExtractItemProps> | ReactElement<ExtractItemProps>[]',
        },
      },
    },
    showSeparator: {
      description: 'Define se deve exibir um separator após o cabeçalho',
      control: { type: 'boolean' },
      table: {
        type: { summary: 'boolean' },
        defaultValue: { summary: 'true' },
      },
    },
  },
} as Meta<StatementListProps>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {
    title: 'Hoje',
    children: [
      <ExtractItem
        key="1"
        item={{
          value: '-R$ 1.000,00',
          service: 'Pix enviado',
          detail: 'Evelyn Almeida Souza',
        }}
        iconVariant="danger"
        icon={React.createElement(SendDollars, { width: 24, height: 24 })}
      />,
      <ExtractItem
        key="2"
        item={{
          value: 'R$ 550,00',
          service: 'Pix recebido',
          detail: 'Ryan Melo Cardoso',
        }}
        iconVariant="success"
        icon={React.createElement(ReceiveDollars, { width: 24, height: 24 })}
      />,
      <ExtractItem
        key="3"
        item={{
          value: '-R$ 149,99',
          service: 'Pagamento de boleto',
          detail: 'P&G Com e Serviços',
        }}
        iconVariant="danger"
        icon={React.createElement(Page, { width: 24, height: 24 })}
      />,
    ],
    showSeparator: true,
  },
};
