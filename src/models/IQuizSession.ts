interface IQuizSession {
    setQuizSessionPosition(quizId: string, adminId: string, sessionId: string): Promise<void>;
    setQuizSessionAnswers(quizId: string, adminId: string, sessionId: string): Promise<void>;
    pushQuizSessionAnswer(quizId: string, adminId: string, sessionId: string, answer: number): Promise<void>;
    getQuizSessionPosition(quizId: string, adminId: string, sessionId: string): Promise<number>;
    getQuizSessionAnswers(quizId: string, adminId: string, sessionId: string): Promise<number[]>;
    terminateQuizSession(quizId: string, adminId: string, sessionId: string): Promise<void>;
}
