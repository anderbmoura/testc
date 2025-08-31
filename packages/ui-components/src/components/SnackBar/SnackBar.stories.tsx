import type { Meta, StoryObj } from '@storybook/react';
import { useSnackBar, SnackBarProvider } from './index';
import Button from '../Button';
import { XStack } from 'tamagui';
import {
  CheckCircle,
  XmarkCircle,
  InfoCircle,
  WarningTriangle,
  Bell,
  Settings,
  Download,
  Upload,
} from 'iconoir-react-native';

type SnackBarColorOptions = 'neutral' | 'danger' | 'success';

interface InteractiveSnackBarDemoProps {
  color?: SnackBarColorOptions;
  icon?: any;
  title?: string;
  description?: string;
  duration?: number;
}

const iconMapping = {
  None: undefined,
  CheckCircle,
  XmarkCircle,
  InfoCircle,
  WarningTriangle,
  Bell,
  Settings,
  Download,
  Upload,
};

function InteractiveSnackBarDemo({
  color = 'neutral',
  icon = InfoCircle,
  title = 'Título do SnackBar',
  description = 'Este é um texto de descrição',
  duration = 5000,
}: InteractiveSnackBarDemoProps) {
  const { showSnackBar, hideSnackBar } = useSnackBar();

  const handleShowSnackBar = () => {
    showSnackBar({
      color,
      icon,
      title,
      description,
      duration,
    });
  };

  const handleHide = () => {
    hideSnackBar();
  };

  return (
    <XStack alignItems="center" space="$small">
      <Button onPress={handleShowSnackBar}>Mostrar SnackBar</Button>
      <Button type="outline" onPress={handleHide}>
        Esconder SnackBar
      </Button>
    </XStack>
  );
}

const meta: Meta<typeof InteractiveSnackBarDemo> = {
  title: 'Componentes/SnackBar',
  component: InteractiveSnackBarDemo,
  decorators: [
    Story => (
      <SnackBarProvider>
        <Story />
      </SnackBarProvider>
    ),
  ],
  parameters: {
    layout: 'centered',
    docs: {
      description: {
        component: `
Component para exibir notificações temporárias na aplicação.

## Configuração do Provider

\`\`\`tsx
import { SnackBarProvider } from '@superapp-caixa/dsc-library';

// Envolver a aplicação com o Provider
function App() {
  return (
    <SnackBarProvider>
      <YourComponent />
    </SnackBarProvider>
  );
}
\`\`\`

## Uso nos Componentes

\`\`\`tsx
import { useSnackBar } from '@superapp-caixa/dsc-library';

function YourComponent() {
  const { showSnackBar, hideSnackBar } = useSnackBar();

  const handleSuccess = () => {
    showSnackBar({
      title: 'Sucesso!',
      description: 'Operação realizada com sucesso',
      color: 'success',
      duration: 3000
    });
  };

  const handleHide = () => {
    hideSnackBar();
  };

  return (
    <>
      <Button onPress={handleSuccess}>Mostrar SnackBar</Button>
      <Button onPress={handleHide}>Esconder SnackBar</Button>
    </>
  );
}
\`\`\`
        `,
      },
    },
  },
  tags: ['autodocs'],
  argTypes: {
    color: {
      control: 'select',
      options: ['neutral', 'danger', 'success'],
      description: 'Cor do componente',
      table: {
        type: {
          summary: "'neutral' | 'danger' | 'success'",
        },
      },
    },
    icon: {
      control: 'select',
      options: Object.keys(iconMapping),
      mapping: iconMapping,
      description: 'Ícone exibido no componente',
      table: {
        type: {
          summary: 'iconoir',
        },
      },
    },
    title: {
      control: 'text',
      description: 'Título do componente',
    },
    description: {
      control: 'text',
      description: 'Texto de descrição opcional',
    },
    duration: {
      control: {
        type: 'number',
        min: 0,
        max: 15000,
        step: 500,
      },
      description:
        'Duração para fechamento automático em milissegundos (0 para desabilitar)',
    },
  },
};

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {
    color: 'neutral',
    icon: InfoCircle,
    title: 'Lorem ipsum',
    description: 'Lorem ipsum dolor sit amet, consectetur ipiscing elit.',
    duration: 5000,
  },
  parameters: {
    docs: {
      source: {
        transform: (_code: string, storyContext: any) => {
          const { args } = storyContext;
          const iconName =
            Object.keys(iconMapping).find(
              key => iconMapping[key as keyof typeof iconMapping] === args.icon
            ) || 'InfoCircle';

          return `showSnackBar({
  title: '${args.title}',
  description: '${args.description}',
  color: '${args.color}',
  icon: ${iconName},
  duration: ${args.duration}
});`;
        },
      },
    },
  },
};
