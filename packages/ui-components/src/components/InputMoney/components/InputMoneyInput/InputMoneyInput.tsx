import React from 'react';
import { Platform } from 'react-native';
import type { InputMoneyInputProps } from './InputMoneyInput.model';
import { HiddenInput } from './InputMoneyInput.styles';

/**
 * Componente interno para o input invisível que captura o foco e entrada do usuário
 */
export const InputMoneyInput: React.FC<InputMoneyInputProps> = ({
  inputRef,
  disabled,
  readOnly,
  isEditing,
  inputDigits,
  onFocus,
  onBlur,
  onChangeText,
  onKeyPress,
}) => (
  <HiddenInput
    ref={inputRef}
    web={Platform.OS === 'web'}
    editable={!disabled && !readOnly}
    onFocus={onFocus}
    onBlur={onBlur}
    onChangeText={onChangeText}
    onKeyPress={onKeyPress}
    value={isEditing ? inputDigits : ''}
    autoComplete="off"
    autoCapitalize="none"
    autoCorrect={false}
    spellCheck={false}
    keyboardType="numeric"
    selectTextOnFocus={false}
    caretHidden={true}
    style={
      Platform.OS === 'web'
        ? {
            color: 'transparent',
          }
        : {}
    }
  />
);
