import { Button, Text, View } from '@superapp-caixa/dsc-library';
import React from 'react';
import { useThemeContext } from '../contexts/ThemeContext';

export function ThemeToggle() {
  const { theme, setTheme, actualTheme } = useThemeContext();

  const toggleTheme = () => {
    console.log('theme', theme);
    switch (theme) {
      case 'light':
        setTheme('dark');
        break;
      case 'dark':
        setTheme('system');
        break;
      case 'system':
        setTheme('light');
        break;
    }
  };

  const getThemeLabel = () => {
    switch (theme) {
      case 'light':
        return 'Light Theme';
      case 'dark':
        return 'Dark Theme';
      case 'system':
        return `System (${actualTheme})`;
    }
  };

  return (
    <View gap="$2" alignItems="center">
      <Text>Current: {getThemeLabel()}</Text>
      <Button onPress={toggleTheme}>Toggle Theme</Button>
    </View>
  );
}
