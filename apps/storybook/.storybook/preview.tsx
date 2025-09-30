import type { Preview } from '@storybook/react-native-web-vite';
import { decorators } from './decorators';

const preview: Preview = {
  parameters: {
    controls: {
      matchers: {
        color: /(background|color)$/i,
        date: /Date$/i,
      },
    },

    a11y: {
      test: 'todo',
    },
    options: {
      storySort: {
        order: [
          'Componentes',
          'Templates',
          'Screens',
          'Design System',
          [
            'Temas',
            ['Visão Geral', 'Paletas de Cores'],
            'Tokens',
            ['Visão Geral', '*'],
          ],
          'Guia de Contribuição',
          ['Instalação', 'Como Contribuir', 'Convenções do Projeto'],
          'Introdução',
          'Instalação',
          'Primeiros Passos',
        ],
      },
    },
  },
  decorators: decorators,
};

export default preview;
