import {
  DarkTheme,
  DefaultTheme,
  ThemeProvider as NavigationThemeProvider,
} from '@react-navigation/native';
import { DscProvider } from '@superapp-caixa/dsc-library';
import { Stack } from 'expo-router';
import { ThemeProvider, useThemeContext } from '../contexts/ThemeContext';

function AppContent() {
  const { actualTheme } = useThemeContext();

  // Choose the React Navigation theme based on the actual theme
  const navigationTheme = actualTheme === 'dark' ? DarkTheme : DefaultTheme;

  return (
    <DscProvider defaultTheme={actualTheme}>
      <NavigationThemeProvider value={navigationTheme}>
        <Stack />
      </NavigationThemeProvider>
    </DscProvider>
  );
}

export default function RootLayout() {
  return (
    <ThemeProvider>
      <AppContent />
    </ThemeProvider>
  );
}
