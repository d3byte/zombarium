import { weaponFactory } from 'factories/weapon.factory';
import { WeaponInterface } from 'types/items/weapon.type';

export const WEAPONS: WeaponInterface[] = [
  weaponFactory({
    title: 'Бита',
    weight: 4,
    spawnChance: 0.2,
    damageInterval: [10, 15],
  }),
  weaponFactory({
    title: 'Топор',
    weight: 6,
    spawnChance: 0.1,
    damageInterval: [14, 30],
  }),
  weaponFactory({
    title: 'Нож',
    weight: 2,
    spawnChance: 0.1,
    damageInterval: [5, 11],
  }),
];
