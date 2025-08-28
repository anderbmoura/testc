import type { Meta, StoryObj } from '@storybook/react';
import { YStack } from 'tamagui';
import {
  DisplayStandard,
  DisplayStandardSemibold,
  DisplaySmall,
  DisplaySmallSemibold,
  DisplayNumericalStandard,
  DisplayNumericalStandardSemibold,
  DisplayNumericalSmall,
  DisplayNumericalSmallSemibold,
  TitleLarge,
  TitleLargeSemibold,
  TitleStandard,
  TitleStandardSemibold,
  TitleSmall,
  TitleSmallSemibold,
  TitleNumericalLarge,
  TitleNumericalLargeSemibold,
  TitleNumericalStandard,
  TitleNumericalStandardSemibold,
  TitleNumericalSmall,
  TitleNumericalSmallSemibold,
  BodyLarge,
  BodyLargeSemibold,
  BodyStandard,
  BodyStandardSemibold,
  BodySmall,
  BodySmallSemibold,
  LabelStandard,
  LabelStandardBold,
  LabelSmall,
  LabelSmallRegular,
  LabelSmallBold,
  LabelTiny,
  LabelTinyBold,
} from './Typography';

const meta: Meta = {
  title: 'Componentes/Typography',
  parameters: {
    layout: 'padded',
    docs: {
      page: null, // Permite usar MDX customizado
      description: {
        component: `
Os componentes de Tipografia fornecem estilos de texto consistentes em todo o DSC (Design System CAIXA).
Cada componente aplica estilos predefinidos baseados nos tokens do design system.

## Categorias de Tipografia

### Display
Texto grande para títulos principais e displays proeminentes.

### Display Numerical
Texto grande otimizado para exibição de valores numéricos como valores monetários e métricas importantes.

### Title  
Títulos de seção e subtítulos.

### Title Numerical
Títulos otimizados para exibição de valores numéricos, mantendo a hierarquia visual adequada.

### Body
Texto de conteúdo para leitura otimizada.

### Label
Labels de interface e texto auxiliar.

## Uso
Cada componente aceita todas as propriedades padrão do Text do Tamagui para estilização e comportamento adicionais.
        `,
      },
    },
  },
  tags: ['autodocs'],
};

export default meta;
type Story = StoryObj<typeof meta>;

// Display Components Stories
export const DisplayComponents: Story = {
  name: 'Display',
  render: () => (
    <YStack gap={16} padding={16}>
      <DisplayStandard>Display Standard</DisplayStandard>
      <DisplayStandardSemibold>
        Display Standard Semibold
      </DisplayStandardSemibold>
      <DisplaySmall>Display Small</DisplaySmall>
      <DisplaySmallSemibold>Display Small Semibold</DisplaySmallSemibold>
    </YStack>
  ),
  parameters: {
    docs: {
      description: {
        story:
          'Componentes Display são usados para títulos principais e texto de destaque.',
      },
      source: {
        code: `<YStack gap={16} padding={16}>
  <DisplayStandard>Display Standard</DisplayStandard>
  <DisplayStandardSemibold>Display Standard Semibold</DisplayStandardSemibold>
  <DisplaySmall>Display Small</DisplaySmall>
  <DisplaySmallSemibold>Display Small Semibold</DisplaySmallSemibold>
</YStack>`,
      },
    },
  },
};

export const TitleComponents: Story = {
  name: 'Title',
  render: () => (
    <YStack gap={16} padding={16}>
      <TitleLarge>Title Large</TitleLarge>
      <TitleLargeSemibold>Title Large Semibold</TitleLargeSemibold>
      <TitleStandard>Title Standard</TitleStandard>
      <TitleStandardSemibold>Title Standard Semibold</TitleStandardSemibold>
      <TitleSmall>Title Small</TitleSmall>
      <TitleSmallSemibold>Title Small Semibold</TitleSmallSemibold>
    </YStack>
  ),
  parameters: {
    docs: {
      description: {
        story:
          'Componentes Title são usados para títulos de seção e subtítulos.',
      },
      source: {
        code: `<YStack gap={16} padding={16}>
  <TitleLarge>Title Large</TitleLarge>
  <TitleLargeSemibold>Title Large Semibold</TitleLargeSemibold>
  <TitleStandard>Title Standard</TitleStandard>
  <TitleStandardSemibold>Title Standard Semibold</TitleStandardSemibold>
  <TitleSmall>Title Small</TitleSmall>
  <TitleSmallSemibold>Title Small Semibold</TitleSmallSemibold>
</YStack>`,
      },
    },
  },
};

