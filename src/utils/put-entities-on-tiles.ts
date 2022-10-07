import { EntityInterface } from 'types/entities/entity.type';
import { TileInterface } from 'types/game/tile.type';

export const putEntitiesOnTiles = (tiles: TileInterface[][], entities: EntityInterface[]): TileInterface[][] => {
  const clonedTiles = JSON.parse(JSON.stringify(tiles)) as TileInterface[][];
  entities.forEach((item) => {
    clonedTiles[item.position.y][item.position.x].entity = item;
  });
  return clonedTiles;
};
