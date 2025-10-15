import { ViewProps } from 'react-native';
import { ReactElement } from 'react';
import type { TopAppBarProps } from '../../components/navigation/TopAppBar/TopAppBar.model';
import type { ContentCardProps } from '../lists/ContentCard/ContentCard.model';
import type { ButtonRowProps } from '../buttons/ButtonRow/ButtonRow.model';
import type { ScreenFooterProps } from '../../components/layout/ScreenFooter/ScreenFooter.model';
import { GetTokenString } from '@tamagui/core';
import { ValueSectionProps } from '../../components/data-display';
import { SegmentedButtonProps } from '../../components/buttons';

export interface ScreenParametersProps extends Omit<ViewProps, 'children'> {
  /**
   * Espaçamento entre elementos do corpo
   */
  bodyContentGap?: GetTokenString<'space'>;
  bodyContentPaddingTop?: GetTokenString<'space'>;

  /**
   * Componentes filhos permitidos que serão organizados automaticamente:
   * - TopAppBar: renderizado no topo
   * - ValueSection: renderizada centralizada
   * - ContentCard: card de conteúdo no corpo scrollável
   * - ButtonRow: linha de botões de ação
   * - ScreenFooter: footer fixo no rodapé
   */
  children:
    | ReactElement<TopAppBarProps>
    | ReactElement<ValueSectionProps>
    | ReactElement<ContentCardProps>
    | ReactElement<SegmentedButtonProps>
    | ReactElement<ButtonRowProps>
    | ReactElement<ScreenFooterProps>
    | Array<
        | ReactElement<TopAppBarProps>
        | ReactElement<ValueSectionProps>
        | ReactElement<ContentCardProps>
        | ReactElement<SegmentedButtonProps>
        | ReactElement<ButtonRowProps>
        | ReactElement<ScreenFooterProps>
      >;
}

/**
 * Resultado da separação dos children do ScreenFeedback
 */
export interface ScreenParametersChildrenSeparation {
  /** TopAppBar que será renderizado no topo */
  topAppBar: React.ReactNode | null;

  /** Ícone que será renderizado no topo */
  icon: React.ReactNode | null;

  /** ValueSection que será renderizada topo a esquerda */
  valueSection: React.ReactNode | null;

  /** Array de componentes que serão renderizados no corpo scrollável */
  bodyContent: React.ReactNode[];

  /** ScreenFooter que será renderizado fixo no rodapé */
  screenFooter: React.ReactNode | null;
}
