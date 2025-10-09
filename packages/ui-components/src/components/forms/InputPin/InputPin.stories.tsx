import type { Meta, StoryObj } from '@storybook/react';
import React from 'react';
import { InputPin } from './InputPin';
import type { InputPinProps } from './InputPin.model';

const InputPinStoryWrapper: React.FC<InputPinProps> = args => {
  const [value, setValue] = React.useState(args.value ?? '');

  React.useEffect(() => {
    if (args.value !== undefined) {
      setValue(args.value);
    }
  }, [args.value]);

  return (
    <InputPin
      {...args}
      value={value}
      onChange={setValue}
      onComplete={args.onComplete || (pin => console.log('PIN completo:', pin))}
    />
  );
};

const meta = {
  title: 'Componentes/Forms/InputPin',
  component: InputPin,
  parameters: {
    layout: 'centered',
    docs: {
      page: null,
    },
  },
  args: {
    onComplete: () => {},
  },
  decorators: [
    Story => (
      <div style={{ width: '320px' }}>
        <Story />
      </div>
    ),
  ],
  render: args => <InputPinStoryWrapper {...args} />,
} satisfies Meta<InputPinProps>;

export default meta;

type Story = StoryObj<typeof meta>;

export const Numeric6Digits: Story = {
  args: {
    variant: 'numeric',
    digitCount: 6,
    accessibilityLabel: 'Digite sua senha de 6 dígitos',
  },
};

export const Numeric4Digits: Story = {
  args: {
    variant: 'numeric',
    digitCount: 4,
    accessibilityLabel: 'Digite sua senha de 4 dígitos',
  },
};

export const TokenOtp: Story = {
  args: {
    variant: 'token',
    digitCount: 6,
    accessibilityLabel: 'Informe o código recebido por SMS',
  },
};

export const TokenWithError: Story = {
  args: {
    variant: 'token',
    digitCount: 6,
    isError: true,
    feedbackMessage: 'Código inválido. Tente novamente.',
    accessibilityLabel: 'Campo de código token',
  },
};

export const NumericSuccessFeedback: Story = {
  args: {
    variant: 'numeric',
    digitCount: 6,
    feedbackMessage: 'Senha validada com sucesso!',
    feedbackType: 'success',
    accessibilityLabel: 'Senha validada',
  },
};

export const Alphanumeric: Story = {
  args: {
    variant: 'alphanumeric',
    accessibilityLabel: 'Digite sua senha alfanumérica',
    feedbackMessage: 'Utilize letras e números',
    feedbackType: 'neutral',
  },
};

export const DisabledState: Story = {
  args: {
    variant: 'numeric',
    digitCount: 6,
    disabled: true,
    value: '123456',
    accessibilityLabel: 'Senha desabilitada',
  },
};
