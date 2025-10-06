import React from 'react';
import { View, Image, styled } from 'tamagui';
import { FeedbackIllustrationProps } from './FeedbackIllustration.model';
import { FeedbackAssets } from './assets';

const IllustrationContainer = styled(View, {
  name: 'IllustrationContainer',
  width: 150,
  height: 150,
  alignItems: 'center',
  justifyContent: 'center',
});

export const FeedbackIllustration: React.FC<FeedbackIllustrationProps> = ({
  status,
  alt,
}) => {
  //Alt padrão caso não seja informado nenhum
  const defaultAlt = {
    success: 'Sucesso',
    warning: 'Aviso',
    danger: 'Erro',
    informative: 'Informativo',
  };

  const imageSource = FeedbackAssets[status];

  return (
    <IllustrationContainer
      tabIndex={0}
      aria-label={alt || defaultAlt[status]}
      role="img"
    >
      <Image
        source={imageSource}
        width={150}
        height={150}
        resizeMode="contain"
      />
    </IllustrationContainer>
  );
};
