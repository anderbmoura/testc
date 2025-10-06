import { useTransformIcon } from '../../../../utils';
import { iconSize } from '../../../../config/tokens/iconSize/iconSize';

/**
 * Propriedades para o TabItemIcon.
 */
export interface TabItemIconProps {
  /**
   * Ícone a ser exibido.
   */
  icon: React.ReactNode;
}

/**
 * Componente DSC TabItemIcon
 *
 * Ícone de iconSize.small da cor $onNeutral1.
 */
export const TabItemIcon: React.FC<TabItemIconProps> = ({ icon }) => {
  const transformIcon = useTransformIcon();

  if (!icon) return null;

  const transformedIcon = transformIcon(icon, iconSize.small, '$onNeutral1');

  return transformedIcon;
};
