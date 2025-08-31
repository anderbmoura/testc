import type { Meta, StoryObj } from '@storybook/react';
import Spinner from './Spinner';
import type { SpinnerProps } from './Spinner.model';

const meta: Meta<SpinnerProps> = {
  title: 'Componentes/Spinner',
  component: Spinner,
  parameters: {
    layout: 'centered',
    docs: {
      description: {
        component: `
Componente para exibir indicadores de carregamento.

## Como usar

\`\`\`tsx
import { Spinner } from '@superapp-caixa/dsc-library';

// Spinner padrão
<Spinner />

// Spinner 'small' com tema 'neutral'
<Spinner variant="neutral" size="small" />

// Spinner 'large' (default) com tema 'danger'
<Spinner variant="danger" />
\`\`\`
        `,
      },
      source: {
        transform: (_: string, { args }: any) => {
          const props = [
            args.variant &&
              args.variant !== 'highlight' &&
              `variant="${args.variant}"`,
            args.size && args.size !== 'large' && `size="${args.size}"`,
          ]
            .filter(Boolean)
            .join(' ');

          return `<Spinner${props && ` ${props}`} />`;
        },
        state: 'open',
        excludeDecorators: true,
      },
    },
  },
  tags: ['autodocs'],
  argTypes: {
    variant: {
      control: 'select',
      options: ['highlight', 'neutral', 'danger'],
      description:
        'Variante visual que define o tema de cores aplicado ao spinner.',
      table: {
        defaultValue: { summary: 'highlight' },
      },
    },
    size: {
      control: 'select',
      options: ['small', 'large'],
      description: 'Tamanho do spinner.',
      table: {
        defaultValue: { summary: 'large' },
      },
    },
  },
};

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {
    variant: 'highlight',
    size: 'large',
  },
};
