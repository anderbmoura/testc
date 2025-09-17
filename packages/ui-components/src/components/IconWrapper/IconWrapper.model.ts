import { GetThemeValueForKey } from 'tamagui';
import { iconSize } from '../../config/tokens/iconSize/iconSize';
import { OpaqueColorValue } from 'react-native';

type IconSizeToken = keyof typeof iconSize;

/**
 * Propriedades para o componente IconWrapper.
 *
 * Define como o ícone será renderizado, incluindo tamanho e cor.
 */
export type IconWrapperProps = {
  /**
   * Ícone a ser exibido.
   * Pode ser um componente React ou um elemento já instanciado.
   */
  icon: React.ElementType | React.ReactElement;

  /**
   * Tamanho do ícone.
   * Deve ser uma chave válida do token `iconSize`.
   */
  size: IconSizeToken;

  /**
   * Cor do ícone.
   * Pode ser um valor opaco do React Native ou uma chave de cor do tema Tamagui.
   */
  color?: OpaqueColorValue | GetThemeValueForKey<'color'>;
};
