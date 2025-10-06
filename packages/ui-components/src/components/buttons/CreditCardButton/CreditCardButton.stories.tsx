import { Meta, StoryObj } from '@storybook/react';
import CreditCardButton from './CreditCardButton';
import { CreditCardButtonProps } from './CreditCardButton.model';

const meta: Meta<CreditCardButtonProps> = {
  title: 'Componentes/Buttons/CreditCardButton',
  component: CreditCardButton,
  parameters: {
    layout: 'centered',
    docs: {
      description: {
        component: `
Componente para exibir o cartão de crédito junto do botão de desbloquear o mesmo.

## Como usar

\`\`\`tsx
import { CreditCardButton } from '@superapp-caixa/dsc-library';

// CreditCardButton padrão
<CreditCardButton active={true} number="1234567812345678" date="01/01/2025" type="Virtual" />
\`\`\`
        `,
      },
    },
  },
  tags: ['autodocs'],
  argTypes: {
    active: {
      control: 'boolean',
      description: 'Define se o botão de desbloquear aparece ou não.',
    },
    number: {
      control: 'text',
      description: 'Número do cartão a ser exibido no card.',
    },
    date: {
      control: 'text',
      description: 'Data de validade do cartão a ser exibida no card.',
    },
    type: {
      control: 'text',
      description: 'Tipo do cartão a ser exibido no card.',
    },
    onPress: {
      action: 'clicked',
      description: 'Função chamada ao clicar no botão "Desbloquear".',
    },
  },
};

export default meta;
type Story = StoryObj<CreditCardButtonProps>;

export const Default: Story = {
  args: {
    active: true,
    number: '1234567812345678',
    date: '01/01/2025',
    type: 'Virtual',
  },
};

export const Inactive: Story = {
  args: {
    active: false,
    number: '8765432187654321',
    date: '12/12/2030',
    type: 'Físico',
  },
};
