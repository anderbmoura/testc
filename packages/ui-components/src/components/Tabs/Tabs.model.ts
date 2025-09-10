/**
 * Define as variantes disponíveis para o componente Tabs.
 *
 * - `'small'`: Variante para Tabs pequenas.
 * - `'standard'`: Variante padrão para Tabs.
 * - `'large'`: Variante para Tabs grandes.
 */
export type TabsVariant = 'small' | 'standard' | 'large';

/**
 * Define a estrutura de uma opção (Tab) no componente Tabs.
 */
export interface TabOption<T extends string> {
  /**
   * Chave única que identifica a Tab.
   */
  key: T;

  /**
   * Texto exibido na Tab.
   * Se não for fornecido, a Tab será exibida sem label.
   */
  label?: string;

  /**
   * Define se a Tab deve ser exibida.
   */
  show: boolean;

  /**
   * Ícone opcional exibido à esquerda do label da Tab.
   */
  leftIcon?: React.ReactNode;

  /**
   * Ícone opcional exibido à direita do label da Tab.
   */
  rightIcon?: React.ReactNode;
}

/**
 * Opções de configuração para o Componente DSC Tabs.
 *
 * Define as propriedades disponíveis para personalizar o comportamento e aparência do Tabs.
 */
export interface TabsProps<T extends string> {
  /**
   * Variante visual que altera o tamanho do componente Tabs.
   * @default 'standard'
   */
  variant?: TabsVariant;

  /**
   * Chave única da Tab atualmente selecionada.
   */
  selectedTabKey?: T;

  /**
   * Função chamada ao pressionar uma Tab. Recebe como parâmetro as informações da Tab selecionada.
   */
  onTabPress: (tab: TabOption<T>) => void;

  /**
   * Lista de opções (Tabs) que serão exibidas no componente.
   */
  tabItems: TabOption<T>[];
}

/**
 * Opções de configuração para o Componente DSC TabItem.
 *
 * Define as propriedades disponíveis para personalizar o comportamento e aparência do TabItem.
 */
export interface TabItemProps {
  /**
   * Texto exibido na Tab.
   */
  label?: string;

  /**
   * Indica se a Tab está selecionada.
   */
  isSelected: boolean;

  /**
   * Variante visual que altera o tamanho do componente TabItem.
   */
  variant: TabsVariant;

  /**
   * Função chamada ao pressionar a Tab.
   */
  onPress: () => void;

  /**
   * Ícone opcional exibido à esquerda do label da Tab.
   */
  leftIcon?: React.ReactNode;

  /**
   * Ícone opcional exibido à direita do label da Tab.
   */
  rightIcon?: React.ReactNode;

  /**
   * Indica se o border radius esquerdo deve ser aplicado.
   */
  applyLeftBorderRadius?: boolean;

  /**
   * Indica se o border radius direito deve ser aplicado.
   */
  applyRightBorderRadius?: boolean;
}
