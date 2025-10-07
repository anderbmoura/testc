import React from 'react';
import { Image } from 'tamagui';
import { BackgroundImage } from './components/BackgroundImage/BackgroundImage';
import { BackgroundContainer } from './components/BackgroundImage/BackgroundImage.styles';
import { MaskImage } from './components/MaskImage';
import { MaskContainer } from './components/MaskImage/MaskImage.styles';
import { BodyStandardSemibold, LabelTiny } from '../../data-display/Typography';
import {
  CardContainer,
  ContentStack,
  ImageSection,
} from './CardCarouselVertical.styles';
import type { CardCarouselVerticalProps } from './CardCarouselVertical.model';

/**
 * Componente DSC CardCarouselVertical
 *
 * Exibe um card de recomendação com duas variantes:
 * - `image`: Background colorido com imagem e máscara/clip
 * - `custom`: Imagem simples sem efeitos (192x148)
 *
 * @example
 * // Variant image (padrão)
 * <CardCarouselVertical
 *   source={require('./assets/casa-bonita.jpg')}
 *   variant="image"
 *   color="highlight"
 *   title="Habitação"
 *   description="Simule agora"
 * />
 *
 * // Variant custom
 * <CardCarouselVertical
 *   source={require('./assets/casa-bonita.jpg')}
 *   variant="custom"
 *   title="Habitação"
 *   description="Simule agora"
 * />
 */
export const CardCarouselVertical: React.FC<CardCarouselVerticalProps> = ({
  source,
  color = 'highlight',
  variant = 'image',
  title,
  description,
}) => {
  return (
    <CardContainer>
      {variant === 'image' ? (
        <ImageSection>
          <BackgroundContainer>
            <BackgroundImage variant={color} />
          </BackgroundContainer>

          <MaskContainer>
            <MaskImage source={source} />
          </MaskContainer>
        </ImageSection>
      ) : (
        <Image
          source={source}
          width={192}
          height={148}
          resizeMode="cover"
          borderTopLeftRadius="$big"
          borderTopRightRadius="$big"
        />
      )}

      <ContentStack>
        <LabelTiny color="$onNeutral2">{description}</LabelTiny>
        <BodyStandardSemibold color="$onNeutral1">{title}</BodyStandardSemibold>
      </ContentStack>
    </CardContainer>
  );
};

export default CardCarouselVertical;
