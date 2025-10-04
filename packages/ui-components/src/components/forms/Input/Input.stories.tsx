import type { Meta, StoryObj } from '@storybook/react';
import React, { useState } from 'react';
import { Input } from './Input';
import type { InputProps } from './Input.model';
import { Search, Eye, EyeClosed, Mail } from 'iconoir-react-native';

const meta = {
  title: 'Componentes/Forms/Input',
  component: Input,
  parameters: {
    layout: 'centered',
    docs: {
      page: null,
    },
  },
  decorators: [
    Story => (
      <div style={{ width: '280px' }}>
        <Story />
      </div>
    ),
  ],
  render: args => {
    const [value, setValue] = React.useState(args.value || '');
    return <Input {...args} value={value} onChangeText={setValue} />;
  },
} satisfies Meta<InputProps>;

export default meta;

type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {
    placeholder: 'Digite algo aqui',
  },
};

export const Multiline: Story = {
  args: {
    placeholder: 'Digite uma descrição detalhada...',
    multiline: true,
  },
};

export const Disabled: Story = {
  args: {
    value: 'Este campo está desabilitado',
    placeholder: 'Campo desabilitado',
    disabled: true,
  },
};

export const AutoFocus: Story = {
  args: {
    placeholder: 'Este campo recebe foco automático',
    autoFocus: true,
  },
};

export const WithClearButton: Story = {
  render: args => {
    const [value, setValue] = React.useState('Digite algo para testar');
    return (
      <Input {...args} value={value} onChangeText={setValue}>
        <Input.ClearButton />
      </Input>
    );
  },
  args: {
    placeholder: 'Digite algo para ver o botão limpar',
  },
};

export const WithIconButton: Story = {
  render: args => {
    const [value, setValue] = React.useState('');
    return (
      <Input {...args} value={value} onChangeText={setValue}>
        <Input.IconButton
          icon={<Search />}
          onPress={() => console.log('Search pressed')}
        />
      </Input>
    );
  },
  args: {
    placeholder: 'Pesquisar...',
  },
};

export const WithTextButton: Story = {
  render: args => {
    const [value, setValue] = React.useState('');
    return (
      <Input {...args} value={value} onChangeText={setValue}>
        <Input.Button
          text="Enviar"
          onPress={() => console.log('Send pressed')}
        />
      </Input>
    );
  },
  args: {
    placeholder: 'Digite sua mensagem',
  },
};

export const WithError: Story = {
  render: args => {
    const [value, setValue] = React.useState('');
    return (
      <Input {...args} value={value} onChangeText={setValue}>
        <Input.Error value="Mensagem de erro de exemplo" />
      </Input>
    );
  },
  args: {
    placeholder: 'Campo obrigatório',
  },
};

export const WithSupportingText: Story = {
  render: args => {
    const [value, setValue] = React.useState('');
    return (
      <Input {...args} value={value} onChangeText={setValue}>
        <Input.SupportingText value="Texto de apoio de exemplo" />
      </Input>
    );
  },
  args: {
    placeholder: 'Digite sua descrição',
  },
};

export const WithCounter: Story = {
  render: args => {
    const [value, setValue] = React.useState('');
    return (
      <Input {...args} value={value} onChangeText={setValue}>
        <Input.Counter value={value.length} max={100} />
      </Input>
    );
  },
  args: {
    placeholder: 'Máximo 100 caracteres',
  },
};

// Exemplos práticos
export const PasswordExample: Story = {
  render: () => {
    const [password, setPassword] = useState('');
    const [showPassword, setShowPassword] = useState(false);

    const hasError = password.length > 0 && password.length < 6;

    return (
      <Input
        value={password}
        placeholder="Digite sua senha"
        onChangeText={setPassword}
      >
        <Input.IconButton
          icon={showPassword ? <EyeClosed /> : <Eye />}
          onPress={() => setShowPassword(!showPassword)}
        />
        {hasError && (
          <Input.Error value="A senha deve ter pelo menos 6 caracteres" />
        )}
        <Input.Counter value={password.length} max={20} />
        <Input.SupportingText value="Use entre 6 e 20 caracteres" />
      </Input>
    );
  },
};

export const EmailExample: Story = {
  render: () => {
    const [email, setEmail] = useState('');

    const isValidEmail = (email: string) => {
      const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
      return emailRegex.test(email);
    };

    const hasError = email.length > 0 && !isValidEmail(email);

    return (
      <Input
        value={email}
        placeholder="Digite seu e-mail"
        onChangeText={setEmail}
      >
        <Input.IconButton
          icon={<Mail />}
          onPress={() => console.log('Email:', email)}
        />
        {hasError && <Input.Error value="Por favor, digite um e-mail válido" />}
        <Input.SupportingText value="Exemplo: usuario@email.com" />
      </Input>
    );
  },
};

export const SearchExample: Story = {
  render: () => {
    const [searchText, setSearchText] = useState('');

    const handleSearch = () => {
      if (searchText.trim()) {
        console.log('Pesquisando por:', searchText);
      }
    };

    return (
      <Input
        value={searchText}
        placeholder="Pesquisar produtos..."
        onChangeText={setSearchText}
      >
        {searchText.length > 0 && <Input.ClearButton />}
        <Input.IconButton icon={<Search />} onPress={handleSearch} />
        <Input.SupportingText value="Digite pelo menos 2 caracteres para pesquisar" />
      </Input>
    );
  },
};

export const MultilineWithLimitExample: Story = {
  render: () => {
    const [description, setDescription] = useState('');
    const maxLength = 500;

    return (
      <Input
        value={description}
        placeholder="Descreva seu produto..."
        onChangeText={setDescription}
        multiline={true}
      >
        <Input.Counter value={description.length} max={maxLength} />
        <Input.SupportingText value="Descreva as principais características do seu produto" />
      </Input>
    );
  },
};
