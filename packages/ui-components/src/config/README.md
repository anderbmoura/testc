# Configuration

Este diretório contém a configuração central do Design System CAIXA (DSC) baseado em Tamagui.

## Estrutura

```
config/
├── TamaguiProvider.tsx    # Provider personalizado para o DSC
├── tamagui.config.ts      # Configuração principal do Tamagui
├── fonts/                 # Configuração de tipografia
├── themes/                # Temas e paletas de cores
└── tokens/                # Design tokens (espaçamento, bordas, opacidade)
```

## Uso

Para usar o sistema de design, envolva sua aplicação com o `TamaguiProvider`:

```tsx
import { TamaguiProvider } from '@superapp-caixa/dsc-library';

function App() {
  return <TamaguiProvider>{/* Sua aplicação */}</TamaguiProvider>;
}
```

## Customização

- **Themes**: Modifique cores e variações de tema em `themes/`
- **Tokens**: Ajuste valores de design tokens em `tokens/`
- **Fonts**: Configure tipografia em `fonts/`

A configuração é exportada através de `tamagui.config.ts` e aplicada automaticamente via `TamaguiProvider`.
