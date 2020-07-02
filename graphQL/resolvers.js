const kimm = {
  name: "Kimm",
  age: 24,
  gender: "Male",
}

const resolvers = {
  Query: {
    person: () => kimm
  }
};

export default resolvers;