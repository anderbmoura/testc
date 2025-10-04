/**
 * Opções de configuração para o Componente Slider DSC.
 *
 * Define as propriedades disponíveis para personalizar o comportamento e a aparência do slider.
 * Compatível com plataformas web e mobile.
 */
export interface SliderProps {
  /**
   * Valor atual do slider.
   * @default 0
   */
  value?: number;

  /**
   * Valor mínimo do slider.
   * @default 0
   */
  min?: number;

  /**
   * Valor máximo do slider.
   * @default 100
   */
  max?: number;

  /**
   * Incremento de passo para o slider.
   * @default 1
   */
  step?: number;

  /**
   * Rótulo exibido acima ou ao lado do slider.
   * Caso especial: 'free' exibe o rótulo junto à linha do slider.
   */
  label?: string;

  /**
   * Se deve mostrar a porcentagem de progresso.
   * @default true
   */
  showProgress?: boolean;

  /**
   * Se o slider está desabilitado.
   * @default false
   */
  disabled?: boolean;

  /**
   * Função de callback disparada quando o valor muda.
   */
  onValueChange?: (value: number) => void;

  /**
   * ID de teste para testes automatizados.
   */
  testID?: string;
}
