import React, { useEffect, useRef } from 'react';
import { Animated, Dimensions, StyleSheet } from 'react-native';
import { View } from 'tamagui';

import { ShimmerAnimationProps } from '../SkeletonLoading.model';
import { LinearGradient } from './LinearGradient';

const { width: SCREEN_WIDTH } = Dimensions.get('window');

export const ShimmerAnimation = ({
  width = '100%',
  height = '$10',
  borderRadius = '$radius.small',
}: ShimmerAnimationProps) => {
  const translateX = useRef(new Animated.Value(-SCREEN_WIDTH)).current;

  useEffect(() => {
    Animated.loop(
      Animated.timing(translateX, {
        toValue: SCREEN_WIDTH,
        duration: 1200,
        useNativeDriver: true,
      })
    ).start();
  }, [translateX]);

  return (
    <View
      backgroundColor="$neutralBg3"
      overflow="hidden"
      width={width}
      height={height}
      borderRadius={borderRadius}
    >
      <Animated.View
        style={[
          StyleSheet.absoluteFill,
          {
            transform: [{ translateX }],
          },
        ]}
      >
        <LinearGradient
          colors={['#E3EBEB', '#9EB2B8', '#E3EBEB']}
          start={{ x: 0, y: 0.5 }}
          end={{ x: 1, y: 0.5 }}
          style={StyleSheet.absoluteFill}
        />
      </Animated.View>
    </View>
  );
};
