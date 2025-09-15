import type { Meta, StoryObj } from '@storybook/react';
import { ListHeading } from './ListHeading';
import type { ListHeadingProps } from './ListHeading.model';
import { NavArrowRight, Settings, Star, Heart } from 'iconoir-react-native';

const meta: Meta<ListHeadingProps> = {
  title: 'Componentes/ListHeading',
  component: ListHeading,
  parameters: {
    layout: 'centered',
    docs: {
      description: {
        component: `
Cabeçalho para listas com suporte a diferentes tamanhos e configurações.

## Como usar

\`\`\`tsx
import { ListHeading } from '@superapp-caixa/dsc-library';

// Configuração simples
<ListHeading 
  title="Minha Lista"
  size="standard"
  configuration="simple"
/>

// Com botão de texto
<ListHeading 
  title="Produtos"
  size="standard"
  configuration="button"
  buttonText="Ver todos"
  onButtonPress={() => console.log('Ver todos pressionado')}
/>

// Com botão de ícone
<ListHeading 
  title="Categoria"
  size="small"
  configuration="icon button"
  onButtonPress={() => console.log('Botão ícone pressionado')}
/>
\`\`\`
        `,
      },
      source: {
        transform: (_: string, { args }: any) => {
          const props = [
            `title="${args.title}"`,
            args.size !== 'standard' && `size="${args.size}"`,
            args.configuration !== 'simple' &&
              `configuration="${args.configuration}"`,
            args.buttonText && `buttonText="${args.buttonText}"`,
            args.buttonIcon && `buttonIcon={<${args.buttonIcon} />}`,
            args.onButtonPress && 'onButtonPress={() => {}}',
          ]
            .filter(Boolean)
            .join('\n  ');

          return `<ListHeading
  ${props}
/>`;
        },
        state: 'open',
        excludeDecorators: true,
      },
    },
  },
  tags: ['autodocs'],
  render: args => <ListHeading {...args} />,
  argTypes: {
    title: {
      description: 'Título principal exibido no cabeçalho',
      control: { type: 'text' },
      table: {
        type: { summary: 'string' },
      },
    },
    size: {
      description: 'Tamanho do componente',
      control: { type: 'select' },
      options: ['standard', 'small'],
      table: {
        type: { summary: 'standard | small' },
        defaultValue: { summary: 'standard' },
      },
    },
    configuration: {
      description: 'Configuração visual do componente',
      control: { type: 'select' },
      options: ['simple', 'button', 'icon button'],
      table: {
        type: { summary: 'simple | button | icon button' },
        defaultValue: { summary: 'simple' },
      },
    },
    buttonText: {
      description:
        'Texto do botão (usado apenas quando configuration="button")',
      control: { type: 'text' },
      table: {
        type: { summary: 'string' },
      },
    },
    buttonIcon: {
      description:
        'Ícone personalizado para o botão (usado apenas quando configuration="icon button")',
      control: { type: 'select' },
      options: ['NavArrowRight', 'Settings', 'Star', 'Heart'],
      mapping: {
        NavArrowRight: <NavArrowRight />,
        Settings: <Settings />,
        Star: <Star />,
        Heart: <Heart />,
      },
      table: {
        type: { summary: 'React.ReactNode' },
      },
    },
    onButtonPress: {
      description: 'Função chamada quando o botão é pressionado',
      action: 'buttonPressed',
      table: {
        type: { summary: '() => void' },
      },
    },
  },
};

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {
    title: 'Lista de itens',
    size: 'standard',
    configuration: 'simple',
    buttonText: 'Ver todos',
  },
};
