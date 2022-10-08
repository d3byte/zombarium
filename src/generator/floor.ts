import { tileFactory } from 'factories/tile.factory';
import { TileTypeEnum } from 'types/game/tile.type';
import { ObjectInterface } from 'types/objects/object.type';

export const floor = (object?: ObjectInterface) =>
  tileFactory({
    type: TileTypeEnum.FLOOR,
    object,
  });
