import { BuffInterface } from 'types/effects/buff.type';
import { DebuffInterface } from 'types/effects/debuff.type';
import { ItemInterface } from 'types/items/item.type';
import { WeaponInterface } from 'types/items/weapon.type';
import { EntityInterface, EntityStatsInterface, EntityTypeEnum } from './entity.type';

export interface PlayerStatsInterface extends EntityStatsInterface {
  hunger: number;
}

export interface PlayerInterface extends Omit<EntityInterface, 'stats'> {
  type: EntityTypeEnum.PLAYER;
  stats: PlayerStatsInterface;
  inventory: ItemInterface[];
  debuffs: DebuffInterface[];
  buffs: BuffInterface[];
  equippedWeapon: WeaponInterface | null;
}
