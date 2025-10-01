import { ReactNode } from 'react';
import { AnimationKeys, SnapPointsMode } from 'tamagui';
import type { SheetHeaderProps } from './components/SheetHeader/SheetHeader.model';
import type { SheetContentProps } from './components/SheetContent/SheetContent.model';
import type { SheetOverlayProps } from './components/SheetOverlay/SheetOverlay.model';

export type { SheetHeaderProps, SheetContentProps, SheetOverlayProps };

/**
 * Opções de configuração para o Componente DSC Sheet.
 *
 * Define as propriedades disponíveis para personalizar o comportamento e aparência do Sheet.
 */
export interface SheetProps {
  /**
   * Variante do sheet que controla o comportamento do blur.
   * - 'default': sem blur
   * - 'onMediaBg': com blur de intensidade 6
   * @default 'default'
   */
  variant?: 'default' | 'onMediaBg';

  /**
   * Controla se o sheet está aberto ou fechado (modo controlado).
   */
  open?: boolean;

  /**
   * Estado padrão de abertura do sheet (modo não controlado).
   * @default false
   */
  defaultOpen?: boolean;

  /**
   * Callback executado quando o estado de abertura muda.
   */
  onOpenChange?: (open: boolean) => void;

  /**
   * Posição controlada do sheet no array de snapPoints.
   */
  position?: number;

  /**
   * Posição padrão do sheet no array de snapPoints (modo não controlado).
   * @default 0
   */
  defaultPosition?: number;

  /**
   * Callback executado quando a posição muda.
   */
  onPositionChange?: (position: number) => void;

  /**
   * Conteúdo do sheet.
   */
  children: ReactNode;

  /**
   * Configuração do cabeçalho com ícone, título e botão de fechar.
   */
  header?: SheetHeaderProps;

  /**
   * Habilita scroll para conteúdo que excede a altura disponível.
   * @default false
   */
  scrollView?: boolean;

  /**
   * Pontos de ancoragem para o sheet (0-100 para percentual ou valores absolutos).
   * Deve ir do mais visível para o menos visível.
   * @default [80, 50]
   */
  snapPoints?: number[];

  /**
   * Modo dos snap points (percentual ou valores absolutos).
   * @default 'percent'
   */
  snapPointsMode?: SnapPointsMode;

  /**
   * Tipo de animação para transições.
   * @default 'medium'
   */
  animation?: AnimationKeys;

  /**
   * Se o sheet deve ser modal (renderizado na raiz da aplicação).
   * @default true
   */
  modal?: boolean;

  /**
   * Fecha automaticamente quando arrastado para o snap point inferior.
   * @default true
   */
  dismissOnSnapToBottom?: boolean;

  /**
   * Controla se toque no overlay fecha o sheet.
   * @default true
   */
  dismissOnOverlayPress?: boolean;

  /**
   * Desabilita arrastar o sheet.
   * @default false
   */
  disableDrag?: boolean;

  /**
   * Controla o comportamento de scroll externo ao sheet.
   * @default false
   */
  forceRemoveScrollEnabled?: boolean;

  /**
   * Move o sheet quando o teclado mobile abre (apenas nativo).
   * @default false
   */
  moveOnKeyboardChange?: boolean;

  /**
   * Alinha o título à esquerda em vez de centralizado.
   * @default false
   */
  titleLeftAligned?: boolean;

  /**
   * Se o sheet pode ser fechado por interação do usuário.
   * @default true
   */
  closable?: boolean;
}
