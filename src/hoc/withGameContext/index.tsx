import React, { useMemo, useReducer } from 'react';
import { getDisplayName } from 'utils/getDisplayName';

import type { FC } from 'react';
import { GameContext, GameContextInterface, GameStateInterface } from 'contexts/game.context';
import { levelGenerator } from 'generator';
import { EntityTypeEnum } from 'types/entities/entity.type';

import { gameStateReducer } from './reducer';

const defaultState: GameStateInterface = {
  currentLevel: levelGenerator(),
  turn: EntityTypeEnum.PLAYER,
  openedObject: undefined,
};

export const withGameContext = <T,>(Child: FC<T>) => {
  const WithGameContext = (props: T) => {
    const [state, dispatch] = useReducer(gameStateReducer, defaultState);

    const contextValue = useMemo<GameContextInterface>(
      () => ({
        ...state,
        dispatch,
      }),
      [state],
    );

    return (
      <GameContext.Provider value={contextValue}>
        <Child {...props} />
      </GameContext.Provider>
    );
  };

  WithGameContext.displayName = `WithGameContext(${getDisplayName(Child)})`;

  return WithGameContext;
};
