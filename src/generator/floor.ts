import { tileFactory } from 'factories/tile.factory';
import { TileTypeEnum } from 'types/game/tile.type';

export const floor = () =>
  tileFactory({
    type: TileTypeEnum.FLOOR,
    object: undefined,
    entity: undefined,
  });
