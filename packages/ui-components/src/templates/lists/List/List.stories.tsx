import type { Meta, StoryObj } from '@storybook/react';
import React from 'react';
import { List } from './List';
import type { ListProps } from './List.model';
import { ListItem } from '../../../components/lists/ListItem';
import Switch from '../../../components/forms/Switch';
import { IconButton } from '../../../components/buttons/IconButton';
import {
  NavArrowRight,
  User,
  CreditCard,
  Bell,
  Shield,
  HelpCircle,
} from 'iconoir-react-native';

const meta: Meta<ListProps> = {
  title: 'Templates/Lists/List',
  component: List,
  parameters: {
    layout: 'centered',
    docs: {
      description: {
        component: `
Template que organiza uma lista de componentes ListItem, aplicando automaticamente
separators a todos os itens exceto o último.

## Como usar

\`\`\`tsx
import { List, ListItem, Avatar, Switch, BadgeText } from '@superapp-caixa/dsc-library';

<List>
  <ListItem
    textOnLeft="Primeiro item"
    onPress={() => console.log('Item 1')}
  />
  <ListItem
    textOnLeft="Segundo item"
    onPress={() => console.log('Item 2')}
  />
  <ListItem
    textOnLeft="Último item (sem separator)"
    onPress={() => console.log('Item 3')}
  />
</List>
\`\`\`

## Características

- **Separators automáticos**: Aplica separators a todos os itens exceto o último
- **Flexibilidade**: Aceita qualquer quantidade de ListItem como filhos
- **Consistência**: Mantém o padrão visual da DSC Library
        `,
      },
      source: {
        transform: (_: string, _args: { args: ListProps }) => {
          return `<List>
  <ListItem
    labelTopLeft="Nome"
    textOnLeft="João Silva"
    labelBottomLeft="Ativo"
    rightSlot={<Switch checked={true} />}
    onPress={() => console.log('Usuário 1')}
  />
  <ListItem
    labelTopLeft="Nome"
    textOnLeft="Maria Santos"
    labelBottomLeft="Ativo"
    rightSlot={<Switch checked={false} />}
    onPress={() => console.log('Usuário 2')}
  />
  <ListItem
    labelTopLeft="Nome"
    textOnLeft="Carlos Lima"
    labelBottomLeft="Inativo"
    rightSlot={<IconButton icon={<NavArrowRight />} />}
    onPress={() => console.log('Usuário 3')}
  />
</List>`;
        },
        state: 'open',
        excludeDecorators: true,
      },
    },
  },
  tags: ['autodocs'],
  render: args => <List {...args} />,
  argTypes: {
    children: {
      description: 'Lista de componentes ListItem que serão renderizados',
      control: false,
      table: {
        type: {
          summary:
            'ReactElement<ListItemProps> | ReactElement<ListItemProps>[]',
        },
      },
    },
  },
} as Meta<ListProps>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {
    children: [
      <ListItem
        key="1"
        textOnLeft="Primeiro item"
        onPress={() => console.log('Item 1')}
      />,
      <ListItem
        key="2"
        textOnLeft="Segundo item"
        onPress={() => console.log('Item 2')}
      />,
      <ListItem
        key="3"
        textOnLeft="Terceiro item"
        onPress={() => console.log('Item 3')}
      />,
    ],
  },
};

export const Exemplo: Story = {
  args: {
    children: [
      <ListItem
        key="1"
        leftSlot={<IconButton icon={<User />} size="small" type="plain" />}
        textOnLeft="Perfil do usuário"
        labelBottomLeft="Gerenciar suas informações"
        rightSlot={<IconButton icon={<NavArrowRight />} size="small" />}
        onPress={() => console.log('Perfil')}
      />,
      <ListItem
        key="2"
        leftSlot={
          <IconButton icon={<CreditCard />} size="small" type="plain" />
        }
        textOnLeft="Cartões e pagamentos"
        labelBottomLeft="Adicionar ou remover cartões"
        rightSlot={<IconButton icon={<NavArrowRight />} size="small" />}
        onPress={() => console.log('Cartões')}
      />,
      <ListItem
        key="3"
        leftSlot={<IconButton icon={<Bell />} size="small" type="plain" />}
        textOnLeft="Notificações"
        labelBottomLeft="Gerenciar alertas e avisos"
        rightSlot={<Switch checked={true} />}
        onPress={() => console.log('Notificações')}
      />,
      <ListItem
        key="4"
        leftSlot={<IconButton icon={<Shield />} size="small" type="plain" />}
        textOnLeft="Privacidade e segurança"
        labelBottomLeft="Configurações de proteção"
        rightSlot={<IconButton icon={<NavArrowRight />} size="small" />}
        onPress={() => console.log('Segurança')}
      />,
      <ListItem
        key="5"
        leftSlot={
          <IconButton icon={<HelpCircle />} size="small" type="plain" />
        }
        textOnLeft="Ajuda e suporte"
        labelBottomLeft="Obter ajuda ou reportar problemas"
        rightSlot={<IconButton icon={<NavArrowRight />} size="small" />}
        onPress={() => console.log('Ajuda')}
      />,
    ],
  },
};
