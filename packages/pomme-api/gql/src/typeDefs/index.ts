const typeDefs = `#graphql
    type QuizInfo {
        id: String!
        name: String!
    }
    
    type Query {
        quizInfo: QuizInfo!
    }
`;

export default typeDefs;