export const BodyComponents: Story = {
  name: 'Body',
  render: () => (
    <YStack gap={16} padding={16}>
      <BodyLarge>Body Large</BodyLarge>
      <BodyLargeSemibold>Body Large Semibold</BodyLargeSemibold>
      <BodyStandard>Body Standard</BodyStandard>
      <BodyStandardSemibold>Body Standard Semibold</BodyStandardSemibold>
      <BodySmall>Body Small</BodySmall>
      <BodySmallSemibold>Body Small Semibold</BodySmallSemibold>
    </YStack>
  ),
  parameters: {
    docs: {
      description: {
        story:
          'Componentes Body são usados para texto de conteúdo principal com leitura otimizada.',
      },
      source: {
        code: `<YStack gap={16} padding={16}>
  <BodyLarge>Body Large</BodyLarge>
  <BodyLargeSemibold>Body Large Semibold</BodyLargeSemibold>
  <BodyStandard>Body Standard</BodyStandard>
  <BodyStandardSemibold>Body Standard Semibold</BodyStandardSemibold>
  <BodySmall>Body Small</BodySmall>
  <BodySmallSemibold>Body Small Semibold</BodySmallSemibold>
</YStack>`,
      },
    },
  },
};

export const LabelComponents: Story = {
  name: 'Label',
  render: () => (
    <YStack gap={16} padding={16}>
      <LabelStandard>Label Standard</LabelStandard>
      <LabelStandardBold>Label Standard Bold</LabelStandardBold>
      <LabelSmall>Label Small</LabelSmall>
      <LabelSmallRegular>Label Small Regular</LabelSmallRegular>
      <LabelSmallBold>Label Small Bold</LabelSmallBold>
      <LabelTiny>Label Tiny</LabelTiny>
      <LabelTinyBold>Label Tiny Bold</LabelTinyBold>
    </YStack>
  ),
  parameters: {
    docs: {
      description: {
        story:
          'Componentes Label são usados para labels de interface e texto auxiliar.',
      },
      source: {
        code: `<YStack gap={16} padding={16}>
  <LabelStandard>Label Standard</LabelStandard>
  <LabelStandardBold>Label Standard Bold</LabelStandardBold>
  <LabelSmall>Label Small</LabelSmall>
  <LabelSmallRegular>Label Small Regular</LabelSmallRegular>
  <LabelSmallBold>Label Small Bold</LabelSmallBold>
  <LabelTiny>Label Tiny</LabelTiny>
  <LabelTinyBold>Label Tiny Bold</LabelTinyBold>
</YStack>`,
      },
    },
  },
};

export const DisplayNumericalComponents: Story = {
  name: 'Display Numerical',
  render: () => (
    <YStack gap={16} padding={16}>
      <DisplayNumericalStandard>123.456,78</DisplayNumericalStandard>
      <DisplayNumericalStandardSemibold>
        123.456,78
      </DisplayNumericalStandardSemibold>
      <DisplayNumericalSmall>123.456,78</DisplayNumericalSmall>
      <DisplayNumericalSmallSemibold>123.456,78</DisplayNumericalSmallSemibold>
    </YStack>
  ),
  parameters: {
    docs: {
      description: {
        story:
          'Componentes Display Numerical são usados para exibir valores numéricos de destaque como valores monetários, percentuais e métricas importantes.',
      },
      source: {
        code: `<YStack gap={16} padding={16}>
  <DisplayNumericalStandard>123.456,78</DisplayNumericalStandard>
  <DisplayNumericalStandardSemibold>123.456,78</DisplayNumericalStandardSemibold>
  <DisplayNumericalSmall>123.456,78</DisplayNumericalSmall>
  <DisplayNumericalSmallSemibold>123.456,78</DisplayNumericalSmallSemibold>
</YStack>`,
      },
    },
  },
};

export const TitleNumericalComponents: Story = {
  name: 'Title Numerical',
  render: () => (
    <YStack gap={16} padding={16}>
      <TitleNumericalLarge>123.456,78</TitleNumericalLarge>
      <TitleNumericalLargeSemibold>123.456,78</TitleNumericalLargeSemibold>
      <TitleNumericalStandard>123.456,78</TitleNumericalStandard>
      <TitleNumericalStandardSemibold>
        123.456,78
      </TitleNumericalStandardSemibold>
      <TitleNumericalSmall>123.456,78</TitleNumericalSmall>
      <TitleNumericalSmallSemibold>123.456,78</TitleNumericalSmallSemibold>
    </YStack>
  ),
  parameters: {
    docs: {
      description: {
        story:
          'Componentes Title Numerical são usados para títulos que contêm valores numéricos, mantendo a hierarquia visual adequada.',
      },
      source: {
        code: `<YStack gap={16} padding={16}>
  <TitleNumericalLarge>123.456,78</TitleNumericalLarge>
  <TitleNumericalLargeSemibold>123.456,78</TitleNumericalLargeSemibold>
  <TitleNumericalStandard>123.456,78</TitleNumericalStandard>
  <TitleNumericalStandardSemibold>123.456,78</TitleNumericalStandardSemibold>
  <TitleNumericalSmall>123.456,78</TitleNumericalSmall>
  <TitleNumericalSmallSemibold>123.456,78</TitleNumericalSmallSemibold>
</YStack>`,
      },
    },
  },
};
