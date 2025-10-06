import type { Meta, StoryObj } from '@storybook/react';
import React from 'react';
import { View } from 'tamagui';
import { Home, ArrowRight } from 'iconoir-react-native';
import { ListItem } from './ListItem';
import { useTransformIcon } from '../../../utils';
import Switch from '../../forms/Switch';
import BadgeText from '../../data-display/BadgeText';

const meta: Meta<typeof ListItem> = {
  title: 'Componentes/Lists/ListItem',
  component: ListItem,
  parameters: {
    layout: 'padded',
    docs: {
      description: {
        component: `
Item de lista flexível que suporta slots personalizáveis, múltiplos textos e labels em diferentes posições, badge e separator opcional.

## Como usar

\`\`\`tsx
import { ListItem } from '@superapp-caixa/dsc-library';

// Exemplo básico
<ListItem
  labelTopLeft="Nome"
  textOnLeft="João Silva"
  onPress={() => console.log('Pressionado')}
/>

// Exemplo completo
<ListItem
  leftSlot={<Avatar src="avatar.jpg" />}
  labelTopLeft="Nome"
  labelTopRight="Online"
  textOnLeft="João Silva"
  textOnRight="Manager"
  labelBottomLeft="Último acesso"
  labelBottomRight="Agora"
  rightSlot={<Switch checked={true} />}
  badge={<BadgeText>5</BadgeText>}
  separator
  onPress={() => console.log('Item pressionado')}
/>

// Lista de itens
{data.map(item => (
  <ListItem
    key={item.id}
    leftSlot={<Avatar src={item.avatar} />}}
    labelTopLeft="Nome"
    textOnLeft={item.name}
    labelBottomLeft="Status"
    separator
    onPress={() => handlePress(item)}
  />
))}
\`\`\`
        `,
      },
      source: {
        transform: (_: string, { args }: any) => {
          const props = [
            args.labelTopLeft && `labelTopLeft="${args.labelTopLeft}"`,
            args.labelTopRight && `labelTopRight="${args.labelTopRight}"`,
            args.textOnLeft && `textOnLeft="${args.textOnLeft}"`,
            args.textOnRight && `textOnRight="${args.textOnRight}"`,
            args.labelBottomLeft && `labelBottomLeft="${args.labelBottomLeft}"`,
            args.labelBottomRight &&
              `labelBottomRight="${args.labelBottomRight}"`,
            args.leftSlot && `leftSlot={<Home />}`,
            args.rightSlot && `rightSlot={<ArrowRight />}`,
            args.badge && `badge={<BadgeText>5</BadgeText>}`,
            args.separator && `separator`,
            args.disabled && `disabled`,
            args.onPress && `onPress={() => console.log('Pressionado')}`,
          ]
            .filter(Boolean)
            .join('\n  ');

          return `<ListItem
  ${props}
/>`;
        },
        state: 'open',
        excludeDecorators: true,
      },
    },
  },
  tags: ['autodocs'],
  render: args => {
    const transformIcon = useTransformIcon();
    const HomeIcon = transformIcon(Home, 24, '$color9');
    const ArrowIcon = transformIcon(ArrowRight, 20, '$color9');

    // Converter controles boolean para objetos slot reais
    const props: any = { ...args };
    delete props.leftSlot;
    delete props.rightSlot;
    delete props.badge;

    if (args.leftSlot) {
      props.leftSlot = HomeIcon;
    }

    if (args.rightSlot) {
      props.rightSlot = ArrowIcon;
    }

    if (args.badge) {
      props.badge = <BadgeText>5</BadgeText>;
    }

    return (
      <View width={350}>
        <ListItem {...props} />
      </View>
    );
  },
  argTypes: {
    labelTopLeft: {
      description: 'Label posicionado no topo à esquerda',
      control: 'text',
      table: {
        type: { summary: 'string' },
        defaultValue: { summary: 'undefined' },
      },
    },
    labelTopRight: {
      description: 'Label posicionado no topo à direita',
      control: 'text',
      table: {
        type: { summary: 'string' },
        defaultValue: { summary: 'undefined' },
      },
    },
    textOnLeft: {
      description: 'Texto principal posicionado à esquerda',
      control: 'text',
      table: {
        type: { summary: 'string' },
        defaultValue: { summary: 'undefined' },
      },
    },
    textOnRight: {
      description: 'Texto principal posicionado à direita',
      control: 'text',
      table: {
        type: { summary: 'string' },
        defaultValue: { summary: 'undefined' },
      },
    },
    labelBottomLeft: {
      description: 'Label posicionado na parte inferior à esquerda',
      control: 'text',
      table: {
        type: { summary: 'string' },
        defaultValue: { summary: 'undefined' },
      },
    },
    labelBottomRight: {
      description: 'Label posicionado na parte inferior à direita',
      control: 'text',
      table: {
        type: { summary: 'string' },
        defaultValue: { summary: 'undefined' },
      },
    },
    leftSlot: {
      description: 'Slot esquerdo - aceita qualquer componente React',
      control: 'boolean',
      table: {
        type: { summary: 'ReactNode' },
        defaultValue: { summary: 'undefined' },
      },
    },
    rightSlot: {
      description: 'Slot direito - aceita qualquer componente React',
      control: 'boolean',
      table: {
        type: { summary: 'ReactNode' },
        defaultValue: { summary: 'undefined' },
      },
    },
    badge: {
      description: 'Badge a ser exibido - deve ser um componente BadgeText',
      control: 'boolean',
      table: {
        type: { summary: 'ReactElement<typeof BadgeText>' },
        defaultValue: { summary: 'undefined' },
      },
    },
    separator: {
      description: 'Define se deve exibir um separator abaixo do item',
      control: 'boolean',
      table: {
        type: { summary: 'boolean' },
        defaultValue: { summary: 'false' },
      },
    },
    disabled: {
      description: 'Estado desabilitado do componente',
      control: 'boolean',
      table: {
        type: { summary: 'boolean' },
        defaultValue: { summary: 'false' },
      },
    },
    onPress: {
      description: 'Callback executado ao pressionar o item',
      control: false,
      table: {
        type: { summary: '() => void' },
        defaultValue: { summary: 'undefined' },
      },
    },
  },
};

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {
    labelTopLeft: 'Nome',
    textOnLeft: 'João Silva',
    onPress: () => console.log('Item pressionado'),
  },
};

