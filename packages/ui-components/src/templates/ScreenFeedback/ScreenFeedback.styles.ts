import { styled, View, ScrollView, YStack } from 'tamagui';

/**
 * Container principal do ScreenFeedback
 * Ocupa toda a altura disponível da tela
 */
export const StyledScreenFeedbackContainer = styled(View, {
  name: 'StyledScreenFeedbackContainer',
  flex: 1,
  height: '100%',
  backgroundColor: '$neutralBg1',
});

/**
 * ScrollView para o conteúdo do body
 * Permite scroll quando o conteúdo excede a altura disponível
 */
export const StyledBodyScrollView = styled(ScrollView, {
  name: 'StyledBodyScrollView',
  flex: 1,
  width: '100%',
});

/**
 * Container do conteúdo do body com padding e gap
 * Organiza FeedbackIllustration, TitleLarge, ContentCard, ButtonRow, etc
 * Centraliza horizontalmente todos os elementos
 */
export const StyledBodyContent = styled(YStack, {
  name: 'StyledBodyContent',
  paddingTop: '$micro',
  paddingBottom: '$none',
  alignItems: 'stretch',
  width: '100%',
});

/**
 * Container para centralizar a FeedbackIllustration
 * Mantém 100% da largura mas centraliza o conteúdo
 */
export const StyledFeedbackIllustrationWrapper = styled(View, {
  name: 'StyledFeedbackIllustrationWrapper',
  width: '100%',
  alignItems: 'center',
  justifyContent: 'center',
});

/**
 * Container para o título do feedback
 * Alinha à esquerda e controla espaçamento
 */
export const StyledTitleWrapper = styled(View, {
  name: 'StyledTitleWrapper',
  width: '100%',
  alignItems: 'flex-start',
  marginBottom: '$smaller',
  marginTop: '$smaller',
  paddingHorizontal: '$tiny',
});

/**
 * Container fixo para o ScreenFooter
 * Mantém o footer sempre visível no rodapé
 */
export const StyledFooterContainer = styled(View, {
  name: 'StyledFooterContainer',
  width: '100%',
});
