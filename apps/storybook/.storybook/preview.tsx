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
          'Templates',
          'Screens',
          ['Buttons', 'Cards', 'Lists', '*'],
          'Design System',
          [
            'Temas',
            ['Visão Geral', 'Paletas de Cores'],
            'Tokens',
            ['Visão Geral', '*'],
          ],
          'Guia de Contribuição',
          [
            'Pré-Requisitos do Desenvolvedor',
            'Instalação e Desenvolvimento',
            'Como Contribuir',
            'Convenções do Projeto',
            'Sistema de Temas',
            'Adicionando Ícones',
          ],
        ],
      },
    },
  },
  decorators: decorators,
};

export default preview;
