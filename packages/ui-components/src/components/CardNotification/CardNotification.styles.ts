import { View, styled } from 'tamagui';
import { borderWidth } from '../../config/tokens/borderWidth/borderWidth';

export const CardNotificationContainer = styled(View, {
  name: 'CardNotificationContainer',
  borderRadius: '$large',
  flexDirection: 'row',
  alignItems: 'flex-start',
  minHeight: 88,
  width: '100%',
  maxWidth: 328,
  overflow: 'hidden',
  borderWidth: borderWidth.thin,
  borderColor: '$outlined1',
  backgroundColor: '$neutralBg1',
  shadowColor: '$onNeutral1',
  shadowOffset: { width: 0, height: 1 },
  shadowOpacity: 0.04,
  shadowRadius: 2,
});
