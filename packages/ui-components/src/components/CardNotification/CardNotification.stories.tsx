import type { Meta, StoryObj } from '@storybook/react';
import { CardNotification } from './CardNotification';
import type {
  CardNotificationProps,
  CardNotificationVariant,
} from './CardNotification.model';
import {
  InfoCircle,
  BadgeCheck,
  WarningTriangle,
  WarningHexagon,
  Bell,
  Star,
  Heart,
  Settings,
  Home,
  User,
  Circle,
} from 'iconoir-react-native';

const iconMapping = {
  None: undefined,
  InfoCircle: <InfoCircle />,
  BadgeCheck: <BadgeCheck />,
  WarningTriangle: <WarningTriangle />,
  WarningHexagon: <WarningHexagon />,
  Bell: <Bell />,
  Star: <Star />,
  Heart: <Heart />,
  Settings: <Settings />,
  Home: <Home />,
  User: <User />,
  Circle: <Circle />,
};

const meta: Meta<CardNotificationProps> = {
  title: 'Componentes/CardNotification',
  component: CardNotification,
  parameters: {
    layout: 'centered',
    docs: {
      description: {
        component: `
Componente DSC CardNotification para exibir notificações em formato de card com diferentes variantes visuais e funcionalidades interativas.

## Características principais

- **8 variantes visuais**: highlight, accent, success, warning, danger, info, neutral, decorative
- **Ícones personalizáveis**: use ícones próprios ou deixe o padrão da variante
- **Botão de ação opcional**: por padrão desabilitado, pode ser habilitado com \`showButton={true}\`
- **Funcionalidade de swipe**: permite dispensar o card deslizando para os lados

## Como usar

\`\`\`tsx
import { CardNotification } from '@superapp-caixa/dsc-library';
import { Star, Settings } from 'iconoir-react-native';

// Card básico (sem botão - comportamento padrão)
<CardNotification 
  variant="success"
  label="Operação concluída" 
  description="Sua solicitação foi processada com sucesso."
/>

// Card com ícone personalizado
<CardNotification 
  variant="highlight"
  label="Novidade disponível" 
  description="Confira as novas funcionalidades que preparamos para você."
  icon={<Star />}
/>

// Card com botão de ação habilitado
<CardNotification 
  variant="warning"
  label="Atenção necessária" 
  description="Verifique os dados antes de continuar com a operação."
  showButton={true}
  onButtonPress={() => console.log('Abrir opções')}
  buttonAccessibilityLabel="Abrir menu de opções"
/>

// Card com callback de swipe para remoção
<CardNotification 
  variant="info"
  label="Notificação temporária" 
  description="Deslize para dispensar esta notificação."
  onSwipe={() => console.log('Card removido')}
/>

// Card com auto-hide habilitado (se remove automaticamente)
<CardNotification 
  variant="warning"
  label="Notificação auto-removível" 
  description="Deslize para dispensar - este card será automaticamente removido."
  autoHide={true}
  onSwipe={() => console.log('Card foi automaticamente removido')}
/>

// Card completo com todas as funcionalidades
<CardNotification 
  variant="danger"
  label="Erro crítico detectado"
  description="Um problema foi identificado no sistema. Tome uma ação imediata."
  icon={<Settings />}
  showButton={true}
  onButtonPress={() => console.log('Abrir configurações')}
  onSwipe={() => console.log('Notificação dispensada')}
  accessibilityLabel="Alerta de erro crítico do sistema"
  buttonAccessibilityLabel="Acessar configurações do sistema"
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
            args.variant &&
              args.variant !== 'highlight' &&
              `variant="${args.variant}"`,
            args.icon &&
              args.icon !== 'None' &&
              `icon={<${getIconName(args.icon)} />}`,
            args.showButton === true && 'showButton={true}',
            args.buttonAccessibilityLabel &&
              `buttonAccessibilityLabel="${args.buttonAccessibilityLabel}"`,
            args.accessibilityLabel &&
              `accessibilityLabel="${args.accessibilityLabel}"`,
          ]
            .filter(Boolean)
            .join(' ');

          return `<CardNotification${props && ` ${props}`}
  label="${args.label || 'Label'}"
  description="${args.description || 'Description'}"
/>`;
        },
        state: 'open',
        excludeDecorators: true,
      },
    },
  },
  tags: ['autodocs'],
  render: args => {
    const key = `card-notification-${Date.now()}`;

    const { ...restArgs } = args;
    return <CardNotification key={key} {...restArgs} />;
  },
  argTypes: {
    variant: {
      control: 'radio',
      options: [
        'highlight',
        'accent',
        'success',
        'warning',
        'danger',
        'info',
        'neutral',
        'decorative',
      ] as CardNotificationVariant[],
      description:
        'Variante visual que define o tema de cores aplicado ao card.',
      table: {
        type: { summary: 'string' },
        defaultValue: { summary: "'highlight'" },
      },
    },
    label: {
      control: 'text',
      description: 'Título principal da notificação.',
      table: {
        type: { summary: 'string' },
        defaultValue: { summary: 'undefined' },
      },
    },
    description: {
      control: 'text',
      description: 'Descrição detalhada da notificação.',
      table: {
        type: { summary: 'string' },
        defaultValue: { summary: 'undefined' },
      },
    },
    icon: {
      control: 'select',
      options: Object.keys(iconMapping),
      description: 'Ícone personalizado exibido no card.',
      mapping: iconMapping,
      table: {
        type: {
          summary: 'React.ReactNode',
          detail: 'Componente de ícone do iconoir-react-native',
        },
        defaultValue: { summary: 'undefined' },
      },
    },
    showButton: {
      control: 'boolean',
      description: 'Define se o botão de ação deve ser exibido.',
      table: {
        type: { summary: 'boolean' },
        defaultValue: { summary: 'false' },
      },
    },
    buttonAccessibilityLabel: {
      control: 'text',
      description: 'Label de acessibilidade para o botão de ação.',
      table: {
        type: { summary: 'string' },
        defaultValue: { summary: 'undefined' },
      },
    },
    autoHide: {
      control: 'boolean',
      description:
        'Define se o componente deve se auto-desrenderizar após o swipe.',
      table: {
        type: { summary: 'boolean' },
        defaultValue: { summary: 'true' },
      },
    },
    accessibilityLabel: {
      control: 'text',
      description: 'Label de acessibilidade para o card.',
      table: {
        type: { summary: 'string' },
        defaultValue: { summary: 'undefined' },
      },
    },
    onButtonPress: {
      table: {
        disable: true,
      },
    },
    onSwipe: {
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
    variant: 'success',
    label: 'Operação concluída',
    description: 'Sua solicitação foi processada com sucesso.',
    icon: 'None',
    showButton: false,
    autoHide: true,
    buttonAccessibilityLabel: 'Mais opções',
  },
};
