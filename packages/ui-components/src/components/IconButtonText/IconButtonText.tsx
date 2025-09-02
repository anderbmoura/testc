import React, { useState, useMemo } from 'react';
import { View } from 'react-native';
import { styled, YStack, Image, Theme } from 'tamagui';
import { LabelSmallRegular } from '../Typography';
import { borderWidth } from '../../config/tokens/borderWidth/borderWidth';
import { IconButtonTextProps } from './IconButtonText.model';
import { borderRadius } from '../../config/tokens/borderRadius/borderRadius';
import { iconSize } from '../../config/tokens/iconSize/iconSize';
import { useTransformIcon } from '../../utils';
import Spinner from '../Spinner';
import BadgeText from '../BadgeText';

const StyledIconContainerWrapper = styled(View, {
  name: 'IconButtonTextContainerWrapper',
  borderRadius: borderRadius.big + borderWidth.thick * 2,
  padding: borderWidth.thick,
  borderWidth: borderWidth.thick,
  borderColor: 'transparent',
  pointerEvents: 'none',

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

const StyledBadgeContainer = styled(View, {
  name: 'IconButtonTextBadgeContainer',
  position: 'absolute',
  bottom: -8,
  zIndex: 1,
  pointerEvents: 'none',
});

const StyledIconContainer = styled(View, {
  name: 'IconButtonTextContainer',
  width: 76,
  minHeight: 58,
  borderRadius: '$big',
  paddingVertical: '$tiny',
  paddingHorizontal: '$small',
  alignItems: 'center',
  justifyContent: 'center',
  pointerEvents: 'none',

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
  pointerEvents: 'none',

  disabledStyle: {
    color: '$onDisabled',
  },
});

/**
 * Componente DSC IconButtonText
 *
 * @param variant - Variante visual do botão ('default' | 'danger' | 'image')
 * ```tsx
 * <IconButtonText variant="default" icon={<Home />}>Home</IconButtonText>
 * <IconButtonText variant="danger" icon={<Trash />}>Excluir</IconButtonText>
 * <IconButtonText variant="image" image={{ uri: 'logo.png' }}>Logo</IconButtonText>
 * ```
 *
 * @param icon - Ícone exibido no botão (usado quando variant é 'default' ou 'danger')
 * ```tsx
 * <IconButtonText icon={<Settings />}>Configurações</IconButtonText>
 * <IconButtonText variant="danger" icon={<Delete />}>Remover</IconButtonText>
 * ```
 *
 * @param image - Fonte da imagem exibida no botão (usado quando variant é 'image')
 * ```tsx
 * <IconButtonText variant="image" image={require('./logo.png')}>Logo</IconButtonText>
 * <IconButtonText variant="image" image={{ uri: 'https://example.com/image.png' }}>Imagem</IconButtonText>
 * ```
 *
 * @param imageWidth - Largura da imagem em pixels (usado quando variant é 'image')
 * ```tsx
 * <IconButtonText variant="image" image={logo} imageWidth={32}>Logo</IconButtonText>
 * ```
 *
 * @param imageHeight - Altura da imagem em pixels (usado quando variant é 'image')
 * ```tsx
 * <IconButtonText variant="image" image={logo} imageHeight={32}>Logo</IconButtonText>
 * ```
 *
 * @param disabled - Desabilita a interação e aplica estilo desabilitado
 * ```tsx
 * <IconButtonText icon={<Home />} disabled>Home</IconButtonText>
 * ```
 *
 * @param loading - Exibe um spinner de carregamento e aplica estilo desabilitado
 * ```tsx
 * <IconButtonText icon={<Save />} loading>Salvando...</IconButtonText>
 * ```
 *
 * @param onGrayBg - Aplica estilo alternativo para fundos cinzas
 * ```tsx
 * <IconButtonText icon={<Home />} onGrayBg>Home</IconButtonText>
 * ```
 *
 * @param onPress - Callback executado quando o botão é pressionado
 * ```tsx
 * <IconButtonText icon={<Home />} onPress={() => navigate('Home')}>Home</IconButtonText>
 * ```
 *
 * @param badgeText - Texto do badge exibido flutuando sobre o container
 * ```tsx
 * <IconButtonText icon={<Home />} badgeText="3">Home</IconButtonText>
 * ```
 *
 * @param badgeColor - Cor do badge ('highlight' | 'danger')
 * ```tsx
 * <IconButtonText icon={<Home />} badgeText="3" badgeColor="danger">Home</IconButtonText>
 * ```
 *
 * @param children - Texto exibido abaixo do ícone/imagem
 * ```tsx
 * <IconButtonText icon={<Settings />}>Configurações</IconButtonText>
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
  loading = false,
  onGrayBg = false,
  onPress,
  badgeText,
  badgeColor = 'highlight',
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

  const renderContent = () => {
    if (loading) {
      return <Spinner variant="neutral" size="small" />;
    }

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

  const isInteractionDisabled = disabled || loading;

  const content = (
    <StyledTouchableContainer
      disabled={isInteractionDisabled}
      onPress={isInteractionDisabled ? undefined : onPress}
      onFocus={handleFocus}
      onBlur={handleBlur}
      onPressIn={handlePressIn}
      onPressOut={handlePressOut}
      onHoverIn={handleHoverIn}
      onHoverOut={handleHoverOut}
      tabIndex={isInteractionDisabled ? -1 : 0}
      {...touchableProps}
    >
      <StyledIconContainerWrapper
        {...(isFocused && !isInteractionDisabled
          ? { focused: true }
          : { focused: false })}
      >
        <StyledIconContainer
          disabled={isInteractionDisabled}
          onGrayBg={onGrayBg}
        >
          {renderContent()}

          {badgeText && (
            <StyledBadgeContainer>
              <BadgeText size="small" color={badgeColor}>
                {badgeText}
              </BadgeText>
            </StyledBadgeContainer>
          )}
        </StyledIconContainer>
      </StyledIconContainerWrapper>

      <StyledText disabled={isInteractionDisabled}>{children}</StyledText>
    </StyledTouchableContainer>
  );

  // Wrap with Theme for danger variant
  if (variant === 'danger') {
    return <Theme name="danger">{content}</Theme>;
  }

  return content;
}
