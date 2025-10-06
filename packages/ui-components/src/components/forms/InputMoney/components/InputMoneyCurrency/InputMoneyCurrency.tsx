import React, { useMemo } from 'react';
import type { GetThemeValueForKey } from 'tamagui';
import {
  TitleNumericalSmallSemibold,
  TitleNumericalMediumSemibold,
} from '../../../../data-display/Typography';
import type { InputMoneyCurrencyProps } from './InputMoneyCurrency.model';

/**
 * Componente para exibição do símbolo da moeda
 */
export const InputMoneyCurrency: React.FC<InputMoneyCurrencyProps> = ({
  currency,
  color,
  useSmallFont,
}) => {
  const CurrencyComponent = useMemo(() => {
    return useSmallFont
      ? TitleNumericalSmallSemibold
      : TitleNumericalMediumSemibold;
  }, [useSmallFont]);

  return (
    <CurrencyComponent color={color as GetThemeValueForKey<'color'>}>
      {currency}
    </CurrencyComponent>
  );
};
