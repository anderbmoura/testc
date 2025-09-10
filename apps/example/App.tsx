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
        {/* Add TopAppBar at the top */}
        <TopAppBar
          variant="small"
          title="Example App"
          onBackPress={() => console.log('Back pressed')}
          icons={{
            back: <Home width={20} height={20} />,
            camera: <Camera width={20} height={20} />,
            notifications: <Bell width={20} height={20} />,
            search: <Search width={18} height={18} />,
          }}
        />

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
