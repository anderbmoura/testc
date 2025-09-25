import {
  DscProvider,
  View,
  Button,
  Sheet,
  Text,
} from '@superapp-caixa/dsc-library';
import React, { useState } from 'react';
import { ThemeProvider, useThemeContext } from './contexts/ThemeContext';
import { Settings } from 'iconoir-react-native';

function AppContent() {
  const { actualTheme } = useThemeContext();
  const [isSheetOpen, setIsSheetOpen] = useState(false);

  return (
    <DscProvider defaultTheme={actualTheme}>
      <View flex={1} justifyContent="center" alignItems="center" padding={20}>
        <Button onPress={() => setIsSheetOpen(true)}>Abrir Sheet</Button>

        <Sheet
          open={isSheetOpen}
          onOpenChange={setIsSheetOpen}
          header={{
            icon: <Settings width={20} height={20} />,
            title: 'Teste Background',
          }}
          snapPoints={[80, 50, 25]}
          snapPointsMode="percent"
        >
          <View gap={16}>
            <Text fontSize={16} fontWeight="600">
              Background deve estar visível
            </Text>
            <Text>Você pode arrastar para redimensionar ou fechar.</Text>
            <View padding={12} backgroundColor="$neutralBg1" borderRadius={8}>
              <Text>Esta área deve ter background diferente</Text>
            </View>

            <Button onPress={() => setIsSheetOpen(false)}>Fechar Sheet</Button>
          </View>
        </Sheet>
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
