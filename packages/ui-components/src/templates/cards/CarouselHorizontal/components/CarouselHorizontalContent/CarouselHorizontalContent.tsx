import React from 'react';
import { ScrollView } from 'react-native';
import { XStack } from 'tamagui';
import { ContentContainer } from './CarouselHorizontalContent.styles';
import type { CarouselHorizontalContentProps } from './CarouselHorizontalContent.model';

/**
 * Componente responsável por renderizar o conteúdo dos cards no CarouselHorizontal.
 * Organiza os CardCarouselHorizontal horizontalmente em um ScrollView.
 */
export const CarouselHorizontalContent: React.FC<
  CarouselHorizontalContentProps
> = ({ children }) => {
  const childrenArray = React.Children.toArray(children);

  return (
    <ContentContainer>
      <ScrollView
        horizontal
        showsHorizontalScrollIndicator={false}
        contentContainerStyle={{ paddingHorizontal: 16 }}
      >
        <XStack gap={16}>
          {childrenArray.map((child, index) => (
            <React.Fragment key={index}>{child}</React.Fragment>
          ))}
        </XStack>
      </ScrollView>
    </ContentContainer>
  );
};
