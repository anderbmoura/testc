import React from 'react';
import type { InputMoneyContainerProps } from './InputMoneyContainer.model';
import {
  StyledInputMoneyContainer,
  StyledValueContainer,
  StyledFeedbackContainer,
} from './InputMoneyContainer.styles';

/**
 * Container principal do InputMoney
 */
export const InputMoneyContainer: React.FC<InputMoneyContainerProps> = ({
  children,
  shouldShowHoverBackground,
  isFocused,
  isKeyboardFocused = false,
  onPress,
  onHoverIn,
  onHoverOut,
  onPressIn,
  onPressOut,
}) => (
  <StyledInputMoneyContainer
    onPress={onPress}
    onHoverIn={onHoverIn}
    onHoverOut={onHoverOut}
    onPressIn={onPressIn}
    onPressOut={onPressOut}
  >
    <StyledValueContainer
      {...(shouldShowHoverBackground
        ? { hasHoverBackground: true }
        : { hasHoverBackground: false })}
      {...(isFocused ? { focused: true } : { focused: false })}
      {...(isKeyboardFocused
        ? { keyboardFocused: true }
        : { keyboardFocused: false })}
    >
      {children}
    </StyledValueContainer>
  </StyledInputMoneyContainer>
);

/**
 * Container separado para o feedback
 */
export const InputMoneyFeedbackContainer: React.FC<{
  children: React.ReactNode;
}> = ({ children }) => (
  <StyledFeedbackContainer>{children}</StyledFeedbackContainer>
);
