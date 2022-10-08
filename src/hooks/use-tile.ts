import { BARRIER_TILES } from 'constants/barrier-tiles.const';
import { ENERGY_TO_LOOT_OBJECT } from 'constants/entity-stats.const';
import { useGameContext } from 'contexts/game.context';
import { usePlayerContext } from 'contexts/player.context';
import { useMemo } from 'react';
import { EntityInterface, EntityPositionInterface, EntityTypeEnum } from 'types/entities/entity.type';
import { TileInterface } from 'types/game/tile.type';

const getEnergyForWalk = (from: EntityPositionInterface, to: EntityPositionInterface, inventoryWeight: number) => {
  if (from.y === to.y) return Math.abs(from.x - to.x) + Math.round(inventoryWeight / 10);
  if (from.x === to.x) return Math.abs(from.y - to.y) + Math.round(inventoryWeight / 10);
  return 0;
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
  entity?: EntityInterface,
) => {
  if (playerPos.y === tilePos.y) return !hasBarriers[0] && !entity;
  if (playerPos.x === tilePos.x) return !hasBarriers[1] && !entity;
  return false;
};

const getIsAttackPossible = (playerPos: EntityPositionInterface, position: EntityPositionInterface, entity?: EntityInterface) => {
  return !!entity && (Math.abs(playerPos.y - position.y) === 1 || Math.abs(playerPos.x - position.x) === 1);
};

export const useTile = (position: EntityPositionInterface, tile: TileInterface) => {
  const {
    currentLevel: { tiles, entities },
  } = useGameContext();
  const { player, inventoryWeight } = usePlayerContext();
  const hasBarriersWithPlayer = useMemo(
    () => getHasBarriersWithEntity(player.position, position, tiles),
    [player.position, tiles, position],
  );
  const entity = useMemo(
    () => entities.find(({ position: { x, y } }) => x === position.x && y === position.y),
    [entities, position],
  );
  const isAllowedToWalkOn = useMemo(
    () => getIsAllowedToWalkOn(hasBarriersWithPlayer, player.position, position, entity),
    [hasBarriersWithPlayer, player.position, position, entity],
  );
  const energyForWalk = useMemo(
    () => getEnergyForWalk(player.position, position, inventoryWeight),
    [player.position, position, inventoryWeight],
  );
  const isEntityPlayer = useMemo(() => entity?.type === EntityTypeEnum.PLAYER, [entity]);
  const hasEnoughEnergyToWalkOn = useMemo(() => player.stats.energy >= energyForWalk, [energyForWalk, player.stats]);
  const energyForAttack = useMemo(() => player.equippedWeapon?.weight || 0, [player.equippedWeapon]);
  const hasEnoughEnergyToAttack = useMemo(() => !!player.equippedWeapon && player.stats.energy >= energyForAttack, [player.equippedWeapon, player.stats, energyForAttack]);
  const isAttackPossible = useMemo(() => getIsAttackPossible(player.position, position, entity), [player.position, entity, position]);
  const canLootObject = useMemo(() => !!tile.object && player.stats.energy >= ENERGY_TO_LOOT_OBJECT && isEntityPlayer, [player.stats, tile, isEntityPlayer]);

  return {
    isAllowedToWalkOn,
    energyForWalk,
    entity,
    isEntityPlayer,
    hasEnoughEnergyToWalkOn,
    isAttackPossible,
    energyForAttack,
    hasEnoughEnergyToAttack,
    canLootObject
  };
};
