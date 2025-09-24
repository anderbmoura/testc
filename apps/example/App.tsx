import {
  DscProvider,
  View,
  InputMoney,
  TopAppBar,
  Button,
} from '@superapp-caixa/dsc-library';
import React, { useState } from 'react';
import { ScrollView } from 'react-native';
import { ThemeProvider, useThemeContext } from './contexts/ThemeContext';
import { YStack } from 'tamagui';
import { Bell } from 'iconoir-react-native';

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
          button1={
            <Button
              type="chromeless"
              size="small"
              icon={<Bell />}
              onPress={() => console.log('Notifications pressed')}
            />
          }
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
