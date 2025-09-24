import React, { memo } from 'react';
import { ListFooterProps } from './ListFooter.model';
import {
  LeftContainer,
  ListFooterContainer,
  RightContainer,
} from './ListFooter.styles';
import { LabelSmall, BodyStandard } from '../Typography';

/**
 * Componente DSC ListFooter
 *
 * Footer de lista com suporte para texto e labels nas posições esquerda e direita.
 * Exibe os elementos apenas quando os valores são fornecidos e não estão vazios.
 *
 * @example
 * ```tsx
 * <ListFooter
 *   labelLeft="Total"
 *   textLeft="R$ 1.000,00"
 *   labelRight="Saldo"
 *   textRight="R$ 2.500,00"
 * />
 * ```
 */
export const ListFooter = memo<ListFooterProps>(
  ({ textLeft, textRight, labelLeft, labelRight }) => {
    const hasLeftContent = !!(labelLeft || textLeft);
    const hasRightContent = !!(labelRight || textRight);

    return (
      <ListFooterContainer>
        {hasLeftContent && (
          <LeftContainer>
            {labelLeft && (
              <LabelSmall color="$onNeutral2">{labelLeft}</LabelSmall>
            )}
            {textLeft && (
              <BodyStandard color="$onNeutral2">{textLeft}</BodyStandard>
            )}
          </LeftContainer>
        )}

        {hasRightContent && (
          <RightContainer>
            {labelRight && (
              <LabelSmall color="$onNeutral2">{labelRight}</LabelSmall>
            )}
            {textRight && (
              <BodyStandard color="$onNeutral2">{textRight}</BodyStandard>
            )}
          </RightContainer>
        )}
      </ListFooterContainer>
    );
  }
);

ListFooter.displayName = 'ListFooter';
