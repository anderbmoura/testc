import { ButtonFrame, styled, View, XStack, YStack } from 'tamagui';
import { ExtractListVariant } from '../ExtractList.model';
import { iconSize } from '../../../config/tokens/iconSize/iconSize';
import { useTransformIcon } from '../../../utils';

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
export const SectionListItem = styled(ButtonFrame, {
  name: 'SectionListItem',
  justifyContent: 'space-between',
  flexDirection: 'row',
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
  focusStyle: {
    borderColor: '$neutral12',
    borderWidth: '$borderWidth.thick',
    borderRadius: '$radius.nano',
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
export const SectionContent = styled(XStack, {
  name: 'SectionContent',
  display: 'flex',
  alignItems: 'center',
});

/**
 * Agrupamento vertical de textos (serviço, detalhe, valor, texto de apoio).
 *
 * @styledComponent
 */
export const SectionColumnText = styled(YStack, {
  name: 'SectionColumnText',
  gap: '$space.quark',
  display: 'flex',
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

export const ItemIcon: React.FC<ItemIconProps> = ({
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
