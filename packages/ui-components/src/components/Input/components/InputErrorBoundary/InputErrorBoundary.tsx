import React, { ErrorInfo, ReactNode } from 'react';
import { YStack } from 'tamagui';
import { BodySmall } from '../../../Typography';
import { CONTAINER_HEIGHT } from '../../constants';

/**
 * Props para o InputErrorBoundary
 */
interface InputErrorBoundaryProps {
  children: ReactNode;
  /** Fallback customizado para o erro */
  fallback?: ReactNode;
  /** Callback executado quando ocorre um erro */
  onError?: (error: Error, errorInfo: ErrorInfo) => void;
  /** Se deve mostrar detalhes do erro (apenas em desenvolvimento) */
  showErrorDetails?: boolean;
}

/**
 * Estado do ErrorBoundary
 */
interface InputErrorBoundaryState {
  hasError: boolean;
  error?: Error;
  errorInfo?: ErrorInfo;
}

/**
 * ErrorBoundary específico para componentes Input
 *
 * Captura erros que ocorrem nos subcomponentes do Input e exibe
 * uma interface de fallback apropriada.
 *
 * @example
 * ```tsx
 * <InputErrorBoundary
 *   fallback={<Text>Erro no Input</Text>}
 *   onError={(error, info) => console.error('Input Error:', error)}
 * >
 *   <Input>
 *     <Input.TextField />
 *   </Input>
 * </InputErrorBoundary>
 * ```
 */
export class InputErrorBoundary extends React.Component<
  InputErrorBoundaryProps,
  InputErrorBoundaryState
> {
  constructor(props: InputErrorBoundaryProps) {
    super(props);
    this.state = { hasError: false };
  }

  static getDerivedStateFromError(error: Error): InputErrorBoundaryState {
    return {
      hasError: true,
      error,
    };
  }

  componentDidCatch(error: Error, errorInfo: ErrorInfo) {
    console.error('InputErrorBoundary caught an error:', error, errorInfo);

    this.setState({
      errorInfo,
    });

    this.props.onError?.(error, errorInfo);
  }

  /**
   * Renderiza o fallback padrão do Input
   */
  private renderDefaultFallback = (): ReactNode => {
    const { showErrorDetails } = this.props;
    const { error, errorInfo } = this.state;
    const isDevelopment = process.env.NODE_ENV === 'development';

    return (
      <YStack
        gap="$nano"
        padding="$tiny"
        borderRadius="$small"
        backgroundColor="$dangerBg"
        borderWidth={1}
        borderColor="$danger"
        minHeight={CONTAINER_HEIGHT.MIN_HEIGHT}
        justifyContent="center"
      >
        <BodySmall color="$danger" fontWeight="600">
          Erro no componente Input
        </BodySmall>

        {showErrorDetails && isDevelopment && error && (
          <YStack gap="$quark">
            <BodySmall color="$danger">{error.message}</BodySmall>
            {errorInfo?.componentStack && (
              <BodySmall color="$danger" numberOfLines={3}>
                {errorInfo.componentStack.split('\n')[0]}
              </BodySmall>
            )}
          </YStack>
        )}

        {!isDevelopment && (
          <BodySmall color="$danger">
            Por favor, recarregue a página ou tente novamente.
          </BodySmall>
        )}
      </YStack>
    );
  };

  render() {
    if (this.state.hasError) {
      return this.props.fallback || this.renderDefaultFallback();
    }

    return this.props.children;
  }
}

/**
 * Hook para resetar o ErrorBoundary (útil para testes)
 * Deve ser usado em conjunto com uma ref para o ErrorBoundary
 *
 * @example
 * ```tsx
 * const errorBoundaryRef = useRef<InputErrorBoundary>(null);
 *
 * // Em algum handler
 * const resetError = () => {
 *   errorBoundaryRef.current?.setState({ hasError: false });
 * };
 *
 * <InputErrorBoundary ref={errorBoundaryRef}>
 *   <Input />
 * </InputErrorBoundary>
 * ```
 */
export const useInputErrorBoundary = () => {
  const reset = (errorBoundary: InputErrorBoundary | null) => {
    if (errorBoundary) {
      errorBoundary.setState({
        hasError: false,
        error: undefined,
        errorInfo: undefined,
      });
    }
  };

  return { reset };
};
