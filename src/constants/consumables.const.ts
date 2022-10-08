import { consumableFactory } from 'factories/consumable.factory';
import { DebuffTypeEnum } from 'types/effects/debuff.type';
import { PlayerStatsInterface } from 'types/entities/player.type';
import { ConsumableInterface } from 'types/items/consumable.type';

export const CONSUMABLES: ConsumableInterface[] = [
  consumableFactory({
    title: 'Бутылка воды',
    weight: 0.5,
    spawnChance: 0.4,
    statsModifier: (stats: PlayerStatsInterface) => ({
      ...stats,
      hunger: stats.hunger + 1,
    }),
    buffsApplied: [],
    debuffsInflicted: [],
    debuffsRemoved: [],
  }),
  consumableFactory({
    title: 'Чипсы',
    weight: 0.15,
    spawnChance: 0.3,
    statsModifier: (stats: PlayerStatsInterface) => ({
      ...stats,
      hunger: stats.hunger + 2.5,
    }),
    buffsApplied: [],
    debuffsInflicted: [],
    debuffsRemoved: [],
  }),
  consumableFactory({
    title: 'Консервы',
    weight: 0.5,
    spawnChance: 0.2,
    statsModifier: (stats: PlayerStatsInterface) => ({
      ...stats,
      hunger: stats.hunger + 7,
    }),
    buffsApplied: [],
    debuffsInflicted: [],
    debuffsRemoved: [],
  }),
  consumableFactory({
    title: 'Медицинский бинт',
    weight: 0.1,
    spawnChance: 0.2,
    statsModifier: (stats: PlayerStatsInterface) => ({
      ...stats,
      hp: stats.hp + 5,
    }),
    buffsApplied: [],
    debuffsInflicted: [],
    debuffsRemoved: [DebuffTypeEnum.BLEED],
  }),
  consumableFactory({
    title: 'Витамины',
    weight: 0.1,
    spawnChance: 0.1,
    statsModifier: (stats: PlayerStatsInterface) => ({
      ...stats,
      hp: stats.hp + 3,
    }),
    buffsApplied: [],
    debuffsInflicted: [],
    debuffsRemoved: [DebuffTypeEnum.ILLNESS],
  }),
  consumableFactory({
    title: 'Энергетик',
    weight: 0.1,
    spawnChance: 0.3,
    statsModifier: (stats: PlayerStatsInterface) => ({
      ...stats,
      hunger: stats.hunger + 2,
      energy: stats.energy + 4,
    }),
    buffsApplied: [],
    debuffsInflicted: [],
    debuffsRemoved: [],
  }),
];
