import { BaseInterface } from 'types/base.type';

export enum EntityTypeEnum {
  ZOMBIE,
  PLAYER,
}

export interface EntityStatsInterface {
  hp: number;
  energy: number;
}

export interface EntityPositionInterface {
  x: number;
  y: number;
}

export interface EntityInterface extends BaseInterface {
  type: EntityTypeEnum;
  stats: EntityStatsInterface;
  position: EntityPositionInterface;
}
