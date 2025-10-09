export const getDigitArray = (value: string, digitCount: number) => {
  return Array.from({ length: digitCount }, (_, index) => value[index] ?? '');
};
