import React from 'react';
import { Platform } from 'react-native';
import { XStack, YStack, Stack, Input, Theme } from 'tamagui';
import {
  ArrowLeft,
  NavArrowDownSolid as ChevronDown,
  Search as SearchIcon,
} from 'iconoir-react-native';
import { useSafeAreaInsets } from 'react-native-safe-area-context';
import type { TopAppBarProps } from './TopAppBar.model';
import { iconSize } from '../../config/tokens/iconSize/iconSize';
import { useTransformIcon } from '../../utils';
import { TitleSmall, TitleLarge, LabelSmall, LabelTiny } from '../Typography';

/**
 * Hook seguro para acessar safe area insets
 * Retorna valores padrão caso o contexto não esteja disponível
 */
function useSafeSafeAreaInsets() {
  try {
    return useSafeAreaInsets();
  } catch {
    return { top: 0, bottom: 0, left: 0, right: 0 };
  }
}

/** Configuração de sombras para o componente elevado */
const shadows = {
  shadowColor: '#000',
  shadowOpacity: 0.07,
  shadowRadius: 12,
  shadowOffset: { width: 0, height: 6 },
  elevation: 8,
} as const;

/**
 * TopAppBar - Barra de aplicativo adaptável com múltiplas variantes
 *
 * Componente flexível que suporta diferentes layouts e casos de uso:
 * - small: Layout compacto com título horizontal
 * - large: Layout vertical com título proeminente
 * - select: Layout para seleção com título, subtítulo e dropdown
 * - home: Layout para tela inicial com campo de busca integrado
 * - floating: Layout minimalista para sobreposição
 *
 * Todos os elementos (botões, avatar, ícones) devem ser fornecidos via props específicas.
 */
export function TopAppBar({
  variant = 'small',
  title,
  subtitle,
  elevated = false,
  searchPlaceholder = 'Pesquisar',
  onSearchChange,
  avatar,
  button1,
  button2,
  button3,
}: TopAppBarProps) {
  const insets = useSafeSafeAreaInsets();
  const topPadding = Math.max(
    insets?.top || 0,
    Platform.OS === 'android' ? 8 : 12
  );
  const transformIcon = useTransformIcon();

  // Elementos padrão que não mudam
  const backButton = transformIcon(
    <ArrowLeft />,
    iconSize.medium,
    '$highlight'
  );

  const chevronDown = transformIcon(
    <ChevronDown strokeWidth={5} />,
    iconSize.tiny
  );

  const searchIcon = transformIcon(<SearchIcon />, iconSize.small);

  /** Alturas fixas para cada variante */
  const variantHeights = {
    small: 56,
    large: 112,
    select: 72,
    home: 72,
    floating: 64,
  } as const;

  /** Propriedades base do container com suporte a elevação */
  const containerBaseProps = {
    backgroundColor: variant === 'floating' ? 'transparent' : '$background',
    ...(elevated && variant !== 'floating' ? shadows : {}),
  } as const;

  /** Renderiza a variante Small - Layout horizontal compacto */
  const renderSmallVariant = () => (
    <XStack
      paddingHorizontal="$micro"
      paddingTop={topPadding}
      height={variantHeights.small + topPadding}
      alignItems="center"
      justifyContent="space-between"
      gap="$nano"
    >
      <XStack alignItems="center" gap="$nano">
        {backButton}
        <TitleSmall>{title}</TitleSmall>
      </XStack>
      {
        <XStack gap="$nano">
          {button1}
          {button2}
          {button3}
        </XStack>
      }
    </XStack>
  );

  /** Renderiza a variante Large - Layout vertical com título proeminente */
  const renderLargeVariant = () => (
    <YStack
      paddingHorizontal="$micro"
      paddingTop={topPadding}
      paddingBottom="$nano"
      height={variantHeights.large + topPadding}
      justifyContent="flex-end"
      gap="$nano"
    >
      <XStack alignItems="center" justifyContent="space-between">
        <XStack alignItems="center" gap="$nano">
          {backButton}
        </XStack>
        {
          <XStack gap="$nano">
            {button1}
            {button2}
            {button3}
          </XStack>
        }
      </XStack>
      <TitleLarge>{title}</TitleLarge>
      <LabelTiny color="$onNeutral3">{subtitle}</LabelTiny>
    </YStack>
  );

  /** Renderiza a variante Select - Layout para seleção com dropdown */
  const renderSelectVariant = () => (
    <XStack
      backgroundColor="$neutralBg2"
      paddingHorizontal="$micro"
      paddingTop={topPadding}
      height={variantHeights.select + topPadding}
      alignItems="center"
      justifyContent="space-between"
      gap="$nano"
    >
      <XStack alignItems="center" gap="$nano">
        {
          <XStack alignItems="center" gap="$nano">
            {backButton}
            {avatar}
          </XStack>
        }
        <XStack alignItems="center" gap="$nano">
          <YStack>
            <LabelSmall>{title}</LabelSmall>
            <LabelTiny color="$onNeutral3">
              {subtitle ?? 'Supporting text'}
            </LabelTiny>
          </YStack>
          {chevronDown}
        </XStack>
      </XStack>
      {
        <XStack gap="$nano">
          {button1}
          {button2}
          {button3}
        </XStack>
      }
    </XStack>
  );

  /** Renderiza a variante Home - Layout com campo de busca integrado */
  const renderHomeVariant = () => (
    <XStack
      backgroundColor="$neutralBg2"
      paddingHorizontal="$micro"
      paddingTop={topPadding}
      height={variantHeights.home + topPadding}
      alignItems="center"
      justifyContent="space-between"
      gap="$nano"
    >
      <XStack alignItems="center" gap="$nano">
        {avatar}
        <XStack
          flex={1}
          alignItems="center"
          backgroundColor="$neutralBg3"
          borderRadius={1000}
          paddingHorizontal="$micro"
        >
          {searchIcon}
          <Input
            borderWidth={0}
            flex={1}
            backgroundColor="transparent"
            paddingHorizontal="$nano"
            color="$onNeutral3"
            fontSize={14}
            placeholderTextColor="$onNeutral3"
            placeholder={searchPlaceholder}
            onChangeText={onSearchChange}
          />
        </XStack>
      </XStack>
      {
        <XStack gap="$nano">
          {button1}
          {button2}
          {button3}
        </XStack>
      }
    </XStack>
  );

  /** Renderiza a variante Floating - Layout minimalista para sobreposição */
  const renderFloatingVariant = () => (
    <Stack paddingTop={topPadding} paddingHorizontal="$micro">
      <XStack
        alignItems="center"
        justifyContent="space-between"
        paddingVertical="$nano"
        paddingHorizontal="$tiny"
      >
        {backButton}
        {
          <XStack gap="$nano">
            {button1}
            {button2}
            {button3}
          </XStack>
        }
      </XStack>
    </Stack>
  );

  /** Mapeamento de variantes para suas respectivas funções de renderização */
  const variantRenderers = {
    large: renderLargeVariant,
    small: renderSmallVariant,
    select: renderSelectVariant,
    home: renderHomeVariant,
    floating: renderFloatingVariant,
  };

  return (
    <Theme name="light">
      <Stack width="100%" {...containerBaseProps}>
        {variantRenderers[variant]()}
      </Stack>
    </Theme>
  );
}

export default TopAppBar;
