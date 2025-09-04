import type { Meta, StoryObj } from '@storybook/react';
import React from 'react';
import {
  CreditCard,
  Home,
  Settings,
  Star,
  Calendar,
} from 'iconoir-react-native';
import { CardWidget } from '../CardWidget';
import { CardWidgetFooter } from './CardWidgetFooter';
import type { CardWidgetFooterProps } from './CardWidgetFooter.model';

const iconMapping = {
  None: undefined,
  CreditCard: <CreditCard />,
  Home: <Home />,
  Settings: <Settings />,
  Star: <Star />,
  Calendar: <Calendar />,
};

const meta: Meta<CardWidgetFooterProps> = {
  title: 'Componentes/CardWidget/CardWidgetFooter',
  component: CardWidgetFooter,
  parameters: {
    layout: 'centered',
    docs: {
      description: {
        component: `
Footer padrão para ser utilizado em um CardWidget.

## Como usar

\`\`\`tsx
import { CardWidget, CardWidgetFooter } from '@superapp-caixa/dsc-library';
import { CreditCard } from 'iconoir-react-native';

<CardWidget 
  topLabel="Saldo"
  mainLabel="R$ 1.000,00"
  icon={<Star />}
>
  <CardWidgetFooter 
    variant="neutral"
    label="Label"
    value="Value"
    icon={CreditCard}
    showProgress={true}
    progress={75}
  />
</CardWidget>
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
              args.variant !== 'neutral' &&
              `variant="${args.variant}"`,
            args.label && `label="${args.label}"`,
            args.value && `value="${args.value}"`,
            args.icon &&
              args.icon !== 'None' &&
              `icon={<${getIconName(args.icon)} />}`,
            args.showIcon === false && 'showIcon={false}',
            args.showLabel === false && 'showLabel={false}',
            args.showProgress && 'showProgress={true}',
            args.progress &&
              args.progress !== 0 &&
              `progress={${args.progress}}`,
            args.onPress && 'onPress={() => console.log("Pressionado")}',
          ]
            .filter(Boolean)
            .join(' ');

          return `<CardWidget topLabel="Saldo" mainLabel="R$ 1.000,00">
  <CardWidgetFooter${props && ` ${props}`} />
</CardWidget>`;
        },
        state: 'open',
        excludeDecorators: true,
      },
    },
  },
  tags: ['autodocs'],
  render: args => {
    const key = `card-widget-footer-${Date.now()}`;

    const { icon, ...restArgs } = args;
    let iconComponent: React.ComponentType<any> | undefined;

    if (typeof icon === 'string') {
      if (icon === 'None') {
        iconComponent = undefined;
      } else {
        const mappedIcon = iconMapping[icon as keyof typeof iconMapping];
        iconComponent = mappedIcon ? (mappedIcon as any).type : undefined;
      }
    } else {
      iconComponent = icon;
    }

    const props = iconComponent
      ? { ...restArgs, icon: iconComponent }
      : restArgs;

    return (
      <div style={{ width: '160px' }}>
        <CardWidget
          key={key}
          topLabel="Saldo"
          mainLabel="R$ 100.000,00"
          icon={<Star />}
        >
          <CardWidgetFooter {...props} />
        </CardWidget>
      </div>
    );
  },
  argTypes: {
    variant: {
      control: 'select',
      options: ['neutral', 'success', 'danger'],
      description: 'Variante visual que define as cores do valor e ícone.',
      table: {
        type: { summary: 'neutral | success | danger' },
        defaultValue: { summary: 'neutral' },
      },
    },
    label: {
      control: 'text',
      description: 'Texto do label exibido no topo do footer.',
      table: {
        type: { summary: 'string' },
        defaultValue: { summary: 'undefined' },
      },
    },
    value: {
      control: 'text',
      description: 'Texto do valor exibido no rodapé.',
      table: {
        type: { summary: 'string' },
        defaultValue: { summary: 'undefined' },
      },
    },
    icon: {
      control: 'select',
      options: Object.keys(iconMapping),
      mapping: iconMapping,
      description:
        'Ícone a ser exibido no rodapé (biblioteca iconoir-react-native).',
      table: {
        type: { summary: 'React.ComponentType<any>' },
        defaultValue: { summary: 'undefined' },
      },
    },
    showProgress: {
      control: 'boolean',
      description: 'Define se a barra de progresso deve ser exibida.',
      table: {
        type: { summary: 'boolean' },
        defaultValue: { summary: 'false' },
      },
    },
    progress: {
      control: { type: 'range', min: 0, max: 100, step: 5 },
      description: 'Valor do progresso entre 0 e 100.',
      table: {
        type: { summary: 'number' },
        defaultValue: { summary: '0' },
      },
    },
  },
};

export default meta;

type StoryArgs = Omit<CardWidgetFooterProps, 'icon'> & {
  icon?: string | React.ComponentType<any>;
};
type Story = StoryObj<StoryArgs>;

export const Default: Story = {
  args: {
    label: 'Label',
    value: 'Value',
    icon: 'CreditCard',
    showProgress: true,
    progress: 50,
    variant: 'neutral',
  },
};
