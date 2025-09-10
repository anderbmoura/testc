import { XGroup } from 'tamagui';
import { TabsContainer } from './components/StyledComponents';
import { TabItem } from './components/TabItem';
import { Separator } from '../Separator';
import { TabsProps } from './Tabs.model';
import { useMemo } from 'react';

/**
 * Componente DSC Tabs
 *
 * @example
 * ```tsx
 * import { Tabs, TabOption } from '@superapp-caixa/dsc-library';
 * import { Star, BadgeCheck } from 'iconoir-react-native';
 * import { useState } from 'react';
 *
 * type TabKeys = 'tab1' | 'tab2' | 'tab3';
 *
 * const tabOptions: TabOption<TabKeys>[] = [
 *   {
 *     key: 'tab1',
 *     label: 'Tab Item1',
 *     show: true,
 *   },
 *   { key: 'tab2', label: 'Tab Item2', show: true, leftIcon: <Star /> },
 *   {
 *     key: 'tab3',
 *     label: 'Tab Item3',
 *     show: true,
 *     rightIcon: <BadgeCheck />,
 *   },
 * ];
 *
 * export function MyComponent() {
 *   const [selectedTab, setSelectedTab] = useState<TabKeys>();
 *
 *   const onTabPressHandler = (tab: TabOption<TabKeys>) => {
 *     setSelectedTab(tab.key);
 *   };
 *
 *   return (
 *     <Tabs
 *       variant="standard"
 *       tabItems={tabOptions}
 *       selectedTabKey={selectedTab}
 *       onTabPress={onTabPressHandler}
 *     />
 *   );
 * }
 * ```
 */
const Tabs = <T extends string>({
  variant = 'standard',
  tabItems,
  selectedTabKey,
  onTabPress,
}: TabsProps<T>) => {
  const filteredTabItems = useMemo(
    () => tabItems.filter(item => item.show),
    [tabItems]
  );

  return (
    <TabsContainer>
      {filteredTabItems.map((item, index) => {
        const isFirst = index === 0;
        const isLast = index === filteredTabItems.length - 1;
        const isSelected = selectedTabKey === item.key;
        return (
          <XGroup.Item key={item.key}>
            <TabItem
              variant={variant}
              label={item.label}
              isSelected={isSelected}
              onPress={() => onTabPress(item)}
              leftIcon={item.leftIcon}
              rightIcon={item.rightIcon}
              applyLeftBorderRadius={isFirst}
              applyRightBorderRadius={isLast}
            />
            {!isLast && <Separator direction="vertical" />}
          </XGroup.Item>
        );
      })}
    </TabsContainer>
  );
};

export default Tabs;
