export type CheckboxValue = boolean | 'indeterminate';

export interface DscCheckboxProps {
  /**
   * Callback when the checked state changes.
   */
  onCheckedChange: (value: CheckboxValue) => void;

  /**
   * If true, the checkbox is disabled.
   */
  disabled?: boolean;

  /**
   * If true, the checkbox is in multi-select mode.
   */
  isMultiSelected?: boolean;

  /**
   * Callback for multi-select mode when the value changes.
   */
  onMultiSelectChange?: (value: boolean) => void;

  /**
   * The label
   */
  labelText?: string;
}
