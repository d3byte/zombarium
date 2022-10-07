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
    });
  };
  const verticalWall = () =>
    tileFactory({
      type: TileTypeEnum.WALL_VERTICAL,
      object: undefined,
      entity: undefined,
    });
  return [
    getArray(6, (index: number) =>
      tileFactory({
        type: index === 3 ? TileTypeEnum.DOOR : TileTypeEnum.WALL_HORIZONTAL,
        object: index === 4 ? chest() : undefined,
        entity: undefined,
      }),
    ),
    ...getArray(4, () => [verticalWall(), ...getArray(4, floor), verticalWall()]),
    getArray(6, (index: number) =>
      tileFactory({
        type: index === 3 ? TileTypeEnum.DOOR : TileTypeEnum.WALL_HORIZONTAL,
        object: index === 2 ? chest() : undefined,
        entity: undefined,
      }),
    ),
  ];
};
