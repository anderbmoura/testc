import type { Meta, StoryObj } from '@storybook/react';
import { TileButton } from './TileButton';

import { View } from 'tamagui';
import {
  Home,
  Settings,
  CreditCard,
  User,
  Bell,
  Heart,
  Lock,
  Phone,
  Car,
  LightBulb,
} from 'iconoir-react-native';

const meta: Meta<typeof TileButton> = {
  title: 'Componentes/Buttons/TileButton',
  component: TileButton,
  parameters: {
    layout: 'centered',
    docs: {
      description: {
        component: `
Botão em formato de tile (bloco) que combina ícone e texto, ideal para menus principais e ações destacadas.

## Características

- **Ícone + Label**: Exibe um ícone acima de um texto descritivo
- **Flexível**: Suporte a flexGrow para ocupar espaço disponível
- **Cores fixas**: Utiliza cores que não mudam de acordo com o tema do aparelho para ícone, texto e background
- **Acessível**: Suporte completo para acessibilidade

## Como usar

\`\`\`tsx
import { TileButton } from '@superapp-caixa/dsc-library';
import { Home } from 'iconoir-react-native';

// Exemplo básico
<TileButton 
  label="Início"
  iconSlot={Home}
  onPress={() => console.log('Início pressionado')}
/>

// Exemplo com flexGrow
<TileButton 
  label="Expandido"
  iconSlot={CreditCard}
  flexGrow={1}
  onPress={() => console.log('Expandido')}
/>
\`\`\`
        `,
      },
    },
  },
  tags: ['autodocs'],
  render: args => (
    <View width={200} maxHeight={400} flexGrow={1} flexDirection="column">
      <TileButton {...args} />
    </View>
  ),
  argTypes: {
    label: {
      description: 'Texto exibido abaixo do ícone',
      control: { type: 'text' },
      table: {
        type: { summary: 'string' },
      },
    },
    iconSlot: {
      description: 'Ícone exibido no botão (componente React)',
      control: { type: 'select' },
      options: [
        'Home',
        'Settings',
        'CreditCard',
        'User',
        'Bell',
        'Heart',
        'Lock',
        'Phone',
        'Car',
        'LightBulb',
      ],
      mapping: {
        Home,
        Settings,
        CreditCard,
        User,
        Bell,
        Heart,
        Lock,
        Phone,
        Car,
        LightBulb,
      },
      table: {
        type: { summary: 'React.ElementType | React.ReactElement' },
      },
    },
    onPress: {
      description: 'Callback executado ao pressionar o botão',
      action: 'onPress',
      table: {
        type: { summary: '() => void' },
      },
    },
    flexGrow: {
      description: 'Controla a propriedade flexGrow do botão',
      control: { type: 'select' },
      options: [undefined, 1],
      table: {
        type: { summary: 'undefined' },
      },
    },
    useFixedColors: {
      description:
        'Define se o componente deve utilizar cores fixas que não mudam de acordo com o tema do aparelho. Por padrão, o componente respeita o tema.',
      control: { type: 'boolean' },
      table: {
        type: { summary: 'boolean' },
        defaultValue: { summary: 'false' },
      },
    },
  },
};

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {
    label: 'Início',
    iconSlot: Home,
    flexGrow: 0,
  },
};

export const WithFlexGrow: Story = {
  name: 'Com FlexGrow',
  args: {
    label: 'Expandido',
    iconSlot: CreditCard,
    flexGrow: 1,
  },
  decorators: [
    Story => (
      <View
        padding="$medium"
        minWidth={328}
        minHeight={256}
        flexDirection="column"
        justifyContent="center"
        alignItems="center"
      >
        <Story />
      </View>
    ),
  ],
};

export const DifferentIcons: Story = {
  name: 'Diferentes Ícones',
  decorators: [
    () => (
      <View flexDirection="row" gap="$small" width={500}>
        <TileButton
          label="Cartão"
          iconSlot={CreditCard}
          onPress={() => console.log('Cartão')}
          flexGrow={1}
        />
        <TileButton
          label="Favoritos"
          iconSlot={Heart}
          onPress={() => console.log('Favoritos')}
          flexGrow={1}
        />
        <TileButton
          label="Notificações"
          iconSlot={Bell}
          onPress={() => console.log('Notificações')}
          flexGrow={1}
        />
      </View>
    ),
  ],
};
