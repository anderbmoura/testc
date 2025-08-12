import React, { useState } from 'react';
import { Switch as TamaguiSwitch, styled, XStack, YStack } from 'tamagui';
import { SwitchProps } from './Switch.model';
import { Body } from '../Typography';

const DscSwitch = styled(TamaguiSwitch, {
  name: 'DscSwitch',
  backgroundColor: '$highlight9',
  height: 32,
  width: 52,
  padding: 2,

  hoverStyle: {
    backgroundColor: '$highlight10',
  },

  pressStyle: {
    backgroundColor: '$highlight8',
  },

  focusStyle: {
    backgroundColor: '$highlight9',
  },

  disabledStyle: {
    backgroundColor: '$neutral5',
  },

  variants: {
    checked: {
      true: {
        backgroundColor: '$highlight9',
        hoverStyle: {
          backgroundColor: '$highlight10',
        },
        pressStyle: {
          backgroundColor: '$highlight8',
        },
        focusStyle: {
          backgroundColor: '$highlight9',
        },
      },
      false: {
        backgroundColor: '$neutral6',
        hoverStyle: {
          backgroundColor: '$neutral7',
        },
        pressStyle: {
          backgroundColor: '$neutral5',
        },
        focusStyle: {
          backgroundColor: '$neutral6',
        },
      },
    },
  },
});

const DscSwitchContainer = styled(YStack, {
  name: 'DscSwitchContainer',
  borderRadius: 18,
  padding: 0,
  borderWidth: 2,
  borderColor: 'transparent',

  variants: {
    focused: {
      true: {
        borderColor: '$neutral12',
      },
      false: {
        borderColor: 'transparent',
      },
    },
  },
});

const DscSwitchThumb = styled(TamaguiSwitch.Thumb, {
  name: 'DscSwitchThumb',
  backgroundColor: '$neutral1',
  height: 25,
  width: 25,

  variants: {
    disabled: {
      true: {
        backgroundColor: '$neutral9',
      },
      false: {
        backgroundColor: '$neutral1',
      },
    },
  },
});

/**
 * DSC Switch Component
 *
 * @param checked - Current checked state. When provided, component is controlled
 * ```tsx
 * <Switch checked={isDarkMode} onCheckedChange={setDarkMode} />
 * ```
 *
 * @param defaultChecked - Initial checked value when component first renders
 * ```tsx
 * <Switch defaultChecked={true} text="Start enabled" />
 * ```
 *
 * @param disabled - Prevents user interaction and shows disabled styling
 * ```tsx
 * <Switch disabled={!isPremiumUser} text="Premium feature" />
 * ```
 *
 * @param onCheckedChange - Callback fired when switch is toggled. Receives the new boolean value
 * ```tsx
 * <Switch checked={enabled} onCheckedChange={(value) => setEnabled(value)} />
 * ```
 *
 * @param text - Label text displayed next to the switch. Clicking the text also toggles the switch
 * ```tsx
 * <Switch text="Enable dark mode" defaultChecked={false} />
 * ```
 */
const Switch: React.FC<SwitchProps> = ({
  checked,
  defaultChecked = false,
  disabled = false,
  onCheckedChange,
  text,
}) => {
  const [internalChecked, setInternalChecked] = useState(defaultChecked);
  const [isFocused, setIsFocused] = useState(false);
  const isControlled = checked !== undefined;
  const switchValue = checked !== undefined ? checked : internalChecked;

  const handleChange = (value: boolean) =>
    isControlled ? onCheckedChange?.(value) : setInternalChecked(value);
  const handleContainerPress = () => !disabled && handleChange(!switchValue);
  const handleFocus = () => setIsFocused(true);
  const handleBlur = () => setIsFocused(false);

  return (
    <XStack
      alignItems="center"
      gap="$micro"
      onPress={handleContainerPress}
      onFocus={handleFocus}
      onBlur={handleBlur}
      tabIndex={disabled ? -1 : 0}
      cursor={disabled ? 'not-allowed' : 'pointer'}
    >
      {text && <Body>{text}</Body>}
      <DscSwitchContainer
        {...(isFocused && !disabled ? { focused: true } : { focused: false })}
      >
        <DscSwitch
          checked={switchValue}
          disabled={disabled}
          onCheckedChange={handleChange}
        >
          <DscSwitchThumb animation="quicker" disabled={disabled} />
        </DscSwitch>
      </DscSwitchContainer>
    </XStack>
  );
};

export default Switch;
