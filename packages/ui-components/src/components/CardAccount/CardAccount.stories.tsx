import type { Meta, StoryObj } from '@storybook/react';
import CardAccount from './CardAccount';
import type { CardAccountProps } from './CardAccount.model';
import { Eye, Heart, Star, InfoCircle } from 'iconoir-react-native';

const iconMapping = {
  None: null,
  Eye: <Eye />,
  Heart: <Heart />,
  Star: <Star />,
  InfoCircle: <InfoCircle />,
};

interface CardAccountStoryArgs extends CardAccountProps {
  accountType: string;
  accountNumber: string;
  balance: string;
  supportText?: string;
  supportIcon?: keyof typeof iconMapping;
}

const meta: Meta<CardAccountStoryArgs> = {
  title: 'Componentes/CardAccount',
  component: CardAccount,
  parameters: {
    layout: 'centered',
    docs: {
      description: {
        component: `
Componente para exibir cartão de conta bancária com informações da conta e saldo.

## Como usar

\`\`\`tsx
import { CardAccount } from '@superapp-caixa/dsc-library';

// Cartão básico
<CardAccount />

// Cartão customizado
<CardAccount
  theme="highlight"
  headerProps={{
    accountType: "Conta poupança",
    accountNumber: "1234567890-1",
    onPress: () => console.log('Change account')
  }}
  bodyProps={{
    balance: "R$ 5.432,10",
    supportText: "Rendimento disponível"
  }}
/>

// Cartão com saldo negativo
<CardAccount
  theme="danger"
  bodyProps={{
    balance: "R$ -150,00",
    supportText: "Conta em débito"
  }}
/>
\`\`\`
        `,
      },
    },
  },
  tags: ['autodocs'],
  render: args => {
    const {
      theme,
      accountType,
      accountNumber,
      balance,
      supportText,
      supportIcon,
      ...restArgs
    } = args;

    const headerProps = {
      accountType,
      accountNumber,
    };

    const bodyProps = {
      balance,
      ...(supportText && { supportText }),
      ...(supportIcon &&
        supportIcon !== 'None' && { supportIcon: iconMapping[supportIcon] }),
    };

    return (
      <CardAccount
        theme={theme || 'highlight'}
        headerProps={headerProps}
        bodyProps={bodyProps}
        {...restArgs}
      />
    );
  },
  argTypes: {
    theme: {
      control: { type: 'select' },
      options: ['highlight', 'danger', 'success', 'warning', 'info'],
      description: 'Tema visual do cartão',
      table: {
        type: { summary: 'CardAccountTheme' },
        defaultValue: { summary: 'highlight' },
      },
    },
    accountType: {
      control: { type: 'text' },
      description: 'Tipo da conta exibido no header',
      table: {
        type: { summary: 'string' },
        defaultValue: { summary: 'Conta corrente' },
      },
    },
    accountNumber: {
      control: { type: 'text' },
      description: 'Número da conta exibido no header',
      table: {
        type: { summary: 'string' },
        defaultValue: { summary: '0000000000-0' },
      },
    },
    balance: {
      control: { type: 'text' },
      description: 'Saldo da conta exibido no body',
      table: {
        type: { summary: 'string' },
        defaultValue: { summary: 'R$ 999.999,99' },
      },
    },
    supportText: {
      control: { type: 'text' },
      description: 'Texto de suporte opcional no body',
      table: {
        type: { summary: 'string' },
        defaultValue: { summary: 'undefined' },
      },
    },
    supportIcon: {
      control: { type: 'select' },
      options: Object.keys(iconMapping),
      description:
        'Ícone de suporte opcional exibido no body ao lado do texto de suporte',
      table: {
        type: { summary: 'React.ReactNode' },
        defaultValue: { summary: 'undefined' },
      },
    },
    // Ocultar props complexas da interface
    headerProps: {
      table: {
        disable: true,
      },
    },
    bodyProps: {
      table: {
        disable: true,
      },
    },
  },
  args: {
    theme: 'highlight',
    accountType: 'Conta corrente',
    accountNumber: '0000000000-0',
    balance: 'R$ 999.999,99',
    supportText: '',
    supportIcon: 'None',
  },
};

export default meta;
type Story = StoryObj<CardAccountStoryArgs>;

/**
 * Cartão de conta padrão com tema highlight.
 */
export const Default: Story = {};
