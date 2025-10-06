import React from 'react';
import {
  RowsContainer,
  AnimatedRowsContainer,
} from './ActionsButtonRowContent.styles';
import type { ActionsButtonRowContentProps } from './ActionsButtonRowContent.model';

/**
 * Componente responsável por renderizar o conteúdo principal do ActionsButtonRow.
 * Gerencia a exibição dos ButtonRows iniciais e adicionais com animação.
 */
export const ActionsButtonRowContent: React.FC<
  ActionsButtonRowContentProps
> = ({
  initialRows,
  additionalRows,
  showAll,
  contentHeight,
  shouldShowToggleButton,
  onContentLayout,
}) => (
  <RowsContainer>
    {initialRows}

    {shouldShowToggleButton && (
      <>
        <RowsContainer
          position="absolute"
          opacity={0}
          zIndex={-1}
          onLayout={onContentLayout}
        >
          {additionalRows}
        </RowsContainer>

        <AnimatedRowsContainer
          animation="quick"
          maxHeight={showAll ? contentHeight : 0}
          opacity={showAll ? 1 : 0}
        >
          {additionalRows}
        </AnimatedRowsContainer>
      </>
    )}
  </RowsContainer>
);
