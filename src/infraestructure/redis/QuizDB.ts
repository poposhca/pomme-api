import IQuizDB from '../IQuizDB.js';
import { Quiz } from "../../models/Quiz.js";
import { QuizInfo } from "../../models/QuizInfo.js";

const QuizDB = ({ client }) : IQuizDB => ({
    setQuizInfo: async (quiz: QuizInfo)=> {
        await client.set(`quizInfo:${quiz.id}`, JSON.stringify(quiz));
    },
    setQuiz: async (id: string, quiz: Quiz)=> {
        await client.set(`quiz:${id}`, JSON.stringify(quiz));
    },
    getQuizList: async () => {
        return Promise.resolve([]);
    },
    getQuizInfo: async (id : string) => {
        const result = await client.get(`quizInfo:${id}`);
        return JSON.parse(result);
    },
    getQuiz: async (id: string) => {
        return Promise.resolve({} as Quiz);
    },
    getOwnerQuizList: async (ownerId: string)=> {
        const quizInfoIds = await client.keys(`quizInfo:*`);
        const result: QuizInfo[] = [];
        for(const id of quizInfoIds) {
            const quizInfoResult = await client.get(id);
            const quizInfo: QuizInfo = JSON.parse(quizInfoResult);
            result.push(quizInfo);
        }
        console.log(result);
        return result;
    },
});

export default QuizDB;