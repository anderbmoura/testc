import React from 'react';
import { StyledInputPinContainer } from './InputPinContainer.styles';
import type { InputPinContainerProps } from './InputPinContainer.model';

export const InputPinContainer: React.FC<InputPinContainerProps> = ({
  state,
  children,
  disabled = false,
  onPress,
  underline = false,
  testID,
  accessibilityLabel,
}) => {
  return (
    <StyledInputPinContainer
      state={state}
      underline={underline}
      disabled={disabled}
      onPress={disabled ? undefined : onPress}
      accessibilityRole="text"
      accessibilityLabel={accessibilityLabel}
      accessibilityState={{ disabled, selected: state === 'focused' }}
      testID={testID}
    >
      {children}
    </StyledInputPinContainer>
  );
};
