import type { Meta, StoryObj } from '@storybook/react';
import React from 'react';
import { View } from 'react-native';
import { OptionsList } from './OptionsList';
import type { OptionsListProps } from './OptionsList.model';
import { ListHeading } from '../../../components/lists/ListHeading';
import { SegmentedButton } from '../../../components/buttons/SegmentedButton';
import { ListItem } from '../../../components/lists/ListItem';
import { ListFooter } from '../../../components/lists/ListFooter';
import Switch from '../../../components/forms/Switch';
import { IconButton } from '../../../components/buttons/IconButton';
import {
  NavArrowRight,
  User,
  CreditCard,
  Bell,
  Shield,
  Settings,
} from 'iconoir-react-native';

const meta: Meta<OptionsListProps> = {
  title: 'Templates/Lists/OptionsList',
  component: OptionsList,
  parameters: {
    layout: 'centered',
    docs: {
      description: {
        component: `
Template que combina ListHeading, SegmentedButton, List e ListFooter para criar uma interface
de seleção de opções com cabeçalho, controle segmentado, lista de itens e rodapé.

## Como usar

\`\`\`tsx
import { OptionsList, ListHeading, SegmentedButton, ListItem, ListFooter } from '@superapp-caixa/dsc-library';
import { Settings, User } from 'iconoir-react-native';

<OptionsList>
  <ListHeading
    title="Configurações"
    configuration="button"
    buttonText="Ver todas"
    onButtonPress={() => console.log('Ver todas')}
  />
  <SegmentedButton
    buttons={[
      { label: "Geral", icon: <Settings />, onPress: () => console.log('Geral') },
      { label: "Perfil", icon: <User />, onPress: () => console.log('Perfil') }
    ]}
  />
  <ListItem
    textOnLeft="Notificações"
    onPress={() => console.log('Notificações')}
  />
  <ListItem
    textOnLeft="Privacidade"
    onPress={() => console.log('Privacidade')}
  />
  <ListFooter
    labelLeft="Total de itens"
    textLeft="2"
    labelRight="Última atualização"
    textRight="Hoje"
  />
</OptionsList>
\`\`\`

## Características

- **Cabeçalho configurável**: Suporte a título simples, com botão ou ícone
- **Controle segmentado**: Filtros ou categorias para organizar as opções
- **Lista flexível**: Aceita qualquer quantidade de ListItem como filhos
- **Rodapé informativo**: Exibe informações complementares sobre a lista
- **Ordem garantida**: Renderização sempre na ordem correta independente da ordem dos children
        `,
      },
      source: {
        transform: (_: string, _args: { args: OptionsListProps }) => {
          return `<OptionsList>
  <ListHeading
    title="Configurações"
    configuration="button"
    buttonText="Ver todas"
    onButtonPress={() => console.log('Ver todas')}
  />
  <SegmentedButton
    buttons={[
      {
        label: 'Geral',
        icon: <Settings />,
        variant: 'highlight',
        onPress: () => console.log('Geral'),
      },
      {
        label: 'Perfil',
        icon: <User />,
        variant: 'highlight',
        onPress: () => console.log('Perfil'),
      },
    ]}
  />
  <ListItem
    leftSlot={<IconButton icon={<Bell />} size="small" type="plain" />}
    textOnLeft="Notificações"
    labelBottomLeft="Configurar alertas e avisos"
    rightSlot={<Switch checked={true} />}
    onPress={() => console.log('Notificações')}
  />
  <ListItem
    leftSlot={<IconButton icon={<Shield />} size="small" type="plain" />}
    textOnLeft="Privacidade"
    labelBottomLeft="Configurações de proteção"
    rightSlot={<IconButton icon={<NavArrowRight />} size="small" />}
    onPress={() => console.log('Privacidade')}
  />
  <ListItem
    leftSlot={<IconButton icon={<CreditCard />} size="small" type="plain" />}
    textOnLeft="Pagamentos"
    labelBottomLeft="Gerenciar cartões e métodos"
    rightSlot={<IconButton icon={<NavArrowRight />} size="small" />}
    onPress={() => console.log('Pagamentos')}
  />
  <ListFooter
    labelLeft="Total de itens"
    textLeft="3"
    labelRight="Última atualização"
    textRight="Hoje"
  />
</OptionsList>`;
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
} as Meta<OptionsListProps>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {
    children: (
      <>
        <ListHeading
          title="Configurações"
          configuration="button"
          buttonText="Ver todas"
          onButtonPress={() => console.log('Ver todas')}
        />
        <SegmentedButton
          buttons={[
            {
              label: 'Geral',
              icon: <Settings />,
              variant: 'highlight',
              onPress: () => console.log('Geral'),
            },
            {
              label: 'Perfil',
              icon: <User />,
              variant: 'highlight',
              onPress: () => console.log('Perfil'),
            },
          ]}
        />
        <ListItem
          leftSlot={<IconButton icon={<Bell />} size="small" type="plain" />}
          textOnLeft="Notificações"
          labelBottomLeft="Configurar alertas e avisos"
          rightSlot={<Switch checked={true} />}
          onPress={() => console.log('Notificações')}
        />
        <ListItem
          leftSlot={<IconButton icon={<Shield />} size="small" type="plain" />}
          textOnLeft="Privacidade"
          labelBottomLeft="Configurações de proteção"
          rightSlot={<IconButton icon={<NavArrowRight />} size="small" />}
          onPress={() => console.log('Privacidade')}
        />
        <ListItem
          leftSlot={
            <IconButton icon={<CreditCard />} size="small" type="plain" />
          }
          textOnLeft="Pagamentos"
          labelBottomLeft="Gerenciar cartões e métodos"
          rightSlot={<IconButton icon={<NavArrowRight />} size="small" />}
          onPress={() => console.log('Pagamentos')}
        />
        <ListFooter
          labelLeft="Total de itens"
          textLeft="3"
          labelRight="Última atualização"
          textRight="Hoje"
        />
      </>
    ),
  },
};
