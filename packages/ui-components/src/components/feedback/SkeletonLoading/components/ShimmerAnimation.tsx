import React, { useEffect, useRef } from 'react';
import { Animated, Dimensions, StyleSheet, Platform } from 'react-native';
import { View } from 'tamagui';
import { LinearGradient } from './LinearGradient';
import { ShimmerAnimationProps } from '../SkeletonLoading.model';

const { width: SCREEN_WIDTH } = Dimensions.get('window');

export const ShimmerAnimation = ({
  width = '100%',
  height = '$10',
  borderRadius = '$radius.small',
}: ShimmerAnimationProps) => {
  const isWeb = Platform.OS === 'web';

  const translateX = useRef(new Animated.Value(-SCREEN_WIDTH)).current;

  useEffect(() => {
    if (!isWeb) {
      Animated.loop(
        Animated.timing(translateX, {
          toValue: SCREEN_WIDTH,
          duration: 1200,
          useNativeDriver: true,
        })
      ).start();
    }
  }, [translateX, isWeb]);

  return (
    <View
      backgroundColor="$neutralBg3"
      overflow="hidden"
      width={width}
      height={height}
      borderRadius={borderRadius}
    >
      {isWeb ? (
        <LinearGradient
          colors={['#E3EBEB', '#9EB2B8', '#E3EBEB']}
          start={{ x: 0, y: 0.5 }}
          end={{ x: 1, y: 0.5 }}
          style={{ width: '100%', height: '100%' }}
        />
      ) : (
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
      )}
    </View>
  );
};