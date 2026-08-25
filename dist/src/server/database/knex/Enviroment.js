"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.production = exports.test = exports.development = void 0;
const path_1 = __importDefault(require("path"));
exports.development = {
    client: 'mysql2',
    migrations: {
        directory: path_1.default.resolve(__dirname, '..', 'migrations')
    },
    seeds: {
        directory: path_1.default.resolve(__dirname, '..', 'seeds')
    },
    connection: {
        host: process.env.BD_HOST,
        user: process.env.BD_USER,
        password: process.env.BD_PASSWORD,
        database: process.env.BD_NAME,
        ssl: { rejectUnauthorized: false }
    },
};
exports.test = {
    ...exports.development,
    connection: ':memory:',
};
exports.production = {
    ...exports.development,
    connection: {
        host: process.env.BD_HOST,
        user: process.env.BD_USER,
        password: process.env.BD_PASSWORD,
        database: process.env.BD_NAME,
        port: Number(process.env.BD_PORT ?? 3306),
        ssl: { rejectUnauthorized: false }
    }
};
//# sourceMappingURL=Enviroment.js.map