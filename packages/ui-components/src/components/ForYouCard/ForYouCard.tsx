import React from 'react';
import { BackgroundImage } from './components/BackgroundImage/BackgroundImage';
import { BackgroundContainer } from './components/BackgroundImage/BackgroundImage.styles';
import { MaskImage } from './components/MaskImage';
import { MaskContainer } from './components/MaskImage/MaskImage.styles';
import { BodyStandardSemibold, LabelTiny } from '../Typography';
import { CardContainer, ContentStack } from './ForYouCard.styles';
import type { ForYouCardProps } from './ForYouCard.model';

/**
 * Componente DSC ForYouCard
 *
 * Exibe um card de recomendação com background colorido e uma imagem com máscara aplicada por cima.
 * Suporta diferentes temas visuais (highlight, accent, success, etc.).
 *
 * @example
 * <ForYouCard
 *   source={require('./assets/casa-bonita.jpg')}
 *   variant="highlight"
 * />
 */
export const ForYouCard: React.FC<ForYouCardProps> = ({
  source,
  variant = 'highlight',
}) => {
  return (
    <CardContainer>
      <BackgroundContainer>
        <BackgroundImage variant={variant} />
      </BackgroundContainer>

      <MaskContainer>
        <MaskImage source={source} />
      </MaskContainer>

      <ContentStack>
        <LabelTiny color="$onNeutral2">Simule agora</LabelTiny>
        <BodyStandardSemibold color="$onNeutral1">
          Habitação
        </BodyStandardSemibold>
      </ContentStack>
    </CardContainer>
  );
};

export default ForYouCard;
