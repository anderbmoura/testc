import { DscProvider } from '@superapp-caixa/dsc-library';
import { Stack } from 'expo-router';
export default function RootLayout() {
  return (
    <DscProvider>
      <Stack />
    </DscProvider>
  );
}
