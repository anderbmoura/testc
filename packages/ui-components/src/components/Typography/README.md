# Typography

Este diretório contém os componentes de tipografia do Design System CAIXA (DSC), oferecendo uma hierarquia consistente de textos para diferentes contextos.

## Componentes Disponíveis

### Display

Para títulos principais e destaques de maior importância:

- `DisplayStandard` - Display padrão (peso 400)
- `DisplayStandardEmphasized` - Display enfatizado (peso 600)

### Title

Para títulos de seções e cabeçalhos:

- `TitleLarge` / `TitleLargeEmphasized` - Títulos grandes
- `TitleStandard` / `TitleStandardEmphasized` - Títulos padrão
- `TitleSmall` / `TitleSmallEmphasized` - Títulos pequenos

### Body

Para texto de conteúdo principal:

- `BodyLarge` / `BodyLargeEmphasized` - Corpo grande
- `BodyStandard` / `BodyStandardEmphasized` - Corpo padrão
- `BodySmall` / `BodySmallEmphasized` - Corpo pequeno

### Label

Para rótulos, legendas e textos auxiliares:

- `LabelStandard` / `LabelStandardEmphasized` - Rótulo padrão
- `LabelSmall` / `LabelSmallEmphasized` - Rótulo pequeno
- `LabelTiny` / `LabelTinyEmphasized` - Rótulo muito pequeno

## Famílias de Fonte

- **Heading** (`$heading`): Usada para Display e Title
- **Body** (`$body`): Usada para Body e Label

## Uso

```tsx
import {
  DisplayStandard,
  TitleLarge,
  BodyStandard,
  LabelSmall,
} from '@superapp-caixa/dsc-library';

function ExampleUsage() {
  return (
    <>
      <DisplayStandard>Título Principal</DisplayStandard>
      <TitleLarge>Seção Importante</TitleLarge>
      <BodyStandard>
        Este é um parágrafo de texto principal com informações relevantes.
      </BodyStandard>
      <LabelSmall>Texto auxiliar</LabelSmall>
    </>
  );
}
```

## Variações

Cada componente possui uma versão **Emphasized** com peso de fonte mais pesado (600) para dar maior destaque ao texto quando necessário.
