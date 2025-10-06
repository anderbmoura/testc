import React from 'react';
import { styled, YStack } from 'tamagui';
import { ScreenFooterProps } from './ScreenFooter.model';

const DscScreenFooter = styled(YStack, {
  name: 'DscScreenFooter',
  backgroundColor: '$neutralBg1',
  paddingHorizontal: '$tiny',
  paddingVertical: '$small',
  width: '100%',

  variants: {
    variant: {
      button: {
        flexDirection: 'column',
        gap: '$small',
        alignItems: 'stretch',
      },
      iconButton: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
        gap: '$medium',
      },
    },
  } as const,
});

/**
 * Componente DSC ScreenFooter
 *
 * Footer de tela que suporta duas variantes com tipagem específica:
 * - variant='button': Aceita apenas componentes Button
 * - variant='iconButton': Aceita apenas componentes IconButton (máximo 2)
 *
 * @example
 * ```tsx
 * import { ScreenFooter, Button, IconButton } from '@superapp-caixa/dsc-library';
 * import { ArrowLeft, ArrowRight } from 'iconoir-react-native';
 *
 * // ✅ Correto - variant button
 * <ScreenFooter variant="button">
 *   <Button type="plain" theme="highlight">Confirmar</Button>
 *   <Button type="outline" theme="neutral">Cancelar</Button>
 * </ScreenFooter>
 *
 * // ✅ Correto - variant iconButton
 * <ScreenFooter variant="iconButton">
 *   <IconButton icon={<ArrowLeft />} onPress={() => {}} />
 *   <IconButton icon={<ArrowRight />} onPress={() => {}} />
 * </ScreenFooter>
 * ```
 */
export const ScreenFooter: React.FC<ScreenFooterProps> = props => {
  const variant = props.variant || 'button';
  const { children } = props;

  const processedChildren = React.useMemo(() => {
    const childrenArray = React.Children.toArray(children);

    // Para iconButton, limita a apenas os 2 primeiros botões
    if (variant === 'iconButton') {
      if (childrenArray.length > 2) {
        console.warn(
          'ScreenFooter: variant="iconButton" suporta apenas 2 componentes. Componentes extras foram ignorados.'
        );
      }
      return childrenArray.slice(0, 2);
    }

    return childrenArray;
  }, [children, variant]);

  return (
    <DscScreenFooter variant={variant}>{processedChildren}</DscScreenFooter>
  );
};

export default ScreenFooter;
