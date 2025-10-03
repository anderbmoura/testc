import React from 'react';
import { styled, XStack, YStack } from 'tamagui';
import { CardCarouselHorizontalProps } from './CardCarouselHorizontal.model';
import { BodySmall, LabelSmall } from '../Typography';

const Container = styled(XStack, {
  name: 'CardCarouselHorizontal',
  width: 345,
  overflow: 'hidden',
  borderRadius: '$big',
  gap: '$nano',
  alignItems: 'stretch',
  justifyContent: 'space-between',
  cursor: 'pointer',
  variants: {
    theme: {
      neutral: {
        backgroundColor: '$neutralBg2',

        hoverStyle: {
          backgroundColor: '$neutralHover1',
        },

        pressStyle: {
          backgroundColor: '$neutralPressed1',
        },

        focusStyle: {
          outlineWidth: 2,
          outlineStyle: 'solid',
          outlineColor: '$neutral10',
          outlineOffset: 2,
        },
      },
      highlight: {
        backgroundColor: '$highlight2',

        hoverStyle: {
          backgroundColor: '$highlightHover1',
        },

        pressStyle: {
          backgroundColor: '$highlightPressed1',
        },

        focusStyle: {
          outlineWidth: 2,
          outlineStyle: 'solid',
          outlineColor: '$highlight10',
          outlineOffset: 2,
        },
      },
      accent: {
        backgroundColor: '$accent2',

        hoverStyle: {
          backgroundColor: '$accentHover1',
        },

        pressStyle: {
          backgroundColor: '$accentPressed1',
        },

        focusStyle: {
          outlineWidth: 2,
          outlineStyle: 'solid',
          outlineColor: '$accent10',
          outlineOffset: 2,
        },
      },
    },

    hasAction: {
      true: {
        cursor: 'pointer',
      },
      false: {
        cursor: 'default',
      },
    },
  } as const,
});

const ContentWrapper = styled(YStack, {
  name: 'CardCarouselHorizontalContent',
  flex: 1,
  padding: '$tiny',
  gap: '$quark',
  justifyContent: 'center',
});

const SlotContainer = styled(YStack, {
  name: 'CardCarouselHorizontalSlot',
  flex: 0,
  flexShrink: 0,
  width: 130,
  alignSelf: 'stretch',
  overflow: 'hidden',
});

/**
 * Componente DSC CardCarouselHorizontal
 *
 * @param theme - Variante visual que determina o tema (cor) do componente
 * ```tsx
 * <CardCarouselHorizontal theme="neutral" title="Título" description="Descrição" />
 * <CardCarouselHorizontal theme="highlight" title="Destaque" description="Conteúdo em destaque" />
 * <CardCarouselHorizontal theme="accent" title="Acento" description="Conteúdo com acento" />
 * ```
 *
 * @param title - Título principal exibido no canto superior esquerdo do carousel
 * ```tsx
 * <CardCarouselHorizontal title="Título do Card" description="Descrição..." />
 * <CardCarouselHorizontal title="Título muito longo que será truncado automaticamente após duas linhas" />
 * ```
 *
 * @param description - Descrição opcional exibida abaixo do título (máximo 4 linhas)
 * ```tsx
 * <CardCarouselHorizontal
 *   title="Título"
 *   description="Esta é uma descrição mais detalhada que aparece abaixo do título."
 * />
 * <CardCarouselHorizontal
 *   title="Sem descrição"
 * />
 * ```
 *
 * @param children - Slot de conteúdo que aceita qualquer componente React (dimensões fixas: 130x132px)
 * ```tsx
 * <CardCarouselHorizontal
 *   title="Com ícone"
 *   description="Card com ícone personalizado"
 * >
 *   <Icon size={48} />
 * </CardCarouselHorizontal>
 *
 * <CardCarouselHorizontal
 *   title="Com imagem"
 *   description="Card com imagem personalizada"
 * >
 *   <Image source={{ uri: 'https://example.com/image.jpg' }} style={{ width: 130, height: 132 }} />
 * </CardCarouselHorizontal>
 * ```
 *
 * @param onPress - Callback opcional para interação de pressionamento (torna o card interativo)
 * ```tsx
 * <CardCarouselHorizontal
 *   title="Card interativo"
 *   description="Clique para interagir"
 *   onPress={() => console.log('Card pressionado')}
 * />
 *
 * <CardCarouselHorizontal
 *   title="Card não interativo"
 *   description="Sem callback de pressionamento"
 * />
 * ```
 *
 * @param testID - ID de teste para testes automatizados
 * ```tsx
 * <CardCarouselHorizontal
 *   title="Card testável"
 *   description="Com ID para testes"
 *   testID="card-carousel-test"
 * />
 * ```
 */
export const CardCarouselHorizontal: React.FC<CardCarouselHorizontalProps> = ({
  theme = 'neutral',
  title,
  description,
  children,
  onPress,
  testID,
}) => {
  return (
    <Container
      theme={theme}
      hasAction={!!onPress}
      onPress={onPress}
      testID={testID}
      tabIndex={onPress ? 0 : undefined}
      role={onPress ? 'button' : undefined}
      aria-label={title}
    >
      <ContentWrapper>
        <LabelSmall color="$color10">{title}</LabelSmall>

        {description && (
          <BodySmall color="$onNeutral2">{description}</BodySmall>
        )}
      </ContentWrapper>

      <SlotContainer>{children}</SlotContainer>
    </Container>
  );
};

export default CardCarouselHorizontal;
