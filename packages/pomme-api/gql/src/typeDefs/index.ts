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
        createQuiz(name: String!): QuizInfo!
    }
    
    type Query {
        quizInfo(id: String!): QuizInfo!
    }
`;

export default typeDefs;
