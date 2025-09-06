import { DscProvider, View, InputMoney } from '@superapp-caixa/dsc-library';
import React, { useState } from 'react';
import { ScrollView } from 'react-native';
import { ThemeProvider, useThemeContext } from './contexts/ThemeContext';
import { YStack } from 'tamagui';

function AppContent() {
  const { actualTheme } = useThemeContext();
  const [inputValue, setInputValue] = useState(1234.56);

  return (
    <DscProvider defaultTheme={actualTheme}>
      <View flex={1}>
        <ScrollView
          contentContainerStyle={{
            flexGrow: 1,
            justifyContent: 'center',
            gap: 16,
            padding: 16,
          }}
        >
          <YStack flexWrap="wrap">
            <InputMoney
              value={inputValue}
              currency="R$"
              onValueChange={setInputValue}
              autoFocus={true}
            />
          </YStack>
        </ScrollView>
      </View>
    </DscProvider>
  );
}

export default function App() {
  return (
    <ThemeProvider>
      <AppContent />
    </ThemeProvider>
  );
}
