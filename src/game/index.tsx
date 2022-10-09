import { MAX_PLAYER_HP } from 'constants/entity-stats.const';
import { useGameContext } from 'contexts/game.context';
import { usePlayerContext } from 'contexts/player.context';
import React, { useLayoutEffect, useState } from 'react';
import { Footer } from './footer';
import { LootList } from './loot-list';
import { DAMAGE_ANIMATION_DURATION, GameLayout, GlobalStyles, TilesWrapper } from './styles';
import { TilesGrid } from './tiles/grid';

export const Game = () => {
  const { openedObject, openedInventory } = useGameContext();
  const {
    player: {
      stats: { hp },
    },
  } = usePlayerContext();
  const [showDamageAnimation, setShowDamageAnimation] = useState(false);

  useLayoutEffect(() => {
    if (hp !== MAX_PLAYER_HP) {
      setShowDamageAnimation(true);
      const timeoutId = setTimeout(() => {
        setShowDamageAnimation(false);
      }, DAMAGE_ANIMATION_DURATION);
      return () => clearTimeout(timeoutId);
    }
    return;
  }, [hp]);

  return (
    <GameLayout>
      <TilesWrapper showDamageAnimation={showDamageAnimation}>
        <TilesGrid />
      </TilesWrapper>
      <Footer />
      {!!(openedObject || openedInventory) && <LootList />}
      <GlobalStyles />
    </GameLayout>
  );
};
