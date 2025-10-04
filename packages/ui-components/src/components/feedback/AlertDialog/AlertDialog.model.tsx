import { ComponentProps, PropsWithChildren } from 'react';
import { AlertDialog as TAlertDialog } from 'tamagui';

export interface AlertDialogTriggerProps
  extends ComponentProps<typeof TAlertDialog.Trigger> {
  children: React.ReactNode;
}

/**
 * Props for the AlertDialog component
 */
export type AlertDialogProps = PropsWithChildren<{
  /** The element that triggers the dialog when clicked */
  trigger: React.ReactElement;
  /** Optional title content for the dialog */
  title?: React.ReactNode;
  /** Main description content for the dialog */
  description: React.ReactNode;
  /** Action buttons (typically Cancel and Confirm) */
  actions?: React.ReactNode;
}>;
