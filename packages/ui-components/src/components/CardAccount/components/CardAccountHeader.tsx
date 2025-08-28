import React, { useMemo, useCallback } from 'react';
import { XStack } from 'tamagui';
import { ArrowSeparateVertical } from 'iconoir-react-native';
import { LabelTinyBold, LabelTiny } from '../../Typography';
import { useTransformIcon } from '../../../utils';
import { useInteractionState } from '../hooks/useInteractionState';
import {
  CardAccountHeaderWrapper,
  CardAccountHeaderContainer,
} from '../components/StyledComponents';
import type { CardAccountHeaderProps } from '../CardAccount.model';

/**
 * Componente DSC CardAccountHeader
 *
 * Header do cartão de conta com informações da conta e opção de trocar.
 * Responsável por exibir o tipo e número da conta, além da opção de trocar conta.
 *
 * @example
 * ```tsx
 * <CardAccountHeader
 *   accountType="Conta corrente"
 *   accountNumber="0000000000-0"
 *   onPress={() => console.log('Header pressed')}
 * />
 * ```
 */
export const CardAccountHeader: React.FC<CardAccountHeaderProps> = ({
  accountType,
  accountNumber,
  onPress,
}) => {
  const { isFocused, handlers } = useInteractionState();
  const transformIcon = useTransformIcon();

  const arrowIcon = useMemo(
    () => transformIcon(<ArrowSeparateVertical />, 12, '$color1'),
    [transformIcon]
  );

  const handlePress = useCallback(() => {
    if (onPress) {
      onPress();
    }
  }, [onPress]);

  const renderHeader = () => (
    <CardAccountHeaderWrapper
      {...(isFocused ? { focused: true } : { focused: false })}
    >
      <CardAccountHeaderContainer
        onPress={handlePress}
        onFocus={handlers.onFocus}
        onBlur={handlers.onBlur}
        onPressIn={handlers.onPressIn}
        onPressOut={handlers.onPressOut}
        onHoverIn={handlers.onHoverIn}
        onHoverOut={handlers.onHoverOut}
      >
        <XStack gap="$nano">
          <LabelTinyBold color="$color1">{accountType}</LabelTinyBold>
          <LabelTiny color="$color1">{accountNumber}</LabelTiny>
        </XStack>

        <XStack gap="$quark" alignItems="center">
          <LabelTiny color="$color1">Trocar</LabelTiny>
          {arrowIcon}
        </XStack>
      </CardAccountHeaderContainer>
    </CardAccountHeaderWrapper>
  );

  return renderHeader();
};
