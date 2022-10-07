import { MAX_ZOMBIE_ENERGY, MAX_ZOMBIE_HP } from 'constants/entity-stats.const';
import { EntityTypeEnum } from 'types/entities/entity.type';
import { ZombieInterface } from 'types/entities/zombie.type';
import { factory } from './base.factory';

const defaultValue = {
  type: EntityTypeEnum.ZOMBIE,
  stats: {
    hp: MAX_ZOMBIE_HP,
    energy: MAX_ZOMBIE_ENERGY,
  },
};

export const zombieFactory = factory<ZombieInterface, typeof defaultValue>('zombie', defaultValue);
