import { MAX_PLAYER_ENERGY, MAX_ZOMBIE_ENERGY, ZOMBIE_ATTACK_DAMAGE } from 'constants/entity-stats.const';
import { GameStateInterface } from 'contexts/game.context';
import { EntityTypeEnum } from 'types/entities/entity.type';
import { PlayerInterface } from 'types/entities/player.type';
import { GameActionInterface, GameActionTypeEnum } from './actions';

export const gameStateReducer = (state: GameStateInterface, action: GameActionInterface): GameStateInterface => {
  switch (action.type) {
    case GameActionTypeEnum.SET_TURN:
      return {
        ...state,
        turn: action.payload,
      };
    case GameActionTypeEnum.SET_INFO_OPENED:
      return {
        ...state,
        isInfoOpened: action.payload,
      };
    case GameActionTypeEnum.RESET_STATE:
      return {
        ...state,
        ...action.payload,
      };
    case GameActionTypeEnum.SET_POSITION:
      return {
        ...state,
        currentLevel: {
          ...state.currentLevel,
          entities: state.currentLevel.entities.map((item) => {
            if (item.id === action.payload.entityId) {
              return {
                ...item,
                position: action.payload.position,
              };
            }
            return item;
          }),
        },
      };
    case GameActionTypeEnum.SET_STAT:
      return {
        ...state,
        currentLevel: {
          ...state.currentLevel,
          entities: state.currentLevel.entities.map((item) => {
            if (item.id === action.payload.entityId) {
              return {
                ...item,
                stats: {
                  ...item.stats,
                  [action.payload.stat]: action.payload.value,
                },
              };
            }
            return item;
          }),
        },
      };
    case GameActionTypeEnum.SET_OPENED_OBJECT:
      return {
        ...state,
        openedObject: action.payload,
      };
    case GameActionTypeEnum.SET_OPENED_INVENTORY:
      return {
        ...state,
        openedInventory: action.payload,
      };
    case GameActionTypeEnum.DELETE_ZOMBIE:
      return {
        ...state,
        currentLevel: {
          ...state.currentLevel,
          entities: state.currentLevel.entities.filter((item) => item.id !== action.payload),
        },
      };
    case GameActionTypeEnum.ADD_LOOT:
      return {
        ...state,
        currentLevel: {
          ...state.currentLevel,
          objects: state.currentLevel.objects.map((item) => {
            if (item.id === action.payload.object.id) {
              return {
                ...item,
                loot: item.loot.filter((loot) => !action.payload.lootIds.includes(loot.id)),
              };
            }
            return item;
          }),
          entities: state.currentLevel.entities.map((item) => {
            if (item.id === action.payload.id) {
              return {
                ...item,
                inventory: [...(item as PlayerInterface).inventory, ...action.payload.loot],
              };
            }
            return item;
          }),
        },
      };
    case GameActionTypeEnum.REFRESH_ENERGY:
      return {
        ...state,
        currentLevel: {
          ...state.currentLevel,
          entities: state.currentLevel.entities.map((item) => {
            return {
              ...item,
              stats: {
                ...item.stats,
                energy: item.type === EntityTypeEnum.PLAYER ? MAX_PLAYER_ENERGY : MAX_ZOMBIE_ENERGY,
              },
            };
          }),
        },
      };
    case GameActionTypeEnum.ZOMBIE_ATTACK:
      return {
        ...state,
        currentLevel: {
          ...state.currentLevel,
          entities: state.currentLevel.entities.map((item) => {
            if (item.type === EntityTypeEnum.PLAYER) {
              return {
                ...item,
                stats: {
                  ...item.stats,
                  hp: item.stats.hp - ZOMBIE_ATTACK_DAMAGE,
                },
                debuffs: action.payload,
              } as PlayerInterface;
            }
            return item;
          }),
        },
      };
    case GameActionTypeEnum.SET_STATS:
      return {
        ...state,
        currentLevel: {
          ...state.currentLevel,
          entities: state.currentLevel.entities.map((item) => {
            if (item.id === action.payload.entityId) {
              return {
                ...item,
                stats: action.payload.stats,
              };
            }
            return item;
          }),
        },
      };
    case GameActionTypeEnum.REMOVE_INVENTORY_ITEM:
      return {
        ...state,
        currentLevel: {
          ...state.currentLevel,
          entities: state.currentLevel.entities.map((item) => {
            if (item.id === action.payload.id) {
              return {
                ...item,
                inventory: (item as PlayerInterface).inventory.filter(
                  (lootItem) => lootItem.id !== action.payload.itemId,
                ),
              };
            }
            return item;
          }),
        },
      };
    case GameActionTypeEnum.SET_EFFECTS:
      return {
        ...state,
        currentLevel: {
          ...state.currentLevel,
          entities: state.currentLevel.entities.map((item) => {
            if (item.type === EntityTypeEnum.PLAYER) {
              return {
                ...item,
                buffs: action.payload.buffs,
                debuffs: action.payload.debuffs,
              };
            }
            return item;
          }),
        },
      };
    case GameActionTypeEnum.SET_WEAPON:
      return {
        ...state,
        currentLevel: {
          ...state.currentLevel,
          entities: state.currentLevel.entities.map((item) => {
            if (item.type === EntityTypeEnum.PLAYER) {
              return {
                ...item,
                equippedWeapon: action.payload,
              };
            }
            return item;
          }),
        },
      };
    default:
      return state;
  }
};
