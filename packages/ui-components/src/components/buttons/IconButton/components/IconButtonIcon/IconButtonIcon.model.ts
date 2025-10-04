import type {
  IconButtonColor,
  IconButtonSize,
  IconButtonType,
} from '../../IconButton.model';
import type { InteractionState } from '../../hooks/useIconButtonInteractionState';

export interface IconButtonIconProps {
  /** Ícone a ser renderizado */
  icon: React.ReactNode;

  /** Tipo visual do botão */
  type: IconButtonType;

  /** Tamanho do botão */
  size: IconButtonSize;

  /** Cor do botão */
  color: IconButtonColor;

  /** Estado de interação atual */
  interactionState: InteractionState;

  /** Se o botão está desabilitado */
  disabled: boolean;

  /** Se o botão está carregando */
  loading: boolean;
}