export const ComBadge: Story = {
  render: () => {
    const transformIcon = useTransformIcon();
    const HomeIcon = transformIcon(Home, 24, '$color9');
    const ArrowIcon = transformIcon(ArrowRight, 20, '$color9');

    return (
      <View width={350}>
        <ListItem
          leftSlot={HomeIcon}
          textOnLeft="Mensagens"
          labelBottomLeft="Últimas conversas"
          badge={<BadgeText>5</BadgeText>}
          rightSlot={ArrowIcon}
          onPress={() => console.log('Mensagens abertas')}
        />
      </View>
    );
  },
  parameters: {
    docs: {
      source: {
        code: `<ListItem
  leftSlot={<Home />}
  textOnLeft="Mensagens"
  labelBottomLeft="Últimas conversas"
  badge={<BadgeText>5</BadgeText>}
  rightSlot={<ArrowRight />}
  onPress={() => console.log('Mensagens abertas')}
/>`,
      },
    },
  },
};

export const ComSwitch: Story = {
  render: () => {
    const [checked, setChecked] = React.useState(false);
    const transformIcon = useTransformIcon();
    const HomeIcon = transformIcon(Home, 24, '$color9');

    return (
      <View width={350}>
        <ListItem
          leftSlot={HomeIcon}
          labelTopLeft="Configuração"
          textOnLeft="Notificações push"
          labelBottomLeft="Receber alertas"
          rightSlot={<Switch checked={checked} onCheckedChange={setChecked} />}
          separator
          onPress={() => setChecked(!checked)}
        />
      </View>
    );
  },
  parameters: {
    docs: {
      source: {
        code: `const [checked, setChecked] = React.useState(false);

<ListItem
  leftSlot={<Home />}
  labelTopLeft="Configuração"
  textOnLeft="Notificações push"
  labelBottomLeft="Receber alertas"
  rightSlot={(
    <Switch 
      checked={checked} 
      onCheckedChange={setChecked}
    />
  )}
  separator
  onPress={() => setChecked(!checked)}
/>`,
      },
    },
  },
};
