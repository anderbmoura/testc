import React, { useState, useMemo } from 'react';
import { View } from 'react-native';
import { styled, YStack, Image, Theme } from 'tamagui';
import { LabelSmallRegular } from '../Typography';
import { borderWidth } from '../../config/tokens/borderWidth/borderWidth';
import { IconButtonTextProps } from './IconButtonText.model';
import { borderRadius } from '../../config/tokens/borderRadius/borderRadius';
import { iconSize } from '../../config/tokens/iconSize/iconSize';
import { useTransformIcon } from '../../utils';

const StyledIconContainerWrapper = styled(View, {
  name: 'IconButtonTextContainerWrapper',
  borderRadius: borderRadius.big + borderWidth.thick * 2,
  padding: borderWidth.thick,
  borderWidth: borderWidth.thick,
  borderColor: 'transparent',

  variants: {
    focused: {
      true: {
        borderColor: '$neutral12',
      },
      false: {
        borderColor: 'transparent',
      },
    },
  },
});

const StyledTouchableContainer = styled(YStack, {
  name: 'IconButtonTextTouchableContainer',
  gap: '$nano',
  alignItems: 'center',
});

const StyledIconContainer = styled(View, {
  name: 'IconButtonTextContainer',
  width: 76,
  minHeight: 56,
  borderRadius: '$big',
  paddingVertical: '$tiny',
  paddingHorizontal: '$small',
  alignItems: 'center',
  justifyContent: 'center',

  variants: {
    onGrayBg: {
      true: {
        backgroundColor: '$neutralBgAlternative',
        borderWidth: borderWidth.none,

        hoverStyle: {
          backgroundColor: '$neutralHover1',
          borderWidth: borderWidth.none,
        },

        pressStyle: {
          backgroundColor: '$neutralPressed1',
        },

        disabledStyle: {
          backgroundColor: '$neutralBgAlternative',
        },
      },
      false: {
        backgroundColor: '$neutralBg2',
        borderWidth: borderWidth.thin,
        borderColor: '$outlined1',

        hoverStyle: {
          backgroundColor: '$neutralHover1',
          borderColor: '$outlined2',
        },

        pressStyle: {
          backgroundColor: '$neutralPressed1',
          borderColor: '$outlined1',
        },

        disabledStyle: {
          backgroundColor: '$disabled1',
          borderColor: '$disabledOutlined1',
        },
      },
    },
  } as const,

  defaultVariants: {
    onGrayBg: false,
  },
});

const StyledText = styled(LabelSmallRegular, {
  name: 'IconButtonTextLabel',
  color: '$onNeutral1',
  textAlign: 'center',

  disabledStyle: {
    color: '$onDisabled',
  },
});

/**
 * DSC IconButtonText Component
 *
 * Um botão clicável com ícone e texto, onde o ícone fica dentro de uma view
 * com bordas arredondadas e o texto aparece abaixo.
 *
 * ```tsx
 * // Com ícone
 * <IconButtonText
 *   icon={<SomeIcon />}
 *   onPress={() => console.log('Pressed')}
 * >
 *   Label do botão
 * </IconButtonText>
 *
 * // Com imagem
 * <IconButtonText
 *   variant="image"
 *   image={require('./assets/logo.png')}
 *   imageWidth={32}
 *   imageHeight={32}
 *   onPress={() => console.log('Pressed')}
 * >
 *   Logo
 * </IconButtonText>
 * ```
 */
export default function IconButtonText({
  children,
  variant = 'default',
  icon,
  image,
  imageWidth,
  imageHeight,
  disabled = false,
  onGrayBg = false,
  onPress,
  touchableProps,
}: IconButtonTextProps) {
  const [isFocused, setIsFocused] = useState(false);
  const [isPressed, setIsPressed] = useState(false);
  const [isHovered, setIsHovered] = useState(false);
  const transformIcon = useTransformIcon();
  const shouldUseIcon = variant !== 'image';

  const { defaultIcon, hoverIcon, pressedIcon, disabledIcon } = useMemo(() => {
    if (!shouldUseIcon || !icon) {
      return {
        defaultIcon: null,
        hoverIcon: null,
        pressedIcon: null,
        disabledIcon: null,
      };
    }

    return {
      defaultIcon: transformIcon(icon, iconSize.medium, '$color8'),
      hoverIcon: transformIcon(icon, iconSize.medium, '$color9'),
      pressedIcon: transformIcon(icon, iconSize.medium, '$color7'),
      disabledIcon: transformIcon(icon, iconSize.medium, '$onDisabled'),
    };
  }, [icon, transformIcon, shouldUseIcon]);

  // Select current icon based on state (only for icon variants)
  const currentIcon = useMemo(() => {
    if (!shouldUseIcon) return null;
    if (disabled) return disabledIcon;
    if (isPressed) return pressedIcon;
    if (isHovered) return hoverIcon;
    return defaultIcon;
  }, [
    disabled,
    isPressed,
    isHovered,
    defaultIcon,
    hoverIcon,
    pressedIcon,
    disabledIcon,
    shouldUseIcon,
  ]);
  const handleFocus = () => setIsFocused(true);
  const handleBlur = () => setIsFocused(false);
  const handlePressIn = () => setIsPressed(true);
  const handlePressOut = () => setIsPressed(false);
  const handleHoverIn = () => setIsHovered(true);
  const handleHoverOut = () => setIsHovered(false);

  // Render content based on variant
  const renderContent = () => {
    if (variant === 'image' && image) {
      return (
        <Image
          source={image}
          width={imageWidth || 24}
          height={imageHeight || 24}
          objectFit="contain"
        />
      );
    }
    return currentIcon;
  };

  const content = (
    <StyledTouchableContainer
      disabled={disabled}
      onPress={disabled ? undefined : onPress}
      onFocus={handleFocus}
      onBlur={handleBlur}
      onPressIn={handlePressIn}
      onPressOut={handlePressOut}
      onHoverIn={handleHoverIn}
      onHoverOut={handleHoverOut}
      tabIndex={disabled ? -1 : 0}
      {...touchableProps}
    >
      <StyledIconContainerWrapper
        {...(isFocused && !disabled ? { focused: true } : { focused: false })}
      >
        <StyledIconContainer disabled={disabled} onGrayBg={onGrayBg}>
          {renderContent()}
        </StyledIconContainer>
      </StyledIconContainerWrapper>

      <StyledText disabled={disabled}>{children}</StyledText>
    </StyledTouchableContainer>
  );

  // Wrap with Theme for danger variant
  if (variant === 'danger') {
    return <Theme name="danger">{content}</Theme>;
  }

  return content;
}
