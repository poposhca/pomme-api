import 'dotenv/config';
import { ApolloServer } from '@apollo/server';
import { ApolloServerPluginDrainHttpServer } from '@apollo/server/plugin/drainHttpServer';
import typeDefs from '../typeDefs/index.js';
import resolvers from '../resolvers/index.js';

const server = ({ httpServer }) => {
    return new ApolloServer({
        typeDefs,
        resolvers,
        plugins: [ApolloServerPluginDrainHttpServer({ httpServer })],
    })
};

export default server;
