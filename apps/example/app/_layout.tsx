import { DSCProvider } from '@superapp-caixa/dsc-library';
import { Stack } from 'expo-router';

export default function RootLayout() {
  return (
    <DSCProvider>
      <Stack />
    </DSCProvider>
  );
}
