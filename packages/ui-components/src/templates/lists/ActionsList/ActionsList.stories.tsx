import type { Meta, StoryObj } from '@storybook/react';
import React from 'react';
import { View } from 'react-native';
import { ActionsList } from './ActionsList';
import type { ActionsListProps } from './ActionsList.model';
import { ListHeading } from '../../../components/ListHeading';
import { SegmentedButton } from '../../../components/SegmentedButton';
import { ListItem } from '../../../components/ListItem';
import Switch from '../../../components/Switch';
import { IconButton } from '../../../components/IconButton';
import {
  NavArrowRight,
  CreditCard,
  Send,
  DollarCircle,
} from 'iconoir-react-native';

const meta: Meta<ActionsListProps> = {
  title: 'Templates/Lists/ActionsList',
  component: ActionsList,
  parameters: {
    layout: 'centered',
    docs: {
      description: {
        component: `
Template que combina ListHeading, SegmentedButton e List para criar uma interface
de ações com cabeçalho, controle segmentado e lista de itens de ação.

## Como usar

\`\`\`tsx
import { ActionsList, ListHeading, SegmentedButton, ListItem } from '@superapp-caixa/dsc-library';
import { Send, CreditCard } from 'iconoir-react-native';

<ActionsList>
  <ListHeading
    title="Ações Rápidas"
    configuration="button"
    buttonText="Ver todas"
    onButtonPress={() => console.log('Ver todas')}
  />
  <SegmentedButton
    buttons={[
      { label: "Transferir", icon: <Send />, onPress: () => console.log('Transferir') },
      { label: "Pagar", icon: <CreditCard />, onPress: () => console.log('Pagar') }
    ]}
  />
  <ListItem
    textOnLeft="Transferir Dinheiro"
    onPress={() => console.log('Transferir')}
  />
  <ListItem
    textOnLeft="Pagar Conta"
    onPress={() => console.log('Pagar')}
  />
</ActionsList>
\`\`\`

## Características

- **Cabeçalho configurável**: Suporte a título simples, com botão ou ícone
- **Controle segmentado**: Filtros ou categorias para organizar as ações
- **Lista flexível**: Aceita qualquer quantidade de ListItem como filhos
- **Ordem garantida**: Renderização sempre na ordem correta independente da ordem dos children
        `,
      },
      source: {
        transform: (_: string, _args: { args: ActionsListProps }) => {
          return `<ActionsList>
  <ListHeading
    title="Ações Rápidas"
    configuration="button"
    buttonText="Ver todas"
    onButtonPress={() => console.log('Ver todas')}
  />
  <SegmentedButton
    buttons={[
      {
        label: 'Transferir',
        icon: <Send />,
        variant: 'highlight',
        onPress: () => console.log('Transferir'),
      },
      {
        label: 'Pagar',
        icon: <CreditCard />,
        variant: 'highlight',
        onPress: () => console.log('Pagar'),
      },
    ]}
  />
  <ListItem
    leftSlot={<IconButton icon={<Send />} size="small" type="plain" />}
    textOnLeft="Transferir Dinheiro"
    labelBottomLeft="Envie dinheiro para outras contas"
    rightSlot={<IconButton icon={<NavArrowRight />} size="small" />}
    onPress={() => console.log('Transferir')}
  />
  <ListItem
    leftSlot={<IconButton icon={<CreditCard />} size="small" type="plain" />}
    textOnLeft="Pagar Conta"
    labelBottomLeft="Quite suas contas em dia"
    rightSlot={<IconButton icon={<NavArrowRight />} size="small" />}
    onPress={() => console.log('Pagar')}
  />
  <ListItem
    leftSlot={<IconButton icon={<DollarCircle />} size="small" type="plain" />}
    textOnLeft="Consultar Saldo"
    labelBottomLeft="Veja seu saldo atualizado"
    rightSlot={<Switch checked={true} />}
    onPress={() => console.log('Consultar')}
  />
</ActionsList>`;
        },
        state: 'open',
        excludeDecorators: true,
      },
    },
  },
  tags: ['autodocs'],
  decorators: [
    Story => (
      <View style={{ maxWidth: 400, width: '100%' }}>
        <Story />
      </View>
    ),
  ],
  argTypes: {
    children: {
      description:
        'Elementos filhos incluindo ListHeading, SegmentedButton e ListItems',
      control: false,
      table: {
        type: {
          summary: 'ReactNode',
        },
      },
    },
  },
} as Meta<ActionsListProps>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {
    children: (
      <>
        <ListHeading
          title="Ações Rápidas"
          configuration="button"
          buttonText="Ver todas"
          onButtonPress={() => console.log('Ver todas')}
        />
        <SegmentedButton
          buttons={[
            {
              label: 'Transferir',
              icon: <Send />,
              variant: 'highlight',
              onPress: () => console.log('Transferir'),
            },
            {
              label: 'Pagar',
              icon: <CreditCard />,
              variant: 'highlight',
              onPress: () => console.log('Pagar'),
            },
          ]}
        />
        <ListItem
          leftSlot={<IconButton icon={<Send />} size="small" type="plain" />}
          textOnLeft="Transferir Dinheiro"
          labelBottomLeft="Envie dinheiro para outras contas"
          rightSlot={<IconButton icon={<NavArrowRight />} size="small" />}
          onPress={() => console.log('Transferir')}
        />
        <ListItem
          leftSlot={
            <IconButton icon={<CreditCard />} size="small" type="plain" />
          }
          textOnLeft="Pagar Conta"
          labelBottomLeft="Quite suas contas em dia"
          rightSlot={<IconButton icon={<NavArrowRight />} size="small" />}
          onPress={() => console.log('Pagar')}
        />
        <ListItem
          leftSlot={
            <IconButton icon={<DollarCircle />} size="small" type="plain" />
          }
          textOnLeft="Consultar Saldo"
          labelBottomLeft="Veja seu saldo atualizado"
          rightSlot={<Switch checked={true} />}
          onPress={() => console.log('Consultar')}
        />
      </>
    ),
  },
};
