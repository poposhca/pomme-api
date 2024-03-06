import { v4 as uuidv4 } from 'uuid';
import { GraphQLError } from 'graphql';
import { quizDB } from '../adapters/index.js';
import { QuizInfo } from "../models/QuizInfo.js";

const resolvers = {
    Mutation: {
        createQuiz: async (_, { name, quiz, userId }) => {
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
            const newQuiz = {
                id,
                adminId: userId,
                quizItems: quiz,
            };
            await quizDB.setQuizInfo(newQuizInfo);
            await quizDB.setQuiz(id, newQuiz);
            return newQuizInfo;
        },
    },
    Query: {
        userQuizList: async (_, { ownerId }) => {
            const result = await quizDB.getOwnerQuizList(ownerId);
            return result;
        },
        getAllQuizesInfo: async (_, { count = 8, offset = 0 }) => {
            console.log('GETTING QUIZES INFO LIST');
            try {
                const quizesInfoArrays = await quizDB.getQuizList();
                let quizesInfo: QuizInfo[] = [];
                for (const id of quizesInfoArrays) {
                    try {
                        const quizInfo = await quizDB.getQuizInfo(id);
                        quizesInfo.push(quizInfo);
                    } catch (error) {
                        console.log(`Error getting quiz info ${id}`);
                    }
                }
                return quizesInfo;
            } catch (error) {
                throw new GraphQLError('Error getting quiz list', {
                    extensions: {
                        code: 'SOMETHING_BAD_HAPPENED',
                        http: {
                            status: 500,
                        },
                    }
                });
            }
        },
        quizInfo: async (_, { id }) => {
            const quiz = await quizDB.getQuizInfo(`quizInfo:${id}`);
            console.log('result');
            console.log(quiz.name);
            return quiz;
        },
        quiz: async (_, { id }) => await quizDB.getQuiz(id),
    },
};

export default resolvers;
