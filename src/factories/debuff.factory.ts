import { DebuffInterface } from 'types/effects/debuff.type';
import { factory } from './base.factory';

export const debuffFactory = factory<DebuffInterface, {}>('debuff', {});
