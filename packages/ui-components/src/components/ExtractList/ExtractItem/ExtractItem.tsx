import { ExtractListVariant } from '../ExtractList.model';
import { useTransformIcon } from '../../../utils';
import { styled, View, XStack, YStack } from 'tamagui';
import { BodySmall, LabelStandard } from '../../Typography';
import { ExtractItemProps } from './ExtractItem.model';
import { iconSize } from '../../../config/tokens/iconSize/iconSize';

/**
 * Componente que renderiza um ícone transformado com cor e tamanho baseado na variante.
 *
 * @component
 * @param {Object} props - Propriedades do ícone.
 * @param {React.ReactNode} [props.icon] - Ícone a ser exibido.
 * @param {'success' | 'neutral' | 'danger'} props.variant - Variante visual que define a cor do ícone.
 * @param {number} [props.size=iconSize.medium] - Tamanho do ícone.
 *
 * @returns {JSX.Element} Elemento visual do ícone transformado.
 */

/**
 * Container principal do item da lista de extrato.
 * Aplica espaçamento, padding e estilos de hover/press.
 *
 * @styledComponent
 */
const SectionListItem = styled(XStack, {
  name: 'SectionListItem',
  justifyContent: 'space-between',
  minHeight: 72,
  gap: '$space.quark',
  paddingVertical: '$space.micro',
  paddingLeft: '$space.quark',
  paddingRight: '$space.tiny',
  hoverStyle: {
    backgroundColor: '$neutral5',
  },
  pressStyle: {
    backgroundColor: '$neutral6',
  },
  variants: {
    focused: {
      true: {
        borderWidth: '$borderWidth.thick',
        borderColor: '$neutral12',
        borderRadius: '$radius.nano',
      },
      false: {
        borderColor: 'transparent',
      },
    },
  },
});

/**
 * Agrupamento horizontal de ícone e textos à esquerda.
 *
 * @styledComponent
 */
const SectionContent = styled(XStack, {
  name: 'SectionContent',
  display: 'flex',
  alignItems: 'center',
});

/**
 * Agrupamento vertical de textos (serviço, detalhe, valor, texto de apoio).
 *
 * @styledComponent
 */
const SectionColumnText = styled(YStack, {
  name: 'SectionColumnText',
  gap: '$space.quark',
  display: 'flex',
  justifyContent: 'center',
});

// Icon Props
type ItemIconProps = {
  icon?: React.ReactNode;
  variant: ExtractListVariant;
  size?: number;
};

// Icon color mapping
const iconColorMap = {
  success: '$success',
  neutral: '$onNeutral2',
  danger: '$danger',
};

const ItemIcon: React.FC<ItemIconProps> = ({
  icon,
  variant,
  size = iconSize.medium,
}) => {
  const transformIcon = useTransformIcon();
  const iconColor = iconColorMap[variant];

  return (
    <View padding={'$space.micro'}>{transformIcon(icon, size, iconColor)}</View>
  );
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
  variant = 'neutral',
  showIcon = true,
  showSupportTextValue = true,
  isFocused = false,
}) => {
  return (
    <SectionListItem {...(isFocused ? { focused: true } : { focused: false })}>
      <SectionContent>
        {showIcon && icon ? <ItemIcon icon={icon} variant={variant} /> : null}
        <SectionColumnText>
          <LabelStandard color={'$onNeutral1'}>{item.service}</LabelStandard>
          <BodySmall color={'$onNeutral2'}>{item.detail}</BodySmall>
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
