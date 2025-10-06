import { ReactNode } from 'react';

/**
 * Variantes disponíveis para o TopAppBar
 * - large: Barra de aplicativo grande com título proeminente
 * - small: Barra de aplicativo compacta com título ao lado da navegação
 * - select: Barra para seleção com título, subtítulo e dropdown
 * - home: Barra para tela inicial com campo de busca integrado
 * - floating: Barra flutuante para sobreposição em conteúdo
 */
export type TopAppBarVariant =
  | 'large'
  | 'small'
  | 'select'
  | 'home'
  | 'floating';

/**
 * Propriedades do componente TopAppBar
 * Barra de aplicativo adaptável com múltiplas variantes para diferentes casos de uso
 * Todos os elementos devem ser passados explicitamente via props
 */
export interface TopAppBarProps {
  /** Variante visual e funcional da barra de aplicativo */
  variant?: TopAppBarVariant;

  /** Título principal exibido na barra */
  title?: string;

  /** Subtítulo exibido abaixo do título (usado na variante select) */
  subtitle?: string;

  /**
   * Se true, aplica sombra à barra (normalmente ativado durante scroll)
   * @default false
   */
  elevated?: boolean;

  /**
   * Placeholder do campo de busca (variante home)
   * @default 'Pesquisar'
   */
  searchPlaceholder?: string;

  /** Callback executado quando o texto de busca é alterado (variante home) */
  onSearchChange?: (text: string) => void;

  // Elementos específicos para cada posição
  /** Avatar do usuário (usado nas variantes select e home) */
  avatar?: ReactNode;

  /** Primeiro botão de ação (lado direito) */
  button1?: ReactNode;

  /** Segundo botão de ação (lado direito) */
  button2?: ReactNode;

  /** Terceiro botão de ação (lado direito) */
  button3?: ReactNode;

  /** Elementos customizados para leading (uso avançado) */
  leading?: ReactNode;

  /** Elementos customizados para trailing (uso avançado) */
  trailing?: ReactNode;
}
