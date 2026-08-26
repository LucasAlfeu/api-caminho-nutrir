import express from 'express';
import cors from 'cors';
import 'dotenv/config'

import './shared/service/TraducoesYup'
import { router } from './routes/index';

const server = express();

server.use(cors({
  origin: process.env.URL_API
}))
server.use(express.json())
server.use(router)

// export { server };

export default server;