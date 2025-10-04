import React, { memo } from 'react';
import { ScrollView } from 'tamagui';
import type { SheetContentProps } from './SheetContent.model';
import { SheetContentContainer } from './SheetContent.styles';

/**
 * Componente DSC SheetContent
 *
 * Container para o conteúdo do Sheet com suporte a scroll.
 *
 * @example
 * ```tsx
 * <SheetContent scrollable>
 *   <Text>Conteúdo do sheet aqui</Text>
 * </SheetContent>
 * ```
 */
export const SheetContent: React.FC<SheetContentProps> = memo(
  ({ children, scrollable = false }) => {
    if (scrollable) {
      return (
        <ScrollView flex={1}>
          <SheetContentContainer>{children}</SheetContentContainer>
        </ScrollView>
      );
    }

    return <SheetContentContainer>{children}</SheetContentContainer>;
  }
);

SheetContent.displayName = 'SheetContent';
