import { SUPPORTED_DIGIT_COUNTS } from '../InputPin.constants';
import type { InputPinVariant } from '../InputPin.model';

const numericRegex = /\d/g;
const alphanumericRegex = /[a-zA-Z0-9]/g;

const extractMatches = (value: string, regex: RegExp) =>
  value.match(regex)?.join('') ?? '';

export const normalizeValue = (
  variant: InputPinVariant,
  rawValue: string,
  digitCount: number
) => {
  if (!rawValue) return '';

  if (variant === 'alphanumeric') {
    return extractMatches(rawValue, alphanumericRegex);
  }

  const count = SUPPORTED_DIGIT_COUNTS.includes(digitCount as 4 | 6)
    ? digitCount
    : SUPPORTED_DIGIT_COUNTS[0];

  const digits = extractMatches(rawValue, numericRegex);

  return digits.slice(0, count);
};
