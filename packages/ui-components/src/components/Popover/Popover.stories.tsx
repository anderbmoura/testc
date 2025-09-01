import type { Meta, StoryObj } from '@storybook/react';
import React from 'react';
import { Text, View, XStack, YStack } from 'tamagui';
import Button from '../Button';
import { Popover } from './Popover';

const meta: Meta<typeof Popover> = {
  title: 'Components/Overlays/Popover',
  component: Popover,
  parameters: {
    layout: 'centered',
    docs: {
      description: {
        component: `
# Popover

A floating content container that appears relative to a trigger element. Built on top of Tamagui's Popover with DSC design tokens and enhanced styling.

## Features

- **Flexible Positioning**: Supports multiple placement options (top, bottom, left, right)
- **Accessible**: Follows WAI-ARIA popover patterns with proper focus management
- **Animated**: Smooth enter/exit animations with customizable transitions
- **Auto-positioning**: Automatically adjusts position to stay within viewport
- **Focus Management**: Traps focus within popover content when open
- **Dismissible**: Closes on outside click or escape key
- **Compound Pattern**: Flexible composition with sub-components

## Design Tokens

- **Background**: Uses \`$neutralBg2\` for content background
- **Border**: \`$borderColor\` with \`$radius.large\` border radius
- **Shadow**: Elevated appearance with custom shadow configuration
- **Spacing**: DSC spacing tokens (\`$smaller\`)
- **Animation**: Quick animation with opacity transitions

## Usage

\`\`\`tsx
import { Popover } from '@superapp-caixa/dsc-library';

<Popover placement="bottom">
  <Popover.Trigger>
    <Button>Open Popover</Button>
  </Popover.Trigger>
  <Popover.Content>
    <Popover.Arrow />
    <Text>Popover content goes here</Text>
    <Popover.Close>
      <Button size="small">Close</Button>
    </Popover.Close>
  </Popover.Content>
</Popover>
\`\`\`

## Sub-components

- **Popover.Trigger**: Element that triggers the popover
- **Popover.Content**: Main content container with styling
- **Popover.Arrow**: Optional arrow pointing to trigger
- **Popover.Close**: Close button or element
- **Popover.FocusScope**: Focus management wrapper

## Accessibility

- **Keyboard Navigation**: Supports Tab, Shift+Tab, and Escape keys
- **Focus Management**: Automatically manages focus when opened/closed
- **Screen Reader**: Proper ARIA labels and relationships
- **Focus Trap**: Keeps focus within popover when open
        `,
      },
    },
  },
  argTypes: {
    placement: {
      description: 'Position of the popover relative to trigger',
      control: { type: 'select' },
      options: [
        'top',
        'bottom',
        'left',
        'right',
        'top-start',
        'top-end',
        'bottom-start',
        'bottom-end',
        'left-start',
        'left-end',
        'right-start',
        'right-end',
      ],
      table: {
        type: { summary: 'string' },
        defaultValue: { summary: 'bottom' },
      },
    },
    open: {
      description: 'Controlled open state',
      control: { type: 'boolean' },
      table: {
        type: { summary: 'boolean' },
        defaultValue: { summary: 'undefined' },
      },
    },
    defaultOpen: {
      description: 'Default open state for uncontrolled usage',
      control: { type: 'boolean' },
      table: {
        type: { summary: 'boolean' },
        defaultValue: { summary: 'false' },
      },
    },
  },
  decorators: [
    Story => (
      <View padding={40} backgroundColor="$background" minHeight={400}>
        <Story />
      </View>
    ),
  ],
} satisfies Meta<typeof Popover>;

export default meta;
type Story = StoryObj<typeof meta>;

/**
 * Basic popover with simple text content
 */
export const Default: Story = {
  render: () => (
    <Popover placement="bottom">
      <Popover.Trigger>
        <Button>Open Popover</Button>
      </Popover.Trigger>
      <Popover.Content>
        <Popover.Arrow />
        <Text>This is a simple popover with some text content.</Text>
      </Popover.Content>
    </Popover>
  ),
};

