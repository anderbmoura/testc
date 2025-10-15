import React from 'react';
import { Theme, XStack } from 'tamagui';
import Card from '../Card';
import { CardWidgetHeader } from './components/CardWidgetHeader';
import { CardWidgetFooter } from './components/CardWidgetFooter';
import {
  CardWidgetWrapper,
  CardWidgetContent,
} from './components/StyledComponents';
import { CardWidgetRemoveButton } from './components/CardWidgetRemoveButton';
import { useCardWidgetInteractionState } from './hooks/useCardWidgetInteractionState';
import type { CardWidgetProps } from './CardWidget.model';

/**
 * Componente DSC CardWidget
 *
 * Widget com header e footer personalizáveis.
 *
 * @example
 * ```tsx
 * import { CardWidget } from '@superapp-caixa/dsc-library';
 * import { Star } from 'iconoir-react-native';
 * import { LabelStandard } from '@superapp-caixa/dsc-library';
 * import { Star } from 'iconoir-react-native';
 *
 * <CardWidget
 *   variant="highlight"
 *   topLabel="Favorito"
 *   mainLabel="Meu card favorito"
 *   icon={<Star />}
 *   onPress={() => console.log('Widget pressionado')}
 * >
 *   <LabelStandard>Footer Content</LabelStandard>
 * </CardWidget>
 * ```
 */
export const CardWidget: React.FC<CardWidgetProps> = ({
  variant = 'highlight',
  topLabel,
  mainLabel,
  icon,
  image,
  children,
  onPress,
  removable,
  onRemove,
}) => {
  const { isFocused, handlers } = useCardWidgetInteractionState();

  const headerProps = {
    topLabel,
    mainLabel,
    icon,
    image,
  };

  const renderContent = () => (
    <CardWidgetWrapper
      {...(isFocused ? { focused: true } : { focused: false })}
      pointerEvents={onPress ? 'box-none' : 'auto'}
    >
      <Card type="outline">
        <CardWidgetContent pointerEvents={onPress ? 'none' : 'auto'}>
          <CardWidgetHeader {...headerProps} />
          {children && <CardWidgetFooter>{children}</CardWidgetFooter>}
        </CardWidgetContent>
      </Card>
      {removable && onRemove && <CardWidgetRemoveButton onPress={onRemove} />}
    </CardWidgetWrapper>
  );

  const contentWithTheme = <Theme name={variant}>{renderContent()}</Theme>;

  if (onPress) {
    return (
      <XStack
        flex={1}
        onPress={onPress}
        onFocus={handlers.onFocus}
        onBlur={handlers.onBlur}
        onHoverIn={handlers.onHoverIn}
        onHoverOut={handlers.onHoverOut}
        onPressIn={handlers.onPressIn}
        onPressOut={handlers.onPressOut}
        tabIndex={0}
        cursor="pointer"
      >
        {contentWithTheme}
      </XStack>
    );
  }

  return <XStack flex={1}>{contentWithTheme}</XStack>;
};

export { CardWidgetHeader } from './components/CardWidgetHeader';
export { CardWidgetFooter } from './components/CardWidgetFooter';
export { CardWidgetIcon } from './components/CardWidgetIcon';

export default CardWidget;
