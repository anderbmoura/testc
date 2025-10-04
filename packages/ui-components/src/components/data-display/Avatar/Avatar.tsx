import React from 'react';
import { styled, YStack, Text, Image } from 'tamagui';
import { AvatarProps } from './Avatar.model';
import { typography } from '../../../config/fonts/typography';

import { useTransformIcon } from '../../../utils';
import { borderRadius } from '../../../config/tokens/borderRadius/borderRadius';
import { iconSize } from '../../../config/tokens/iconSize/iconSize';

const DscAvatar = styled(YStack, {
  name: 'DscAvatar',
  alignItems: 'center',
  justifyContent: 'center',
  borderRadius: borderRadius.pill,
  overflow: 'hidden',
  backgroundColor: '$neutralBg3',

  variants: {
    size: {
      small: { width: 24, height: 24 },
      standard: { width: 36, height: 36 },
      large: { width: 48, height: 48 },
    },
  } as const,
});

const MonogramText = styled(Text, {
  ...typography.labelStandard,
  textAlign: 'center',
  verticalAlign: 'middle',
  color: '$onNeutral3',
});

/**
 * Componente Avatar da DSC
 *
 * @param style - Estilo visual do avatar
 * ```tsx
 * <Avatar style="image" imageUrl="https://..." />
 * <Avatar style="monogram" monogramChar="W" />
 * <Avatar style="icon" icon={<UserIcon />} />
 * ```
 *
 * @param size - Variante de tamanho do avatar
 * ```tsx
 * <Avatar size="small" />
 * <Avatar size="standard" />
 * <Avatar size="large" />
 * ```
 *
 * @param monogramChar - Caractere exibido no estilo monograma
 * ```tsx
 * <Avatar style="monogram" monogramChar="W" />
 * ```
 *
 * @param imageSource - Fonte da imagem exibida no estilo imagem.
 * Aceita tanto imagens locais via `require()` quanto remotas via `{ uri }`.
 * ```tsx
 * <Avatar style="image" imageSource={require('./logo.png')} />
 * <Avatar style="image" imageSource={{ uri: 'https://example.com/image.png' }} />
 * ```
 *
 * @param icon - Elemento de ícone exibido no estilo ícone
 * ```tsx
 * <Avatar style="icon" icon={Home} />
 * <Avatar style="icon" icon={<UserIcon />} />
 * ```
 *
 * @param styleProps - Propriedades de estilo adicionais aplicadas ao contêiner do avatar
 * ```tsx
 * <Avatar styleProps={{ marginRight: 8 }} />
 * ```
 */
export const Avatar: React.FC<AvatarProps> = ({
  style = 'monogram',
  size = 'standard',
  monogramChar,
  imageSource,
  icon,
  styleProps,
}) => {
  const transformIcon = useTransformIcon();

  const getIconSizeMapping = () => {
    switch (size) {
      case 'small':
        return iconSize.small;
      case 'standard':
        return iconSize.medium;
      case 'large':
        return iconSize.large;
    }
  };

  const iconSizeMapping = getIconSizeMapping();
  const transformedIcon =
    style === 'icon' ? transformIcon(icon, iconSizeMapping) : null;

  const shouldApplyPadding = style === 'icon' || style === 'monogram';

  return (
    <DscAvatar
      size={size}
      {...styleProps}
      paddingVertical={shouldApplyPadding ? 4 : 0}
      paddingHorizontal={shouldApplyPadding ? 10 : 0}
    >
      {style === 'image' && imageSource && (
        <Image source={imageSource} width="100%" height="100%" />
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
