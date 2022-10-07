import { MAX_PLAYER_ENERGY, MAX_ZOMBIE_ENERGY } from 'constants/entity-stats.const';
import { GameStateInterface } from 'contexts/game.context';
import { EntityTypeEnum } from 'types/entities/entity.type';
import { GameActionInterface, GameActionTypeEnum } from './actions';

export const gameStateReducer = (state: GameStateInterface, action: GameActionInterface): GameStateInterface => {
  switch (action.type) {
    case GameActionTypeEnum.SET_TURN:
      return {
        ...state,
        turn: action.payload,
      };
    case GameActionTypeEnum.SET_CURRENT_LEVEL:
      return {
        ...state,
        currentLevel: action.payload,
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
          entities: state.currentLevel.entities.map((item) => {
            if (item.id === action.payload.id) {
              return {
                ...item,
                inventory: action.payload.loot,
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
    default:
      return state;
  }
};
