import type { Meta, StoryObj } from '@storybook/react';
import React from 'react';
import { ScreenFeedback } from './ScreenFeedback';
import TopAppBar from '../../components/TopAppBar';
import { FeedbackIllustration } from '../../components/FeedbackIllustration';
import type { FeedbackStatus } from '../../components/FeedbackIllustration/FeedbackIllustration.model';
import { ContentCard } from '../lists';
import { ListItem } from '../../components/ListItem';
import { ListFooter } from '../../components/ListFooter';
import { ButtonRow } from '../buttons/ButtonRow';
import IconButtonText from '../../components/IconButtonText';
import { ScreenFooter } from '../../components/ScreenFooter';
import Button from '../../components/Button';
import { Camera, Link, Archive } from 'iconoir-react-native';

// Interface estendida para incluir controle do FeedbackIllustration
interface ScreenFeedbackStoryArgs {
  feedbackStatus: FeedbackStatus;
  topAppBarTitle: string;
  feedbackTitle: string;
}

/**
 * # ScreenFeedback
 *
 * Template para organizar telas completas de feedback com estrutura padronizada.
 *
 * ## Características
 *
 * - ✅ Separa automaticamente TopAppBar, Body Content e ScreenFooter
 * - ✅ Body scrollável quando conteúdo excede altura disponível
 * - ✅ Footer fixo sempre visível no rodapé
 * - ✅ FeedbackIllustration sempre centralizada
 * - ✅ Título opcional abaixo da ilustração
 * - ✅ Padding e spacing consistentes do design system
 * - ✅ Suporte completo para FeedbackIllustration, ContentCard, ButtonRow, IconButtonText
 *
 * ## Estrutura
 *
 * O componente aceita children e os organiza automaticamente em seções:
 *
 * 1. **TopAppBar** - Fixo no topo (identificado pelo displayName ou props)
 * 2. **FeedbackIllustration** - Centralizada com TitleLarge opcional abaixo
 * 3. **Body Content** - Scrollável (ContentCard, ButtonRow, ListItem, etc)
 * 4. **ScreenFooter** - Fixo no rodapé (identificado pelo displayName ou props)
 *
 * ## Componentes permitidos como children
 *
 * - TopAppBar
 * - FeedbackIllustration
 * - ContentCard
 * - ButtonRow
 * - ListItem (fora de ContentCard)
 * - ScreenFooter
 *
 * ## Quando usar
 *
 * - Telas de confirmação de ações
 * - Telas de sucesso/erro em fluxos
 * - Telas de feedback ao usuário
 * - Telas de resultado de operações
 *
 * ## Boas práticas
 *
 * - ✅ Use FeedbackIllustration para comunicar status visual
 * - ✅ Use prop `title` para mensagens principais de feedback
 * - ✅ Use ContentCard para agrupar informações relacionadas (com ou sem título próprio)
 * - ✅ Use ButtonRow para ações secundárias com IconButtonText
 * - ✅ Use ScreenFooter para ação primária com Button
 * - ❌ Não coloque múltiplos TopAppBar ou ScreenFooter
 */
const meta: Meta<ScreenFeedbackStoryArgs> = {
  title: 'Templates/Screens/ScreenFeedback',
  component: ScreenFeedback as any,
  parameters: {
    layout: 'centered',
    docs: {
      description: {
        component: `
Template que organiza automaticamente uma tela completa de feedback com TopAppBar, conteúdo scrollável e ScreenFooter fixo.

### Separação Automática de Children

O componente identifica e organiza automaticamente os children:

- **TopAppBar**: Identificado pelo \`displayName\` ou props \`variant\` (small, medium, large, select, home, floating)
- **FeedbackIllustration**: Sempre centralizada (título opcional via prop \`title\`)
- **Body**: Todos os outros componentes (ContentCard, ButtonRow, ListItem)
- **ScreenFooter**: Identificado pelo \`displayName\` ou props \`variant\` (button, iconButton)

### Componentes Permitidos

Apenas os seguintes componentes são aceitos como children:
- TopAppBar
- FeedbackIllustration  
- ContentCard
- ButtonRow
- ListItem (pode ser usado fora do ContentCard)
- ScreenFooter

### Título do Feedback

Use a prop \`title\` do ScreenFeedback para exibir o título principal do feedback alinhado à esquerda abaixo da ilustração.
O ContentCard pode ter seu próprio título para organizar detalhes adicionais.

### Layout

- FeedbackIllustration centralizada com TitleLarge opcional abaixo (alinhado à esquerda)
- Body com scroll automático
- Footer sempre fixo no rodapé
- Padding horizontal de \`$tiny\` (ScreenFooter e ButtonRow)
- Gap de \`$small\` entre elementos do body (exceto ButtonRow que tem espaçamento adicional)
        `,
      },
    },
  },
  argTypes: {
    feedbackStatus: {
      control: { type: 'select' },
      options: ['success', 'warning', 'danger', 'informative'],
      description: 'Status da ilustração de feedback exibida',
      table: {
        type: { summary: "'success' | 'warning' | 'danger' | 'informative'" },
        defaultValue: { summary: "'success'" },
      },
    },
    topAppBarTitle: {
      control: { type: 'text' },
      description: 'Título exibido no TopAppBar',
      table: {
        type: { summary: 'string' },
        defaultValue: { summary: "'Label'" },
      },
    },
    feedbackTitle: {
      control: { type: 'text' },
      description: 'Título principal exibido abaixo do FeedbackIllustration',
      table: {
        type: { summary: 'string' },
        defaultValue: { summary: "'Feedback title'" },
      },
    },
  },
  tags: ['autodocs'],
};

