import React, { useMemo } from 'react';
import { GestureDetector, Gesture } from 'react-native-gesture-handler';
import { View } from 'tamagui';
import { LinearGradient } from 'expo-linear-gradient';
import { useStoriesProgression } from './hooks/useStoriesProgression';
import { useImagePreloader } from './hooks/useImagePreloader';
import { useSwipeGestures } from './hooks/useSwipeGestures';
import { usePressGestures } from './hooks/usePressGestures';
import { useStoriesTopPadding } from './hooks/useStoriesSafeArea';
import { useStoriesPauseState } from './hooks/useStoriesPauseState';
import { STORIES_CONFIG } from './Stories.config';
import { StoriesContainer } from './Stories.styles';
import {
  StoriesImageBackground,
  StoriesBlurOverlay,
  StoriesProgressContainer,
  StoriesContentOverlay,
} from './components';
import type { StoriesProps } from './Stories.model';

export const Stories: React.FC<StoriesProps> = ({
  images,
  duration = STORIES_CONFIG.DEFAULT_DURATION,
  showBlur = false,
  blurIntensity = STORIES_CONFIG.DEFAULT_BLUR_INTENSITY,
  paused = false,
  onProgressBarPress,
  onItemChange,
  onImagesLoaded,
  onImageLoadError,
  children,
  ...viewProps
}) => {
  const { isPausedByPress, startPause, endPause, resetPauseOnNavigation } =
    useStoriesPauseState();
  const topPadding = useStoriesTopPadding();

  const imageUrls = useMemo(() => images.map(img => img.imageSource), [images]);

  const {
    allImagesLoaded: _allImagesLoaded,
    loadingProgress: _loadingProgress,
    failedUrls: _failedUrls,
  } = useImagePreloader({
    imageUrls,
    onAllImagesLoaded: onImagesLoaded,
    onImageError: onImageLoadError,
  });

  const { currentIndex, currentProgress, goToItem, nextItem, previousItem } =
    useStoriesProgression({
      totalItems: images.length,
      duration,
      paused: paused || isPausedByPress,
      onItemChange,
    });

  const { pressGesture } = usePressGestures({
    onPressStart: startPause,
    onPressEnd: endPause,
    enabled: true,
  });

  const { panGesture } = useSwipeGestures({
    onSwipeRight: () => {
      resetPauseOnNavigation();
      nextItem();
    },
    onSwipeLeft: () => {
      resetPauseOnNavigation();
      previousItem();
    },
    minVelocity: STORIES_CONFIG.SWIPE.MIN_VELOCITY,
    minDistance: STORIES_CONFIG.SWIPE.MIN_DISTANCE,
    enabled: true,
  });

  const handleProgressBarPress = (index: number) => {
    resetPauseOnNavigation();
    goToItem(index);
    onProgressBarPress?.(index);
  };

  if (images.length === 0) {
    return null;
  }

  const currentImage = images[currentIndex];

  const combinedGesture = Gesture.Simultaneous(panGesture, pressGesture);
  return (
    <StoriesContainer {...viewProps}>
      <StoriesImageBackground imageSource={currentImage.imageSource} />

      <StoriesBlurOverlay blurIntensity={showBlur ? blurIntensity : 0} />

      <LinearGradient
        colors={['rgba(0,0,0,0.3)', 'rgba(0,0,0,0.3)', 'rgba(0,0,0,0)']}
        locations={[0, 0.2, 1]}
        start={[0, 0]}
        end={[0, 1]}
        style={{
          position: 'absolute',
          top: 0,
          left: 0,
          right: 0,
          height: 145,
          zIndex: 2,
          pointerEvents: 'none',
        }}
      />

      <LinearGradient
        colors={['rgba(0,0,0,0)', 'rgba(0,0,0,0.3)', 'rgba(0,0,0,0.3)']}
        locations={[0, 0.8, 1]}
        start={[0, 0]}
        end={[0, 1]}
        style={{
          position: 'absolute',
          bottom: 0,
          left: 0,
          right: 0,
          height: 145,
          zIndex: 2,
          pointerEvents: 'none',
        }}
      />

      <StoriesProgressContainer
        images={images}
        currentIndex={currentIndex}
        currentProgress={currentProgress}
        onProgressBarPress={handleProgressBarPress}
        topPadding={topPadding}
      />

      <StoriesContentOverlay>{children}</StoriesContentOverlay>

      <GestureDetector gesture={combinedGesture}>
        <View
          position="absolute"
          top={0}
          left={0}
          right={0}
          bottom={0}
          zIndex={STORIES_CONFIG.LAYOUT.GESTURE_LAYER_Z_INDEX}
        />
      </GestureDetector>
    </StoriesContainer>
  );
};
