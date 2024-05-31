import express from 'express';
import http, { METHODS } from 'http';
import cors from 'cors';
import server from './server/index.js';
import { appConfig } from './config.js';
import { expressMiddleware } from '@apollo/server/express4';

const app = express();
const httpServer = http.createServer(app);
const apolloServer = server({ httpServer });
await apolloServer.start();

const corsOptions = {
    origin: [appConfig.cors.origin],
    methods: appConfig.cors.methods,
}

app.use(
    '/',
    express.json(),
    cors<cors.CorsRequest>(corsOptions),
    expressMiddleware(apolloServer),
);

await new Promise<void>((resolve) => httpServer.listen({ port: appConfig.port }, resolve));
console.log(`🚀 Pomme Server ready at port ${appConfig.port}`);
