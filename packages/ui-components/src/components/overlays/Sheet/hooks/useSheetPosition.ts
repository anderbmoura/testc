import { useEffect, useState, useCallback } from 'react';

export interface UseSheetPositionProps {
  /**
   * Snap points para o sheet.
   */
  snapPoints: number[];

  /**
   * Estado de abertura do sheet.
   */
  open?: boolean;

  /**
   * Posição controlada.
   */
  position?: number;

  /**
   * Posição padrão.
   */
  defaultPosition?: number;

  /**
   * Callback quando posição muda.
   */
  onPositionChange?: (position: number) => void;
}

export interface UseSheetPositionReturn {
  /**
   * Posição atual do sheet.
   */
  position: number;

  /**
   * Snap points ajustados (ordem correta).
   */
  adjustedSnapPoints: number[];

  /**
   * Define a posição do sheet.
   */
  setPosition: (position: number) => void;
}

/**
 * Hook para gerenciar a posição do Sheet.
 */
export const useSheetPosition = ({
  snapPoints,
  open,
  position: controlledPosition,
  defaultPosition = 0,
  onPositionChange,
}: UseSheetPositionProps): UseSheetPositionReturn => {
  const [internalPosition, setInternalPosition] =
    useState<number>(defaultPosition);

  // Determina se é controlado ou não
  const isControlled = controlledPosition !== undefined;
  const position = isControlled ? controlledPosition : internalPosition;

  // Detecta se os snap points estão em ordem crescente
  const isAscendingOrder =
    snapPoints.length >= 2 && snapPoints[0] < snapPoints[1];

  // Ajusta snap points para ordem correta (maior primeiro)
  const adjustedSnapPoints = isAscendingOrder
    ? [...snapPoints].reverse()
    : snapPoints;

  // Posição alvo quando está em ordem crescente
  const targetPosition = isAscendingOrder ? 1 : 0;

  const setPosition = useCallback(
    (newPosition: number) => {
      if (!isControlled) {
        setInternalPosition(newPosition);
      }
      onPositionChange?.(newPosition);
    },
    [isControlled, onPositionChange]
  );

  // Anima para a posição correta quando abre
  useEffect(() => {
    if (open === true && isAscendingOrder) {
      const timer = setTimeout(() => {
        setPosition(targetPosition);
      }, 200);

      return () => clearTimeout(timer);
    }
  }, [open, isAscendingOrder, targetPosition, setPosition]);

  return {
    position,
    adjustedSnapPoints,
    setPosition,
  };
};
