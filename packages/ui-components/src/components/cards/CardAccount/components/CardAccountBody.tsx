import React, { useMemo, useCallback } from 'react';
import { XStack, YStack, Circle } from 'tamagui';
import { ArrowRight } from 'iconoir-react-native';
import {
  LabelTiny,
  TitleNumericalLargeSemibold,
} from '../../../data-display/Typography';
import { useTransformIcon } from '../../../../utils';
import { useInteractionState } from '../hooks/useInteractionState';
import {
  CardAccountBodyWrapper,
  CardAccountBodyContainer,
} from '../components/StyledComponents';
import type { CardAccountBodyProps } from '../CardAccount.model';
import { iconSize } from '../../../../config/tokens/iconSize/iconSize';

/**
 * Componente DSC CardAccountBody
 *
 * Body do cartão de conta com saldo e informações adicionais.
 * Responsável por exibir o saldo da conta, informações opcionais e botão de ação.
 *
 * @example
 * ```tsx
 * <CardAccountBody
 *   balance="R$ 1.234,56"
 *   onPress={() => console.log('Body pressed')}
 * />
 * ```
 */
export const CardAccountBody: React.FC<CardAccountBodyProps> = ({
  balance,
  supportIcon,
  supportText,
  onPress,
}) => {
  const { isFocused, handlers } = useInteractionState();
  const transformIcon = useTransformIcon();

  const arrowIcon = useMemo(
    () => transformIcon(<ArrowRight />, iconSize.tiny, '$color1'),
    [transformIcon]
  );

  const handlePress = useCallback(() => {
    if (onPress) {
      onPress();
    }
  }, [onPress]);

  const renderAdditionalInfo = () => {
    if (!supportIcon && !supportText) return null;

    const transformedSupportIcon = supportIcon
      ? transformIcon(supportIcon, iconSize.tiny, '$color1')
      : null;

    return (
      <XStack gap="$nano" alignItems="center">
        {transformedSupportIcon}
        {supportText && <LabelTiny color="$color1">{supportText}</LabelTiny>}
      </XStack>
    );
  };

  const renderBody = () => (
    <CardAccountBodyWrapper
      {...(isFocused ? { focused: true } : { focused: false })}
    >
      <CardAccountBodyContainer
        onPress={handlePress}
        onFocus={handlers.onFocus}
        onBlur={handlers.onBlur}
        onPressIn={handlers.onPressIn}
        onPressOut={handlers.onPressOut}
        onHoverIn={handlers.onHoverIn}
        onHoverOut={handlers.onHoverOut}
      >
        <YStack gap="$nano" alignItems="flex-start">
          <LabelTiny color="$color1">Saldo em conta</LabelTiny>
          <TitleNumericalLargeSemibold color="$color1">
            {balance}
          </TitleNumericalLargeSemibold>
          {renderAdditionalInfo()}
        </YStack>

        <Circle
          size={32}
          borderWidth={1}
          borderColor="$color1"
          alignItems="center"
          justifyContent="center"
        >
          {arrowIcon}
        </Circle>
      </CardAccountBodyContainer>
    </CardAccountBodyWrapper>
  );

  return renderBody();
};
