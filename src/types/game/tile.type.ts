import { BaseInterface } from 'types/base.type';
import { EntityInterface } from 'types/entities/entity.type';
import { ObjectInterface } from 'types/objects/object.type';

export enum TileTypeEnum {
  FLOOR,
  WALL_HORIZONTAL,
  WALL_VERTICAL,
  DOOR,
}

export interface TileInterface extends BaseInterface {
  type: TileTypeEnum;
  entity?: EntityInterface;
  object?: ObjectInterface;
}
