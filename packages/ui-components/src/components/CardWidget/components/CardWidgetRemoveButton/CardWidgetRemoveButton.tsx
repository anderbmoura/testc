import React, { memo } from 'react';
import { Minus } from 'iconoir-react-native';
import { IconButton } from '../../../IconButton';
import { CardWidgetRemoveButtonProps } from './CardWidgetRemoveButton.model';
import { RemoveButtonContainer } from './CardWidgetRemoveButton.styles';
import { useCardWidgetRemoveButton } from './hooks/useCardWidgetRemoveButton';

/**
 * Componente CardWidgetRemoveButton
 *
 * Botão de remoção posicionado absolutamente no canto superior esquerdo
 * do CardWidget. Utiliza o IconButton com configurações específicas para
 * ações de remoção.
 *
 * @example
 * ```tsx
 * <CardWidgetRemoveButton
 *   onPress={() => handleRemoveWidget('widget-id')}
 *   accessibilityLabel="Remover widget de favoritos"
 *   testID="remove-widget-button"
 * />
 * ```
 */
export const CardWidgetRemoveButton: React.FC<CardWidgetRemoveButtonProps> =
  memo(({ onPress, accessibilityLabel = 'Remover widget', testID }) => {
    const { handlePress, isEnabled } = useCardWidgetRemoveButton({ onPress });

    if (!isEnabled) {
      return null;
    }

    return (
      <RemoveButtonContainer testID={testID}>
        <IconButton
          type="plain"
          size="tiny"
          color="danger"
          icon={<Minus />}
          onPress={handlePress}
          accessibilityLabel={accessibilityLabel}
        />
      </RemoveButtonContainer>
    );
  });

CardWidgetRemoveButton.displayName = 'CardWidgetRemoveButton';
