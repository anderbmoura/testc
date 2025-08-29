import React from 'react';
import { LabelSmall, LabelStandard } from '../../Typography';
import { CardWidgetIcon } from './CardWidgetIcon';
import {
  CardWidgetHeaderContainer,
  CardWidgetHeaderTopRow,
  CardWidgetIconContainer,
} from './StyledComponents';

interface CardWidgetHeaderProps {
  topLabel: string;
  mainLabel: string;
  icon?: React.ReactNode;
  image?: React.ReactNode;
}

/**
 * Componente DSC CardWidgetHeader
 *
 * Header do CardWidget contendo labels e ícone/imagem opcional.
 */
export const CardWidgetHeader: React.FC<CardWidgetHeaderProps> = ({
  topLabel,
  mainLabel,
  icon,
  image,
}) => {
  const renderIconOrImage = () => {
    if (icon) {
      return (
        <CardWidgetIconContainer>
          <CardWidgetIcon icon={icon} />
        </CardWidgetIconContainer>
      );
    }

    if (image) {
      return <CardWidgetIconContainer>{image}</CardWidgetIconContainer>;
    }

    return null;
  };

  return (
    <CardWidgetHeaderContainer>
      <CardWidgetHeaderTopRow>
        <LabelSmall color="$onNeutral2">{topLabel}</LabelSmall>
        {renderIconOrImage()}
      </CardWidgetHeaderTopRow>
      <LabelStandard color="$onNeutral1">{mainLabel}</LabelStandard>
    </CardWidgetHeaderContainer>
  );
};

export default CardWidgetHeader;
