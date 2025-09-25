import type { Meta, StoryObj } from '@storybook/react';
import { Slider } from './Slider';
import type { SliderProps } from './Slider.model';
import { useState } from 'react';
import { YStack } from 'tamagui';
import React from 'react';

const meta: Meta<SliderProps> = {
  title: 'Componentes/Slider',
  component: Slider,
  parameters: {
    layout: 'centered',
    docs: {
      description: {
        component: `
Componente Slider para seleção de valores numéricos dentro de um intervalo.

## Características

- **Interativo**: Suporte a mouse, toque e teclado
- **Acessível**: Navegação por teclado e ARIA labels
- **Estados visuais**: Default, hover, pressed, focus e disabled
- **Progresso**: Exibição opcional da porcentagem
- **Customizável**: Min, max, step configuráveis

## Uso Básico

\`\`\`tsx
import { Slider } from '@superapp-caixa/dsc-library';

function Example() {
  const [value, setValue] = useState(50);

  return (
    <Slider
      value={value}
      onValueChange={setValue}
      min={0}
      max={100}
      step={1}
      label="Volume"
      showProgress
    />
  );
}
\`\`\`

## Navegação por Teclado

- **→ / ↑**: Aumenta o valor em 1 step
- **← / ↓**: Diminui o valor em 1 step
- **Home**: Vai para o valor mínimo
- **End**: Vai para o valor máximo
- **Page Up**: Aumenta o valor em 10 steps
- **Page Down**: Diminui o valor em 10 steps

## Estados do Handle

### Default
Estado padrão do controle

### Hover
Quando o mouse está sobre o controle - escala 1x e sombra

### Pressed
Durante o arraste - escala 1x e cor mais escura

### Focus
Quando navegando por teclado - escala 1x e outline
        `,
      },
    },
  },
  argTypes: {
    value: {
      control: { type: 'range', min: 0, max: 100, step: 1 },
      description: 'Valor atual do slider',
      table: {
        type: { summary: 'number' },
        defaultValue: { summary: '0' },
      },
    },
    min: {
      control: { type: 'number' },
      description: 'Valor mínimo',
      table: {
        type: { summary: 'number' },
        defaultValue: { summary: '0' },
      },
    },
    max: {
      control: { type: 'number' },
      description: 'Valor máximo',
      table: {
        type: { summary: 'number' },
        defaultValue: { summary: '100' },
      },
    },
    step: {
      control: { type: 'number' },
      description: 'Incremento do slider',
      table: {
        type: { summary: 'number' },
        defaultValue: { summary: '1' },
      },
    },
    label: {
      control: { type: 'text' },
      description: 'Label exibida acima do slider',
      table: {
        type: { summary: 'string' },
      },
    },
    showProgress: {
      control: { type: 'boolean' },
      description: 'Exibe a porcentagem de progresso',
      table: {
        type: { summary: 'boolean' },
        defaultValue: { summary: 'true' },
      },
    },
    disabled: {
      control: { type: 'boolean' },
      description: 'Desabilita o slider',
      table: {
        type: { summary: 'boolean' },
        defaultValue: { summary: 'false' },
      },
    },
    onValueChange: {
      action: 'valueChanged',
      description: 'Callback quando o valor muda',
      table: {
        type: { summary: '(value: number) => void' },
      },
    },
  },
  tags: ['autodocs'],
};

export default meta;

type Story = StoryObj<SliderProps>;

export const Default: Story = {
  args: {
    label: 'Slider',
    value: 43,
    min: 0,
    max: 100,
    step: 1,
    showProgress: false,
  },
  render: args => {
    const [value, setValue] = useState(args.value || 0);

    return (
      <YStack width={400} padding="$medium" gap="$medium">
        <Slider {...args} value={value} onValueChange={setValue} />
      </YStack>
    );
  },
};
