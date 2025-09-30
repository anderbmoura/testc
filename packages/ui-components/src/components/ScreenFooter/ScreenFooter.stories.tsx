import type { Meta, StoryObj } from '@storybook/react';
import { ScreenFooter } from './ScreenFooter';
import { Button } from '../Button/Button';
import { IconButton } from '../IconButton';
import {
  ArrowRight,
  Home,
  NavArrowLeft,
  NavArrowRight,
  Settings,
} from 'iconoir-react-native';
import React from 'react';

// Interface específica para args do Storybook que inclui children
interface ScreenFooterStoryArgs {
  variant: 'button' | 'iconButton';
  children?: React.ReactNode;
}

const meta: Meta<ScreenFooterStoryArgs> = {
  title: 'Templates/Screens/ScreenFooter',
  component: ScreenFooter as any, // Type assertion para resolver union discriminada
  parameters: {
    layout: 'centered',
    docs: {
      description: {
        component: `
Footer de tela com tipagem discriminada que garante consistência entre variante e tipo de componentes filhos.

## Tipagem Inteligente

O componente utiliza **union discriminada** para garantir que:

- \`variant="button"\` aceite apenas componentes \`Button\`
- \`variant="iconButton"\` aceite apenas componentes \`IconButton\` (máximo 2)

## Como usar

\`\`\`tsx
import { ScreenFooter, Button, IconButton } from '@superapp-caixa/dsc-library';
import { NavArrowLeft, ArrowRight } from 'iconoir-react-native';

// ✅ Correto - variant button
<ScreenFooter variant="button">
  <Button type="plain" theme="highlight">Confirmar</Button>
  <Button type="outline" theme="neutral">Cancelar</Button>
</ScreenFooter>

// ✅ Correto - variant iconButton  
<ScreenFooter variant="iconButton">
  <IconButton icon={<NavArrowLeft />} onPress={() => {}} />
  <IconButton icon={<ArrowRight />} onPress={() => {}} />
</ScreenFooter>
\`\`\`

## Características

- **Layout específico**: Vertical para botões, horizontal para ícones
- **Limitação automática**: máximo 2 botões para variant iconButton
- **Type safety**: Impossível misturar tipos de componentes
        `,
      },
      source: {
        transform: (_: string, { args }: { args: ScreenFooterStoryArgs }) => {
          if (args.variant === 'iconButton') {
            return `<ScreenFooter variant="iconButton">
  <IconButton icon={<NavArrowLeft />} onPress={() => {}} />
  <IconButton icon={<ArrowRight />} onPress={() => {}} />
</ScreenFooter>`;
          }

          return `<ScreenFooter variant="button">
  <Button type="plain" theme="highlight">Confirmar</Button>
  <Button type="outline" theme="neutral">Cancelar</Button>
</ScreenFooter>`;
        },
        state: 'open',
        excludeDecorators: true,
      },
    },
  },
  tags: ['autodocs'],
  argTypes: {
    variant: {
      control: { type: 'select' },
      options: ['button', 'iconButton'],
      description:
        'Variante que determina o layout e tipo de componentes aceitos',
      table: {
        type: { summary: "'button' | 'iconButton'" },
        defaultValue: { summary: "'button'" },
      },
    },
    children: {
      control: false,
      description:
        'Componentes filhos - Button para variant="button", IconButton para variant="iconButton"',
      table: {
        type: { summary: 'React.ReactElement | React.ReactElement[]' },
      },
    },
  },
};

export default meta;
type Story = StoryObj<ScreenFooterStoryArgs>;

/**
 * Variante padrão com botões em layout vertical.
 */
export const ButtonVariant: Story = {
  args: {
    variant: 'button',
  },
  render: () => (
    <ScreenFooter variant="button">
      <Button type="outline" theme="highlight">
        Confirmar
      </Button>
      <Button type="plain" theme="highlight">
        Cancelar
      </Button>
    </ScreenFooter>
  ),
};

/**
 * Variante com ícones posicionados nas laterais.
 */
export const IconButtonVariant: Story = {
  args: {
    variant: 'iconButton',
  },
  render: () => (
    <ScreenFooter variant="iconButton">
      <IconButton
        icon={<NavArrowLeft />}
        type="outline"
        color="highlight"
        onPress={() => console.log('Voltar')}
      />
      <IconButton
        icon={<NavArrowRight />}
        type="plain"
        color="highlight"
        onPress={() => console.log('Avançar')}
      />
    </ScreenFooter>
  ),
};

/**
 * Demonstra limitação: apenas os 2 primeiros IconButtons são exibidos.
 */
export const IconButtonLimitTest: Story = {
  args: {
    variant: 'iconButton',
  },
  render: () => (
    <ScreenFooter variant="iconButton">
      <IconButton icon={<Home />} onPress={() => console.log('Home')} />
      <IconButton icon={<Settings />} onPress={() => console.log('Settings')} />
      <IconButton
        icon={<ArrowRight />}
        onPress={() => console.log('Extra - não será exibido')}
      />
    </ScreenFooter>
  ),
};

/**
 * Exemplo interativo com diferentes temas.
 */
export const Interactive: Story = {
  args: {
    variant: 'button',
  },
  render: () => (
    <ScreenFooter variant="button">
      <Button type="plain" theme="success" onPress={() => alert('Confirmado!')}>
        Confirmar
      </Button>
      <Button type="outline" theme="danger" onPress={() => alert('Cancelado!')}>
        Cancelar
      </Button>
    </ScreenFooter>
  ),
};
