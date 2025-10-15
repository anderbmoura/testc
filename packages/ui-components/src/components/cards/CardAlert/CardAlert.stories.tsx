import type { Meta, StoryObj } from '@storybook/react';
import { CardAlert } from './CardAlert';
import { View } from 'tamagui';

const meta = {
  title: 'Componentes/Cards/CardAlert',
  component: CardAlert,
  decorators: [
    Story => (
      <View style={{ width: 400 }}>
        <Story />
      </View>
    ),
  ],
  parameters: {
    layout: 'centered',
    docs: {
      description: {
        component:
          'CardAlert é um componente fixo em tela que serve como ponto de atenção para os usuários. Suporta quatro variantes visuais (info, success, warning, danger, smart_tips) e uma ação opcional.',
      },
    },
  },
  tags: ['autodocs'],
  argTypes: {
    variant: {
      control: 'select',
      options: ['info', 'success', 'warning', 'danger', 'smart_tips'],
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

export const SmartTipsBasic: Story = {
  args: {
    variant: 'smart_tips',
    title: 'Dica Importante',
    description:
      'Lorem ipsum dolor sit amet, consecte adipiscing elit. Curabitur et tempus.',
  },
};

// Stories com texto longo (teste de altura automática)
export const InfoLongText: Story = {
  args: {
    variant: 'info',
    title:
      'Título muito longo que pode quebrar em múltiplas linhas para testar',
    description:
      'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Curabitur et tempus erat, in vulputate magna. Sed euismod, nisl quis aliquam ultricies, nunc nisl aliquet nunc, quis aliquam nisl nunc quis nisl. Praesent euismod, nisl quis aliquam ultricies.',
  },
};

export const SuccessLongText: Story = {
  args: {
    variant: 'success',
    title: 'Operação realizada com sucesso',
    description:
      'Esta é uma descrição muito longa para testar se o componente se adapta corretamente ao conteúdo sem cortar o texto. O componente deve ter altura automática e se ajustar ao tamanho do texto, permitindo que todo o conteúdo seja visível sem overflow.',
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

export const SmartTipsWithAction: Story = {
  args: {
    variant: 'smart_tips',
    title: 'Dica Importante',
    description:
      'Lorem ipsum dolor sit amet, consecte adipiscing elit. Curabitur et tempus.',
    action: {
      label: 'Ver mais',
      onPress: () => console.log('Smart Tips action pressed'),
    },
  },
};

// Stories com texto longo E ação (teste completo)
export const WarningLongTextWithAction: Story = {
  args: {
    variant: 'warning',
    title: 'Atenção: Verificação necessária',
    description:
      'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Curabitur et tempus erat, in vulputate magna. Sed euismod, nisl quis aliquam ultricies, nunc nisl aliquet nunc, quis aliquam nisl nunc quis nisl. Este texto é propositalmente longo para garantir que o componente se adapte corretamente.',
    action: {
      label: 'Verificar agora',
      onPress: () => console.log('Warning with long text action pressed'),
    },
  },
};

export const DangerLongTextWithAction: Story = {
  args: {
    variant: 'danger',
    title: 'Erro crítico no sistema',
    description:
      'Ocorreu um erro grave que requer sua atenção imediata. Por favor, revise as configurações e tente novamente. Se o problema persistir, entre em contato com o suporte técnico para obter assistência adicional.',
    action: {
      label: 'Contatar suporte',
      onPress: () => console.log('Danger with long text action pressed'),
    },
  },
};
