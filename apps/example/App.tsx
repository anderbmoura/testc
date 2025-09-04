import {
  Button,
  CardAlert,
  DscProvider,
  ForYouCard,
  Separator,
  View,
  Avatar,
  AvatarStack,
} from '@superapp-caixa/dsc-library';
import React, { useState } from 'react';
import { ScrollView } from 'react-native';
import { ThemeToggle } from './components/ThemeToggle';
import { ThemeProvider, useThemeContext } from './contexts/ThemeContext';
import {
  mockData,
  ExtractList,
} from '../../packages/ui-components/src/components/ExtractList';
import { Button as TButton, YStack, XStack } from 'tamagui';

import {
  Airplay,
  Download,
  Heart,
  Home,
  Settings,
  Star,
  Trash,
  Upload,
  User,
  BadgeCheck,
  UserCart,
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

  const refresh = async () => {
    console.log('final da lista fetch');
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
            <AvatarStack size="large" spacing="large">
              <Avatar style="monogram" monogramChar="W" />
              <Avatar style="icon" icon={<BadgeCheck color="red" />} />
              <Avatar style="image" imageSource={{uri: "https://placehold.net/8.png"}} />
              <Avatar style="monogram" monogramChar="S" />
              <Avatar style="icon" icon={UserCart} />
            </AvatarStack>

            <YStack>
              <ScrollView horizontal showsHorizontalScrollIndicator={false}>
                <XStack alignItems="center" space="$2">
                  <ForYouCard href="https://wallpapercave.com/wp/wp2544022.jpg" />
                  <Separator direction="vertical" />
                  <ForYouCard href="https://wallpapercave.com/wp/wp2544022.jpg" />
                  <Separator direction="vertical" />
                  <ForYouCard href="https://wallpapercave.com/wp/wp2544022.jpg" />
                  <Separator direction="vertical" />
                  <ForYouCard href="https://wallpapercave.com/wp/wp2544022.jpg" />
                </XStack>
              </ScrollView>
            </YStack>

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

            <YStack alignItems="center">
              <Separator direction="horizontal" />
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

            <YStack alignItems="center">
              <Separator direction="horizontal" />
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

            <YStack alignItems="center">
              <Separator direction="horizontal" />
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

            <YStack alignItems="center">
              <Separator direction="horizontal" />
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

            <YStack alignItems="center">
              <Separator direction="horizontal" />
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

            <YStack alignItems="center">
              <Separator direction="horizontal" />
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

            <YStack alignItems="center">
              <Separator direction="horizontal" />
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

            <YStack alignItems="center">
              <Separator direction="horizontal" />
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

            <YStack alignItems="center">
              <Separator direction="horizontal" />
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

            <YStack alignItems="center">
              <Separator direction="horizontal" />
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

          <YStack alignItems="center">
            <Separator direction="horizontal" />
          </YStack>
          <ThemeToggle />

          <YStack alignItems="center">
            <Separator direction="horizontal" />
          </YStack>
          <TButton disabled disabledStyle={{ backgroundColor: '$accent9' }}>
            Oi
          </TButton>

          <YStack alignItems="center">
            <Separator direction="horizontal" />
          </YStack>
          <Button>Botão</Button>

          <YStack alignItems="center">
            <Separator direction="horizontal" />
          </YStack>
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
          <ExtractList data={mockData} refreshAction={refresh} />
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
