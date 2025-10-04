import type { Meta, StoryObj } from '@storybook/react';
import { Chips } from './Chips';
import type { ChipsProps } from './Chips.model';
import {
  Star,
  Heart,
  Settings,
  Home,
  User,
  Bell,
  InfoCircle,
  BadgeCheck,
  WarningTriangle,
} from 'iconoir-react-native';

// Interface estendida para os args do Storybook
interface ChipsStoryArgs extends ChipsProps {
  leftSlotVariant?: 'none' | 'icon' | 'check' | 'avatar';
  leftSlotIcon?: string;
  leftSlotImageSource?: string;
  rightSlotVariant?: 'none' | 'arrow' | 'clear';
}

const iconMapping = {
  None: undefined,
  Star: <Star />,
  Heart: <Heart />,
  Settings: <Settings />,
  Home: <Home />,
  User: <User />,
  Bell: <Bell />,
  InfoCircle: <InfoCircle />,
  BadgeCheck: <BadgeCheck />,
  WarningTriangle: <WarningTriangle />,
};

const imageMapping = {
  None: undefined,
  INSS: { uri: '/images/example/inss.png' },
  MCMV: { uri: '/images/example/minha-casa-minha-vida.png' },
};

const meta: Meta<ChipsStoryArgs> = {
  title: 'Componentes/Data Display/Chips',
  component: Chips,
  parameters: {
    layout: 'centered',
    docs: {
      description: {
        component: `
Componente DSC Chips para exibir informações em formato de chip com composition pattern para slots customizáveis.

## Características principais

- **Composition Pattern**: API limpa e semântica usando \`Chips.LeftSlot\` e \`Chips.RightSlot\`
- **Left Slot**: Suporte para ícone, check (quando selecionado) ou avatar
- **Right Slot**: Suporte para seta ou botão de limpar

## Como usar

\`\`\`tsx
import { Chips } from '@superapp-caixa/dsc-library';
import { Star, Settings } from 'iconoir-react-native';

// Chip básico
<Chips text="Chip básico" />

// Chip selecionado com check
<Chips text="Chip selecionado" selected={true}>
  <Chips.LeftSlot variant="check" />
</Chips>

// Chip com ícone personalizado
<Chips text="Chip com ícone">
  <Chips.LeftSlot variant="icon" icon={<Star />} />
</Chips>

// Chip com slots esquerdo e direito
<Chips text="Chip completo" onPress={() => console.log('Chip pressionado')}>
  <Chips.LeftSlot variant="icon" icon={<Settings />} />
  <Chips.RightSlot variant="clear" />
</Chips>

// Chip com avatar
<Chips text="Programa INSS">
  <Chips.LeftSlot 
    variant="avatar" 
    imageSource={{ uri: '/images/example/inss.png' }} 
  />
  <Chips.RightSlot variant="arrow" />
</Chips>

// Chip desabilitado
<Chips text="Chip desabilitado" disabled={true}>
  <Chips.LeftSlot variant="icon" icon={<Star />} />
</Chips>
\`\`\`
        `,
      },
      source: {
        transform: (_: string, { args }: any) => {
          const getIconName = (iconKey: string) => {
            if (!iconKey || iconKey === 'None') return null;
            return iconKey;
          };

          const getImageSource = (imageKey: string) => {
            if (!imageKey || imageKey === 'None') return null;
            return imageMapping[imageKey as keyof typeof imageMapping];
          };

          let code = `<Chips`;

          if (args.selected === true) {
            code += `\n  selected={true}`;
          }
          if (args.disabled === true) {
            code += `\n  disabled={true}`;
          }
          code += `\n  text="${args.text || 'Texto do Chip'}"`;

          const hasLeftSlot =
            args.leftSlotVariant && args.leftSlotVariant !== 'none';
          const hasRightSlot =
            args.rightSlotVariant && args.rightSlotVariant !== 'none';

          if (hasLeftSlot || hasRightSlot) {
            code += `\n>`;

            if (hasLeftSlot) {
              code += `\n  <Chips.LeftSlot variant="${args.leftSlotVariant}"`;

              if (
                args.leftSlotVariant === 'icon' &&
                args.leftSlotIcon &&
                args.leftSlotIcon !== 'None'
              ) {
                const iconName = getIconName(args.leftSlotIcon);
                code += ` icon={<${iconName} />}`;
              } else if (
                args.leftSlotVariant === 'avatar' &&
                args.leftSlotImageSource &&
                args.leftSlotImageSource !== 'None'
              ) {
                const imageSource = getImageSource(args.leftSlotImageSource);
                code += ` imageSource={{ uri: '${imageSource?.uri}' }}`;
              }

              code += ` />`;
            }

            // Right Slot
            if (hasRightSlot) {
              code += `\n  <Chips.RightSlot variant="${args.rightSlotVariant}" />`;
            }

            code += `\n</Chips>`;
          } else {
            code += ` />`;
          }

          return code;
        },
        state: 'open',
        excludeDecorators: true,
      },
    },
  },
  tags: ['autodocs'],
  render: (args: ChipsStoryArgs) => {
    const {
      leftSlotVariant,
      leftSlotIcon,
      leftSlotImageSource,
      rightSlotVariant,
      ...restArgs
    } = args;

    return (
      <Chips {...restArgs}>
        {leftSlotVariant && leftSlotVariant !== 'none' && (
          <Chips.LeftSlot
            variant={leftSlotVariant}
            icon={
              leftSlotIcon && leftSlotIcon !== 'None'
                ? iconMapping[leftSlotIcon as keyof typeof iconMapping]
                : undefined
            }
            imageSource={
              leftSlotImageSource && leftSlotImageSource !== 'None'
                ? imageMapping[leftSlotImageSource as keyof typeof imageMapping]
                : undefined
            }
          />
        )}
        {rightSlotVariant && rightSlotVariant !== 'none' && (
          <Chips.RightSlot variant={rightSlotVariant} />
        )}
      </Chips>
    );
  },
  argTypes: {
    text: {
      control: 'text',
      description: 'Texto exibido no chip.',
      table: {
        type: { summary: 'string' },
        defaultValue: { summary: 'undefined' },
      },
    },
    selected: {
      control: 'boolean',
      description: 'Define se o chip está selecionado.',
      table: {
        type: { summary: 'boolean' },
        defaultValue: { summary: 'false' },
      },
    },
    disabled: {
      control: 'boolean',
      description: 'Define se o chip está desabilitado.',
      table: {
        type: { summary: 'boolean' },
        defaultValue: { summary: 'false' },
      },
    },
    leftSlotVariant: {
      control: 'select',
      options: ['none', 'icon', 'check', 'avatar'],
      description: 'Variante do slot esquerdo do chip.',
      table: {
        type: { summary: "'icon' | 'check' | 'avatar'" },
        defaultValue: { summary: 'undefined' },
      },
    },
    leftSlotIcon: {
      control: 'select',
      options: Object.keys(iconMapping),
      description: 'Ícone para o slot esquerdo (variante icon).',
      if: { arg: 'leftSlotVariant', eq: 'icon' },
      table: {
        type: {
          summary: 'React.ReactNode',
          detail: 'Componente de ícone do iconoir-react-native',
        },
        defaultValue: { summary: 'undefined' },
      },
    },
    leftSlotImageSource: {
      control: 'select',
      options: Object.keys(imageMapping),
      description: 'Imagem para o slot esquerdo (variante avatar).',
      if: { arg: 'leftSlotVariant', eq: 'avatar' },
      table: {
        type: {
          summary: 'ImageSource',
          detail: 'Fonte de imagem para o Avatar',
        },
        defaultValue: { summary: 'undefined' },
      },
    },
    rightSlotVariant: {
      control: 'select',
      options: ['none', 'arrow', 'clear'],
      description: 'Variante do slot direito do chip.',
      table: {
        type: { summary: "'arrow' | 'clear'" },
        defaultValue: { summary: 'undefined' },
      },
    },
    onPress: {
      control: 'object',
      description: 'Callback executado quando o chip é pressionado.',
      table: {
        type: { summary: '() => void' },
        defaultValue: { summary: 'undefined' },
      },
    },
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
    text: 'Chip padrão',
    selected: false,
    disabled: false,
    leftSlotVariant: 'none',
    leftSlotIcon: 'None',
    leftSlotImageSource: 'None',
    rightSlotVariant: 'none',
    onPress: () => console.log('Chip pressionado'),
  },
};
