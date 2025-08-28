import type { Meta, StoryObj } from '@storybook/react';
import { View } from 'tamagui';
import { IconButton } from './IconButton';
import type { IconButtonProps } from './IconButton.model';
import { Heart, Settings, Download, Upload } from 'iconoir-react-native';

const iconMapping = {
  Heart: <Heart />,
  Settings: <Settings />,
  Download: <Download />,
  Upload: <Upload />,
};

const meta: Meta<IconButtonProps> = {
  title: 'Componentes/IconButton',
  component: IconButton,
  parameters: {
    layout: 'centered',
    docs: {
      description: {
        component: `
Componente para exibir botões circulares com apenas um ícone.

## Como usar

\`\`\`tsx
import { IconButton } from '@dsc/ui-components';
import { Heart, Settings, Download, Trash } from 'iconoir-react-native';

// Botão básico (plain, large)
<IconButton 
  icon={<Heart />} 
  onPress={() => console.log('Liked')}
  accessibilityLabel="Curtir"
/>

// Botão chromeless small
<IconButton 
  type="chromeless"
  size="small"
  icon={<Settings />}
  onPress={() => console.log('Settings')}
  accessibilityLabel="Configurações"
/>

// Botão outline standard
<IconButton 
  type="outline"
  size="standard"
  icon={<Download />}
  onPress={() => console.log('Download')}
  accessibilityLabel="Download"
/>

// Botão tiny desabilitado
<IconButton 
  size="tiny"
  icon={<Trash />}
  disabled
  accessibilityLabel="Excluir"
/>

// Botão em carregamento
<IconButton 
  icon={<Download />}
  loading
  accessibilityLabel="Baixando"
/>

// Botão danger
<IconButton 
  color="danger"
  icon={<Trash />}
  onPress={() => console.log('Delete')}
  accessibilityLabel="Excluir"
/>

// Botão white para fundo escuro
<IconButton 
  color="white"
  icon={<Settings />}
  onPress={() => console.log('Settings')}
  accessibilityLabel="Configurações"
/>
\`\`\`
        `,
      },
      source: {
        transform: (_: string, { args }: any) => {
          const getIconName = (iconKey: string) => {
            if (!iconKey || iconKey === 'None') return null;
            return iconKey;
          };

          const props = [
            args.type && args.type !== 'plain' && `type="${args.type}"`,
            args.size && args.size !== 'large' && `size="${args.size}"`,
            args.color && args.color !== 'highlight' && `color="${args.color}"`,
            args.icon &&
              args.icon !== 'None' &&
              `icon={<${getIconName(args.icon)} />}`,
            args.disabled && 'disabled',
            args.loading && 'loading',
            args.accessibilityLabel &&
              `accessibilityLabel="${args.accessibilityLabel}"`,
          ]
            .filter(Boolean)
            .join(' ');

          return `<IconButton${props && ` ${props}`} onPress={() => console.log('Pressed')} />`;
        },
        state: 'open',
        excludeDecorators: true,
      },
    },
  },
  tags: ['autodocs'],
  render: args => {
    const key = `icon-button-${Date.now()}`;
    const backgroundColor =
      args.color === 'white' ? '$onNeutral1' : 'transparent';

    return (
      <View
        backgroundColor={backgroundColor}
        padding="$medium"
        borderRadius="$small"
        alignItems="center"
        justifyContent="center"
      >
        <IconButton
          key={key}
          {...args}
          onPress={() => console.log('IconButton pressed')}
        />
      </View>
    );
  },
  argTypes: {
    type: {
      control: 'radio',
      options: ['plain', 'chromeless', 'outline'],
      description: 'Tipo visual que determina o estilo aplicado ao botão.',
      table: {
        type: { summary: "'plain' | 'chromeless' | 'outline'" },
        defaultValue: { summary: "'plain'" },
      },
    },
    size: {
      control: 'radio',
      options: ['large', 'standard', 'small', 'tiny'],
      description:
        'Tamanho do botão que determina as dimensões do container e do ícone.',
      table: {
        type: { summary: "'large' | 'standard' | 'small' | 'tiny'" },
        defaultValue: { summary: "'large'" },
      },
    },
    color: {
      control: 'radio',
      options: ['highlight', 'danger', 'white'],
      description: 'Cor do botão que determina o tema aplicado.',
      table: {
        type: { summary: "'highlight' | 'danger' | 'white'" },
        defaultValue: { summary: "'highlight'" },
      },
    },
    icon: {
      control: 'select',
      options: Object.keys(iconMapping),
      description: 'Ícone exibido no botão.',
      mapping: iconMapping,
      table: {
        type: {
          summary: 'React.ReactNode',
          detail: 'Componente de ícone do iconoir-react-native',
        },
        defaultValue: { summary: 'undefined' },
      },
    },
    disabled: {
      control: 'boolean',
      description: 'Define se o botão está desabilitado.',
      table: {
        type: { summary: 'boolean' },
        defaultValue: { summary: 'false' },
      },
    },
    loading: {
      control: 'boolean',
      description:
        'Define se o botão está em estado de carregamento. Quando true, exibe um Spinner no lugar do ícone.',
      table: {
        type: { summary: 'boolean' },
        defaultValue: { summary: 'false' },
      },
    },
    accessibilityLabel: {
      control: 'text',
      description: 'Label para leitores de tela.',
      table: {
        type: { summary: 'string' },
        defaultValue: { summary: 'undefined' },
      },
    },
    onPress: {
      table: {
        disable: true,
      },
    },
    touchableProps: {
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
    type: 'plain',
    size: 'large',
    color: 'highlight',
    icon: 'Heart',
    disabled: false,
    loading: false,
    accessibilityLabel: 'Botão de coração',
  },
};
