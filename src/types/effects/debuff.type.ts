import { EffectInterface } from './effect.type';

export enum DebuffTypeEnum {
  BLEED = 'BLEED',
  ILLNESS = 'ILLNESS',
}

export interface DebuffInterface extends EffectInterface {
  type: DebuffTypeEnum;
}
