import { createClient } from 'redis';
import QuizDB from './QuizDB.js';
import { redisConfig } from '../../config.js';

const { user, password, host, port } = redisConfig;

const redisClient = createClient({
    url: `redis://${user}:${password}@${host}:${port}`,
});

redisClient.on('error', err => console.log('Redis Client Error', err));

await redisClient.connect();


export const quizDB = QuizDB({ client: redisClient });
