import type { Meta, StoryObj } from '@storybook/react';
import {
  Bell,
  CheckCircle,
  Heart,
  Home,
  Mail,
  Settings,
  Star,
  User,
} from 'iconoir-react-native';
import React, { useState } from 'react';
import { Text, View, YStack } from 'tamagui';
import { Button } from '../Button/Button';
import { Sheet } from './Sheet';
import type { SheetProps } from './Sheet.model';

const iconMapping = {
  None: undefined,
  Home,
  Settings,
  User,
  Heart,
  Star,
  Bell,
  Mail,
  CheckCircle,
};

const meta: Meta<SheetProps> = {
  title: 'Componentes/Overlays/Sheet',
  component: Sheet,
  parameters: {
    layout: 'fullscreen',
    docs: {
      description: {
        component: `
O **Sheet** é um componente de modal bottom sheet que desliza a partir da parte inferior da tela. É ideal para exibir conteúdo adicional, formulários, ou opções sem sair do contexto atual.

### Características principais:
- **Snap Points**: Configurável para diferentes alturas (percentual ou absoluto)
- **Header personalizado**: Com ícone, título e botão de fechar
- **Scroll suportado**: Para conteúdo que excede a altura disponível
- **Animações suaves**: Transições fluidas de abertura e fechamento
- **Modal ou inline**: Pode ser usado como modal ou integrado na interface

### Casos de uso:
- Formulários de entrada rápida
- Menus de opções contextuais
- Detalhes expandidos de itens
- Filtros e configurações
- Confirmações e alertas expandidos
        `,
      },
      source: {
        transform: (_: string, { args }: { args: SheetProps }) => {
          const iconName = args.header?.icon
            ? Object.keys(iconMapping).find(
                key =>
                  iconMapping[key as keyof typeof iconMapping] ===
                  args.header?.icon
              ) || 'Home'
            : 'None';

          return `import { Sheet } from '@superapp/ui-components';
import { ${iconName !== 'None' ? iconName : 'Home'} } from 'iconoir-react-native';

function Example() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <>
      <Button onPress={() => setIsOpen(true)}>
        Abrir Sheet
      </Button>
      
      <Sheet
        open={isOpen}
        onOpenChange={setIsOpen}
        ${
          args.header
            ? `header={{
          ${args.header.icon ? `icon: <${iconName} />,` : ''}
          ${args.header.title ? `title: "${args.header.title}",` : ''}
        }}`
            : ''
        }
        ${args.scrollView ? `scrollView={${args.scrollView}}` : ''}
        ${
          args.snapPoints &&
          JSON.stringify(args.snapPoints) !== JSON.stringify([80, 50])
            ? `snapPoints={${JSON.stringify(args.snapPoints)}}`
            : ''
        }
        ${
          args.snapPointsMode && args.snapPointsMode !== 'percent'
            ? `snapPointsMode="${args.snapPointsMode}"`
            : ''
        }
        ${args.titleLeftAligned ? `titleLeftAligned={${args.titleLeftAligned}}` : ''}
      >
        <Text>Conteúdo do sheet aqui</Text>
      </Sheet>
    </>
  );
}`;
        },
      },
    },
  },
  argTypes: {
    open: {
      description: 'Controla se o sheet está aberto ou fechado',
      control: { type: 'boolean' },
      table: {
        type: { summary: 'boolean' },
        defaultValue: { summary: 'false' },
      },
    },
    onOpenChange: {
      description: 'Callback executado quando o estado de abertura muda',
      action: 'onOpenChange',
      table: {
        type: { summary: '(open: boolean) => void' },
      },
    },
    children: {
      description: 'Conteúdo do sheet',
      control: { type: 'text' },
      table: {
        type: { summary: 'ReactNode' },
      },
    },
    header: {
      description: 'Configuração do cabeçalho com ícone e título',
      control: { type: 'object' },
      table: {
        type: { summary: '{ icon?: ReactNode; title?: string }' },
      },
    },
    scrollView: {
      description: 'Habilita scroll para conteúdo que excede a altura',
      control: { type: 'boolean' },
      table: {
        type: { summary: 'boolean' },
        defaultValue: { summary: 'false' },
      },
    },
    snapPoints: {
      description: 'Pontos de ancoragem para o sheet (percentual ou pixels)',
      control: { type: 'object' },
      table: {
        type: { summary: 'number[]' },
        defaultValue: { summary: '[80, 50]' },
      },
    },
    snapPointsMode: {
      description: 'Modo dos snap points (percentual ou absoluto)',
      control: { type: 'select' },
      options: ['percent', 'constant'],
      table: {
        type: { summary: "'percent' | 'constant'" },
        defaultValue: { summary: "'percent'" },
      },
    },
    animation: {
      description: 'Tipo de animação para transições',
      control: { type: 'select' },
      options: ['quick', 'medium', 'slow'],
      table: {
        type: { summary: "'quick' | 'medium' | 'slow'" },
        defaultValue: { summary: "'medium'" },
      },
    },
    modal: {
      description: 'Se o sheet deve ser modal (bloqueia interação com fundo)',
      control: { type: 'boolean' },
      table: {
        type: { summary: 'boolean' },
        defaultValue: { summary: 'true' },
      },
    },
    dismissOnSnapToBottom: {
      description: 'Fecha automaticamente quando arrastado para baixo',
      control: { type: 'boolean' },
      table: {
        type: { summary: 'boolean' },
        defaultValue: { summary: 'true' },
      },
    },
    titleLeftAligned: {
      description: 'Alinha o título à esquerda em vez de centralizado',
      control: { type: 'boolean' },
      table: {
        type: { summary: 'boolean' },
        defaultValue: { summary: 'false' },
      },
    },
  },
  args: {
    open: false,
    scrollView: false,
    snapPoints: [80, 50],
    snapPointsMode: 'percent',
    animation: 'medium',
    modal: true,
    dismissOnSnapToBottom: true,
    titleLeftAligned: false,
  },
};

