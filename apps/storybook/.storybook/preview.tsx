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
          'Introdução',
          'Instalação',
          'Primeiros Passos',
          'Componentes',
          'Design System',
          ['Paletas de Cores', 'Tokens', ['Overview', '*']],
          'Guia de Contribuição',
          ['Instalação', 'Como Contribuir', 'Convenções do Projeto'],
        ],
      },
    },
  },
  decorators: decorators,
};

export default preview;
