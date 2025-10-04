import type { Meta, StoryObj } from '@storybook/react';
import React, { useState, useEffect } from 'react';
import { InputMoney } from './InputMoney';
import type { InputMoneyProps } from './InputMoney.model';

const meta: Meta<InputMoneyProps> = {
  title: 'Componentes/Forms/InputMoney',
  component: InputMoney,
  parameters: {
    layout: 'centered',
    docs: {
      description: {
        component: `
Campo de entrada monetário da DSC Library.

## Como usar

\`\`\`tsx
import React, { useState } from 'react';
import { InputMoney } from '@superapp-caixa/dsc-library';

const MyComponent = () => {
  const [valor, setValor] = useState<number>(0);

  return (
    <InputMoney 
      value={valor}
      currency="R$"
      onValueChange={setValor}
    />
  );
};

// Com feedback de erro
const FormWithValidation = () => {
  const [valor, setValor] = useState<number>(0);

  return (
    <InputMoney 
      value={valor}
      feedbackText={valor === 0 ? "Digite um valor válido" : undefined}
      feedbackVariant="danger"
      onValueChange={setValor}
    />
  );
};

// Modo somente leitura
const ReadOnlyExample = () => {
  const [valor] = useState<number>(9999.99);

  return (
    <InputMoney 
      value={valor}
      readOnly={true}
      feedbackText="Valor atual da conta"
      feedbackVariant="neutral"
    />
  );
};

// Com fonte menor
const CompactExample = () => {
  const [valor, setValor] = useState<number>(1500);

  return (
    <InputMoney 
      value={valor}
      smallFont={true}
      onValueChange={setValor}
    />
  );
};
\`\`\`

## Como Funciona

O componente aceita um **valor numérico** como entrada e exibe a formatação automaticamente:
- Entrada: \`1234.56\` (number)
- Exibição: "1.234,56" (formatado)
- Durante a edição: permite entrada como "1234,56" ou "1.234,56"

## Callback onValueChange

O componente chama \`onValueChange\` sempre que o valor muda:

\`\`\`tsx
import React, { useState } from 'react';

const MyMoneyInput = () => {
  const [valor, setValor] = useState<number>(0);

  return (
    <InputMoney 
      value={valor}
      onValueChange={setValor} // Recebe o valor como number
    />
  );
};
\`\`\`

## Feedback Condicional

O feedback só aparece quando \`feedbackText\` é fornecido e pode utilizar as seguintes variantes:

- **neutral**
- **danger**
- **success**
        `,
      },
    },
  },
  tags: ['autodocs'],
  argTypes: {
    value: {
      control: { type: 'number' },
      description: 'Valor monetário numérico a ser exibido',
      table: {
        type: { summary: 'number' },
        defaultValue: { summary: '0' },
      },
    },
    currency: {
      control: { type: 'text' },
      description: 'Símbolo da moeda',
      table: {
        type: { summary: 'string' },
        defaultValue: { summary: '"R$"' },
      },
    },
    onValueChange: {
      action: 'valueChanged',
      description:
        'Callback executado quando o valor muda. Recebe o novo valor como number.',
      table: {
        type: { summary: '(value: number) => void' },
      },
    },
    smallFont: {
      control: { type: 'boolean' },
      description: 'Define se deve usar fonte menor (32px ao invés de 48px)',
      table: {
        type: { summary: 'boolean' },
        defaultValue: { summary: 'false' },
      },
    },
    feedbackText: {
      control: { type: 'text' },
      description:
        'Texto da mensagem de feedback. Se fornecido, o feedback será exibido.',
      table: {
        type: { summary: 'string' },
        defaultValue: { summary: 'undefined' },
      },
    },
    feedbackVariant: {
      control: { type: 'select' },
      options: ['neutral', 'danger', 'success'],
      description: 'Variante do feedback que determina cor e ícone',
      table: {
        type: { summary: 'InputMoneyFeedbackVariant' },
        defaultValue: { summary: '"danger"' },
      },
    },
    disabled: {
      control: { type: 'boolean' },
      description: 'Define se o componente está desabilitado',
      table: {
        type: { summary: 'boolean' },
        defaultValue: { summary: 'false' },
      },
    },
    readOnly: {
      control: { type: 'boolean' },
      description: 'Define se o componente está em modo somente leitura',
      table: {
        type: { summary: 'boolean' },
        defaultValue: { summary: 'false' },
      },
    },
    onPress: {
      action: 'pressed',
      description: 'Callback executado quando o componente é pressionado',
      table: {
        type: { summary: '() => void' },
      },
    },
    onFocus: {
      action: 'focused',
      description: 'Callback executado quando o componente recebe foco',
      table: {
        type: { summary: '() => void' },
      },
    },
    onBlur: {
      action: 'blurred',
      description: 'Callback executado quando o componente perde foco',
      table: {
        type: { summary: '() => void' },
      },
    },
  },
};

export default meta;
type Story = StoryObj<InputMoneyProps>;

export const Default: Story = {
  render: args => {
    const [valor, setValor] = useState<number>(args.value || 0);

    // Sincroniza o estado local quando args.value muda
    useEffect(() => {
      setValor(args.value || 0);
    }, [args.value]);

    return <InputMoney {...args} value={valor} onValueChange={setValor} />;
  },
  args: {
    value: 0,
    currency: 'R$',
    smallFont: false,
    feedbackText: 'Digite um valor',
    feedbackVariant: 'neutral',
  },
  parameters: {
    docs: {
      source: {
        transform: (code: string, storyContext: unknown) => {
          const { args } = storyContext as { args: Record<string, unknown> };

          // Gera as props dinamicamente
          const props = [];
          props.push(`value={valor}`);
          props.push(`currency="${args['currency'] || 'R$'}"`);
          if (args['smallFont']) props.push(`smallFont={true}`);
          if (args['feedbackText'])
            props.push(`feedbackText="${args['feedbackText']}"`);
          if (args['feedbackVariant'] && args['feedbackVariant'] !== 'danger')
            props.push(`feedbackVariant="${args['feedbackVariant']}"`);
          if (args['disabled']) props.push(`disabled={true}`);
          if (args['readOnly']) props.push(`readOnly={true}`);
          props.push(`onValueChange={setValor}`);

          const propsString = props.join('\n      ');

          return `import React, { useState, useEffect } from 'react';
import { InputMoney } from '@superapp-caixa/dsc-library';

const MyComponent = () => {
  const [valor, setValor] = useState<number>(${args['value'] || 0});

  return (
    <InputMoney
      ${propsString}
    />
  );
};`;
        },
      },
    },
  },
};
