import type { Meta, StoryObj } from '@storybook/react';
import { Heart } from 'iconoir-react-native';
import { Icon } from './Icon';
import { Loterias, OpenFinance } from './svg';

type Story = StoryObj<typeof Icon>;

const meta: Meta<typeof Icon> = {
  title: 'Componentes/Data Display/Icon',
  component: Icon,
  parameters: {
    layout: 'centered',
    docs: {
      description: {
        component: `
Componente para renderizar ícones na biblioteca DSC.

## Como usar

\`\`\`tsx
import { Icon } from '@superapp-caixa/dsc-library';
import { Heart, ArrowRight } from 'iconoir-react-native';
import { Loterias, OpenFinance } from '@superapp-caixa/dsc-library';

// Ícone externo (Iconoir)
<Icon size="medium" color="$color1">
  <Heart />
</Icon>

// Ícone SVG customizado
<Icon size="medium" color="$color9">
  <Loterias />
</Icon>

<Icon size="medium" color="$color9">
  <OpenFinance />
</Icon>
\`\`\`

## Características

- ✅ Suporte para ícones Iconoir e da própria biblioteca via children
- ✅ Tamanhos padronizados do design system
- ✅ Suporte à cores via tokens

## Adicionando novos ícones

Para adicionar ícones customizados à biblioteca, consulte o [Guia de Adicionando Ícones](?path=/docs/guia-de-contribuição-adicionando-ícones--docs).
        `,
      },
      source: {
        transform: (_: string, { args }: { args: Record<string, unknown> }) => {
          // Se usa ícone Iconoir via children
          const iconName =
            args['children'] === 'Heart'
              ? 'Heart'
              : args['children'] === 'Loterias'
                ? 'Loterias'
                : args['children'] === 'OpenFinance'
                  ? 'OpenFinance'
                  : 'Heart';
          const props = [
            args['size'] &&
              args['size'] !== 'medium' &&
              `size="${args['size']}"`,
            args['color'] &&
              args['color'] !== '$color9' &&
              `color="${args['color']}"`,
          ]
            .filter(Boolean)
            .join('\n  ');

          return `<Icon${props ? `\n  ${props}` : ''}>
  <${iconName} />
</Icon>`;
        },
        state: 'open',
        excludeDecorators: true,
      },
    },
  },
  tags: ['autodocs'],
  argTypes: {
    size: {
      description:
        'Tamanho do ícone - deve ser um dos valores predefinidos do design system',
      control: { type: 'select' },
      options: ['tiny', 'small', 'medium', 'large', 'big', 'huge'],
      table: {
        type: { summary: 'keyof typeof iconSize' },
        defaultValue: { summary: 'medium' },
      },
    },
    color: {
      description: 'Cor do ícone usando tokens do tema',
      control: { type: 'select' },
      options: [
        '$color1',
        '$color9',
        '$color12',
        '$primary',
        '$secondary',
        '$accent',
        '$neutral9',
        '$success',
        '$warning',
        '$danger',
        '$info',
      ],
      table: {
        type: { summary: 'string' },
        defaultValue: { summary: '$color9' },
      },
    },
    children: {
      description: 'Componente de ícone (Iconoir, SVG customizado, etc.)',
      control: { type: 'select' },
      options: ['Heart', 'Loterias', 'OpenFinance'],
      mapping: {
        Heart: <Heart />,
        Loterias: <Loterias />,
        OpenFinance: <OpenFinance />,
      },
      table: {
        type: { summary: 'React.ReactNode' },
      },
    },
  },
  render: args => <Icon {...args} />,
};

export default meta;

export const Default: Story = {
  args: {
    children: <Heart />,
    size: 'medium',
    color: '$color9',
  },
};
