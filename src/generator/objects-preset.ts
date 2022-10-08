import { objectFactory } from "factories/object.factory";
import { ObjectTypeEnum } from "types/objects/object.type";
import { randomLoot } from "./random-loot";

export const objectsPreset = [
    objectFactory({
        type: ObjectTypeEnum.CHEST,
        loot: randomLoot(),
        title: 'Сундук',
        position: {
            x: 4,
            y: 6,
        }
      }),
];