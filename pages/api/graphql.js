/* eslint-disable consistent-return */
import { ApolloServer } from 'apollo-server-micro';
import Cors from 'micro-cors';
import typeDefs from '../../graphql/schema';
import resolvers from '../../graphql/resolvers';
import dbConnect from '../../lib/dbConnect';
import Album from '../../models/album';

const cors = Cors();

const apolloServer = new ApolloServer({ typeDefs, resolvers, context: () => ({ Album }) });

const startServer = apolloServer.start();

export default cors(async (req, res) => {
  if (req.method === 'OPTIONS') {
    res.end();
    return false;
  }

  await startServer;
  await dbConnect();
  console.log('connected to mongoDb');
  await apolloServer.createHandler({
    path: '/api/graphql',
  })(req, res);
});

export const config = {
  api: {
    bodyParser: false,
  },
};
