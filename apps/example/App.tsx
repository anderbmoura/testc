import {
  DscProvider,
  View,
  Sheet,
  Text,
  Stories,
} from '@superapp-caixa/dsc-library';
import React, { useState } from 'react';
import { ThemeProvider, useThemeContext } from './contexts/ThemeContext';
import { Star } from 'iconoir-react-native';

function AppContent() {
  const { actualTheme } = useThemeContext();
  const [isSheetMaximized, setIsSheetMaximized] = useState(false);

  const storyImages = [
    { imageSource: 'https://picsum.photos/400/800?random=1', id: '1' },
    { imageSource: 'https://picsum.photos/400/800?random=2', id: '2' },
    { imageSource: 'https://picsum.photos/400/800?random=3', id: '3' },
  ];

  const handleSheetPositionChange = (position: number) => {
    // Posição 0 corresponde ao snap point máximo (80%)
    setIsSheetMaximized(position === 0);
  };

  return (
    <DscProvider defaultTheme={actualTheme}>
      <Stories
        images={storyImages}
        duration={5000}
        showBlur={isSheetMaximized}
        blurIntensity={isSheetMaximized ? 8 : 0}
      >
        {/* Sheet já aberto dentro do Stories */}
        <Sheet
          closable={false}
          open={true}
          onOpenChange={() => {}}
          onPositionChange={handleSheetPositionChange}
          header={{
            icon: <Star width={20} height={20} />,
            title: 'Sheet com Blur Dinâmico',
          }}
          snapPoints={[80, 40]}
          snapPointsMode="percent"
          variant="onMediaBg"
        >
          <View gap={16}>
            <Text fontSize={18} fontWeight="600">
              Sheet com Blur Dinâmico no Stories
            </Text>
            <Text>
              Este Sheet controla dinamicamente o blur do Stories. Quando você
              arrasta o Sheet para o tamanho máximo (80%), o fundo do Stories
              fica desfocado.
            </Text>
            <Text color="$color11">
              Arraste para cima/baixo para testar os snap points e ver o blur
              sendo aplicado.
            </Text>
            <Text color="$color9" fontSize={14}>
              Blur ativo: {isSheetMaximized ? 'SIM' : 'NÃO'}
            </Text>
          </View>
        </Sheet>
      </Stories>
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
