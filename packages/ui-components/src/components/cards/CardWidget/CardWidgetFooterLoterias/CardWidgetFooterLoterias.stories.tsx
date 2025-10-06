import type { Meta, StoryObj } from '@storybook/react';
import React from 'react';
import { Star } from 'iconoir-react-native';
import { CardWidget } from '../CardWidget';
import { CardWidgetFooterLoterias } from './CardWidgetFooterLoterias';
import type { CardWidgetFooterLoteriasProps } from './CardWidgetFooterLoterias.model';

const meta: Meta<CardWidgetFooterLoteriasProps> = {
  title: 'Componentes/Cards/CardWidget/CardWidgetFooterLoterias',
  component: CardWidgetFooterLoterias,
  parameters: {
    layout: 'centered',
    docs: {
      description: {
        component: `
Footer especializado para exibir números de loteria em formato circular.

O componente sempre exibe exatamente 6 números organizados em 2 linhas de 3 números cada.

## Como usar

\`\`\`tsx
import { CardWidget, CardWidgetFooterLoterias } from '@superapp-caixa/dsc-library';
import { Star } from 'iconoir-react-native';

<CardWidget 
  topLabel="Mega-Sena"
  mainLabel="Concurso 2.650"
  icon={<Star />}
>
  <CardWidgetFooterLoterias 
    numbers={[12, 21, 37, 46, 49, 53]}
  />
</CardWidget>
\`\`\`
        `,
      },
      source: {
        transform: (_: string, { args }: any) => {
          const props = [
            args.numbers &&
              args.numbers.length > 0 &&
              `numbers={[${args.numbers.join(', ')}]}`,
          ]
            .filter(Boolean)
            .join(' ');

          return `<CardWidget topLabel="Mega-Sena" mainLabel="Concurso 2.650" icon={<Star />}>
  <CardWidgetFooterLoterias${props && ` ${props}`} />
</CardWidget>`;
        },
        state: 'open',
        excludeDecorators: true,
      },
    },
  },
  tags: ['autodocs'],
  render: args => {
    return (
      <div style={{ width: '160px' }}>
        <CardWidget
          topLabel="Mega-Sena"
          mainLabel="Concurso 2.650"
          icon={<Star />}
        >
          <CardWidgetFooterLoterias {...args} />
        </CardWidget>
      </div>
    );
  },
  argTypes: {
    numbers: {
      description:
        'Array de números da loteria. Sempre exibe 6 números em 2 linhas de 3.',
      control: { type: 'object' },
      table: {
        type: { summary: 'number[]' },
        defaultValue: { summary: '[]' },
      },
    },
  },
};

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {
    numbers: [12, 21, 37, 46, 49, 53],
  },
};
