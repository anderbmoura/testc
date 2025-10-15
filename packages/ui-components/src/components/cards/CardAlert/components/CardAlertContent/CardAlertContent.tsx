import React from 'react';
import { BodyLarge, BodyStandard } from '../../../../data-display/Typography';
import { ContentContainer } from './CardAlertContent.styles';
import type { CardAlertContentProps } from './CardAlertContent.model';

// Title color token mapping by variant
const titleColorTokenMap = {
  info: '$onInfoBg',
  success: '$onSuccessBg',
  warning: '$onWarningBg',
  danger: '$onDangerBg',
  smart_tips: '#804800',
} as const;

// Description color mapping by variant
const descriptionColorMap = {
  info: '$onNeutral1',
  success: '$onNeutral1',
  warning: '$onNeutral1',
  danger: '$onNeutral1',
  smart_tips: '#804800',
} as const;

// Title font weight mapping by variant
const titleFontWeightMap = {
  info: 'normal',
  success: 'normal',
  warning: 'normal',
  danger: 'normal',
  smart_tips: '600',
} as const;

export const CardAlertContent: React.FC<CardAlertContentProps> = ({
  variant,
  title,
  description,
}) => {
  const titleColor = titleColorTokenMap[variant];
  const descriptionColor = descriptionColorMap[variant];
  const titleFontWeight = titleFontWeightMap[variant];

  return (
    <ContentContainer>
      <BodyLarge color={titleColor} fontWeight={titleFontWeight}>
        {title}
      </BodyLarge>
      <BodyStandard color={descriptionColor}>{description}</BodyStandard>
    </ContentContainer>
  );
};
