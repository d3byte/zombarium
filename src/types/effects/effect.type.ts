import { BaseInterface } from 'types/base.type';
import { PlayerStatsInterface } from 'types/entities/player.type';

export interface EffectInterface extends BaseInterface {
  type: unknown;
  turnModifier: (stats: PlayerStatsInterface) => PlayerStatsInterface;
}
