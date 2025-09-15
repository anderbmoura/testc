import React from 'react';
import { XStack, YStack, styled } from 'tamagui';
import { NavArrowRight } from 'iconoir-react-native';
import { BodyLargeSemibold, LabelSmall } from '../Typography';
import Button from '../Button';
import { IconButton } from '../IconButton';
import { useTransformIcon } from '../../utils';
import type { ListHeadingProps } from './ListHeading.model';
import { iconSize } from '../../config/tokens/iconSize/iconSize';

const Container = styled(XStack, {
  name: 'ListHeadingContainer',
  width: '100%',
  alignItems: 'center',
  justifyContent: 'space-between',

  variants: {
    size: {
      standard: {
        paddingHorizontal: '$small',
        paddingVertical: '$nano',
        minHeight: 44,
      },
      small: {
        paddingHorizontal: '$small',
        paddingVertical: 0,
        minHeight: 32,
      },
    },

    configuration: {
      simple: {
        justifyContent: 'center',
      },
      button: {
        paddingRight: '$tiny',
      },
      'icon button': {
        paddingRight: '$quark',
      },
    },
  } as const,
});

const TitleContainer = styled(YStack, {
  name: 'ListHeadingTitleContainer',
  flex: 1,
  justifyContent: 'center',
});

/**
 * Componente DSC ListHeading
 *
 * Cabeçalho para listas com suporte a diferentes tamanhos e configurações.
 * Pode exibir apenas título, título com botão de texto ou título com botão de ícone.
 *
 * @example
 * ```tsx
 * // Configuração simples
 * <ListHeading
 *   title="Minha Lista"
 *   size="standard"
 *   configuration="simple"
 * />
 *
 * // Com botão de texto
 * <ListHeading
 *   title="Produtos"
 *   size="standard"
 *   configuration="button"
 *   buttonText="Ver todos"
 *   onButtonPress={() => console.log('Ver todos pressionado')}
 * />
 *
 * // Com botão de ícone
 * <ListHeading
 *   title="Categoria"
 *   size="small"
 *   configuration="icon button"
 *   onButtonPress={() => console.log('Botão ícone pressionado')}
 * />
 * ```
 */
export const ListHeading: React.FC<ListHeadingProps> = ({
  title,
  size = 'standard',
  configuration = 'simple',
  buttonText,
  buttonIcon,
  onButtonPress,
}) => {
  const transformIcon = useTransformIcon();

  const defaultIcon = transformIcon(
    NavArrowRight,
    size === 'standard' ? iconSize.small : iconSize.tiny,
    '$color8'
  );

  const renderTitle = () => {
    if (size === 'standard') {
      return <BodyLargeSemibold color="$color12">{title}</BodyLargeSemibold>;
    }

    return <LabelSmall color="$color12">{title}</LabelSmall>;
  };

  const renderButton = () => {
    if (configuration === 'button') {
      return (
        <Button
          type="chromeless"
          size={size === 'standard' ? 'standard' : 'small'}
          onPress={onButtonPress}
        >
          {buttonText}
        </Button>
      );
    }

    if (configuration === 'icon button') {
      return (
        <IconButton
          icon={buttonIcon || defaultIcon}
          size={size === 'standard' ? 'standard' : 'small'}
          type="chromeless"
          onPress={onButtonPress}
          color="highlight"
        />
      );
    }

    return null;
  };

  return (
    <Container size={size} configuration={configuration}>
      <TitleContainer>{renderTitle()}</TitleContainer>
      {renderButton()}
    </Container>
  );
};
