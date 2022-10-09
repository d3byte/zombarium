import { TileTypeEnum } from 'types/game/tile.type';
import { getArray } from 'utils/get-array';
import { tileFactory } from '../factories/tile.factory';
import { floor } from './floor';

export const housePreset = () => {
  const verticalWall = () =>
    tileFactory({
      type: TileTypeEnum.WALL_VERTICAL,
    });
  return [
    getArray(7, () =>
      tileFactory({
        type: TileTypeEnum.WALL_HORIZONTAL,
      }),
    ),
    ...getArray(5, (y) => [verticalWall(), ...getArray(5, floor), verticalWall()]),
    getArray(7, (index: number) =>
      tileFactory({
        type: index === 3 ? TileTypeEnum.DOOR : TileTypeEnum.WALL_HORIZONTAL,
      }),
    ),
  ];
};
