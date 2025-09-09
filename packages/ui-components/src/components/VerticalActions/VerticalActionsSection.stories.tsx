import type { Meta, StoryObj } from '@storybook/react';
import { Heart, Home, User } from 'iconoir-react-native';
import { View } from 'tamagui';
import VerticalActionsSection from './VerticalActionsSection';
import { VerticalActionsSectionProps } from './VerticalActionsSection.model';

const meta: Meta<VerticalActionsSectionProps> = {
  title: 'Templates/VerticalActions/VerticalActionsSection',
  component: VerticalActionsSection,
  parameters: {
    layout: 'centered',
    docs: {
      description: {
        component: `
Componente DSC VerticalActionsSection. Exibe uma seção com título,
e uma lista de itens interativos dentro de um Card. Cada item da lista
é representado pelo componente VerticalActionsItem. Opcionalmente, um TextButton
pode ser exibido ao lado do título da seção.

## Como usar

\`\`\`tsx
import { VerticalActionsSection } from '@superapp-caixa/dsc-library';

<VerticalActionsSection
  title="Section Title"
  textButton={{
    label: 'Action',
    onPress: () => console.log('Text button pressed')
  }}
  actions={[
    {
      id: 'My unique id',
      text1: 'Text 1',
      text2: 'Text 2',
      label1: 'Label 1',
      label2: 'Label 2',
      badge: { size: 'medium', color: 'highlight', children: 'Label' },
      onPress: () => console.log('Item pressed'),
      disabled: false,
    },
  ]}
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
        <VerticalActionsSection {...args} />
      </View>
    );
  },
  argTypes: {
    title: {
      control: 'text',
      description: 'Título da seção.',
    },
    textButton: {
      control: 'object',
      description: 'Botão de texto opcional, exibido à direita do título.',
    },
    actions: {
      control: 'object',
      description:
        'Array de props para os componentes VerticalActionsItem a serem exibidos.',
    },
  },
};

export default meta;

type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {
    title: 'Actions Section',
    textButton: {
      label: 'View All',
      onPress: () => console.log('View All pressed'),
    },
    actions: [
      {
        id: 'section-action-1',
        text1: 'Account Balance',
        text2: 'R$ 50,00',
        label1: 'Checking Account',
        label2: 'Available for use',
        badge: { size: 'medium', color: 'highlight', children: 'Active' },
        leftSlot: <Home width={24} height={24} />,
        onPress: () => console.log('Account Balance pressed'),
        disabled: false,
      },
      {
        id: 'section-action-2',
        text1: 'Credit Card',
        text2: 'R$ 500,00',
        label1: 'Available Limit',
        label2: 'Next payment: 15/10',
        leftSlot: <User width={24} height={24} />,
        onPress: () => console.log('Credit Card pressed'),
        disabled: false,
      },
      {
        id: 'section-action-3',
        text1: 'Investments',
        text2: 'R$ 5.750,00',
        label1: 'Total Invested',
        label2: '+2.5% this month',
        badge: { size: 'small', color: 'highlight', children: 'Growth' },
        leftSlot: <Heart width={24} height={24} />,
        onPress: () => console.log('Investments pressed'),
        disabled: false,
      },
    ],
  },
};

export const WithoutTextButton: Story = {
  args: {
    title: 'Recent Transactions',
    actions: [
      {
        id: 'transaction-1',
        text1: 'Supermarket Purchase',
        text2: '- R$ 85,40',
        label1: 'Today, 14:30',
        label2: 'Debit Card',
        leftSlot: <Home width={24} height={24} />,
        onPress: () => console.log('Transaction 1 pressed'),
        disabled: false,
      },
      {
        id: 'transaction-2',
        text1: 'Salary Deposit',
        text2: '+ R$ 3.500,00',
        label1: 'Yesterday, 08:00',
        label2: 'Direct Deposit',
        leftSlot: <User width={24} height={24} />,
        onPress: () => console.log('Transaction 2 pressed'),
        disabled: false,
      },
    ],
  },
};

export const SingleActionWithButton: Story = {
  args: {
    title: 'Quick Actions',
    textButton: {
      label: 'More',
      onPress: () => console.log('More pressed'),
    },
    actions: [
      {
        id: 'quick-action',
        text1: 'Transfer Money',
        text2: 'Instant',
        label1: 'Send to contacts',
        label2: 'Free between accounts',
        badge: { size: 'small', color: 'highlight', children: 'Free' },
        leftSlot: <Heart width={24} height={24} />,
        onPress: () => console.log('Transfer Money pressed'),
        disabled: false,
      },
    ],
  },
};

export const MinimalSection: Story = {
  args: {
    title: 'Simple List',
    actions: [
      {
        id: 'simple-1',
        text1: 'Option A',
        onPress: () => console.log('Option A pressed'),
      },
      {
        id: 'simple-2',
        text1: 'Option B',
        onPress: () => console.log('Option B pressed'),
      },
      {
        id: 'simple-3',
        text1: 'Option C (Disabled)',
        onPress: () => console.log('Option C pressed'),
        disabled: true,
      },
    ],
  },
};
