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
    
    type Mutation {
        createQuiz(name: String!, quiz: String!): QuizInfo!
    }
    
    type Query {
        userQuizList(ownerId: String!): [QuizInfo!]!
        getAllQuizesInfo(count: Int, offset: Int): [QuizInfo!]!
        quizInfo(id: String!): QuizInfo!
    }
`;

export default typeDefs;
