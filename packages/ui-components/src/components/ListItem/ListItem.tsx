import React from 'react';
import { View } from 'tamagui';
import { BodySmall, BodyStandard } from '../Typography';
import Separator from '../Separator';
import { ListItemProps } from './ListItem.model';
import { useListItemInteractionState } from './hooks/useListItemInteractionState';
import { ListItemLeftSlot } from './components/ListItemLeftSlot';
import { ListItemRightSlot } from './components/ListItemRightSlot';
import {
  StyledListItemContainer,
  StyledListItemWrapper,
  StyledListItemContent,
  StyledListItemRow,
} from './ListItem.styles';

/**
 * Componente DSC ListItem
 *
 * Item de lista flexível que suporta slots personalizáveis, múltiplos textos e labels
 * em diferentes posições, badge e separator opcional.
 *
 * @example
 * ```tsx
 * import { BadgeText } from '@superapp-caixa/dsc-library';
 *
 * <ListItem
 *   leftSlotProps={<Avatar src="avatar.jpg" />}
 *   labelTopLeft="Nome"
 *   textOnLeft="João Silva"
 *   labelBottomLeft="Status"
 *   rightSlotProps={<Switch checked={true} />}
 *   badge={<BadgeText>5</BadgeText>}
 *   separator
 *   onPress={() => console.log('Pressionado')}
 * />
 * ```
 */
export const ListItem: React.FC<ListItemProps> = ({
  leftSlot,
  rightSlot,
  labelTopLeft,
  labelTopRight,
  textOnLeft,
  textOnRight,
  labelBottomLeft,
  labelBottomRight,
  badge,
  separator = false,
  onPress,
  disabled = false,
}) => {
  const { handlers, states } = useListItemInteractionState({
    disabled,
    onPress,
  });

  const textColor = disabled ? '$onDisabled' : '$onNeutral1';
  const labelColor = disabled ? '$onDisabled' : '$onNeutral2';

  const renderRow = (
    leftText?: string,
    rightText?: string,
    isLabel = false
  ) => {
    if (!leftText && !rightText) return null;

    const TextComponent = isLabel ? BodySmall : BodyStandard;
    const color = isLabel ? labelColor : textColor;

    return (
      <StyledListItemRow>
        {leftText && (
          <TextComponent color={color} flex={1}>
            {leftText}
          </TextComponent>
        )}
        {rightText && <TextComponent color={color}>{rightText}</TextComponent>}
      </StyledListItemRow>
    );
  };

  const renderBadge = () => {
    if (!badge) return null;
    return badge;
  };

  const shouldShowSeparator = separator && !states.isFocused;

  return (
    <View>
      <StyledListItemContainer
        disabled={states.disabled}
        hovered={states.isHovered}
        pressed={states.isPressed}
        focused={states.isFocused}
        {...handlers}
      >
        <StyledListItemWrapper>
          {leftSlot && <ListItemLeftSlot>{leftSlot}</ListItemLeftSlot>}

          <StyledListItemContent>
            {renderRow(labelTopLeft, labelTopRight, true)}
            {renderRow(textOnLeft, textOnRight, false)}
            {renderRow(labelBottomLeft, labelBottomRight, true)}
          </StyledListItemContent>

          {renderBadge()}

          {rightSlot && <ListItemRightSlot>{rightSlot}</ListItemRightSlot>}
        </StyledListItemWrapper>
      </StyledListItemContainer>

      {/* Separator */}
      {shouldShowSeparator && <Separator direction="horizontal" />}
    </View>
  );
};
