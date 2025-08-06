import {
  Button,
  CheckboxWithLabel,
  Input,
  View,
} from '@superapp-caixa/dsc-library';
import { CircularAvatarsWithCustomIcons } from '../components/CircularAvatarsWithCustomIcons';
import { ThemeToggle } from '../components/ThemeToggle';

export default function Index() {
  return (
    <View flex={1} justifyContent="center" gap="$4" padding="$4">
      <ThemeToggle />
      <Input>
        <Input.Label>Name</Input.Label>
        <Input.Box>
          <Input.Area id="input" placeholder="Enter your name" />
        </Input.Box>
      </Input>
      <Button>Botão</Button>
      <CircularAvatarsWithCustomIcons />
      <CheckboxWithLabel disabled label="I agree to the terms and conditions" />
      <CheckboxWithLabel label="I agree to the terms and conditions" />
      <CheckboxWithLabel
        label="I agree to the terms and conditions"
        theme="error"
      />
      <CheckboxWithLabel
        label="I agree to the terms and conditions"
        theme="accent"
      />
      <CheckboxWithLabel
        label="I agree to the terms and conditions"
        theme="warning"
      />
      <CheckboxWithLabel
        label="I agree to the terms and conditions"
        theme="success"
      />
    </View>
  );
}
