import { startStandaloneServer } from '@apollo/server/standalone';
import server from './server/index.js';
import { appConfig } from './config.js';

startStandaloneServer(server, {
    listen: { port: appConfig.port },
});

console.log(`🚀 Pomme Server ready at port ${appConfig.port}`);
