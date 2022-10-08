import React, { useMemo, useReducer } from 'react';
import { getDisplayName } from 'utils/getDisplayName';

import type { FC } from 'react';
import { GameContext, GameContextInterface, GameStateInterface } from 'contexts/game.context';
import { levelGenerator } from 'generator';
import { EntityTypeEnum } from 'types/entities/entity.type';

import { gameStateReducer } from './reducer';
import { resetState } from './actions';

const defaultState: GameStateInterface = {
  currentLevel: levelGenerator(),
  turn: EntityTypeEnum.PLAYER,
  openedObject: undefined,
};

export const withGameContext = (Child: FC<any>) => {
  const WithGameContext = (props: any) => {
    const [state, dispatch] = useReducer(gameStateReducer, defaultState);

    const gameOver = () => {
      dispatch(resetState({ ...defaultState, currentLevel: levelGenerator() }));
    };

    const contextValue = useMemo<GameContextInterface>(
      () => ({
        ...state,
        gameOver,
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
