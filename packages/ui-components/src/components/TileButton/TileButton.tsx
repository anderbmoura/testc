import { IconWrapper } from '../IconWrapper';
import { LabelSmallRegular } from '../Typography';
import { TileButtonModel } from './TileButton.model';
import { StyledTileButton } from './TileButton.styles';

/**
 * Botão em formato de tile (bloco) que combina ícone e texto, ideal para menus principais e ações destacadas.
 *
 * ## Características
 *
 * - **Ícone + Label**: Exibe um ícone acima de um texto descritivo
 * - **Flexível**: Suporte a flexGrow para ocupar espaço disponível
 * - **Cores fixas**: Utiliza cores que não mudam de acordo com o tema do aparelho para ícone, texto e background
 * - **Acessível**: Suporte completo para acessibilidade
 *
 * ## Como usar
 *
 * ```tsx
 * import { TileButton } from '@superapp-caixa/dsc-library';
 * import { Home } from 'iconoir-react-native';
 *
 * // Exemplo básico
 * <TileButton
 *   label="Início"
 *   iconSlot={Home}
 *   onPress={() => console.log('Início pressionado')}
 * />
 *
 * // Exemplo com flexGrow
 * <TileButton
 *   label="Expandido"
 *   iconSlot={CreditCard}
 *   flexGrow={1}
 *   onPress={() => console.log('Expandido')}
 * />
 * ```
 */
export const TileButton = ({
  label,
  onPress,
  iconSlot,
  flexGrow,
}: TileButtonModel) => {
  return (
    <StyledTileButton flexGrow={flexGrow} onPress={onPress}>
      <IconWrapper icon={iconSlot} size="medium" color="$fixedHighlight" />
      <LabelSmallRegular color="$fixedOnNeutral1">{label}</LabelSmallRegular>
    </StyledTileButton>
  );
};
