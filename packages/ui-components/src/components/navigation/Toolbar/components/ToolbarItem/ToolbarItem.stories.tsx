import type { Meta, StoryObj } from '@storybook/react';
import { ToolbarItem } from './ToolbarItem';
import { View } from 'tamagui';
import { Home, Settings, User, Heart, Download } from 'iconoir-react-native';

const meta: Meta<React.ComponentProps<typeof ToolbarItem>> = {
  title: 'Componentes/Navigation/Toolbar/ToolbarItem',
  component: ToolbarItem,
  parameters: {
    layout: 'centered',
    docs: {
      description: {
        component: `
Item individual de uma toolbar com ícone e label.

## Como usar

\`\`\`tsx
import { ToolbarItem } from '@superapp-caixa/dsc-library';
import { Home, Settings } from 'iconoir-react-native';

// ToolbarItem básico
<ToolbarItem
  icon={<Home />}
  label="Home"
  onPress={() => navigateToHome()}
/>

// ToolbarItem desabilitado
<ToolbarItem
  icon={<Settings />}
  label="Settings"
  disabled
/>
\`\`\`
        `,
      },
      source: {
        transform: (_code: string, storyContext: any) => {
          const args = storyContext.args;
          const iconName = getIconName(args.icon);

          const props = [
            args.label && `label="${args.label}"`,
            iconName && `icon={<${iconName} />}`,
            args.disabled === true && 'disabled={true}',
          ]
            .filter(Boolean)
            .join('\n  ');

          return `<ToolbarItem
  ${props}
  onPress={() => console.log('ToolbarItem pressed')}
/>`;
        },
        state: 'open',
        excludeDecorators: true,
      },
    },
  },
  tags: ['autodocs'],
  render: args => {
    return (
      <View padding={32}>
        <ToolbarItem {...args} />
      </View>
    );
  },
  argTypes: {
    icon: {
      control: 'select',
      options: ['Home', 'Settings', 'User', 'Heart', 'Download'],
      description: 'Ícone a ser exibido no item.',
      table: {
        type: { summary: 'React.ReactNode' },
      },
      mapping: {
        Home: <Home />,
        Settings: <Settings />,
        User: <User />,
        Heart: <Heart />,
        Download: <Download />,
      },
    },
    label: {
      control: 'text',
      description: 'Texto exibido abaixo do ícone.',
      table: {
        type: { summary: 'string' },
      },
    },
    disabled: {
      control: 'boolean',
      description: 'Se o item está desabilitado.',
      table: {
        type: { summary: 'boolean' },
        defaultValue: { summary: 'false' },
      },
    },
    onPress: {
      action: 'pressed',
      description: 'Callback executado quando o item é pressionado.',
      table: {
        type: { summary: '() => void' },
      },
    },
  },
};

export default meta;
type Story = StoryObj<typeof meta>;

function getIconName(icon: any): string {
  if (!icon) return '';

  const iconMap: Record<string, string> = {
    Home: 'Home',
    Settings: 'Settings',
    User: 'User',
    Heart: 'Heart',
    Download: 'Download',
  };

  for (const [name] of Object.entries(iconMap)) {
    if (icon?.type?.name === name || icon?.name === name) {
      return name;
    }
  }

  return icon?.type?.displayName || icon?.displayName || 'Home';
}

export const Default: Story = {
  args: {
    icon: <Home />,
    label: 'Toolbar Item',
    disabled: false,
  },
};
