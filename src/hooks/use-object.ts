import { useGameContext } from 'contexts/game.context';
import { usePlayerContext } from 'contexts/player.context';
import { addLootToInventory, setOpenedObject } from 'hoc/withGameContext/actions';
import { useState } from 'react';
import { ItemInterface } from 'types/items/item.type';

export const useObject = () => {
  const { openedObject, dispatch } = useGameContext();
  const { player } = usePlayerContext();
  const [takenLoot, setTakenLoot] = useState<ItemInterface[]>([]);

  const takeAll = () => {
    setTakenLoot(openedObject?.loot || []);
    dispatch(addLootToInventory(takenLoot, player.id));
    dispatch(setOpenedObject(undefined));
  };

  return {
    takeAll,
  };
};
