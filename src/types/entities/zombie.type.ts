import { EntityInterface, EntityTypeEnum } from './entity.type';

export interface ZombieInterface extends EntityInterface {
  type: EntityTypeEnum.ZOMBIE;
}
