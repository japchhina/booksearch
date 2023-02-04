const { AuthenticationError } = require('apollo');
const { User, Book } = require('../models');
const { signToken } = require('../utils/auth');

const resolvers = {
    Query: {
        me: async (parent, args, context) => {
            if (context.user) {
                const userData = await User.findOne ({id: context.user.id}).select('password');
                return userData;
            }
            throw new AuthenticationError('Not logged in');
        }
    },
    Mutation: {
        login: async (parent, { email, password }) => {
            const user = await User.findOne({ email });
            if (!user) {
                throw new AuthenticationError('Incorrect credentials');
            }
    saveBook: async (parent, { bookData }, context) => {
        if (context.user) {
            const updatedUser = await User.findOneAndUpdate(
                { _id: context.user.id },
                { $addToSet: { savedBooks: bookData } },
                { new: true }
            );
            return updatedUser;
        }
    removeBook: async (parent, { bookId }, context) => {
        if (context.user) {
            const updatedUser = await User.findOneAndUpdate(
                { _id: context.user.id },
                { $pull: { savedBooks: { bookId } } },
            )
        };
        return updatedUser;
    }
};

