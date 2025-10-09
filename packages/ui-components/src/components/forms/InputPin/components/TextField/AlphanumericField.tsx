import React, {
  forwardRef,
  useCallback,
  useEffect,
  useMemo,
  useState,
} from 'react';
import { Platform, StyleSheet, TextInput } from 'react-native';
import { useTheme } from 'tamagui';
import { StyledAlphanumericFieldContainer } from './AlphanumericField.styles';
import { useInputPinContext } from '../../context/InputPinContext';

type AlphanumericFieldProps = {
  placeholder?: string;
  accessibilityLabel?: string;
  onFocus?: () => void;
  onBlur?: () => void;
};

export const AlphanumericField = forwardRef<TextInput, AlphanumericFieldProps>(
  (
    { placeholder = 'Digite sua senha', accessibilityLabel, onFocus, onBlur },
    ref
  ) => {
    const { value, replaceValue, disabled, isError } = useInputPinContext();
    const theme = useTheme();
    const [isHovered, setIsHovered] = useState(false);

    const handlePointerEnter = useCallback(() => {
      setIsHovered(true);
    }, []);

    const handlePointerLeave = useCallback(() => {
      setIsHovered(false);
    }, []);

    useEffect(() => {
      if (disabled) {
        setIsHovered(false);
      }
    }, [disabled]);

    const hoverHandlers = useMemo(() => {
      if (Platform.OS !== 'web') {
        return {} as Record<string, unknown>;
      }

      return {
        onMouseEnter: handlePointerEnter,
        onMouseLeave: handlePointerLeave,
      } as Record<string, unknown>;
    }, [handlePointerEnter, handlePointerLeave]);

    const textColor = useMemo(() => {
      if (disabled) return theme.neutral7?.val ?? theme.disabled1.val;
      if (isError) return theme.danger.val;
      return theme.onNeutral1.val;
    }, [disabled, isError, theme]);

    const placeholderColor = useMemo(() => {
      if (disabled) return theme.neutral7?.val ?? theme.disabled1.val;
      if (isError) {
        if (isHovered) return theme.danger.val;
        return theme.dangerPressed1?.val || theme.danger.val;
      }
      return theme.onNeutral3.val;
    }, [disabled, isError, isHovered, theme]);

    const selectionColor = useMemo(() => {
      if (isError) return theme.danger.val;
      return theme.onNeutral1.val;
    }, [isError, theme]);

    const hasValue = value.length > 0;

    const visualState = useMemo(() => {
      if (disabled) return 'disabled' as const;

      if (isError) {
        if (hasValue) return 'errorFilled' as const;
        return 'errorDefault' as const;
      }

      if (hasValue) return 'filled' as const;
      return 'default' as const;
    }, [disabled, hasValue, isError]);

    return (
      <StyledAlphanumericFieldContainer
        visualState={visualState}
        {...hoverHandlers}
      >
        <TextInput
          ref={ref}
          value={value}
          placeholder={placeholder}
          placeholderTextColor={placeholderColor}
          editable={!disabled}
          secureTextEntry
          onChangeText={replaceValue}
          autoCorrect={false}
          autoCapitalize="none"
          autoComplete="off"
          keyboardType="default"
          style={[styles.textInput, { color: textColor }]}
          selectionColor={selectionColor}
          accessibilityLabel={accessibilityLabel}
          onFocus={onFocus}
          onBlur={onBlur}
        />
      </StyledAlphanumericFieldContainer>
    );
  }
);

AlphanumericField.displayName = 'AlphanumericField';

const styles = StyleSheet.create({
  textInput: {
    width: '100%',
    fontSize: 20,
    lineHeight: 32,
    fontFamily: Platform.select({
      ios: 'CAIXA Std',
      android: 'CAIXA Std',
      default: 'CAIXA Std, system-ui, -apple-system, sans-serif',
    }),
    fontWeight: '600',
    letterSpacing: 0,
    paddingVertical: 4,
    paddingHorizontal: 0,
    textAlign: 'center',
    textAlignVertical: 'center',
    backgroundColor: 'transparent',
  },
});
