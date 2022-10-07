import { EntityPositionInterface, EntityTypeEnum } from 'types/entities/entity.type';
import { LevelInterface } from 'types/game/level.type';
import { ItemInterface } from 'types/items/item.type';
import { ObjectInterface } from 'types/objects/object.type';

export enum GameActionTypeEnum {
  SET_TURN,
  SET_CURRENT_LEVEL,
  SET_POSITION,
  SET_STAT,
  SET_OPENED_OBJECT,
  DELETE_ZOMBIE,
  ADD_LOOT,
  REFRESH_ENERGY,
}

export interface GameActionInterface {
  type: GameActionTypeEnum;
  payload: any;
}

export const setTurn = (turn: EntityTypeEnum) => ({
  type: GameActionTypeEnum.SET_TURN,
  payload: turn,
});
export const setCurrentLevel = (level: LevelInterface) => ({
  type: GameActionTypeEnum.SET_CURRENT_LEVEL,
  payload: level,
});
export const setPosition = (position: EntityPositionInterface, entityId: string) => ({
  type: GameActionTypeEnum.SET_POSITION,
  payload: { position, entityId },
});
export const setStat = (stat: string, value: number, entityId: string) => ({
  type: GameActionTypeEnum.SET_POSITION,
  payload: { stat, value, entityId },
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
