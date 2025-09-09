import React, {
  useMemo,
  forwardRef,
  useImperativeHandle,
  useRef,
  useCallback,
} from 'react';
import { TextInput, type TextStyle } from 'react-native';
import { useTheme } from 'tamagui';
import { StyledTextInputContainer } from './InputTextField.styles';
import type {
  InputTextFieldProps,
  InputTextFieldRef,
} from './InputTextField.model';

export const InputTextField = forwardRef<
  InputTextFieldRef,
  InputTextFieldProps
>(
  (
    {
      value,
      placeholder,
      multiline,
      maxLength,
      disabled,
      hasError,
      autoFocus,
      onChangeText,
      onFocus,
      onBlur,
      onMaxLengthExceeded,
    },
    ref
  ) => {
    const theme = useTheme();
    const textInputRef = useRef<TextInput>(null);

    const handleChangeText = useCallback(
      (text: string) => {
        if (!maxLength) {
          onChangeText(text);
          return;
        }

        if (text.length <= maxLength) {
          onChangeText(text);
          return;
        }

        if (text.length > maxLength && onMaxLengthExceeded) {
          onMaxLengthExceeded();
        }
      },
      [maxLength, onChangeText, onMaxLengthExceeded]
    );

    useImperativeHandle(
      ref,
      () => ({
        focus: () => {
          textInputRef.current?.focus();
        },
        blur: () => {
          textInputRef.current?.blur();
        },
      }),
      []
    );

    const textColor = useMemo(() => {
      if (disabled) return theme.disabled1.val;
      if (hasError) return theme.danger.val;
      return theme.onNeutral1.val;
    }, [disabled, hasError, theme]);

    const placeholderTextColor = useMemo(() => {
      if (disabled) return theme.disabled1.val;
      if (hasError) return theme.dangerPressed1?.val || theme.danger.val;
      return theme.onNeutral3.val;
    }, [disabled, hasError, theme]);

    const textInputStyle = useMemo(
      (): TextStyle => ({
        width: '100%',
        flex: 1,
        fontSize: 18,
        lineHeight: 28,
        fontFamily: 'Roboto',
        color: textColor,
        padding: 0,
        margin: 0,
        minHeight: 28,
        minWidth: 0,
        borderWidth: 0,
        outlineColor: 'transparent',
        textAlignVertical: multiline ? ('top' as const) : ('center' as const),
        paddingTop: multiline ? 4 : 0,
        paddingBottom: multiline ? 4 : 0,
      }),
      [textColor, multiline]
    );

    return (
      <StyledTextInputContainer>
        <TextInput
          ref={textInputRef}
          style={textInputStyle}
          value={value}
          placeholder={placeholder}
          placeholderTextColor={placeholderTextColor}
          multiline={multiline}
          maxLength={undefined}
          editable={!disabled}
          autoFocus={autoFocus}
          onChangeText={handleChangeText}
          onFocus={onFocus}
          onBlur={onBlur}
          autoCorrect={false}
          autoCapitalize="none"
          spellCheck={false}
        />
      </StyledTextInputContainer>
    );
  }
);

InputTextField.displayName = 'InputTextField';
