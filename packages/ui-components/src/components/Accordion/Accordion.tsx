import { NavArrowUp } from 'iconoir-react-native';
import { Accordion as Accord, Square } from 'tamagui';
import {
  AccordionProps,
  AccordionContainer,
  AccordionTrigger,
  AccordionContent,
  AccordionContentFooter,
} from './index';
import { BodyStandardSemibold, LabelSmall } from '../Typography';
import { useTransformIcon } from '../../utils';
import { useState, PropsWithChildren, useMemo, useEffect } from 'react';
import { iconSize } from '../../config/tokens/iconSize/iconSize';
import { AccordionTypeVariants } from './Accordion.styles';

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
  footerProps,
  accordionStyle = 'default',
  ...props
}) => {
  /**
   * collapsed state handler
   */
  const [value, setValue] = useState<string[]>([]);
  const isOpen = value.includes('item1');
  useEffect(() => {
    setValue(disabled ? [] : !collapsed ? ['item1'] : []);
  }, [collapsed, disabled]);

  /**
   * style props
   */
  const styleProps = {
    ...AccordionTypeVariants[accordionStyle],
    ...(accordionStyle === 'default' ? { collapsed: isOpen } : {}),
  };
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
      {...styleProps}
    >
      <Accord.Item value="item1">
        <AccordionTrigger unstyled disabled={disabled} {...styleProps}>
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
          <AccordionContent>
            {children}
            {footerProps && (
              <AccordionContentFooter>
                <LabelSmall>{footerProps.label}</LabelSmall>
                <LabelSmall>{footerProps.value}</LabelSmall>
              </AccordionContentFooter>
            )}
          </AccordionContent>
        </Accord.HeightAnimator>
      </Accord.Item>
    </AccordionContainer>
  );
};
