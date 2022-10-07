import { DEBUFFS } from 'constants/debuffs.const';
import {
  MAX_ZOMBIE_ENERGY,
  ZOMBIE_AGRO_RADIUS,
  ZOMBIE_CHANCE_INFLICT_BLEED,
  ZOMBIE_CHANCE_INFLICT_ILLNESS,
} from 'constants/entity-stats.const';
import { useGameContext } from 'contexts/game.context';
import { usePlayerContext } from 'contexts/player.context';
import { setPosition, setStat, zombieAttack } from 'hoc/withGameContext/actions';
import { DebuffInterface } from 'types/effects/debuff.type';
import { EntityPositionInterface } from 'types/entities/entity.type';
import { ZombieInterface } from 'types/entities/zombie.type';
import { getHasBarriersWithEntity } from './use-tile';

const isPlayerInAggro = (
  playerPos: EntityPositionInterface,
  zombiePos: EntityPositionInterface,
  barriers: boolean[],
): boolean => {
  return (
    (!barriers[0] && playerPos.y === zombiePos.y && Math.abs(zombiePos.y - playerPos.y) <= ZOMBIE_AGRO_RADIUS) ||
    (!barriers[1] && playerPos.x === zombiePos.x && Math.abs(zombiePos.x - playerPos.x) <= ZOMBIE_AGRO_RADIUS)
  );
};

export const useZombies = () => {
  const {
    currentLevel: { tiles },
    dispatch,
  } = useGameContext();
  const {
    player: { position: playerPos },
  } = usePlayerContext();

  const zombieDoTurn = (zombie: ZombieInterface) => {
    const barriers = getHasBarriersWithEntity(playerPos, zombie.position, tiles);
    if (!isPlayerInAggro(playerPos, zombie.position, barriers)) return;
    const handledPosition = { ...zombie.position };
    let energy = zombie.stats.energy;
    if (!barriers[0]) {
      const travelDistance = Math.max(MAX_ZOMBIE_ENERGY, Math.abs(playerPos.x - zombie.position.x));
      energy -= travelDistance;
      handledPosition.x =
        playerPos.x > handledPosition.x ? handledPosition.x + travelDistance : handledPosition.x - travelDistance;
    }
    if (!barriers[1] && zombie.position.y !== playerPos.y) {
      const travelDistance = Math.max(energy, Math.abs(playerPos.y - zombie.position.y));
      energy -= travelDistance;
      handledPosition.y =
        playerPos.y > handledPosition.y ? handledPosition.y + travelDistance : handledPosition.y - travelDistance;
    }
    dispatch(setStat('energy', energy, zombie.id));
    dispatch(setPosition(handledPosition, zombie.id));
    if (
      (!barriers[1] && Math.abs(handledPosition.y - playerPos.y) === 1) ||
      (!barriers[0] && Math.abs(handledPosition.x - playerPos.x) === 1)
    ) {
      const willBleed = Math.random() >= ZOMBIE_CHANCE_INFLICT_BLEED;
      const willBeIll = Math.random() <= ZOMBIE_CHANCE_INFLICT_ILLNESS;
      const debuffs: DebuffInterface[] = [];
      if (willBleed) debuffs.push(DEBUFFS.BLEED);
      if (willBeIll) debuffs.push(DEBUFFS.ILLNESS);
      dispatch(zombieAttack(debuffs));
    }
  };

  return {
    zombieDoTurn,
  };
};
