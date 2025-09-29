import type { Meta, StoryObj } from '@storybook/react';
import { FeedbackIllustration } from './FeedbackIllustration';

const meta: Meta<typeof FeedbackIllustration> = {
  title: 'Componentes/FeedbackIllustration',
  component: FeedbackIllustration,
  parameters: {
    layout: 'centered',
    docs: {
      description: {
        component:
          'Componente para exibir ilustrações de feedback baseadas no status fornecido.',
      },
    },
  },
  argTypes: {
    status: {
      control: { type: 'select' },
      options: ['success', 'warning', 'danger', 'informative'],
      description: 'Status que define qual ilustração será exibida',
    },
    alt: {
      control: { type: 'text' },
      description: 'Texto alternativo para acessibilidade',
    },
  },
  tags: ['autodocs'],
};

export default meta;

type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {
    status: 'success',
  },
};
