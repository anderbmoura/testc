import React from 'react';
import { GestureResponderEvent } from 'react-native';
import { styled, Button as TButton } from 'tamagui';

const BlueButton = styled(TButton, {
  backgroundColor: '$accent6',
  color: '$color1',
  fontWeight: 'bold',
  hoverStyle: {
    backgroundColor: '$accent7',
  },
  focusStyle: {
    borderColor: '$accent6',
    outlineColor: 'black',
    outlineWidth: 2,
    outlineStyle: 'solid',
  },
  pressStyle: {
    backgroundColor: '$accent8',
  },
});

interface ButtonProps {
  onPress?: (event: GestureResponderEvent) => void;
  children?: React.ReactNode;
}

const Button: React.FC<ButtonProps> = ({ onPress, children }) => {
  return (
    <BlueButton size="$4" onPress={onPress}>
      {children}
    </BlueButton>
  );
};

export default Button;
