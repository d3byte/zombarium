import { BaseInterface } from 'types/base.type';
import { PositionInterface } from 'types/game/position.type';
import { ItemInterface } from 'types/items/item.type';

export enum ObjectTypeEnum {
  CHEST,
}

export interface ObjectInterface extends BaseInterface {
  type: ObjectTypeEnum;
  loot: ItemInterface[];
  title: string;
  position: PositionInterface;
}
