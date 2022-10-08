import { BaseInterface } from 'types/base.type';
import { EntityInterface } from 'types/entities/entity.type';
import { ObjectInterface } from 'types/objects/object.type';
import { TileInterface } from './tile.type';

export interface LevelInterface extends BaseInterface {
  tiles: TileInterface[][];
  entities: EntityInterface[];
  objects: ObjectInterface[];
}
