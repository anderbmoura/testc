import type { Meta, StoryObj } from '@storybook/react';
import React from 'react';
import { View } from 'react-native';
import { OptionsList } from './OptionsList';
import type { OptionsListProps } from './OptionsList.model';
import { ListHeading } from '../../../components/ListHeading';
import { SegmentedButton } from '../../../components/SegmentedButton';
import { ListItem } from '../../../components/ListItem';
import Switch from '../../../components/Switch';
import { IconButton } from '../../../components/IconButton';
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
    layout: 'padded',
    docs: {
      description: {
        component: `
Template que combina ListHeading, SegmentedButton e List para criar uma interface
de seleção de opções com cabeçalho, controle segmentado e lista de itens.

## Como usar

\`\`\`tsx
import { OptionsList, ListHeading, SegmentedButton, ListItem } from '@superapp-caixa/dsc-library';
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
</OptionsList>
\`\`\`

## Características

- **Cabeçalho configurável**: Suporte a título simples, com botão ou ícone
- **Controle segmentado**: Filtros ou categorias para organizar as opções
- **Lista flexível**: Aceita qualquer quantidade de ListItem como filhos
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
        'Elementos filhos incluindo ListHeading, SegmentedButton e ListItems',
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

/**
 * Estado padrão do OptionsList com todos os elementos visíveis.
 */
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
      </>
    ),
  },
};
