import { styled, View } from 'tamagui';
import { BLUR_CONSTANTS } from './BlurView.model';

export const StyledBlurContainer = styled(View, {
  name: 'StyledBlurContainer',

  ...BLUR_CONSTANTS.ABSOLUTE_POSITION,
  backgroundColor: '$neutral3',
});
