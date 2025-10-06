import React from 'react';
import { Theme } from 'tamagui';
import { useTransformIcon } from '../../../../utils';
import {
  CardWidgetFooterContainer,
  CardWidgetFooterValueContainer,
  CardWidgetFooterIconContainer,
} from './CardWidgetFooter.styles';
import type { CardWidgetFooterProps } from './CardWidgetFooter.model';
import { Progress } from '../../../feedback/Progress';
import { LabelSmallRegular, LabelTiny } from '../../../data-display/Typography';

/**
 * Componente DSC CardWidgetFooter
 *
 * Footer padrão para ser utilizado em um CardWidget.
 *
 * @example
 * ```tsx
 * import { CreditCard } from 'iconoir-react-native';
 *
 * <CardWidgetFooter
 *   variant="neutral"
 *   label="Label"
 *   value="Value"
 *   icon={CreditCard}
 *   showProgress={true}
 *   progress={75}
 * />
 * ```
 */
export const CardWidgetFooter: React.FC<CardWidgetFooterProps> = ({
  variant = 'neutral',
  label,
  value,
  icon,
  showProgress = false,
  progress = 0,
}) => {
  const transformIcon = useTransformIcon();
  const transformedIcon = icon ? transformIcon(icon, 20, '$color8') : null;

  const content = (
    <CardWidgetFooterContainer>
      {label && <LabelTiny color="$onNeutral2">{label}</LabelTiny>}

      {showProgress && <Progress size="smaller" progress={progress} />}

      {(value || transformedIcon) && (
        <Theme name={variant}>
          <CardWidgetFooterValueContainer>
            {transformedIcon && (
              <CardWidgetFooterIconContainer>
                {transformedIcon}
              </CardWidgetFooterIconContainer>
            )}

            {value && (
              <LabelSmallRegular color="$color8">{value}</LabelSmallRegular>
            )}
          </CardWidgetFooterValueContainer>
        </Theme>
      )}
    </CardWidgetFooterContainer>
  );

  return content;
};
