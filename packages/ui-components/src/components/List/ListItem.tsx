import { NavArrowRight } from 'iconoir-react-native';
import { useState } from 'react';
import { Text, useTheme, View, XStack, YStack } from 'tamagui';
import Switch from '../Switch';

export type Item = {
  id: string | number;
  title: string;
  content: string;
  subContent?: string;
  disabled?: boolean;
  iconLeft?: React.ReactNode;
  iconRight?: React.ReactNode;
  nav?: boolean;
  switchButton?: boolean;
  onSelect?: (item: Item, switchState?: boolean) => void;
};

export type ItemProps = {
  id: number | string;
  title: string;
  content: string;
  subContent?: string;
  iconRight?: React.ReactNode;
  iconLeft?: React.ReactNode;
  disabled?: boolean;
  nav?: boolean;
  switchButton?: boolean;
  onSelect?: (item: Item, switchState?: boolean) => void;
  onEdit?: () => void;
  onClose?: () => void;
};
export function ListItem({
  id,
  iconRight,
  iconLeft,
  title,
  content,
  subContent,
  onSelect,
  disabled = false,
  nav = false,
  switchButton = false,
}: ItemProps) {
  const theme = useTheme();
  const [isChecked, setIsChecked] = useState(false);
  const handleSwitch = (value: boolean) => {
    setIsChecked(value);
    handleSelect();
  };
  const handleSelect = () => {
    if (disabled) return;
    const item: Item = {
      id: id,
      title,
      content,
      iconLeft,
      iconRight,
      disabled,
      nav,
      switchButton,
      onSelect,
    };
    if (switchButton) {
      setIsChecked(!isChecked);
    }
    if (onSelect) {
      onSelect(item, switchButton ? isChecked : undefined);
    }
  };

  return (
    <View>
      <XStack
        key={id}
        p="$space.tiny"
        gap="$space.tiny"
        alignItems="center"
        minHeight={32}
        tabIndex={onSelect && !disabled ? 0 : -1}
        role="button"
        aria-label={`${title}: ${content}`}
        aria-disabled={disabled}
        pressStyle={
          onSelect && !disabled ? { backgroundColor: '$neutral3' } : undefined
        }
        hoverStyle={
          onSelect && !disabled ? { backgroundColor: '$neutral5' } : undefined
        }
        animation="quick"
        onPress={handleSelect}
        opacity={disabled ? 0.5 : 1}
      >
        <YStack justifyContent="center" alignItems="center" mr={'$tiny'}>
          {iconLeft}
        </YStack>

        <YStack flex={1}>
          <Text fontSize="$tiny" fontWeight="600">
            {title}
          </Text>
          <Text fontSize="$micro">{content}</Text>
          {subContent && <Text fontSize="$nano">{subContent}</Text>}
        </YStack>

        <YStack justifyContent="center">
          {nav && !iconRight && !switchButton ? (
            <View tabIndex={!disabled ? 0 : -1}>
              <NavArrowRight
                height={36}
                width={36}
                color={theme.highlight.val}
              />
            </View>
          ) : (
            <>{iconRight}</>
          )}
          {switchButton && (
            <Switch
              onCheckedChange={value => handleSwitch(value)}
              checked={isChecked}
              disabled={disabled}
            />
          )}
        </YStack>
      </XStack>
    </View>
  );
}
