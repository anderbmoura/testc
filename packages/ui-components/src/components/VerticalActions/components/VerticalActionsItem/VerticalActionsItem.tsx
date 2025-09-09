import { NavArrowRight } from 'iconoir-react-native';
import React from 'react';
import { getTokens, useTheme, View, XStack, YStack } from 'tamagui';
import BadgeText from '../../../BadgeText';
import { BodySmall, BodyStandard } from '../../../Typography';
import { VerticalActionsItemProps } from './VerticalActionsItem.model';
import {
  IconSlot,
  VerticalActionsItemStack,
} from './VerticalActionsItem.styles';

/**
 * Componente DSC VerticalActionsItem.
 *
 * Usado como parte dos componentes VerticalActions e VerticalActionsSection.
 * @example
 * <VerticalActionsItem
 *   id="my-unique-key"
 *   text1="Main Text"
 *   text2="Secondary Text"
 *   label1="Label Above"
 *   label2="Label Below"
 *   badge={{ size: 'medium', color: 'highlight', children: 'Badge' }}
 *   leftSlot={<Home width={24} height={24} />}
 *   rightSlot={<NavArrowRight width={24} height={24} />}
 *   onPress={() => console.log('Item pressed')}
 *   disabled={false}
 * />
 */

export const VerticalActionsItem: React.FC<VerticalActionsItemProps> = ({
  id,
  text1,
  text2,
  label1,
  label2,
  badge,
  leftSlot,
  rightSlot,
  onPress,
  disabled,
}) => {
  const theme = useTheme();
  const iconColor = theme.highlight8.get();
  const iconSize = getTokens().iconSize.$medium.val;

  const componentRightSlot = rightSlot ? (
    rightSlot
  ) : rightSlot === null ? undefined : (
    <NavArrowRight width={iconSize} height={iconSize} color={iconColor} />
  );

  return (
    <VerticalActionsItemStack
      key={id}
      disabled={disabled === true ? true : false}
      aria-disabled={disabled === true ? true : false}
      onPress={onPress}
    >
      {leftSlot && <IconSlot mr="$tiny">{leftSlot}</IconSlot>}
      <YStack width="100%" flexShrink={1}>
        {label1 && <BodySmall color="$onNeutral2">{label1}</BodySmall>}
        <XStack justifyContent="space-between" alignItems="center">
          <BodyStandard color="$onNeutral1">{text1}</BodyStandard>
          <View width="$space.nano" />
          {text2 && (
            <BodyStandard textAlign="right" color="$neutral10">
              {text2}
            </BodyStandard>
          )}
        </XStack>
        {label2 && <BodySmall color="$onNeutral2">{label2}</BodySmall>}
      </YStack>
      {badge && (
        <View ml="$tiny">
          <BadgeText color={badge.color} size={badge.size}>
            {badge.children}
          </BadgeText>
        </View>
      )}
      {componentRightSlot && (
        <IconSlot ml="$tiny">{componentRightSlot}</IconSlot>
      )}
    </VerticalActionsItemStack>
  );
};
