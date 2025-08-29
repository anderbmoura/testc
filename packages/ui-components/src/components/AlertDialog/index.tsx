import type { ComponentProps, PropsWithChildren } from 'react';
import React from 'react';
import {
  styled,
  AlertDialog as TAlertDialog,
  useThemeName,
  withStaticProperties,
  XStack,
  YStack,
} from 'tamagui';
import Button from '../Button';
import { AlertDialogProps, AlertDialogTriggerProps } from './AlertDialog.model';

/**
 * Wrapper for elements that trigger the AlertDialog
 */
export function AlertDialogTrigger({
  children,
  ...props
}: AlertDialogTriggerProps) {
  return (
    <TAlertDialog.Trigger asChild {...props}>
      {children}
    </TAlertDialog.Trigger>
  );
}

/**
 * Styled title component for AlertDialog
 */
export const AlertDialogTitle = styled(TAlertDialog.Title, {
  fontWeight: 600,
  fontSize: '$smaller',
  fontFamily: '$heading',
});

/**
 * Styled description component for AlertDialog
 */
export const AlertDialogDescription = styled(TAlertDialog.Description, {
  fontSize: '$micro',
  fontWeight: 400,
  color: '$neutral9',
  letterSpacing: 0.5,
});

/**
 * Wrapper for cancel action elements
 */
export function AlertDialogCancel({
  children,
  ...props
}: PropsWithChildren<ComponentProps<typeof TAlertDialog.Cancel>>) {
  return (
    <TAlertDialog.Cancel {...props} asChild>
      {children}
    </TAlertDialog.Cancel>
  );
}

/**
 * Wrapper for primary action elements
 */
export function AlertDialogAction({
  children,
  ...props
}: PropsWithChildren<ComponentProps<typeof TAlertDialog.Action>>) {
  return (
    <TAlertDialog.Action {...props} asChild>
      {children}
    </TAlertDialog.Action>
  );
}

/**
 * AlertDialog component for displaying modal confirmations
 *
 * @example
 * ```tsx
 * <AlertDialog
 *   trigger={
 *     <AlertDialog.Trigger>
 *       <Button>Delete Item</Button>
 *     </AlertDialog.Trigger>
 *   }
 *   title={<AlertDialog.Title>Confirm Delete</AlertDialog.Title>}
 *   description={
 *     <AlertDialog.Description>
 *       Are you sure you want to delete this item?
 *     </AlertDialog.Description>
 *   }
 *   actions={
 *     <>
 *       <AlertDialog.Cancel>
 *         <Button type="chromeless">Cancel</Button>
 *       </AlertDialog.Cancel>
 *       <AlertDialog.Action>
 *         <Button theme="accent">Delete</Button>
 *       </AlertDialog.Action>
 *     </>
 *   }
 * />
 * ```
 */
export function AlertDialogFrame({
  trigger,
  title,
  description,
  actions,
}: AlertDialogProps) {
  const currentTheme = useThemeName();
  const borderColor = currentTheme === 'dark' ? '$neutral5' : '$neutral5';
  return (
    <TAlertDialog native>
      {trigger}

      <TAlertDialog.Portal>
        <TAlertDialog.Overlay
          key="overlay"
          animation="quick"
          opacity={0.5}
          enterStyle={{ opacity: 0 }}
          exitStyle={{ opacity: 0 }}
        />
        <TAlertDialog.Content
          bordered
          elevate
          maxWidth={360}
          p="$smaller"
          key="content"
          backgroundColor="$neutral1"
          borderColor={borderColor}
          borderTopLeftRadius={'$radius.large'}
          borderTopRightRadius={'$radius.large'}
          borderBottomLeftRadius={'$radius.large'}
          borderBottomRightRadius={'$radius.large'}
          animation={[
            'quick',
            {
              opacity: {
                overshootClamping: true,
              },
            },
          ]}
          enterStyle={{ x: 0, y: -20, opacity: 0, scale: 0.9 }}
          exitStyle={{ x: 0, y: 10, opacity: 0, scale: 0.95 }}
          x={0}
          scale={1}
          opacity={1}
          y={0}
        >
          <YStack gap="$size.4">
            {title}
            {description}

            <XStack
              gap="$size.3"
              justifyContent="flex-end"
              maxWidth="100%"
              flex={1}
            >
              {actions}
            </XStack>
          </YStack>
        </TAlertDialog.Content>
      </TAlertDialog.Portal>
    </TAlertDialog>
  );
}

/**
 * Main AlertDialog component with compound pattern
 *
 * Provides an accessible modal dialog for confirmations and critical actions.
 * Built on top of Tamagui's AlertDialog with DSC design tokens.
 *
 * @example
 * ```tsx
 * <AlertDialog
 *   trigger={<AlertDialog.Trigger><Button>Open</Button></AlertDialog.Trigger>}
 *   title={<AlertDialog.Title>Confirm Action</AlertDialog.Title>}
 *   description={<AlertDialog.Description>Are you sure?</AlertDialog.Description>}
 *   actions={
 *     <>
 *       <AlertDialog.Cancel><Button type="chromeless">Cancel</Button></AlertDialog.Cancel>
 *       <AlertDialog.Action><Button theme="accent">Confirm</Button></AlertDialog.Action>
 *     </>
 *   }
 * />
 * ```
 */
export const AlertDialog = withStaticProperties(AlertDialogFrame, {
  Title: AlertDialogTitle,
  Description: AlertDialogDescription,
  Trigger: AlertDialogTrigger,
  Cancel: AlertDialogCancel,
  Action: AlertDialogAction,
});

//// EXAMPLE ////
export function AlertDialogDemo() {
  return (
    <AlertDialog
      trigger={
        <AlertDialog.Trigger>
          <Button>Open Alert Dialog</Button>
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
    ></AlertDialog>
  );
}
