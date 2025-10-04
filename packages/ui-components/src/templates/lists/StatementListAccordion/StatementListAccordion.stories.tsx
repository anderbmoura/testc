import type { Meta, StoryObj } from '@storybook/react';
import React, { useState, useEffect } from 'react';
import { View } from 'react-native';
import { StatementListAccordion } from './StatementListAccordion';
import { ExtractItem } from '../../../components/data-display/ExtractList/ExtractItem/ExtractItem';
import { ListFooter } from '../../../components/lists/ListFooter';
import type { StatementListAccordionProps } from './StatementListAccordion.model';
import { CreditCard, Home, LightBulb, Car, Phone } from 'iconoir-react-native';

const meta: Meta<StatementListAccordionProps> = {
  title: 'Templates/Lists/StatementListAccordion',
  component: StatementListAccordion,
  parameters: {
    layout: 'centered',
    docs: {
      description: {
        component: `
Template de lista expansível com accordion para exibição de extratos e declarações financeiras.
Combina ListAccordion, ListItem, ListFooter e Separator para criar uma interface organizada de informações financeiras.

## Como usar

\`\`\`tsx
import { StatementListAccordion, ExtractItem, ListFooter } from '@superapp-caixa/dsc-library';
import { CreditCard, Home, LightBulb } from 'iconoir-react-native';

<StatementListAccordion 
  textLeft="A vencer (3)" 
  textRight="R$ 2.200,00"
  collapsed={false}
  onChange={(expanded) => console.log('Estado:', expanded)}
>
  <ExtractItem
    item={{
      service: "Fatura do cartão",
      detail: "Venc: 15/10/2025",
      value: "R$ 1.200,00"
    }}
    icon={<CreditCard />}
    onPress={() => console.log('Fatura selecionada')}
  />
  <ExtractItem
    item={{
      service: "Financiamento casa",
      detail: "Venc: 20/10/2025",
      value: "R$ 850,00"
    }}
    icon={<Home />}
    onPress={() => console.log('Financiamento selecionado')}
  />
  <ExtractItem
    item={{
      service: "Conta de energia",
      detail: "Venc: 25/10/2025",
      value: "R$ 150,00"
    }}
    icon={<LightBulb />}
    onPress={() => console.log('Conta selecionada')}
  />
  <ListFooter
    textLeft="Total"
    textRight="R$ 2.200,00"
  />
</StatementListAccordion>
\`\`\`

## Características

- **Accordion interativo**: Cabeçalho clicável para expandir/colapsar o conteúdo
- **Itens de extrato**: Suporta ExtractItems com ícones, valores e detalhes financeiros
- **Rodapé com totais**: ListFooter para exibir informações consolidadas
- **Separador configurável**: Controle opcional para exibir separador inferior
- **Estado controlado**: Gerenciamento interno ou externo do estado de expansão
        `,
      },
      source: {
        transform: (_: string, { args }: any) => {
          const props = [
            args.textLeft && `textLeft="${args.textLeft}"`,
            args.textRight && `textRight="${args.textRight}"`,
            args.collapsed !== undefined && `collapsed={${args.collapsed}}`,
            args.disabled && `disabled={${args.disabled}}`,
            args.showSeparator === false &&
              `showSeparator={${args.showSeparator}}`,
          ]
            .filter(Boolean)
            .join(' ');
          return `<StatementListAccordion${props && ` ${props}`} onChange={(value) => console.log('Estado:', value)}>
  <ExtractItem
    item={{
      service: "Fatura do cartão",
      detail: "Venc: 15/10/2025",
      value: "R$ 1.200,00"
    }}
    icon={<CreditCard />}
    onPress={() => console.log('Fatura selecionada')}
  />
  <ExtractItem
    item={{
      service: "Financiamento casa",
      detail: "Venc: 20/10/2025",
      value: "R$ 850,00"
    }}
    icon={<Home />}
    onPress={() => console.log('Financiamento selecionado')}
  />
  <ExtractItem
    item={{
      service: "Conta de energia",
      detail: "Venc: 25/10/2025",
      value: "R$ 150,00"
    }}
    icon={<LightBulb />}
    onPress={() => console.log('Conta selecionada')}
  />
  <ListFooter
    labelLeft="Total a vencer"
    textLeft="Próximos 30 dias"
    textRight="R$ 2.659,90"
  />
</StatementListAccordion>`;
        },
        state: 'open',
        excludeDecorators: true,
      },
    },
  },
  tags: ['autodocs'],
  decorators: [
    Story => (
      <View style={{ maxWidth: 400, width: '100%' }}>
        <Story />
      </View>
    ),
  ],
  argTypes: {
    textLeft: {
      control: 'text',
      description: 'Texto principal exibido no accordion',
      table: {
        type: { summary: 'string' },
      },
    },
    textRight: {
      control: 'text',
      description: 'Texto secundário opcional exibido à direita no accordion',
      table: {
        type: { summary: 'string' },
      },
    },
    collapsed: {
      control: 'boolean',
      description:
        'Estado inicial do accordion - se está colapsado ou expandido',
      table: {
        type: { summary: 'boolean' },
        defaultValue: { summary: 'false' },
      },
    },
    disabled: {
      control: 'boolean',
      description: 'Se o componente está desabilitado',
      table: {
        type: { summary: 'boolean' },
        defaultValue: { summary: 'false' },
      },
    },
    showSeparator: {
      control: 'boolean',
      description: 'Se deve exibir o separador inferior',
      table: {
        type: { summary: 'boolean' },
        defaultValue: { summary: 'true' },
      },
    },
    onChange: {
      action: 'changed',
      description: 'Callback executado quando o estado do accordion muda',
      table: {
        type: { summary: '(value: boolean) => void' },
      },
    },
    children: {
      description: 'Elementos filhos incluindo ExtractItems e ListFooter',
      control: false,
      table: {
        type: { summary: 'ReactNode' },
      },
    },
  },
};

