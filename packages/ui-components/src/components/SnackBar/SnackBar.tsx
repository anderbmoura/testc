import { useEffect, useRef, useCallback } from 'react';
import { Animated, PanResponder } from 'react-native';
import { styled, YStack, XStack, Portal } from 'tamagui';
import { SnackBarProps, SnackBarColor } from './SnackBar.model';
import { Body } from '../Typography';
import { useTransformIcon } from '../../utils';
import { WarningHexagon, BadgeCheck } from 'iconoir-react-native';

const ANIMATION_CONFIG = {
  SWIPE_THRESHOLD_DISTANCE: 30,
  SWIPE_THRESHOLD_VELOCITY: 0.5,
  DISMISS_ANIMATION_DURATION: 250,
  SPRING_TENSION: 100,
  SPRING_FRICTION: 8,
  SLIDE_OUT_DISTANCE: 400,
  INITIAL_Y_POSITION: 100,
  GESTURE_MIN_DISTANCE: 5,
} as const;

const shouldDismissVertically = (dy: number, vy: number): boolean =>
  dy > ANIMATION_CONFIG.SWIPE_THRESHOLD_DISTANCE ||
  (dy > ANIMATION_CONFIG.SWIPE_THRESHOLD_DISTANCE / 2 &&
    vy > ANIMATION_CONFIG.SWIPE_THRESHOLD_VELOCITY);

const shouldDismissHorizontally = (dx: number, vx: number): boolean =>
  dx > ANIMATION_CONFIG.SWIPE_THRESHOLD_DISTANCE * 1.67 ||
  (dx > ANIMATION_CONFIG.SWIPE_THRESHOLD_DISTANCE * 0.83 &&
    vx > ANIMATION_CONFIG.SWIPE_THRESHOLD_VELOCITY);

const createSpringAnimation = (value: Animated.Value, toValue: number) =>
  Animated.spring(value, {
    toValue,
    useNativeDriver: true,
    tension: ANIMATION_CONFIG.SPRING_TENSION,
    friction: ANIMATION_CONFIG.SPRING_FRICTION,
  });

const createTimingAnimation = (value: Animated.Value, toValue: number) =>
  Animated.timing(value, {
    toValue,
    duration: ANIMATION_CONFIG.DISMISS_ANIMATION_DURATION,
    useNativeDriver: true,
  });

const SnackBarContainer = styled(YStack, {
  name: 'SnackBarContainer',
  borderRadius: '$small',
  paddingVertical: '$tiny',
  paddingHorizontal: '$smaller',
  elevation: 8,
  zIndex: 999999,
  pointerEvents: 'auto',
  backgroundColor: '$color9',
});

const SnackBarContent = styled(XStack, {
  name: 'SnackBarContent',
  alignItems: 'center',
  gap: '$smaller',
  width: '100%',
});

const SnackBarTextContainer = styled(YStack, {
  name: 'SnackBarTextContainer',
  flex: 1,
  gap: '$quark',
});

/**
 * Componente DSC SnackBar
 *
 * @param color - Variante de cor do SnackBar ('neutral' | 'danger' | 'success')
 * ```tsx
 * <SnackBar color="success" title="Sucesso!" />
 * <SnackBar color="danger" title="Erro ocorrido" />
 * <SnackBar color="neutral" title="Informação" />
 * ```
 *
 * @param icon - Ícone exibido no SnackBar
 * Nota: Para cores 'danger' e 'success', ícones padrão são forçados (WarningHexagon e BadgeCheck respectivamente)
 * ```tsx
 * <SnackBar icon={CheckCircle} title="Upload Completo" />
 * <SnackBar color="danger" icon={CustomIcon} title="Erro" /> // Usará WarningHexagon em vez disso
 * <SnackBar color="success" icon={CustomIcon} title="Sucesso" /> // Usará BadgeCheck em vez disso
 * ```
 *
 * @param title - Título exibido no SnackBar
 * ```tsx
 * <SnackBar title="Operação bem-sucedida" />
 * ```
 *
 * @param description - Texto de descrição opcional
 * ```tsx
 * <SnackBar title="Upload Completo" description="Arquivo enviado com sucesso" />
 * ```
 *
 * @param duration - Duração em milissegundos para fechamento automático. Defina como 0 para desabilitar o fechamento automático
 * ```tsx
 * <SnackBar title="Mensagem rápida" duration={2000} />
 * <SnackBar title="Mensagem persistente" duration={0} />
 * ```
 *
 * @param onDismiss - Callback executado quando o SnackBar é fechado
 * ```tsx
 * <SnackBar title="Mensagem" onDismiss={() => console.log('Fechado')} />
 * ```
 */
