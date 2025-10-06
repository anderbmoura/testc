import type { Meta, StoryObj } from '@storybook/react';
import { ArrowRight, Settings, CreditCard } from 'iconoir-react-native';
import { ListItem } from '../../../components/lists/ListItem';
import { ListFooter } from '../../../components/lists/ListFooter';
import { ContentCard } from './ContentCard';
import type { ContentCardProps } from './ContentCard.model';

const meta: Meta<ContentCardProps> = {
  title: 'Templates/Lists/ContentCard',
  component: ContentCard,
  tags: ['autodocs'],
  parameters: {
    docs: {
      description: {
        component: `
Template que combina um cabeçalho (ListHeading) com uma lista de itens (List) e rodapé (ListFooter) organizados dentro de um Card.

## Como usar

\`\`\`tsx
import { ContentCard, ListItem, ListFooter, Avatar } from '@superapp-caixa/dsc-library';

// Exemplo básico
<ContentCard
  title="Meus Contatos"
  buttonActionName="Ver todos"
  onButtonAction={() => console.log('Ver todos')}
>
  <ListItem
    textOnLeft="João Silva"
    labelBottomLeft="Online"
    rightSlot={<ArrowRight />}
    onPress={() => console.log('João')}
  />
  <ListItem
    textOnLeft="Maria Santos"
    labelBottomLeft="Offline"
    rightSlot={<Settings />}
    onPress={() => console.log('Maria')}
  />
  <ListFooter
    labelLeft="Total de contatos"
    textLeft="2"
    labelRight="Online"
    textRight="1"
  />
</ContentCard>

// Sem cabeçalho
<ContentCard showListHeading={false}>
  <ListItem textOnLeft="Item 1" rightSlot={<CreditCard />} />
  <ListItem textOnLeft="Item 2" rightSlot={<ArrowRight />} />
  <ListFooter labelLeft="Total" textLeft="2" />
</ContentCard>
\`\`\`
        `,
      },
      source: {
        transform: (code: string, storyContext: any) => {
          const { args } = storyContext;
          return `<ContentCard
  title="${args.title || 'Title'}"
  buttonActionName="${args.buttonActionName || 'Button'}"
  showListHeading={${args.showListHeading !== false}}
  onButtonAction={() => console.log('Ação do botão')}
>
  <ListItem
    textOnLeft="João Silva"
    labelBottomLeft="Label"
    rightSlot={<ArrowRight />}
    onPress={() => console.log('Item 1')}
  />
  <ListItem
    textOnLeft="Maria Santos"
    labelBottomLeft="Label"
    rightSlot={<Settings />}
    onPress={() => console.log('Item 2')}
  />
  <ListItem
    textOnLeft="Pedro Santos"
    labelBottomLeft="Label"
    rightSlot={<CreditCard />}
    onPress={() => console.log('Item 3')}
  />
  <ListFooter
    labelLeft="Total de itens"
    textLeft="3"
    labelRight="Atualizado"
    textRight="Agora"
  />
</ContentCard>`;
        },
      },
    },
  },
  argTypes: {
    title: {
      description: 'Título exibido no cabeçalho',
      control: 'text',
      table: {
        type: { summary: 'string' },
        defaultValue: { summary: "'Title'" },
      },
    },
    buttonActionName: {
      description: 'Nome do botão de ação exibido no cabeçalho',
      control: 'text',
      table: {
        type: { summary: 'string' },
        defaultValue: { summary: 'undefined' },
      },
    },
    showListHeading: {
      description: 'Controla se o cabeçalho (ListHeading) será exibido',
      control: 'boolean',
      table: {
        type: { summary: 'boolean' },
        defaultValue: { summary: 'true' },
      },
    },
    onButtonAction: {
      description: 'Callback executado quando o botão de ação é pressionado',
      table: {
        type: { summary: '() => void' },
        defaultValue: { summary: 'undefined' },
      },
    },
    children: {
      description:
        'Componentes ListItem e ListFooter a serem exibidos dentro do Card',
      control: false,
      table: {
        type: {
          summary:
            'ReactElement<ListItemProps | ListFooterProps> | ReactElement<ListItemProps | ListFooterProps>[]',
        },
      },
    },
  },
  args: {
    title: 'Title',
    buttonActionName: 'Button',
    showListHeading: true,
    onButtonAction: () => console.log('Ação do botão'),
  },
};

export default meta;

type Story = StoryObj<ContentCardProps>;

/**
 * Exemplo padrão do template ContentCard com cabeçalho e lista de itens.
 */
export const Default: Story = {
  render: args => (
    <ContentCard {...args}>
      <ListItem
        textOnLeft="João Silva"
        labelBottomLeft="Label"
        rightSlot={<ArrowRight />}
        onPress={() => console.log('Item 1')}
      />
      <ListItem
        textOnLeft="Maria Santos"
        labelBottomLeft="Label"
        rightSlot={<Settings />}
        onPress={() => console.log('Item 2')}
      />
      <ListItem
        textOnLeft="Pedro Santos"
        labelBottomLeft="Label"
        rightSlot={<CreditCard />}
        onPress={() => console.log('Item 3')}
      />
      <ListFooter
        labelLeft="Total de itens"
        textLeft="3"
        labelRight="Atualizado"
        textRight="Agora"
      />
    </ContentCard>
  ),
};