export default meta;
type Story = StoryObj<ScreenFeedbackStoryArgs>;

/**
 * Exemplo completo de uma tela de feedback com título principal.
 * O título "Pagamento realizado" é exibido abaixo da ilustração de sucesso.
 */
export const Default: Story = {
  args: {
    feedbackStatus: 'success',
    topAppBarTitle: 'Pagamento',
    feedbackTitle: 'Pagamento realizado',
  },
  render: args => {
    const titleProp = args.feedbackTitle ? { title: args.feedbackTitle } : {};

    return (
      <ScreenFeedback {...titleProp}>
        <TopAppBar variant="small" title={args.topAppBarTitle} />

        <FeedbackIllustration status={args.feedbackStatus} />

        <ContentCard showListHeading={false}>
          <ListItem
            textOnLeft="Valor"
            labelBottomLeft="Pago em 15/01/2024"
            rightSlot={<Link />}
          />
          <ListItem
            textOnLeft="Destinatário"
            labelBottomLeft="João Silva"
            rightSlot={<Link />}
          />
          <ListItem
            textOnLeft="Banco"
            textOnRight="341"
            labelBottomLeft="Itaú"
          />
          <ListFooter
            labelLeft="Taxa"
            textLeft="R$ 2,50"
            labelRight="Total"
            textRight="R$ 252,50"
          />
        </ContentCard>

        <ButtonRow>
          <IconButtonText icon={<Camera />}>Comprovante</IconButtonText>
          <IconButtonText icon={<Archive />}>Salvar</IconButtonText>
          <IconButtonText icon={<Link />}>Compartilhar</IconButtonText>
        </ButtonRow>

        <ScreenFooter variant="button">
          <Button>Fazer outro pagamento</Button>
        </ScreenFooter>
      </ScreenFeedback>
    );
  },
  parameters: {
    docs: {
      source: {
        transform: (_: string, { args }: any) =>
          `
<ScreenFeedback title="${args.feedbackTitle}">
  <TopAppBar variant="small" title="${args.topAppBarTitle}" />
  
  {/* Título "${args.feedbackTitle}" é renderizado automaticamente */}
  <FeedbackIllustration status="${args.feedbackStatus}" />
  
  <ContentCard showListHeading={false}>
    <ListItem
      textOnLeft="Valor"
      textOnRight="R$ 250,00"
      labelBottomLeft="Pago em 15/01/2024"
      rightSlot={<Link />}
    />
    <ListItem
      textOnLeft="Destinatário"
      labelBottomLeft="João Silva"
      rightSlot={<Link />}
    />
    <ListItem
      textOnLeft="Banco"
      textOnRight="341"
      labelBottomLeft="Itaú"
    />
    <ListFooter
      labelLeft="Taxa"
      textLeft="R$ 2,50"
      labelRight="Total"
      textRight="R$ 252,50"
    />
  </ContentCard>
  
  <ButtonRow>
    <IconButtonText icon={<Camera />}>Comprovante</IconButtonText>
    <IconButtonText icon={<Archive />}>Salvar</IconButtonText>
    <IconButtonText icon={<Link />}>Compartilhar</IconButtonText>
  </ButtonRow>
  
  <ScreenFooter variant="button">
    <Button>Fazer outro pagamento</Button>
  </ScreenFooter>
</ScreenFeedback>
        `.trim(),
        state: 'open',
        excludeDecorators: true,
      },
    },
  },
};
