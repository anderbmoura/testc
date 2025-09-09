import React, { Fragment } from 'react';
import { XStack, YStack } from 'tamagui';
import Button from '../Button';
import Card from '../Card';
import { BodyLargeSemibold, LabelStandard } from '../Typography';
import { VerticalActionsSectionProps } from './VerticalActionsSection.model';
import { VerticalActionsItem } from './components/VerticalActionsItem/VerticalActionsItem';
import Separator from '../Separator';

/**
 * Componente DSC VerticalActionsSection.
 *
 * Exibe uma seção com um título, e uma lista de itens interativos dentro de um
 * Card.
 *
 * Cada item da lista é representado pelo componente VerticalActionsItem.
 *
 * Opcionalmente, um TextButton pode ser exibido ao lado do título da seção.
 * @example
 * <VerticalActionsSection
 *   title="Section Title"
 *   textButton={{
 *     label: 'Action',
 *     onPress: () => console.log('Text button pressed')
 *   }}
 *   actions={[
 *     {
 *       id: 'My unique key',
 *       text1: 'Text 1',
 *       text2: 'Text 2',
 *       label1: 'Label 1',
 *       label2: 'Label 2',
 *       badge: { size: 'medium', color: 'highlight', children: 'Label' },
 *       onPress: () => console.log('Item pressed'),
 *       disabled: false,
 *     },
 *   ]}
 * />
 */
export const VerticalActionsSection: React.FC<VerticalActionsSectionProps> = ({
  title,
  textButton,
  actions,
}) => {
  return (
    <YStack width="100%">
      <XStack
        marginBottom="$nano"
        justifyContent="space-between"
        alignItems="center"
      >
        <BodyLargeSemibold color="$onNeutral1" marginEnd="$nano">
          {title}
        </BodyLargeSemibold>
        {textButton && (
          <Button
            type="chromeless"
            size="standard"
            onPress={textButton?.onPress}
          >
            <LabelStandard color="$highlight8">
              {textButton?.label}
            </LabelStandard>
          </Button>
        )}
      </XStack>
      <Card type="plain">
        {actions.map((action, index) => (
          <Fragment key={`${action.id}-fragment`}>
            {index > 0 && <Separator direction="horizontal" />}
            <VerticalActionsItem {...action} />
          </Fragment>
        ))}
      </Card>
    </YStack>
  );
};

export default VerticalActionsSection;
