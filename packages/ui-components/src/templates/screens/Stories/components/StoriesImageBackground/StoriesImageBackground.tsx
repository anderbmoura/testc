import React from 'react';
import { Image } from 'tamagui';
import type { StoriesImageBackgroundProps } from './StoriesImageBackground.model';
import { StoriesImageContainer } from './StoriesImageBackground.styles';

/**
 * Componente de imagem de fundo para Stories
 *
 * @param imageSource - URI/URL da imagem a ser exibida
 */
export const StoriesImageBackground: React.FC<StoriesImageBackgroundProps> = ({
  imageSource,
}) => {
  return (
    <StoriesImageContainer>
      <Image
        source={{ uri: imageSource }}
        width="100%"
        height="100%"
        objectFit="cover"
      />
    </StoriesImageContainer>
  );
};
