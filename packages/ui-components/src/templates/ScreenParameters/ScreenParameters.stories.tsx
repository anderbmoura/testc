import type { Meta, StoryObj } from '@storybook/react';
import React from 'react';
import { ScreenParameters } from './ScreenParameters';
import TopAppBar from '../../components/navigation/TopAppBar';
import { ValueSection } from '../../components/data-display';
import { Avatar } from '../../components/data-display';
import { ContentCard } from '../lists';
import { ListItem } from '../../components/lists/ListItem';
import { ButtonRow } from '../buttons/ButtonRow';
import IconButtonText from '../../components/buttons/IconButtonText';
import { ScreenFooter } from '../../components/layout/ScreenFooter';
import Button from '../../components/buttons/Button';
import {
  Camera,
  Link,
  EditPencil,
  Settings,
  Calendar,
  CheckCircle,
  Barcode,
} from 'iconoir-react-native';

// Interface estendida para incluir controle do ValueSection
interface ScreenParametersStoryArgs {
  topAppBarTitle: string;
  valueNumber: number;
  valueLabel: string;
  bodyContentGap: string;
  bodyContentPaddingTop: string;
}

/**
 * # ScreenParameters
 *
 * Template para organizar telas completas de parâmetros com estrutura padronizada.
 *
 * ## Características
 *
 * - ✅ Separa automaticamente TopAppBar, Avatar/Ícone, ValueSection, Body Content e ScreenFooter
 * - ✅ Body scrollável quando conteúdo excede altura disponível
 * - ✅ Footer fixo sempre visível no rodapé
 * - ✅ Avatar/Ícone centralizado no topo (quando presente)
 * - ✅ ValueSection sempre no topo à esquerda
 * - ✅ Padding e spacing configuráveis via tokens do design system
 * - ✅ Suporte completo para ValueSection, ContentCard, ButtonRow, IconButtonText
 *
 * ## Estrutura
 *
 * O componente aceita children e os organiza automaticamente em seções:
 *
 * 1. **TopAppBar** - Fixo no topo (identificado pelo displayName ou props)
 * 2. **Avatar/Ícone** - Centralizado no topo (identificado pelo displayName ou props style)
 * 3. **ValueSection** - sempre no topo à esquerda
 * 4. **Body Content** - Scrollável (ContentCard, ButtonRow, ListItem, etc)
 * 5. **ScreenFooter** - Fixo no rodapé (identificado pelo displayName ou props)
 *
 * ## Componentes permitidos como children
 *
 * - TopAppBar
 * - Avatar (com style: monogram, image, icon)
 * - ValueSection
 * - optionList
 * - ContentCard
 * - ButtonRow
 * - ListItem (fora de ContentCard)
 * - ScreenFooter
 *
 * ## Quando usar
 *
 * - Telas de confirmação de pagamentos
 * - Telas de detalhes de transações
 * - Telas de parâmetros de configuração
 * - Telas de perfil do usuário
 *
 * ## Boas práticas
 *
 * - ✅ Use Avatar para representar usuário ou entidade (com style: monogram, image, icon)
 * - ✅ Use ValueSection para destacar valor principal (ex: valor do pagamento)
 * - ✅ Use SegmentedButton para agrupar por abas informações relacionadas (Não tem exemplo no figma pois o width do componente está pegando o tamanho da janela web)
 * - ✅ Use ContentCard para agrupar informações relacionadas
 * - ✅ Use ButtonRow para ações secundárias com IconButtonText
 * - ✅ Use ScreenFooter para ação primária com Button
 * - ✅ Configure bodyContentGap e bodyContentPaddingTop com tokens de space
 * - ❌ Não coloque múltiplos TopAppBar, Avatar, ValueSection ou ScreenFooter
 */
