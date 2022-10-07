import { BaseInterface } from 'types/base.type';

export enum ItemTypeEnum {
  WEAPON,
  CONSUMABLE,
}

export interface ItemInterface extends BaseInterface {
  type: ItemTypeEnum;
  title: string;
  weight: number;
  spawnChance: number;
}
