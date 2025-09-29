import { createCheckbox } from '@tamagui/checkbox';
import { Stack, styled } from '@tamagui/core';
import { Check, Minus } from 'iconoir-react-native';
import { Label, XStack, YStack } from 'tamagui';
import { useState } from 'react';
import { typography } from '../../config/fonts/typography';

const Frame = styled(Stack, {
  borderWidth: 2,
  borderColor: 'black',
  borderRadius: 4,
  alignItems: 'center',
  justifyContent: 'center',

  variants: {
    checked: {
      indeterminate: {
        backgroundColor: '$color8',
        fontSize: typography.bodyStandard.fontSize,
        fontWeight: typography.bodyStandard.fontWeight,
        lineHeight: typography.bodyStandard.lineHeight,
        paddingVertical: '$none',
        paddingHorizontal: '$small',
        minHeight: 56,
      },
      true: {
        backgroundColor: '$color8',
        fontSize: typography.bodyStandard.fontSize,
        fontWeight: typography.bodyStandard.fontWeight,
        lineHeight: typography.bodyStandard.lineHeight,
      },
      false: {
        backgroundColor: '$color1',
        hoverStyle: {
          backgroundColor: '$color5',
        },
        fontSize: typography.bodyStandard.fontSize,
        fontWeight: typography.bodyStandard.fontWeight,
        lineHeight: typography.bodyStandard.lineHeight,
      },
    },

    disabled: {
      true: {
        pointerEvents: 'none',
        userSelect: 'none',
        cursor: 'not-allowed',
        color: '$color2',

        hoverStyle: {
          borderColor: '$borderColor',
          backgroundColor: '$background',
        },

        pressStyle: {
          borderColor: '$borderColor',
          backgroundColor: '$background',
        },

        focusStyle: {
          outlineWidth: 0,
        },
      },
    },
  } as const,

  focusVisibleStyle: {
    outlineColor: '$neutral12',
    outlineWidth: 2,
    outlineOffset: 2,
    outlineStyle: 'solid',
    borderColor: '$neutral12',
  },
});

const Indicator = styled(Stack, {});

export const Checkbox = createCheckbox({
  Frame,
  Indicator,
});

type DscCheckboxProps = {
  onCheckedChange: (value: 'indeterminate' | boolean) => void;
  disabled?: boolean;
  isMultiSelected?: boolean;
  onMultiSelectChange?: (value: boolean) => void;
  labelText?: string;
};

export default function DscCheckbox({
  onCheckedChange,
  disabled = false,
  isMultiSelected = false,
  onMultiSelectChange,
  labelText = 'Checkbox label',
}: DscCheckboxProps) {
  const [checked, setChecked] = useState<'indeterminate' | boolean>(false);

  const handleChange = (value: 'indeterminate' | boolean) => {
    if (isMultiSelected) {
      onMultiSelectChange?.(value === 'indeterminate' ? false : value);
      setChecked?.(value === 'indeterminate' ? false : 'indeterminate');
    }
    onCheckedChange?.(value);
    setChecked?.(value);
  };

  return (
    <YStack width={200} alignItems="center" gap="$nano">
      <XStack gap="$nano" alignItems="center">
        <Checkbox
          checked={checked}
          disabled={disabled}
          onCheckedChange={handleChange}
          id="checkbox"
        >
          <Checkbox.Indicator>
            {checked === 'indeterminate' ? (
              <Minus color={'white'} />
            ) : (
              <Check color={'white'} />
            )}
          </Checkbox.Indicator>
        </Checkbox>
        {labelText && <Label htmlFor="checkbox">{labelText}</Label>}
      </XStack>
    </YStack>
  );
}
