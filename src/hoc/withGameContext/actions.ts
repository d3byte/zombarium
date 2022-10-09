import { GameStateInterface } from 'contexts/game.context';
import { BuffInterface } from 'types/effects/buff.type';
import { DebuffInterface } from 'types/effects/debuff.type';
import { EntityStatsInterface, EntityTypeEnum } from 'types/entities/entity.type';
import { PositionInterface } from 'types/game/position.type';
import { ItemInterface } from 'types/items/item.type';
import { WeaponInterface } from 'types/items/weapon.type';
import { ObjectInterface } from 'types/objects/object.type';

export enum GameActionTypeEnum {
  RESET_STATE,
  SET_TURN,
  SET_POSITION,
  SET_STAT,
  SET_STATS,
  SET_OPENED_OBJECT,
  SET_OPENED_INVENTORY,
  DELETE_ZOMBIE,
  ADD_LOOT,
  REFRESH_ENERGY,
  ZOMBIE_ATTACK,
  SET_WALK_MODE,
  REMOVE_INVENTORY_ITEM,
  SET_EFFECTS,
  SET_WEAPON,
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
export const setPosition = (position: PositionInterface, entityId: string) => ({
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
export const addLootToInventory = (loot: ItemInterface[], id: string, object: ObjectInterface) => ({
  type: GameActionTypeEnum.ADD_LOOT,
  payload: { loot, lootIds: loot.map((item) => item.id), id, object },
});
export const removeItemFromInventory = (item: ItemInterface, entityId: string) => ({
  type: GameActionTypeEnum.REMOVE_INVENTORY_ITEM,
  payload: { itemId: item.id, id: entityId },
});
export const refreshEntityEnergy = () => ({
  type: GameActionTypeEnum.REFRESH_ENERGY,
});
export const zombieAttack = (debuffs: DebuffInterface[]) => ({
  type: GameActionTypeEnum.ZOMBIE_ATTACK,
  payload: debuffs,
});
export const setOpenedInventory = (value: boolean) => ({
  type: GameActionTypeEnum.SET_OPENED_INVENTORY,
  payload: value,
});
export const setEffects = (buffs: BuffInterface[], debuffs: DebuffInterface[]) => ({
  type: GameActionTypeEnum.SET_EFFECTS,
  payload: { buffs, debuffs },
});
export const setWeapon = (weapon?: WeaponInterface) => ({
  type: GameActionTypeEnum.SET_WEAPON,
  payload: weapon,
});
