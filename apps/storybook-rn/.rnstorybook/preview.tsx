import type { Preview } from '@storybook/react';
import { decorators } from './decorators';

const preview: Preview = {
  parameters: {
    controls: {
      matchers: {
        color: /(background|color)$/i,
        date: /Date$/,
      },
    },
    options: {
      storySort: {
        order: [
          'Introdução',
          'Instalação',
          'Primeiros Passos',
          'Componentes',
          'Templates',
          ['Buttons', 'Cards', 'Lists', 'Story', '*'],
          'Design System',
          [
            'Temas',
            ['Visão Geral', 'Paletas de Cores'],
            'Tokens',
            ['Visão Geral', '*'],
          ],
          'Guia de Contribuição',
          ['Instalação', 'Como Contribuir', 'Convenções do Projeto'],
        ],
      },
    },
  },
  decorators: decorators,
};

export default preview;
