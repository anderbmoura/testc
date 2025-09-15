import React from 'react';
import { ListHeading } from '../../../components/ListHeading';
import Card from '../../../components/Card';
import { List } from '../List';
import {
  StyledContentCardContainer,
  StyledCardContainer,
} from './ContentCard.styles';
import type { ContentCardProps } from './ContentCard.model';

/**
 * Template DSC ContentCard
 *
 * Combina um cabeçalho (ListHeading) com uma lista de itens (List) organizada dentro de um Card.
 * Ideal para exibir listas de conteúdo com título e ação opcional.
 *
 * @example
 * ```tsx
 * import { ContentCard, ListItem, Avatar } from '@superapp-caixa/dsc-library';
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
 * </ContentCard>
 *
 * // Sem cabeçalho
 * <ContentCard showListHeading={false}>
 *   <ListItem textOnLeft="Item 1" />
 *   <ListItem textOnLeft="Item 2" />
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
          <List>{children}</List>
        </Card>
      </StyledCardContainer>
    </StyledContentCardContainer>
  );
};
