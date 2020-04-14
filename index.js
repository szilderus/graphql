const { ApolloServer, gql} = require('apollo-server');

const typeDefs = gql`
    type Query {
        Greeting: String
        interestingUrls: [String]

    }
`;


const data ={
    greeting : "hello world",
    interestingUrls : ["http://google.com", "http://onet.pl"]

}

const server = new ApolloServer({ typeDefs, rootValue: data});

server.listen({port : 4000}).then( (result) => { console.log(result.url) } );