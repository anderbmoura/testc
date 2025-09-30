import { Animated, ViewProps } from 'react-native';
import { GetThemeValueForKey, RadiusTokens } from 'tamagui';

/**
 * Tipos de variantes visuais para o SkeletonLoading.
 */
export type SkeletonType =
  | 'text'
  | 'text-image'
  | 'image-text'
  | 'block'
  | 'button-small'
  | 'button-standard'
  | 'button-large'
  | 'carousel';

/**
 * Propriedades disponíveis para configurar o componente SkeletonLoading.
 */
export interface SkeletonLoadingProps {
  /**
   * Variante visual do skeleton.
   * Define o layout e estilo do esqueleto.
   */
  variant?: SkeletonType;
}

/**
 * Propriedades para configurar a animação de shimmer.
 */
export interface ShimmerAnimationProps {
  /**
   * Largura do shimmer.
   * Pode ser um número, valor temático ou nó animado.
   */
  width?: number | GetThemeValueForKey<'width'> | Animated.AnimatedNode | null;

  /**
   * Altura do shimmer.
   * Pode ser um número, valor temático ou nó animado.
   */
  height?:
    | number
    | GetThemeValueForKey<'height'>
    | Animated.AnimatedNode
    | null;

  /**
   * Raio da borda do shimmer.
   * Define o arredondamento das bordas.
   */
  borderRadius?: RadiusTokens;
}

/**
 * Ponto de início ou fim do gradiente linear.
 */
export type LinearGradientPoint = {
  x: number;
  y: number;
};

/**
 * Propriedades para configurar o gradiente linear usado no shimmer.
 */
export type LinearGradientProps = ViewProps & {
  /**
   * Lista de cores do gradiente.
   */
  colors: readonly [string, string, ...string[]];

  /**
   * Posições relativas das cores no gradiente.
   */
  locations?: readonly number[];

  /**
   * Ponto inicial do gradiente.
   */
  start?: LinearGradientPoint;

  /**
   * Ponto final do gradiente.
   */
  end?: LinearGradientPoint;
};
