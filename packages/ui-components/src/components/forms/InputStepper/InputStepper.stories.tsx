import type { Meta, StoryObj } from '@storybook/react';
import React from 'react';
import { Text, View, XStack, YStack } from 'tamagui';
import { InputStepper } from './InputStepper';

// Extraindo os tipos das props do componente
type InputStepperProps = {
  minValue?: number;
  maxValue?: number;
  theme?: string | undefined;
  size?: 'small' | 'large';
};

const meta: Meta<InputStepperProps> = {
  title: 'Componentes/Forms/InputStepper',
  component: InputStepper,
  parameters: {
    layout: 'centered',
    docs: {
      description: {
        component: `
O **InputStepper** é um componente de entrada numérica que permite ao usuário incrementar ou decrementar um valor usando botões ou digitação direta. É ideal para casos onde você precisa de controle preciso sobre valores numéricos.

### Características principais:
- **Controle de incremento/decremento**: Botões + e - para ajustar valores
- **Entrada direta**: Campo de texto editável para inserção manual
- **Validação de limites**: Suporte a valores mínimo e máximo
- **Dois tamanhos**: Small e Large para diferentes contextos
- **Estados visuais**: Botões desabilitados quando limites são atingidos
- **Feedback visual**: Mensagem de feedback no tamanho large

### Casos de uso:
- Seleção de quantidades em e-commerce
- Configuração de parâmetros numéricos
- Formulários com valores limitados
- Controles de configuração
- Campos de entrada em dashboards
        `,
      },
    },
  },
  argTypes: {
    minValue: {
      description: 'Valor mínimo permitido',
      control: { type: 'number' },
      table: {
        type: { summary: 'number' },
        defaultValue: { summary: '0' },
      },
    },
    maxValue: {
      description: 'Valor máximo permitido (opcional)',
      control: { type: 'number' },
      table: {
        type: { summary: 'number | undefined' },
        defaultValue: { summary: 'undefined' },
      },
    },
    size: {
      description: 'Tamanho do componente',
      control: { type: 'select' },
      options: ['small', 'large'],
      table: {
        type: { summary: "'small' | 'large'" },
        defaultValue: { summary: "'large'" },
      },
    },
    theme: {
      description: 'Tema do componente',
      control: { type: 'text' },
      table: {
        type: { summary: 'string' },
        defaultValue: { summary: 'undefined' },
      },
    },
  },
  args: {
    minValue: 0,
    maxValue: undefined,
    size: 'large',
    theme: undefined,
  },
};

export default meta;
type Story = StoryObj<InputStepperProps>;

/**
 * InputStepper padrão com configurações básicas.
 * Permite valores a partir de 0 sem limite máximo.
 */
export const Default: Story = {
  args: {},
};

/**
 * Versão compacta do InputStepper para uso em espaços reduzidos.
 * Ideal para listas, cards ou interfaces densas.
 */
export const Small: Story = {
  args: {
    size: 'small',
    minValue: 1,
    maxValue: 10,
  },
};

/**
 * InputStepper com limite máximo definido.
 * Útil para controlar a quantidade máxima permitida.
 */
export const WithMaxValue: Story = {
  args: {
    minValue: 0,
    maxValue: 5,
  },
};

/**
 * InputStepper começando com valor mínimo diferente de zero.
 * Comum em cenários onde zero não é um valor válido.
 */
export const CustomMinValue: Story = {
  args: {
    minValue: 1,
    maxValue: 100,
  },
};

/**
 * InputStepper com valores em uma faixa específica.
 * Demonstra controle preciso de intervalo permitido.
 */
export const RangeConstrained: Story = {
  args: {
    minValue: 10,
    maxValue: 20,
  },
};

/**
 * Comparação entre os dois tamanhos disponíveis.
 * Mostra as diferenças visuais e de funcionalidade.
 */
export const SizeComparison: Story = {
  render: () => (
    <YStack gap={32} alignItems="center">
      <YStack gap={16} alignItems="center">
        <Text fontWeight="600" fontSize={16}>
          Large (Padrão)
        </Text>
        <InputStepper minValue={0} maxValue={10} size="large" />
        <Text fontSize={14} color="$color11" textAlign="center">
          Inclui feedback message e controles maiores
        </Text>
      </YStack>

      <YStack gap={16} alignItems="center">
        <Text fontWeight="600" fontSize={16}>
          Small (Compacto)
        </Text>
        <InputStepper minValue={0} maxValue={10} size="small" />
        <Text fontSize={14} color="$color11" textAlign="center">
          Versão compacta sem feedback message
        </Text>
      </YStack>
    </YStack>
  ),
};

/**
 * Exemplo de uso em um formulário de e-commerce.
 * Demonstra aplicação prática do componente.
 */
