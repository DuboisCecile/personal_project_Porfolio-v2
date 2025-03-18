/* eslint-disable no-console */
import fs from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';

// Vérifier le type de module
// const isESM = typeof import.meta !== 'undefined';
// console.log(process.cwd());
// let logFilePath;
// if (isESM) {
// const currentFilePath = fileURLToPath(import.meta.url);
// const currentDir = path.dirname(currentFilePath);
//     logFilePath = path.join(currentDir, '../logs.log');
// } else {
//     const currentFilePath = __filename;
//     const currentDir = path.dirname(currentFilePath);
//     logFilePath = path.join(currentDir, '../logs.log');
// }

// console.log('logFilePath:', logFilePath);
// const logStream = fs.createWriteStream(logFilePath, { flags: 'a' });
// console.log('logStream:', logStream.path);

// Créer une fonction pour obtenir le dirname compatible avec ESM et CommonJS
const getDirname = (): string => {
    if (typeof __dirname !== 'undefined') {
        const currentFilePath = __filename; // CommonJS
        return fileURLToPath(currentFilePath);
        // return path.dirname(currentFilePath);
        // return __dirname; // CommonJS
    } else {
        // ESM
        const currentFilePath = path.dirname(fileURLToPath(import.meta.url));
        const logDir = path.join(currentFilePath, '../', 'logs');
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
