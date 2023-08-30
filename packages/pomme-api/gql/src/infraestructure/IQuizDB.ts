import { QuizInfo } from '../models/QuizInfo.js';
import { Quiz } from '../models/Quiz.js';

interface IQuizDB {
    getQuizList(): Promise<string[]>;
    getQuizInfo(id: string): Promise<QuizInfo>;
    getQuiz(id: string): Promise<Quiz>;
    createQuiz(quiz: QuizInfo): Promise<QuizInfo>;
    getOwnerQuizList(ownerId: string): Promise<string[]>;
}

export default IQuizDB;
