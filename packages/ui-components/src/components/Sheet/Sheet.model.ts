import { ReactNode } from 'react';
import { AnimationKeys, SnapPointsMode } from 'tamagui';

export interface SheetHeaderProps {
  icon?: ReactNode;
  title?: string;
}

export interface SheetProps {
  /** Whether the sheet is open */
  open: boolean;
  /** Callback when sheet open state changes */
  onOpenChange: (open: boolean) => void;
  /** Sheet content */
  children: ReactNode;
  /** Header configuration */
  header?: SheetHeaderProps;
  /** Whether to show scroll view */
  scrollView?: boolean;
  /** Snap points for the sheet */
  snapPoints?: number[];
  /** Snap points mode */
  snapPointsMode?: SnapPointsMode;
  /** Animation type */
  animation?: AnimationKeys;
  /** Whether sheet is modal */
  modal?: boolean;
  /** Whether to dismiss on snap to bottom */
  dismissOnSnapToBottom?: boolean;
  /** Whether title should be left aligned */
  titleLeftAligned?: boolean;
}
