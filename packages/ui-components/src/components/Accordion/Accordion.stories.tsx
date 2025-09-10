import type { Meta, StoryObj } from '@storybook/react';
import { Accordion } from './Accordion';
import type { AccordionProps } from './Accordion.model';

type AccordionStoryProps = AccordionProps & { children?: React.ReactNode };

const meta: Meta<AccordionStoryProps> = {
  title: 'Componentes/Accordion',
  component: Accordion,
  parameters: {
    layout: 'centered',
    docs: {
      description: {
        component: `
### 📘 Documentação do Componente: Accordion

#### 🧩 Visão Geral
O componente Accordion é utilizado para exibir conteúdo de forma colapsável, permitindo ao usuário expandir ou ocultar informações conforme necessário.

#### 📌 Props

| Propriedade | Tipo | Descrição |
|-------------|------|-----------|
| \`title\` | \`string\` | Título exibido no cabeçalho do Accordion. |
| \`collapsed\` | \`boolean\` | Define se o Accordion inicia colapsado (\`true\`) ou expandido (\`false\`). |
| \`disabled\` | \`boolean\` | Desabilita a interação com o Accordion. |
| \`children\` | \`React.ReactNode\` | Conteúdo interno do Accordion. Pode ser texto ou qualquer outro componente. |

#### 🧪 Playground Interativo
Use os controles para testar diferentes combinações de props diretamente no Storybook.

#### 🧾 Exemplo de Uso

\`\`\`tsx
<Accordion
  title="Título do Accordion"
  collapsed={false}
  disabled={false}
>
  Conteúdo do Accordion
</Accordion>
\`\`\`
        `,
      },
      source: {
        transform: (_: string, { args }: any) => {
          const props = [
            args.title && `title="${args.title}"`,
            args.collapsed !== undefined && `collapsed={${args.collapsed}}`,
            args.disabled !== undefined && `disabled={${args.disabled}}`,
          ]
            .filter(Boolean)
            .join(' ');
          return `<AccordionDemo${props ? ` ${props}` : ''}>${args.children || 'Conteúdo do Accordion'}</AccordionDemo>`;
        },
        state: 'open',
        excludeDecorators: true,
      },
    },
  },
  tags: ['autodocs'],
  render: args => (
    <Accordion {...args}>{args.children || 'Conteúdo do Accordion'}</Accordion>
  ),
  argTypes: {
    title: {
      control: 'text',
      description: 'Título exibido no cabeçalho do Accordion.',
    },
    collapsed: {
      control: 'boolean',
      description: 'Define se o Accordion inicia colapsado.',
    },
    disabled: {
      control: 'boolean',
      description: 'Desabilita a interação com o Accordion.',
    },
    children: {
      control: 'text',
      description: 'Conteúdo do Accordion.',
    },
  },
};

export default meta;
type Story = StoryObj<AccordionStoryProps>;

export const Default: Story = {
  args: {
    title: 'Título do Accordion',
    collapsed: true,
    disabled: false,
    children: 'Conteúdo do Accordion',
  },
};
