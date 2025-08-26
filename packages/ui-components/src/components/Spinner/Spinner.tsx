import React from 'react';
import { Spinner as TamaguiSpinner } from 'tamagui';
import { SpinnerProps } from './Spinner.model';

/**
 * Componente DSC Spinner
 *
 * @param variant - Variante visual do Spinner ('highlight' | 'neutral' | 'danger')
 * ```tsx
 * <Spinner variant="highlight" />
 * <Spinner variant="neutral" />
 * <Spinner variant="danger" />
 * ```
 *
 * @param size - Tamanho do Spinner ('small' | 'large')
 * ```tsx
 * <Spinner size="small" />
 * <Spinner size="large" />
 * ```
 */
const Spinner: React.FC<SpinnerProps> = ({
  variant = 'highlight',
  size = 'large',
}) => (
  <TamaguiSpinner
    theme={variant as any}
    color="$color8"
    size={size === 'small' ? 24 : (36 as any)}
  />
);

export default Spinner;
