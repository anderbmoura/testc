# Themes

Este diretório contém a configuração de temas do Design System Components (DSC), incluindo paletas de cores para modo claro e escuro.

## Estrutura

```
themes/
├── index.ts              # Configuração principal dos temas
└── palettes/             # Paletas de cores organizadas por categoria
    ├── accent.ts         # Cores de destaque/accent
    ├── neutral.ts        # Cores neutras (cinzas)
    └── extras/           # Paletas semânticas
        ├── highlight.ts  # Cores de destaque
        ├── info.ts       # Cores informativas
        ├── success.ts    # Cores de sucesso
        └── warning.ts    # Cores de aviso/erro
```

## Temas Disponíveis

O sistema suporta automaticamente os modos:

- **Light**: Tema claro padrão
- **Dark**: Tema escuro com cores adaptadas

## Paletas de Cores

### Principais

- **Neutral**: Escala de cinzas para texto, fundos e bordas
- **Accent**: Cores primárias da marca para elementos interativos

### Semânticas

- **Highlight**: Cores de destaque especial
- **Info**: Azuis para informações
- **Success**: Verdes para estados de sucesso
- **Warning**: Amarelos e vermelhos para avisos e erros

## Uso

Os temas são aplicados automaticamente através do `TamaguiProvider` e podem ser acessados nos componentes:

```tsx
import { Text } from 'tamagui';

// Cores se adaptam automaticamente ao tema ativo
<Text color="$accent10">Texto com cor accent</Text>
<Text color="$neutral11">Texto neutro</Text>
```
