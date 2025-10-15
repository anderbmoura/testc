import React from 'react';
import { CardAlertIcon } from './components/CardAlertIcon';
import { CardAlertContent } from './components/CardAlertContent';
import { CardAlertAction } from './components/CardAlertAction';
import { CardAlertContainer, TextContainer } from './CardAlert.styles';
import type { CardAlertProps } from './CardAlert.model';

/**
 * CardAlert Component
 *
 * A flexible alert component that displays important information to users with different visual variants.
 * Supports optional action buttons and follows the DSC Design System guidelines.
 *
 * **Key Features:**
 * - Width: 100% (flex: 1) of parent container
 * - Height: Automatic (hugs content)
 * - Four visual variants: info, success, warning, danger
 * - Optional action button
 *
 * @param props - CardAlert component props
 * @returns JSX.Element
 *
 * @example
 * ```tsx
 * // Basic info alert
 * <CardAlert
 *   variant="info"
 *   title="Information"
 *   description="This is an informational message for the user."
 * />
 *
 * // Success alert with action
 * <CardAlert
 *   variant="success"
 *   title="Success"
 *   description="Operation completed successfully."
 *   action={{
 *     label: "Continue",
 *     onPress: () => console.log("Action pressed")
 *   }}
 * />
 * ```
 */
export const CardAlert: React.FC<CardAlertProps> = ({
  variant,
  title,
  description,
  action,
  style,
  testID,
}) => {
  return (
    <CardAlertContainer variant={variant} style={style} testID={testID}>
      <CardAlertIcon variant={variant} />

      <TextContainer>
        <CardAlertContent
          variant={variant}
          title={title}
          description={description}
        />

        {action && (
          <CardAlertAction
            variant={variant}
            label={action.label}
            onPress={action.onPress}
            testID={testID ? `${testID}-action` : undefined}
          />
        )}
      </TextContainer>
    </CardAlertContainer>
  );
};
