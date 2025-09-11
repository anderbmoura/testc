import React from 'react';
import { ButtonRowContainer } from './ButtonRow.styles';
import type { ButtonRowProps } from './ButtonRow.model';

/**
 * Template DSC ButtonRow
 *
 * Container que organiza componentes IconButtonText em linha horizontal,
 * aplicando largura igual para todos os botões e gap consistente entre eles.
 *
 * @example
 * ```tsx
 * <ButtonRow>
 *   <IconButtonText icon={HomeIcon}>Início</IconButtonText>
 *   <IconButtonText icon={ProfileIcon}>Perfil</IconButtonText>
 *   <IconButtonText icon={SettingsIcon}>Configurações</IconButtonText>
 * </ButtonRow>
 * ```
 */
export const ButtonRow: React.FC<ButtonRowProps> = ({ children, ...props }) => {
  // Aplica flex: 1 para cada filho clonando com touchableProps
  const childrenWithFlex = React.Children.map(children, (child, index) => {
    if (React.isValidElement(child)) {
      return React.cloneElement(child, {
        key: index,
        touchableProps: {
          flex: 1,
          ...child.props.touchableProps,
        },
      } as any);
    }
    return child;
  });

  return <ButtonRowContainer {...props}>{childrenWithFlex}</ButtonRowContainer>;
};
