import { useRef, useCallback, useMemo } from 'react';
import { Animated, PanResponder, PanResponderGestureState } from 'react-native';

export interface UseCardNotificationSwipeProps {
  /**
   * Callback executado quando o card é dispensado por swipe.
   */
  onSwipe?: () => void;

  /**
   * Define se o swipe está habilitado.
   * @default false
   */
  enabled?: boolean;
}

type SwipeDirection = 'left' | 'right';

interface GestureData {
  dx: number;
  dy: number;
  vx: number;
}

interface AnimationValues {
  translateX: Animated.Value;
  translateY: Animated.Value;
  rotation: Animated.Value;
}

const ANIMATION_CONFIG = {
  SWIPE_THRESHOLD_DISTANCE: 80,
  SWIPE_THRESHOLD_VELOCITY: 300,
  DISMISS_ANIMATION_DURATION: 300,
  SPRING_TENSION: 120,
  SPRING_FRICTION: 7,
  SLIDE_OUT_DISTANCE: 400,
  GESTURE_MIN_DISTANCE: 3,
  MAX_ROTATION: 2,
  VERTICAL_OFFSET_RATIO: 0.05,
  ROTATION_DIVISOR: 200,
  DISMISS_VERTICAL_OFFSET: -20,
} as const;

const shouldDismissCard = ({
  dx,
  vx,
}: Pick<GestureData, 'dx' | 'vx'>): boolean =>
  Math.abs(dx) > ANIMATION_CONFIG.SWIPE_THRESHOLD_DISTANCE ||
  Math.abs(vx) > ANIMATION_CONFIG.SWIPE_THRESHOLD_VELOCITY;

const createSpringAnimation = (
  value: Animated.Value,
  toValue: number
): Animated.CompositeAnimation =>
  Animated.spring(value, {
    toValue,
    useNativeDriver: true,
    tension: ANIMATION_CONFIG.SPRING_TENSION,
    friction: ANIMATION_CONFIG.SPRING_FRICTION,
  });

const createTimingAnimation = (
  value: Animated.Value,
  toValue: number
): Animated.CompositeAnimation =>
  Animated.timing(value, {
    toValue,
    duration: ANIMATION_CONFIG.DISMISS_ANIMATION_DURATION,
    useNativeDriver: true,
  });

const getSwipeDirection = (dx: number): SwipeDirection =>
  dx > 0 ? 'right' : 'left';

const calculateAnimationValues = (dx: number) => {
  const verticalOffset = Math.abs(dx) * ANIMATION_CONFIG.VERTICAL_OFFSET_RATIO;
  const rotationValue =
    (-dx / ANIMATION_CONFIG.ROTATION_DIVISOR) * ANIMATION_CONFIG.MAX_ROTATION;

  return {
    verticalOffset: -verticalOffset,
    rotation: Math.max(
      -ANIMATION_CONFIG.MAX_ROTATION,
      Math.min(ANIMATION_CONFIG.MAX_ROTATION, rotationValue)
    ),
  };
};

const calculateDismissTargets = (direction: SwipeDirection) => {
  const multiplier = direction === 'right' ? 1 : -1;

  return {
    translateX: ANIMATION_CONFIG.SLIDE_OUT_DISTANCE * multiplier,
    translateY: ANIMATION_CONFIG.DISMISS_VERTICAL_OFFSET,
    rotation: -ANIMATION_CONFIG.MAX_ROTATION * multiplier,
  };
};

const shouldHandleGesture = (
  enabled: boolean,
  gestureState: PanResponderGestureState
): boolean => {
  if (!enabled) return false;

  const { dx, dy } = gestureState;
  const isDraggingHorizontally =
    Math.abs(dx) > ANIMATION_CONFIG.GESTURE_MIN_DISTANCE;
  const isDraggingVertically =
    Math.abs(dy) > ANIMATION_CONFIG.GESTURE_MIN_DISTANCE;

  return (
    isDraggingHorizontally &&
    (!isDraggingVertically || Math.abs(dx) > Math.abs(dy))
  );
};

/**
 * Hook para gerenciar o gesto de swipe do CardNotification.
 * Permite que o usuário deslize para a direita ou esquerda para dispensar o card.
 */
