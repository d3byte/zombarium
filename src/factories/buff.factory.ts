import { BuffInterface } from 'types/effects/buff.type';
import { factory } from './base.factory';

export const buffFactory = factory<BuffInterface, {}>('buff', {});
