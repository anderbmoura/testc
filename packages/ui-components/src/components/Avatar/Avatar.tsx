import React from 'react';
import { styled, YStack, Text, Image } from 'tamagui';
import { AvatarProps } from './Avatar.model';
import { typography } from '../../config/fonts/typography';
import { borderRadiusTokens } from '../../config/tokens/border/border';
import { useTransformIcon } from '../../utils';

const DscAvatar = styled(YStack, {
  name: 'DscAvatar',
  alignItems: 'center',
  justifyContent: 'center',
  borderRadius: borderRadiusTokens.pill,
  overflow: 'hidden',
  backgroundColor: '$neutralBg3',

  variants: {
    size: {
      small: { width: 24, height: 24 },
      standard: { width: 36, height: 36 },
      large: { width: 48, height: 48 },
    },
  } as const
});

const MonogramText = styled(Text, {
  ...typography.labelStandard,
  textAlign: 'center',
  verticalAlign: 'middle',
  color: '$onNeutral3',
});

/**
 * DSC Avatar Component
 *
 * @param style - Visual style of the avatar
 * ```tsx
 * <Avatar style="image" imageUrl="https://..." />
 * <Avatar style="monogram" monogramChar="W" />
 * <Avatar style="icon" icon={<UserIcon />} />
 * ```
 *
 * @param size - Size variant of the avatar
 * ```tsx
 * <Avatar size="small" />
 * <Avatar size="standard" />
 * <Avatar size="large" />
 * ```
 *
 * @param monogramChar - Character displayed in monogram style
 * ```tsx
 * <Avatar style="monogram" monogramChar="W" />
 * ```
 *
 * @param imageUrl - Remote image URL displayed in image style
 * ```tsx
 * <Avatar style="image" imageUrl="https://..." />
 * ```
 *
 * @param icon - Icon element displayed in icon style
 * ```tsx
 * <Avatar style="icon" icon={Home} />
 * <Avatar style="icon" icon={<UserIcon />} />
 * ```
 *
 * @param styleProps - Additional style props applied to the avatar container
 * ```tsx
 * <Avatar styleProps={{ marginRight: 8 }} />
 * ```
 */
export const Avatar: React.FC<AvatarProps> = ({
  style = 'monogram',
  size = 'standard',
  monogramChar,
  imageUrl,
  icon,
  styleProps,
}) => {
  const transformIcon = useTransformIcon();

  const getIconSize = () => {
    switch (size) {
      case 'large':
        return 24;
      case 'standard':
        return 20;
      case 'small':
        return 16;
      default:
        return 20;
    }
  };

  const iconSize = getIconSize();
  const transformedIcon = style === 'icon' ? transformIcon(icon, iconSize) : null;

  const shouldApplyPadding = style === 'icon' || style === 'monogram';

  return (
    <DscAvatar
      size={size}
      {...styleProps}
      paddingVertical={shouldApplyPadding ? 4 : 0}
      paddingHorizontal={shouldApplyPadding ? 10 : 0}
    >
      {style === 'image' && imageUrl && (
        <Image source={{ uri: imageUrl }} width="100%" height="100%" />
      )}
      {style === 'monogram' &&
        typeof monogramChar === 'string' &&
        monogramChar.length === 1 && (
          <MonogramText>{monogramChar}</MonogramText>
        )}
      {style === 'icon' && transformedIcon}
    </DscAvatar>
  );
};

export default Avatar;
