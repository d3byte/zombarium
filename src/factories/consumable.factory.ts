import { ItemTypeEnum } from 'types/items/item.type';
import { ConsumableInterface } from 'types/items/consumable.type';
import { factory } from './base.factory';

const defaultValue = { type: ItemTypeEnum.CONSUMABLE };

export const consumableFactory = factory<ConsumableInterface, typeof defaultValue>('consumable', defaultValue);
