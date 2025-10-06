import { useState, useCallback } from 'react';
import type {
  NativeSyntheticEvent,
  TextInputKeyPressEventData,
} from 'react-native';
import { formatDisplayValue } from '../utils/moneyFormatUtils';
import { CENTS_DIVISOR } from '../constants';

/**
 * Props para o hook useInputMoneyTextInput
 */
export interface UseInputMoneyTextInputProps {
  /**
   * Valor atual do input
   */
  value: number;

  /**
   * Valor máximo permitido
   */
  maxValue: number;

  /**
   * Callback quando o valor muda
   */
  onValueChange?: (value: number) => void;

  /**
   * Função para executar animação de shake
   */
  shake: () => void;

  /**
   * Define se o input está desabilitado
   */
  disabled: boolean;

  /**
   * Define se o input está em modo somente leitura
   */
  readOnly: boolean;
}

/**
 * Hook para gerenciar a lógica de entrada de texto do InputMoney
 */
export const useInputMoneyTextInput = ({
  value,
  maxValue,
  onValueChange,
  shake,
  disabled,
  readOnly,
}: UseInputMoneyTextInputProps) => {
  const [editingText, setEditingText] = useState('');
  const [isEditing, setIsEditing] = useState(false);
  const [inputDigits, setInputDigits] = useState('');

  const handleStartEditing = useCallback(() => {
    if (disabled || readOnly) return;

    setIsEditing(true);
    const valueInCents = Math.round(value * CENTS_DIVISOR);
    const digits = valueInCents === 0 ? '' : valueInCents.toString();
    setInputDigits(digits);
    setEditingText(formatDisplayValue(value));
  }, [disabled, readOnly, value]);

  const handleEndEditing = useCallback(() => {
    if (disabled || readOnly) return;

    if (isEditing) {
      const finalValue =
        inputDigits === '' ? 0 : parseInt(inputDigits, 10) / CENTS_DIVISOR;
      if (finalValue !== value) {
        onValueChange?.(finalValue);
      }
    }

    setIsEditing(false);
    setEditingText('');
    setInputDigits('');
  }, [disabled, readOnly, isEditing, inputDigits, onValueChange, value]);

  const handleChangeText = useCallback(
    (text: string) => {
      if (disabled || readOnly || !isEditing) return;

      if (text === inputDigits) return;

      const newDigits = text.replace(/\D/g, '');

      if (newDigits.length > inputDigits.length) {
        const addedDigits = newDigits.slice(inputDigits.length);
        const finalDigits = inputDigits + addedDigits;
        const numericValue =
          finalDigits === '' ? 0 : parseInt(finalDigits, 10) / CENTS_DIVISOR;

        if (numericValue > maxValue) {
          shake();
          return;
        }

        setInputDigits(finalDigits);
        const formattedText = formatDisplayValue(numericValue);
        setEditingText(formattedText);

        if (numericValue !== value) {
          onValueChange?.(numericValue);
        }
      } else {
        const numericValue =
          newDigits === '' ? 0 : parseInt(newDigits, 10) / CENTS_DIVISOR;

        if (numericValue > maxValue) {
          shake();
          return;
        }

        setInputDigits(newDigits);
        const formattedText = formatDisplayValue(numericValue);
        setEditingText(formattedText);

        if (numericValue !== value) {
          onValueChange?.(numericValue);
        }
      }
    },
    [
      disabled,
      readOnly,
      isEditing,
      inputDigits,
      onValueChange,
      value,
      maxValue,
      shake,
    ]
  );

  const handleKeyPress = useCallback(
    (event: NativeSyntheticEvent<TextInputKeyPressEventData>) => {
      if (disabled || readOnly || !isEditing) return;

      const key = event.nativeEvent?.key;

      if (key === 'Backspace') {
        event.preventDefault();
        const newDigits = inputDigits.slice(0, -1);
        setInputDigits(newDigits);
        const numericValue =
          newDigits === '' ? 0 : parseInt(newDigits, 10) / CENTS_DIVISOR;
        const formattedText = formatDisplayValue(numericValue);
        setEditingText(formattedText);

        if (numericValue !== value) {
          onValueChange?.(numericValue);
        }
        return;
      }

      if (/^\d$/.test(key)) {
        event.preventDefault();
        const newDigits = inputDigits + key;
        const numericValue = parseInt(newDigits, 10) / CENTS_DIVISOR;

        if (numericValue > maxValue) {
          shake();
          return;
        }

        setInputDigits(newDigits);
        const formattedText = formatDisplayValue(numericValue);
        setEditingText(formattedText);

        if (numericValue !== value) {
          onValueChange?.(numericValue);
        }
      }
    },
    [
      disabled,
      readOnly,
      isEditing,
      inputDigits,
      value,
      maxValue,
      onValueChange,
      shake,
    ]
  );

  return {
    editingText,
    isEditing,
    inputDigits,
    handleStartEditing,
    handleEndEditing,
    handleChangeText,
    handleKeyPress,
  };
};
