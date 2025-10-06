import { styled, View } from 'tamagui';

/**
 * Container principal da Toolbar.
 */
export const ToolbarContainer = styled(View, {
  name: 'ToolbarContainer',
  flexDirection: 'row',
  alignItems: 'center',
  justifyContent: 'center',
  flex: 1,
  width: '100%',
  backgroundColor: '$neutralBg2',
});
