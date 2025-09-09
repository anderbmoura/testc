import type { Meta, StoryObj } from '@storybook/react';
import { Heart, Home, User } from 'iconoir-react-native';
import { View } from 'tamagui';
import VerticalActions from './VerticalActions';
import { VerticalActionsProps } from './VerticalActions.model';

const meta: Meta<VerticalActionsProps> = {
  title: 'Templates/VerticalActions/VerticalActions',
  component: VerticalActions,
  parameters: {
    layout: 'centered',
    docs: {
      description: {
        component: `
Componente DSC VerticalActions. Exibe uma lista vertical de itens interativos,
baseada no componente VerticalActionsItem. Opcionalmente, pode incluir
o componente SegmentedButton acima da lista.

## Como usar

\`\`\`tsx
import { VerticalActions } from '@superapp-caixa/dsc-library';

<VerticalActions
  actions={[
    {
      id: 'My unique key',
      text1: 'Text 1',
      text2: 'Text 2',
      label1: 'Label 1',
      label2: 'Label 2',
      badge: { size: 'medium', color: 'highlight', children: 'Label' },
      onPress: () => console.log('Item pressed'),
      disabled: false,
    },
  ]}
  segmentedButtonProps: {{
    buttons: [
      { label: 'Recentes', onPress: () => console.log('Recentes pressed') },
      { label: 'Favoritos', onPress: () => console.log('Favoritos pressed') },
    ],
  }}
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
        <VerticalActions {...args} />
      </View>
    );
  },
  argTypes: {
    actions: {
      control: 'object',
      description:
        'Array de props para os componentes VerticalActionsItem a serem exibidos.',
    },
    segmentedButtonProps: {
      control: 'object',
      description:
        'Caso seja passado, exibe o componente SegmentedButton acima da lista de ações utilizando as props definidas.',
    },
  },
};

export default meta;

type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {
    actions: [
      {
        id: 'action-1',
        text1: 'First Action',
        text2: 'Value 1',
        label1: 'Category A',
        label2: 'Description A',
        badge: { size: 'medium', color: 'highlight', children: 'New' },
        leftSlot: <Home width={24} height={24} />,
        onPress: () => console.log('First action pressed'),
        disabled: false,
      },
      {
        id: 'action-2',
        text1: 'Second Action',
        text2: 'Value 2',
        label1: 'Category B',
        label2: 'Description B',
        leftSlot: <User width={24} height={24} />,
        onPress: () => console.log('Second action pressed'),
        disabled: false,
      },
      {
        id: 'action-3',
        text1: 'Third Action',
        text2: 'Value 3',
        label1: 'Category C',
        label2: 'Description C',
        leftSlot: <Heart width={24} height={24} />,
        onPress: () => console.log('Third action pressed'),
        disabled: true,
      },
    ],
    segmentedButtonProps: {
      buttons: [
        { label: 'Recentes', onPress: () => console.log('Recentes pressed') },
        { label: 'Favoritos', onPress: () => console.log('Favoritos pressed') },
      ],
    },
  },
};

export const SingleAction: Story = {
  args: {
    actions: [
      {
        id: 'single-action',
        text1: 'Single Action Item',
        text2: 'Complete',
        label1: 'Status',
        label2: 'Click to proceed',
        badge: { size: 'small', color: 'danger', children: 'Done' },
        leftSlot: <Heart width={24} height={24} />,
        onPress: () => console.log('Single action pressed'),
        disabled: false,
      },
    ],
  },
};

export const MinimalActions: Story = {
  args: {
    actions: [
      {
        id: 'minimal-1',
        text1: 'Simple Item 1',
        onPress: () => console.log('Simple 1 pressed'),
      },
      {
        id: 'minimal-2',
        text1: 'Simple Item 2',
        onPress: () => console.log('Simple 2 pressed'),
      },
      {
        id: 'minimal-3',
        text1: 'Simple Item 3',
        onPress: () => console.log('Simple 3 pressed'),
        disabled: true,
      },
    ],
  },
};
