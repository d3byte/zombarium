import { createContext, useContext } from 'react';
import { PlayerInterface } from 'types/entities/player.type';
import { ZombieInterface } from 'types/entities/zombie.type';
import { PositionInterface } from 'types/game/position.type';
import { ObjectInterface } from 'types/objects/object.type';
import { noop } from 'utils/noop';

export interface PlayerContextInterface {
  player: PlayerInterface;
  inventoryWeight: number;
  walkTo: (position: PositionInterface, energyToSpend: number) => void;
  lootObject: (object: ObjectInterface, tilePos: PositionInterface) => void;
  attack: (zombie: ZombieInterface) => void;
}

export const PlayerContext = createContext<PlayerContextInterface>({
  player: undefined,
  inventoryWeight: undefined,
  walkTo: noop,
  lootObject: noop,
  attack: noop,
} as unknown as PlayerContextInterface);

export const usePlayerContext = () => useContext(PlayerContext);
