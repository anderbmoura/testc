import React from 'react';
import { styled, View } from 'tamagui';
import { borderRadiusTokens } from '../../config/tokens/border/border';
import { CardProps } from './Card.model';

const DscCard = styled(View, {
  name: 'DscCard',
  borderRadius: borderRadiusTokens.big,
  width: 'auto',

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
  onPress,
}) => {
  return (
    <DscCard type={type} onPress={onPress}>
      {children}
    </DscCard>
  );
};

export default Card;
