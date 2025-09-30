import { Animated } from 'react-native';
import { GetThemeValueForKey, RadiusTokens } from 'tamagui';

type SkeletonType =
  | 'text'
  | 'text-image'
  | 'image-text'
  | 'block'
  | 'button-small'
  | 'button-standard'
  | 'button-large'
  | 'carousel';

export interface SkeletonLoadingProps {
  variant?: SkeletonType;
}

export interface ShimmerAnimationProps {
  width?: number | GetThemeValueForKey<'width'> | Animated.AnimatedNode | null;
  height?:
    | number
    | Animated.AnimatedNode
    | GetThemeValueForKey<'height'>
    | null;
  borderRadius?: RadiusTokens;
}
