import React, { createContext, useContext } from 'react';
import type { PropsWithChildren } from 'react';
import type { InputPinContextValue } from '../InputPin.model';

const InputPinContext = createContext<InputPinContextValue | null>(null);

export const InputPinContextProvider: React.FC<
  PropsWithChildren<{ value: InputPinContextValue }>
> = ({ value, children }) => (
  <InputPinContext.Provider value={value}>{children}</InputPinContext.Provider>
);

export const useInputPinContext = () => {
  const context = useContext(InputPinContext);

  if (!context) {
    throw new Error(
      'useInputPinContext deve ser utilizado dentro de um InputPinContextProvider'
    );
  }

  return context;
};
