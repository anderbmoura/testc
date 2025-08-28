import type { Meta, StoryObj } from '@storybook/react';
import {
  Heart,
  Home,
  Mail,
  Phone,
  SeaWaves,
  Settings,
  Star,
  User,
} from 'iconoir-react-native';
import { YStack } from 'tamagui';
import { List } from './FlatItemList';
import { type Item, ListItem } from './ListItem';

const meta: Meta<typeof List> = {
  title: 'Componentes/List/FlatItemList',
  component: List,
  parameters: {
    layout: 'padded',
    docs: {
      description: {
        component: `
# FlatItemList

A customizable flat list component for displaying list items with various configurations including icons, navigation, and switch controls.

## Features

- **Flexible Item Display**: Support for titles, content, left/right icons
- **Interactive Elements**: Navigation arrows, switch controls
- **Customizable Icons**: Use any React Native icon library
- **Touch Feedback**: Configurable onPress handlers
- **Disabled State**: Support for disabled items
- **Separator**: Built-in item separators using Tamagui Separator

## Usage

\`\`\`tsx
import { List, Item } from '@superapp-caixa/dsc-library';

const data: Item[] = [
  {
    key: '1',
    title: 'Item 1',
    content: 'Description of item 1',
    iconRight: <Home />,
    onSelect: (item) => console.log('Selected:', item)
  }
];

<List 
  data={data} 
  renderItem={({ item }) => <ListItem {...item} />} 
/>
\`\`\`
        `,
      },
    },
  },
  tags: ['autodocs'],
  argTypes: {
    data: {
      description: 'Array of items to display in the list',
      control: { type: 'object' },
    },
    renderItem: {
      description: 'Function that renders each item',
      control: false,
    },
  },
};

export default meta;
type Story = StoryObj<typeof List>;

// Sample data for stories
const basicData: Item[] = [
  {
    id: '1',
    title: 'Basic Item',
    content: 'Simple list item without icons',
  },
  {
    id: '2',
    title: 'Another Item',
    content: 'Another simple list item',
  },
  {
    id: '3',
    title: 'Third Item',
    content: 'One more basic item for the list',
  },
];

const iconsData: Item[] = [
  {
    id: '1',
    title: 'Home',
    content: 'Navigate to home screen',
    iconLeft: <Home />,
    iconRight: <Home />,
  },
  {
    id: '2',
    title: 'Settings',
    content: 'Application settings',
    iconLeft: <Settings />,
  },
  {
    id: '3',
    title: 'Profile',
    content: 'User profile information',
    iconRight: <User />,
  },
  {
    id: '4',
    title: 'Sea Waves',
    content: 'Custom icon from iconoir',
    iconLeft: <SeaWaves height={24} width={24} />,
  },
];

const interactiveData: Item[] = [
  {
    id: '1',
    title: 'Navigation Item',
    content: 'Click to navigate',
    nav: true,
    onSelect: item => {
      console.log('Navigate to:', item.title);
    },
  },
  {
    id: '2',
    title: 'Settings Toggle',
    content: 'Enable or disable notifications',
    switchButton: true,
    iconLeft: <Settings />,
    onSelect: (item, switchState) => {
      console.log('Toggle:', item.title, 'State:', switchState);
    },
  },
  {
    id: '3',
    title: 'Profile Settings',
    content: 'Manage your profile',
    nav: true,
    iconLeft: <User />,
    onSelect: item => {
      console.log('Open profile:', item);
    },
  },
  {
    id: '4',
    title: 'Auto-sync',
    content: 'Automatically sync data',
    switchButton: true,
    onSelect: (item, switchState) => {
      console.log('Auto-sync:', switchState);
    },
  },
];

const disabledData: Item[] = [
  {
    id: '1',
    title: 'Active Item',
    content: 'This item is active and clickable',
    iconLeft: <Home />,
    nav: true,
    onSelect: () => console.log('Active item selected'),
  },
  {
    id: '2',
    title: 'Disabled Item',
    content: 'This item is disabled',
    iconLeft: <Settings />,
    disabled: true,
    nav: true,
    onSelect: () => console.log('This should not be called'),
  },
  {
    id: '3',
    title: 'Disabled Switch',
    content: 'This switch is disabled',
    iconLeft: <User />,
    switchButton: true,
    disabled: true,
    onSelect: () => console.log('This should not be called'),
  },
];

const complexData: Item[] = [
  {
    id: '1',
    title: 'Email Notifications',
    content: 'Receive notifications via email',
    iconLeft: <Mail />,
    switchButton: true,
    onSelect: (item, switchState) => {
      console.log('Email notifications:', switchState);
    },
  },
  {
    id: '2',
    title: 'Contact Support',
    content: 'Get help from our support team',
    iconLeft: <Phone />,
    nav: true,
    onSelect: () => {
      console.log('Opening support...');
    },
  },
  {
    id: '3',
    title: 'Favorites',
    content: 'View your favorite items',
    iconLeft: <Heart height={24} width={24} />,
    iconRight: <Star height={20} width={20} />,
    nav: true,
    onSelect: () => {
      console.log('Opening favorites...');
    },
  },
  {
    id: '4',
    title: 'Premium Features',
    content: 'Upgrade to unlock premium features',
    iconLeft: <Settings />,
    nav: true,
    disabled: false,
    onSelect: () => {
      console.log('Opening premium upgrade...');
    },
  },
];

// Render item function
const renderItem = (item: Item) => {
  const { id, ...props } = item;
  return (
    <YStack>
      <ListItem id={id} {...props} />
    </YStack>
  );
};

export const Basic: Story = {
  args: {
    data: basicData,
    renderItem: ({ item }) => renderItem(item as Item),
  },
  parameters: {
    docs: {
      description: {
        story: 'Basic list items with titles and content only.',
      },
    },
  },
};

export const WithIcons: Story = {
  args: {
    data: iconsData,
    renderItem: ({ item }) => renderItem(item as Item),
  },
  parameters: {
    docs: {
      description: {
        story:
          'List items with left and right icons using different icon libraries.',
      },
    },
  },
};

export const Interactive: Story = {
  args: {
    data: interactiveData,
    renderItem: ({ item }) => renderItem(item as Item),
  },
  parameters: {
    docs: {
      description: {
        story:
          'Interactive list items with navigation arrows and switch controls. Check the console for interaction logs.',
      },
    },
  },
};

export const DisabledStates: Story = {
  args: {
    data: disabledData,
    renderItem: ({ item }) => renderItem(item as Item),
  },
  parameters: {
    docs: {
      description: {
        story: 'Demonstrates disabled state behavior for different item types.',
      },
    },
  },
};

export const Complex: Story = {
  args: {
    data: complexData,
    renderItem: ({ item }) => renderItem(item as Item),
  },
  parameters: {
    docs: {
      description: {
        story:
          'Complex example showing various combinations of icons, switches, and navigation elements.',
      },
    },
  },
};

export const SingleItem: Story = {
  args: {
    data: [
      {
        key: '1',
        title: 'Single Item',
        content: 'A single item in the list',
        iconLeft: <Home />,
        nav: true,
        onSelect: () => console.log('Single item selected'),
      },
    ],
    renderItem: ({ item }) => renderItem(item as Item),
  },
  parameters: {
    docs: {
      description: {
        story: 'Example with a single list item.',
      },
    },
  },
};

export const EmptyList: Story = {
  args: {
    data: [],
    renderItem: ({ item }) => renderItem(item as Item),
  },
  parameters: {
    docs: {
      description: {
        story: 'Empty list to show how the component handles no data.',
      },
    },
  },
};
