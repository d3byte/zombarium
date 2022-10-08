import { BaseInterface } from 'types/base.type';
import { ObjectInterface } from 'types/objects/object.type';

export enum TileTypeEnum {
  FLOOR,
  WALL_HORIZONTAL,
  WALL_VERTICAL,
  DOOR,
}

export interface TileInterface extends BaseInterface {
  type: TileTypeEnum;
  object?: ObjectInterface;
}
