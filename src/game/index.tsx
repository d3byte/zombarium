import { useGameContext } from 'contexts/game.context';
import React from 'react';

export const Game = () => {
  const { currentLevel: { tiles } } = useGameContext();

  return <div />;
};
