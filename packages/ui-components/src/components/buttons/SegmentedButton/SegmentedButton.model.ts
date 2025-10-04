import { ReactNode } from 'react';
import { ButtonProps, ImageProps } from 'tamagui';

/**
 * Representa os dados de um botão individual dentro do SegmentedButton.
 */
export interface SegmentedButtonItem {
  /**
   * Texto exibido no botão.
   * Exibido apenas se `image` não estiver definido.
   */
  label?: string;

  /**
   * Ícone exibido no botão.
   * Exibido apenas se `image` não estiver definido.
   * Pode ser um componente React (ex: SVG ou ícone de biblioteca).
   */
  icon?: ReactNode;

  /**
   * Imagem exibida no botão.
   * Quando definida, substitui `icon` e `label`.
   */
  image?: ImageProps['source'];

  /**
   * Estado visual do botão.
   *
   * Define o estilo aplicado ao botão com base em seu estado atual:
   * - `default`: estado padrão, sem interação.
   * - `hover`: quando o botão está sob o cursor (em plataformas que suportam hover).
   * - `pressed`: quando o botão está sendo pressionado.
   * - `focused`: quando o botão está com foco (ex: navegação por teclado).
   * - `disabled`: desativa o botão, impedindo interação.
   */
  state?: 'default' | 'hover' | 'pressed' | 'focused' | 'disabled';

  /**
   * Variante visual do botão.
   * - `neutral`: estilo padrão
   * - `highlight`: estilo alternativo
   * @default 'neutral'
   */
  variant?: 'neutral' | 'highlight';

  /**
   * Função chamada ao pressionar o botão.
   */
  onPress?: () => void;
}

/**
 * Propriedades do componente SegmentedButtonItem.
 *
 * Define os dados e comportamentos necessários para renderizar um botão individual
 * dentro do grupo segmentado.
 */
export interface SegmentedButtonItemProps {
  /**
   * Índice do botão dentro do grupo.
   */
  index: number;

  /**
   * Dados do botão a ser renderizado.
   */
  btn: SegmentedButtonItem;

  /**
   * Indica se o botão está atualmente selecionado.
   */
  isSelected: boolean;

  /**
   * Indica se o botão está desativado (por estado ou herança do grupo).
   */
  isDisabled: boolean;

  /**
   * Função chamada ao pressionar o botão.
   */
  onPress: () => void;

  /**
   * Propriedades adicionais aplicadas ao botão Tamagui.
   */
  buttonProps?: Omit<ButtonProps, 'onPress' | 'disabled'>;

  /**
   * Largura calculada para o botão.
   */
  buttonWidth: number;
}

/**
 * Propriedades do componente SegmentedButton.
 *
 * Define um grupo de botões que funcionam como uma seleção segmentada (tabs ou filtros).
 */
export interface SegmentedButtonProps {
  /**
   * Lista de botões a serem exibidos.
   * Cada item representa uma opção segmentada.
   */
  buttons: SegmentedButtonItem[];

  /**
   * Desativa todos os botões do grupo.
   * @default false
   */
  disabled?: boolean;

  /**
   * Rótulo de acessibilidade para leitores de tela.
   */
  accessibilityLabel?: string;

  /**
   * Propriedades adicionais aplicadas a cada botão individual.
   */
  buttonProps?: Omit<ButtonProps, 'onPress' | 'disabled'>;
}
