import React, { memo } from 'react';
import {
  ArrowSeparateVertical,
  ArrowUnionVertical,
} from 'iconoir-react-native';
import { LabelSmall, BodySmall } from '../../data-display/Typography';
import { useTransformIcon } from '../../../utils';
import { ListAccordionProps } from './ListAccordion.model';
import {
  StyledListAccordionContainer,
  StyledTextContainer,
  StyledLeftTextContainer,
  StyledRightTextContainer,
  StyledIconContainer,
} from './ListAccordion.styles';
import { iconSize } from '../../../config/tokens/iconSize/iconSize';

/**
 * Componente DSC ListAccordion
 *
 * Item de lista expansível que permite mostrar/ocultar conteúdo com animação de acordo.
 * Inclui texto principal à esquerda, texto opcional à direita e ícone indicativo do estado.
 *
 * @example
 * ```tsx
 * <ListAccordion
 *   textLeft="Categoria Principal"
 *   textRight="5 itens"
 *   collapsed={false}
 *   onChange={(value) => setExpanded(value)}
 * />
 * ```
 */
export const ListAccordion: React.FC<ListAccordionProps> = memo(
  ({ textLeft, textRight, collapsed = false, disabled = false, onChange }) => {
    const transformIcon = useTransformIcon();

    const IconComponent = collapsed
      ? ArrowUnionVertical
      : ArrowSeparateVertical;
    const iconColor = disabled ? '$onDisabled' : '$highlight';
    const icon = transformIcon(IconComponent, iconSize.small, iconColor);

    const textColor = disabled ? '$onDisabled' : '$onNeutral2';

    const handlePress = () => {
      if (!disabled && onChange) {
        onChange(!collapsed);
      }
    };

    return (
      <StyledListAccordionContainer disabled={disabled} onPress={handlePress}>
        <StyledTextContainer pointerEvents="none">
          <StyledLeftTextContainer>
            <LabelSmall color={textColor}>{textLeft}</LabelSmall>
          </StyledLeftTextContainer>

          {textRight && (
            <StyledRightTextContainer>
              <BodySmall color={textColor}>{textRight}</BodySmall>
            </StyledRightTextContainer>
          )}
        </StyledTextContainer>

        <StyledIconContainer pointerEvents="none">{icon}</StyledIconContainer>
      </StyledListAccordionContainer>
    );
  }
);

ListAccordion.displayName = 'ListAccordion';
