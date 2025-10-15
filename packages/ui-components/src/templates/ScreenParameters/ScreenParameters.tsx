import React from 'react';
import { ScreenParametersProps } from './ScreenParameters.model';
import {
  StyledBodyContent,
  StyledBodyScrollView,
  StyledFooterContainer,
  StyledIconContent,
  StyledScreenParametersContainer,
  StyledValueSectionContent,
} from './ScreenParameters.styles';
import { GetThemeValueForKey, View } from 'tamagui';
import { useScreenParametersChildrenSeparation } from './hooks/useScreenParametersChildrenSeparation';

/**
 * Template ScreenParameters
 *
 * Organiza uma tela completa de parâmetros com:
 * - TopAppBar no topo
 * - Icon no topo a esquerda
 * - ValueSection no topo a esquerda com textos opcionais
 * - Conteúdo scrollável no corpo (ContentCard, ButtonRow, etc)
 * - ScreenFooter fixo no rodapé
 * - Espaçamento configurável entre elementos do corpo
 *
 * @example
 * ```tsx
 * <ScreenParameters title="Concluir pagamento">
 *   <TopAppBar variant="small" title="Label" />
 *   <Avatar style="icon" icon={<Barcode />} size="large" />
 *   <ValueSection label="Label" value={1000} />
 *   <OptionsList>
 *     <SegmentedButton
 *       buttons={[
 *         {
 *           label: 'Geral',
 *           icon: <Settings />,
 *           onPress: () => console.log('Geral'),
 *         },
 *             {
 *               label: 'Perfil',
 *               icon: <User />,
 *               onPress: () => console.log('Perfil'),
 *             },
 *           ]}
 *         />
 *       </OptionsList>
 *
 *   <ContentCard>
 *     <ListItem textOnLeft="Label" labelBottomLeft="Text" />
 *   </ContentCard>
 *
 *   <ButtonRow>
 *     <IconButtonText icon={<Icon />}>Label</IconButtonText>
 *   </ButtonRow>
 *
 *   <ScreenFooter variant="button">
 *     <Button>Button</Button>
 *   </ScreenFooter>
 * </ScreenParameters>
 * ```
 */

export const ScreenParameters: React.FC<ScreenParametersProps> = ({
  bodyContentPaddingTop = '$tiny',
  bodyContentGap = '$tiny',
  children,
  ...restProps
}) => {
  const { topAppBar, valueSection, bodyContent, screenFooter, icon } =
    useScreenParametersChildrenSeparation(children);

  const getSpaceToken = (token: string) =>
    token as GetThemeValueForKey<'paddingTop'>;

  const isButtonRow = (child: React.ReactNode): boolean => {
    if (!React.isValidElement(child)) return false;

    const childType = child.type as React.ElementType<unknown>;
    const displayName = childType?.displayName || childType?.name || '';

    return displayName === 'ButtonRow' || displayName.includes('ButtonRow');
  };

  return (
    <StyledScreenParametersContainer {...restProps}>
      {topAppBar}
      {icon && <StyledIconContent>{icon}</StyledIconContent>}
      <StyledBodyScrollView
        showsVerticalScrollIndicator={false}
        contentContainerStyle={{ flexGrow: 1 }}
      >
        {valueSection && (
          <StyledValueSectionContent>{valueSection}</StyledValueSectionContent>
        )}
        <StyledBodyContent paddingTop={getSpaceToken(bodyContentPaddingTop)}>
          {bodyContent.map((child, index) => {
            if (isButtonRow(child)) {
              return (
                <View
                  key={index}
                  marginTop={'$tiny'}
                  width="100%"
                  paddingHorizontal={'$tiny'}
                >
                  {child}
                </View>
              );
            }

            return (
              <View
                key={index}
                width="100%"
                paddingTop={getSpaceToken(bodyContentGap)}
              >
                {child}
              </View>
            );
          })}
        </StyledBodyContent>
      </StyledBodyScrollView>

      {screenFooter && (
        <StyledFooterContainer>{screenFooter}</StyledFooterContainer>
      )}
    </StyledScreenParametersContainer>
  );
};

ScreenParameters.displayName = 'ScreenParameters';
