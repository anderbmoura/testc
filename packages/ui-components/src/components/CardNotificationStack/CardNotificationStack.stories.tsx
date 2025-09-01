import type { Meta, StoryObj } from '@storybook/react';
import { CardNotificationStack } from './CardNotificationStack';
import { CardNotification } from '../CardNotification';
import { View } from 'tamagui';
import {
  InfoCircle,
  BadgeCheck,
  WarningTriangle,
  WarningHexagon,
  Bell,
} from 'iconoir-react-native';

const meta: Meta<React.ComponentProps<typeof CardNotificationStack>> = {
  title: 'Componentes/CardNotificationStack',
  component: CardNotificationStack,
  parameters: {
    layout: 'centered',
    docs: {
      description: {
        component: `
Componente DSC CardNotificationStack para exibir múltiplos componentes CardNotification em formato de deck/pilha.

## Características principais

- **Formato de deck**: O primeiro card fica na frente e os demais ficam atrás com deslocamento.
- **Máximo de 3 cards visíveis**: Exibe até 3 cards visíveis simultaneamente.

## Como usar

\`\`\`tsx
import { CardNotificationStack, CardNotification } from '@superapp-caixa/dsc-library';
import { InfoCircle, BadgeCheck, WarningTriangle } from 'iconoir-react-native';

<CardNotificationStack>
  <CardNotification 
    variant="success"
    label="Operação concluída" 
    description="Sua solicitação foi processada com sucesso."
    icon={<BadgeCheck />}
  />
  <CardNotification 
    variant="info"
    label="Nova mensagem" 
    description="Você tem uma nova mensagem em sua caixa de entrada."
    icon={<InfoCircle />}
  />
  <CardNotification 
    variant="warning"
    label="Atenção necessária" 
    description="Verifique os dados antes de continuar."
    icon={<WarningTriangle />}
  />
</CardNotificationStack>
\`\`\`
        `,
      },
      source: {
        transform: () => {
          return `<CardNotificationStack>
  <CardNotification 
    variant="success"
    label="Operação concluída" 
    description="Sua solicitação foi processada com sucesso."
    icon={<BadgeCheck />}
  />
  <CardNotification 
    variant="info"
    label="Nova mensagem" 
    description="Você tem uma nova mensagem em sua caixa de entrada."
    icon={<InfoCircle />}
  />
  <CardNotification 
    variant="warning"
    label="Atenção necessária" 
    description="Verifique os dados antes de continuar."
    icon={<WarningTriangle />}
  />
  <CardNotification 
    variant="danger"
    label="Erro detectado" 
    description="Um problema foi identificado no sistema."
    icon={<WarningHexagon />}
  />
  <CardNotification 
    variant="accent"
    label="Novidade disponível" 
    description="Confira as novas funcionalidades."
    icon={<Bell />}
  />
</CardNotificationStack>`;
        },
        state: 'open',
        excludeDecorators: true,
      },
    },
  },
  tags: ['autodocs'],
  render: args => {
    return (
      <View width={400} padding={16}>
        <CardNotificationStack {...args} />
      </View>
    );
  },
  argTypes: {
    children: {
      table: {
        disable: true,
      },
    },
  },
};

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {
    children: [
      <CardNotification
        key="1"
        variant="success"
        label="Operação concluída"
        description="Sua solicitação foi processada com sucesso."
        icon={<BadgeCheck />}
      />,
      <CardNotification
        key="2"
        variant="info"
        label="Nova mensagem"
        description="Você tem uma nova mensagem em sua caixa de entrada."
        icon={<InfoCircle />}
      />,
      <CardNotification
        key="3"
        variant="warning"
        label="Atenção necessária"
        description="Verifique os dados antes de continuar com a operação."
        icon={<WarningTriangle />}
      />,
      <CardNotification
        key="4"
        variant="danger"
        label="Erro detectado"
        description="Um problema foi identificado no sistema."
        icon={<WarningHexagon />}
      />,
      <CardNotification
        key="5"
        variant="accent"
        label="Novidade disponível"
        description="Confira as novas funcionalidades que preparamos para você."
        icon={<Bell />}
      />,
    ],
  },
};
