import { useMemo, useCallback } from 'react';
import { processInputChildren } from '../utils/childrenUtils';

export interface InputChildrenManagerProps {
  children: React.ReactNode;
}

/**
 * Hook para gerenciar a lógica relacionada aos children do Input
 */
export const useInputChildrenManager = ({
  children,
}: InputChildrenManagerProps) => {
  const { errorChild, supportingTextChild, counterChild } = useMemo(
    () => processInputChildren(children),
    [children]
  );

  const getChildProp = useCallback(
    (child: React.ReactElement | null, propName: string) => {
      if (!child) return undefined;
      const props = child.props as Record<string, unknown>;
      return props[propName];
    },
    []
  );

  const errorText = useMemo(
    () => (getChildProp(errorChild, 'value') as string) || '',
    [errorChild, getChildProp]
  );

  const supportingText = useMemo(
    () => getChildProp(supportingTextChild, 'value') as string,
    [supportingTextChild, getChildProp]
  );

  const characterCount = useMemo(
    () => getChildProp(counterChild, 'value') as number,
    [counterChild, getChildProp]
  );

  const counterMaxLength = useMemo(
    () => getChildProp(counterChild, 'max') as number,
    [counterChild, getChildProp]
  );

  const hasError = Boolean(errorChild);

  return {
    errorChild,
    supportingTextChild,
    counterChild,
    errorText,
    supportingText,
    characterCount,
    counterMaxLength,
    hasError,
  };
};
