import React from 'react';
import { ButtonProps as TamaguiButtonProps } from 'tamagui';

export type ButtonType = 'plain' | 'outline' | 'chromeless';
export type ButtonSize = 'large' | 'standard' | 'small';

export interface ButtonProps {
  theme?: TamaguiButtonProps['theme'];
  type?: ButtonType;
  size?: ButtonSize;
  disabled?: boolean;
  loading?: boolean;
  children?: React.ReactNode;
  icon?: TamaguiButtonProps['icon'];
  iconAfter?: TamaguiButtonProps['iconAfter'];
  onPress?: TamaguiButtonProps['onPress'];
}
