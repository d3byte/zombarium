import { BuffInterface } from 'types/effects/buff.type';
import { DebuffInterface, DebuffTypeEnum } from 'types/effects/debuff.type';
import { PlayerStatsInterface } from 'types/entities/player.type';
import { ItemInterface, ItemTypeEnum } from './item.type';

export interface ConsumableInterface extends ItemInterface {
  type: ItemTypeEnum.CONSUMABLE;
  statsModifier: (stats: PlayerStatsInterface) => PlayerStatsInterface;
  buffsApplied?: BuffInterface[];
  debuffsInflicted?: DebuffInterface[];
  debuffsRemoved?: DebuffTypeEnum[];
}
