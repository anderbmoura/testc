import type { Meta, StoryObj } from '@storybook/react';
import React from 'react';
import { View } from 'react-native';
import { ActionsButtonRow } from './ActionsButtonRow';
import type { ActionsButtonRowProps } from './ActionsButtonRow.model';
import { ButtonRow } from '../ButtonRow';
import IconButtonText from '../../../components/buttons/IconButtonText';
import {
  Home,
  User,
  Settings,
  CreditCard,
  Bell,
  Heart,
} from 'iconoir-react-native';

const meta: Meta<ActionsButtonRowProps> = {
  title: 'Templates/Buttons/ActionsButtonRow',
  component: ActionsButtonRow,
  parameters: {
    layout: 'centered',
    docs: {
      description: {
        component: `
Template que organiza ações com título, botão de ação e lista de ButtonRow organizados verticalmente. 
Permite limitar a quantidade inicial de linhas exibidas com opção de expandir/contrair.
Título e botão de ação são opcionais e podem ser usados independentemente.

## Como usar

\`\`\`tsx
import { ActionsButtonRow, ButtonRow, IconButtonText } from '@superapp-caixa/dsc-library';
import { Home, User, Settings } from 'iconoir-react-native';

<ActionsButtonRow 
  title="Ações Rápidas" 
  buttonActionName="Saiba mais"
  initialRowNumber={2}
  onButtonAction={() => console.log('Ação executada')}
>
  <ButtonRow>
    <IconButtonText icon={<Home />}>Início</IconButtonText>
    <IconButtonText icon={<User />}>Perfil</IconButtonText>
    <IconButtonText icon={<Settings />}>Configurações</IconButtonText>
  </ButtonRow>
  <ButtonRow>
    <IconButtonText icon={<Home />}>Dashboard</IconButtonText>
    <IconButtonText icon={<User />}>Usuários</IconButtonText>
    <IconButtonText icon={<Settings />}>Admin</IconButtonText>
  </ButtonRow>
</ActionsButtonRow>
\`\`\`
        `,
      },
      source: {
        transform: (_: string, { args }: { args: ActionsButtonRowProps }) => {
          const props = [
            args.title && `title="${args.title}"`,
            args.buttonActionName &&
              `buttonActionName="${args.buttonActionName}"`,
            args.initialRowNumber &&
              args.initialRowNumber !== 2 &&
              `initialRowNumber={${args.initialRowNumber}}`,
            'onButtonAction={() => {}}',
          ]
            .filter(Boolean)
            .join('\n  ');

          const indent = '  ';
          const buttonRowsCode = `${indent}<ButtonRow>
${indent}  <IconButtonText icon={<Home />}>
${indent}    Início
${indent}  </IconButtonText>
${indent}  <IconButtonText icon={<User />}>
${indent}    Perfil
${indent}  </IconButtonText>
${indent}  <IconButtonText icon={<Settings />}>
${indent}    Configurações
${indent}  </IconButtonText>
${indent}</ButtonRow>
${indent}<ButtonRow>
${indent}  <IconButtonText icon={<CreditCard />}>
${indent}    Cartões
${indent}  </IconButtonText>
${indent}  <IconButtonText icon={<Bell />}>
${indent}    Notificações
${indent}  </IconButtonText>
${indent}  <IconButtonText icon={<Heart />}>
${indent}    Favoritos
${indent}  </IconButtonText>
${indent}</ButtonRow>
${indent}<ButtonRow>
${indent}  <IconButtonText icon={<Home />}>
${indent}    Dashboard
${indent}  </IconButtonText>
${indent}  <IconButtonText icon={<User />}>
${indent}    Usuários
${indent}  </IconButtonText>
${indent}  <IconButtonText icon={<Settings />}>
${indent}    Admin
${indent}  </IconButtonText>
${indent}</ButtonRow>`;

          return `<ActionsButtonRow
  ${props}
>
${buttonRowsCode}
</ActionsButtonRow>`;
        },
        state: 'open',
        excludeDecorators: true,
      },
    },
  },
  tags: ['autodocs'],
  decorators: [
    Story => (
      <View style={{ width: 320 }}>
        <Story />
      </View>
    ),
  ],
};

export default meta;
type Story = StoryObj<typeof meta>;

const sampleButtonRows = [
  <ButtonRow key="row1">
    <IconButtonText icon={<Home />}>Início</IconButtonText>
    <IconButtonText icon={<User />}>Perfil</IconButtonText>
    <IconButtonText icon={<Settings />}>Configurações</IconButtonText>
  </ButtonRow>,
  <ButtonRow key="row2">
    <IconButtonText icon={<CreditCard />}>Cartões</IconButtonText>
    <IconButtonText icon={<Bell />}>Notificações</IconButtonText>
    <IconButtonText icon={<Heart />}>Favoritos</IconButtonText>
  </ButtonRow>,
  <ButtonRow key="row3">
    <IconButtonText icon={<Home />}>Dashboard</IconButtonText>
    <IconButtonText icon={<User />}>Usuários</IconButtonText>
    <IconButtonText icon={<Settings />}>Admin</IconButtonText>
  </ButtonRow>,
];

export const Default: Story = {
  argTypes: {
    children: {
      control: false,
      table: { disable: true },
    },
    title: {
      control: 'text',
      description: 'Título opcional para o cabeçalho do ActionsButtonRow',
    },
    buttonActionName: {
      control: 'text',
      description: 'Texto opcional para o botão de ação no cabeçalho',
    },
    initialRowNumber: {
      control: { type: 'number', min: 1, max: 6 },
      description: 'Número inicial de rows visíveis',
    },
    onButtonAction: {
      action: 'buttonPressed',
      description: 'Callback executado quando o botão de ação é pressionado',
    },
  },
  args: {
    title: 'Ações Rápidas',
    buttonActionName: 'Saiba mais',
    initialRowNumber: 2,
    children: sampleButtonRows,
  },
};
