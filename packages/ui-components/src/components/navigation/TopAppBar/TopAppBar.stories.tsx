import type { Meta, StoryObj } from '@storybook/react';
import TopAppBar from './TopAppBar';
import type { TopAppBarProps } from './TopAppBar.model';
import React from 'react';
import {
  Bell,
  Camera,
  MoreVert,
  ShareAndroid as Share,
  InfoCircle as Info,
} from 'iconoir-react-native';
import { Avatar } from '../../data-display/Avatar/Avatar';
import { Button } from '../../buttons/Button/Button';

const meta: Meta<TopAppBarProps> = {
  title: 'Componentes/Navigation/TopAppBar',
  component: TopAppBar,
  parameters: {
    layout: 'fullscreen',
    docs: {
      description: {
        component: `
Barra de aplicativo superior utilizada para navegação, identidade de contexto e acesso rápido a ações principais.

## Como usar

\`\`\`tsx
import { TopAppBar, Avatar, Button } from '@superapp-caixa/dsc-library';
import { ArrowLeft, Bell, Camera } from 'iconoir-react-native';

// Básico (Small) - backButton é gerado automaticamente
<TopAppBar 
  variant="small"
  title="Página"
  button1={
    <Button
      type="chromeless"
      size="small"
      icon={<Bell/>}
      onPress={() => console.log('Notificações')}
    />
  }
/>

// Large com botões customizados
<TopAppBar 
  variant="large" 
  title="Dashboard" 
  elevated
  button1={
    <Button
      type="chromeless"
      size="small"
      icon={<Camera/>}
      onPress={() => console.log('Câmera')}
    />
  }
  button2={
    <Button
      type="chromeless"
      size="small"
      icon={<Bell/>}
      onPress={() => console.log('Notificações')}
    />
  }
/>

// Select com Avatar - chevronDown é gerado automaticamente
<TopAppBar
  variant="select"
  title="João Silva"
  subtitle="Conta Corrente"
  avatar={
    <Avatar style="image" size="standard" imageSource={{ uri: 'https://...' }} />
  }
  button1={
    <Button
      type="chromeless"
      size="small"
      icon={<Share/>}
      onPress={() => console.log('Compartilhar')}
    />
  }
/>

// Home com busca - searchIcon é gerado automaticamente
<TopAppBar
  variant="home"
  searchPlaceholder="Buscar serviços"
  onSearchChange={(text) => console.log(text)}
  avatar={
    <Avatar style="image" size="standard" imageSource={{ uri: 'https://...' }} />
  }
  button1={
    <Button
      type="chromeless"
      size="small"
      icon={<Bell/>}
      onPress={() => console.log('Notificações')}
    />
  }
/>

// Floating - backButton é gerado automaticamente
<TopAppBar 
  variant="floating"
  button1={
    <Button
      type="chromeless"
      size="small"
      icon={<Camera/>}
      onPress={() => console.log('Câmera')}
    />
  }
/>
\`\`\`

## Importante

- **Botões**: Use o componente Button do DSC para ações interativas.
- **Avatar**: Deve ser passado via prop \`avatar\` nas variantes Select e Home.
- **Elementos automáticos**: backButton, chevronDown e searchIcon são gerados automaticamente.
- **Busca**: Disponível apenas na variante Home via \`onSearchChange\`.
        `,
      },
      source: {
        transform: (_: string, { args }: any) => {
          const props: string[] = [];
          if (args.variant && args.variant !== 'small')
            props.push(`variant="${args.variant}"`);
          if (args.title && args.title !== 'Label')
            props.push(`title="${args.title}"`);
          if (args.subtitle) props.push(`subtitle="${args.subtitle}"`);
          if (args.elevated) props.push('elevated');
          if (args.trailing && args.trailing !== 'Default')
            props.push('trailing={/* custom Button actions */}');
          if (
            args.searchPlaceholder &&
            args.searchPlaceholder !== 'Pesquisar'
          ) {
            props.push(`searchPlaceholder="${args.searchPlaceholder}"`);
          }
          return `<TopAppBar${props.length ? ' ' + props.join(' ') : ''} />`;
        },
        state: 'open',
        excludeDecorators: true,
      },
    },
  },
  tags: ['autodocs'],
  argTypes: {
    variant: {
      control: 'select',
      options: ['small', 'large', 'select', 'home', 'floating'],
      description: 'Variante visual da TopAppBar',
      table: {
        type: { summary: "'small' | 'large' | 'select' | 'home' | 'floating'" },
        defaultValue: { summary: "'small'" },
      },
    },
    title: {
      control: 'text',
      description: 'Título principal',
      table: {
        type: { summary: 'string' },
        defaultValue: { summary: "'Label'" },
      },
    },
    subtitle: {
      control: 'text',
      description: 'Subtítulo (usado na variante select)',
      table: {
        type: { summary: 'string' },
        defaultValue: { summary: 'undefined' },
      },
    },
    elevated: {
      control: 'boolean',
      description: 'Aplica elevação (simula estado pós-scroll)',
      table: {
        type: { summary: 'boolean' },
        defaultValue: { summary: 'false' },
      },
    },
    searchPlaceholder: {
      control: 'text',
      description: 'Placeholder do campo de busca (variante home)',
      table: {
        type: { summary: 'string' },
        defaultValue: { summary: "'Pesquisar'" },
      },
    },
    onSearchChange: {
      table: { disable: true },
      description: 'Callback de mudança do campo de busca',
    },
    avatar: {
      table: { disable: true },
      description: 'Avatar do usuário (variantes select e home)',
    },
    button1: {
      table: { disable: false },
      description: 'Primeiro botão de ação',
    },
    button2: {
      table: { disable: false },
      description: 'Segundo botão de ação',
    },
    button3: {
      table: { disable: false },
      description: 'Terceiro botão de ação',
    },
    trailing: {
      table: { disable: false },
      description: 'Elementos customizados para trailing (uso avançado)',
    },
  },
  args: {
    variant: 'small',
    title: 'Label',
    subtitle: 'Supporting text',
    elevated: false,
    searchPlaceholder: 'Pesquisar',
  },
};

