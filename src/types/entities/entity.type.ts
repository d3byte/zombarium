import { BaseInterface } from 'types/base.type';
import { PositionInterface } from 'types/game/position.type';

export enum EntityTypeEnum {
  ZOMBIE,
  PLAYER,
}

export interface EntityStatsInterface {
  hp: number;
  energy: number;
}

export interface EntityInterface extends BaseInterface {
  type: EntityTypeEnum;
  stats: EntityStatsInterface;
  position: PositionInterface;
}
