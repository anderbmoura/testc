import React from 'react';
import { CarouselVerticalContainer } from './CarouselVertical.styles';
import { CarouselVerticalHeader } from './components/CarouselVerticalHeader';
import { CarouselVerticalContent } from './components/CarouselVerticalContent';
import type { CarouselVerticalProps } from './CarouselVertical.model';

/**
 * Template DSC CarouselVertical
 *
 * Container que organiza cards CardCarouselVertical em um carousel horizontal rolável.
 * Possui título opcional e botão de ação opcional no header. O conteúdo é rolável
 * horizontalmente através dos cards.
 *
 * @example
 * ```tsx
 * // Exemplo completo com título e botão de ação
 * <CarouselVertical
 *   title="Produtos Recomendados"
 *   buttonActionName="Ver todos"
 *   onButtonAction={() => console.log('Ver todos produtos')}
 * >
 *   <CardCarouselVertical
 *     source={require('./assets/produto1.jpg')}
 *     variant="highlight"
 *   />
 *   <CardCarouselVertical
 *     source={require('./assets/produto2.jpg')}
 *     variant="success"
 *   />
 * </CarouselVertical>
 *
 * // Exemplo apenas com título
 * <CarouselVertical title="Ofertas Especiais">
 *   <CardCarouselVertical variant="accent" />
 *   <CardCarouselVertical variant="warning" />
 * </CarouselVertical>
 *
 * // Exemplo sem header (somente carousel)
 * <CarouselVertical>
 *   <CardCarouselVertical variant="highlight" />
 *   <CardCarouselVertical variant="success" />
 * </CarouselVertical>
 * ```
 */
export const CarouselVertical: React.FC<CarouselVerticalProps> = ({
  title,
  buttonActionName,
  onButtonAction,
  children,
}) => {
  const headerProps = {
    title,
    buttonActionName,
    onButtonAction,
  };

  const contentProps = {
    children,
  };

  return (
    <CarouselVerticalContainer>
      {(title || buttonActionName) && (
        <CarouselVerticalHeader {...headerProps} />
      )}

      <CarouselVerticalContent {...contentProps} />
    </CarouselVerticalContainer>
  );
};

export default CarouselVertical;
