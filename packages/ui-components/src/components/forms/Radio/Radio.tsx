import { styled, RadioGroup, Label, XStack } from 'tamagui';

// Styled RadioGroup Item
const DscRadioGroupItem = styled(RadioGroup.Item, {
  unstyled: true,
  alignItems: 'center',
  justifyContent: 'center',
  width: 24,
  height: 24,
  borderRadius: 12,
  borderWidth: 2,
  borderColor: '$color8',
  backgroundColor: '$color1',

  focusVisibleStyle: {
    outlineColor: '$neutral12',
    outlineWidth: 2,
    outlineOffset: 2,
    outlineStyle: 'solid',
    borderColor: 'transparent',
  },

  hoverStyle: {
    backgroundColor: '$color5',
  },

  variants: {
    disabled: {
      true: {
        borderColor: '$color6',
        backgroundColor: '$color3',
        cursor: 'not-allowed',
        opacity: 0.6,
      },
      false: {
        cursor: 'pointer',
        hoverStyle: {
          borderColor: '$color1',
          backgroundColor: '$color3',
        },
      },
    },
  } as const,
});

// Styled Indicator
const DscRadioGroupItemIndicator = styled(RadioGroup.Indicator, {
  position: 'absolute',
  width: '100%',
  height: '100%',
  borderRadius: 12,
  borderWidth: 6,
  borderColor: '$color8',
  backgroundColor: 'white',
});

// RadioGroup Item Component
type DscRadioGroupItemProps = {
  value: string;
  label: string;
  disabled?: boolean;
};

const RadioGroupItem = ({ value, label, disabled }: DscRadioGroupItemProps) => {
  return (
    <XStack alignItems="center" marginRight={20} gap="$micro">
      <DscRadioGroupItem value={value} disabled={disabled}>
        <DscRadioGroupItemIndicator />
      </DscRadioGroupItem>
      <Label>{label}</Label>
    </XStack>
  );
};

// Main RadioGroup Component
type RadioGroupProps = {
  options: DscRadioGroupItemProps[];
  defaultValue?: string;
  onValueChange?: (value: string) => void;
  name?: string;
};

export default function DscRadioGroup({
  options,
  defaultValue,
  onValueChange,
  name,
}: RadioGroupProps) {
  return (
    <RadioGroup
      defaultValue={defaultValue}
      onValueChange={onValueChange}
      name={name}
      orientation="horizontal"
    >
      {options.map(option => (
        <RadioGroupItem
          key={option.value}
          value={option.value}
          label={option.label}
          disabled={option.disabled}
        />
      ))}
    </RadioGroup>
  );
}
