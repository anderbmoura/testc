import type { RefObject } from 'react';
import type {
  TextInput,
  NativeSyntheticEvent,
  TextInputKeyPressEventData,
} from 'react-native';

/**
 * Props para o componente InputMoneyInput
 */
export interface InputMoneyInputProps {
  /**
   * Referência para o TextInput nativo
   */
  inputRef: RefObject<TextInput | null>;

  /**
   * Define se o input está desabilitado
   */
  disabled: boolean;

  /**
   * Define se o input está em modo somente leitura
   */
  readOnly: boolean;

  /**
   * Define se está em modo de edição ativa
   */
  isEditing: boolean;

  /**
   * String com os dígitos sendo digitados
   */
  inputDigits: string;

  /**
   * Callback quando o input recebe foco
   */
  onFocus: () => void;

  /**
   * Callback quando o input perde foco
   */
  onBlur: () => void;

  /**
   * Callback quando o texto do input muda
   */
  onChangeText: (text: string) => void;

  /**
   * Callback quando uma tecla é pressionada
   */
  onKeyPress: (event: NativeSyntheticEvent<TextInputKeyPressEventData>) => void;
}
