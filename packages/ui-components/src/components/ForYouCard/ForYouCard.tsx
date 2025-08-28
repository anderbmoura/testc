import React from 'react';
import { StyleSheet } from 'react-native';
import { Text, View, XStack, YStack } from 'tamagui';
import { Form1 } from './Form1';
import { Form2 } from './Form2';

/**
 * Props for the ForYouCard component.
 *
 * @interface ForYouCardProps
 * @property {string} href - The URL or path that the card should navigate to when clicked
 * @property {string} [fill] - Optional fill color or styling property for the card
 */
export type ForYouCardProps = {
  href: string;
  fill?: string;
};

/**
 * A card component designed for "For You" recommendations section.
 *
 * @component
 * @example
 * ```tsx
 * <ForYouCard
 *   href="https://wallpapercave.com/wp/wp2544022.jpg"
 *   fill="#ff6b6b"
 * />
 * ```
 *
 * @param props - The props for the ForYouCard component
 * @param props.href - The URL or path that the card should link to
 * @param props.fill - Optional fill color for the Form1 component background
 *
 * @returns A styled card component with two form overlays and text content
 */
export const ForYouCard: React.FC<ForYouCardProps> = ({ href, fill }) => {
  return (
    <View
      margin={10}
      backgroundColor="$color2"
      borderRadius={10}
      minHeight={243}
      width={200}
      gap={32}
      position="relative"
      overflow="hidden"
      justifyContent="flex-end"
      alignItems="flex-start"
      padding={16}
    >
      <Form1 style={StyleSheet.absoluteFillObject} fill={fill} />
      <Form2 style={StyleSheet.absoluteFillObject} href={href} />
      <YStack height={120} zIndex={1} justifyContent="flex-end" gap={8}>
        <XStack alignItems="center" flexDirection="row">
          <Text fontSize={12} lineHeight={20} color="#525f66" textAlign="left">
            Simule agora
          </Text>
        </XStack>
        <XStack flexDirection="row">
          <Text
            fontSize={16}
            letterSpacing={0.5}
            lineHeight={24}
            fontWeight="500"
            color="$color9"
            textAlign="left"
          >
            Habitação
          </Text>
        </XStack>
      </YStack>
    </View>
  );
};
export default ForYouCard;
