import { StackProps } from '@tamagui/core';
import { ButtonProps, ImageProps } from 'tamagui';

/**
 * Estilos visuais disponíveis para o componente Avatar.
 *
 * - `monogram`: Exibe um único caractere centralizado dentro do avatar.
 * - `image`: Exibe uma imagem de perfil (local ou remota).
 * - `icon`: Exibe um elemento de ícone personalizado.
 */
export type AvatarStyle = 'monogram' | 'image' | 'icon';

/**
 * Tamanhos disponíveis para o componente Avatar.
 *
 * - `small`: Avatar compacto.
 * - `standard`: Tamanho padrão.
 * - `large`: Avatar ampliado.
 */
export type AvatarSize = 'small' | 'standard' | 'large';

/**
 * Opções de espaçamento para avatares empilhados.
 *
 * Controla a sobreposição horizontal entre os avatares em uma pilha.
 *
 * - `small`: Espaçamento apertado com maior sobreposição.
 * - `standard`: Espaçamento moderado.
 * - `large`: Espaçamento amplo com menor sobreposição.
 */
export type AvatarSpacing = 'small' | 'standard' | 'large';

/**
 * Representa um único caractere usado no estilo monograma.
 *
 * Deve ser uma string contendo exatamente um caractere.
 */
export type MonogramChar = string;

/**
 * Opções de configuração para o componente DSC Avatar.
 *
 * Define as propriedades disponíveis para personalizar o comportamento e aparência do avatar.
 */
export interface AvatarProps {
  /**
   * Estilo visual do avatar.
   * Pode ser `monogram`, `image` ou `icon`.
   */
  style?: AvatarStyle;

  /**
   * Tamanho do avatar.
   * Se omitido, será herdado do AvatarStack.
   */
  size?: AvatarSize;

  /**
   * Caractere exibido no estilo monograma.
   * Deve ser um único caractere.
   */
  monogramChar?: MonogramChar;

  /**
   * Fonte da imagem exibida no estilo imagem.
   * Aceita imagens locais via `require()` ou remotas via `{ uri }`.
   */
  imageSource?: ImageProps['source'];

  /**
   * Elemento de ícone exibido no estilo ícone.
   * Herdado do sistema de ícones do Tamagui Button.
   */
  icon?: ButtonProps['icon'];

  /**
   * Propriedades adicionais de estilo aplicadas ao contêiner do avatar.
   * Útil para posicionamento em pilhas ou ajustes de layout.
   */
  styleProps?: StackProps;
}

/**
 * Opções de configuração para o componente AvatarStack.
 *
 * Define as propriedades disponíveis para personalizar o comportamento e layout de avatares empilhados.
 */
export interface AvatarStackProps {
  /**
   * Número máximo de avatares a serem exibidos.
   * Se omitido, todos os filhos serão renderizados.
   */
  count?: number;

  /**
   * Espaçamento horizontal entre os avatares empilhados.
   * Controla o nível de sobreposição.
   */
  spacing?: AvatarSpacing;

  /**
   * Tamanho dos avatares dentro da pilha.
   * Propagado automaticamente para os avatares filhos.
   */
  size?: AvatarSize;

  /**
   * Elementos de avatar passados como filhos para a pilha.
   */
  children: React.ReactNode;
}