export default meta;
type Story = StoryObj<StatementListAccordionProps>;

export const Default: Story = {
  render: args => {
    const [collapsed, setCollapsed] = useState(args.collapsed || false);

    useEffect(() => {
      setCollapsed(args.collapsed || false);
    }, [args.collapsed]);

    return (
      <StatementListAccordion
        {...args}
        collapsed={collapsed}
        onChange={value => {
          setCollapsed(value);
          args.onChange?.(value);
        }}
      >
        <ExtractItem
          item={{
            service: 'Fatura do cartão',
            detail: 'Venc: 15/10/2025',
            value: 'R$ 1.200,00',
          }}
          icon={<CreditCard />}
          onPress={() => console.log('Fatura selecionada')}
        />
        <ExtractItem
          item={{
            service: 'Financiamento casa',
            detail: 'Venc: 20/10/2025',
            value: 'R$ 850,00',
          }}
          icon={<Home />}
          onPress={() => console.log('Financiamento selecionado')}
        />
        <ExtractItem
          item={{
            service: 'Conta de energia',
            detail: 'Venc: 25/10/2025',
            value: 'R$ 150,00',
          }}
          icon={<LightBulb />}
          onPress={() => console.log('Conta selecionada')}
        />
        <ExtractItem
          item={{
            service: 'IPVA do veículo',
            detail: 'Venc: 30/10/2025',
            value: 'R$ 320,00',
          }}
          icon={<Car />}
          onPress={() => console.log('IPVA selecionado')}
        />
        <ExtractItem
          item={{
            service: 'Conta de telefone',
            detail: 'Venc: 05/11/2025',
            value: 'R$ 89,90',
          }}
          icon={<Phone />}
          onPress={() => console.log('Telefone selecionado')}
        />
        <ListFooter
          labelLeft="Total a vencer"
          textLeft="Próximos 30 dias"
          textRight="R$ 2.659,90"
        />
      </StatementListAccordion>
    );
  },
  args: {
    textLeft: 'A vencer (5)',
    textRight: 'R$ 2.659,90',
    collapsed: false,
    disabled: false,
    showSeparator: true,
  },
};
