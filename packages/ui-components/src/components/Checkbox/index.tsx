import { Check as CheckIcon } from '@tamagui/lucide-icons';
import { useContext } from 'react';
import {
  createStyledContext,
  Label,
  SizeTokens,
  styled,
  Checkbox as TCheckbox,
  XStack,
  type CheckboxProps as TCheckboxProps,
} from 'tamagui';

const dscContextProvider = createStyledContext<{
  label: string;
  size: SizeTokens;
  values: Record<string, boolean>;
  onValueChange?: (value: Record<string, boolean>) => void;
}>({
  size: '$4',
  label: '',
  values: {},
  onValueChange: () => {},
});

const DscCheckboxArea = styled(XStack, {
  context: dscContextProvider,
  alignItems: 'center',
  gap: '$4',
});

const DscCheckbox = styled(TCheckbox, {
  context: dscContextProvider,
  variants: {
    size: {
      $sm: {
        size: '$2',
      },
      $md: {
        size: '$4',
      },
      $lg: {
        size: '$6',
      },
    },
  } as const,
  defaultVariants: {
    size: '$md',
  },
  focusStyle: {
    outlineColor: 'black',
    outlineWidth: 2,
    outlineStyle: 'solid',
  },
  pressStyle: {},
});

export type CheckboxProps = TCheckboxProps & {
  label?: string;
};

export function CheckboxWithLabel({ ...checkboxProps }: CheckboxProps) {
  const { size, label } = useContext(dscContextProvider);
  // Generate a unique ID for the checkbox based on its size
  const id = `checkbox-${size || 'default'}-${Math.random().toString(36).substring(2, 11)}`;
  return (
    <DscCheckboxArea>
      <DscCheckbox id={id} {...checkboxProps}>
        <TCheckbox.Indicator>
          <CheckIcon />
        </TCheckbox.Indicator>
      </DscCheckbox>

      <Label
        size={size}
        htmlFor={id}
        disabled={checkboxProps.disabled}
        color={checkboxProps.disabled ? '$color10' : '$color11'}
      >
        {label}
      </Label>
    </DscCheckboxArea>
  );
}
