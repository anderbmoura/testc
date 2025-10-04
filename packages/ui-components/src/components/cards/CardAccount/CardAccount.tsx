import React from 'react';
import { YStack } from 'tamagui';
import { CardAccountHeader } from './components/CardAccountHeader';
import { CardAccountBody } from './components/CardAccountBody';
import type { CardAccountProps } from './CardAccount.model';

/**
 * Componente DSC CardAccount
 *
 * Cartão de conta com header e body, mostrando informações da conta e saldo.
 *
 * @example
 * ```tsx
 * <CardAccount
 *   theme="highlight"
 *   headerProps={{
 *     accountType: "Conta poupança",
 *     accountNumber: "1234567890-1",
 *     onPress: () => console.log('Change account')
 *   }}
 *   bodyProps={{
 *     balance: "R$ 5.432,10",
 *     additionalText: "Rendimento disponível",
 *     onPress: () => console.log('View details')
 *   }}
 * />
 *
 * ```
 */
export const CardAccount: React.FC<CardAccountProps> = ({
  theme = 'highlight',
  headerProps,
  bodyProps,
  ...stackProps
}) => {
  const defaultHeaderProps = {
    accountType: 'Conta corrente',
    accountNumber: '0000000000-0',
    ...headerProps,
  };

  const defaultBodyProps = {
    balance: 'R$ 999.999,99',
    ...bodyProps,
  };

  return (
    <YStack theme={theme} gap="$none" {...stackProps}>
      <CardAccountHeader {...defaultHeaderProps} />
      <CardAccountBody {...defaultBodyProps} />
    </YStack>
  );
};

export { CardAccountHeader } from './components/CardAccountHeader';
export { CardAccountBody } from './components/CardAccountBody';

export default CardAccount;
