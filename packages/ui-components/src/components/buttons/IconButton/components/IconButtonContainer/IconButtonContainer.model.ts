import type {
  IconButtonColor,
  IconButtonSize,
  IconButtonType,
} from '../../IconButton.model';

export interface IconButtonContainerProps {
  /** Tipo visual do container */
  type: IconButtonType;

  /** Tamanho do container */
  size: IconButtonSize;

  /** Cor do container */
  color: IconButtonColor;

  /** Se o botão está desabilitado */
  disabled: boolean;

  /** Se o botão está pressionado */
  isPressed: boolean;

  /** Se o botão está em hover */
  isHovered: boolean;

  /** Conteúdo do container */
  children: React.ReactNode;
}
