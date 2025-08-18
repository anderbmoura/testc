# 🎨 DSC (Design System CAIXA) Components

Biblioteca React Native construída com Tamagui, fornecendo componentes, layouts e templates de tela para aplicações da CAIXA.

## 🎯 Características Principais

- **Consistência de Design**: Construído seguindo os padrões de design da CAIXA.
- **Integração com Tamagui**: Aproveita o sistema de estilização e performance do Tamagui.
- **Suporte a Temas**: Variantes de tema claro e escuro, dentre outros.

## 🛠️ Instalação

```bash
yarn add @superapp-caixa/dsc-library
```

> ⚠️ **Importante**: Para projetos com Module Federation, **ambos** (host e mini-apps) precisam executar `yarn add @superapp-caixa/dsc-library`.

### Configuração Module Federation

Para projetos que utilizam **rspack** e **module federation**, adicione as configurações no arquivo `rspack.config.mjs`:

**Aplicação host:**

```javascript
// rspack.config.mjs
shared: {
  '@superapp-caixa/dsc-library': {
    singleton: true,
    eager: true,
    requiredVersion: '^xx.xx.xx',
  },
  // outras dependências...
}
```

**Mini-apps:**

```javascript
// rspack.config.mjs
shared: {
  '@superapp-caixa/dsc-library': {
    singleton: true,
    eager: false,
    requiredVersion: '^xx.xx.xx',
  },
  // outras dependências...
}
```

## ⚡️‍ Início Rápido

### Configuração do Provider

Configure o `DscProvider` na raiz da sua aplicação:

```tsx
import React from 'react';
import { DscProvider } from '@superapp-caixa/dsc-library';

const App = () => {
  return (
    <DscProvider defaultTheme="light">
      <AppContent />
    </DscProvider>
  );
};

export default App;
```

### Uso dos Componentes

Importe e utilize os componentes DSC nas suas telas:

```tsx
import React, { useState } from 'react';
import { View } from 'react-native';
import { Button, Input, Card, Switch } from '@superapp-caixa/dsc-library';

export default function ExemploTela() {
  const [texto, setTexto] = useState('');
  const [ativado, setAtivado] = useState(false);

  return (
    <View style={{ flex: 1, padding: 20, gap: 16 }}>
      <Card>
        <Input
          placeholder="Digite seu nome"
          value={texto}
          onChangeText={setTexto}
        />

        <Switch
          value={ativado}
          onValueChange={setAtivado}
          label="Notificações"
        />

        <Button variant="primary" onPress={() => alert(`Olá, ${texto}!`)}>
          Enviar
        </Button>
      </Card>
    </View>
  );
}
```

## 🧩 Uso com Tamagui

> 📋 **Recomendação**: Utilize **sempre que possível** os componentes de construção e estilo de layout do Tamagui (`View`, `Text`, `Stack`, etc.) em detrimento dos componentes React Native puros. Use componentes RN nativos apenas em último caso.

### Por que usar componentes Tamagui?

- **Performance otimizada**: Sistema de styling compilado em tempo de build.
- **Consistência de tema**: Compartilhamento do mesmo sistema de tokens.
- **Bundle size reduzido**: Tree-shaking eficiente dos estilos não utilizados.

### Exemplo recomendado:

```tsx
import { View, Text, XStack, YStack } from '@tamagui/core';
import { Button, Input } from '@superapp-caixa/dsc-library';

export function MinhaTela() {
  return (
    <YStack padding="$4" space="$3">
      <Text fontSize="$6" fontWeight="bold">
        Título da Tela
      </Text>

      <XStack space="$2" alignItems="center">
        <Input flex={1} placeholder="Digite aqui..." />
        <Button>Buscar</Button>
      </XStack>
    </YStack>
  );
}
```
