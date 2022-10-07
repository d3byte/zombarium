import { TileInterface } from 'types/game/tile.type';
import { factory } from './base.factory';

export const tileFactory = factory<TileInterface, {}>('tile', {});
