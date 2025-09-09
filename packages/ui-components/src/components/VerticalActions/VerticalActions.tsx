import React, { Fragment } from 'react';
import { View, YStack } from 'tamagui';
import { SegmentedButton } from '../SegmentedButton';
import Separator from '../Separator';
import { VerticalActionsProps } from './VerticalActions.model';
import { VerticalActionsItem } from './components/VerticalActionsItem';

/**
 * Componente DSC VerticalActions.
 * 
 * Exibe uma lista vertical de itens interativos,
 * baseada no componente VerticalActionsItem.
 * 
 * Opcionalmente, pode incluir
 * o componente SegmentedButton acima da lista.
 * @example
 * <VerticalActions
 *   actions={[
 *     {
         id: 'My unique key',
         text1: 'Text 1',
         text2: 'Text 2',
         label1: 'Label 1',
         label2: 'Label 2',
         badge: { size: 'medium', color: 'highlight', children: 'Label' },
         onPress: () => console.log('Item pressed'),
         disabled: index === 2 ? true : false,
 *     },
 *   ]}
  *  segmentedButtonProps={{
  *    buttons: [{ label: 'Recentes' }, { label: 'Favoritos' }],
  *  }}
 * />
 */
export const VerticalActions: React.FC<VerticalActionsProps> = ({
  actions,
  segmentedButtonProps,
}) => {
  return (
    <YStack width="100%">
      {segmentedButtonProps && (
        <>
          <SegmentedButton {...segmentedButtonProps} />
          <View mb="$tiny" />
        </>
      )}
      {actions.map((action, index) => (
        <Fragment key={`${action.id}-fragment`}>
          {index > 0 && <Separator direction="horizontal" />}
          <VerticalActionsItem {...action} />
        </Fragment>
      ))}
    </YStack>
  );
};

export default VerticalActions;
