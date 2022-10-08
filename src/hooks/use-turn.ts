import { useGameContext } from 'contexts/game.context';
import { usePlayerContext } from 'contexts/player.context';
import { refreshEntityEnergy, setStats, setTurn, setWalkMode } from 'hoc/withGameContext/actions';
import { useEffect, useMemo } from 'react';
import { EntityTypeEnum } from 'types/entities/entity.type';
import { ZombieInterface } from 'types/entities/zombie.type';
import { useZombies } from './use-zombies';

export const useTurn = () => {
  const {
    currentLevel: { entities },
    turn,
    dispatch,
    gameOver,
  } = useGameContext();
  const { zombieDoTurn } = useZombies();
  const { player } = usePlayerContext();
  const zombies = useMemo(
    () => entities.filter((item) => item.type === EntityTypeEnum.ZOMBIE) as ZombieInterface[],
    [entities],
  );

  useEffect(() => {
    if (turn === EntityTypeEnum.ZOMBIE) {
      dispatch(setWalkMode(false));
      zombies.forEach(zombieDoTurn);
      setTimeout(() => endTurn(EntityTypeEnum.PLAYER), 3000);
    } else {
      dispatch(setWalkMode(true));
      let stats = { ...player.stats };
      [...player.debuffs, ...player.buffs].forEach((item) => (stats = item.turnModifier(stats)));

      if (stats.hunger > 0) stats.hunger--;
      else stats.hp--;

      if (stats.hp <= 0) {
        return gameOver();
      }

      dispatch(setStats(stats, player.id));
    }
  }, [turn]);

  const endTurn = (newTurn: EntityTypeEnum) => {
    dispatch(refreshEntityEnergy());
    dispatch(setTurn(newTurn));
  };

  return {
    endTurn,
  };
};
