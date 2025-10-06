import type { Meta, StoryObj } from '@storybook/react';
import React, { useState, useEffect } from 'react';
import { ListAccordion } from './ListAccordion';
import type { ListAccordionProps } from './ListAccordion.model';

const meta: Meta<ListAccordionProps> = {
  title: 'Componentes/Lists/ListAccordion',
  component: ListAccordion,
  parameters: {
    docs: {
      description: {
        component:
          'Item de lista expansível que permite mostrar/ocultar conteúdo com animação de acordo. Inclui texto principal à esquerda, texto opcional à direita e ícone indicativo do estado (expandido/colapsado).',
      },
      source: {
        transform: (_: string, { args }: any) => {
          const props = [
            args.textLeft && `textLeft="${args.textLeft}"`,
            args.textRight && `textRight="${args.textRight}"`,
            args.collapsed !== undefined && `collapsed={${args.collapsed}}`,
            args.disabled && `disabled={${args.disabled}}`,
          ]
            .filter(Boolean)
            .join(' ');
          return `<ListAccordion${props && ` ${props}`} onChange={(value) => {}} />`;
        },
        state: 'open',
      },
    },
  },
  tags: ['autodocs'],
  argTypes: {
    textLeft: {
      control: 'text',
      description: 'Texto principal exibido à esquerda',
    },
    textRight: {
      control: 'text',
      description: 'Texto secundário exibido à direita',
    },
    collapsed: {
      control: 'boolean',
      description: 'Estado do accordion - se está colapsado ou expandido',
    },
    disabled: {
      control: 'boolean',
      description: 'Se o componente está desabilitado',
    },
    onChange: {
      action: 'changed',
      description: 'Callback executado quando o estado do accordion muda',
    },
  },
};

export default meta;
type Story = StoryObj<ListAccordionProps>;

export const Default: Story = {
  render: args => {
    const [collapsed, setCollapsed] = useState(args.collapsed || false);

    useEffect(() => {
      setCollapsed(args.collapsed || false);
    }, [args.collapsed]);

    return (
      <ListAccordion
        {...args}
        collapsed={collapsed}
        onChange={value => {
          setCollapsed(value);
          args.onChange?.(value);
        }}
      />
    );
  },
  args: {
    textLeft: 'Categoria Principal',
    textRight: '5 itens',
    collapsed: false,
    disabled: false,
  },
};
