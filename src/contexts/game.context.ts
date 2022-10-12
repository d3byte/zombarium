import { createContext, useContext, Dispatch } from 'react';
import { EntityTypeEnum } from 'types/entities/entity.type';
import { LevelInterface } from 'types/game/level.type';
import { ObjectInterface } from 'types/objects/object.type';

import { noop } from 'utils/noop';

export interface GameStateInterface {
  currentLevel: LevelInterface;
  turn: EntityTypeEnum;
  openedObject?: ObjectInterface;
  openedInventory?: boolean;
  isInfoOpened?: boolean;
}

export interface GameContextInterface extends GameStateInterface {
  dispatch: Dispatch<any>;
  gameOver: () => void;
}

export const GameContext = createContext<GameContextInterface>({
  currentLevel: undefined,
  turn: undefined,
  openedInventory: false,
  openedObject: undefined,
  isInfoOpened: false,
  dispatch: noop,
  gameOver: noop,
} as unknown as GameContextInterface);

export const useGameContext = () => useContext(GameContext);
