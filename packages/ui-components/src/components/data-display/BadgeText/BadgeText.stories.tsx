import type { Meta, StoryObj } from '@storybook/react';
import BadgeText from './BadgeText';
import type { BadgeTextProps } from './BadgeText.model';

const meta: Meta<BadgeTextProps> = {
  title: 'Componentes/Data Display/BadgeText',
  component: BadgeText,
  parameters: {
    layout: 'centered',
    docs: {
      description: {
        component: `
Componente para exibir badges de texto com diferentes tamanhos e cores.

## Como usar

\`\`\`tsx
import { BadgeText } from '@superapp-caixa/dsc-library';

// Badge padrão
<BadgeText>Badge padrão</BadgeText>

// Badge de tamanho grande
<BadgeText size="large">Badge grande</BadgeText>

// Badge danger
<BadgeText color="danger">Badge danger</BadgeText>

// Badge pequeno danger
<BadgeText size="small" color="danger">Badge pequeno danger</BadgeText>
\`\`\`
        `,
      },
      source: {
        transform: (_: string, { args }: any) => {
          const props = [
            args.size && args.size !== 'medium' && `size="${args.size}"`,
            args.color && args.color !== 'highlight' && `color="${args.color}"`,
          ]
            .filter(Boolean)
            .join(' ');

          const children = args.children || 'Badge Text';

          return `<BadgeText${props && ` ${props}`}>
  ${children}
</BadgeText>`;
        },
        state: 'open',
        excludeDecorators: true,
      },
    },
  },
  tags: ['autodocs'],
  render: args => {
    const key = `badge-text-${Date.now()}`;
    const { children, ...restArgs } = args;
    return (
      <BadgeText key={key} {...restArgs}>
        {children}
      </BadgeText>
    );
  },
  argTypes: {
    size: {
      control: 'radio',
      options: ['large', 'medium', 'small'],
      description: 'Tamanho do badge.',
      table: {
        type: { summary: "'large' | 'medium' | 'small'" },
        defaultValue: { summary: "'medium'" },
      },
    },
    color: {
      control: 'radio',
      options: ['highlight', 'danger'],
      description: 'Cor do badge.',
      table: {
        type: { summary: "'highlight' | 'danger'" },
        defaultValue: { summary: "'highlight'" },
      },
    },
    children: {
      control: 'text',
      description: 'Texto exibido no badge.',
      table: {
        type: { summary: 'React.ReactNode' },
        defaultValue: { summary: 'undefined' },
      },
    },
  },
};

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {
    children: 'Badge Text',
    size: 'medium',
    color: 'highlight',
  },
};
