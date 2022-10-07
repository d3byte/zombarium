import React, { useMemo, useReducer } from 'react';
import { getDisplayName } from 'utils/getDisplayName';

import type { FC } from 'react';
import { PlayerContext } from 'contexts/player.context';
import { usePlayer } from 'hooks/use-player';

export const withPlayerContext = <T,>(Child: FC<T>) => {
  const WithPlayerContext = (props: T) => {
    const context = usePlayer();

    return (
      <PlayerContext.Provider value={context}>
        <Child {...props} />
      </PlayerContext.Provider>
    );
  };

  WithPlayerContext.displayName = `WithPlayerContext(${getDisplayName(Child)})`;

  return WithPlayerContext;
};
