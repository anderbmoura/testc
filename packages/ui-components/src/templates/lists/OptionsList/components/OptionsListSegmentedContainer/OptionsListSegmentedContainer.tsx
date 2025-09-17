import { ReactElement } from 'react';
import { OptionsListSegmentedContainer as StyledOptionsListSegmentedContainer } from './OptionsListSegmentedContainer.styles';
import type { OptionsListSegmentedContainerProps } from './OptionsListSegmentedContainer.model';

/**
 * Componente para renderizar o container do SegmentedButton
 */
export const OptionsListSegmentedContainer = ({
  children,
}: OptionsListSegmentedContainerProps): ReactElement => {
  return (
    <StyledOptionsListSegmentedContainer>
      {children}
    </StyledOptionsListSegmentedContainer>
  );
};
