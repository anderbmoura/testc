import React from 'react';
import {
  CardWidgetFooterLoteriasContainer,
  CardWidgetFooterLoteriasRow,
  CardWidgetFooterLoteriasCircle,
} from './CardWidgetFooterLoterias.styles';
import type { CardWidgetFooterLoteriasProps } from './CardWidgetFooterLoterias.model';
import { BodySmall } from '../../../data-display/Typography';

/**
 * Componente DSC CardWidgetFooterLoterias
 *
 * Footer especializado para exibir números de loteria em formato circular.
 * Apresenta sempre 6 números organizados em 2 linhas de 3 números cada.
 *
 * @example
 * ```tsx
 * <CardWidgetFooterLoterias
 *   numbers={[12, 21, 37, 46, 49, 53]}
 * />
 * ```
 */
export const CardWidgetFooterLoterias: React.FC<
  CardWidgetFooterLoteriasProps
> = ({ numbers, ...stackProps }) => {
  const paddedNumbers = [...numbers].slice(0, 6);
  while (paddedNumbers.length < 6) {
    paddedNumbers.push(0);
  }

  const firstRow = paddedNumbers.slice(0, 3);
  const secondRow = paddedNumbers.slice(3, 6);

  const renderNumber = (number: number, index: number) => (
    <CardWidgetFooterLoteriasCircle key={index}>
      <BodySmall color="$success" textAlign="center">
        {number.toString().padStart(2, '0')}
      </BodySmall>
    </CardWidgetFooterLoteriasCircle>
  );

  return (
    <CardWidgetFooterLoteriasContainer {...stackProps}>
      <CardWidgetFooterLoteriasRow>
        {firstRow.map((number, index) => renderNumber(number, index))}
      </CardWidgetFooterLoteriasRow>
      <CardWidgetFooterLoteriasRow>
        {secondRow.map((number, index) => renderNumber(number, index + 3))}
      </CardWidgetFooterLoteriasRow>
    </CardWidgetFooterLoteriasContainer>
  );
};
