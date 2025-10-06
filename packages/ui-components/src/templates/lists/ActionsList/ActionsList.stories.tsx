import type { Meta, StoryObj } from '@storybook/react';
import React from 'react';
import { View } from 'react-native';
import { ActionsList } from './ActionsList';
import type { ActionsListProps } from './ActionsList.model';
import { ListHeading } from '../../../components/lists/ListHeading';
import { SegmentedButton } from '../../../components/buttons/SegmentedButton';
import { ListItem } from '../../../components/lists/ListItem';
import { ListFooter } from '../../../components/lists/ListFooter';
import Switch from '../../../components/forms/Switch';
import { IconButton } from '../../../components/buttons/IconButton';
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
Template que combina ListHeading, SegmentedButton, List e ListFooter para criar uma interface
de ações com cabeçalho, controle segmentado, lista de itens de ação e rodapé.

## Como usar

\`\`\`tsx
import { ActionsList, ListHeading, SegmentedButton, ListItem, ListFooter } from '@superapp-caixa/dsc-library';
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
  <ListFooter
    labelLeft="Total de ações"
    textLeft="2"
    labelRight="Última operação"
    textRight="Hoje"
  />
</ActionsList>
\`\`\`

## Características

- **Cabeçalho configurável**: Suporte a título simples, com botão ou ícone
- **Controle segmentado**: Filtros ou categorias para organizar as ações
- **Lista flexível**: Aceita qualquer quantidade de ListItem como filhos
- **Rodapé informativo**: Exibe informações complementares sobre as ações
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
  <ListFooter
    labelLeft="Total de ações"
    textLeft="3"
    labelRight="Disponível 24h"
    textRight="Todos os dias"
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
        'Elementos filhos incluindo ListHeading, SegmentedButton, ListItems e ListFooter',
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
        <ListFooter
          labelLeft="Total de ações"
          textLeft="3"
          labelRight="Disponível 24h"
          textRight="Todos os dias"
        />
      </>
    ),
  },
};
