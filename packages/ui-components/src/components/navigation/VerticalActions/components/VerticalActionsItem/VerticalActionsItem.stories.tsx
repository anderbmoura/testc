import type { Meta, StoryObj } from '@storybook/react';
import { Heart, Home, NavArrowRight, User } from 'iconoir-react-native';
import { VerticalActionsItem } from './VerticalActionsItem';
import { VerticalActionsItemProps } from './VerticalActionsItem.model';
import { View } from 'tamagui';

const iconMapping = {
  None: undefined,
  Home: <Home />,
  User: <User />,
  Heart: <Heart />,
  NavArrowRight: <NavArrowRight />,
};

const rightSlotMapping = {
  ...iconMapping,
  Null: null,
};

const meta: Meta<VerticalActionsItemProps> = {
  title: 'Componentes/Navigation/VerticalActions/VerticalActionsItem',
  component: VerticalActionsItem,
  parameters: {
    layout: 'centered',
    docs: {
      description: {
        component: `
Componente DSC VerticalActionsItem, usado como parte dos componentes VerticalActions e VerticalActionsSection.

## Como usar

\`\`\`tsx
import { VerticalActionsItem } from '@superapp-caixa/dsc-library';

<VerticalActionsItem
  key="my-unique-key"
  text1="Main Text"
  text2="Secondary Text"
  label1="Label Above"
  label2="Label Below"
  badge={{ size: 'medium', color: 'highlight', children: 'Badge' }}
  leftSlot={<Home width={24} height={24} />}
  rightSlot={<NavArrowRight width={24} height={24} color="$color8" />}
  onPress={() => console.log('Item pressed')}
  disabled={false}
/>
\`\`\`
        `,
      },
    },
  },
  tags: ['autodocs'],
  render: args => {
    return (
      <View width={400}>
        <VerticalActionsItem {...args} />
      </View>
    );
  },
  argTypes: {
    text1: {
      control: 'text',
      description: 'Texto principal do componente.',
    },
    text2: {
      control: 'select',
      options: [undefined, 'Text 2'],
      description: 'Texto secundário do componente. Exibido à direita do text1',
    },
    label1: {
      control: 'select',
      options: [undefined, 'Label 1'],
      description: 'Label exibido acima do text1',
    },
    label2: {
      control: 'select',
      options: [undefined, 'Label 2'],
      description: 'Label exibido abaixo do text1',
    },
    badge: {
      control: 'object',
      description: 'Badge a ser exibida entre text2 e o right slot',
    },
    leftSlot: {
      control: 'select',
      options: Object.keys(iconMapping),
      description:
        'Slot para um componente customizado (ex.: ícone). Exibido à esquerda do text1.',
      mapping: iconMapping,
      table: {
        defaultValue: {
          summary: 'None',
        },
      },
    },
    rightSlot: {
      control: 'select',
      options: Object.keys(rightSlotMapping),
      description:
        'Slot para um componente customizado (ex.: ícone). Exibido à direita do badge. Se não fornecido, um ícone padrão NavArrowRight é usado. Passe null explicitamente para não mostrar nenhum ícone.',
      mapping: rightSlotMapping,
      table: {
        defaultValue: {
          summary: 'NavArrowRight',
        },
      },
    },
    disabled: {
      control: 'boolean',
      description:
        'Se true, o componente é visualmente desativado e não pode ser pressionado.',
    },
  },
};

export default meta;

type Story = StoryObj<typeof meta>;

export const AllProps: Story = {
  args: {
    id: 'my-unique-key',
    text1: 'Text 1',
    text2: 'Text 2',
    label1: 'Label 1',
    label2: 'Label 2',
    badge: { size: 'medium', color: 'highlight', children: 'Label' },
    onPress: () => {
      /* Empty */
    },
    disabled: false,
  },
};

export const MinimalProps: Story = {
  args: {
    id: 'simple-1',
    text1: 'Action 1',
  },
};
