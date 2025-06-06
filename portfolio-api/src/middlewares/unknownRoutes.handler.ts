import { NotFoundException } from '../utils/exceptions.js';

/**
 * Pour toutes les autres routes non définies, on retourne une erreur
 */
export const UnknownRoutesHandler = (): never => {
    throw new NotFoundException(new Error(`La resource demandée n'existe pas`));
};
