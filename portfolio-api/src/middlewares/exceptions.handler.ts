import { ErrorRequestHandler, NextFunction, Request, Response } from 'express';

/**
 * Middleware de gestion globale des erreurs
 *
 * @param err - L'erreur Express (peut être la notre ou une autre)
 * @param req - La requête initiale
 * @param res - L'objet de réponse
 * @param next - Permet de passer au middleware suivant si existant
 *
 * @see https://expressjs.com/en/guide/error-handling.html
 */

interface CustomError {
    status: number;
    error: string;
}

export const ExceptionsHandler: ErrorRequestHandler = (
    err: CustomError,
    req: Request,
    res: Response,
    next: NextFunction
) => {
    /**
     * Voir "The default error handler" dans la doc officielle indiquée plus haut
     */
    if (res.headersSent) {
        return next(err);
    }

    /**
     * Si c'est le cas, on sait que c'est notre propre erreur
     */
    if (err.status && err.error) {
        res.status(err.status).json({ error: err.error });
        return;
    }

    /**
     * Dans les autres cas, on retourne une 500
     */
    res.status(500).json({ error: 'Erreur interne' });
    console.error(err);

    next();
};
