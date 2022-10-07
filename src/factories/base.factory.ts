import { BaseInterface } from 'types/base.type';

type ExcludedTypes<T, U> = {
  [K in Exclude<keyof T, keyof U>]: T[K];
};

export const factory = <T, B>(prefix: string, base: B) => {
  let amount = 0;
  return (custom: ExcludedTypes<T, B & BaseInterface>): T => {
    amount++;
    return {
      id: `${prefix}-${amount}`,
      ...base,
      ...custom,
    } as T;
  };
};
