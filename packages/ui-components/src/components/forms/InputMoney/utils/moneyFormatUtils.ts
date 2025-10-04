/**
 * Utilitários para formatação e parsing de valores monetários
 *
 * Implementa funções reutilizáveis para lidar com formatação monetária
 * no padrão brasileiro (R$ 10.100,52)
 */

/**
 * Formata um valor numérico para exibição monetária brasileira
 *
 * @param value - Valor numérico a ser formatado
 * @returns Valor formatado no padrão brasileiro (ex: "10.100,52")
 */
export const formatDisplayValue = (value: number): string => {
  if (value === 0) return '0,00';
  return value.toLocaleString('pt-BR', {
    minimumFractionDigits: 2,
    maximumFractionDigits: 2,
  });
};

/**
 * Formata um valor numérico para edição (sem formatação de milhares)
 *
 * @param value - Valor numérico a ser formatado para edição
 * @returns Valor formatado para edição (ex: "10100,52")
 */
export const formatEditingValue = (value: number): string => {
  if (value === 0) return '0,00';
  return value.toString().replace('.', ',');
};

/**
 * Converte uma string de entrada em valor numérico
 * Suporta diferentes formatos de entrada brasileiros:
 * - "10100,52" -> 10100.52
 * - "10.100,52" -> 10100.52
 * - "10100" -> 10100
 * - "10,52" -> 10.52
 *
 * @param text - Texto a ser convertido
 * @returns Valor numérico correspondente
 */
export const parseInputValue = (text: string): number => {
  // Remove espaços e caracteres especiais, mantendo apenas dígitos, vírgula e ponto
  const cleanText = text.trim().replace(/[^\d,.]/g, '');

  // Se estiver vazio, retorna 0
  if (!cleanText || cleanText === '') return 0;

  // Remove pontos que são separadores de milhares (formato brasileiro)
  // Se há vírgula, tudo antes da última vírgula são milhares
  const parts = cleanText.split(',');

  if (parts.length > 2) {
    // Se há mais de uma vírgula, considera apenas as duas últimas partes
    const wholePart = parts.slice(0, -1).join('').replace(/\./g, '');
    const decimalPart = parts[parts.length - 1];

    // Limita casas decimais a 2 dígitos
    const limitedDecimalPart = decimalPart.substring(0, 2);
    const normalizedText = `${wholePart}.${limitedDecimalPart}`;
    const numericValue = parseFloat(normalizedText);
    return isNaN(numericValue) ? 0 : numericValue;
  }

  if (parts.length === 2) {
    // Formato com vírgula decimal (ex: 1.000,50 ou 1000,50)
    const wholePart = parts[0].replace(/\./g, ''); // Remove pontos dos milhares
    const decimalPart = parts[1].substring(0, 2); // Limita a 2 casas decimais
    const normalizedText = `${wholePart}.${decimalPart}`;
    const numericValue = parseFloat(normalizedText);
    return isNaN(numericValue) ? 0 : numericValue;
  }

  // Apenas números inteiros (ex: 1000)
  const normalizedText = cleanText.replace(/\./g, '');
  const numericValue = parseFloat(normalizedText);
  return isNaN(numericValue) ? 0 : numericValue;
};

/**
 * Valida se um valor monetário está dentro dos limites aceitáveis
 *
 * @param value - Valor a ser validado
 * @param maxValue - Valor máximo permitido (opcional)
 * @param minValue - Valor mínimo permitido (opcional)
 * @returns true se o valor é válido
 */
export const validateMoneyValue = (
  value: number,
  maxValue?: number,
  minValue: number = 0
): boolean => {
  if (isNaN(value) || value < minValue) return false;
  if (maxValue !== undefined && value > maxValue) return false;
  return true;
};

/**
 * Verifica se um valor monetário é considerado vazio (zero)
 *
 * @param value - Valor a ser verificado
 * @returns true se o valor é considerado vazio
 */
export const isValueEmpty = (value: number): boolean => {
  return value === 0 || isNaN(value);
};

/**
 * Converte uma entrada do usuário em valor numérico, otimizada para digitação em tempo real
 * Esta função trata a entrada como uma sequência de dígitos que representam centavos
 *
 * @param text - Texto sendo digitado (pode conter formatação)
 * @returns Valor numérico correspondente
 */
export const parseInputValueRealTime = (text: string): number => {
  // Remove tudo exceto dígitos
  const digitsOnly = text.replace(/\D/g, '');

  // Se vazio, retorna 0
  if (!digitsOnly) return 0;

  // Converte os dígitos para centavos e depois para reais
  const numericValue = parseInt(digitsOnly, 10) / 100;
  return isNaN(numericValue) ? 0 : numericValue;
};
