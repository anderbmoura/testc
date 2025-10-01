import React, { memo, useMemo } from 'react';
import { Platform } from 'react-native';
import type { BlurViewProps, CSSBlurConfig } from './BlurView.model';
import { BLUR_CONSTANTS } from './BlurView.model';
import { useExpoBlur } from './hooks/useExpoBlur';
import { StyledBlurContainer } from './BlurView.styles';

const createCSSBlurStyles = (
  blurIntensity: number
): CSSBlurConfig | undefined => {
  if (Platform.OS !== 'web') return undefined;

  return {
    backdropFilter: `blur(${blurIntensity}px)`,
    WebkitBackdropFilter: `blur(${blurIntensity}px)`,
  };
};

const createAccessibilityProps = (
  accessibilityRole: BlurViewProps['accessibilityRole'],
  accessibilityLabel: BlurViewProps['accessibilityLabel'],
  restProps: any
) => ({
  accessibilityRole,
  accessibilityLabel,
  ...restProps,
});

const createFinalStyle = (backgroundColor: string, style: any) => [
  BLUR_CONSTANTS.ABSOLUTE_POSITION,
  { backgroundColor },
  style,
];

/**
 * Renderiza o blur usando expo-blur quando disponível
 */
const ExpoBlurRenderer: React.FC<{
  ExpoBlurView: React.ComponentType<any>;
  config: any;
  style: any;
  children: React.ReactNode;
  accessibilityProps: any;
}> = memo(({ ExpoBlurView, config, style, children, accessibilityProps }) => (
  <ExpoBlurView {...config} style={style} {...accessibilityProps}>
    {children}
  </ExpoBlurView>
));

ExpoBlurRenderer.displayName = 'ExpoBlurRenderer';

/**
 * Renderiza o fallback usando CSS backdrop-filter ou View simples
 */
const FallbackBlurRenderer: React.FC<{
  blurIntensity: number;
  style: any;
  children: React.ReactNode;
  accessibilityProps: any;
}> = memo(({ blurIntensity, style, children, accessibilityProps }) => {
  const cssBlurStyles = useMemo(
    () => createCSSBlurStyles(blurIntensity),
    [blurIntensity]
  );

  return (
    <StyledBlurContainer style={[style, cssBlurStyles]} {...accessibilityProps}>
      {children}
    </StyledBlurContainer>
  );
});

FallbackBlurRenderer.displayName = 'FallbackBlurRenderer';

/**
 * Componente DSC BlurView
 *
 * Componente reutilizável que funciona tanto na web quanto no nativo, aplicando efeito blur
 * com fallback automático. Usa expo-blur com configurações otimizadas para Android e
 * fallback para backdrop-filter CSS quando necessário.
 *
 * @param blurIntensity - Intensidade do blur (0-10)
 * ```tsx
 * <BlurView blurIntensity={5}>Content</BlurView>
 * <BlurView blurIntensity={10}>Strong Blur</BlurView>
 * ```
 *
 * @param backgroundColor - Cor de fundo personalizada (opcional)
 * ```tsx
 * <BlurView backgroundColor="rgba(255, 255, 255, 0.5)">Light overlay</BlurView>
 * <BlurView backgroundColor="rgba(0, 0, 0, 0.7)">Dark overlay</BlurView>
 * ```
 *
 * @param children - Componentes filhos (opcional)
 * ```tsx
 * <BlurView blurIntensity={3}>
 *   <Text>Content over blur</Text>
 * </BlurView>
 * ```
 *
 * @param style - Estilos adicionais (opcional)
 * ```tsx
 * <BlurView style={{ borderRadius: 12 }} blurIntensity={4}>Content</BlurView>
 * ```
 *
 * @param accessibilityRole - Role de acessibilidade
 * ```tsx
 * <BlurView accessibilityRole="image" accessibilityLabel="Fundo desfocado">
 *   Content
 * </BlurView>
 * ```
 *
 * @example
 * ```tsx
 * // Blur básico
 * <BlurView blurIntensity={5} />
 *
 * // Blur com conteúdo
 * <BlurView blurIntensity={3} backgroundColor="rgba(0, 0, 0, 0.3)">
 *   <BodySmall>Texto sobre blur</BodySmall>
 * </BlurView>
 *
 * // Blur customizado com acessibilidade
 * <BlurView
 *   blurIntensity={8}
 *   backgroundColor="rgba(255, 255, 255, 0.2)"
 *   style={{ borderRadius: '$large', margin: '$tiny' }}
 *   accessibilityRole="image"
 *   accessibilityLabel="Fundo desfocado do modal"
 * >
 *   <View>Modal content</View>
 * </BlurView>
 * ```
 */
export const BlurView: React.FC<BlurViewProps> = memo(
  ({
    blurIntensity,
    backgroundColor = BLUR_CONSTANTS.DEFAULT_BACKGROUND_COLOR,
    children,
    style,
    accessibilityRole = 'none',
    accessibilityLabel,
    ...restProps
  }) => {
    const { isAvailable, ExpoBlurView, config } = useExpoBlur(blurIntensity);

    const accessibilityProps = useMemo(
      () =>
        createAccessibilityProps(
          accessibilityRole,
          accessibilityLabel,
          restProps
        ),
      [accessibilityRole, accessibilityLabel, restProps]
    );

    const finalStyle = useMemo(
      () => createFinalStyle(backgroundColor, style),
      [backgroundColor, style]
    );

    if (isAvailable && ExpoBlurView) {
      return (
        <ExpoBlurRenderer
          ExpoBlurView={ExpoBlurView}
          config={config}
          style={finalStyle}
          accessibilityProps={accessibilityProps}
        >
          {children}
        </ExpoBlurRenderer>
      );
    }

    return (
      <FallbackBlurRenderer
        blurIntensity={blurIntensity}
        style={finalStyle}
        accessibilityProps={accessibilityProps}
      >
        {children}
      </FallbackBlurRenderer>
    );
  }
);

BlurView.displayName = 'BlurView';
