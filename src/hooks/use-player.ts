import { ENERGY_TO_LOOT_OBJECT } from 'constants/entity-stats.const';
import { useGameContext } from 'contexts/game.context';
import { deleteZombie, setOpenedObject, setPosition, setStat } from 'hoc/withGameContext/actions';
import { useMemo } from 'react';
import { EntityTypeEnum } from 'types/entities/entity.type';
import { PlayerInterface } from 'types/entities/player.type';
import { ZombieInterface } from 'types/entities/zombie.type';
import { PositionInterface } from 'types/game/position.type';
import { ItemInterface } from 'types/items/item.type';
import { ObjectInterface } from 'types/objects/object.type';
import { randomIntFromInterval } from 'utils/random-int-from-interval';

export const usePlayer = () => {
  const { currentLevel, dispatch } = useGameContext();
  const player = useMemo(
    () => currentLevel?.entities.find(({ type }) => type === EntityTypeEnum.PLAYER) as PlayerInterface,
    [currentLevel?.entities],
  );

  const inventoryWeight = useMemo(
    () => player.inventory.reduce((weight: number, item: ItemInterface) => weight + item.weight, 0),
    [player.inventory],
  );

  const walkTo = (position: PositionInterface, energyToSpend: number) => {
    if (player.stats.energy >= energyToSpend) {
      dispatch(setStat('energy', player.stats.energy - energyToSpend, player.id));
      dispatch(setPosition(position, player.id));
    }
  };

  const lootObject = (object: ObjectInterface) => {
    if (player.stats.energy >= ENERGY_TO_LOOT_OBJECT) {
      dispatch(setStat('energy', player.stats.energy - ENERGY_TO_LOOT_OBJECT, player.id));
      dispatch(setOpenedObject(object));
    }
  };

  const attack = (zombie: ZombieInterface) => {
    if (player.equippedWeapon && player.stats.energy >= player.equippedWeapon.weight) {
      dispatch(setStat('energy', player.stats.energy - player.equippedWeapon.weight, player.id));
      const dealtDamage = randomIntFromInterval(
        player.equippedWeapon.damageInterval[0],
        player.equippedWeapon.damageInterval[1],
      );
      const leftHp = zombie.stats.hp - dealtDamage;
      if (leftHp > 0) {
        dispatch(setStat('hp', leftHp, zombie.id));
      } else {
        dispatch(deleteZombie(zombie.id));
      }
    }
  };

  return {
    player,
    inventoryWeight,
    walkTo,
    lootObject,
    attack,
  };
};
