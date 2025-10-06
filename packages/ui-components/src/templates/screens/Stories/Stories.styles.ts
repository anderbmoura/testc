import { styled, View } from 'tamagui';
import { LinearGradient } from 'expo-linear-gradient';

export const StoriesContainer = styled(View, {
  name: 'StoriesContainer',
  position: 'relative',
  width: '100%',
  height: '100%',
  overflow: 'hidden',
});

export const StoriesImageBackground = styled(View, {
  name: 'StoriesImageBackground',
  position: 'absolute',
  top: 0,
  left: 0,
  right: 0,
  bottom: 0,
  zIndex: 1,
});

export const StoriesBlurOverlay = styled(View, {
  name: 'StoriesBlurOverlay',
  position: 'absolute',
  top: 0,
  left: 0,
  right: 0,
  bottom: 0,
  zIndex: 2,
  backgroundColor: 'rgba(0, 0, 0, 0.3)',

  variants: {
    blurIntensity: {
      1: { backdropFilter: 'blur(1px)' },
      2: { backdropFilter: 'blur(2px)' },
      3: { backdropFilter: 'blur(3px)' },
      4: { backdropFilter: 'blur(4px)' },
      5: { backdropFilter: 'blur(5px)' },
      6: { backdropFilter: 'blur(6px)' },
      7: { backdropFilter: 'blur(7px)' },
      8: { backdropFilter: 'blur(8px)' },
      9: { backdropFilter: 'blur(9px)' },
      10: { backdropFilter: 'blur(10px)' },
    },
  } as const,
});

export const StoriesProgressContainer = styled(View, {
  name: 'StoriesProgressContainer',
  position: 'absolute',
  top: '$tiny',
  left: '$tiny',
  right: '$tiny',
  zIndex: 4,
  flexDirection: 'row',
  gap: '$nano',
});

export const StoriesProgressTouchArea = styled(View, {
  name: 'StoriesProgressTouchArea',
  flex: 1,
  paddingVertical: '$micro',
  justifyContent: 'center',
});

export const StoriesProgressBar = styled(View, {
  name: 'StoriesProgressBar',
  flex: 1,
  height: 4,
  borderRadius: '$nano',
  backgroundColor: 'rgba(255, 255, 255, 0.3)',
  overflow: 'hidden',

  variants: {
    state: {
      completed: {
        backgroundColor: 'rgba(255, 255, 255, 0.9)',
      },
      current: {
        backgroundColor: 'rgba(255, 255, 255, 0.5)',
      },
      pending: {
        backgroundColor: 'rgba(255, 255, 255, 0.3)',
      },
    },
  } as const,
});

export const StoriesProgressFill = styled(View, {
  name: 'StoriesProgressFill',
  height: '100%',
  backgroundColor: 'white',
  borderRadius: '$nano',
});

export const StoriesContentContainer = styled(View, {
  name: 'StoriesContentContainer',
  position: 'absolute',
  top: 0,
  left: 0,
  right: 0,
  bottom: 0,
  zIndex: 3,
  justifyContent: 'center',
  alignItems: 'center',
});

export const StoriesLoadingContainer = styled(View, {
  name: 'StoriesLoadingContainer',
  position: 'absolute',
  top: 0,
  left: 0,
  right: 0,
  bottom: 0,
  zIndex: 5,
  justifyContent: 'center',
  alignItems: 'center',
  backgroundColor: '$neutral1',
});

export const StoriesLoadingContent = styled(View, {
  name: 'StoriesLoadingContent',
  justifyContent: 'center',
  alignItems: 'center',
  padding: '$large',
  gap: '$medium',
});

export const StoriesTopGradient = styled(LinearGradient, {
  name: 'StoriesTopGradient',
  position: 'absolute',
  top: 0,
  left: 0,
  right: 0,
  height: 145,
  zIndex: 2,
  pointerEvents: 'none',
});

export const StoriesBottomGradient = styled(LinearGradient, {
  name: 'StoriesBottomGradient',
  position: 'absolute',
  bottom: 0,
  left: 0,
  right: 0,
  height: 145,
  zIndex: 2,
  pointerEvents: 'none',
});
