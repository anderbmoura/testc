import type { Meta, StoryObj } from '@storybook/react';
import { SkeletonLoading } from './SkeletonLoading';
import type { SkeletonLoadingProps } from './SkeletonLoading.model';

const meta: Meta<SkeletonLoadingProps> = {
  title: 'Componentes/Feedback/SkeletonLoading',
  component: SkeletonLoading,
  parameters: {
    layout: 'centered',
    docs: {
      description: {
        component: `
Componente de carregamento visual que simula conteúdo com placeholders animados.

⚠️ **Observação:** A animação shimmer só é visível em dispositivos móveis. No ambiente web (como o Storybook), o efeito pode não ser exibido corretamente.

## Variantes disponíveis

- \`text\`: Três linhas simulando texto
- \`image-text\`: Ícone à esquerda e texto à direita
- \`text-image\`: Texto à esquerda e ícone à direita
- \`block\`: Bloco genérico
- \`button-small\`, \`button-standard\`, \`button-large\`: Simulam botões de diferentes tamanhos
- \`carousel\`: Cards horizontais simulando carrossel

## Exemplo de uso

\`\`\`tsx
<SkeletonLoading variant="text" />
<SkeletonLoading variant="carousel" />
\`\`\`
        `,
      },
    },
  },
  tags: ['autodocs'],
  argTypes: {
    variant: {
      control: { type: 'select' },
      options: [
        'text',
        'image-text',
        'text-image',
        'block',
        'button-small',
        'button-standard',
        'button-large',
        'carousel',
      ],
      description: 'Define o layout visual do skeleton',
      table: {
        type: { summary: 'SkeletonType' },
        defaultValue: { summary: "'block'" },
      },
    },
  },
};

export default meta;

type Story = StoryObj<SkeletonLoadingProps>;

export const Default: Story = {
  args: {
    variant: 'block',
  },
};
