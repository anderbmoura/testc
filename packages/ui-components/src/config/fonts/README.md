# Typography Presets

Este diretório contém a configuração de tipografia para a biblioteca de componentes, incluindo presets predefinidos para uso consistente em toda a aplicação.

## 🎨 Fontes Disponíveis

### Body Font (Roboto)

- **Família**: Roboto
- **Uso**: Textos de corpo, labels, descrições
- **Pesos**: 400 (regular), 600 (semi-bold)

### Heading Font (CAIXA Std)

- **Família**: CAIXA Std
- **Uso**: Títulos, cabeçalhos, displays
- **Pesos**: 400 (regular), 600 (semi-bold)

## 📏 Tamanhos Disponíveis

| Token     | Pixels | Uso Recomendado  |
| --------- | ------ | ---------------- |
| `quark`   | 12px   | Labels pequenos  |
| `nano`    | 14px   | Labels padrão    |
| `micro`   | 16px   | Texto pequeno    |
| `tiny`    | 18px   | Texto padrão     |
| `smaller` | 20px   | Texto grande     |
| `small`   | 24px   | Títulos pequenos |
| `medium`  | 28px   | Títulos médios   |
| `large`   | 32px   | Títulos grandes  |
| `larger`  | 36px   | Display          |

## 🎯 Typography Presets

Os presets fornecem combinações predefinidas de fonte, tamanho, peso e altura de linha para uso consistente:

### Display

```tsx
// Para títulos principais e displays
displayStandard; // CAIXA Std, 36px, peso 400
displayStandardEmphasized; // CAIXA Std, 36px, peso 600
```

### Títulos

```tsx
// Para títulos de seções
titleLarge; // CAIXA Std, 32px, peso 400
titleLargeEmphasized; // CAIXA Std, 32px, peso 600

titleStandard; // CAIXA Std, 28px, peso 400
titleStandardEmphasized; // CAIXA Std, 28px, peso 600

titleSmall; // CAIXA Std, 24px, peso 400
titleSmallEmphasized; // CAIXA Std, 24px, peso 600
```

### Corpo de Texto

```tsx
// Para textos de conteúdo
bodyLarge; // Roboto, 20px, peso 400
bodyLargeEmphasized; // Roboto, 20px, peso 600

bodyStandard; // Roboto, 18px, peso 400
bodyStandardEmphasized; // Roboto, 18px, peso 600

bodySmall; // Roboto, 16px, peso 400
bodySmallEmphasized; // Roboto, 16px, peso 600
```

### Labels

```tsx
// Para labels e textos auxiliares
labelStandard; // Roboto, 14px, peso 400
labelStandardEmphasized; // Roboto, 14px, peso 600

labelSmall; // Roboto, 12px, peso 400
labelSmallEmphasized; // Roboto, 12px, peso 600

labelTiny; // Roboto, 12px, peso 400
labelTinyEmphasized; // Roboto, 12px, peso 600
```

## 🚀 Como Usar

### 1. Usando Presets com Spread Operator

```tsx
import { typographyPresets } from '@superapp-caixa/dsc-library';
import { Text } from 'tamagui';

function MyComponent() {
  return <Text {...typographyPresets.titleLarge}>My Text</Text>;
}
```

## 🎨 Tokens do Design System

Os presets utilizam tokens do design system que garantem consistência:

### Família de Fonte

- `$body` → Roboto
- `$heading` → CAIXA Std

### Tamanhos

- `$quark` → 12px
- `$nano` → 14px
- `$micro` → 16px
- `$tiny` → 18px
- `$smaller` → 20px
- `$small` → 24px
- `$medium` → 28px
- `$large` → 32px
- `$larger` → 36px

### Pesos

- `$400` → Regular
- `$600` → Semi-bold

### Altura de Linha

- `$20` → 20px
- `$22` → 22px
- `$24` → 24px
- `$28` → 28px
- `$34` → 34px
- `$38` → 38px
- `$44` → 44px
