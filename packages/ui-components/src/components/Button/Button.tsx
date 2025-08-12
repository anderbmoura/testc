import React from 'react';
import { Button as TamaguiButton, styled, Spinner } from 'tamagui';
import { typography } from '../../config/fonts/typography';
import { spaceTokens } from '../../config/tokens/space/space';
import { transformIconSize } from '../../utils';
import { ButtonProps } from './';

const StyledButton = styled(TamaguiButton, {
  name: 'DscButton',
  borderRadius: '$pill',
  space: 0,
  width: 'auto',

  variants: {
    size: {
      large: {
        fontSize: typography.bodyLarge.fontSize,
        fontWeight: typography.bodyLarge.fontWeight,
        lineHeight: typography.bodyLarge.lineHeight,
        paddingVertical: '$none',
        paddingHorizontal: '$small',
        minHeight: 56,
        gap: spaceTokens.tiny / 2,
      },

      standard: {
        fontSize: typography.labelStandard.fontSize,
        fontWeight: typography.labelStandard.fontWeight,
        lineHeight: typography.labelStandard.lineHeight,
        paddingVertical: '$none',
        paddingHorizontal: '$smaller',
        minHeight: 48,
        gap: spaceTokens.micro / 2,
      },

      small: {
        fontSize: typography.labelSmall.fontSize,
        fontWeight: typography.labelSmall.fontWeight,
        lineHeight: typography.labelSmall.lineHeight,
        paddingVertical: '$none',
        paddingHorizontal: '$tiny',
        minHeight: 40,
        gap: spaceTokens.micro / 2,
      },
    },

    type: {
      plain: {
        backgroundColor: '$color9',
        color: '$color1',
        borderWidth: 0,

        hoverStyle: {
          backgroundColor: '$color8',
        },

        pressStyle: {
          backgroundColor: '$color10',
        },

        focusStyle: {
          outlineColor: '$color12',
          outlineWidth: 2,
          outlineStyle: 'solid',
        },

        disabledStyle: {
          backgroundColor: '$neutral3',
          color: '$neutral6',
        },
      },

      outline: {
        backgroundColor: 'transparent',
        color: '$color9',
        borderWidth: 1,
        borderColor: '$color9',

        hoverStyle: {
          borderColor: '$color8',
          color: '$color8',
        },

        pressStyle: {
          backgroundColor: '$color2',
          borderColor: '$color9',
          color: '$color9',
          borderWidth: 2,
        },

        focusStyle: {
          backgroundColor: '$color2',
          borderColor: '$color12',
          color: '$color9',
          borderWidth: 2,
        },

        disabledStyle: {
          backgroundColor: 'transparent',
          borderColor: '$neutral5',
          color: '$neutral5',
        },
      },

      chromeless: {
        backgroundColor: 'transparent',
        color: '$color9',
        borderWidth: 0,

        hoverStyle: {
          color: '$color8',
        },

        pressStyle: {
          backgroundColor: '$color2',
          color: '$color9',
        },

        focusStyle: {
          backgroundColor: 'transparent',
          borderColor: '$color12',
          color: '$color9',
          borderWidth: 2,
        },

        disabledStyle: {
          backgroundColor: 'transparent',
          color: '$neutral5',
        },
      },
    },

    loading: {
      plain: {
        disabledStyle: {
          backgroundColor: '$color2',
          borderWidth: 0,
        },
      },
      outline: {
        disabledStyle: {
          backgroundColor: 'transparent',
          borderWidth: 0,
        },
      },
      chromeless: {
        disabledStyle: {
          backgroundColor: 'transparent',
          borderWidth: 1,
          borderColor: '$color5',
        },
      },
    },
  } as const,
});

export const Button: React.FC<ButtonProps> = ({
  theme = 'highlight',
  type = 'plain',
  size = 'standard',
  children,
  icon,
  iconAfter,
  disabled,
  loading = false,
  onPress,
}) => {
  const getIconSize = () => {
    switch (size) {
      case 'large':
        return 24;
      case 'standard':
        return 20;
      case 'small':
        return 16;
      default:
        return 20;
    }
  };

  const getIconColor = () => {
    if (disabled) {
      switch (type) {
        case 'plain':
          return '$neutral6';
        case 'outline':
        case 'chromeless':
          return '$neutral5';
        default:
          return '$neutral6';
      }
    }

    return undefined;
  };

  const iconSize = getIconSize();
  const iconColor = getIconColor();
  const transformedIcon = loading
    ? undefined
    : transformIconSize(icon, iconSize, iconColor);
  const transformedIconAfter = loading
    ? undefined
    : transformIconSize(iconAfter, iconSize, iconColor);
  const isDisabled = disabled || loading;

  return (
    <StyledButton
      icon={transformedIcon}
      iconAfter={transformedIconAfter}
      theme={theme}
      type={type}
      size={size}
      loading={loading ? type : undefined}
      disabled={isDisabled}
      onPress={onPress}
    >
      {loading ? <Spinner size="small" color="$color9" /> : children}
    </StyledButton>
  );
};

export default Button;
