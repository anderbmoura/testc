import React from 'react';
import {
  TamaguiProvider as TamaguiProviderBase,
  type TamaguiProviderProps,
} from 'tamagui';
import { DscConfig } from './tamagui.config';

type DSCProviderProps = TamaguiProviderProps & { children: React.ReactNode };

export function TamaguiProvider({ children, ...props }: DSCProviderProps) {
  return (
    <TamaguiProviderBase config={DscConfig} {...props}>
      {children}
    </TamaguiProviderBase>
  );
}
