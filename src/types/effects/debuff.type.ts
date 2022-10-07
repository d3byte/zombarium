import { EffectInterface } from './effect.type';

export enum DebuffTypeEnum {
  BLEED,
  ILLNESS,
  SPRAINED_LEG,
}

export interface DebuffInterface extends EffectInterface {
  type: DebuffTypeEnum;
}
