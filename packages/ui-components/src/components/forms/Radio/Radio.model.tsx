export type DscRadioGroupItemProps = {
  value: string;
  label: string;
  disabled?: boolean;
  onPress?: () => void;
};

export type RadioGroupProps = {
  options: DscRadioGroupItemProps[];
  defaultValue?: string;
  onValueChange?: (value: string) => void;
  name?: string;
};
