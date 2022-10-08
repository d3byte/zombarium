import { useGameContext } from 'contexts/game.context';
import React from 'react';
import { Footer } from './footer';
import { LootList } from './loot-list';
import { GameLayout, GlobalStyles, TilesWrapper } from './styles';
import { TilesGrid } from './tiles/grid';

export const Game = () => {
  const { openedObject, openedInventory } = useGameContext();
  return (
    <GameLayout>
      <TilesWrapper>
        <TilesGrid />
      </TilesWrapper>
      <Footer />
      {!!(openedObject || openedInventory) && <LootList />}
      <GlobalStyles />
    </GameLayout>
  );
};
