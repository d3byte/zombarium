import { GameStateInterface } from 'contexts/game.context';
import { DebuffInterface } from 'types/effects/debuff.type';
import { EntityPositionInterface, EntityStatsInterface, EntityTypeEnum } from 'types/entities/entity.type';
import { ItemInterface } from 'types/items/item.type';
import { ObjectInterface } from 'types/objects/object.type';

export enum GameActionTypeEnum {
  RESET_STATE,
  SET_TURN,
  SET_POSITION,
  SET_STAT,
  SET_STATS,
  SET_OPENED_OBJECT,
  DELETE_ZOMBIE,
  ADD_LOOT,
  REFRESH_ENERGY,
  ZOMBIE_ATTACK,
}

export interface GameActionInterface {
  type: GameActionTypeEnum;
  payload: any;
}

export const resetState = (state: GameStateInterface) => ({
  type: GameActionTypeEnum.RESET_STATE,
  payload: state,
});
export const setTurn = (turn: EntityTypeEnum) => ({
  type: GameActionTypeEnum.SET_TURN,
  payload: turn,
});
export const setPosition = (position: EntityPositionInterface, entityId: string) => ({
  type: GameActionTypeEnum.SET_POSITION,
  payload: { position, entityId },
});
export const setStat = (stat: string, value: number, entityId: string) => ({
  type: GameActionTypeEnum.SET_STAT,
  payload: { stat, value, entityId },
});
export const setStats = <T extends EntityStatsInterface>(stats: T, entityId: string) => ({
  type: GameActionTypeEnum.SET_STATS,
  payload: { stats, entityId },
});
export const setOpenedObject = (object?: ObjectInterface) => ({
  type: GameActionTypeEnum.SET_OPENED_OBJECT,
  payload: object,
});
export const deleteZombie = (id: string) => ({
  type: GameActionTypeEnum.DELETE_ZOMBIE,
  payload: id,
});
export const addLootToInventory = (loot: ItemInterface[], id: string) => ({
  type: GameActionTypeEnum.ADD_LOOT,
  payload: { loot, id },
});
export const refreshEntityEnergy = () => ({
  type: GameActionTypeEnum.REFRESH_ENERGY,
});
export const zombieAttack = (debuffs: DebuffInterface[]) => ({
  type: GameActionTypeEnum.ZOMBIE_ATTACK,
  payload: debuffs,
});
