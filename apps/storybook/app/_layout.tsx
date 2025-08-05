import { TGProvider } from '@superapp-caixa/dsc-library';
import { Stack } from 'expo-router';
export default function RootLayout() {
  console.log(TGProvider);
  return (
    <TGProvider>
      <Stack />
    </TGProvider>
  );
}
