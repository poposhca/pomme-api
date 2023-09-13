import { v4 as uuidv4 } from 'uuid';
import { quizDB } from '../infraestructure/redis/index.js';
import { QuizInfo } from "../models/QuizInfo.js";

const resolvers = {
    Mutation: {
        createQuiz: async (_, { name, quiz }) => {
            const id = uuidv4();
            const newQuizInfo : QuizInfo = ({
                id,
                name: name as string,
                image: '',
                createdAt: new Date(),
                updatedAt: new Date(),
                availableDate: new Date(),
                notesDocumentId: '',
            });
            await quizDB.setQuizInfo(newQuizInfo);
            await quizDB.setQuiz(id, quiz);
            return newQuizInfo;
        },
    },
    Query: {
        userQuizList: async (_, { ownerId }) => {
            const result = await quizDB.getOwnerQuizList(ownerId);
            return result;
        },
        //TODO: Add query to get all quizzes info
        quizInfo: async (_, { id }) => {
            const quiz = await quizDB.getQuizInfo(id);
            console.log('result');
            console.log(quiz.name);
            return quiz;
        }
    },
};

export default resolvers;
