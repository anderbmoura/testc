import { NavArrowUp } from 'iconoir-react-native';
import { Accordion as Accord, Square } from 'tamagui';
import {
  AccordionProps,
  AccordionContainer,
  AccordionTrigger,
  AccordionContent,
} from './index';
import { BodyStandardSemibold } from '../Typography';
import { useTransformIcon } from '../../utils';
import { useState, PropsWithChildren, useMemo, useEffect } from 'react';
import { iconSize } from '../../config/tokens/iconSize/iconSize';

/**
 * Accordion
 *
 * Componente de accordion para exibir conteúdo expansível.
 *
 * @component
 * @param {string} title - Título exibido no cabeçalho do Accordion.
 * @param {boolean} [collapsed=false] - Define se o Accordion inicia colapsado.
 * @param {boolean} [disabled=false] - Desabilita a interação com o Accordion.
 * @param {React.ReactNode} children - Conteúdo a ser exibido dentro do Accordion.
 * @returns {JSX.Element} Elemento Accordion renderizado.
 */
export const Accordion: React.FC<PropsWithChildren<AccordionProps>> = ({
  title,
  disabled = false,
  collapsed = true,
  children,
  ...props
}) => {
  /**
   * collapsed state handler
   */
  const [value, setValue] = useState<string[]>([]);
  const isOpen = value.includes('item1');
  useEffect(() => {
    if (disabled) {
      setValue([]);
    } else {
      setValue(!collapsed ? ['item1'] : []);
    }
  }, [collapsed, disabled]);

  /**
   * collapsed style props
   */
  const collapsedProps = isOpen ? { collapsed: true } : { collapsed: false };

  /**
   * icon transformation
   */
  const transformIcon = useTransformIcon();
  const ArrowIcon = useMemo(() => {
    return transformIcon(
      NavArrowUp,
      iconSize.small,
      disabled ? '$onDisabled' : '$onNeutral3'
    );
  }, [transformIcon, disabled]);

  return (
    <AccordionContainer
      overflow="hidden"
      type="multiple"
      value={value}
      onValueChange={(value: string[]) => setValue(value)}
      disabled={disabled}
      {...props}
      {...collapsedProps}
    >
      <Accord.Item value="item1">
        <AccordionTrigger unstyled disabled={disabled} {...collapsedProps}>
          {() => (
            <>
              <BodyStandardSemibold
                color={disabled ? '$onDisabled' : '$onNeutral1'}
              >
                {title}
              </BodyStandardSemibold>
              <Square animation={'medium'} rotate={isOpen ? '180deg' : '0deg'}>
                {ArrowIcon}
              </Square>
            </>
          )}
        </AccordionTrigger>
        <Accord.HeightAnimator animation={'quick'}>
          <AccordionContent>{children}</AccordionContent>
        </Accord.HeightAnimator>
      </Accord.Item>
    </AccordionContainer>
  );
};
