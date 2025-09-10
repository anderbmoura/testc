import { AccordionContentProps } from 'tamagui';
/**
 * Propriedades do componente Accordion.
 */
export interface AccordionProps extends AccordionContentProps {
  /**
   * Título exibido no cabeçalho do Accordion.
   */
  title: string;
  /**
   * Define se o Accordion inicia colapsado.
   * @default false
   */
  collapsed?: boolean;
  /**
   * Desabilita a interação com o Accordion.
   * @default false
   */
  disabled?: boolean;
}
