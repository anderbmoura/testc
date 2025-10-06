import React, { Fragment, ReactElement, useState } from 'react';
import { YStack } from 'tamagui';
import { ListAccordion } from '../../../components/lists/ListAccordion';
import { ExtractItem } from '../../../components/data-display/ExtractList/ExtractItem/ExtractItem';
import { ListFooter } from '../../../components/lists/ListFooter';
import Separator from '../../../components/layout/Separator';
import { StatementListAccordionProps } from './StatementListAccordion.model';

/**
 * Template DSC StatementListAccordion
 *
 * Template de lista expansível com accordion para exibição de extratos e declarações.
 * Combina ListAccordion, ExtractItem, ListFooter e Separator para criar uma interface
 * organizada de informações financeiras.
 *
 * @example
 * ```tsx
 * import { StatementListAccordion, ExtractItem, ListFooter } from '@superapp-caixa/dsc-library';
 *
 * <StatementListAccordion
 *   textLeft="A vencer (3)"
 *   collapsed={false}
 *   onChange={(expanded) => console.log('Estado:', expanded)}
 * >
 *   <ExtractItem
 *     item={{
 *       service: "Fatura do cartão",
 *       detail: "Venc: 15/10/2025",
 *       value: "R$ 1.200,00"
 *     }}
 *     icon={<CreditCard />}
 *     onPress={() => console.log('Fatura selecionada')}
 *   />
 *   <ExtractItem
 *     item={{
 *       service: "Financiamento casa",
 *       detail: "Venc: 20/10/2025",
 *       value: "R$ 850,00"
 *     }}
 *     icon={<Home />}
 *     onPress={() => console.log('Financiamento selecionado')}
 *   />
 *   <ExtractItem
 *     item={{
 *       service: "Conta de energia",
 *       detail: "Venc: 25/10/2025",
 *       value: "R$ 150,00"
 *     }}
 *     icon={<LightBulb />}
 *     onPress={() => console.log('Conta selecionada')}
 *   />
 *   <ListFooter
 *     textLeft="Total"
 *     textRight="R$ 2.200,00"
 *   />
 * </StatementListAccordion>
 * ```
 */
export const StatementListAccordion: React.FC<StatementListAccordionProps> = ({
  textLeft,
  textRight,
  collapsed = false,
  disabled = false,
  onChange,
  showSeparator = true,
  children,
  ...rest
}) => {
  const [internalCollapsed, setInternalCollapsed] = useState(collapsed);

  const isCollapsed = collapsed !== undefined ? collapsed : internalCollapsed;

  const handleToggle = (value: boolean) => {
    if (!disabled) {
      setInternalCollapsed(value);
      onChange?.(value);
    }
  };

  const childrenArray = React.Children.toArray(children) as ReactElement[];
  const extractItems = childrenArray.filter(
    child =>
      React.isValidElement(child) &&
      (child.type === ExtractItem ||
        // eslint-disable-next-line @typescript-eslint/no-explicit-any
        (child.type as any)?.displayName === 'ExtractItem')
  );
  const listFooter = childrenArray.find(
    child =>
      React.isValidElement(child) &&
      (child.type === ListFooter ||
        // eslint-disable-next-line @typescript-eslint/no-explicit-any
        (child.type as any)?.displayName === 'ListFooter')
  );

  return (
    <YStack width="100%" {...rest}>
      <ListAccordion
        textLeft={textLeft}
        textRight={textRight}
        collapsed={isCollapsed}
        disabled={disabled}
        onChange={handleToggle}
      />

      {!isCollapsed && (
        <>
          {extractItems.map((item, index) => (
            <Fragment key={`statement-item-${index}`}>
              {React.cloneElement(item)}
            </Fragment>
          ))}

          {listFooter && React.cloneElement(listFooter)}
        </>
      )}

      {showSeparator && <Separator direction="horizontal" />}
    </YStack>
  );
};

export default StatementListAccordion;
