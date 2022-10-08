import { BaseInterface } from 'types/base.type';

export enum TileTypeEnum {
  FLOOR,
  WALL_HORIZONTAL,
  WALL_VERTICAL,
  DOOR,
}

export interface TileInterface extends BaseInterface {
  type: TileTypeEnum;
}
