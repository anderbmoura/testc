import { DefaultTheme, ThemeProvider } from '@react-navigation/native';
import { DscProvider } from '@superapp-caixa/dsc-library';
import { Stack } from 'expo-router';

export default function RootLayout() {
  return (
    <DscProvider defaultTheme="light">
      <ThemeProvider value={DefaultTheme}>
        <Stack />
      </ThemeProvider>
    </DscProvider>
  );
}