const meta: Meta<ScreenParametersStoryArgs> = {
  title: 'Templates/Screens/ScreenParameters',
  component: ScreenParameters as any,
  parameters: {
    layout: 'centered',
    docs: {
      description: {
        component: `
Template que organiza automaticamente uma tela completa de parâmetros com TopAppBar, Avatar/Ícone, ValueSection, conteúdo scrollável e ScreenFooter fixo.

### Separação Automática de Children

O componente identifica e organiza automaticamente os children:

- **TopAppBar**: Identificado pelo \`displayName\` ou props \`variant\` (small, medium, large, select, home, floating)
- **Avatar/Ícone**: Identificado pelo \`displayName\` "Avatar" ou props \`style\` (monogram, image, icon)
- **ValueSection**: Sempre no topo à esquerda
- **Body**: Todos os outros componentes (ContentCard, ButtonRow, ListItem)
- **ScreenFooter**: Identificado pelo \`displayName\` ou props \`variant\` (button, iconButton)

### Componentes Permitidos

Apenas os seguintes componentes são aceitos como children:
- TopAppBar
- Avatar (com style: monogram, image, icon)
- ValueSection  
- SegmentedButton
- View
- ContentCard
- ButtonRow
- ListItem (pode ser usado fora do ContentCard)
- ScreenFooter

### Espaçamento Configurável

Use as props para controlar o espaçamento:
- \`bodyContentGap\`: Espaço entre elementos do body
- \`bodyContentPaddingTop\`: Espaço do topo do primeiro elemento do body

### Layout

- Avatar/Ícone centralizado no topo (quando presente)
- ValueSection no topo à esquerda
- Body com scroll automático e espaçamento configurável
- Footer sempre fixo no rodapé
- Padding horizontal de \`$tiny\` (ScreenFooter e ButtonRow)
- Gap configurável entre elementos do body
        `,
      },
    },
  },
  argTypes: {
    topAppBarTitle: {
      control: { type: 'text' },
      description: 'Título exibido no TopAppBar',
      table: {
        type: { summary: 'string' },
      },
    },
    valueNumber: {
      control: { type: 'number' },
      description: 'Valor principal exibido na ValueSection',
      table: {
        type: { summary: 'number' },
      },
    },
    valueLabel: {
      control: { type: 'text' },
      description: 'Label opcional acima do valor',
      table: {
        type: { summary: 'string' },
      },
    },
    bodyContentGap: {
      control: { type: 'select' },
      options: ['$tiny', '$small', '$medium', '$large'],
      description: 'Espaçamento entre elementos do body (tokens de space)',
      table: {
        type: { summary: 'GetTokenString<"space">' },
        defaultValue: { summary: "'$tiny'" },
      },
    },
    bodyContentPaddingTop: {
      control: { type: 'select' },
      options: ['$tiny', '$small', '$medium', '$large', '$big'],
      description: 'Espaçamento do topo do primeiro elemento do body',
      table: {
        type: { summary: 'GetTokenString<"space">' },
        defaultValue: { summary: "'$tiny'" },
      },
    },
  },
  tags: ['autodocs'],
};

export default meta;
type Story = StoryObj<ScreenParametersStoryArgs>;

/**
 * Exemplo completo de uma tela de parâmetros de pagamento.
 * O valor "R$ 250,00" é exibido em destaque na ValueSection.
 */
export const Default: Story = {
  args: {
    topAppBarTitle: 'label',
    valueNumber: 250,
    valueLabel: 'Label',
    bodyContentGap: '$tiny',
    bodyContentPaddingTop: '$tiny',
  },
  render: args => {
    return (
      <ScreenParameters
        bodyContentGap={args.bodyContentGap as any}
        bodyContentPaddingTop={args.bodyContentPaddingTop as any}
      >
        <TopAppBar variant="small" title={args.topAppBarTitle} />
        <ValueSection value={args.valueNumber} label={args.valueLabel} />
        <ContentCard showListHeading={false}>
          <ListItem
            textOnLeft="Destinatário"
            textOnRight="João Silva"
            labelBottomLeft="CPF: 123.456.789-00"
            rightSlot={<EditPencil />}
          />
          <ListItem
            textOnLeft="Banco"
            textOnRight="341"
            labelBottomLeft="Itaú Unibanco"
          />
          <ListItem
            textOnLeft="Agência"
            textOnRight="1234"
            labelBottomLeft="Ag. Centro"
          />
        </ContentCard>

        <ButtonRow>
          <IconButtonText icon={<Camera />}>QR Code</IconButtonText>
          <IconButtonText icon={<Link />}>PIX Copia e Cola</IconButtonText>
          <IconButtonText icon={<Settings />}>Configurações</IconButtonText>
        </ButtonRow>

        <ScreenFooter variant="button">
          <Button>Confirmar pagamento</Button>
        </ScreenFooter>
      </ScreenParameters>
    );
  },
  parameters: {
    docs: {
      source: {
        transform: (_: string, { args }: any) =>
          `
<ScreenParameters 
  bodyContentGap="${args.bodyContentGap}"
  bodyContentPaddingTop="${args.bodyContentPaddingTop}"
>
  <TopAppBar variant="small" title="${args.topAppBarTitle}" />
  
  <ValueSection value="${args.valueText}" label="${args.valueLabel || ''}" />
  
  <ContentCard>
    <ListItem
      textOnLeft="Destinatário"
      textOnRight="João Silva"
      labelBottomLeft="CPF: 123.456.789-00"
      rightSlot={<EditPencil />}
    />
    <ListItem
      textOnLeft="Banco"
      textOnRight="341"
      labelBottomLeft="Itaú Unibanco"
    />
    <ListItem
      textOnLeft="Agência"
      textOnRight="1234"
      labelBottomLeft="Ag. Centro"
    />
    <ListItem
      textOnLeft="Conta"
      textOnRight="12345-6"
      labelBottomLeft="Conta Corrente"
    />
    <ListFooter
      labelLeft="Taxa"
      textLeft="R$ 2,50"
      labelRight="Total"
      textRight="R$ 252,50"
    />
  </ContentCard>
  
  <ButtonRow>
    <IconButtonText icon={<Camera />}>QR Code</IconButtonText>
    <IconButtonText icon={<Link />}>PIX Copia e Cola</IconButtonText>
    <IconButtonText icon={<Settings />}>Configurações</IconButtonText>
  </ButtonRow>
  
  <ScreenFooter variant="button">
    <Button>Confirmar pagamento</Button>
  </ScreenFooter>
</ScreenParameters>
        `.trim(),
        state: 'open',
        excludeDecorators: true,
      },
    },
  },
};

