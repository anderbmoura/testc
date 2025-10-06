import React, { useCallback, useState, useRef } from 'react';
import { useInputInteractionState } from './hooks/useInputInteractionState';
import { useKeyboardNavigation } from './hooks/useKeyboardNavigation';
import { useInputEventHandlers } from './hooks/useInputEventHandlers';
import { useInputChildrenManager } from './hooks/useInputChildrenManager';
import { useInputAnimationsManager } from './hooks/useInputAnimationsManager';
import { useInputContextManager } from './hooks/useInputContextManager';
import { InputContextProvider } from './context/InputContext';
import { InputContainer } from './components/InputContainer';
import { InputTextField } from './components/InputTextField';
import { InputSupportingTextContainer } from './components/InputSupportingTextContainer';
import { InputFeedbackErrorContainer } from './components/InputFeedbackErrorContainer';
import { InputTextButton } from './components/InputTextButton';
import { InputIconButton } from './components/InputIconButton';
import { InputClearButton } from './components/InputClearButton';
import { InputError } from './components/InputError';
import { InputSupportingText } from './components/InputSupportingText';
import { InputCounter } from './components/InputCounter';
import { InputErrorBoundary } from './components/InputErrorBoundary';
import { StyledInputWrapper, StyledInputContent } from './Input.styles';
import { COMPONENT_DISPLAY_NAMES } from './constants';
import type {
  InputProps,
  InputInternalContext,
  InputCompoundComponent,
} from './Input.model';
import type { InputTextFieldRef } from './components/InputTextField/InputTextField.model';

/**
 * Componente DSC Input
 *
 * Campo de entrada de texto com suporte a diferentes estados de interação e validação.
 * Utiliza uma API composta com subcomponentes para personalizar os botões, erro, texto de apoio e contador.
 *
 * @example
 * ```tsx
 * // Uso básico
 * <Input
 *   value={text}
 *   placeholder="Digite algo"
 *   onChangeText={(text) => setText(text)}
 * />
 *
 * // Com subcomponentes
 * <Input value={text} onChangeText={setText}>
 *   <Input.Error value="Campo obrigatório" />
 *   <Input.Counter value={text.length} max={100} />
 *   <Input.ClearButton />
 * </Input>
 * ```
 */
const InputBase: React.FC<InputProps> = ({
  children,
  value = '',
  placeholder = 'Placeholder',
  multiline = false,
  disabled = false,
  autoFocus = false,
  onPress,
  onFocus,
  onBlur,
  onHoverIn,
  onHoverOut,
  onPressIn,
  onPressOut,
  onChangeText,
}) => {
  const { isFocused, currentState, handlers } = useInputInteractionState();
  const { isKeyboardNavigating } = useKeyboardNavigation();

  const textInputRef = useRef<InputTextFieldRef>(null);
  const [isButtonHovering, setIsButtonHovering] = useState(false);

  const focusInput = useCallback(() => {
    if (!disabled) {
      textInputRef.current?.focus();
    }
  }, [disabled]);

  const {
    errorChild,
    supportingTextChild,
    counterChild,
    errorText,
    supportingText,
    characterCount,
    counterMaxLength,
    hasError,
  } = useInputChildrenManager({ children });

  const { counterShakeAnimation, errorShakeAnimation, shakeCounter } =
    useInputAnimationsManager({ hasError, errorText });

  const eventHandlers = useInputEventHandlers({
    onFocus,
    onBlur,
    onHoverIn,
    onHoverOut,
    onPressIn,
    onPressOut,
    handlers,
  });

  const contextValue = useInputContextManager({
    disabled,
    isFocused,
    currentState,
    value,
    hasError,
    isButtonHovering,
    multiline,
    counterChild,
    onChangeText,
    focusInput,
  });

  const handleContainerPress = useCallback(() => {
    if (disabled) return;
    focusInput();
    onPress?.();
  }, [disabled, focusInput, onPress]);

  return (
    <InputErrorBoundary
      onError={(error, errorInfo) => {
        console.error('Erro no componente Input:', error, errorInfo);
      }}
      showErrorDetails={process.env.NODE_ENV === 'development'}
    >
      <InputContextProvider value={contextValue}>
        <StyledInputWrapper>
          <StyledInputContent>
            <InputContainer
              shouldShowHoverBackground={contextValue.shouldShowHoverBackground}
              isFocused={isFocused}
              hasError={hasError}
              disabled={disabled}
              isFilled={contextValue.isFilled}
              _multiline={multiline}
              _isKeyboardFocused={isKeyboardNavigating}
              onPress={handleContainerPress}
              {...eventHandlers}
            >
              <InputTextField
                ref={textInputRef}
                value={value}
                placeholder={placeholder}
                multiline={multiline}
                maxLength={contextValue.maxLength}
                disabled={disabled}
                hasError={hasError}
                autoFocus={autoFocus && !disabled}
                // eslint-disable-next-line @typescript-eslint/no-empty-function
                onChangeText={onChangeText || (() => {})}
                onFocus={eventHandlers.onFocus}
                onBlur={eventHandlers.onBlur}
                onMaxLengthExceeded={shakeCounter}
              />

              {children &&
                React.Children.map(children, child => {
                  if (React.isValidElement(child)) {
                    const childType =
                      (child.type as React.ComponentType)?.displayName ||
                      (child.type as React.ComponentType)?.name;

                    if (
                      childType === COMPONENT_DISPLAY_NAMES.CLEAR_BUTTON &&
                      (!value || value.length === 0)
                    ) {
                      return null;
                    }

                    return React.cloneElement(child, {
                      _inputContext: {
                        onChangeText,
                        value,
                        disabled,
                        focusInput,
                        setIsButtonHovering,
                      } as InputInternalContext,
                    } as Record<string, unknown>);
                  }
                  return child;
                })}
            </InputContainer>

            {hasError && errorChild && (
              <InputFeedbackErrorContainer
                text={errorText}
                onPress={focusInput}
                errorShakeAnimation={errorShakeAnimation}
                disabled={disabled}
              />
            )}

            {!hasError && (supportingTextChild || counterChild) && (
              <InputSupportingTextContainer
                supportingText={supportingText}
                characterCount={characterCount}
                maxLength={counterMaxLength}
                onPress={focusInput}
                counterShakeAnimation={counterShakeAnimation}
                disabled={disabled}
              />
            )}
          </StyledInputContent>
        </StyledInputWrapper>
      </InputContextProvider>
    </InputErrorBoundary>
  );
};

InputBase.displayName = 'Input';

const InputCompound = InputBase as InputCompoundComponent;
InputCompound.Button = InputTextButton;
InputCompound.IconButton = InputIconButton;
InputCompound.ClearButton = InputClearButton;
InputCompound.Error = InputError;
InputCompound.SupportingText = InputSupportingText;
InputCompound.Counter = InputCounter;

export { InputCompound as Input };
