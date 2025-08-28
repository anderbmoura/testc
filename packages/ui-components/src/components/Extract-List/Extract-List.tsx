import React, { useCallback, useState } from 'react';
import { SectionList } from 'react-native';
import { styled, View, Text, Spinner } from 'tamagui';
import { ExtractListProps } from './Extract-List.model';
import { LabelStandard, LabelSmall } from '../Typography/index';
import { SendDollars, ReceiveDollars } from 'iconoir-react-native';

const SectionListItem = styled(View, {
  name: 'SectionListItem',
  display: 'flex',
  flexDirection: 'row',
  justifyContent: 'space-between',
  paddingLeft: '$space.quark',
  paddingRight: '$space.none',
  paddingVertical: '$space.quark',
  marginTop: '$space.tiny',
});

const SectionContent = styled(View, {
  name: 'SectionContent',
  display: 'flex',
  flexDirection: 'row',
  alignItems: 'center',
});

const SectionColumnText = styled(View, {
  name: 'SectionColumnText',
  display: 'flex',
  flexDirection: 'column',
  gap: '$space.quark',
});

const SectionHeader = styled(Text, {
  ...LabelSmall,
  name: 'SectionHeader',
  borderBottomWidth: 1,
  borderBottomColor: '#22292e15', // var(--color-neutral-onBackground1) 8% opacity
  paddingVertical: '$space.nano',
  paddingHorizontal: '$space.tiny',
  marginTop: '$space.small',
});

// Icon Props
type ItemIconProps = {
  value: string;
  color?: string;
  size?: number;
};

// Icon mapping
const iconMap = {
  send: SendDollars,
  receive: ReceiveDollars,
};

// Icon Component
const ItemIcon: React.FC<ItemIconProps> = ({
  value,
  color = value.includes('-') ? '#64747A' : '#127527',
  size = 24,
}) => {
  const IconComponent = iconMap[value.includes('-') ? 'send' : 'receive'];
  return (
    <View padding={'$space.micro'}>
      <IconComponent color={color} width={size} height={size} />
    </View>
  );
};

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

  return (
    <SectionList
      sections={data}
      testID={testID}
      style={{ backgroundColor: '$neutralBg1' }}
      renderItem={({ item }) => (
        <SectionListItem>
          <SectionContent>
            <ItemIcon value={String(item.value)} />
            <SectionColumnText>
              <LabelStandard fontWeight={'$400'}>{item.service}</LabelStandard>
              <LabelSmall color={'#525F66'} fontWeight={'$400'}>
                {item.detail}
              </LabelSmall>
            </SectionColumnText>
          </SectionContent>
          <LabelStandard
            display={'flex'}
            alignItems={'center'}
            alignSelf={'center'}
          >
            {' '}
            {item.value}
          </LabelStandard>
        </SectionListItem>
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