export default meta;

type Story = StoryObj<typeof meta>;

export const DefaultSmall: Story = {
  args: {
    variant: 'small',
    title: 'Página Inicial',
    button1: (
      <Button
        type="chromeless"
        size="large"
        icon={<Camera />}
        onPress={() => console.log('Câmera')}
      />
    ),
    button2: (
      <Button
        type="chromeless"
        size="large"
        icon={<Bell />}
        onPress={() => console.log('Notificações')}
      />
    ),
  },
};

export const Large: Story = {
  args: {
    variant: 'large',
    title: 'Dashboard Principal',

    button1: (
      <Button
        type="chromeless"
        size="large"
        icon={<Camera />}
        onPress={() => console.log('Câmera')}
      />
    ),

    button2: (
      <Button
        type="chromeless"
        size="large"
        icon={<Bell />}
        onPress={() => console.log('Notificações')}
      />
    ),
    subtitle: 'Supporting text',
  },
};

export const Select: Story = {
  args: {
    variant: 'select',
    title: 'Label',
    subtitle: 'Supporting text',
    avatar: (
      <Avatar
        style="image"
        size="large"
        imageSource={require('./img_placeholder.png')}
      />
    ),
    button1: (
      <Button
        type="chromeless"
        size="large"
        icon={<Share />}
        onPress={() => console.log('Compartilhar')}
      />
    ),
    button2: (
      <Button
        type="chromeless"
        size="large"
        icon={<Info />}
        onPress={() => console.log('Informações')}
      />
    ),
    button3: (
      <Button
        type="chromeless"
        size="large"
        icon={<MoreVert />}
        onPress={() => console.log('Mais opções')}
      />
    ),
  },
};
export const HomeVariant: Story = {
  args: {
    variant: 'home',
    title: 'Olá, Maria!',
    searchPlaceholder: 'Pesquisar',
    avatar: (
      <Avatar
        style="image"
        size="large"
        imageSource={require('./img_placeholder.png')}
      />
    ),
    button1: (
      <Button
        type="chromeless"
        size="large"
        icon={<Bell />}
        onPress={() => console.log('Notificações')}
      />
    ),
    button2: (
      <Button
        type="chromeless"
        size="large"
        icon={<MoreVert />}
        onPress={() => console.log('Mais opções')}
      />
    ),
  },
};

export const Floating: Story = {
  args: {
    variant: 'floating',
    title: 'Galeria de Fotos',
    button1: (
      <Button
        type="chromeless"
        size="large"
        icon={<Camera />}
        onPress={() => console.log('Câmera')}
      />
    ),
    button2: (
      <Button
        type="chromeless"
        size="large"
        icon={<Bell />}
        onPress={() => console.log('Notificações')}
      />
    ),
  },
};
