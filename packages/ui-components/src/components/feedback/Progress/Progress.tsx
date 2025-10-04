import React from 'react';
import { styled, View } from '@tamagui/core';
import type { ProgressProps } from './Progress.model';

const ProgressContainer = styled(View, {
  name: 'ProgressContainer',
  backgroundColor: '$highlightBg',
  borderRadius: '$pill',
  overflow: 'hidden',
  position: 'relative',
  width: '100%',

  variants: {
    size: {
      smaller: { height: 7 },
      small: { height: 9 },
      medium: { height: 11 },
      large: { height: 13 },
      larger: { height: 16 },
    },
  } as const,
});

const ProgressBar = styled(View, {
  name: 'ProgressBar',
  backgroundColor: '$highlight',
  height: '100%',
  position: 'absolute',
  left: 0,
  top: 0,
  bottom: 0,
  borderRadius: '$pill',
});

/**
 * Componente DSC Progress
 *
 * Componente para exibir progresso visual através de uma barra preenchida.
 * Aceita valores numéricos de 0 a 100 representando a porcentagem de progresso.
 *
 * @example
 * ```tsx
 * <Progress
 *   size="medium"
 *   progress={50}
 * />
 * ```
 */
export const Progress: React.FC<ProgressProps> = ({
  size = 'medium',
  progress = 0,
}) => {
  const clampedProgress = Math.max(0, Math.min(100, progress));
  const progressWidth = `${clampedProgress}%`;

  return (
    <ProgressContainer size={size}>
      <ProgressBar
        style={{
          width: progressWidth,
        }}
      />
    </ProgressContainer>
  );
};
