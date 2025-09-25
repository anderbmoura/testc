import type { Meta, StoryObj } from '@storybook/react';

import { BadgeCheck, Star, Heart } from 'iconoir-react-native';
import Avatar from './Avatar';
import AvatarStack from './AvatarStack';

const meta: Meta = {
  title: 'Componentes/AvatarStack',
  component: AvatarStack,
  parameters: {
    layout: 'centered',
    docs: {
      description: {
        component: `
Componente para exibir múltiplos avatares empilhados horizontalmente, com controle de espaçamento, tamanho e quantidade máxima.

## Uso Básico

\`\`\`tsx
import { AvatarStack, Avatar } from '@superapp-caixa/dsc-library';
import { BadgeCheck } from 'iconoir-react-native';

<AvatarStack size="large" spacing="small">
  <Avatar style="monogram" monogramChar="A" />
  <Avatar style="icon" icon={BadgeCheck} />
  <Avatar style="image" imageSource={{ uri: "https://placehold.co/32x32" }} />
</AvatarStack>
\`\`\`
        `,
      },
      source: {
        transform: (_: string, { args }: any) => {
          const props = [
            args.size && `size="${args.size}"`,
            args.spacing && `spacing="${args.spacing}"`,
            typeof args.count === 'number' && `count={${args.count}}`,
          ]
            .filter(Boolean)
            .join(' ');

          return `<AvatarStack${props && ` ${props}`}>\n  {/* Avatares aqui */}\n</AvatarStack>`;
        },
        state: 'open',
        excludeDecorators: true,
      },
    },
  },
  argTypes: {
    size: {
      control: 'select',
      options: ['small', 'standard', 'large'],
      description: 'Tamanho dos avatares na pilha',
    },
    spacing: {
      control: 'select',
      options: ['small', 'standard', 'large'],
      description: 'Espaçamento horizontal entre os avatares',
    },
    count: {
      control: 'number',
      description: 'Número máximo de avatares exibidos',
    },
    children: {
      table: {
        disable: true,
      },
    },
  },
  tags: ['autodocs'],
};

export default meta;

type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {
    size: 'large',
    spacing: 'small',
    count: 4,
  },
  render: args => (
    <AvatarStack {...args}>
      <Avatar style="monogram" monogramChar="A" />
      <Avatar style="icon" icon={BadgeCheck} />
      <Avatar style="icon" icon={Star} />
      <Avatar style="icon" icon={Heart} />
      <Avatar
        style="image"
        imageSource={{ uri: 'https://placehold.co/32x32' }}
      />
    </AvatarStack>
  ),
};
