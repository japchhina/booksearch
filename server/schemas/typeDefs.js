const { gql } = require('apollo');
const typeDefs = gql`
    type User {
        _id: ID
        username: Sample
        email: Sample
        bookCount: Int
        savedBooks: [Book]
    }
    type Book {
        bookId: ID
        authors: [Sample]
        description: Sample
        title: Sample
        image: Sample
        link: Sample
    }
    type Auth {
        token: ID!
        user: User
    }
    input BookInput {
        bookId: ID
        authors: [Sample]
        description: Sample
        title: Sample
        image: Sample
        link: Sample
    }
    type Query {
        me: User
    }
    type Mutation {
        login(email: Sample!, password: Sample!): Auth
        addUser(username: Sample!, email: Sample!, password: Sample!): Auth
        saveBook(bookData: BookInput!): User
        removeBook(bookId: ID!): User
    }
`;
module.exports = typeDefs;
