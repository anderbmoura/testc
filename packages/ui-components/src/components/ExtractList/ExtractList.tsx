import React, { useCallback, useMemo, useState } from 'react';
import { SectionList } from 'react-native';
import { styled, View, Text, Spinner } from 'tamagui';
import { ExtractListProps, ExtractListVariant } from './ExtractList.model';
import { LabelSmall } from '../Typography/index';
import { ExtractItem } from './ExtractItem/ExtractItem';
import {
  Barcode,
  CreditCard,
  GraphUp,
  PiggyBank,
  ReceiveDollars,
  SendDollars,
  UndoCircle,
  XmarkCircle,
} from 'iconoir-react-native';

/**
 * ExtractList Component
 *
 * Componente para exibir uma lista de extratos financeiros agrupados por data.
 * Permite atualização dos dados via função assíncrona e customização para testes automatizados.
 * Segue o padrão visual do DSC Design System.
 *
 * @param data - Dados que serão exibidos na lista de extrato.
 * @param testID - Identificador utilizado para testes automatizados.
 * @param refreshAction - Função assincrona chamada ao solicitar a atualização dos dados.
 * @returns JSX.Element
 *
 * @example
 * ```tsx
 * // Lista básica de extratos
 * <ExtractList
 *   data={[
 *     {
 *       date: 'Hoje',
 *       data: [
 *         { service: 'Pix Enviado', detail: 'Evelyn Almeida Souza', value: 'R$ -1000,00' },
 *         { service: 'Recebimento Pix', detail: 'Ryan Melo Cardoso', value: 'R$ 550,00' },
 *       ],
 *     },
 *   ]}
 *   testID="extract-list-basic"
 * />
 *
 * // Lista com ação de atualização
 * <ExtractList
 *   data={mockData}
 *   testID="extract-list-refresh"
 *   refreshAction={fetchData}
 * * />
 * ```
 */

const SectionHeader = styled(Text, {
  ...LabelSmall,
  name: 'SectionHeader',
  color: '$color11',
  borderBottomWidth: '$borderWidth.thin',
  borderBottomColor: '#22292e15', // var(--color-neutral-onBackground1) 8% opacity
  paddingVertical: '$space.nano',
  paddingHorizontal: '$space.tiny',
  marginTop: '$space.small',
});

// Icon mapping
const iconMap = {
  send: SendDollars,
  receive: ReceiveDollars,
  barcode: Barcode,
  saveMoney: PiggyBank,
  investments: GraphUp,
  creditCard: CreditCard,
  cancellation: XmarkCircle,
  refund: UndoCircle,
};

export const ExtractList: React.FC<ExtractListProps> = ({
  data,
  refreshAction,
  testID,
}) => {
  const [isRefreshing, setIsRefreshing] = useState(false);
  const handleRefresh = useCallback(async () => {
    setIsRefreshing(true);
    if (refreshAction) {
      await refreshAction();
    }
    setIsRefreshing(false);
  }, []);

  const variantSelector = useMemo(() => {
    return (value: string): ExtractListVariant => {
      const service = value.toLowerCase();
      if (service.includes('recebimento') || service.includes('estorno')) {
        return 'success';
      }
      if (service.includes('cancel')) {
        return 'danger';
      }
      return 'neutral';
    };
  }, []);

  return (
    <SectionList
      sections={data}
      testID={testID}
      style={{ backgroundColor: '$color1' }}
      renderItem={({ item }) => (
        <ExtractItem
          variant={variantSelector(item.service + item.supportTextValue)}
          icon={iconMap[item.type as keyof typeof iconMap]}
          item={item}
        ></ExtractItem>
      )}
      renderSectionHeader={({ section: { date } }) => (
        <SectionHeader>{date}</SectionHeader>
      )}
      ListFooterComponent={
        isRefreshing ? (
          <Spinner color={'$highlight8'} padding={'$space.small'} />
        ) : (
          <View />
        )
      }
      onEndReached={handleRefresh}
      onEndReachedThreshold={0}
      keyExtractor={(item, index) => `key${item.service + index}`}
    />
  );
};
