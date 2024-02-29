import { createClient } from 'redis';
import IQuizDB from '../IQuizDB.js';
import { Quiz } from "../../models/Quiz.js";
import { QuizInfo } from "../../models/QuizInfo.js";

const QuizDB = ({ url }: { url: string }) : IQuizDB => {
    const client = createClient({ url });
    client.on('connect', () => console.log('Redis Client Connected'))
        .on('ready', () => console.log('Redis Client Ready'))
        .on('error', err => console.log(`Redis Client Error ${err}`))
        .on('reconnecting', () => console.log('Redis Client Reconnecting'))
        .connect();

    const withClientValidation = (fn: Function) => {
        return async (...args: any[]) => {
            if (!client.isReady) {
                throw new Error('Redis client is not connected');
            }
            return fn(...args);
        };
    };

    return ({
        setQuizInfo: withClientValidation(async (quiz: QuizInfo) => {
            await client.set(`quizInfo:${quiz.id}`, JSON.stringify(quiz));
        }),
        setQuiz: withClientValidation( async (id: string, quiz: any) => {
            await client.set(`quiz:${id}`, JSON.stringify(quiz));
        }),
        getQuizList: withClientValidation(async () => {
            try {
                const result = await client.keys('quizInfo:*');
                return result;
            } catch (error) {
                console.log(error.message);
                throw new Error(`REDIS ERROR ${error.message}`);
            }
        }),
        getQuizInfo: withClientValidation(async (id: string) => {
            try {
                const result = await client.get(id);
                return JSON.parse(result);
            } catch (error) {
                console.log(error.message);
                throw new Error(`REDIS ERROR ${error.message}`);
            }
        }),
        getQuiz: withClientValidation(async (id: string) => {
            try {
                const result = await client.get(`quiz:${id}`);
                return JSON.parse(result);
            } catch (error) {
                console.log(error.message);
                throw new Error(`REDIS ERROR ${error.message}`);
            }
        }),
        getOwnerQuizList: withClientValidation(async (ownerId: string) => {
            const quizInfoIds = await client.keys(`quizInfo:*`);
            const result: QuizInfo[] = [];
            for (const id of quizInfoIds) {
                const quizInfoResult = await client.get(id);
                const quizInfo: QuizInfo = JSON.parse(quizInfoResult);
                result.push(quizInfo);
            }
            console.log(result);
            return result;
        }),
    });
}

export default QuizDB;
