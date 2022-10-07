import { MAX_PLAYER_ENERGY, MAX_PLAYER_HP, MAX_PLAYER_HUNGER, MAX_PLAYER_MORALE } from 'constants/entity-stats.const';
import { EntityTypeEnum } from 'types/entities/entity.type';
import { PlayerInterface } from 'types/entities/player.type';
import { factory } from './base.factory';

const defaultValue = {
  type: EntityTypeEnum.PLAYER,
  stats: {
    hp: MAX_PLAYER_HP,
    energy: MAX_PLAYER_ENERGY,
    morale: MAX_PLAYER_MORALE,
    hunger: MAX_PLAYER_HUNGER,
  },
  inventory: [],
  inventoryWeight: 0,
  equippedWeapon: null,
  debuffs: [],
  buffs: [],
};

export const playerFactory = factory<PlayerInterface, typeof defaultValue>('player', defaultValue);
