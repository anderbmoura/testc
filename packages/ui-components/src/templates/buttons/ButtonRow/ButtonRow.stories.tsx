import type { Meta, StoryObj } from '@storybook/react';
import { YStack } from 'tamagui';
import { ButtonRow } from './ButtonRow';
import type { ButtonRowProps } from './ButtonRow.model';
import IconButtonText from '../../../components/IconButtonText';
import { Home, Settings, User, HelpCircle } from 'iconoir-react-native';

const meta: Meta<ButtonRowProps> = {
  title: 'Templates/Buttons/ButtonRow',
  component: ButtonRow,
  parameters: {
    layout: 'centered',
    docs: {
      description: {
        component: `
Template para organizar componentes IconButtonText em linha horizontal com larguras iguais.

## Como usar

\`\`\`tsx
import { ButtonRow, IconButtonText } from '@superapp-caixa/dsc-library';
import { Home, Settings, User } from 'iconoir-react-native';

// Exemplo básico com 3 botões
<ButtonRow>
  <IconButtonText icon={<Home />} onPress={() => navigate('home')}>
    Início
  </IconButtonText>
  <IconButtonText icon={<Settings />} onPress={() => navigate('settings')}>
    Configurações
  </IconButtonText>
  <IconButtonText icon={<User />} onPress={() => navigate('profile')}>
    Perfil
  </IconButtonText>
</ButtonRow>
\`\`\`
        `,
      },
      source: {
        transform: (_: string, { _args }: { _args: ButtonRowProps }) => {
          return `<ButtonRow>
  <IconButtonText
    icon={<Home />}
    onPress={() => console.log('Home pressed')}
  >
    Início
  </IconButtonText>
  <IconButtonText
    icon={<HelpCircle />}
    badgeText="Novo"
    onPress={() => console.log('Profile pressed')}
  >
    Avisos
  </IconButtonText>
  <IconButtonText
    icon={<Settings />}
    onPress={() => console.log('Settings pressed')}
  >
    Configurações
  </IconButtonText>
  <IconButtonText
    icon={<User />}
    onPress={() => console.log('Profile pressed')}
  >
    Perfil
  </IconButtonText>
</ButtonRow>`;
        },
        state: 'open',
        excludeDecorators: true,
      },
    },
  },
  tags: ['autodocs'],
  render: args => (
    <YStack width={360}>
      <ButtonRow {...args} />
    </YStack>
  ),
  argTypes: {
    children: {
      description: 'Componentes IconButtonText a serem exibidos em linha',
      control: false,
      table: {
        type: { summary: 'React.ReactNode' },
      },
    },
  },
};

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {
    children: (
      <>
        <IconButtonText
          icon={<Home />}
          onPress={() => console.log('Home pressed')}
        >
          Início
        </IconButtonText>
        <IconButtonText
          icon={<HelpCircle />}
          badgeText="Novo"
          onPress={() => console.log('Profile pressed')}
        >
          Avisos
        </IconButtonText>
        <IconButtonText
          icon={<Settings />}
          onPress={() => console.log('Settings pressed')}
        >
          Configurações
        </IconButtonText>
        <IconButtonText
          icon={<User />}
          onPress={() => console.log('Profile pressed')}
        >
          Perfil
        </IconButtonText>
      </>
    ),
  },
};
