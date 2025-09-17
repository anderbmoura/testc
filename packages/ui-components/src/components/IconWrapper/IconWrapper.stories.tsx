import type { Meta, StoryObj } from '@storybook/react';
import { IconWrapper } from './IconWrapper';
import type { IconWrapperProps } from './IconWrapper.model';
import { Home } from 'iconoir-react-native';

const meta: Meta<IconWrapperProps> = {
  title: 'Componentes/IconWrapper',
  component: IconWrapper,
  parameters: {
    layout: 'centered',
    docs: {
      description: {
        component: `
IconWrapper é um componente utilitário para renderizar ícones com tamanho e cor definidos, respeitando o tema Tamagui.

## Características

- **Tamanho baseado em tokens**: Usa o token \`iconSize\` para definir dimensões
- **Cor temática ou customizada**: Aceita cores do tema Tamagui (ex: \`$color8\`)
- **Compatível com Tamagui Icons e ícones customizados**

## Uso Básico

\`\`\`tsx
import { IconWrapper } from '@superapp-caixa/dsc-library';
import { Home } from 'iconoir-react-native';

<IconWrapper icon={Home} size="medium" color="$highlight" />
\`\`\`
        `,
      },
    },
  },
  argTypes: {
    icon: {
      control: false,
      description: 'Ícone a ser renderizado (componente ou elemento React)',
      table: {
        type: { summary: 'React.ElementType | React.ReactElement' },
      },
    },
    size: {
      control: 'select',
      options: ['tiny', 'small', 'medium', 'large', 'big', 'huge'],
      description: 'Tamanho do ícone baseado no token `iconSize`',
      table: {
        type: { summary: 'IconSizeToken' },
        defaultValue: { summary: "'medium'" },
      },
    },
    color: {
      control: 'select',
      options: ['$accent', '$highlight'],
      description: 'Cor do ícone (hexadecimal ou referência temática)',
      table: {
        type: { summary: "OpaqueColorValue | GetThemeValueForKey<'color'>" },
        defaultValue: { summary: "'$accent'" },
      },
    },
  },
  tags: ['autodocs'],
};

export default meta;

type Story = StoryObj<IconWrapperProps>;

export const Default: Story = {
  args: {
    icon: Home,
    size: 'medium',
    color: '$highlight',
  },
};
