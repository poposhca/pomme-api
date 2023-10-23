const typeDefs = `#graphql
    type QuizInfo {
        id: String!
        name: String!
        image: String
        createdAt: String
        updatedAt: String
        availableDate: String
        notesDocumentId: String
    }
    
    type Quiz {
        id: String!
        adminId: String!
        quizItems: String!
    }
    
    type Mutation {
        createQuiz(name: String!, quiz: String!, userId: string!): QuizInfo!
    }
    
    type Query {
        userQuizList(ownerId: String!): [QuizInfo!]!
        getAllQuizesInfo(count: Int, offset: Int): [QuizInfo!]!
        quizInfo(id: String!): QuizInfo!
        quiz(id: String!): Quiz!
    }
`;

export default typeDefs;
