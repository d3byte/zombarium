import { LevelInterface } from 'types/game/level.type';
import { TileInterface } from 'types/game/tile.type';
import { getArray } from 'utils/get-array';
import { levelFactory } from 'factories/level.factory';
import { putEntitiesOnTiles } from 'utils/put-entities-on-tiles';
import { entitiesPreset } from './entities-preset';
import { housePreset } from './house-preset';
import { floor } from './floor';

export const levelGenerator = (): LevelInterface => {
  const house = housePreset();

  const tiles: TileInterface[][] = [
    getArray(8, floor),
    ...getArray(house.length, (i: number) => [floor(), ...house[i], floor()]),
    getArray(8, floor),
  ];

  const entities = entitiesPreset(tiles);

  return levelFactory({
    tiles: putEntitiesOnTiles(tiles, entities),
    entities,
  });
};
