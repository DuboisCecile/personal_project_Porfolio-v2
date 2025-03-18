/* eslint-disable no-console */
import fs from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';

const getDirname = (): string => {
    if (typeof __dirname !== 'undefined') {
        // CommonJS
        // const currentFilePath = __dirname;
        // const currentFilePath = fileURLToPath(path.join('/home/ygyjapvz/API'));
        const currentFilePath = fileURLToPath(path.join(process.cwd()));
        const logDir = path.join(currentFilePath, 'logs');
        if (!fs.existsSync(logDir)) {
            fs.mkdirSync(logDir, { recursive: true });
        }
        return logDir;
    } else {
        // ESM
        const currentFilePath = path.join(process.cwd(), 'dist', 'dev');
        const logDir = path.join(currentFilePath, 'logs');
        if (!fs.existsSync(logDir)) {
            fs.mkdirSync(logDir, { recursive: true });
        }

        return logDir;
    }
};

const dirname2 = getDirname();
console.log('dirname:', dirname2);
const logFilePath = path.join(dirname2, 'logs.log');
console.log('logFilePath:', logFilePath);
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
