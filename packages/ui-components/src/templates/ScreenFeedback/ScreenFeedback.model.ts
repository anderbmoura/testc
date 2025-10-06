import { ViewProps } from 'react-native';
import { ReactElement } from 'react';
import type { TopAppBarProps } from '../../components/TopAppBar/TopAppBar.model';
import type { FeedbackIllustrationProps } from '../../components/FeedbackIllustration/FeedbackIllustration.model';
import type { ContentCardProps } from '../lists/ContentCard/ContentCard.model';
import type { ButtonRowProps } from '../buttons/ButtonRow/ButtonRow.model';
import type { ScreenFooterProps } from '../../components/ScreenFooter/ScreenFooter.model';

/**
 * Props do componente ScreenFeedback
 *
 * Template que organiza uma tela completa de feedback com:
 * - TopAppBar no topo
 * - FeedbackIllustration centralizada com título opcional
 * - Conteúdo scrollável no corpo (ContentCard, ButtonRow, etc)
 * - ScreenFooter fixo no rodapé
 *
 * @example
 * ```tsx
 * <ScreenFeedback title="Operação concluída">
 *   <TopAppBar variant="small" title="Label" />
 *
 *   <FeedbackIllustration status="success" />
 *
 *   <ContentCard>
 *     <ListItem textOnLeft="Label" labelBottomLeft="Text" />
 *   </ContentCard>
 *
 *   <ButtonRow>
 *     <IconButtonText icon={<Icon />}>Label</IconButtonText>
 *   </ButtonRow>
 *
 *   <ScreenFooter variant="button">
 *     <Button>Button</Button>
 *   </ScreenFooter>
 * </ScreenFeedback>
 * ```
 */
export interface ScreenFeedbackProps extends Omit<ViewProps, 'children'> {
  /**
   * Título opcional exibido abaixo do FeedbackIllustration.
   * Quando não fornecido, o título não será renderizado.
   */
  title?: string;

  /**
   * Componentes filhos permitidos que serão organizados automaticamente:
   * - TopAppBar: renderizado no topo
   * - FeedbackIllustration: renderizada centralizada
   * - TitleLarge: título opcional (renderizado automaticamente via prop title)
   * - ContentCard: card de conteúdo no corpo scrollável
   * - ButtonRow: linha de botões de ação
   * - ScreenFooter: footer fixo no rodapé
   */
  children:
    | ReactElement<TopAppBarProps>
    | ReactElement<FeedbackIllustrationProps>
    | ReactElement<ContentCardProps>
    | ReactElement<ButtonRowProps>
    | ReactElement<ScreenFooterProps>
    | Array<
        | ReactElement<TopAppBarProps>
        | ReactElement<FeedbackIllustrationProps>
        | ReactElement<ContentCardProps>
        | ReactElement<ButtonRowProps>
        | ReactElement<ScreenFooterProps>
      >;
}

/**
 * Resultado da separação dos children do ScreenFeedback
 */
export interface ScreenFeedbackChildrenSeparation {
  /** TopAppBar que será renderizado no topo */
  topAppBar: React.ReactNode | null;

  /** FeedbackIllustration que será renderizada centralizada */
  feedbackIllustration: React.ReactNode | null;

  /** Array de componentes que serão renderizados no corpo scrollável */
  bodyContent: React.ReactNode[];

  /** ScreenFooter que será renderizado fixo no rodapé */
  screenFooter: React.ReactNode | null;
}
