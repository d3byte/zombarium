import { useGameContext } from 'contexts/game.context';
import { usePlayerContext } from 'contexts/player.context';
import { addLootToInventory, removeItemFromInventory, setEffects, setOpenedInventory, setOpenedObject, setStats, setWeapon } from 'hoc/withGameContext/actions';
import { useMemo, useState } from 'react';
import { ConsumableInterface } from 'types/items/consumable.type';
import { ItemInterface } from 'types/items/item.type';
import { WeaponInterface } from 'types/items/weapon.type';

export const useLootList = () => {
  const { openedObject, openedInventory, dispatch } = useGameContext();
  const { player } = usePlayerContext();
  const [takenLoot, setTakenLoot] = useState<ItemInterface[]>([]);
  const isInventory = useMemo(() => !openedObject && openedInventory, [openedObject, openedInventory]);
  const takenLootItemsIds = useMemo(() => takenLoot.map(item => item.id), [takenLoot]);
  const lootList = useMemo(() => isInventory ? player.inventory : openedObject?.loot?.filter(item => !takenLootItemsIds.includes(item.id)) as ItemInterface[], [isInventory, takenLootItemsIds, player.inventory, openedObject]);

  const takeAll = () => {
    dispatch(addLootToInventory(openedObject?.loot || [], player.id));
    closeLootList();
  };

  const takeLootItem = (item: ItemInterface) => {
    setTakenLoot([...takenLoot, item]);
  };

  const closeLootList = () => {
    if (isInventory) {
      dispatch(setOpenedInventory(false));
    } else {
      dispatch(addLootToInventory(takenLoot, player.id));
      dispatch(setOpenedObject(undefined));
    }
  };

  const deleteItem = (item: ItemInterface) => {
    if (item.id === player.equippedWeapon?.id) {
      dispatch(setWeapon(undefined));
    }
    dispatch(removeItemFromInventory(item, player.id));
  };

  const applyConsumable = (item: ConsumableInterface) => {
    dispatch(setStats(item.statsModifier(player.stats), player.id));
    const buffs = Array.from(new Set([...player.buffs, ...(item.buffsApplied || [])]));
    const debuffs = Array.from(new Set([...player.debuffs, ...(item.debuffsInflicted || [])].filter(debuff => !item.debuffsRemoved?.includes(debuff.type))));
    dispatch(setEffects(buffs, debuffs));
    deleteItem(item);
  };

  const setPlayerWeapon = (weapon?: WeaponInterface) => {
    dispatch(setWeapon(weapon));
  };

  return {
    takeAll,
    takeLootItem,
    closeLootList,
    isInventory,
    lootList,
    applyConsumable,
    setPlayerWeapon,
    deleteItem,
  };
};
