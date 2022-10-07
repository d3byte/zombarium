import { playerFactory } from 'factories/player.factory';
import { zombieFactory } from 'factories/zombie.factory';
import { EntityInterface } from 'types/entities/entity.type';
import { TileInterface } from 'types/game/tile.type';

export const entitiesPreset = (tiles: TileInterface[][]): EntityInterface[] => {
  return [
    playerFactory({ position: { x: 0, y: tiles.length - 1 } }),
    zombieFactory({ position: { x: 0, y: 0 } }),
    zombieFactory({ position: { x: tiles.length - 1, y: tiles.length - 1 } }),
  ];
};
