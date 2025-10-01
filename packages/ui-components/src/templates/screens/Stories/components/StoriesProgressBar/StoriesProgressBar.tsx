import React from 'react';
import { TouchableWithoutFeedback } from 'react-native';
import type { StoriesProgressBarProps } from './StoriesProgressBar.model';
import {
  StoriesProgressTouchArea,
  StoriesProgressBarContainer,
  StoriesProgressBackground,
  StoriesProgressFill,
} from './StoriesProgressBar.styles';

/**
 * Componente de barra de progresso individual para Stories
 *
 * @param state - Estado da barra (pending, current, completed)
 * @param progressWidth - Largura do progresso em porcentagem
 * @param onPress - Callback executado ao pressionar a barra
 */
export const StoriesProgressBar: React.FC<StoriesProgressBarProps> = ({
  progressWidth,
  onPress,
}) => {
  return (
    <TouchableWithoutFeedback onPress={onPress}>
      <StoriesProgressTouchArea>
        <StoriesProgressBarContainer>
          <StoriesProgressBackground />
          <StoriesProgressFill
            style={{
              width: progressWidth,
            }}
          />
        </StoriesProgressBarContainer>
      </StoriesProgressTouchArea>
    </TouchableWithoutFeedback>
  );
};
