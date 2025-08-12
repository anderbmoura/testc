/**
 * Configuration options for the DSC Switch Component.
 *
 * Defines the properties available for customizing switch behavior and appearance.
 */
export interface SwitchProps {
  /**
   * Current checked state. When provided, component is controlled.
   */
  checked?: boolean;

  /**
   * Initial checked value when component first renders. Use when you don't need to control the state.
   */
  defaultChecked?: boolean;

  /**
   * Prevents user interaction and shows disabled styling.
   */
  disabled?: boolean;

  /**
   * Callback fired when switch is toggled. Receives the new boolean value.
   * Required when using `checked` prop.
   */
  onCheckedChange?: (checked: boolean) => void;

  /**
   * Label text displayed next to the switch. Clicking the text also toggles the switch.
   */
  text?: string;
}
