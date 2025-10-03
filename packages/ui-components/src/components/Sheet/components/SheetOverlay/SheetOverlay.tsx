import React, { memo, useCallback } from 'react';
import { Sheet as TSheet } from 'tamagui';
import type { SheetOverlayProps } from './SheetOverlay.model';
import { opacity } from '../../../../config/tokens/opacity/opacity';

/**
 * Componente DSC SheetOverlay
 *
 * Overlay customizado para o Sheet.
 *
 * @example
 * ```tsx
 * <SheetOverlay
 *   onPress={() => setOpen(false)}
 * />
 * ```
 */
export const SheetOverlay: React.FC<SheetOverlayProps> = memo(
  ({ dismissOnPress = true, onPress }) => {
    const handlePress = useCallback(() => {
      if (dismissOnPress) {
        onPress?.();
      }
    }, [dismissOnPress, onPress]);

    return (
      <TSheet.Overlay
        animation="medium"
        backgroundColor="$fixedNeutralBgInverse"
        opacity={opacity[56]}
        enterStyle={{ opacity: 0 }}
        exitStyle={{ opacity: 0 }}
        onPress={dismissOnPress ? handlePress : undefined}
        pointerEvents="none"
      />
    );
  }
);

SheetOverlay.displayName = 'SheetOverlay';
