import React from 'react';
import {
  TamaguiProvider as TamaguiProviderBase,
  type TamaguiProviderProps,
} from 'tamagui';
import { dscConfig } from './tamagui.config';

type DscProviderProps = TamaguiProviderProps & { children: React.ReactNode };

export function TamaguiProvider({ children, ...props }: DscProviderProps) {
  return (
    <TamaguiProviderBase config={dscConfig} {...props}>
      {children}
    </TamaguiProviderBase>
  );
}