export default meta;
type Story = StoryObj<SheetProps>;

// Template para criar stories interativas
const SheetTemplate = (args: SheetProps) => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <View padding={16} backgroundColor="$background" minHeight={400}>
      <Button onPress={() => setIsOpen(true)}>Abrir Sheet</Button>

      <Sheet {...args} open={isOpen} onOpenChange={setIsOpen}>
        {args.children || (
          <YStack gap={16}>
            <Text>Este é o conteúdo do sheet.</Text>
            <Text>Você pode arrastar para redimensionar ou fechar.</Text>
          </YStack>
        )}
      </Sheet>
    </View>
  );
};

/**
 * Sheet básico sem cabeçalho, apenas com conteúdo simples.
 */
export const Default: Story = {
  render: SheetTemplate,
  args: {},
};

/**
 * Sheet com cabeçalho contendo ícone e título centralizados.
 */
export const WithHeader: Story = {
  render: SheetTemplate,
  args: {
    header: {
      icon: <Home width={20} height={20} />,
      title: 'Configurações',
    },
  },
};

/**
 * Sheet com título alinhado à esquerda para melhor uso de espaço.
 */
export const LeftAlignedHeader: Story = {
  render: SheetTemplate,
  args: {
    header: {
      icon: <Settings width={20} height={20} />,
      title: 'Filtros Avançados',
    },
    titleLeftAligned: true,
  },
};

/**
 * Sheet com scroll habilitado para conteúdo extenso.
 */
export const WithScrollView: Story = {
  render: SheetTemplate,
  args: {
    header: {
      icon: <Settings width={20} height={20} />,
      title: 'Informações Detalhadas',
    },
    scrollView: true,
    children: (
      <YStack gap={16}>
        {Array.from({ length: 20 }, (_, i) => (
          <View
            key={i}
            padding={12}
            backgroundColor="$neutralBg2"
            borderRadius={8}
          >
            <Text>Item {i + 1} - Conteúdo que requer scroll</Text>
            <Text fontSize={14} color="$color11">
              Este é um exemplo de conteúdo longo que demonstra a funcionalidade
              de scroll do sheet.
            </Text>
          </View>
        ))}
      </YStack>
    ),
  },
};

/**
 * Sheet configurado com snap points customizados.
 */
export const CustomSnapPoints: Story = {
  render: SheetTemplate,
  args: {
    header: {
      icon: <Star width={20} height={20} />,
      title: 'Snap Points Customizados',
    },
    snapPoints: [90, 60, 30],
    children: (
      <YStack gap={16}>
        <Text fontWeight="600">Snap Points: 90%, 60%, 30%</Text>
        <Text>
          Arraste para cima e para baixo para testar os diferentes snap points.
        </Text>
        <Text color="$color11">
          O sheet irá "grudar" em 30%, 60% ou 90% da altura da tela.
        </Text>
      </YStack>
    ),
  },
};

/**
 * Sheet não-modal que permite interação com o fundo.
 */
export const NonModal: Story = {
  render: SheetTemplate,
  args: {
    header: {
      icon: <User width={20} height={20} />,
      title: 'Sheet Não-Modal',
    },
    modal: false,
    children: (
      <YStack gap={16}>
        <Text fontWeight="600">Sheet Não-Modal</Text>
        <Text>Este sheet permite interação com elementos de fundo.</Text>
        <Text color="$color11">
          Útil para painéis de informação que não precisam bloquear a interface.
        </Text>
      </YStack>
    ),
  },
};

/**
 * Playground interativo para testar todas as propriedades do Sheet.
 */
export const Playground: Story = {
  render: args => {
    const [isOpen, setIsOpen] = useState(false);

    return (
      <View padding={16} backgroundColor="$background" minHeight={400}>
        <YStack gap={16}>
          <Text fontWeight="600">Controles do Playground</Text>
          <Text color="$color11">
            Use os controles do painel para testar diferentes configurações do
            Sheet.
          </Text>

          <Button onPress={() => setIsOpen(true)}>Abrir Sheet</Button>
        </YStack>

        <Sheet {...args} open={isOpen} onOpenChange={setIsOpen}>
          <YStack gap={16}>
            <Text fontWeight="600">Sheet Configurável</Text>
            <Text>
              Este sheet reflete as configurações selecionadas no painel de
              controles.
            </Text>
            <Text color="$color11">
              Experimente diferentes combinações de propriedades para ver como
              elas afetam o comportamento.
            </Text>

            <View padding={16} backgroundColor="$neutralBg1" borderRadius={8}>
              <Text fontWeight="600" marginBottom={8}>
                Configurações Atuais:
              </Text>
              <Text fontSize={14}>
                Scroll: {args.scrollView ? 'Habilitado' : 'Desabilitado'}
              </Text>
              <Text fontSize={14}>Modal: {args.modal ? 'Sim' : 'Não'}</Text>
              <Text fontSize={14}>
                Snap Points: {JSON.stringify(args.snapPoints)}
              </Text>
              <Text fontSize={14}>Modo: {args.snapPointsMode}</Text>
            </View>
          </YStack>
        </Sheet>
      </View>
    );
  },
  args: {
    header: {
      icon: <Settings width={20} height={20} />,
      title: 'Playground',
    },
    scrollView: false,
    snapPoints: [80, 50],
    snapPointsMode: 'percent',
    titleLeftAligned: false,
    modal: true,
    dismissOnSnapToBottom: true,
  },
};
