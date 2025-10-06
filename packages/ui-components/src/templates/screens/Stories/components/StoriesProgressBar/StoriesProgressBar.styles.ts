import { styled, View } from 'tamagui';

export const StoriesProgressTouchArea = styled(View, {
  name: 'StoriesProgressTouchArea',
  flex: 1,
  paddingVertical: '$micro',
  justifyContent: 'center',
});

export const StoriesProgressBarContainer = styled(View, {
  name: 'StoriesProgressBarContainer',
  height: 4,
  flex: 1,
  borderRadius: '$nano',
  overflow: 'hidden',
  position: 'relative',
});

export const StoriesProgressBackground = styled(View, {
  name: 'StoriesProgressBackground',
  position: 'absolute',
  top: 0,
  left: 0,
  right: 0,
  bottom: 0,
  backgroundColor: '$fixedNeutralBg2',
  borderRadius: '$nano',
  opacity: 0.56,
});

export const StoriesProgressFill = styled(View, {
  name: 'StoriesProgressFill',
  height: '100%',
  backgroundColor: '$fixedOnNeutralInverse',
  borderRadius: '$nano',
  position: 'relative',
  zIndex: 1,
});
