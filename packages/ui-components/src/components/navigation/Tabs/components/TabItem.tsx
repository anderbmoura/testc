import { useTabsInteractionState } from '../hooks/useTabsInteractionState';
import { TabItemContainer, TabItemLabel } from './StyledComponents';
import { TabItemIcon } from './TabItemIcon';
import { TabItemProps } from '../Tabs.model';

/**
 * Componente DSC TabItem
 *
 * Representa uma única aba dentro do componente Tabs.
 *
 * @example
 * ```tsx
 * import { TabItem } from '@superapp-caixa/dsc-library';
 * import { Home } from 'iconoir-react-native';
 *
 * <TabItem
 *   label="Início"
 *   isSelected={true}
 *   variant="standard"
 *   onPress={() => console.log('Tab pressionada')}
 *   leftIcon={<Home />}
 * />
 * ```
 */
export const TabItem: React.FC<TabItemProps> = ({
  label,
  isSelected,
  variant,
  onPress,
  leftIcon,
  rightIcon,
  applyLeftBorderRadius = false,
  applyRightBorderRadius = false,
}) => {
  const { currentState, handlers } = useTabsInteractionState();
  return (
    <TabItemContainer
      size={variant}
      onPressIn={handlers.onPressIn}
      onPressOut={handlers.onPressOut}
      onHoverIn={handlers.onHoverIn}
      onHoverOut={handlers.onHoverOut}
      onFocus={handlers.onFocus}
      onBlur={handlers.onBlur}
      tabIndex={0}
      onPress={onPress}
      selected={isSelected}
      currentInteractionState={currentState}
      applyLeftBorderRadius={applyLeftBorderRadius}
      applyRightBorderRadius={applyRightBorderRadius}
    >
      {leftIcon && <TabItemIcon icon={leftIcon} />}
      {label && (
        <TabItemLabel
          size={variant}
          selected={isSelected}
          currentInteractionState={currentState}
        >
          {label}
        </TabItemLabel>
      )}

      {rightIcon && <TabItemIcon icon={rightIcon} />}
    </TabItemContainer>
  );
};
