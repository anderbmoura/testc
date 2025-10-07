import { Iconoir, Minus, Plus } from 'iconoir-react-native';
import { useState } from 'react';
import { ThemeName, XStack, useTheme } from 'tamagui';
import {
  FeedbackText,
  IconContainer,
  InputStepperFrame,
  StepperButton,
  StepperControl,
  StepperText,
} from './InputStepper.style';

/**
 * Um componente de entrada com controle de incremento que permite aos usuários incrementar/decrementar um valor numérico
 * usando botões ou entrada de texto direta.
 *
 * @component
 * @example
 * ```tsx
 * <InputStepper
 *   minValue={0}
 *   maxValue={10}
 *   theme="light"
 *   size="large"
 * />
 * ```
 *
 * @param props - As propriedades do componente
 * @param props.minValue - O valor mínimo permitido (padrão é 0)
 * @param props.maxValue - O valor máximo permitido (opcional)
 * @param props.theme - O nome do tema para aplicar o estilo
 * @param props.size - A variante de tamanho do componente, 'small' ou 'large' (padrão é 'large')
 *
 * @returns Um componente de entrada com controle de incremento com botões de incrementar/decrementar e mensagem de feedback opcional
 */
export const InputStepper = ({
  minValue = 0,
  maxValue,
  theme: themeName,
  size = 'large',
}: {
  minValue?: number;
  maxValue?: number;
  theme?: ThemeName;
  size?: 'small' | 'large';
}) => {
  const theme = useTheme({ name: themeName });

  const [inputValue, setInputValue] = useState(minValue);
  const handleIncrement = () => {
    setInputValue(prev => {
      const newValue = prev + 1;
      return maxValue !== undefined ? Math.min(maxValue, newValue) : newValue;
    });
  };
  const handleDecrement = () => {
    console.log('handle decrement');
    setInputValue(prev => Math.max(minValue, prev - 1));
  };
  const handleTextChange = (text: string) => {
    const numericValue = parseInt(text, 10);
    if (!isNaN(numericValue)) {
      let constrainedValue = Math.max(minValue, numericValue);
      if (maxValue !== undefined) {
        constrainedValue = Math.min(maxValue, constrainedValue);
      }
      setInputValue(constrainedValue);
    } else if (text === '') {
      setInputValue(minValue);
    }
  };

  // set inactive = true if inputValue is equal to minValue
  const atMinValue = inputValue === minValue;
  const atMaxValue = maxValue !== undefined && inputValue === maxValue;

  return (
    <InputStepperFrame size={size}>
      <StepperControl size={size}>
        <StepperButton
          onPress={handleDecrement}
          disabled={atMinValue}
          theme={themeName}
          size={size}
        >
          <Minus
            color={atMinValue ? theme.onDisabled.val : theme.color9.val}
            width={16}
            height={16}
          />
        </StepperButton>

        <StepperText
          value={inputValue.toString()}
          onChangeText={handleTextChange}
          keyboardType="numeric"
          textAlign="center"
          size={size}
        ></StepperText>

        <StepperButton
          onPress={handleIncrement}
          disabled={atMaxValue}
          theme={themeName}
          size={size}
        >
          <Plus
            width={16}
            height={16}
            color={atMaxValue ? theme.onDisabled.val : theme.color9.val}
          />
        </StepperButton>
      </StepperControl>
      {size !== 'small' && (
        <XStack
          gap="$nano"
          alignSelf="stretch"
          alignItems="center"
          justifyContent="center"
          marginTop="$size.1"
        >
          <IconContainer>
            <Iconoir width={16} height={16} color={theme.color9.val} />
          </IconContainer>
          <FeedbackText theme={themeName}>Feedback message</FeedbackText>
        </XStack>
      )}
    </InputStepperFrame>
  );
};
