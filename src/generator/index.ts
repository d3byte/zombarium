import { LevelInterface } from 'types/game/level.type';
import { TileInterface } from 'types/game/tile.type';
import { getArray } from 'utils/get-array';
import { levelFactory } from 'factories/level.factory';
import { entitiesPreset } from './entities-preset';
import { housePreset } from './house-preset';
import { floor } from './floor';

export const levelGenerator = (): LevelInterface => {
  const house = housePreset();

  const tiles: TileInterface[][] = [
    getArray(13, () => floor()),
    ...getArray(house.length, (i: number) => [floor(), floor(), floor(), ...house[i], floor(), floor(), floor()]),
    getArray(13, () => floor()),
  ];

  const entities = entitiesPreset(tiles);

  return levelFactory({
    tiles,
    entities,
  });
};
