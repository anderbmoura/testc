import React from 'react';
import { LabelSmall, BodySmall } from '../../../../data-display/Typography';
import { CardNotificationContentProps } from './CardNotificationContent.model';
import { TextContainer } from './CardNotificationContent.styles';

export const CardNotificationContent: React.FC<
  CardNotificationContentProps
> = ({ label, description }) => (
  <TextContainer>
    <LabelSmall numberOfLines={1} selectable={false}>
      {label}
    </LabelSmall>
    <BodySmall numberOfLines={2} selectable={false}>
      {description}
    </BodySmall>
  </TextContainer>
);
