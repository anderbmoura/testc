import React from 'react';
import { styled, View } from 'tamagui';
import { SeparatorProps } from './Separator.model';

const DscSeparatorBase = styled(View, {
  name: 'DscSeparator',
  backgroundColor: '$outlined1',
  opacity: 1,
});

/**
 * Componente DSC Separator
 *
 * Um componente visual de separação que pode ser exibido horizontal ou verticalmente.
 * Segue as especificações do design system com valores fixos:
 * - Horizontal: largura 100%, altura 1px
 * - Vertical: largura 1px, altura 100%
 * - Opacidade: sempre 1
 * - Cor: sempre "$outlined1"
 *
 * @param direction - Direção do separador (horizontal ou vertical)
 * 
 * Exemplos de uso:
 * ```tsx
 * <Separator direction="horizontal" />
 * <Separator direction="vertical" />
 * ```
 */
export const Separator: React.FC<SeparatorProps> = ({ direction }) => {
  const isHorizontal = direction === 'horizontal';
  
  return (
    <DscSeparatorBase 
      style={{
        width: isHorizontal ? '100%' : 1,
        height: isHorizontal ? 1 : '100%',
      }} 
    />
  );
};

export default Separator;