export const EcommerceExample: Story = {
  render: () => {
    const quantity = 1;

    return (
      <YStack gap={24} padding={16} backgroundColor="$background">
        <Text fontWeight="600" fontSize={20}>
          Produto - R$ 29,90
        </Text>

        <View
          padding={16}
          backgroundColor="$neutralBg1"
          borderRadius={12}
          borderWidth={1}
          borderColor="$borderColor"
        >
          <YStack gap={16}>
            <XStack justifyContent="space-between" alignItems="center">
              <Text fontWeight="500">Quantidade:</Text>
              <View width={120}>
                <InputStepper minValue={1} maxValue={10} size="small" />
              </View>
            </XStack>

            <XStack justifyContent="space-between" alignItems="center">
              <Text fontWeight="600" fontSize={16}>
                Total: R$ {(29.9 * quantity).toFixed(2).replace('.', ',')}
              </Text>
            </XStack>
          </YStack>
        </View>

        <YStack gap={12}>
          <Text fontWeight="500">Itens no carrinho:</Text>
          <InputStepper minValue={0} maxValue={99} />
        </YStack>
      </YStack>
    );
  },
};

/**
 * Exemplo de configurações com diferentes parâmetros.
 * Mostra uso em um painel de configurações.
 */
export const SettingsExample: Story = {
  render: () => (
    <YStack gap={24} padding={16} backgroundColor="$background">
      <Text fontWeight="600" fontSize={20}>
        Configurações do Sistema
      </Text>

      <YStack gap={20}>
        <YStack gap={8}>
          <Text fontWeight="500">Timeout de sessão (minutos)</Text>
          <InputStepper minValue={5} maxValue={120} />
        </YStack>

        <YStack gap={8}>
          <Text fontWeight="500">Máximo de tentativas de login</Text>
          <InputStepper minValue={1} maxValue={10} />
        </YStack>

        <YStack gap={8}>
          <Text fontWeight="500">Itens por página</Text>
          <InputStepper minValue={10} maxValue={100} />
        </YStack>

        <YStack gap={8}>
          <Text fontWeight="500">Dias para backup automático</Text>
          <InputStepper minValue={1} maxValue={30} />
        </YStack>
      </YStack>
    </YStack>
  ),
};

/**
 * Demonstração de estados extremos e validações.
 * Mostra comportamento nos limites mínimo e máximo.
 */
export const EdgeCases: Story = {
  render: () => (
    <YStack gap={24} padding={16}>
      <Text fontWeight="600" fontSize={18} textAlign="center">
        Casos Extremos
      </Text>

      <YStack gap={20}>
        <YStack gap={8} alignItems="center">
          <Text fontWeight="500">Sem limite máximo</Text>
          <InputStepper minValue={0} />
          <Text fontSize={12} color="$color11" textAlign="center">
            Pode incrementar indefinidamente
          </Text>
        </YStack>

        <YStack gap={8} alignItems="center">
          <Text fontWeight="500">Intervalo muito restrito (5-7)</Text>
          <InputStepper minValue={5} maxValue={7} />
          <Text fontSize={12} color="$color11" textAlign="center">
            Apenas 3 valores possíveis
          </Text>
        </YStack>

        <YStack gap={8} alignItems="center">
          <Text fontWeight="500">Valor único (min=max=42)</Text>
          <InputStepper minValue={42} maxValue={42} />
          <Text fontSize={12} color="$color11" textAlign="center">
            Botões sempre desabilitados
          </Text>
        </YStack>

        <YStack gap={8} alignItems="center">
          <Text fontWeight="500">Valores negativos (-10 a 10)</Text>
          <InputStepper minValue={-10} maxValue={10} />
          <Text fontSize={12} color="$color11" textAlign="center">
            Suporta números negativos
          </Text>
        </YStack>
      </YStack>
    </YStack>
  ),
};

/**
 * Playground interativo para testar todas as propriedades.
 * Permite experimentar diferentes combinações de props.
 */
export const Playground: Story = {
  render: args => (
    <YStack gap={16} alignItems="center" padding={16}>
      <Text fontWeight="600" fontSize={18}>
        InputStepper Playground
      </Text>

      <Text color="$color11" textAlign="center">
        Use os controles do painel para testar diferentes configurações.
      </Text>

      <View marginTop={16}>
        <InputStepper {...args} />
      </View>

      <View
        padding={16}
        backgroundColor="$neutralBg1"
        borderRadius={8}
        marginTop={16}
      >
        <Text fontWeight="600" marginBottom={8}>
          Configurações Atuais:
        </Text>
        <Text fontSize={14}>Valor mínimo: {args.minValue}</Text>
        <Text fontSize={14}>Valor máximo: {args.maxValue || 'Sem limite'}</Text>
        <Text fontSize={14}>Tamanho: {args.size}</Text>
        <Text fontSize={14}>Tema: {args.theme || 'Padrão'}</Text>
      </View>
    </YStack>
  ),
  args: {
    minValue: 0,
    maxValue: 10,
    size: 'large',
    theme: undefined,
  },
};
