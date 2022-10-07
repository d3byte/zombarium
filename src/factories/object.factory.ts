import { ObjectInterface } from 'types/objects/object.type';
import { factory } from './base.factory';

export const objectFactory = factory<ObjectInterface, {}>('object', {});
