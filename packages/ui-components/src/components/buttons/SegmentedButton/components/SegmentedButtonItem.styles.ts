import { Button, styled } from 'tamagui';

/**
 * Styled component para item individual do SegmentedButton
 *
 * Define os estilos base e as variantes para os estados do botão:
 * - neutral: estilo padrão com fundo branco quando selecionado (neutralBgAlt)
 * - highlight: estilo de destaque com fundo azul quando selecionado (highlight8)
 *
 * Estados interativos (conforme tokens do Figma):
 * - hover: neutralHover1 ou highlightHover2
 * - pressed: neutralPressed1 ou highlightPressed2
 * - focused: borda preta de 2px
 * - disabled: fundo transparente
 */
export const StyledSegmentedButtonItem = styled(Button, {
  name: 'SegmentedButtonItem',
  flex: 1,
  height: 32,
  borderRadius: '$pill',
  paddingHorizontal: '$quark',
  paddingVertical: '$quark',
  justifyContent: 'center',

  variants: {
    variant: {
      neutral: {
        hoverStyle: {
          backgroundColor: '$neutralHover1',
        },
        pressStyle: {
          backgroundColor: '$neutralPressed1',
        },
        focusStyle: {
          outlineColor: '$color12',
          outlineWidth: 2,
          outlineStyle: 'solid',
        },
        disabledStyle: {
          backgroundColor: 'transparent',
        },
      },
      highlight: {
        hoverStyle: {
          backgroundColor: '$highlightHover2',
        },
        pressStyle: {
          backgroundColor: '$highlightPressed2',
        },
        focusStyle: {
          outlineColor: '$color12',
          outlineWidth: 2,
          outlineStyle: 'solid',
        },
        disabledStyle: {
          backgroundColor: 'transparent',
        },
      },
    },
  },
} as const);
