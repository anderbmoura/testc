import type { Meta, StoryObj } from '@storybook/react';
import { ListFooter } from './ListFooter';
import type { ListFooterProps } from './ListFooter.model';

const meta: Meta<ListFooterProps> = {
  title: 'Componentes/Lists/ListFooter',
  component: ListFooter,
  parameters: {
    docs: {
      description: {
        component:
          'Footer de lista com suporte para texto e labels nas posições esquerda e direita. Cada elemento é exibido apenas quando um valor é fornecido.',
      },
      source: {
        transform: (_: string, { args }: any) => {
          const props = [
            args.labelLeft && `labelLeft="${args.labelLeft}"`,
            args.textLeft && `textLeft="${args.textLeft}"`,
            args.labelRight && `labelRight="${args.labelRight}"`,
            args.textRight && `textRight="${args.textRight}"`,
          ]
            .filter(Boolean)
            .join(' ');
          return `<ListFooter${props && ` ${props}`} />`;
        },
        state: 'open',
      },
    },
  },
  tags: ['autodocs'],
  argTypes: {
    labelLeft: {
      control: 'text',
      description: 'Label posicionado à esquerda',
    },
    textLeft: {
      control: 'text',
      description: 'Texto principal posicionado à esquerda',
    },
    labelRight: {
      control: 'text',
      description: 'Label posicionado à direita',
    },
    textRight: {
      control: 'text',
      description: 'Texto principal posicionado à direita',
    },
  },
};

export default meta;
type Story = StoryObj<ListFooterProps>;

export const Default: Story = {
  args: {
    labelLeft: 'Label Left',
    textLeft: 'Text Left',
    labelRight: 'Label Right',
    textRight: 'Text Right',
  },
};
