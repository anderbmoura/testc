import React from 'react';
import { Image } from 'react-native';
import { View } from 'tamagui';
import { LabelSmall } from '../../../data-display/Typography';
import { iconSize } from '../../../../config/tokens/iconSize/iconSize';
import { useTransformIcon } from '../../../../utils';
import { SegmentedButtonItemProps } from '../SegmentedButton.model';
import { StyledSegmentedButtonItem } from './SegmentedButtonItem.styles';

export const SegmentedButtonItem = ({
  index,
  btn,
  isSelected,
  isDisabled,
  onPress,
  buttonProps,
  buttonWidth,
}: SegmentedButtonItemProps) => {
  const transformIcon = useTransformIcon();

  const variant = btn.variant ?? 'neutral';
  const state = btn.state ?? 'default';

  const iconColor =
    state === 'disabled'
      ? '$onDisabled'
      : isSelected
        ? variant === 'highlight'
          ? '$onHighlight'
          : '$onNeutral1'
        : '$onNeutral2';

  const textColor =
    state === 'disabled'
      ? '$onDisabled'
      : isSelected
        ? variant === 'highlight'
          ? '$onHighlight'
          : '$onNeutral1'
        : '$onNeutral2';

  return (
    <StyledSegmentedButtonItem
      key={index}
      width={buttonWidth}
      disabled={isDisabled}
      {...buttonProps}
      onPress={onPress}
      variant={variant}
      backgroundColor={
        isSelected
          ? variant === 'highlight'
            ? '$highlight8'
            : '$neutralBgAlternative'
          : 'transparent'
      }
    >
      <View
        flexDirection="row"
        alignItems="center"
        justifyContent="center"
        gap="$nano"
      >
        {btn.image ? (
          <Image source={btn.image} width={20} height={20} />
        ) : (
          btn.icon && transformIcon(btn.icon, iconSize.medium, iconColor)
        )}
        {btn.label && <LabelSmall color={textColor}>{btn.label}</LabelSmall>}
      </View>
    </StyledSegmentedButtonItem>
  );
};
