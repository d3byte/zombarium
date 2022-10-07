import { ItemInterface, ItemTypeEnum } from './item.type';

export interface WeaponInterface extends ItemInterface {
  type: ItemTypeEnum.WEAPON;
  damageInterval: [number, number];
}
