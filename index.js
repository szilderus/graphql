const { ApolloServer, gql} = require('apollo-server');

const PORT = process.env.port || 4000
const typeDefs = gql`
    type Query {
        greeting: String
        interestingUrls: [String]

    }
s`;


const data ={
    greeting : "hello world",
    interestingUrls : ["http://google.com", "http://onet.pl"]

}

const server = new ApolloServer({ typeDefs, playground: true, introspection: true, rootValue: data});

server.listen({port : PORT}).then( (result) => { console.log(result.url) } );