import React, { useState, useMemo, useCallback } from 'react';
import { View } from 'react-native';
import { styled, YStack, Theme } from 'tamagui';
import {
  IconButtonProps,
  IconButtonSize,
  IconButtonColor,
} from './IconButton.model';
import { useTransformIcon } from '../../utils';
import { borderWidth } from '../../config/tokens/borderWidth/borderWidth';
import Spinner from '../Spinner';

const sizeMapping = {
  large: { container: 48, icon: 24 },
  standard: { container: 44, icon: 20 },
  small: { container: 32, icon: 16 },
  tiny: { container: 24, icon: 16 },
} as const;

type InteractionState = 'default' | 'hover' | 'pressed' | 'disabled';

const colorConfigurations = {
  plain: {
    default: '$neutralBg1',
    hover: '$neutralBg1',
    pressed: '$neutralBg1',
    disabled: '$onDisabled',
  },
  chromeless: {
    default: '$color8',
    hover: '$color9',
    pressed: '$color7',
    disabled: '$onDisabled',
  },
  outline: {
    default: '$color8',
    hover: '$color9',
    pressed: '$color7',
    disabled: '$onDisabled',
  },
} as const;

const whiteColorConfigurations = {
  plain: {
    default: '$onNeutral1',
    hover: '$onNeutral1',
    pressed: '$onNeutral1',
    disabled: '$onDisabled',
  },
  chromeless: {
    default: '$neutralBg1',
    hover: '$neutralBg1',
    pressed: '$neutralBg1',
    disabled: '$onDisabled',
  },
  outline: {
    default: '$neutralBg1',
    hover: '$neutralBg1',
    pressed: '$neutralBg1',
    disabled: '$onDisabled',
  },
} as const;

