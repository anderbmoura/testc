import React, { useState, useCallback } from 'react';
import { Animated } from 'react-native';
import { Theme } from 'tamagui';
import { CardNotificationIconContainer } from './components/CardNotificationIconContainer';
import { CardNotificationContent } from './components/CardNotificationContent';
import { CardNotificationButton } from './components/CardNotificationButton';
import { CardNotificationContainer } from './CardNotification.styles';
import { useCardNotificationSwipe } from './hooks/useCardNotificationSwipe';
import type { CardNotificationProps } from './CardNotification.model';

/**
 * Componente DSC CardNotification
 *
 * @param variant - Variante visual que determina o tema (cor) do componente
 * ```tsx
 * <CardNotification variant="highlight" label="Informação" description="Descrição da notificação" />
 * <CardNotification variant="success" label="Sucesso" description="Operação realizada com sucesso" />
 * <CardNotification variant="warning" label="Atenção" description="Algo requer sua atenção" />
 * <CardNotification variant="danger" label="Erro" description="Ocorreu um erro" />
 * ```
 *
 * @param label - Título principal do card
 * ```tsx
 * <CardNotification label="Título da notificação" description="Descrição..." />
 * ```
 *
 * @param description - Descrição complementar
 * ```tsx
 * <CardNotification
 *   label="Título"
 *   description="Esta é uma descrição mais detalhada da notificação."
 * />
 * ```
 *
 * @param icon - Ícone personalizado (opcional - se não for fornecido, um ícone padrão será utilizado)
 * ```tsx
 * <CardNotification
 *   label="Custom"
 *   description="Com ícone personalizado"
 *   icon={<CustomIcon />}
 * />
 * ```
 *
 * @param showButton - Define se o botão de ação deve ser exibido (padrão: false)
 * ```tsx
 * <CardNotification
 *   label="Card"
 *   description="Card com botão de ação e swipe habilitado"
 *   showButton={true} // Habilita o botão
 *   onButtonPress={() => console.log('Button pressed')}
 * />
 * ```
 *
 * @param onButtonPress - Callback quando o botão de ação é pressionado
 * ```tsx
 * <CardNotification
 *   label="Com ação"
 *   description="Card com callback do botão"
 *   onButtonPress={() => console.log('Button pressed')}
 * />
 * ```
 *
 * @param onSwipe - Callback opcional quando o card é dispensado por swipe
 * ```tsx
 * <CardNotification
 *   label="Com swipe callback"
 *   description="Deslize para dispensar"
 *   onSwipe={() => removeNotification()} // Ação quando dispensado
 * />
 *
 * <CardNotification
 *   label="Com swipe sem callback"
 *   description="Deslize funciona mas sem ação"
 *   showButton={true} // Swipe habilitado, mas sem onSwipe
 * />
 * ```
 *
 * @param autoHide - Define se o componente deve se auto-desrenderizar após o swipe
 * ```tsx
 * <CardNotification
 *   label="Auto-hide"
 *   description="Se remove automaticamente após swipe"
 *   autoHide={true}
 *   onSwipe={() => console.log('Card foi removido')}
 * />
 * ```
 *
 * @param accessibilityLabel - Label para acessibilidade
 * ```tsx
 * <CardNotification
 *   label="Título"
 *   description="Descrição"
 *   accessibilityLabel="Notificação informativa"
 * />
 * ```
 */
export const CardNotification: React.FC<CardNotificationProps> = ({
  variant = 'highlight',
  label,
  description,
  icon,
  showButton = false,
  onButtonPress,
  onSwipe,
  onMove,
  onGestureEnd,
  autoHide = true,
  accessibilityLabel,
  buttonAccessibilityLabel,
}) => {
  const [isVisible, setIsVisible] = useState(true);

  const handleSwipe = useCallback(() => {
    onSwipe?.();

    if (autoHide) {
      setIsVisible(false);
    }
  }, [onSwipe, autoHide]);

  const { panResponder, animatedStyle } = useCardNotificationSwipe({
    onSwipe: handleSwipe,
    onMove,
    onGestureEnd,
    enabled: true,
  });

  if (!isVisible && autoHide) {
    return null;
  }

  const iconProps = { variant, icon };
  const contentProps = { label, description };
  const buttonProps = {
    onPress: onButtonPress,
    accessibilityLabel: buttonAccessibilityLabel,
  };

  const cardNotification = () => {
    const cardContent = (
      <CardNotificationContainer
        accessibilityLabel={accessibilityLabel || label}
        accessibilityRole="text"
      >
        <Theme name={variant === 'neutral' ? undefined : variant}>
          <CardNotificationIconContainer {...iconProps} />
        </Theme>

        <CardNotificationContent {...contentProps} />

        {showButton && <CardNotificationButton {...buttonProps} />}
      </CardNotificationContainer>
    );

    return (
      <Animated.View {...panResponder.panHandlers} style={animatedStyle}>
        {cardContent}
      </Animated.View>
    );
  };

  return cardNotification();
};
