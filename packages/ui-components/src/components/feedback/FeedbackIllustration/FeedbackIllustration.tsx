import React from 'react';
import { View, Image, styled, useThemeName } from 'tamagui';
import {
  FeedbackIllustrationProps,
  FeedbackStatus,
} from './FeedbackIllustration.model';
import { getFeedbackAsset, type FeedbackTheme } from './assets';

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
  const defaultAlt: Record<FeedbackStatus, string> = {
    success: 'Sucesso',
    warning: 'Aviso',
    danger: 'Erro',
    informative: 'Informativo',
  };

  const themeName = useThemeName();
  const themeVariant: FeedbackTheme =
    themeName && themeName.includes('dark') ? 'dark' : 'light';
  const imageSource = getFeedbackAsset(status, themeVariant);

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
