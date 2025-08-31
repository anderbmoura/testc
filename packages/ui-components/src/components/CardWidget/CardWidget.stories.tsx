import type { Meta, StoryObj } from '@storybook/react';
import { CardWidget } from './CardWidget';
import type { CardWidgetProps } from './CardWidget.model';
import { Eye, Heart, Star, InfoCircle } from 'iconoir-react-native';
import { LabelSmall } from '../Typography';
import React from 'react';

const iconMapping = {
  None: null,
  Eye: <Eye />,
  Heart: <Heart />,
  Star: <Star />,
  InfoCircle: <InfoCircle />,
};

const footerContentMapping = {
  None: null,
  Text: <LabelSmall>Footer Content</LabelSmall>,
};

interface CardWidgetStoryArgs extends Omit<CardWidgetProps, 'icon' | 'image'> {
  icon?: keyof typeof iconMapping;
  image?: string;
  footerContent?: keyof typeof footerContentMapping;
}

const meta: Meta<CardWidgetStoryArgs> = {
  title: 'Componentes/CardWidget',
  component: CardWidget,
  parameters: {
    layout: 'centered',
    docs: {
      description: {
        component: `
Componente para exibir widget de cartão com header e footer personalizáveis.

## Como usar

\`\`\`tsx
import { CardWidget } from '@superapp-caixa/dsc-library';
import { Star } from 'iconoir-react-native';

<CardWidget
  topLabel="Saldo"
  mainLabel="-R$ 1.000,00"
  icon={<InfoCircle />}
  onPress={() => {}}
  variant="danger"
>
  <LabelStandard>Footer Content</LabelStandard>
</CardWidget>
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
            `topLabel="${args.topLabel}"`,
            `mainLabel="${args.mainLabel}"`,
            args.icon &&
              getIconName(args.icon) &&
              `icon={<${getIconName(args.icon)} />}`,
          ]
            .filter(Boolean)
            .join('\n  ');

          const footerContent =
            args.footerContent && args.footerContent !== 'None'
              ? args.footerContent === 'Text'
                ? '\n>\n  <LabelStandard>Footer Content</LabelStandard>\n</CardWidget>'
                : '\n>\n  <Button>Ver mais</Button>\n</CardWidget>'
              : '\n/>';

          const onPressProps = args.onPress ? '\n  onPress={() => {}}' : '';

          const variantProps =
            args.variant && args.variant !== 'highlight'
              ? `\n  variant="${args.variant}"`
              : '';

          return `<CardWidget
  ${props}${onPressProps}${variantProps}${footerContent}`;
        },
        state: 'open',
        excludeDecorators: true,
      },
    },
  },
  tags: ['autodocs'],
  render: args => {
    const {
      variant,
      topLabel,
      mainLabel,
      icon,
      image,
      footerContent,
      onPress,
    } = args;

    const key = `card-widget-${Date.now()}`;

    const iconElement =
      icon && icon !== 'None'
        ? iconMapping[icon as keyof typeof iconMapping]
        : undefined;

    const imageElement =
      image && typeof image === 'string' ? (
        <img src={image} alt="widget" style={{ width: 24, height: 24 }} />
      ) : undefined;

    const footerChildren =
      footerContent && footerContent !== 'None'
        ? footerContentMapping[footerContent]
        : undefined;

    return (
      <CardWidget
        key={key}
        variant={variant || 'highlight'}
        topLabel={topLabel}
        mainLabel={mainLabel}
        icon={iconElement}
        image={imageElement}
        {...(onPress && { onPress })}
        style={{ width: 160 }}
      >
        {footerChildren}
      </CardWidget>
    );
  },
  argTypes: {
    variant: {
      control: { type: 'select' },
      options: ['highlight', 'success', 'danger'],
      description: 'Tema aplicado ao widget',
      table: {
        type: { summary: 'CardWidgetVariant' },
        defaultValue: { summary: 'highlight' },
      },
    },
    topLabel: {
      control: { type: 'text' },
      description: 'Texto da label pequena exibida no topo do header',
      table: {
        type: { summary: 'string' },
        defaultValue: { summary: '"Categoria"' },
      },
    },
    mainLabel: {
      control: { type: 'text' },
      description: 'Texto da label principal exibida no header',
      table: {
        type: { summary: 'string' },
        defaultValue: { summary: '"Título Principal"' },
      },
    },
    icon: {
      control: { type: 'select' },
      options: Object.keys(iconMapping),
      description: 'Ícone opcional exibido no lado direito do header',
      table: {
        type: { summary: 'React.ReactNode' },
        defaultValue: { summary: 'undefined' },
      },
    },
    image: {
      control: { type: 'text' },
      description:
        'URL da imagem opcional exibida no lado direito do header (alternativa ao ícone)',
      table: {
        type: { summary: 'React.ReactNode' },
        defaultValue: { summary: 'undefined' },
      },
    },
    footerContent: {
      control: { type: 'select' },
      options: Object.keys(footerContentMapping),
      description: 'Conteúdo do footer do widget',
      table: {
        type: { summary: 'React.ReactNode' },
        defaultValue: { summary: 'undefined' },
      },
    },
    onPress: {
      action: 'pressed',
      description: 'Função chamada ao pressionar o widget',
      table: {
        type: { summary: '() => void' },
        defaultValue: { summary: 'undefined' },
        disable: true,
      },
    },
    children: {
      table: {
        disable: true,
      },
    },
  },
  args: {
    variant: 'danger',
    topLabel: 'Saldo',
    mainLabel: '-R$ 1.000,00',
    icon: 'InfoCircle',
    image: '',
    footerContent: 'Text',
  },
};

export default meta;
type Story = StoryObj<CardWidgetStoryArgs>;

export const Default: Story = {};
