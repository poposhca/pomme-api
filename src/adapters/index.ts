import QuizDB from './redis/index.js';
import { redisConfig } from '../config.js';
const { user, password, host, port } = redisConfig;

export const quizDB = QuizDB({ url: `redis://${user}:${password}@${host}:${port}` });
