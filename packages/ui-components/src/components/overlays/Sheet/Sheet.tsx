import React, { memo, useCallback } from 'react';
import { Sheet as TSheet } from 'tamagui';
import { SheetHeader } from './components/SheetHeader';
import { SheetContent } from './components/SheetContent';
import { SheetOverlay } from './components/SheetOverlay';
import { SheetFrame } from './components/SheetFrame';
import { SheetHandle } from './components/SheetHandle';
import { useSheetPosition } from './hooks/useSheetPosition';
import { useSheetBlur } from './hooks/useSheetBlur';
import type { SheetProps } from './Sheet.model';

/**
 * Componente DSC Sheet
 *
 * Sheet de modal bottom que desliza a partir da parte inferior da tela.
 *
 * @example
 * ```tsx
 * <Sheet
 *   open={isOpen}
 *   onOpenChange={setIsOpen}
 *   header={{
 *     icon: <Heart />,
 *     title: "Título do Sheet"
 *   }}
 *   snapPoints={[80, 50]}
 *   variant="onMediaBg"
 * >
 *   <Text>Conteúdo do sheet aqui</Text>
 * </Sheet>
 * ```
 */
export const Sheet: React.FC<SheetProps> = memo(
  ({
    open,
    defaultOpen = false,
    onOpenChange,
    position: controlledPosition,
    defaultPosition = 0,
    onPositionChange,
    children,
    header,
    scrollView = false,
    snapPoints = [80, 50],
    snapPointsMode = 'percent',
    animation = 'medium',
    modal = true,
    dismissOnSnapToBottom = true,
    dismissOnOverlayPress = true,
    disableDrag = false,
    forceRemoveScrollEnabled = false,
    moveOnKeyboardChange = false,
    titleLeftAligned = false,
    variant = 'default',
    closable = true,
  }) => {
    const { position, adjustedSnapPoints, setPosition } = useSheetPosition({
      snapPoints,
      open,
      position: controlledPosition,
      defaultPosition,
      onPositionChange,
    });

    const { blurEnabled } = useSheetBlur(variant);

    const handleClose = useCallback(() => {
      if (closable) {
        onOpenChange?.(false);
      }
    }, [closable, onOpenChange]);

    const handleOverlayPress = useCallback(() => {
      if (dismissOnOverlayPress && closable) {
        onOpenChange?.(false);
      }
    }, [dismissOnOverlayPress, closable, onOpenChange]);

    const handleOpenChange = useCallback(
      (newOpen: boolean) => {
        if (closable || newOpen) {
          onOpenChange?.(newOpen);
        }
      },
      [closable, onOpenChange]
    );

    const isControlled = open !== undefined;

    return (
      <TSheet
        open={isControlled ? open : undefined}
        defaultOpen={!isControlled ? defaultOpen : undefined}
        animation={animation}
        modal={modal}
        dismissOnSnapToBottom={closable ? dismissOnSnapToBottom : false}
        onOpenChange={handleOpenChange}
        snapPoints={adjustedSnapPoints}
        snapPointsMode={snapPointsMode}
        position={position}
        onPositionChange={setPosition}
        dismissOnOverlayPress={dismissOnOverlayPress && closable}
        disableDrag={disableDrag}
        forceRemoveScrollEnabled={forceRemoveScrollEnabled}
        moveOnKeyboardChange={moveOnKeyboardChange}
      >
        {!blurEnabled && (
          <SheetOverlay
            dismissOnPress={dismissOnOverlayPress && closable}
            onPress={handleOverlayPress}
          />
        )}

        <SheetHandle variant={variant} />

        <SheetFrame variant={variant}>
          {header && (
            <SheetHeader
              icon={header.icon}
              title={header.title}
              leftAligned={titleLeftAligned}
              showCloseButton={closable}
              onClose={handleClose}
            />
          )}

          <SheetContent scrollable={scrollView}>{children}</SheetContent>
        </SheetFrame>
      </TSheet>
    );
  }
);

Sheet.displayName = 'Sheet';

export default Sheet;
