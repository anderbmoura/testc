import type { Meta, StoryObj } from '@storybook/react';
import { Toolbar } from './Toolbar';
import { ToolbarItem } from './components/ToolbarItem';
import { View } from 'tamagui';
import { Home, Settings, User } from 'iconoir-react-native';

const meta: Meta<React.ComponentProps<typeof Toolbar>> = {
  title: 'Componentes/Toolbar',
  component: Toolbar,
  parameters: {
    layout: 'centered',
    docs: {
      description: {
        component: `
Toolbar para organizar múltiplos ToolbarItems, ideal para barras de navegação e ações.

## Como usar

\`\`\`tsx
import { Toolbar, ToolbarItem } from '@superapp-caixa/dsc-library';
import { Home, Settings, User } from 'iconoir-react-native';

// Toolbar com 3 itens
<Toolbar>
  <ToolbarItem
    icon={<Home />}
    label="Home"
    onPress={() => navigateToHome()}
  />
  <ToolbarItem
    icon={<Settings />}
    label="Settings"
    onPress={() => navigateToSettings()}
  />
  <ToolbarItem
    icon={<User />}
    label="Profile"
    onPress={() => navigateToProfile()}
  />
</Toolbar>

// Toolbar com item desabilitado
<Toolbar>
  <ToolbarItem
    icon={<Home />}
    label="Home"
    onPress={() => navigateToHome()}
  />
  <ToolbarItem
    icon={<Settings />}
    label="Settings"
    disabled
  />
</Toolbar>
\`\`\`
        `,
      },
      source: {
        transform: () => {
          return `<Toolbar>
  <ToolbarItem
    icon={<Home />}
    label="Home"
    onPress={() => navigateToHome()}
  />
  <ToolbarItem
    icon={<Settings />}
    label="Settings"
    onPress={() => navigateToSettings()}
  />
  <ToolbarItem
    icon={<User />}
    label="Profile"
    onPress={() => navigateToProfile()}
  />
</Toolbar>`;
        },
        state: 'open',
        excludeDecorators: true,
      },
    },
  },
  tags: ['autodocs'],
  render: args => {
    return (
      <View width={400}>
        <Toolbar {...args} />
      </View>
    );
  },
  argTypes: {
    children: {
      table: {
        disable: true,
      },
    },
  },
};

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {
    children: [
      <ToolbarItem
        key="home"
        icon={<Home />}
        label="Home"
        onPress={() => console.log('Home pressed')}
      />,
      <ToolbarItem
        key="settings"
        icon={<Settings />}
        label="Settings"
        onPress={() => console.log('Settings pressed')}
      />,
      <ToolbarItem
        key="user"
        icon={<User />}
        label="Profile"
        onPress={() => console.log('Profile pressed')}
      />,
    ],
  },
};
