import { AccordionContentProps } from 'tamagui';
/**
 * Propriedades do componente Accordion.
 */

type footerProps = {
  label: string;
  value: string;
};

export type accordionStyle = 'default' | 'borderless';

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
  /**
   * Cria o rodapé do Accordion.
   * @default undefined
   */
  footerProps?: footerProps;
  /**
   * Define o estilo do accordion.
   * @default 'default'
   */
  accordionStyle?: accordionStyle;
}
