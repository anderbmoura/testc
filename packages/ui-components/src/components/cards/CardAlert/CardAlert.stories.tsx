import type { Meta, StoryObj } from '@storybook/react';
import { CardAlert } from './CardAlert';

const meta = {
  title: 'Componentes/Cards/CardAlert',
  component: CardAlert,
  parameters: {
    layout: 'centered',
    docs: {
      description: {
        component:
          'CardAlert é um componente fixo em tela que serve como ponto de atenção para os usuários. Suporta quatro variantes visuais (info, success, warning, danger) e uma ação opcional.',
      },
    },
  },
  tags: ['autodocs'],
  argTypes: {
    variant: {
      control: 'select',
      options: ['info', 'success', 'warning', 'danger'],
      description: 'Variante visual do CardAlert',
    },
    title: {
      control: 'text',
      description: 'Título do alerta',
    },
    description: {
      control: 'text',
      description: 'Descrição do alerta',
    },
    action: {
      description: 'Configuração do botão de ação opcional',
    },
  },
} satisfies Meta<typeof CardAlert>;

export default meta;
type Story = StoryObj<typeof meta>;

// Stories básicas sem ação
export const InfoBasic: Story = {
  args: {
    variant: 'info',
    title: 'Importante',
    description:
      'Lorem ipsum dolor sit amet, consecte adipiscing elit. Curabitur et tempus.',
  },
};

export const SuccessBasic: Story = {
  args: {
    variant: 'success',
    title: 'Importante',
    description:
      'Lorem ipsum dolor sit amet, consecte adipiscing elit. Curabitur et tempus.',
  },
};

export const WarningBasic: Story = {
  args: {
    variant: 'warning',
    title: 'Importante',
    description:
      'Lorem ipsum dolor sit amet, consecte adipiscing elit. Curabitur et tempus.',
  },
};

export const DangerBasic: Story = {
  args: {
    variant: 'danger',
    title: 'Importante',
    description:
      'Lorem ipsum dolor sit amet, consecte adipiscing elit. Curabitur et tempus.',
  },
};

// Stories com ação
export const InfoWithAction: Story = {
  args: {
    variant: 'info',
    title: 'Importante',
    description:
      'Lorem ipsum dolor sit amet, consecte adipiscing elit. Curabitur et tempus.',
    action: {
      label: 'Button',
      onPress: () => console.log('Info action pressed'),
    },
  },
};

export const SuccessWithAction: Story = {
  args: {
    variant: 'success',
    title: 'Importante',
    description:
      'Lorem ipsum dolor sit amet, consecte adipiscing elit. Curabitur et tempus.',
    action: {
      label: 'Button',
      onPress: () => console.log('Success action pressed'),
    },
  },
};

export const WarningWithAction: Story = {
  args: {
    variant: 'warning',
    title: 'Importante',
    description:
      'Lorem ipsum dolor sit amet, consecte adipiscing elit. Curabitur et tempus.',
    action: {
      label: 'Button',
      onPress: () => console.log('Warning action pressed'),
    },
  },
};

export const DangerWithAction: Story = {
  args: {
    variant: 'danger',
    title: 'Importante',
    description:
      'Lorem ipsum dolor sit amet, consecte adipiscing elit. Curabitur et tempus.',
    action: {
      label: 'Button',
      onPress: () => console.log('Danger action pressed'),
    },
  },
};
