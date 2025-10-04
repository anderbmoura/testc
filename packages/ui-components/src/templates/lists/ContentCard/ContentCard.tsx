import React from 'react';
import { ListHeading } from '../../../components/lists/ListHeading';
import Card from '../../../components/cards/Card';
import { List } from '../List';
import {
  StyledContentCardContainer,
  StyledCardContainer,
} from './ContentCard.styles';
import type { ContentCardProps } from './ContentCard.model';
import { useContentCardChildrenSeparation } from './useContentCardChildrenSeparation';

/**
 * Template DSC ContentCard
 *
 * Combina um cabeçalho (ListHeading) com uma lista de itens (List) e rodapé (ListFooter) organizados dentro de um Card.
 * Ideal para exibir listas de conteúdo com título, ação opcional e informações de rodapé.
 *
 * @example
 * ```tsx
 * import { ContentCard, ListItem, ListFooter, Avatar } from '@superapp-caixa/dsc-library';
 *
 * // Exemplo básico
 * <ContentCard
 *   title="Meus Contatos"
 *   buttonActionName="Ver todos"
 *   onButtonAction={() => console.log('Ver todos')}
 * >
 *   <ListItem
 *     leftSlot={<Avatar />}
 *     textOnLeft="João Silva"
 *     labelBottomLeft="Online"
 *     onPress={() => console.log('João')}
 *   />
 *   <ListItem
 *     leftSlot={<Avatar />}
 *     textOnLeft="Maria Santos"
 *     labelBottomLeft="Offline"
 *     onPress={() => console.log('Maria')}
 *   />
 *   <ListFooter
 *     labelLeft="Total de contatos"
 *     textLeft="2"
 *     labelRight="Online"
 *     textRight="1"
 *   />
 * </ContentCard>
 *
 * // Sem cabeçalho
 * <ContentCard showListHeading={false}>
 *   <ListItem textOnLeft="Item 1" />
 *   <ListItem textOnLeft="Item 2" />
 *   <ListFooter labelLeft="Total" textLeft="2" />
 * </ContentCard>
 * ```
 */
export const ContentCard: React.FC<ContentCardProps> = ({
  title = 'Title',
  buttonActionName,
  onButtonAction,
  children,
  showListHeading = true,
  ...props
}) => {
  const { listItems, listFooter } = useContentCardChildrenSeparation(children);

  return (
    <StyledContentCardContainer {...props}>
      {showListHeading && (
        <ListHeading
          title={title}
          configuration={buttonActionName ? 'button' : 'simple'}
          buttonText={buttonActionName}
          onButtonPress={onButtonAction}
        />
      )}
      <StyledCardContainer>
        <Card type="outline">
          <List>{listItems}</List>
        </Card>
      </StyledCardContainer>
      {listFooter}
    </StyledContentCardContainer>
  );
};
