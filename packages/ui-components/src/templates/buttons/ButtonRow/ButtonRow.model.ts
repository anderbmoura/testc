import React from 'react';
import { ViewProps } from 'react-native';
import type { IconButtonTextProps } from '../../../components/IconButtonText/IconButtonText.model';

/**
 * Opções de configuração para o Template DSC ButtonRow.
 *
 * Define as propriedades disponíveis para personalizar o comportamento e aparência
 * do container de botões em linha.
 */
export interface ButtonRowProps extends Omit<ViewProps, 'children'> {
  /**
   * Componentes IconButtonText a serem exibidos em linha.
   * Todos os botões terão a mesma largura automaticamente.
   */
  children:
    | React.ReactElement<IconButtonTextProps>
    | React.ReactElement<IconButtonTextProps>[];
}
