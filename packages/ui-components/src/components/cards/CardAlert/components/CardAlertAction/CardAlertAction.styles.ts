import { View, styled, Button as TamaguiButton } from 'tamagui';

export const ActionContainer = styled(View, {
  name: 'CardAlertActionContainer',
  flexDirection: 'row',
  justifyContent: 'flex-end',
  alignItems: 'center',
  width: '100%',
  height: 44,
  gap: '$micro',
  padding: 0,
});

export const ActionButton = styled(TamaguiButton, {
  name: 'CardAlertActionButton',
  flexDirection: 'row',
  justifyContent: 'center',
  alignItems: 'center',
  paddingVertical: '$none',
  paddingHorizontal: '$quark',
  gap: '$quark',
  height: 44,
  borderRadius: '$pill',
  backgroundColor: 'transparent',
  borderWidth: 0,

  hoverStyle: {
    backgroundColor: 'transparent',
    opacity: 0.8,
  },

  pressStyle: {
    opacity: 0.6,
    backgroundColor: 'transparent',
  },

  focusStyle: {
    backgroundColor: 'transparent',
  },
});
