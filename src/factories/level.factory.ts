import { LevelInterface } from 'types/game/level.type';
import { factory } from './base.factory';

export const levelFactory = factory<LevelInterface, {}>('level', {});
