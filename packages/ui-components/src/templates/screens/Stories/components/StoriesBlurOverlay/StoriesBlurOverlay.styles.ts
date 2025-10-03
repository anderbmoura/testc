import { styled, View } from 'tamagui';

// Mantendo o styled component para compatibilidade, mas agora será apenas um container básico
// O blur real será tratado pelo BlurView.tsx
export const StoryBlurContainer = styled(View, {
  name: 'StoryBlurContainer',
  position: 'absolute',
  top: 0,
  left: 0,
  right: 0,
  bottom: 0,
  zIndex: 3,
  backgroundColor: 'rgba(0, 0, 0, 0.3)',
});
