export const getArray = <T>(amount: number, getElem: (i: number) => T) =>
  Array(amount)
    .fill(null)
    .map((_, index) => getElem(index));
