import { ReactElement } from 'react';
import { ActionsListSegmentedContainerWrapper } from './ActionsListSegmentedContainer.styles';
import type { ActionsListSegmentedContainerProps } from './ActionsListSegmentedContainer.model';

/**
 * Componente para renderizar o container do segmented button do ActionsList
 */
export const ActionsListSegmentedContainer = ({
  children,
}: ActionsListSegmentedContainerProps): ReactElement => {
  return (
    <ActionsListSegmentedContainerWrapper>
      {children}
    </ActionsListSegmentedContainerWrapper>
  );
};
