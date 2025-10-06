import React from 'react';
import { ViewProps } from 'react-native';

export interface StoriesItem {
  /**
   * URL ou URI da imagem a ser exibida
   */
  imageSource: string;

  /**
   * Identificador único do item (opcional)
   */
  id?: string;
}

export interface StoriesProps extends Omit<ViewProps, 'children'> {
  /**
   * Array de imagens a serem exibidas sequencialmente
   */
  images: StoriesItem[];

  /**
   * Tempo em milissegundos que cada imagem fica visível
   * @default STORIES_CONFIG.DEFAULT_DURATION
   */
  duration?: number;

  /**
   * Se deve exibir um blur por cima das imagens
   * @default false
   */
  showBlur?: boolean;

  /**
   * Callback executado quando uma barra de progresso é clicada
   * @param index - Índice da imagem selecionada
   */
  onProgressBarPress?: (index: number) => void;

  /**
   * Callback executado quando o item atual muda
   * @param index - Índice da imagem atual
   */
  onItemChange?: (index: number) => void;

  /**
   * Conteúdo a ser renderizado por cima das imagens
   */
  children?: React.ReactNode;

  /**
   * Se deve pausar a progressão automática
   * @default false
   */
  paused?: boolean;

  /**
   * Intensidade do blur (0-10)
   * @default STORIES_CONFIG.DEFAULT_BLUR_INTENSITY
   */
  blurIntensity?: number;

  /**
   * Callback executado quando todas as imagens terminam de carregar
   */
  onImagesLoaded?: () => void;

  /**
   * Callback executado quando uma imagem falha ao carregar
   * @param url - URL da imagem que falhou
   * @param index - Índice da imagem
   */
  onImageLoadError?: (url: string, index: number) => void;
}
