import type { Meta, StoryObj } from '@storybook/react';
import { Avatar } from './Avatar';
import type { AvatarProps } from './Avatar.model';
import {
  UserCart,
  BadgeCheck,
  Star,
  Heart,
  Mail,
  Bell,
} from 'iconoir-react-native';

const iconMapping = {
  None: undefined,
  UserCart,
  BadgeCheck,
  Star,
  Heart,
  Mail,
  Bell,
};

const meta: Meta<AvatarProps> = {
  title: 'Components/Avatar',
  component: Avatar,
  parameters: {
    layout: 'centered',
    docs: {
      description: {
        component: `
Componente de avatar para exibir imagem, ícone ou monograma com diferentes estilos e tamanhos.

## Uso Básico

\`\`\`tsx
import { Avatar } from '@superapp-caixa/dsc-library';

<Avatar style="monogram" monogramChar="A" size="large" />
<Avatar style="image" imageUrl="https://placehold.co/32x32" size="large" />
<Avatar style="icon" icon={BadgeCheck} size="large" />
\`\`\`

## AvatarStack

Para exibir múltiplos avatares agrupados:

\`\`\`tsx
import { AvatarStack } from '@superapp-caixa/dsc-library';

<AvatarStack size="large" spacing="small">
  <Avatar style="monogram" monogramChar="A" />
  <Avatar style="icon" icon={BadgeCheck} />
  <Avatar style="image" imageUrl="https://placehold.co/32x32" />
</AvatarStack>
\`\`\`
        `,
      },
      source: {
        transform: (_: string, { args }: any) => {
          const getIconName = (icon: any) =>
            icon && icon !== 'None'
              ? typeof icon === 'string'
                ? icon
                : Object.entries(iconMapping).find(
                    ([name, comp]) => comp === icon && name !== 'None'
                  )?.[0]
              : null;

          const props = [
            args.style && `style="${args.style}"`,
            args.size && `size="${args.size}"`,
            args.monogramChar &&
              args.style === 'monogram' &&
              `monogramChar="${args.monogramChar}"`,
            args.imageUrl &&
              args.style === 'image' &&
              `imageUrl="${args.imageUrl}"`,
            args.icon &&
              args.style === 'icon' &&
              `icon={${getIconName(args.icon)}}`,
          ]
            .filter(Boolean)
            .join(' ');

          return `<Avatar${props && ` ${props}`} />`;
        },
        state: 'open',
        excludeDecorators: true,
      },
    },
  },
  argTypes: {
    style: {
      control: 'select',
      options: ['monogram', 'image', 'icon'],
      description: 'Visual style of the avatar',
    },
    size: {
      control: 'select',
      options: ['small', 'standard', 'large'],
      description: 'Size variant of the avatar',
    },
    monogramChar: {
      control: 'text',
      description: 'Character displayed in monogram style',
    },
    imageUrl: {
      control: 'text',
      description: 'Remote image URL for image style',
    },
    icon: {
      control: 'select',
      options: Object.keys(iconMapping),
      description: 'Icon element for icon style',
      mapping: iconMapping,
      table: {
        type: {
          summary: 'IconProp',
          detail: 'Icon component from iconoir-react-native',
        },
      },
    },
    styleProps: {
      control: 'object',
      description: 'Additional style props applied to the avatar container',
    },
  },
  tags: ['autodocs'],
};

export default meta;

type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {
    style: 'icon',
    icon: BadgeCheck,
    size: 'large',
  },
  render: args => (
    <>
      <Avatar {...args} />
    </>
  ),
};
