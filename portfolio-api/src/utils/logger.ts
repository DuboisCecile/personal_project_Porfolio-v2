/* eslint-disable no-console */
import fs from 'fs';
import path from 'path';

const dirname = process.cwd();
const logFilePath = path.join(dirname, 'logs', 'logs.log');

const logStream = fs.createWriteStream(logFilePath, { flags: 'a' });
console.log('logStream:', logStream.path);

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
