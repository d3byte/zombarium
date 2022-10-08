import { DEBUFFS } from 'constants/debuffs.const';
import {
  ZOMBIE_AGRO_RADIUS,
  ZOMBIE_CHANCE_INFLICT_BLEED,
  ZOMBIE_CHANCE_INFLICT_ILLNESS,
} from 'constants/entity-stats.const';
import { useGameContext } from 'contexts/game.context';
import { usePlayerContext } from 'contexts/player.context';
import { setPosition, setStat, zombieAttack } from 'hoc/withGameContext/actions';
import { DebuffInterface } from 'types/effects/debuff.type';
import { ZombieInterface } from 'types/entities/zombie.type';
import { PositionInterface } from 'types/game/position.type';
import { getHasBarriersWithEntity } from './use-tile';

const isPlayerInAggro = (
  playerPos: PositionInterface,
  zombiePos: PositionInterface,
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
    if (!barriers[0] && Math.abs(zombie.position.x - playerPos.x) !== 1) {
      const travelDistance = Math.abs(playerPos.x - zombie.position.x) > energy ? energy : Math.abs(playerPos.x - zombie.position.x);
      energy = Math.max(0, energy - travelDistance);
      handledPosition.x =
        playerPos.x > zombie.position.x ? handledPosition.x + travelDistance : handledPosition.x - travelDistance;
      if (handledPosition.x === playerPos.x && travelDistance) {
        handledPosition.x = playerPos.x > zombie.position.x ? handledPosition.x - 1 : handledPosition.x + 1;
      }
    }
    if (!barriers[1] && Math.abs(zombie.position.y - playerPos.y) !== 1) {
      const travelDistance = Math.abs(playerPos.y - zombie.position.y) > energy ? energy : Math.abs(playerPos.y - zombie.position.y);
      energy = Math.max(0, energy - travelDistance);
      handledPosition.y =
        playerPos.y > zombie.position.y ? handledPosition.y + travelDistance : handledPosition.y - travelDistance;
      
      if (handledPosition.y === playerPos.y && travelDistance) {
        handledPosition.y = playerPos.y > zombie.position.y ? handledPosition.y - 1 : handledPosition.y + 1;
      }
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
