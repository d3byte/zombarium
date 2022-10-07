import { debuffFactory } from 'factories/debuff.factory';
import { DebuffTypeEnum } from 'types/effects/debuff.type';
import { PlayerStatsInterface } from 'types/entities/player.type';

export const DEBUFFS = {
  [DebuffTypeEnum.BLEED]: debuffFactory({
    type: DebuffTypeEnum.BLEED,
    turnModifier: (stats: PlayerStatsInterface) => ({ ...stats, hp: stats.hp - 1 }),
  }),
  [DebuffTypeEnum.ILLNESS]: debuffFactory({
    type: DebuffTypeEnum.ILLNESS,
    turnModifier: (stats: PlayerStatsInterface) => ({ ...stats, energy: stats.energy - 1, hp: stats.hp - 1 }),
  }),
};