/**
 * Exemplo com espaçamento customizado entre elementos.
 * Demonstra como usar as props bodyContentGap e bodyContentPaddingTop.
 */
export const WithCustomSpacing: Story = {
  args: {
    topAppBarTitle: 'Transferência PIX',
    valueNumber: 1500,
    valueLabel: 'Valor da transferência',
    bodyContentGap: '$medium',
    bodyContentPaddingTop: '$small',
  },
  render: args => {
    return (
      <ScreenParameters
        bodyContentGap={args.bodyContentGap as any}
        bodyContentPaddingTop={args.bodyContentPaddingTop as any}
      >
        <TopAppBar variant="small" title={args.topAppBarTitle} />

        <ValueSection value={args.valueNumber} label={args.valueLabel} />

        <ContentCard title="Dados do destinatário">
          <ListItem
            textOnLeft="Nome"
            textOnRight="Maria Santos"
            labelBottomLeft="CPF: 987.654.321-00"
          />
          <ListItem
            textOnLeft="Chave PIX"
            textOnRight="maria@email.com"
            labelBottomLeft="E-mail"
          />
        </ContentCard>

        <ContentCard title="Detalhes da transferência">
          <ListItem
            textOnLeft="Data"
            textOnRight="Hoje"
            labelBottomLeft="15/01/2024"
          />
          <ListItem
            textOnLeft="Descrição"
            textOnRight="Pagamento de serviços"
          />
        </ContentCard>

        <ScreenFooter variant="button">
          <Button>Transferir</Button>
        </ScreenFooter>
      </ScreenParameters>
    );
  },
};

/**
 * Exemplo mínimo com apenas os elementos essenciais.
 */
export const Minimal: Story = {
  args: {
    topAppBarTitle: 'Pagamento',
    valueNumber: 50,
    valueLabel: 'Valor',
    bodyContentGap: '$tiny',
    bodyContentPaddingTop: '$big',
  },
  render: args => {
    return (
      <ScreenParameters
        bodyContentGap={args.bodyContentGap as any}
        bodyContentPaddingTop={args.bodyContentPaddingTop as any}
      >
        <TopAppBar variant="small" title={args.topAppBarTitle} />

        <ValueSection value={args.valueNumber} label={args.valueLabel} />

        <ContentCard>
          <ListItem textOnLeft="Destinatário" textOnRight="João Silva" />
        </ContentCard>

        <ScreenFooter variant="button">
          <Button>Pagar</Button>
        </ScreenFooter>
      </ScreenParameters>
    );
  },
};

/**
 * Exemplo com Avatar/Ícone centralizado no topo.
 * Demonstra como o Avatar é automaticamente identificado e posicionado.
 */
export const WithAvatar: Story = {
  args: {
    topAppBarTitle: 'Detalhe da fatura',
    valueNumber: 120,
    valueLabel: 'valor total',
    bodyContentGap: '$tiny',
    bodyContentPaddingTop: '$tiny',
  },
  render: args => {
    return (
      <ScreenParameters
        bodyContentGap={args.bodyContentGap as any}
        bodyContentPaddingTop={args.bodyContentPaddingTop as any}
      >
        <TopAppBar variant="small" title={args.topAppBarTitle} />

        <Avatar
          style="icon"
          icon={<Barcode />}
          size="large"
          styleProps={{ backgroundColor: '#E5F2FC' }}
        />

        <ValueSection value={args.valueNumber} label={args.valueLabel} />

        <ContentCard showListHeading={false}>
          <ListItem textOnLeft="Nome" textOnRight="Empresa XPTO" />
          <ListItem textOnLeft="Data" textOnRight="10/10/2025" />
          <ListItem
            textOnLeft="Descrição"
            textOnRight="Pagamento de serviços"
          />
        </ContentCard>

        <ButtonRow>
          <IconButtonText icon={<Calendar />}>Agendar pagamento</IconButtonText>
          <IconButtonText icon={<Calendar />}>gerar 2ª via</IconButtonText>
          <IconButtonText icon={<CheckCircle />}>
            marcar como pago
          </IconButtonText>
        </ButtonRow>

        <ScreenFooter variant="button">
          <Button>Pagar Boleto</Button>
        </ScreenFooter>
      </ScreenParameters>
    );
  },
};
