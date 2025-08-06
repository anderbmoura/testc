# Tokens

Este diretório contém os design tokens do Design System Components (DSC), definindo valores consistentes para espaçamento, bordas e opacidade.

## Estrutura

```
tokens/
├── index.ts       # Configuração principal dos tokens
├── border/        # Tokens de borda (raio e largura)
├── opacity/       # Valores de opacidade
└── space/         # Valores de espaçamento
```

## Tokens Disponíveis

### Space (Espaçamento)

Valores padronizados para margin, padding e gaps:

```
none: 0px      quark: 4px     nano: 8px      micro: 12px
tiny: 16px     smaller: 24px  small: 32px    medium: 40px
large: 48px    larger: 56px   big: 64px      bigger: 72px
```

### Border

- **Radius**: Valores para border-radius
- **Width**: Espessuras de borda padronizadas

### Opacity

Valores de transparência para diferentes estados visuais.

## Uso

Os tokens são acessíveis nos componentes através da sintaxe `$`:

```tsx
import { View, Text } from 'tamagui';

<View
  padding="$medium" // 40px
  marginBottom="$small" // 32px
  borderRadius="$4" // Raio padrão
>
  <Text>Conteúdo</Text>
</View>;
```

## Customização

Para modificar tokens, edite os arquivos correspondentes em cada subdiretório. Os valores são exportados através de `index.ts` e aplicados globalmente no sistema.
