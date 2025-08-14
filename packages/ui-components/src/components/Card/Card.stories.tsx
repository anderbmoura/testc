import type { Meta, StoryObj } from '@storybook/react';
import { Card } from './Card';
import type { CardProps } from './Card.model';
import { Text, YStack } from 'tamagui';

const meta: Meta<CardProps> = {
  title: 'Components/Card',
  component: Card,
  parameters: {
    layout: 'centered',
    docs: {
      description: {
        component:
          'A versatile card component that can display content with different visual styles.',
      },
    },
  },
  argTypes: {
    type: {
      control: { type: 'select' },
      options: ['outline', 'plain'],
      description: 'Visual appearance variant of the card',
    },
    children: {
      control: false,
      description: 'Content displayed inside the card',
    },
    onPress: {
      action: 'pressed',
      description: 'Callback fired when card is pressed',
    },
  },
  tags: ['autodocs'],
};

export default meta;

type Story = StoryObj<CardProps>;

const SampleContent = () => (
  <YStack gap="$2" padding="$2">
    <Text fontSize="$5" fontWeight="600" color="$color12">
      Card Title
    </Text>
    <Text fontSize="$3" color="$color11">
      This is sample content inside the card. You can put any React components
      here.
    </Text>
  </YStack>
);

export const Outline: Story = {
  args: {
    type: 'outline',
    children: <SampleContent />,
  },
};

export const Plain: Story = {
  args: {
    type: 'plain',
    children: <SampleContent />,
  },
};

export const DefaultCard: Story = {
  args: {
    type: 'plain',
    children: (
      <YStack
        gap="$2"
        padding="$2"
        flex={1}
        justifyContent="center"
        alignItems="center"
      >
        <Text fontSize="$6" fontWeight="600" color="$color12">
          Default Card
        </Text>
        <Text fontSize="$4" color="$color11" textAlign="center">
          This card uses the default dimensions from Figma (312x132)
        </Text>
      </YStack>
    ),
  },
};

export const Pressable: Story = {
  args: {
    type: 'outline',
    onPress: () => alert('Card pressed!'),
    children: (
      <YStack gap="$2" padding="$2" alignItems="center" justifyContent="center">
        <Text fontSize="$5" fontWeight="600" color="$color12">
          Pressable Card
        </Text>
        <Text fontSize="$3" color="$color11" textAlign="center">
          Click me to see the press action
        </Text>
      </YStack>
    ),
  },
};

export const Playground: Story = {
  args: {
    type: 'plain',
    children: <SampleContent />,
  },
};
