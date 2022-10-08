import { objectFactory } from 'factories/object.factory';
import { TileTypeEnum } from 'types/game/tile.type';
import { ObjectInterface, ObjectTypeEnum } from 'types/objects/object.type';
import { getArray } from 'utils/get-array';
import { tileFactory } from '../factories/tile.factory';
import { floor } from './floor';
import { randomLoot } from './random-loot';

export const housePreset = () => {
  const chest = (): ObjectInterface => {
    return objectFactory({
      type: ObjectTypeEnum.CHEST,
      loot: randomLoot(),
      title: 'Сундук'
    });
  };
  const verticalWall = () =>
    tileFactory({
      type: TileTypeEnum.WALL_VERTICAL,
      object: undefined,
    });
  return [
    getArray(7, () =>
      tileFactory({
        type: TileTypeEnum.WALL_HORIZONTAL,
        object: undefined,
      }),
    ),
    ...getArray(5, (y) => [verticalWall(), ...getArray(5, (x) => floor(x === 0 && y === 4 ? chest() : undefined)), verticalWall()]),
    getArray(7, (index: number) =>
      tileFactory({
        type: index === 3 ? TileTypeEnum.DOOR : TileTypeEnum.WALL_HORIZONTAL,
        object: undefined,
      }),
    ),
  ];
};
