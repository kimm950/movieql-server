import { people } from './database'

const resolvers = {
  Query: {
    people: () => people
  }
};

export default resolvers;