export const getNextFocusIndex = (digits: string[]) => {
  const firstEmptyIndex = digits.findIndex(digit => digit.length === 0);

  if (firstEmptyIndex === -1) {
    return digits.length - 1;
  }

  return firstEmptyIndex;
};
