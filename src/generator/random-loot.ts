import { CONSUMABLES } from 'constants/consumables.const';
import { WEAPONS } from 'constants/weapons.const';
import { ItemInterface } from 'types/items/item.type';
import { shuffle } from 'utils/arrays';
import { getArray } from 'utils/get-array';
import { randomIntFromInterval } from 'utils/random-int-from-interval';

const MAX_LOOT_PER_OBJECT = 4;

export const randomLoot = (): ItemInterface[] => {
  const all_items = [...CONSUMABLES, ...WEAPONS];
  const maxLootAmount = Math.max(MAX_LOOT_PER_OBJECT, all_items.length);
  const lootAmount = randomIntFromInterval(0, maxLootAmount);

  return Array.from(
    new Set(
      getArray(lootAmount, () => {
        return shuffle(all_items).find(({ spawnChance }) => spawnChance === parseFloat(Math.random().toFixed(1)));
      }).filter(Boolean),
    ),
  ) as ItemInterface[];
};