export const useCardNotificationSwipe = ({
  onSwipe,
  enabled = false,
}: UseCardNotificationSwipeProps = {}) => {
  const animationValues: AnimationValues = {
    translateX: useRef(new Animated.Value(0)).current,
    translateY: useRef(new Animated.Value(0)).current,
    rotation: useRef(new Animated.Value(0)).current,
  };

  const resetPosition = useCallback(() => {
    const resetAnimations = [
      createSpringAnimation(animationValues.translateX, 0),
      createSpringAnimation(animationValues.translateY, 0),
      createSpringAnimation(animationValues.rotation, 0),
    ];

    Animated.parallel(resetAnimations).start();
  }, [animationValues]);

  const dismissCard = useCallback(
    (direction: SwipeDirection) => {
      const targets = calculateDismissTargets(direction);

      const dismissAnimations = [
        createTimingAnimation(animationValues.translateX, targets.translateX),
        createTimingAnimation(animationValues.translateY, targets.translateY),
        createTimingAnimation(animationValues.rotation, targets.rotation),
      ];

      Animated.parallel(dismissAnimations).start(() => {
        onSwipe?.();
      });
    },
    [animationValues, onSwipe]
  );

  const updateAnimationValues = useCallback(
    (gestureData: GestureData) => {
      const { dx } = gestureData;
      const calculatedValues = calculateAnimationValues(dx);

      animationValues.translateX.setValue(dx);
      animationValues.translateY.setValue(calculatedValues.verticalOffset);
      animationValues.rotation.setValue(calculatedValues.rotation);
    },
    [animationValues]
  );

  const handleGestureMove = useCallback(
    (gestureState: PanResponderGestureState) => {
      if (!enabled) return;

      const gestureData: GestureData = {
        dx: gestureState.dx,
        dy: gestureState.dy,
        vx: gestureState.vx,
      };

      updateAnimationValues(gestureData);
    },
    [enabled, updateAnimationValues]
  );

  const handleGestureRelease = useCallback(
    (gestureState: PanResponderGestureState) => {
      if (!enabled) return;

      const gestureData: GestureData = {
        dx: gestureState.dx,
        dy: gestureState.dy,
        vx: gestureState.vx,
      };

      if (shouldDismissCard(gestureData)) {
        const direction = getSwipeDirection(gestureData.dx);
        dismissCard(direction);
      } else {
        resetPosition();
      }
    },
    [enabled, dismissCard, resetPosition]
  );

  const panResponder = useMemo(
    () =>
      PanResponder.create({
        onStartShouldSetPanResponder: () => enabled,
        onMoveShouldSetPanResponder: (_, gestureState) =>
          shouldHandleGesture(enabled, gestureState),
        onStartShouldSetPanResponderCapture: () => enabled,
        onMoveShouldSetPanResponderCapture: (_, gestureState) => {
          if (!enabled) return false;
          return (
            Math.abs(gestureState.dx) > ANIMATION_CONFIG.GESTURE_MIN_DISTANCE
          );
        },
        onPanResponderMove: (_, gestureState) =>
          handleGestureMove(gestureState),
        onPanResponderRelease: (_, gestureState) =>
          handleGestureRelease(gestureState),
        onPanResponderTerminate: () => {
          if (enabled) {
            resetPosition();
          }
        },
      }),
    [enabled, handleGestureMove, handleGestureRelease, resetPosition]
  );

  const animatedStyle = useMemo(
    () => ({
      transform: [
        { translateX: animationValues.translateX },
        { translateY: animationValues.translateY },
        {
          rotate: animationValues.rotation.interpolate({
            inputRange: [
              -ANIMATION_CONFIG.MAX_ROTATION,
              ANIMATION_CONFIG.MAX_ROTATION,
            ],
            outputRange: [
              `-${ANIMATION_CONFIG.MAX_ROTATION}deg`,
              `${ANIMATION_CONFIG.MAX_ROTATION}deg`,
            ],
          }),
        },
      ],
    }),
    [animationValues]
  );

  return {
    panResponder,
    animatedStyle,
    resetPosition,
  };
};
