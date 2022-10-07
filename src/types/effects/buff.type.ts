import { EffectInterface } from './effect.type';

export enum BuffTypeEnum {
  WELL_FED,
  RESTED,
}

export interface BuffInterface extends EffectInterface {
  type: BuffTypeEnum;
}
