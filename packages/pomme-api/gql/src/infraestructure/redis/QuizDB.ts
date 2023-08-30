import IQuizDB from '../IQuizDB.js';
import { Quiz } from "../../models/Quiz.js";
import { QuizInfo } from "../../models/QuizInfo.js";

const QuizDB = ({ client }) : IQuizDB => ({
    getQuizList: async () => {
        return Promise.resolve([]);
    },
    getQuizInfo: async (id : string) => {
        const result = await client.get(id);
        return JSON.parse(result);
    },
    getQuiz: async (id: string) => {
        return Promise.resolve({} as Quiz);
    },
    createQuiz: async (quiz: QuizInfo)=> {
        await client.set(quiz.id, JSON.stringify(quiz));
        return Promise.resolve({} as QuizInfo);
    },
    getOwnerQuizList: async (ownerId: string)=> {
        return Promise.resolve([]);
    },
});

export default QuizDB;
