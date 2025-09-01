import type { Meta, StoryObj } from '@storybook/react';
import React from 'react';
import { View } from 'tamagui';
import Button from '../Button';
import { AlertDialog } from './AlertDialog';

const meta: Meta<typeof AlertDialog> = {
  title: 'Componentes/Overlays/AlertDialog',
  component: AlertDialog,
  parameters: {
    layout: 'centered',
    docs: {
      description: {
        component: `
# AlertDialog

A modal dialog component for displaying critical information and prompting user decisions. Built on top of Tamagui's AlertDialog with DSC design tokens and accessibility features.

## Features

- Modal Overlay: Blocks interaction with background content
- Accessible: Follows WAI-ARIA dialog patterns
- Animated: Smooth enter/exit animations
- Compound Pattern: Flexible composition with sub-components
- Native Support: Uses platform-native dialogs when available
- Customizable: Supports custom styling and theming

## Usage

\`\`\`tsx
import { AlertDialog } from '@superapp-caixa/dsc-library';

<AlertDialog
  trigger={
    <AlertDialog.Trigger>
      <Button>Delete Item</Button>
    </AlertDialog.Trigger>
  }
  title={<AlertDialog.Title>Confirm Delete</AlertDialog.Title>}
  description={
    <AlertDialog.Description>
      Are you sure you want to delete this item? This action cannot be undone.
    </AlertDialog.Description>
  }
  actions={
    <>
      <AlertDialog.Cancel>
        <Button type="chromeless">Cancel</Button>
      </AlertDialog.Cancel>
      <AlertDialog.Action>
        <Button theme="accent">Delete</Button>
      </AlertDialog.Action>
    </>
  }
/>
\`\`\`
        `,
      },
    },
  },
  decorators: [
    Story => (
      <View padding={24} backgroundColor="$background" minHeight={400}>
        <Story />
      </View>
    ),
  ],
} satisfies Meta<typeof AlertDialog>;

export default meta;
type Story = StoryObj<typeof meta>;

/**
 * Basic AlertDialog with confirmation flow
 */
export const Default: Story = {
  render: () => (
    <AlertDialog
      trigger={
        <AlertDialog.Trigger>
          <Button>Show Alert Dialog</Button>
        </AlertDialog.Trigger>
      }
      title={<AlertDialog.Title>Alert Title</AlertDialog.Title>}
      description={
        <AlertDialog.Description>
          A dialog is a type of modal window that appears in front of app
          content to provide critical information, or prompt for a decision to
          be made.
        </AlertDialog.Description>
      }
      actions={
        <>
          <AlertDialog.Cancel>
            <Button type="chromeless">Cancel</Button>
          </AlertDialog.Cancel>
          <AlertDialog.Action>
            <Button theme="accent">Accept</Button>
          </AlertDialog.Action>
        </>
      }
    />
  ),
};

/**
 * Destructive action confirmation
 */
export const Destructive: Story = {
  render: () => (
    <AlertDialog
      trigger={
        <AlertDialog.Trigger>
          <Button>Delete Account</Button>
        </AlertDialog.Trigger>
      }
      title={<AlertDialog.Title>Delete Account</AlertDialog.Title>}
      description={
        <AlertDialog.Description>
          This action cannot be undone. This will permanently delete your
          account and remove all your data from our servers.
        </AlertDialog.Description>
      }
      actions={
        <>
          <AlertDialog.Cancel>
            <Button type="chromeless">Cancel</Button>
          </AlertDialog.Cancel>
          <AlertDialog.Action>
            <Button>Delete Account</Button>
          </AlertDialog.Action>
        </>
      }
    />
  ),
};

/**
 * Simple confirmation without title
 */
export const SimpleConfirmation: Story = {
  render: () => (
    <AlertDialog
      trigger={
        <AlertDialog.Trigger>
          <Button>Save Changes</Button>
        </AlertDialog.Trigger>
      }
      description={
        <AlertDialog.Description>
          Are you sure you want to save these changes?
        </AlertDialog.Description>
      }
      actions={
        <>
          <AlertDialog.Cancel>
            <Button type="chromeless">Cancel</Button>
          </AlertDialog.Cancel>
          <AlertDialog.Action>
            <Button theme="accent">Save</Button>
          </AlertDialog.Action>
        </>
      }
    />
  ),
};

/**
 * Information dialog with single action
 */
export const Information: Story = {
  render: () => (
    <AlertDialog
      trigger={
        <AlertDialog.Trigger>
          <Button type="chromeless">Show Info</Button>
        </AlertDialog.Trigger>
      }
      title={<AlertDialog.Title>Information</AlertDialog.Title>}
      description={
        <AlertDialog.Description>
          Your changes have been saved successfully. You can continue working on
          your project.
        </AlertDialog.Description>
      }
      actions={
        <AlertDialog.Action>
          <Button theme="accent">Got it</Button>
        </AlertDialog.Action>
      }
    />
  ),
};

/**
 * Error state dialog
 */
export const ErrorState: Story = {
  render: () => (
    <AlertDialog
      trigger={
        <AlertDialog.Trigger>
          <Button>Show Error</Button>
        </AlertDialog.Trigger>
      }
      title={<AlertDialog.Title>Error Occurred</AlertDialog.Title>}
      description={
        <AlertDialog.Description>
          Unable to complete the operation. Please check your internet
          connection and try again.
        </AlertDialog.Description>
      }
      actions={
        <>
          <AlertDialog.Cancel>
            <Button type="chromeless">Cancel</Button>
          </AlertDialog.Cancel>
          <AlertDialog.Action>
            <Button>Retry</Button>
          </AlertDialog.Action>
        </>
      }
    />
  ),
};

/**
 * Success confirmation
 */
export const Success: Story = {
  render: () => (
    <AlertDialog
      trigger={
        <AlertDialog.Trigger>
          <Button>Complete Action</Button>
        </AlertDialog.Trigger>
      }
      title={<AlertDialog.Title>Success!</AlertDialog.Title>}
      description={
        <AlertDialog.Description>
          Your action has been completed successfully. You will receive a
          confirmation email shortly.
        </AlertDialog.Description>
      }
      actions={
        <AlertDialog.Action>
          <Button>Continue</Button>
        </AlertDialog.Action>
      }
    />
  ),
};