const IconButtonContainerWrapper = styled(View, {
  name: 'IconButtonContainerWrapper',
  borderRadius: '$pill',
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

const IconButtonTouchableContainer = styled(YStack, {
  name: 'IconButtonTouchableContainer',
  alignItems: 'center',
  justifyContent: 'center',
});

const baseTypeVariants = {
  plain: {
    backgroundColor: '$color8',
    borderWidth: 0,
    hoverStyle: { backgroundColor: '$color9' },
    pressStyle: { backgroundColor: '$color7' },
    disabledStyle: { backgroundColor: '$disabled1' },
  },
  chromeless: {
    backgroundColor: 'transparent',
    borderWidth: 0,
    hoverStyle: { backgroundColor: '$color2' },
    pressStyle: { backgroundColor: '$color3' },
    disabledStyle: { backgroundColor: 'transparent' },
  },
  outline: {
    backgroundColor: 'transparent',
    borderWidth: borderWidth.thin,
    borderColor: '$color8',
    hoverStyle: {
      backgroundColor: '$color2',
      borderColor: '$color9',
    },
    pressStyle: {
      backgroundColor: '$color3',
      borderColor: '$color7',
    },
    disabledStyle: {
      backgroundColor: 'transparent',
      borderColor: '$disabled1',
    },
  },
} as const;

const whiteTypeVariants = {
  plain: {
    backgroundColor: '$neutralBg1',
    borderWidth: 0,
    hoverStyle: { backgroundColor: '$neutralHover1' },
    pressStyle: { backgroundColor: '$neutralPressed1' },
    disabledStyle: { backgroundColor: '$disabled1' },
  },
  chromeless: {
    backgroundColor: 'transparent',
    borderWidth: 0,
    hoverStyle: { backgroundColor: 'transparent' },
    pressStyle: { backgroundColor: 'transparent' },
    disabledStyle: { backgroundColor: 'transparent' },
  },
  outline: {
    backgroundColor: 'transparent',
    borderWidth: borderWidth.thin,
    borderColor: '$neutralBg1',
    hoverStyle: {
      backgroundColor: 'transparent',
      borderColor: '$neutralBg1',
    },
    pressStyle: {
      backgroundColor: 'transparent',
      borderColor: '$neutralBg1',
    },
    disabledStyle: {
      backgroundColor: 'transparent',
      borderColor: '$disabled1',
    },
  },
} as const;

const sizeVariants = {
  large: {
    width: sizeMapping.large.container,
    height: sizeMapping.large.container,
  },
  standard: {
    width: sizeMapping.standard.container,
    height: sizeMapping.standard.container,
  },
  small: {
    width: sizeMapping.small.container,
    height: sizeMapping.small.container,
  },
  tiny: {
    width: sizeMapping.tiny.container,
    height: sizeMapping.tiny.container,
  },
} as Record<IconButtonSize, any>;

const IconButtonContainer = styled(View, {
  name: 'IconButtonContainer',
  borderRadius: '$pill',
  alignItems: 'center',
  justifyContent: 'center',

  variants: {
    type: baseTypeVariants,
    color: {
      highlight: {},
      danger: {},
      white: {},
    } as const,
    size: sizeVariants,
    disabled: {
      true: {},
      false: {},
    } as const,
  },

  defaultVariants: {
    type: 'plain',
    size: 'large',
    color: 'highlight',
  },
});

const IconButtonWhiteContainer = styled(View, {
  name: 'IconButtonWhiteContainer',
  borderRadius: '$pill',
  alignItems: 'center',
  justifyContent: 'center',

  variants: {
    type: whiteTypeVariants,
    size: sizeVariants,
    disabled: { true: {}, false: {} } as const,
  },

  defaultVariants: {
    type: 'plain',
    size: 'large',
  },
});

const useInteractionState = () => {
  const [isFocused, setIsFocused] = useState(false);
  const [isPressed, setIsPressed] = useState(false);
  const [isHovered, setIsHovered] = useState(false);

  const handlers = useMemo(
    () => ({
      onFocus: () => setIsFocused(true),
      onBlur: () => setIsFocused(false),
      onPressIn: () => setIsPressed(true),
      onPressOut: () => setIsPressed(false),
      onHoverIn: () => setIsHovered(true),
      onHoverOut: () => setIsHovered(false),
    }),
    []
  );

  const currentState: InteractionState = useMemo(() => {
    if (isPressed) return 'pressed';
    if (isHovered) return 'hover';
    return 'default';
  }, [isPressed, isHovered]);

  return { isFocused, currentState, handlers };
};

const getIconColor = (
  type: string,
  state: InteractionState,
  color: IconButtonColor
): string => {
  if (state === 'disabled') return '$onDisabled';

  const configurations =
    color === 'white' ? whiteColorConfigurations : colorConfigurations;
  return (
    configurations[type as keyof typeof configurations]?.[state] ||
    '$neutralBg1'
  );
};

const useIconStates = (
  icon: any,
  type: string,
  color: IconButtonColor,
  size: IconButtonSize
) => {
  const transformIcon = useTransformIcon();
  const iconSize = sizeMapping[size].icon;

  return useMemo(() => {
    if (!icon) {
      return {
        defaultIcon: null,
        hoverIcon: null,
        pressedIcon: null,
        disabledIcon: null,
      };
    }

    return {
      defaultIcon: transformIcon(
        icon,
        iconSize,
        getIconColor(type, 'default', color)
      ),
      hoverIcon: transformIcon(
        icon,
        iconSize,
        getIconColor(type, 'hover', color)
      ),
      pressedIcon: transformIcon(
        icon,
        iconSize,
        getIconColor(type, 'pressed', color)
      ),
      disabledIcon: transformIcon(
        icon,
        iconSize,
        getIconColor(type, 'disabled', color)
      ),
    };
  }, [icon, transformIcon, type, iconSize, color]);
};

const useCurrentIcon = (
  iconStates: ReturnType<typeof useIconStates>,
  currentState: InteractionState,
  loading: boolean,
  disabled: boolean
) => {
  return useMemo(() => {
    if (loading) return <Spinner variant="neutral" size="small" />;
    if (disabled) return iconStates.disabledIcon;

    switch (currentState) {
      case 'pressed':
        return iconStates.pressedIcon;
      case 'hover':
        return iconStates.hoverIcon;
      default:
        return iconStates.defaultIcon;
    }
  }, [loading, disabled, currentState, iconStates]);
};

/**
 * Componente DSC IconButton
 *
 * @param type - Tipo visual do botão ('plain' | 'chromeless' | 'outline')
 * ```tsx
 * <IconButton type="plain" icon={Heart} onPress={() => console.log('Plain')} />
 * <IconButton type="chromeless" icon={Settings} onPress={() => console.log('Chromeless')} />
 * <IconButton type="outline" icon={Download} onPress={() => console.log('Outline')} />
 * ```
 *
 * @param size - Tamanho do botão ('large' | 'standard' | 'small' | 'tiny')
 * ```tsx
 * <IconButton size="large" icon={Heart} />
 * <IconButton size="standard" icon={Heart} />
 * <IconButton size="small" icon={Heart} />
 * <IconButton size="tiny" icon={Heart} />
 * ```
 *
 * @param color - Cor do botão ('highlight' | 'danger' | 'white')
 * ```tsx
 * <IconButton color="highlight" icon={Heart} />  // Tema highlight (padrão)
 * <IconButton color="danger" icon={Trash} />     // Tema danger
 * <IconButton color="white" icon={Settings} />   // Cores para fundo neutralBg2 e neutralBg3
 * ```
 *
 * @param icon - Ícone exibido no botão
 * ```tsx
 * <IconButton icon={Heart} onPress={() => console.log('Pressed')} />
 * <IconButton icon={Settings} disabled />
 * ```
 *
 * @param disabled - Define se o botão está desabilitado
 * ```tsx
 * <IconButton icon={Download} disabled />
 * <IconButton icon={Upload} disabled={false} />
 * ```
 *
 * @param loading - Define se o botão está em estado de carregamento
 * ```tsx
 * <IconButton icon={Upload} loading />
 * <IconButton icon={Download} loading={false} />
 * ```
 *
 * @param onPress - Callback executado quando o botão é pressionado
 * ```tsx
 * <IconButton icon={Bell} onPress={() => alert('Notification clicked')} />
 * ```
 *
 * @param accessibilityLabel - Label para leitores de tela
 * ```tsx
 * <IconButton icon={Settings} accessibilityLabel="Configurações" />
 * ```
 *
 * @example
 * ```tsx
 * import { IconButton } from '@superapp-caixa/dsc-library';
 * import { Heart, Settings, Download } from 'iconoir-react-native';
 *
 * // Botão plain (padrão) large
 * <IconButton icon={Heart} onPress={() => console.log('Liked')} />
 *
 * // Botão chromeless pequeno
 * <IconButton type="chromeless" size="small" icon={Settings} onPress={() => console.log('Settings')} />
 *
 * // Botão outline padrão
 * <IconButton type="outline" icon={Download} onPress={() => console.log('Download')} />
 *
 * // Botão tiny desabilitado
 * <IconButton size="tiny" icon={Settings} disabled />
 *
 * // Botão em carregamento
 * <IconButton icon={Upload} loading />
 *
 * // Botão com cor danger
 * <IconButton color="danger" icon={Trash} onPress={() => deleteItem()} />
 *
 * // Botão com cor white para fundo escuro
 * <IconButton color="white" icon={Settings} onPress={() => openSettings()} />
 *
 * // Com accessibility
 * <IconButton
 *   icon={Download}
 *   size="standard"
 *   onPress={() => downloadFile()}
 *   accessibilityLabel="Baixar arquivo"
 * />
 * ```
 */
export const IconButton: React.FC<IconButtonProps> = ({
  type = 'plain',
  size = 'large',
  color = 'highlight',
  icon,
  disabled = false,
  loading = false,
  onPress,
  accessibilityLabel,
  touchableProps,
}) => {
  const { isFocused, currentState, handlers } = useInteractionState();
  const iconStates = useIconStates(icon, type, color, size);
  const currentIcon = useCurrentIcon(
    iconStates,
    currentState,
    loading,
    disabled
  );

  const isInteractionDisabled = disabled || loading;
  const Container =
    color === 'white' ? IconButtonWhiteContainer : IconButtonContainer;

  const handlePress = useCallback(() => {
    if (!isInteractionDisabled && onPress) {
      onPress();
    }
  }, [isInteractionDisabled, onPress]);

  const renderIconButton = () => (
    <IconButtonTouchableContainer
      disabled={isInteractionDisabled}
      onPress={handlePress}
      onFocus={handlers.onFocus}
      onBlur={handlers.onBlur}
      onPressIn={handlers.onPressIn}
      onPressOut={handlers.onPressOut}
      onHoverIn={handlers.onHoverIn}
      onHoverOut={handlers.onHoverOut}
      tabIndex={isInteractionDisabled ? -1 : 0}
      accessibilityLabel={accessibilityLabel}
      accessibilityRole="button"
      {...touchableProps}
    >
      <IconButtonContainerWrapper
        {...(isFocused && !isInteractionDisabled
          ? { focused: true }
          : { focused: false })}
      >
        <Container
          type={type}
          size={size}
          disabled={isInteractionDisabled}
          {...(color !== 'white' && { color })}
        >
          {currentIcon}
        </Container>
      </IconButtonContainerWrapper>
    </IconButtonTouchableContainer>
  );

  return color === 'white' ? (
    renderIconButton()
  ) : (
    <Theme name={color}>{renderIconButton()}</Theme>
  );
};
