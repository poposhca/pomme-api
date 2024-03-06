import { QuizInfo } from './QuizInfo.js';
import { Quiz } from './Quiz.js';

interface IQuizDB {
    setQuizInfo(quiz: QuizInfo): Promise<void>;
    setQuiz(id: string, quiz: any): Promise<void>;
    getQuizList(): Promise<string[]>;
    getQuizInfo(id: string): Promise<QuizInfo>;
    getQuiz(id: string): Promise<Quiz>;
    getOwnerQuizList(ownerId: string): Promise<QuizInfo[]>;
}

export default IQuizDB;
