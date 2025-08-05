import { DscProvider } from '@superapp-caixa/dsc-library';
import { Stack } from 'expo-router';
export default function RootLayout() {
  console.log(DscProvider);
  return (
    <DscProvider>
      <Stack />
    </DscProvider>
  );
}
