import React from 'react';
import { TitleLarge } from '../../components/Typography';
import { ScreenFeedbackProps } from './ScreenFeedback.model';
import { useScreenFeedbackChildrenSeparation } from './hooks/useScreenFeedbackChildrenSeparation';
import {
  StyledScreenFeedbackContainer,
  StyledBodyScrollView,
  StyledBodyContent,
  StyledFeedbackIllustrationWrapper,
  StyledFooterContainer,
  StyledTitleWrapper,
} from './ScreenFeedback.styles';
import { View } from 'tamagui';

/**
 * ScreenFeedback - Template para telas de feedback
 *
 * Componente template que organiza automaticamente uma estrutura completa
 * de tela de feedback com:
 * - TopAppBar fixo no topo
 * - FeedbackIllustration centralizada com título abaixo
 * - Conteúdo scrollável no corpo (ContentCard, ButtonRow, etc)
 * - ScreenFooter fixo no rodapé
 *
 * ## Características:
 * - Separa automaticamente os children nas seções apropriadas
 * - FeedbackIllustration sempre centralizada
 * - Título (TitleLarge) exibido abaixo da ilustração
 * - Body com scroll automático quando conteúdo excede altura disponível
 * - Footer sempre visível e fixo no rodapé da tela
 * - Padding e spacing consistentes seguindo design system
 * - ButtonRow recebe espaçamento superior adicional
 *
 * ## Como funciona a separação:
 * - **TopAppBar**: Identificado pelo displayName ou props específicas (variant: small, medium, large, etc)
 * - **FeedbackIllustration**: Sempre renderizada centralizada com título abaixo
 * - **Body Content**: Todos os outros elementos (ContentCard, ButtonRow, IconButtonText)
 * - **ScreenFooter**: Identificado pelo displayName ou props específicas (variant: button, iconButton)
 *
 * @example
 * ```tsx
 * <ScreenFeedback>
 *   <TopAppBar variant="small" title="Label" showBackButton />
 *
 *   <FeedbackIllustration status="success" />
 *
 *   <ContentCard title="Feedback title">
 *     <ListItem textOnLeft="Label" labelBottomLeft="Text" />
 *     <ListItem textOnLeft="Label" labelBottomLeft="Text" />
 *   </ContentCard>
 *
 *   <ButtonRow>
 *     <IconButtonText icon={<Camera />}>Label</IconButtonText>
 *     <IconButtonText icon={<Image />}>Label</IconButtonText>
 *     <IconButtonText icon={<File />}>Label</IconButtonText>
 *     <IconButtonText icon={<Link />}>Label</IconButtonText>
 *   </ButtonRow>
 *
 *   <ScreenFooter variant="button">
 *     <Button>Button</Button>
 *   </ScreenFooter>
 * </ScreenFeedback>
 * ```
 */
export const ScreenFeedback: React.FC<ScreenFeedbackProps> = ({
  title,
  children,
  ...restProps
}) => {
  const { topAppBar, feedbackIllustration, bodyContent, screenFooter } =
    useScreenFeedbackChildrenSeparation(children);

  const isButtonRow = (child: React.ReactNode): boolean => {
    if (!React.isValidElement(child)) return false;

    const childType = child.type as any;
    const displayName = childType?.displayName || childType?.name || '';

    return displayName === 'ButtonRow' || displayName.includes('ButtonRow');
  };

  return (
    <StyledScreenFeedbackContainer {...restProps}>
      {topAppBar}

      <StyledBodyScrollView
        showsVerticalScrollIndicator={false}
        contentContainerStyle={{ flexGrow: 1 }}
      >
        <StyledBodyContent>
          {feedbackIllustration && (
            <>
              <StyledFeedbackIllustrationWrapper>
                {feedbackIllustration}
              </StyledFeedbackIllustrationWrapper>
            </>
          )}
          {/* Título alinhado à esquerda com espaçamento controlado */}
          {title && (
            <StyledTitleWrapper>
              <TitleLarge>{title}</TitleLarge>
            </StyledTitleWrapper>
          )}

          {bodyContent.map((child, index) => {
            if (isButtonRow(child)) {
              return (
                <View
                  key={index}
                  marginTop="$tiny"
                  width="100%"
                  paddingHorizontal="$tiny"
                >
                  {child}
                </View>
              );
            }

            return <React.Fragment key={index}>{child}</React.Fragment>;
          })}
        </StyledBodyContent>
      </StyledBodyScrollView>

      {screenFooter && (
        <StyledFooterContainer>{screenFooter}</StyledFooterContainer>
      )}
    </StyledScreenFeedbackContainer>
  );
};

ScreenFeedback.displayName = 'ScreenFeedback';
