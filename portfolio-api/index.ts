import cors from 'cors';
import express from 'express';

import Mailjet from 'node-mailjet';
import env from './src/env.js';
import { ExceptionsHandler } from './src/middlewares/exceptions.handler.js';
import { UnknownRoutesHandler } from './src/middlewares/unknownRoutes.handler.js';

const {
    PORT,
    CORS_ALLOWED_ORIGINS,
    API_KEY,
    SECRET_KEY,
    SENDER_EMAIL,
    RECEIVER_EMAIL,
} = env;

/**
 * On créé une nouvelle "application" express
 */
const app = express();

/**
 * On dit à Express que l'on souhaite parser le body des requêtes en JSON
 *
 * @example app.post('/', (req) => req.body.prop)
 */
app.use(express.json());

// /* ********************** app settings ********************** */
app.set('x-powered-by', false); // for security

const allowedOrigins = CORS_ALLOWED_ORIGINS.split(',');

const corsOptions: cors.CorsOptions = {
    origin: (origin, callback) => {
        if (origin === undefined || allowedOrigins.indexOf(origin) !== -1) {
            callback(null, true);
        } else {
            callback(new Error('Not allowed by CORS'));
        }
    },
    credentials: true,
    methods: ['GET', 'POST', 'PATCH', 'DELETE'],
    allowedHeaders: ['Content-Type'],
};

/**
 * On dit à Express que l'on souhaite autoriser tous les noms de domaines
 * à faire des requêtes sur notre API.
 */
app.use(cors(corsOptions));

app.get('/test', (_req, res) => {
    res.writeHead(200, { 'Content-Type': 'text/plain' });
    const message = 'It woooooorks!\n';
    const version = `NodeJS ${process.versions.node}\n`;
    const response = [message, version].join('\n');
    res.end(response);
});

/* ********************** mail sending ********************** */
app.post('/contactMail', (req, res) => {
    const { email, message, userName } = req.body;
    // const mailjet = Mailjet.apiConnect(API_KEY, SECRET_KEY);
    const mailjet = new Mailjet({
        apiKey: API_KEY || 'your-api-key',
        apiSecret: SECRET_KEY || 'your-api-secret',
    });

    const request = mailjet.post('send', { version: 'v3.1' }).request({
        Messages: [
            {
                From: {
                    Email: SENDER_EMAIL,
                    Name: userName,
                },
                To: [
                    {
                        Email: RECEIVER_EMAIL,
                        Name: 'Cécile Dubois',
                    },
                ],
                Subject: 'Demande de contact',
                TextPart: 'Demande de contact',
                HTMLPart: `<h3>Nouveau message de la part de ${userName}</h3>
                   <p>Adresse email : ${email}</p>
                   <h4>Message : ${message}</h4>`,
                CustomID: 'AppGettingStartedTest',
            },
        ],
    });

    request
        .then((result) => {
            console.log(result);
            res.sendStatus(200);
        })
        .catch((err) => {
            console.log(err);
            res.sendStatus(500);
        });
});

/**
 * Homepage (uniquement necessaire pour cette demo)
 */
app.get('/', (req, res) => {
    res.send('🏠');
});

/**
 * Pour toutes les autres routes non définies, on retourne une erreur
 */
app.all('*', UnknownRoutesHandler);

/**
 * Gestion des erreurs
 * /!\ Cela doit être le dernier `app.use`
 */
app.use(
    (
        err: Error,
        req: express.Request,
        res: express.Response,
        next: express.NextFunction
    ) => {
        ExceptionsHandler(err, req, res, next);
    }
);

/* ********************** server setup ********************** */
app.listen(PORT, () => {
    console.log(`Server running on port ${PORT}`);
});
