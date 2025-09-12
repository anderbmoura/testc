import React from 'react';
import { ContentWidgetsContainer } from './ContentWidgets.styles';
import { ContentWidgetsHeader } from './components/ContentWidgetsHeader';
import { ContentWidgetsContent } from './components/ContentWidgetsContent';
import type { ContentWidgetsProps } from './ContentWidgets.model';

/**
 * Template DSC ContentWidgets
 *
 * Container que organiza widgets com título, botão de ação e lista de WidgetRow
 * organizados verticalmente. Título e botão de ação são opcionais e podem ser
 * usados independentemente.
 *
 * @example
 * ```tsx
 * // Exemplo completo com título e botão de ação
 * <ContentWidgets
 *   title="Meus Cartões"
 *   buttonActionName="Ver todos"
 *   onButtonAction={() => console.log('Ação executada')}
 * >
 *   <WidgetRow>
 *     <CardWidget topLabel="Saldo" mainLabel="R$ 1.234,56" variant="highlight">
 *       <CardWidgetFooter label="Disponível" value="Hoje" variant="neutral" />
 *     </CardWidget>
 *     <CardWidget topLabel="Limite" mainLabel="R$ 5.000,00" variant="success">
 *       <CardWidgetFooter label="Total" value="Mensal" variant="success" />
 *     </CardWidget>
 *   </WidgetRow>
 * </ContentWidgets>
 *
 * // Exemplo apenas com título
 * <ContentWidgets title="Resumo Financeiro">
 *   <WidgetRow>
 *     <CardWidget topLabel="Saldo" mainLabel="R$ 1.234,56" variant="highlight" />
 *     <CardWidget topLabel="Gastos" mainLabel="R$ 2.345,67" variant="danger" />
 *   </WidgetRow>
 * </ContentWidgets>
 *
 * // Exemplo sem header (somente WidgetRows)
 * <ContentWidgets>
 *   <WidgetRow>
 *     <CardWidget topLabel="Receita" mainLabel="R$ 5.000,00" variant="success" />
 *     <CardWidget topLabel="Despesas" mainLabel="R$ 3.000,00" variant="danger" />
 *   </WidgetRow>
 * </ContentWidgets>
 * ```
 */
export const ContentWidgets: React.FC<ContentWidgetsProps> = ({
  title,
  buttonActionName,
  onButtonAction,
  children,
  ...props
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
    <ContentWidgetsContainer {...props}>
      {(title || buttonActionName) && <ContentWidgetsHeader {...headerProps} />}

      <ContentWidgetsContent {...contentProps} />
    </ContentWidgetsContainer>
  );
};
