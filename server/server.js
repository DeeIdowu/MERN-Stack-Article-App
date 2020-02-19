const express = require("express");
const bodyParser = require("body-parser");
const { ApolloServer, gql } = require("apollo-server-express");

const app = express();

const typeDefs = gql`
  type Query {
    hello: string
  }
`;

const resolvers = {
  Query: {
    hello: () => "Hello World"
  }
};

const server = new ApolloServer({ typeDefs, resolvers });
server.applyMiddleware({ app });

const PORT = process.env.PORT || 5000;

app.listen(PORT, () => console.log(`Server is running on ${PORT}`));
