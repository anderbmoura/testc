import { ReactNode } from 'react';

/**
 * Propriedades do componente SheetHeader.
 */
export interface SheetHeaderProps {
  /**
   * Ícone personalizado para o cabeçalho.
   */
  icon?: ReactNode;

  /**
   * Título exibido no cabeçalho.
   */
  title?: string;

  /**
   * Se o título deve ser alinhado à esquerda.
   * @default false
   */
  leftAligned?: boolean;

  /**
   * Se o botão de fechar deve ser exibido.
   * @default true
   */
  showCloseButton?: boolean;

  /**
   * Callback executado quando o botão de fechar é pressionado.
   */
  onClose?: () => void;
}
