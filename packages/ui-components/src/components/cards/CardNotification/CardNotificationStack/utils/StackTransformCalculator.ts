import type {
  CardTransform,
  CardMovement,
  StackConfiguration,
} from '../CardNotificationStack.model';
import { STACK_CONSTANTS } from '../constants';

const STACK_CALCULATION_CONSTANTS = {
  BASE_SCALE: 1,
  BASE_TRANSLATION_Y: 0,
  MAXIMUM_VISIBLE_STACK_LEVEL: 2,
  STACK_DIRECTION_MULTIPLIER: -1,
  MAXIMUM_DRAG_PROGRESS: 1,
  STACK_LEVEL_INCREMENT: 1,
} as const;

/**
 * Utilitários para cálculos de transformação da pilha de cards.
 */
export class StackTransformCalculator {
  constructor(private configuration: StackConfiguration) {}

  /**
   * Calcula a transformação de um card baseado em sua posição ativa.
   *
   * @param activePosition - Posição ativa do card (0 = primeiro)
   * @param frontCardMovement - Movimento atual do card da frente
   * @returns Transformação calculada
   */
  calculateTransformForPosition(
    activePosition: number,
    frontCardMovement: CardMovement
  ): CardTransform {
    if (activePosition === STACK_CONSTANTS.FRONT_CARD_POSITION) {
      return {
        translateY: STACK_CALCULATION_CONSTANTS.BASE_TRANSLATION_Y,
        scale: STACK_CALCULATION_CONSTANTS.BASE_SCALE,
        interpolationProgress: 0,
      };
    }

    const dragProgress = Math.min(
      Math.abs(frontCardMovement.dx) /
        this.configuration.maximumDragDistanceForInterpolation,
      STACK_CALCULATION_CONSTANTS.MAXIMUM_DRAG_PROGRESS
    );

    const currentStackLevel =
      activePosition > STACK_CALCULATION_CONSTANTS.MAXIMUM_VISIBLE_STACK_LEVEL
        ? STACK_CALCULATION_CONSTANTS.MAXIMUM_VISIBLE_STACK_LEVEL
        : activePosition;
    const currentTranslateY =
      currentStackLevel *
      this.configuration.verticalOffset *
      STACK_CALCULATION_CONSTANTS.STACK_DIRECTION_MULTIPLIER;
    const currentScale =
      STACK_CALCULATION_CONSTANTS.BASE_SCALE -
      currentStackLevel * this.configuration.scaleReductionPerLevel;

    const futureStackLevel =
      activePosition - STACK_CALCULATION_CONSTANTS.STACK_LEVEL_INCREMENT;
    const futureLevelCapped =
      futureStackLevel > STACK_CALCULATION_CONSTANTS.MAXIMUM_VISIBLE_STACK_LEVEL
        ? STACK_CALCULATION_CONSTANTS.MAXIMUM_VISIBLE_STACK_LEVEL
        : futureStackLevel;
    const futureTranslateY =
      futureStackLevel === STACK_CONSTANTS.FRONT_CARD_POSITION
        ? STACK_CALCULATION_CONSTANTS.BASE_TRANSLATION_Y
        : futureLevelCapped *
          this.configuration.verticalOffset *
          STACK_CALCULATION_CONSTANTS.STACK_DIRECTION_MULTIPLIER;
    const futureScale =
      futureStackLevel === STACK_CONSTANTS.FRONT_CARD_POSITION
        ? STACK_CALCULATION_CONSTANTS.BASE_SCALE
        : STACK_CALCULATION_CONSTANTS.BASE_SCALE -
          futureLevelCapped * this.configuration.scaleReductionPerLevel;

    const interpolatedTranslateY =
      currentTranslateY + (futureTranslateY - currentTranslateY) * dragProgress;
    const interpolatedScale =
      currentScale + (futureScale - currentScale) * dragProgress;

    return {
      translateY: interpolatedTranslateY,
      scale: interpolatedScale,
      interpolationProgress: dragProgress,
    };
  }
}
