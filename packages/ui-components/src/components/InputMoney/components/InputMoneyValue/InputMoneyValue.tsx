import React, { useMemo } from 'react';
import type { GetThemeValueForKey } from 'tamagui';
import {
  DisplayNumericalBigger,
  DisplayNumericalLargeSemibold,
} from '../../../Typography';
import type { InputMoneyValueProps } from './InputMoneyValue.model';

/**
 * Componente para exibição do valor monetário
 */
export const InputMoneyValue: React.FC<InputMoneyValueProps> = ({
  displayValue,
  color,
  useSmallFont,
  isEditing,
  editingText,
}) => {
  const ValueComponent = useMemo(() => {
    if (useSmallFont) {
      return DisplayNumericalLargeSemibold;
    }
    return DisplayNumericalBigger;
  }, [useSmallFont]);

  const valueToDisplay = useMemo(() => {
    return isEditing ? editingText || '0,00' : displayValue;
  }, [isEditing, editingText, displayValue]);

  return (
    <ValueComponent color={color as GetThemeValueForKey<'color'>}>
      {valueToDisplay}
    </ValueComponent>
  );
};
