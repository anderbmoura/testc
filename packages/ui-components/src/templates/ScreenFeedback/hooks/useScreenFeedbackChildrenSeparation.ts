import React from 'react';
import { ScreenFeedbackChildrenSeparation } from '../ScreenFeedback.model';

/**
 * Hook para separar os children do ScreenFeedback em suas seções apropriadas
 *
 * Organiza automaticamente os children em:
 * - topAppBar: Componente TopAppBar (identifica pelo displayName ou props específicas)
 * - feedbackIllustration: Componente FeedbackIllustration (identifica pelo displayName ou props)
 * - bodyContent: Array com ContentCard, ButtonRow e outros
 * - screenFooter: Componente ScreenFooter (identifica pelo displayName ou props específicas)
 *
 * @param children - Children do componente ScreenFeedback
 * @returns Objeto com topAppBar, feedbackIllustration, bodyContent e screenFooter separados
 *
 * @example
 * ```tsx
 * const { topAppBar, feedbackIllustration, bodyContent, screenFooter } =
 *   useScreenFeedbackChildrenSeparation(children);
 * ```
 */
export const useScreenFeedbackChildrenSeparation = (
  children: React.ReactNode
): ScreenFeedbackChildrenSeparation => {
  return React.useMemo(() => {
    let topAppBar: React.ReactNode | null = null;
    let feedbackIllustration: React.ReactNode | null = null;
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

      // Identifica FeedbackIllustration pelo displayName ou pela prop status
      if (
        displayName === 'FeedbackIllustration' ||
        displayName.includes('FeedbackIllustration') ||
        (props.status &&
          typeof props.status === 'string' &&
          ['success', 'warning', 'danger', 'informative'].includes(
            props.status
          ))
      ) {
        feedbackIllustration = child;
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

      // Todos os outros elementos vão para o body
      bodyContent.push(child);
    });

    return {
      topAppBar,
      feedbackIllustration,
      bodyContent,
      screenFooter,
    };
  }, [children]);
};
