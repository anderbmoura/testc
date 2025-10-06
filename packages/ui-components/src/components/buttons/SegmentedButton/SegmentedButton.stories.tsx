import type { Meta, StoryObj } from '@storybook/react';
import { SegmentedButton } from './SegmentedButton';
import type { SegmentedButtonProps } from './SegmentedButton.model';
import {
  UserCart,
  Star,
  Heart,
  Mail,
  Bell,
  StatsUpSquare,
} from 'iconoir-react-native';
import { View } from 'tamagui';

// Mapeamento de ícones
const iconMapping = {
  UserCart: <UserCart />,
  StatsUpSquare: <StatsUpSquare />,
  Star: <Star />,
  Heart: <Heart />,
  Mail: <Mail />,
  Bell: <Bell />,
};

// Mapeamento de imagens estáticas
const imageMapping = {
  None: undefined,
  INSS: { uri: '/images/example/inss.png' },
  MCMV: { uri: '/images/example/minha-casa-minha-vida.png' },
};

const meta: Meta<SegmentedButtonProps> = {
  title: 'Componentes/Buttons/SegmentedButton',
  component: SegmentedButton,
  parameters: {
    layout: 'centered',
    docs: {
      description: {
        component: `
Componente de botões segmentados para seleção entre múltiplas opções.

## Exemplos
\`\`\`tsx
import { SegmentedButton } from '@superapp-caixa/dsc-library';
import { Star, Heart } from 'iconoir-react-native';

<SegmentedButton
  buttons={[
    { label: 'Relatórios', icon: <StatsUpSquare />, onPress: () => {} },
    { label: 'Favoritos', icon: <Star />, onPress: () => {} },
  ]}
/>
\`\`\`

📌 Se \`image\` estiver presente, ela substitui \`icon\` e \`label\`.

📌 Cada botão pode conter:
- \`label\`: texto
- \`icon\`: componente React
- \`image\`: substitui ícone e texto
- \`variant\`: 'neutral' ou 'highlight'
- \`state\`: 'default', 'hover', 'pressed', 'focused', 'disabled'
- \`onPress\`: função de clique
        `,
      },
      source: {
        transform: (_: string, { args }: any) => {
          const props = args.buttons
            .map((btn: any) => {
              const icon =
                btn.icon && btn.icon !== 'None' ? `<${btn.icon} />` : null;
              const image =
                btn.image && btn.image !== 'None'
                  ? `{ uri: "${btn.image.uri}" }`
                  : null;
              const variant = btn.variant ? `variant: "${btn.variant}"` : '';
              const state = btn.state ? `state: "${btn.state}"` : '';
              return `{
  label: "${btn.label}",
  ${icon ? `icon: ${icon},` : ''}
  ${image ? `image: ${image},` : ''}
  ${variant ? `${variant},` : ''}
  ${state ? `${state},` : ''}
}`;
            })
            .join(',\n');

          return `<SegmentedButton
  buttons={[
    ${props}
  ]}
/>`;
        },
        state: 'open',
        excludeDecorators: true,
      },
    },
  },
  tags: ['autodocs'],
  render: args => {
    const buttons = args.buttons.map(btn => ({
      ...btn,
      icon:
        typeof btn.icon === 'string'
          ? iconMapping[btn.icon as keyof typeof iconMapping]
          : btn.icon,
      image:
        typeof btn.image === 'string'
          ? imageMapping[btn.image as keyof typeof imageMapping]
          : btn.image,
    }));

    return (
      <View width={400}>
        <SegmentedButton {...args} buttons={buttons} />
      </View>
    );
  },
  argTypes: {
    buttons: {
      control: 'object',
      description: 'Lista de botões segmentados',
      table: {
        type: {
          summary: 'SegmentedButtonItem[]',
        },
      },
    },
    disabled: {
      control: 'boolean',
      description: 'Desativa todos os botões',
      table: {
        type: { summary: 'boolean' },
        defaultValue: { summary: 'false' },
      },
    },
    accessibilityLabel: {
      control: 'text',
      description: 'Rótulo de acessibilidade',
      table: {
        type: { summary: 'string' },
        defaultValue: { summary: 'undefined' },
      },
    },
    buttonProps: {
      control: 'object',
      description: 'Props adicionais para cada botão',
      table: {
        type: { summary: 'ButtonProps' },
        defaultValue: { summary: '{}' },
      },
    },
  },
};

export default meta;

type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {
    buttons: [
      {
        label: 'Relatórios',
        icon: 'StatsUpSquare',
        variant: 'neutral',
        state: 'default',
        onPress: () => {},
      },
      {
        label: 'Favoritos',
        icon: 'Star',
        variant: 'neutral',
        state: 'default',
        onPress: () => {},
      },
    ],
  },
};
