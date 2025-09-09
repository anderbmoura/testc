import React from 'react';
import type { InputTextButtonProps } from './components/InputTextButton/InputTextButton.model';
import type { InputIconButtonProps } from './components/InputIconButton/InputIconButton.model';
import type { InputClearButtonProps } from './components/InputClearButton/InputClearButton.model';
import type { InputErrorProps } from './components/InputError/InputError.model';
import type { InputSupportingTextProps } from './components/InputSupportingText/InputSupportingText.model';
import type { InputCounterProps } from './components/InputCounter/InputCounter.model';

/**
 * Estados internos do Input calculados automaticamente baseado nas interações
 */
export type InputInternalState =
  | 'empty'
  | 'hover'
  | 'filled'
  | 'focused'
  | 'disabled';

/**
 * Props para o componente DSC Input
 *
 * Propriedades para personalizar o comportamento e aparência
 * do campo de entrada de texto.
 */
export interface InputProps {
  /**
   * Elementos filhos do input (botões personalizados)
   *
   * Permite usar uma API mais intuitiva com subcomponentes:
   *
   * @example
   * ```tsx
   * <Input value={text} onChangeText={setText}>
   *   <Input.ClearButton />
   * </Input>
   *
   * <Input value={text} onChangeText={setText}>
   *   <Input.IconButton icon="search" onPress={handleSearch} />
   * </Input>
   *
   * <Input value={text} onChangeText={setText}>
   *   <Input.Button text="Enviar" onPress={handleSubmit} />
   * </Input>
   * ```
   */
  children?: React.ReactNode;

  /**
   * Valor do texto
   *
   * @example
   * ```tsx
   * <Input value="" />                    // Campo vazio
   * <Input value="Texto digitado" />      // Campo com texto
   * ```
   *
   * @default ""
   */
  value?: string;

  /**
   * Texto do placeholder
   *
   * @example
   * ```tsx
   * <Input placeholder="Digite seu nome" />
   * <Input placeholder="Insira uma descrição" />
   * ```
   *
   * @default "Placeholder"
   */
  placeholder?: string;

  /**
   * Define se o input é multilinhas
   *
   * @example
   * ```tsx
   * <Input multiline={false} />  // Uma linha
   * <Input multiline={true} />   // Múltiplas linhas
   * ```
   *
   * @default false
   */
  multiline?: boolean;

  /**
   * Define se o componente está desabilitado
   *
   * @example
   * ```tsx
   * // Habilitado
   * <Input value="texto" disabled={false}>
   *   <Input.Button text="OK" />
   * </Input>
   *
   * // Desabilitado
   * <Input value="texto" disabled={true}>
   *   <Input.Button text="OK" />
   * </Input>
   * ```
   *
   * @default false
   */
  disabled?: boolean;

  /**
   * Define se o componente deve receber foco automaticamente
   *
   * @example
   * ```tsx
   * <Input value="" autoFocus={true}>
   *   <Input.ClearButton />
   * </Input>
   * ```
   *
   * @default false
   */
  autoFocus?: boolean;

  /**
   * Callback executado quando o componente é pressionado
   */
  onPress?: () => void;

  /**
   * Callback executado quando o componente recebe foco
   */
  onFocus?: () => void;

  /**
   * Callback executado quando o componente perde o foco
   */
  onBlur?: () => void;

  /**
   * Callback executado quando o mouse entra na área do componente (web)
   */
  onHoverIn?: () => void;

  /**
   * Callback executado quando o mouse sai da área do componente (web)
   */
  onHoverOut?: () => void;

  /**
   * Callback executado quando o componente é pressionado (início do toque)
   */
  onPressIn?: () => void;

  /**
   * Callback executado quando o componente é liberado (fim do toque)
   */
  onPressOut?: () => void;

  /**
   * Callback executado quando o texto do input muda
   *
   * @param text - Novo texto digitado
   *
   * @example
   * ```tsx
   * const [text, setText] = useState('');
   *
   * <Input
   *   value={text}
   *   onChangeText={(newText) => {
   *     console.log('Novo texto:', newText);
   *     setText(newText);
   *   }}
   * >
   *   <Input.ClearButton />
   * </Input>
   * ```
   */
  onChangeText?: (text: string) => void;
}

/**
 * Context interno passado para os subcomponentes do Input
 */
export interface InputInternalContext {
  onChangeText?: (text: string) => void;
  value?: string;
  disabled?: boolean;
  focusInput?: () => void;
  setIsButtonHovering?: (isHovering: boolean) => void;
}

/**
 * Tipo do compound component Input
 */
export interface InputCompoundComponent extends React.FC<InputProps> {
  Button: React.FC<InputTextButtonProps>;
  IconButton: React.FC<InputIconButtonProps>;
  ClearButton: React.FC<InputClearButtonProps>;
  Error: React.FC<InputErrorProps>;
  SupportingText: React.FC<InputSupportingTextProps>;
  Counter: React.FC<InputCounterProps>;
}
