import {
  Button,
  View,
  DscProvider,
  CardAlert,
} from '@superapp-caixa/dsc-library';
import { ScrollView } from 'react-native';
import React, { useState } from 'react';
import { ThemeToggle } from './components/ThemeToggle';
import { ThemeProvider, useThemeContext } from './contexts/ThemeContext';

import { Button as TButton, YStack } from 'tamagui';

import {
  Airplay,
  Home,
  Settings,
  User,
  Heart,
  Star,
  Download,
  Upload,
  Trash,
} from 'iconoir-react-native';

function AppContent() {
  const { actualTheme } = useThemeContext();
  const [isLoading, setIsLoading] = useState(false);

  const handleLoadingToggle = () => {
    setIsLoading(true);
    setTimeout(() => {
      setIsLoading(false);
    }, 3000);
  };

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
          <YStack space="$4" padding="$4">
            <YStack space="$4" flexWrap="wrap">
              <Button theme="success" icon={Home} type="plain">
                Plain Button
              </Button>
              <Button icon={Settings} type="outline">
                Outline Button
              </Button>
              <Button icon={User} type="chromeless">
                Chromeless Button
              </Button>
            </YStack>

            <YStack space="$4" flexWrap="wrap">
              <Button icon={Heart} type="plain" disabled>
                Plain Disabled
              </Button>
              <Button icon={Star} type="outline" disabled>
                Outline Disabled
              </Button>
              <Button icon={Airplay} type="chromeless" disabled>
                Chromeless Disabled
              </Button>
            </YStack>

            <YStack space="$4" flexWrap="wrap">
              <Button icon={Home} type="plain" size="small">
                Small Plain
              </Button>
              <Button icon={Settings} type="outline" size="standard">
                Standard Outline
              </Button>
              <Button icon={User} type="chromeless" size="large">
                Large Chromeless
              </Button>
            </YStack>

            {/* Exemplos de todos os tamanhos com diferentes variantes */}
            <YStack space="$4" flexWrap="wrap">
              <Button icon={Heart} size="large" type="plain">
                Large Plain
              </Button>
              <Button icon={Star} size="large" type="outline">
                Large Outline
              </Button>
              <Button icon={Airplay} size="large" type="chromeless">
                Large Chromeless
              </Button>
            </YStack>

            <YStack space="$4" flexWrap="wrap">
              <Button icon={Home} size="standard" type="plain">
                Standard Plain
              </Button>
              <Button icon={Settings} size="standard" type="outline">
                Standard Outline
              </Button>
              <Button icon={User} size="standard" type="chromeless">
                Standard Chromeless
              </Button>
            </YStack>

            <YStack space="$4" flexWrap="wrap">
              <Button icon={Heart} size="small" type="plain">
                Small Plain
              </Button>
              <Button icon={Star} size="small" type="outline">
                Small Outline
              </Button>
              <Button icon={Airplay} size="small" type="chromeless">
                Small Chromeless
              </Button>
            </YStack>

            {/* Exemplos de Loading */}
            <YStack space="$4" flexWrap="wrap">
              <Button icon={Home} type="plain" loading>
                Loading Plain
              </Button>
              <Button icon={Settings} type="outline" loading>
                Loading Outline
              </Button>
              <Button icon={User} type="chromeless" loading>
                Loading Chromeless
              </Button>
            </YStack>

            <YStack space="$4" flexWrap="wrap">
              <Button icon={Heart} size="large" type="plain" loading>
                Large Loading
              </Button>
              <Button icon={Star} size="standard" type="outline" loading>
                Standard Loading
              </Button>
              <Button icon={Airplay} size="small" type="plain" loading>
                Small Loading
              </Button>
            </YStack>

            <YStack space="$4" flexWrap="wrap">
              <Button icon={Download} type="plain" loading theme="success">
                Save Changes
              </Button>
              <Button icon={Upload} type="outline" loading theme="warning">
                Process Data
              </Button>
              <Button icon={Trash} type="plain" loading theme="danger">
                Delete Item
              </Button>
            </YStack>

            {/* Exemplo Interativo */}
            <YStack space="$4" flexWrap="wrap">
              <Button
                icon={Upload}
                type="plain"
                loading={isLoading}
                onPress={handleLoadingToggle}
                theme="highlight"
              >
                {isLoading ? 'Uploading...' : 'Click to Upload'}
              </Button>
            </YStack>

            {/* Demonstração de diferentes estados de loading */}
            <YStack space="$4" flexWrap="wrap">
              <Button
                icon={Download}
                type="plain"
                size="small"
                loading
                theme="info"
              >
                Downloading...
              </Button>
              <Button
                icon={Settings}
                type="outline"
                size="standard"
                loading
                theme="accent"
              >
                Configuring...
              </Button>
              <Button type="chromeless" size="large" loading theme="warning">
                Processing...
              </Button>
            </YStack>
          </YStack>

          <ThemeToggle />

          <TButton disabled disabledStyle={{ backgroundColor: '$accent9' }}>
            Oi
          </TButton>

          <Button>Botão</Button>

          {/* CardAlert Examples */}
          <YStack space="$4" padding="$4">
            <CardAlert
              variant="info"
              title="Importante"
              description="Lorem ipsum dolor sit amet, consecte adipiscing elit. Curabitur et tempus."
            />

            <CardAlert
              variant="success"
              title="Sucesso"
              description="Lorem ipsum dolor sit amet, consecte adipiscing elit. Curabitur et tempus."
            />

            <CardAlert
              variant="warning"
              title="Atenção"
              description="Lorem ipsum dolor sit amet, consecte adipiscing elit. Curabitur et tempus."
            />

            <CardAlert
              variant="danger"
              title="Erro"
              description="Lorem ipsum dolor sit amet, consecte adipiscing elit. Curabitur et tempus."
            />

            <CardAlert
              variant="info"
              title="Importante"
              description="Lorem ipsum dolor sit amet, consecte adipiscing elit. Curabitur et tempus."
              action={{
                label: 'Ação',
                onPress: () => alert('Ação executada!'),
              }}
            />

            <CardAlert
              variant="success"
              title="Sucesso"
              description="Lorem ipsum dolor sit amet, consecte adipiscing elit. Curabitur et tempus."
              action={{
                label: 'Ação',
                onPress: () => alert('Continuando...'),
              }}
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
