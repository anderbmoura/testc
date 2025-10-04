import React, { memo } from 'react';
import { BlurView } from '../../../../../utils';
import { useSheetBlur } from '../../hooks/useSheetBlur';
import { StyledSheetFrame } from './SheetFrame.styles';
import type { SheetFrameProps } from './SheetFrame.model';

/**
 * Componente SheetFrame
 *
 * Frame principal do Sheet que contém todo o conteúdo.
 * Gerencia o estilo do background baseado na variant.
 */
export const SheetFrame: React.FC<SheetFrameProps> = memo(
  ({ children, variant = 'default' }) => {
    const { blurEnabled, blurIntensity, blurBackgroundColor } =
      useSheetBlur(variant);

    return (
      <StyledSheetFrame variant={variant}>
        {/* Blur view quando habilitado */}
        {blurEnabled && (
          <BlurView
            blurIntensity={blurIntensity}
            backgroundColor={blurBackgroundColor}
            style={{
              position: 'absolute',
              top: 0,
              left: 0,
              right: 0,
              bottom: 0,
              zIndex: -1,
            }}
          />
        )}
        {children}
      </StyledSheetFrame>
    );
  }
);

SheetFrame.displayName = 'SheetFrame';
