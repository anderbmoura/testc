import React from 'react';
import { ScreenParametersChildrenSeparation } from '../ScreenParameters.model';

/**
 * Hook para separar os children do ScreenParameters em suas seções apropriadas
 *
 * Organiza automaticamente os children em:
 * - topAppBar: Componente TopAppBar (identifica pelo displayName ou props específicas)
 * - ValueSection: Componente ValueSection (identifica pelo displayName ou props)
 * - bodyContent: Array com ContentCard, ButtonRow e outros
 * - screenFooter: Componente ScreenFooter (identifica pelo displayName ou props específicas)
 *
 * @param children - Children do componente ScreenParameters
 * @returns Objeto com topAppBar, ValueSection, bodyContent e screenFooter separados
 *
 * @example
 * ```tsx
 * const { topAppBar, ValueSection, bodyContent, screenFooter } =
 *   useScreenParametersChildrenSeparation(children);
 * ```
 */
export const useScreenParametersChildrenSeparation = (
  children: React.ReactNode
): ScreenParametersChildrenSeparation => {
  return React.useMemo(() => {
    let topAppBar: React.ReactNode | null = null;
    let icon: React.ReactNode | null = null;
    let valueSection: React.ReactNode | null = null;
    const bodyContent: React.ReactNode[] = [];
    let screenFooter: React.ReactNode | null = null;

    React.Children.forEach(children, child => {
      if (!React.isValidElement(child)) {
        return;
      }

      const childType = child.type as any;
      const displayName = childType?.displayName || childType?.name || '';
      const props = child.props as Record<string, unknown>;

      // Identifica TopAppBar pelo displayName ou pela combinação de props específicas
      if (
        displayName === 'TopAppBar' ||
        displayName.includes('TopAppBar') ||
        (props.variant &&
          typeof props.variant === 'string' &&
          ['small', 'medium', 'large', 'select', 'home', 'floating'].includes(
            props.variant
          ) &&
          props.title !== undefined)
      ) {
        topAppBar = child;
        return;
      }

      // Identifica valueSection pelo displayName ou pela prop status
      if (
        displayName === 'ValueSection' ||
        displayName.includes('ValueSection')
      ) {
        valueSection = child;
        return;
      }

      // Identifica ScreenFooter pelo displayName ou pela prop variant específica
      if (
        displayName === 'ScreenFooter' ||
        displayName.includes('ScreenFooter') ||
        (props.variant &&
          typeof props.variant === 'string' &&
          ['button', 'iconButton'].includes(props.variant))
      ) {
        screenFooter = child;
        return;
      }

      // Identifica o ícone pelo displayName ou pela prop específica
      if (
        displayName === 'Avatar' ||
        displayName.includes('Avatar') ||
        (props.style &&
          typeof props.style === 'string' &&
          ['monogram', 'image', 'icon'].includes(props.style))
      ) {
        icon = child;
        return;
      }

      // Todos os outros elementos vão para o body
      bodyContent.push(child);
    });

    return {
      topAppBar,
      icon,
      valueSection,
      bodyContent,
      screenFooter,
    };
  }, [children]);
};
