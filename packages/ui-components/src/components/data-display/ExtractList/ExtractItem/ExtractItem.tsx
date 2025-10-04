import React from 'react';
import { GetThemeValueForKey } from 'tamagui';
import { BodySmall, LabelStandard } from '../../Typography';
import { ExtractItemProps } from './ExtractItem.model';
import {
  ItemIcon,
  SectionColumnText,
  SectionContent,
  SectionListItem,
} from './ExtractItem.styles';

const colorMap: Record<string, GetThemeValueForKey<'color'>> = {
  neutral: '$onNeutral2',
  danger: '$danger',
};

/**
 * Componente que renderiza um item de extrato bancário.
 * Exibe ícone, serviço, detalhe, valor e texto de apoio, com variações visuais.
 *
 * @component
 * @param {Object} props - Propriedades do componente.
 * @param {Object} props.item - Dados do item.
 * @param {string} props.item.service - Nome do serviço.
 * @param {string} props.item.detail - Detalhes adicionais do serviço.
 * @param {string} props.item.value - Valor monetário do item.
 * @param {string} [props.item.supportTextValue] - Texto de apoio abaixo do valor.
 * @param {React.ReactNode} [props.icon] - Ícone opcional a ser exibido.
 * @param {'success' | 'neutral' | 'danger'} [props.variant='neutral'] - Variante visual do ícone.
 * @param {boolean} [props.showIcon=true] - Define se o ícone será exibido.
 * @param {boolean} [props.showSupportTextValue=true] - Define se o texto de apoio será exibido.
 * @param {boolean} [props.isFocused=false] - Define se o item está em estado de foco.
 *
 * @returns {JSX.Element} Elemento visual do item de extrato.
 */
export const ExtractItem: React.FC<ExtractItemProps> = ({
  item,
  icon,
  iconVariant = 'neutral',
  detailsVariant = 'neutral',
  showIcon = true,
  showSupportTextValue = true,
  ...props
}) => {
  return (
    <SectionListItem {...props}>
      <SectionContent>
        {showIcon && icon ? (
          <ItemIcon icon={icon} variant={iconVariant} />
        ) : null}
        <SectionColumnText>
          <LabelStandard color={'$onNeutral1'}>{item.service}</LabelStandard>
          <BodySmall textAlign={'left'} color={colorMap[detailsVariant]}>
            {item.detail}
          </BodySmall>
        </SectionColumnText>
      </SectionContent>
      <SectionColumnText>
        <LabelStandard color={'$onNeutral1'}>{item.value}</LabelStandard>
        {showSupportTextValue && item?.supportTextValue ? (
          <BodySmall textAlign={'right'} color={'$onNeutral2'}>
            {item.supportTextValue}
          </BodySmall>
        ) : null}
      </SectionColumnText>
    </SectionListItem>
  );
};
