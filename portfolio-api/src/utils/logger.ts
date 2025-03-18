/* eslint-disable no-console */
import fs from 'fs';
import path from 'path';

const getDirname = (): string => {
    const logDir = path.join(process.cwd(), 'logs');
    if (!fs.existsSync(logDir)) {
        fs.mkdirSync(logDir, { recursive: true });
    }

    return logDir;
};

const dirname = getDirname();
const logFilePath = path.join(dirname, 'logs.log');
const logStream = fs.createWriteStream(logFilePath, { flags: 'a' });

// Sauvegarde des méthodes console originales
const originalLog = console.log;
const originalError = console.error;

// Redéfinir console.log pour écrire dans logs.log
console.log = (...args): void => {
    const message = `[LOG ${new Date().toISOString()}] ${args.join(' ')}\n`;
    logStream.write(message);
    originalLog(message.trim()); // Affiche aussi dans la console
};

// Redéfinir console.error pour écrire dans logs.log
console.error = (...args): void => {
    const message = `[ERROR ${new Date().toISOString()}] ${args.join(' ')}\n`;
    logStream.write(message);
    originalError(message.trim());
};
