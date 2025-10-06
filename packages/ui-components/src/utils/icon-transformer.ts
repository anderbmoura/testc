import React from 'react';
import { useTheme } from 'tamagui';

/**
 * Icon Size and Color Transformer - Workaround para contornar bugs do Tamagui
 *
 * Issues relacionadas do Tamagui:
 * - #2961: "React does not recognize the scaleIcon prop on DOM element"
 * - #2935: Problemas com scaleIcon em vários componentes
 * - #3268: Button.Icon não aplica estilos de variantes corretamente
 *
 * Este transformer aplica tamanhos e cores absolutos diretamente para contornar
 * os bugs do Tamagui com ícones externos, especialmente nos estados disabled.
 *
 * Detecta o tipo de ícone e aplica a propriedade correta:
 * - Ícones Tamagui (Lucide): prop 'size' e 'color'
 * - Ícones externos (Iconoir, SVGs customizados): props 'width', 'height' e 'color'
 *
 * Atualizado para suportar SVGs customizados via componente Icon unificado.
 *
 * TODO: Remover quando Tamagui corrigir suporte nativo para SVGs externos
 */
export const useTransformIcon = () => {
  const theme = useTheme();

  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  return (icon: any, iconSize: number, color?: string): any => {
    if (!icon) return icon;

    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    const iconProps: any = {};

    // Only apply color if explicitly provided (to avoid overriding existing colors)
    if (color) {
      iconProps.color = theme[color.replace('$', '')]?.get();
    }

    // ForwardRefExoticComponent (Iconoir passado como icon={Heart})
    if (icon.$$typeof === Symbol.for('react.forward_ref')) {
      return React.createElement(icon, {
        width: iconSize,
        height: iconSize,
        ...iconProps,
      });
    }

    // Função/componente (LucideHeart passado como icon={LucideHeart})
    if (typeof icon === 'function') {
      const isTamaguiIcon = icon.displayName?.includes('themed');

      if (isTamaguiIcon) {
        return React.createElement(icon, {
          size: iconSize,
          ...iconProps,
        });
      } else {
        return React.createElement(icon, {
          width: iconSize,
          height: iconSize,
          ...iconProps,
        });
      }
    }

    // React Element (ícone passado como <Icon />)
    if (React.isValidElement(icon)) {
      // eslint-disable-next-line @typescript-eslint/no-explicit-any
      const isTamaguiIcon = (icon.type as any).displayName?.includes('themed');
      // eslint-disable-next-line @typescript-eslint/no-explicit-any
      const existingProps = (icon.props as any) || {};

      if (isTamaguiIcon) {
        return React.cloneElement(icon, {
          ...existingProps,
          size: iconSize,
          ...iconProps,
        });
      } else {
        return React.cloneElement(icon, {
          ...existingProps,
          width: iconSize,
          height: iconSize,
          ...iconProps,
        });
      }
    }

    return icon;
  };
};
