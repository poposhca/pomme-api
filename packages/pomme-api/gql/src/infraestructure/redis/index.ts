import { createClient } from 'redis';
import QuizDB from './QuizDB.js';

const redisClient = createClient({});
await redisClient.connect();


export const quizDB = QuizDB({ client: redisClient });
