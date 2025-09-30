import React from 'react';
import { ShimmerAnimation } from './components/ShimmerAnimation';
import { SkeletonLoadingProps } from './SkeletonLoading.model';
import { ScrollView, View, XStack, YStack } from 'tamagui';

/**
 * Componente DSC SkeletonLoading
 *
 * Exibe placeholders animados para simular carregamento de conteúdo.
 * Suporta múltiplas variantes visuais para diferentes tipos de layout.
 *
 * @example
 * ```tsx
 * <SkeletonLoading variant="text" />
 * <SkeletonLoading variant="image-text" />
 * <SkeletonLoading variant="carousel" />
 * ```
 */
export const SkeletonLoading = ({
  variant = 'block',
}: SkeletonLoadingProps) => {
  if (variant === 'text') {
    return (
      <YStack gap="$quark" alignItems="flex-start">
        <ShimmerAnimation width="100%" height={16} />
        <ShimmerAnimation width="70%" height={16} />
        <ShimmerAnimation width="50%" height={16} />
      </YStack>
    );
  }

  if (variant === 'image-text') {
    return (
      <XStack gap="$micro" alignItems="flex-start">
        <View>
          <ShimmerAnimation
            width={32}
            height={32}
            borderRadius="$radius.pill"
          />
        </View>
        <YStack gap="$quark" flex={1}>
          <ShimmerAnimation width="100%" height={16} />
          <ShimmerAnimation width="50%" height={12} />
        </YStack>
      </XStack>
    );
  }

  if (variant === 'text-image') {
    return (
      <XStack gap="$micro" alignItems="flex-start">
        <YStack gap="$quark" flex={1}>
          <ShimmerAnimation width="100%" height={16} />
          <ShimmerAnimation width="50%" height={12} />
        </YStack>
        <View>
          <ShimmerAnimation
            width={32}
            height={32}
            borderRadius="$radius.pill"
          />
        </View>
      </XStack>
    );
  }

  if (variant === 'button-small') {
    return (
      <YStack gap="$quark" alignItems="flex-start">
        <ShimmerAnimation
          width="100%"
          height={32}
          borderRadius="$radius.pill"
        />
      </YStack>
    );
  }

  if (variant === 'button-standard') {
    return (
      <YStack gap="$quark" alignItems="flex-start">
        <ShimmerAnimation
          width="100%"
          height={44}
          borderRadius="$radius.pill"
        />
      </YStack>
    );
  }

  if (variant === 'button-large') {
    return (
      <YStack gap="$quark" alignItems="flex-start">
        <ShimmerAnimation
          width="100%"
          height={48}
          borderRadius="$radius.pill"
        />
      </YStack>
    );
  }

  if (variant === 'carousel') {
    return (
      <ScrollView
        horizontal
        showsHorizontalScrollIndicator={false}
        contentContainerStyle={{ gap: '$micro' }}
      >
        <ShimmerAnimation width={244} height={192} borderRadius="$radius.big" />
        <ShimmerAnimation width={244} height={192} borderRadius="$radius.big" />
      </ScrollView>
    );
  }

  return <ShimmerAnimation width="100%" height={92} />;
};
