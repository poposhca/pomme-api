import { quizDB } from '../infraestructure/redis/index.js';
import { QuizInfo } from "../models/QuizInfo.js";

const resolvers = {
    Mutation: {
        createQuiz: async (_, { name }) => {
            const newQuizInfo : QuizInfo = ({
                // TODO: generate id
                id: '1',
                name: name as string,
                image: '',
                createdAt: new Date(),
                updatedAt: new Date(),
                availableDate: new Date(),
                notesDocumentId: '',
            });
            await quizDB.createQuiz(newQuizInfo);
            return newQuizInfo;
        },
    },
    Query: {
        quizInfo: async (_, { id }) => {
            const quiz = await quizDB.getQuizInfo(id);
            console.log('result');
            console.log(quiz.name);
            return quiz;
        }
    },
};

export default resolvers;
