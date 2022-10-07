import { ItemTypeEnum } from 'types/items/item.type';
import { WeaponInterface } from 'types/items/weapon.type';
import { factory } from './base.factory';

const defaultValue = { type: ItemTypeEnum.WEAPON };

export const weaponFactory = factory<WeaponInterface, typeof defaultValue>('weapon', defaultValue);
