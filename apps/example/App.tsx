import {
  DscProvider,
  View,
  Button,
  Sheet,
  Text,
} from '@superapp-caixa/dsc-library';
import React, { useState } from 'react';
import { ThemeProvider, useThemeContext } from './contexts/ThemeContext';
import { Settings, Eye } from 'iconoir-react-native';

type SheetVariant = 'default' | 'onMediaBg';

function AppContent() {
  const { actualTheme } = useThemeContext();
  const [isSheetOpen, setIsSheetOpen] = useState(false);
  const [sheetVariant, setSheetVariant] = useState<SheetVariant>('default');

  const toggleVariant = () => {
    setSheetVariant(current =>
      current === 'default' ? 'onMediaBg' : 'default'
    );
  };

  const openSheet = (variant: SheetVariant) => {
    setSheetVariant(variant);
    setIsSheetOpen(true);
  };

  const getVariantLabel = (variant: SheetVariant) => {
    return variant === 'default' ? 'Padrão' : 'Com Blur';
  };

  const getVariantIcon = (variant: SheetVariant) => {
    return variant === 'default' ? (
      <Settings width={20} height={20} />
    ) : (
      <Eye width={20} height={20} />
    );
  };

  return (
    <DscProvider defaultTheme={actualTheme}>
      <View
        flex={1}
        justifyContent="center"
        alignItems="center"
        padding={20}
        gap={16}
      >
        <Text fontSize={20} fontWeight="700" textAlign="center">
          Exemplo de Sheet Variants
        </Text>

        <View gap={12}>
          <Button onPress={() => openSheet('default')}>
            Abrir Sheet Padrão
          </Button>

          <Button onPress={() => openSheet('onMediaBg')}>
            Abrir Sheet com Blur
          </Button>
        </View>

        <Sheet
          closable={false}
          open={isSheetOpen}
          onOpenChange={setIsSheetOpen}
          header={{
            icon: getVariantIcon(sheetVariant),
            title: `Sheet ${getVariantLabel(sheetVariant)}`,
          }}
          snapPoints={[40, 80]}
          snapPointsMode="percent"
          variant={sheetVariant}
        >
          <View gap={16}>
            <Text fontSize={16} fontWeight="600">
              Variant: {getVariantLabel(sheetVariant)}
            </Text>

            <Text>
              {sheetVariant === 'default'
                ? 'Este sheet usa o overlay padrão sem blur.'
                : 'Este sheet usa blur de fundo com intensidade 6.'}
            </Text>

            <View padding={12} backgroundColor="$neutralBg1" borderRadius={8}>
              <Text>Conteúdo do sheet com background destacado</Text>
            </View>

            <View gap={8}>
              <Button onPress={toggleVariant}>
                Alternar para{' '}
                {getVariantLabel(
                  sheetVariant === 'default' ? 'onMediaBg' : 'default'
                )}
              </Button>

              <Button onPress={() => setIsSheetOpen(false)}>
                Fechar Sheet
              </Button>
            </View>
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
