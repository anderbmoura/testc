import React from 'react';
import { ScrollView } from 'react-native';
import { XStack } from 'tamagui';
import { ContentContainer } from './CarouselVerticalContent.styles';
import type { CarouselVerticalContentProps } from './CarouselVerticalContent.model';

/**
 * Componente responsável por renderizar o conteúdo dos cards no CarouselVertical.
 * Organiza os CardCarouselVertical horizontalmente em um ScrollView.
 */
export const CarouselVerticalContent: React.FC<
  CarouselVerticalContentProps
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
