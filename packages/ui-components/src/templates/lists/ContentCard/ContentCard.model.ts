import React from 'react';
import { ViewProps } from 'react-native';
import type { ListItemProps } from '../../../components/ListItem/ListItem.model';
import type { ListFooterProps } from '../../../components/ListFooter/ListFooter.model';

/**
 * Opções de configuração para o Template DSC ContentCard.
 */
export interface ContentCardProps extends Omit<ViewProps, 'children'> {
  /**
   * Título exibido no cabeçalho.
   */
  title?: string;

  /**
   * Nome do botão de ação exibido no cabeçalho.
   */
  buttonActionName?: string;

  /**
   * Callback executado quando o botão de ação é pressionado.
   */
  onButtonAction?: () => void;

  /**
   * Componentes ListItem e ListFooter a serem exibidos dentro do Card.
   */
  children:
    | React.ReactElement<ListItemProps | ListFooterProps>
    | React.ReactElement<ListItemProps | ListFooterProps>[];

  /**
   * Controla se o cabeçalho (ListHeading) será exibido.
   * @default true
   */
  showListHeading?: boolean;
}
