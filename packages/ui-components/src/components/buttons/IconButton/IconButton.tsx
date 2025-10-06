import React, { memo, useCallback } from 'react';
import { Theme } from 'tamagui';
import { IconButtonContainer } from './components/IconButtonContainer';
import { IconButtonIcon } from './components/IconButtonIcon';
import {
  IconButtonWrapper,
  IconButtonTouchableContainer,
} from './IconButton.styles';
import { useIconButtonInteractionState } from './hooks/useIconButtonInteractionState';
import type { IconButtonProps } from './IconButton.model';

/**
 * Componente DSC IconButton
 *
 * Botão circular que exibe apenas um ícone, ideal para ações secundárias e barras de ferramentas.
 *
 * @example
 * ```tsx
 * import { IconButton } from '@superapp-caixa/dsc-library';
 * import { Heart, Settings, Download, Trash } from 'iconoir-react-native';
 *
 * // Botão básico (plain, large)
 * <IconButton
 *   icon={<Heart />}
 *   onPress={() => console.log('Liked')}
 *   accessibilityLabel="Curtir"
 * />
 *
 * // Botão chromeless small
 * <IconButton
 *   type="chromeless"
 *   size="small"
 *   icon={<Settings />}
 *   onPress={() => console.log('Settings')}
 *   accessibilityLabel="Configurações"
 * />
 *
 * // Botão outline standard
 * <IconButton
 *   type="outline"
 *   size="standard"
 *   icon={<Download />}
 *   onPress={() => downloadFile()}
 *   accessibilityLabel="Baixar arquivo"
 * />
 *
 * // Botão tiny desabilitado
 * <IconButton
 *   size="tiny"
 *   icon={<Settings />}
 *   disabled
 * />
 *
 * // Botão em carregamento
 * <IconButton
 *   icon={<Upload />}
 *   loading
 * />
 *
 * // Botão com cor danger
 * <IconButton
 *   color="danger"
 *   icon={<Trash />}
 *   onPress={() => deleteItem()}
 * />
 *
 * // Botão com cor white para fundo escuro
 * <IconButton
 *   color="white"
 *   icon={<Settings />}
 *   onPress={() => openSettings()}
 * />
 * ```
 */
export const IconButton: React.FC<IconButtonProps> = memo(
  ({
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
    const {
      isFocused,
      isPressed,
      isHovered,
      handleFocus,
      handleBlur,
      handlePressIn,
      handlePressOut,
      handleHoverIn,
      handleHoverOut,
      getInteractionState,
    } = useIconButtonInteractionState();

    const isInteractionDisabled = disabled || loading;

    const handlePress = useCallback(() => {
      if (isInteractionDisabled) return;
      onPress?.();
    }, [isInteractionDisabled, onPress]);

    const renderIconButton = () => (
      <IconButtonTouchableContainer
        disabled={isInteractionDisabled}
        onPress={handlePress}
        onFocus={handleFocus}
        onBlur={handleBlur}
        onPressIn={handlePressIn}
        onPressOut={handlePressOut}
        onHoverIn={handleHoverIn}
        onHoverOut={handleHoverOut}
        tabIndex={isInteractionDisabled ? -1 : 0}
        accessibilityLabel={accessibilityLabel}
        accessibilityRole="button"
        {...touchableProps}
      >
        <IconButtonWrapper focused={isFocused && !isInteractionDisabled}>
          <IconButtonContainer
            type={type}
            size={size}
            color={color}
            disabled={disabled}
            isPressed={isPressed}
            isHovered={isHovered}
          >
            <IconButtonIcon
              icon={icon}
              type={type}
              size={size}
              color={color}
              interactionState={getInteractionState()}
              disabled={disabled}
              loading={loading}
            />
          </IconButtonContainer>
        </IconButtonWrapper>
      </IconButtonTouchableContainer>
    );

    return color === 'white' ? (
      renderIconButton()
    ) : (
      <Theme name={color}>{renderIconButton()}</Theme>
    );
  }
);
