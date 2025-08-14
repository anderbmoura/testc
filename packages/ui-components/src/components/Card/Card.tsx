import React from 'react';
import { styled, View } from 'tamagui';
import { spaceTokens } from '../../config/tokens/space/space';
import { borderRadiusTokens } from '../../config/tokens/border/border';
import { CardProps } from './Card.model';

const DscCard = styled(View, {
  name: 'DscCard',
  borderRadius: borderRadiusTokens.big,
  padding: spaceTokens.tiny,
  gap: 16,
  width: 312,
  height: 132,

  variants: {
    type: {
      outline: {
        backgroundColor: 'transparent',
        borderWidth: 1,
        borderColor: '$neutral9',
      },
      plain: {
        backgroundColor: '$neutral2',
        borderWidth: 0,
      },
    },
  } as const,
});

/**
 * DSC Card Component
 *
 * @param type - Visual appearance variant of the card
 * ```tsx
 * <Card type="outline">Outline Card</Card>
 * <Card type="plain">Plain Card</Card>
 * ```
 *
 * @param width - Custom width for the card
 * ```tsx
 * <Card width={300}>Custom Width Card</Card>
 * <Card width="100%">Full Width Card</Card>
 * ```
 *
 * @param height - Custom height for the card
 * ```tsx
 * <Card height={200}>Custom Height Card</Card>
 * <Card height="auto">Auto Height Card</Card>
 * ```
 *
 * @param children - Content displayed inside the card
 * ```tsx
 * <Card>
 *   <Text>Card Content</Text>
 * </Card>
 * ```
 *
 * @param onPress - Callback fired when card is pressed
 * ```tsx
 * <Card onPress={() => handleCardPress()}>Pressable Card</Card>
 * ```
 *
 */
export const Card: React.FC<CardProps> = ({
  type = 'plain',
  children,
  width,
  height,
  style,
  onPress,
}) => {
  const cardStyle = {
    ...(width && { width }),
    ...(height && { height }),
    ...(style as any),
  };

  return (
    <DscCard
      type={type}
      style={cardStyle}
      onPress={onPress}
      pressStyle={onPress ? { opacity: 0.8 } : undefined}
    >
      {children}
    </DscCard>
  );
};

export default Card;
