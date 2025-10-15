import { View, styled } from 'tamagui';

/**
 * Container do componente SegmentedButton
 *
 * Agrupa os botões segmentados com espaçamento e cor de fundo adequados.
 * - Quando disabled=true: usa cor de fundo disabled ($disabled2)
 * - Quando disabled=false: usa cor de fundo neutra ($neutralBg3)
 */
export const SegmentedButtonContainer = styled(View, {
  name: 'SegmentedButtonContainer',
  flexDirection: 'row',
  padding: '$quark',
  borderRadius: '$pill',
  gap: '$quark',
  width: '100%',

  variants: {
    disabled: {
      true: {
        backgroundColor: '$disabled2',
      },
      false: {
        backgroundColor: '$neutralBg3',
      },
    },
  },
});
