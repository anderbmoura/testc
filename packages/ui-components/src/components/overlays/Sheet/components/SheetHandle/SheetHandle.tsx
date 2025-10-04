import React, { memo } from 'react';
import { BlurView } from '../../../../../utils';
import { useSheetBlur } from '../../hooks/useSheetBlur';
import { StyledSheetHandle } from './SheetHandle.styles';
import type { SheetHandleProps } from './SheetHandle.model';

/**
 * Componente SheetHandle
 *
 * Handle do Sheet que permite arrastar o componente.
 * Gerencia o estilo do background baseado na variant.
 */
export const SheetHandle: React.FC<SheetHandleProps> = memo(
  ({ variant = 'default' }) => {
    const { blurEnabled, blurIntensity, blurBackgroundColor } =
      useSheetBlur(variant);

    return (
      <StyledSheetHandle variant={variant}>
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
      </StyledSheetHandle>
    );
  }
);

SheetHandle.displayName = 'SheetHandle';