/**
 * Popover with close button and focus management
 */
export const WithCloseButton: Story = {
  render: () => (
    <Popover placement="bottom">
      <Popover.Trigger>
        <Button>Show Popover</Button>
      </Popover.Trigger>
      <Popover.Content>
        <Popover.Arrow />
        <YStack gap={8} padding={8}>
          <Text fontWeight="600">Popover Title</Text>
          <Text color="$color11">
            This popover includes a close button and proper focus management.
          </Text>
          <Popover.Close>
            <Button size="small">Close</Button>
          </Popover.Close>
        </YStack>
      </Popover.Content>
    </Popover>
  ),
};

/**
 * Popover positioned to the right of trigger
 */
export const RightPlacement: Story = {
  render: () => (
    <Popover placement="right">
      <Popover.Trigger>
        <Button>Right Popover</Button>
      </Popover.Trigger>
      <Popover.Content>
        <Popover.Arrow />
        <YStack gap="$size.2" maxWidth={200}>
          <Text fontWeight="600">Right Positioned</Text>
          <Text>This popover appears to the right of the trigger element.</Text>
        </YStack>
      </Popover.Content>
    </Popover>
  ),
};

/**
 * Popover positioned above the trigger
 */
export const TopPlacement: Story = {
  render: () => (
    <Popover placement="top">
      <Popover.Trigger>
        <Button>Top Popover</Button>
      </Popover.Trigger>
      <Popover.Content>
        <Popover.Arrow />
        <YStack gap="$size.2" maxWidth={200}>
          <Text fontWeight="600">Top Positioned</Text>
          <Text>This popover appears above the trigger element.</Text>
        </YStack>
      </Popover.Content>
    </Popover>
  ),
};

/**
 * Popover positioned to the left of trigger
 */
export const LeftPlacement: Story = {
  render: () => (
    <Popover placement="left">
      <Popover.Trigger>
        <Button>Left Popover</Button>
      </Popover.Trigger>
      <Popover.Content>
        <Popover.Arrow />
        <YStack gap="$size.2" maxWidth={200}>
          <Text fontWeight="600">Left Positioned</Text>
          <Text>This popover appears to the left of the trigger element.</Text>
        </YStack>
      </Popover.Content>
    </Popover>
  ),
};

/**
 * Popover with rich content including buttons and links
 */
export const RichContent: Story = {
  render: () => (
    <Popover placement="bottom">
      <Popover.Trigger>
        <Button>User Menu</Button>
      </Popover.Trigger>
      <Popover.Content>
        <Popover.Arrow />
        <YStack gap="$size.3" padding="$size.3" minWidth={200}>
          <YStack gap="$size.1">
            <Text fontWeight="600">John Doe</Text>
            <Text color="$color11">john.doe@example.com</Text>
          </YStack>
          <YStack gap="$size.2">
            <Button type="chromeless">Profile Settings</Button>
            <Button type="chromeless">Account Preferences</Button>
            <Button type="chromeless">Help & Support</Button>
          </YStack>
          <XStack
            borderTopWidth={1}
            borderColor="$borderColor"
            paddingTop="$size.2"
          >
            <Popover.Close asChild>
              <Button size="standard" type="outline">
                Sign Out
              </Button>
            </Popover.Close>
          </XStack>
        </YStack>
      </Popover.Content>
    </Popover>
  ),
};

/**
 * Popover with focus scope for keyboard navigation
 */
export const WithFocusScope: Story = {
  render: () => (
    <Popover placement="bottom">
      <Popover.Trigger>
        <Button>Open Menu</Button>
      </Popover.Trigger>
      <Popover.FocusScope loop trapped>
        <Popover.Content>
          <Popover.Arrow />
          <YStack gap="$size.2" padding="$size.3">
            <Text fontWeight="600">Navigation Menu</Text>
            <YStack gap="$size.1">
              <Button type="chromeless">Dashboard</Button>
              <Button type="chromeless">Projects</Button>
              <Button type="chromeless">Settings</Button>
            </YStack>
            <Popover.Close>
              <Button type="outline">Close</Button>
            </Popover.Close>
          </YStack>
        </Popover.Content>
      </Popover.FocusScope>
    </Popover>
  ),
};

