import React from 'react';
import { XStack, YStack } from 'tamagui';
import type { ValueSectionProps } from './ValueSection.model';
import {
  LabelSmall,
  LabelStandard,
  TitleNumericalStandardSemibold,
  DisplayNumericalStandardSemibold,
} from '../Typography';
import Button from '../../buttons/Button';
import { Edit } from 'iconoir-react-native';

/**
 * Componente DSC ValueSection
 *
 * Seção para exibição de valores monetários ou numéricos com rótulo, formatação de moeda e botão de ação opcional.
 * O componente automaticamente formata valores numéricos para o padrão brasileiro (pt-BR) e exibe "Sem valor"
 * quando o valor não é fornecido, é nulo ou é zero.
 *
 * @component
 *
 * @example
 * ```tsx
 * // Exibição básica com valor
 * <ValueSection label="Saldo" value={1234.56} />
 *
 * // Com moeda personalizada
 * <ValueSection label="Investimento" value={5000} currency="USD" />
 *
 * // Tamanho grande com botão
 * <ValueSection
 *   label="Patrimônio Total"
 *   value={50000.75}
 *   size="large"
 *   onButtonPress={() => console.log('Editar')}
 * />
 *
 * // Sem valor (exibe "Sem valor")
 * <ValueSection label="Limite Disponível" />
 *
 * // Valor zero também exibe "Sem valor"
 * <ValueSection label="Saldo Devedor" value={0} />
 *
 * // Sem botão de ação
 * <ValueSection label="Saldo" value={1000} showButton={false} />
 * ```
 *
 * @param props - Propriedades do componente ValueSection
 * @returns Componente React renderizado
 */
export const ValueSection: React.FC<ValueSectionProps> = ({
  label,
  value,
  currency = 'R$',
  size = 'standard',
  showButton = true,
  onButtonPress,
}) => {
  const hasValue = value !== undefined && value !== null && value !== 0;
  const isLarge = size === 'large';

  const LabelComponent = isLarge ? LabelStandard : LabelSmall;
  const ValueComponent = isLarge
    ? DisplayNumericalStandardSemibold
    : TitleNumericalStandardSemibold;

  return (
    <YStack
      paddingHorizontal="$tiny"
      gap={isLarge ? '$quark' : '$none'}
      width="100%"
    >
      <LabelComponent color="$onNeutral2">{label}</LabelComponent>
      <XStack
        alignItems="center"
        justifyContent="space-between"
        width="100%"
        gap={'$quark'}
      >
        <XStack gap="$nano" alignItems="center" paddingVertical="$quark">
          {hasValue ? (
            <>
              <ValueComponent color="$onNeutral2">{currency}</ValueComponent>
              <ValueComponent color="$onNeutral1">
                {value?.toLocaleString('pt-BR', {
                  minimumFractionDigits: 2,
                  maximumFractionDigits: 2,
                })}
              </ValueComponent>
            </>
          ) : (
            <ValueComponent color="$onNeutral1">Sem valor</ValueComponent>
          )}
        </XStack>
        {showButton && (
          <Button
            type="chromeless"
            size="small"
            icon={<Edit />}
            onPress={onButtonPress}
          >
            Alterar
          </Button>
        )}
      </XStack>
    </YStack>
  );
};
