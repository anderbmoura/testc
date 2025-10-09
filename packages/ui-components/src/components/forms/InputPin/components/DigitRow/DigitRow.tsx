import React from 'react';
import { NumericDigit, TokenDigit } from '../Digit';
import { StyledDigitRow } from './DigitRow.styles';
import { useInputPinContext } from '../../context/InputPinContext';
import type { InputPinVariant } from '../../InputPin.model';

type DigitRowProps = {
  variant: Extract<InputPinVariant, 'numeric' | 'token'>;
};

export const DigitRow: React.FC<DigitRowProps> = ({ variant }) => {
  const { digitCount } = useInputPinContext();

  return (
    <StyledDigitRow>
      {Array.from({ length: digitCount }).map((_, index) =>
        variant === 'numeric' ? (
          <NumericDigit key={`numeric-digit-${index}`} index={index} />
        ) : (
          <TokenDigit key={`token-digit-${index}`} index={index} />
        )
      )}
    </StyledDigitRow>
  );
};
