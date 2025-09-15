import React from 'react';
import { CarouselHorizontalContainer } from './CarouselHorizontal.styles';
import { CarouselHorizontalHeader } from './components/CarouselHorizontalHeader';
import { CarouselHorizontalContent } from './components/CarouselHorizontalContent';
import type { CarouselHorizontalProps } from './CarouselHorizontal.model';

/**
 * Template DSC CarouselHorizontal
 *
 * Container que organiza cards CardCarouselHorizontal em um carousel horizontal rolável.
 * Possui título opcional e botão de ação opcional no header. O conteúdo é rolável
 * horizontalmente através dos cards.
 *
 * @example
 * ```tsx
 * // Exemplo completo com título e botão de ação
 * <CarouselHorizontal
 *   title="Produtos Recomendados"
 *   buttonActionName="Ver todos"
 *   onButtonAction={() => console.log('Ver todos produtos')}
 * >
 *   <CardCarouselHorizontal
 *     title="Produto 1"
 *     description="Descrição do produto 1"
 *     theme="highlight"
 *   />
 *   <CardCarouselHorizontal
 *     title="Produto 2"
 *     description="Descrição do produto 2"
 *     theme="accent"
 *   />
 * </CarouselHorizontal>
 *
 * // Exemplo apenas com título
 * <CarouselHorizontal title="Ofertas Especiais">
 *   <CardCarouselHorizontal title="Oferta 1" theme="neutral" />
 *   <CardCarouselHorizontal title="Oferta 2" theme="highlight" />
 * </CarouselHorizontal>
 *
 * // Exemplo sem header (somente carousel)
 * <CarouselHorizontal>
 *   <CardCarouselHorizontal title="Card 1" theme="accent" />
 *   <CardCarouselHorizontal title="Card 2" theme="neutral" />
 * </CarouselHorizontal>
 * ```
 */
export const CarouselHorizontal: React.FC<CarouselHorizontalProps> = ({
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
    <CarouselHorizontalContainer>
      {(title || buttonActionName) && (
        <CarouselHorizontalHeader {...headerProps} />
      )}

      <CarouselHorizontalContent {...contentProps} />
    </CarouselHorizontalContainer>
  );
};

export default CarouselHorizontal;
