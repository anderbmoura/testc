import type { Meta, StoryObj } from '@storybook/react';
import { Heart, Home, Settings, User, Star, Bell } from 'iconoir-react-native';
import React, { useState } from 'react';
import { Text, View, YStack } from 'tamagui';
import Button from '../../buttons/Button';
import { Sheet } from './Sheet';
import type { SheetProps, SheetHeaderProps } from './Sheet.model';

const iconMapping = {
  None: undefined,
  Home,
  Settings,
  Heart,
  User,
  Star,
  Bell,
};

interface SheetStoryArgs extends Omit<SheetProps, 'header'> {
  headerTitle?: string;
  headerIcon?: keyof typeof iconMapping;
}

const meta: Meta<SheetStoryArgs> = {
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
- **Variantes**: 'default' (sem blur) ou 'onMediaBg' (com blur intensidade 6)
- **Modo controlado e não controlado**: Suporte a ambos os padrões
        `,
      },
      source: {
        transform: (_: string, { args }: { args: SheetStoryArgs }) => {
          const iconName = args.headerIcon
            ? Object.keys(iconMapping).find(
                key =>
                  iconMapping[key as keyof typeof iconMapping] ===
                  args.headerIcon
              ) || 'Home'
            : 'None';

          const props = [
            args.headerTitle &&
              `header={{
  ${args.headerIcon && iconName !== 'None' ? `icon: <${iconName} />,` : ''}
  title: "${args.headerTitle}"
}}`,
            args.scrollView && 'scrollView={true}',
            args.snapPoints &&
              JSON.stringify(args.snapPoints) !== JSON.stringify([80, 50]) &&
              `snapPoints={${JSON.stringify(args.snapPoints)}}`,
            args.snapPointsMode &&
              args.snapPointsMode !== 'percent' &&
              `snapPointsMode="${args.snapPointsMode}"`,
            args.titleLeftAligned && 'titleLeftAligned={true}',
            args.variant &&
              args.variant !== 'default' &&
              `variant="${args.variant}"`,
            args.closable === false && 'closable={false}',
          ]
            .filter(Boolean)
            .join('\n  ');

          return `import { Sheet } from '@superapp/ui-components';
${args.headerIcon && iconName !== 'None' ? `import { ${iconName} } from 'iconoir-react-native';` : ''}

function Example() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <>
      <Button onPress={() => setIsOpen(true)}>
        Abrir Sheet
      </Button>
      
      <Sheet
        open={isOpen}
        onOpenChange={setIsOpen}${props ? `\n  ${props}` : ''}
      >
        <Text>Conteúdo do sheet aqui</Text>
      </Sheet>
    </>
  );
}`;
        },
        state: 'open',
      },
    },
  },
  argTypes: {
    open: {
      description:
        'Controla se o sheet está aberto ou fechado (modo controlado)',
      control: false,
      table: {
        type: { summary: 'boolean' },
      },
    },
    onOpenChange: {
      description: 'Callback executado quando o estado de abertura muda',
      control: false,
      table: {
        type: { summary: '(open: boolean) => void' },
      },
    },
    headerTitle: {
      name: 'header.title',
      description: 'Título exibido no cabeçalho do sheet',
      control: { type: 'text' },
      table: {
        type: { summary: 'string' },
        category: 'Header',
      },
    },
    headerIcon: {
      name: 'header.icon',
      description: 'Ícone exibido no cabeçalho do sheet',
      control: { type: 'select' },
      options: Object.keys(iconMapping),
      mapping: iconMapping,
      table: {
        type: { summary: 'ReactNode' },
        category: 'Header',
      },
    },
    scrollView: {
      description:
        'Habilita scroll para conteúdo que excede a altura disponível',
      control: { type: 'boolean' },
      table: {
        type: { summary: 'boolean' },
        defaultValue: { summary: 'false' },
        category: 'Conteúdo',
      },
    },
    snapPoints: {
      description: 'Pontos de ancoragem para o sheet (percentual ou pixels)',
      control: { type: 'object' },
      table: {
        type: { summary: 'number[]' },
        defaultValue: { summary: '[80, 50]' },
        category: 'Comportamento',
      },
    },
    snapPointsMode: {
      description: 'Modo dos snap points (percentual ou valores absolutos)',
      control: { type: 'select' },
      options: ['percent', 'constant'],
      table: {
        type: { summary: "'percent' | 'constant'" },
        defaultValue: { summary: "'percent'" },
        category: 'Comportamento',
      },
    },
    titleLeftAligned: {
      description: 'Alinha o título à esquerda em vez de centralizado',
      control: { type: 'boolean' },
      table: {
        type: { summary: 'boolean' },
        defaultValue: { summary: 'false' },
        category: 'Header',
      },
    },
    variant: {
      description: 'Variante do sheet que controla o comportamento do blur',
      control: { type: 'select' },
      options: ['default', 'onMediaBg'],
      table: {
        type: { summary: "'default' | 'onMediaBg'" },
        defaultValue: { summary: "'default'" },
        category: 'Efeitos Visuais',
      },
    },
    closable: {
      description: 'Se o sheet pode ser fechado por interação do usuário',
      control: { type: 'boolean' },
      table: {
        type: { summary: 'boolean' },
        defaultValue: { summary: 'true' },
        category: 'Comportamento',
      },
    },
    modal: {
      description:
        'Se o sheet deve ser modal (renderizado na raiz da aplicação)',
      control: { type: 'boolean' },
      table: {
        type: { summary: 'boolean' },
        defaultValue: { summary: 'true' },
        category: 'Comportamento',
      },
    },
    dismissOnSnapToBottom: {
      description:
        'Fecha automaticamente quando arrastado para o snap point inferior',
      control: { type: 'boolean' },
      table: {
        type: { summary: 'boolean' },
        defaultValue: { summary: 'true' },
        category: 'Comportamento',
      },
    },
    animation: {
      description: 'Tipo de animação para transições',
      control: { type: 'select' },
      options: ['quick', 'medium', 'slow'],
      table: {
        type: { summary: "'quick' | 'medium' | 'slow'" },
        defaultValue: { summary: "'medium'" },
        category: 'Animação',
      },
    },
  },
  args: {
    headerTitle: 'Título do Sheet',
    headerIcon: 'Home',
    scrollView: false,
    snapPoints: [80, 50],
    snapPointsMode: 'percent',
    titleLeftAligned: false,
    variant: 'default',
    closable: true,
    modal: true,
    dismissOnSnapToBottom: true,
    animation: 'medium',
  },
  tags: ['autodocs'],
};

export default meta;
type Story = StoryObj<SheetStoryArgs>;

export const Default: Story = {
  render: args => {
    const [isOpen, setIsOpen] = useState(false);

    const headerProps: Partial<SheetProps> = {};

    if (args.headerTitle || args.headerIcon !== 'None') {
      const header: SheetHeaderProps = {};
      if (args.headerTitle) {
        header.title = args.headerTitle;
      }
      if (args.headerIcon !== 'None' && args.headerIcon) {
        const IconComponent = iconMapping[args.headerIcon];
        header.icon = IconComponent ? (
          <IconComponent width={20} height={20} />
        ) : undefined;
      }
      headerProps.header = header;
    }

    const {
      headerTitle: _headerTitle,
      headerIcon: _headerIcon,
      ...sheetArgs
    } = args;

    return (
      <View padding="$medium" backgroundColor="$background" minHeight={400}>
        <Button onPress={() => setIsOpen(true)}>Abrir Sheet</Button>

        <Sheet
          {...sheetArgs}
          {...headerProps}
          open={isOpen}
          onOpenChange={setIsOpen}
        >
          <YStack gap="$medium">
            <Text>Este é o conteúdo do sheet.</Text>
            <Text>Você pode arrastar para redimensionar ou fechar.</Text>
            {args.scrollView && (
              <>
                {Array.from({ length: 15 }, (_, i) => (
                  <Text key={i}>Item de conteúdo #{i + 1}</Text>
                ))}
              </>
            )}
          </YStack>
        </Sheet>
      </View>
    );
  },
};