export function SnackBar({
  color = 'neutral' as SnackBarColor,
  icon,
  title,
  description,
  duration = 5000,
  onDismiss,
}: SnackBarProps) {
  const transformIcon = useTransformIcon();

  const translateY = useRef(
    new Animated.Value(ANIMATION_CONFIG.INITIAL_Y_POSITION)
  ).current;
  const translateX = useRef(new Animated.Value(0)).current;

  const animatedViewStyle = {
    position: 'absolute' as const,
    bottom: 12,
    left: 12,
    right: 12,
    transform: [{ translateY }, { translateX }],
  };

  const animateEntry = () => {
    createSpringAnimation(translateY, 0).start();
  };

  const resetPosition = () => {
    Animated.parallel([
      createSpringAnimation(translateY, 0),
      createSpringAnimation(translateX, 0),
    ]).start();
  };

  const dismissWithDirection = useCallback(
    (direction: 'down' | 'right' = 'down') => {
      const animation =
        direction === 'right'
          ? createTimingAnimation(
              translateX,
              ANIMATION_CONFIG.SLIDE_OUT_DISTANCE
            )
          : createTimingAnimation(
              translateY,
              ANIMATION_CONFIG.INITIAL_Y_POSITION
            );

      animation.start(() => onDismiss?.());
    },
    [translateX, translateY, onDismiss]
  );

  const handleGestureMove = (gestureState: any) => {
    const { dx, dy } = gestureState;

    if (dy > 0) {
      translateY.setValue(dy);
      translateX.setValue(0);
    } else if (dx > 0) {
      translateX.setValue(dx);
      translateY.setValue(0);
    }
  };

  const handleGestureRelease = (gestureState: any) => {
    const { dx, dy, vx, vy } = gestureState;

    if (shouldDismissVertically(dy, vy)) {
      dismissWithDirection('down');
    } else if (shouldDismissHorizontally(dx, vx)) {
      dismissWithDirection('right');
    } else {
      resetPosition();
    }
  };

  useEffect(animateEntry, [translateY]);

  useEffect(() => {
    if (duration <= 0) return;

    const autoDismissTimer = setTimeout(() => dismissWithDirection(), duration);
    return () => clearTimeout(autoDismissTimer);
  }, [duration, dismissWithDirection]);

  const panResponder = PanResponder.create({
    onStartShouldSetPanResponder: () => true,
    onMoveShouldSetPanResponder: (_, gestureState) =>
      Math.abs(gestureState.dx) > ANIMATION_CONFIG.GESTURE_MIN_DISTANCE ||
      gestureState.dy > ANIMATION_CONFIG.GESTURE_MIN_DISTANCE,
    onPanResponderMove: (_, gestureState) => handleGestureMove(gestureState),
    onPanResponderRelease: (_, gestureState) =>
      handleGestureRelease(gestureState),
    onPanResponderTerminate: resetPosition,
  });

  const getIcon = () => {
    switch (color) {
      case 'danger':
        return WarningHexagon;
      case 'success':
        return BadgeCheck;
      default:
        return icon;
    }
  };

  const IconComponent = getIcon()
    ? transformIcon(getIcon(), 24, '$color1')
    : null;

  return (
    <Portal>
      <Animated.View {...panResponder.panHandlers} style={animatedViewStyle}>
        <SnackBarContainer theme={color as any}>
          <SnackBarContent>
            {IconComponent && <YStack>{IconComponent}</YStack>}
            <SnackBarTextContainer>
              <Body size="large" emphasized color="$color1">
                {title}
              </Body>
              {description && (
                <Body size="standard" color="$color1">
                  {description}
                </Body>
              )}
            </SnackBarTextContainer>
          </SnackBarContent>
        </SnackBarContainer>
      </Animated.View>
    </Portal>
  );
}
