import React from 'react';
import { Image } from 'react-native';
import { styled, Button, View } from 'tamagui';
import { LabelSmall } from '../../../data-display/Typography';
import { iconSize } from '../../../../config/tokens/iconSize/iconSize';
import { useTransformIcon } from '../../../../utils';
import { SegmentedButtonItemProps } from '../SegmentedButton.model';

const StyledButton = styled(Button, {
  name: 'SegmentedButtonItem',
  flex: 1,
  height: 32,
  borderRadius: '$pill',
  paddingHorizontal: '$quark',
  paddingVertical: '$quark',
  justifyContent: 'center',

  variants: {
    variant: {
      neutral: {
        hoverStyle: {
          backgroundColor: '$neutralHover1',
        },
        pressStyle: {
          backgroundColor: '$neutralPressed1',
        },
        focusStyle: {
          outlineColor: '$color12',
          outlineWidth: 2,
          outlineStyle: 'solid',
        },
        disabledStyle: {
          backgroundColor: '$neutralBg3',
        },
      },
      highlight: {
        hoverStyle: {
          backgroundColor: '$highlightHover1',
        },
        pressStyle: {
          backgroundColor: '$highlightPressed1',
        },
        focusStyle: {
          outlineColor: '$color12',
          outlineWidth: 2,
          outlineStyle: 'solid',
        },
        disabledStyle: {
          backgroundColor: '$neutralBg3',
        },
      },
    },
  },
} as const);

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
    <StyledButton
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
    </StyledButton>
  );
};
