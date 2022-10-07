import { BARRIER_TILES } from 'constants/barrier-tiles.const';
import { useGameContext } from 'contexts/game.context';
import { usePlayerContext } from 'contexts/player.context';
import { useMemo } from 'react';
import { EntityPositionInterface } from 'types/entities/entity.type';
import { TileInterface } from 'types/game/tile.type';

const getEnergyForWalk = (from: EntityPositionInterface, to: EntityPositionInterface, inventoryWeight: number) => {
  if (from.y === to.y) return Math.abs(from.x - to.x) + Math.round(inventoryWeight / 10);
  if (from.x === to.x) return Math.abs(from.y - to.y) + Math.round(inventoryWeight / 10);
};

export const getHasBarriersWithEntity = (
  entityPos: EntityPositionInterface,
  tilePos: EntityPositionInterface,
  tiles: TileInterface[][],
) => {
  const hasVerticalBarrier = tiles
    .slice(Math.min(entityPos.y, tilePos.y), Math.max(entityPos.y, tilePos.y) + 1)
    .reduce((hasBarrier: boolean, row: TileInterface[]) => {
      return hasBarrier || BARRIER_TILES.includes(row[entityPos.x].type);
    }, false);

  const hasHorizontalBarrier = tiles[entityPos.y]
    .slice(Math.min(entityPos.x, tilePos.x), Math.max(entityPos.x, tilePos.x) + 1)
    .reduce((hasBarrier: boolean, tile: TileInterface) => {
      return hasBarrier || BARRIER_TILES.includes(tile.type);
    }, false);

  return [hasHorizontalBarrier, hasVerticalBarrier];
};

const getIsAllowedToWalkOn = (
  hasBarriers: boolean[],
  playerPos: EntityPositionInterface,
  tilePos: EntityPositionInterface,
) => {
  if (playerPos.y === tilePos.y) return !hasBarriers[0];
  if (playerPos.x === tilePos.x) return !hasBarriers[1];
  return false;
};

export const useTile = (position: EntityPositionInterface) => {
  const {
    currentLevel: { tiles, entities },
  } = useGameContext();
  const { player, inventoryWeight } = usePlayerContext();
  const tile = useMemo(() => tiles[position.y][position.x], [tiles]);
  const hasBarriersWithPlayer = useMemo(
    () => getHasBarriersWithEntity(player.position, position, tiles),
    [player.position, tile, tiles],
  );
  const isAllowedToWalkOn = useMemo(
    () => getIsAllowedToWalkOn(hasBarriersWithPlayer, player.position, position),
    [hasBarriersWithPlayer, player.position, tile],
  );
  const energyForWalk = useMemo(
    () => getEnergyForWalk(player.position, position, inventoryWeight),
    [player.position, tiles, tile, inventoryWeight],
  );
  const entity = useMemo(
    () => entities.find(({ position: { x, y } }) => x === position.x && y === position.y),
    [entities],
  );

  return {
    tile,
    isAllowedToWalkOn,
    energyForWalk,
    entity,
  };
};
