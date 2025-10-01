import React, { useCallback } from 'react';
import type { StoriesProgressContainerProps } from './StoriesProgressContainer.model';
import {
  StoriesProgressContainerView,
  StoriesProgressContainerViewWrapper,
} from './StoriesProgressContainer.styles';
import { StoriesProgressBar } from '../StoriesProgressBar';
import { Image } from '../../../../..';

/**
 * Container que gerencia todas as barras de progresso do Stories
 *
 * @param images - Array de imagens para gerar as barras
 * @param currentIndex - Índice do item atual
 * @param currentProgress - Progresso atual (0 a 1)
 * @param onProgressBarPress - Callback ao pressionar uma barra
 * @param topPadding - Padding superior para respeitar a safe area
 */
export const StoriesProgressContainer = ({
  images,
  currentIndex,
  currentProgress,
  onProgressBarPress,
  topPadding = 16,
}: StoriesProgressContainerProps) => {
  const getProgressBarState = useCallback(
    (index: number) => {
      if (index < currentIndex) return 'completed';
      if (index === currentIndex) return 'current';
      return 'pending';
    },
    [currentIndex]
  );

  const getProgressWidth = useCallback(
    (index: number) => {
      if (index < currentIndex) return '100%';
      if (index === currentIndex) return `${currentProgress * 100}%`;
      return '0%';
    },
    [currentIndex, currentProgress]
  );

  return (
    <StoriesProgressContainerViewWrapper>
      <StoriesProgressContainerView top={topPadding}>
        {images.map((_, index) => (
          <StoriesProgressBar
            key={`progress-${index}`}
            state={getProgressBarState(index)}
            progressWidth={getProgressWidth(index)}
            onPress={() => onProgressBarPress?.(index)}
          />
        ))}
      </StoriesProgressContainerView>

      <Image
        source={require('../../../../../assets/images/logo_caixa.png')}
        width={45}
        height={31}
      />
    </StoriesProgressContainerViewWrapper>
  );
};
