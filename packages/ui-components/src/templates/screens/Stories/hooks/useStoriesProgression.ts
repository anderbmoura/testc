import { useEffect, useRef, useState, useCallback } from 'react';

export interface UseStoriesProgressionProps {
  /**
   * Número total de items
   */
  totalItems: number;

  /**
   * Duração de cada item em milissegundos
   */
  duration: number;

  /**
   * Se a progressão está pausada
   */
  paused?: boolean;

  /**
   * Callback quando o item atual muda
   */
  onItemChange?: (index: number) => void;
}

export interface UseStoriesProgressionReturn {
  /**
   * Índice do item atual
   */
  currentIndex: number;

  /**
   * Progresso do item atual (0-1)
   */
  currentProgress: number;

  /**
   * Navegar para um item específico
   */
  goToItem: (index: number) => void;

  /**
   * Ir para o próximo item
   */
  nextItem: () => void;

  /**
   * Ir para o item anterior
   */
  previousItem: () => void;

  /**
   * Resetar a progressão
   */
  reset: () => void;
}

export const useStoriesProgression = ({
  totalItems,
  duration,
  paused = false,
  onItemChange,
}: UseStoriesProgressionProps): UseStoriesProgressionReturn => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [currentProgress, setCurrentProgress] = useState(0);

  const startTimeRef = useRef<number>(Date.now());
  const pausedTimeRef = useRef<number>(0);
  const pauseStartRef = useRef<number | null>(null);
  const animationFrameRef = useRef<number | null>(null);

  const goToItem = useCallback(
    (index: number) => {
      if (index >= 0 && index < totalItems) {
        setCurrentIndex(index);
        setCurrentProgress(0);
        startTimeRef.current = Date.now();
        pausedTimeRef.current = 0;
        pauseStartRef.current = null;
        onItemChange?.(index);
      }
    },
    [totalItems, onItemChange]
  );

  const nextItem = useCallback(() => {
    if (currentIndex < totalItems - 1) {
      goToItem(currentIndex + 1);
    } else {
      goToItem(0);
    }
  }, [currentIndex, totalItems, goToItem]);

  const previousItem = useCallback(() => {
    if (currentIndex > 0) {
      goToItem(currentIndex - 1);
    } else {
      goToItem(totalItems - 1);
    }
  }, [currentIndex, totalItems, goToItem]);

  const reset = useCallback(() => {
    setCurrentIndex(0);
    setCurrentProgress(0);
    startTimeRef.current = Date.now();
    pausedTimeRef.current = 0;
    pauseStartRef.current = null;
    onItemChange?.(0);
  }, [onItemChange]);

  const updateProgress = useCallback(() => {
    if (paused) {
      return;
    }

    const now = Date.now();
    const activeTime = now - startTimeRef.current - pausedTimeRef.current;
    const progress = Math.min(activeTime / duration, 1);

    setCurrentProgress(progress);

    if (progress >= 1) {
      if (currentIndex < totalItems - 1) {
        goToItem(currentIndex + 1);
      } else {
        goToItem(0);
      }
    } else {
      animationFrameRef.current = requestAnimationFrame(updateProgress);
    }
  }, [paused, duration, currentIndex, totalItems, goToItem]);

  useEffect(() => {
    if (paused) {
      if (pauseStartRef.current === null) {
        pauseStartRef.current = Date.now();
      }
      if (animationFrameRef.current) {
        cancelAnimationFrame(animationFrameRef.current);
        animationFrameRef.current = null;
      }
    } else {
      if (pauseStartRef.current !== null) {
        const pauseDuration = Date.now() - pauseStartRef.current;
        pausedTimeRef.current += pauseDuration;
        pauseStartRef.current = null;
      }
      if (totalItems > 0 && !animationFrameRef.current) {
        const startAnimation = () => {
          if (!paused) {
            animationFrameRef.current = requestAnimationFrame(updateProgress);
          }
        };
        startAnimation();
      }
    }
  }, [paused, totalItems]);

  useEffect(() => {
    if (!paused && totalItems > 0) {
      if (animationFrameRef.current) {
        cancelAnimationFrame(animationFrameRef.current);
      }
      animationFrameRef.current = requestAnimationFrame(updateProgress);
    }
  }, [currentIndex, paused, totalItems, updateProgress]);

  useEffect(() => {
    return () => {
      if (animationFrameRef.current) {
        cancelAnimationFrame(animationFrameRef.current);
      }
    };
  }, []);

  return {
    currentIndex,
    currentProgress,
    goToItem,
    nextItem,
    previousItem,
    reset,
  };
};
