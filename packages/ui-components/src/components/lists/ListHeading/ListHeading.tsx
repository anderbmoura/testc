import React from 'react';
import { XStack, YStack, styled } from 'tamagui';
import { NavArrowRight } from 'iconoir-react-native';
import { BodyLargeSemibold, LabelSmall } from '../../data-display/Typography';
import Button from '../../buttons/Button';
import { IconButton } from '../../buttons/IconButton';
import { useTransformIcon } from '../../../utils';
import type { ListHeadingProps } from './ListHeading.model';
import { iconSize } from '../../../config/tokens/iconSize/iconSize';

const Container = styled(XStack, {
  name: 'ListHeadingContainer',
  width: '100%',
  alignItems: 'center',
  justifyContent: 'space-between',
  gap: '$nano',

  variants: {
    size: {
      standard: {
        paddingVertical: '$nano',
        paddingHorizontal: '$tiny',
        minHeight: 44,
      },
      small: {
        paddingVertical: '$none',
        paddingHorizontal: '$tiny',
        minHeight: 32,
      },
    },

    configuration: {
      simple: {
        justifyContent: 'center',
      },
      button: {
        justifyContent: 'space-between',
      },
      iconButton: {
        justifyContent: 'space-between',
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
 *   configuration="iconButton"
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

    if (configuration === 'iconButton') {
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
