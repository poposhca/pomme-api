import { startStandaloneServer } from '@apollo/server/standalone';
import server from './server/index.js';

startStandaloneServer(server, {
    listen: { port: 4000 },
});

console.log(`🚀 Server ready at port 4000`);
