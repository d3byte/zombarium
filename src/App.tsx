import React from 'react';
import { withTheme } from 'hoc/withTheme';
import { withGameContext } from 'hoc/withGameContext';
import { Game } from 'game';
import { withPlayerContext } from 'hoc/withPlayerContext';

const App = () => {
  return <Game />;
};

export default withTheme(withGameContext(withPlayerContext(App)));