/**
 * Multiple popovers to demonstrate positioning
 */
export const MultiplePlacements: Story = {
  render: () => (
    <YStack gap="$size.4" alignItems="center">
      <Popover placement="top">
        <Popover.Trigger>
          <Button>Top</Button>
        </Popover.Trigger>
        <Popover.Content>
          <Popover.Arrow />
          <Text padding="$size.3">Top placement</Text>
        </Popover.Content>
      </Popover>

      <XStack gap="$size.4">
        <Popover placement="left">
          <Popover.Trigger>
            <Button>Left</Button>
          </Popover.Trigger>
          <Popover.Content>
            <Popover.Arrow />
            <Text padding="$size.3">Left placement</Text>
          </Popover.Content>
        </Popover>

        <Popover placement="right">
          <Popover.Trigger>
            <Button>Right</Button>
          </Popover.Trigger>
          <Popover.Content>
            <Popover.Arrow />
            <Text padding="$size.3">Right placement</Text>
          </Popover.Content>
        </Popover>
      </XStack>

      <Popover placement="bottom">
        <Popover.Trigger>
          <Button>Bottom</Button>
        </Popover.Trigger>
        <Popover.Content>
          <Popover.Arrow />
          <Text padding="$size.3">Bottom placement</Text>
        </Popover.Content>
      </Popover>
    </YStack>
  ),
};

/**
 * Popover without arrow
 */
export const WithoutArrow: Story = {
  render: () => (
    <Popover placement="bottom">
      <Popover.Trigger>
        <Button>No Arrow</Button>
      </Popover.Trigger>
      <Popover.Content>
        <YStack gap="$size.2" padding="$size.3">
          <Text fontWeight="600">Clean Popover</Text>
          <Text>
            This popover doesn't have an arrow, giving it a cleaner appearance.
          </Text>
        </YStack>
      </Popover.Content>
    </Popover>
  ),
};

/**
 * Controlled popover example
 */
export const Controlled: Story = {
  render: () => {
    const [open, setOpen] = React.useState(false);

    return (
      <YStack gap="$size.3" alignItems="center">
        <XStack gap="$size.2">
          <Button onPress={() => setOpen(true)} disabled={open}>
            Open Popover
          </Button>
          <Button
            onPress={() => setOpen(false)}
            disabled={!open}
            type="outline"
          >
            Close Popover
          </Button>
        </XStack>

        <Popover placement="bottom" open={open} onOpenChange={setOpen}>
          <Popover.Trigger>
            <Button>Controlled Trigger</Button>
          </Popover.Trigger>
          <Popover.Content>
            <Popover.Arrow />
            <YStack gap="$size.2" padding="$size.3">
              <Text fontWeight="600">Controlled Popover</Text>
              <Text>This popover's state is controlled externally.</Text>
              <Text color="$color11">Open: {open ? 'true' : 'false'}</Text>
            </YStack>
          </Popover.Content>
        </Popover>
      </YStack>
    );
  },
};

/**
 * Interactive playground for testing different configurations
 */
export const Playground: Story = {
  args: {
    placement: 'bottom',
    defaultOpen: false,
  },
  render: args => (
    <Popover {...args}>
      <Popover.Trigger>
        <Button>Playground Popover</Button>
      </Popover.Trigger>
      <Popover.Content>
        <Popover.Arrow />
        <YStack gap="$size.2" padding="$size.3" maxWidth={250}>
          <Text fontWeight="600">Playground</Text>
          <Text>
            Use the controls panel to test different popover configurations and
            placements.
          </Text>
          <Text color="$color11">Placement: {args.placement}</Text>
          <Popover.Close>
            <Button>Close</Button>
          </Popover.Close>
        </YStack>
      </Popover.Content>
    </Popover>
  ),
};
