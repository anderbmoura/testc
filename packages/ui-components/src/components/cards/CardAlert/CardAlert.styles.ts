import { View, styled } from 'tamagui';

export const CardAlertContainer = styled(View, {
  name: 'CardAlertContainer',
  borderRadius: '$large',
  paddingVertical: '$micro',
  paddingHorizontal: '$tiny',
  flexDirection: 'row',
  alignItems: 'flex-start',
  gap: '$tiny',
  width: '100%',

  variants: {
    variant: {
      info: {
        backgroundColor: '$infoBg',
      },
      success: {
        backgroundColor: '$successBg',
      },
      warning: {
        backgroundColor: '$warningBg',
      },
      danger: {
        backgroundColor: '$dangerBg',
      },
      smart_tips: {
        backgroundColor: '#FFEFD6',
      },
    },
  } as const,
});

export const TextContainer = styled(View, {
  name: 'CardAlertTextContainer',
  flex: 1,
  flexDirection: 'column',
  gap: '$nano',
  minWidth: 0,
});
