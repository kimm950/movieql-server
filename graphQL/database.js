export const movies = [
  {
    id: 0,
    name: "Black Panther",
    score: 97,
  },
  {
    id: 1,
    name: "Parasite",
    score: 85,
  },
  {
    id: 2,
    name: "Blade Runner",
    score: 100,
  },
  {
    id: 3,
    name: "Kill Bill",
    score: 99,
  },
  {
    id: 4,
    name: "Star Wars",
    score: 99.6,
  },
];

export const getMovies = () => movies;

export const getById = id => {
  const filteredPeople = people.filter(person => person.id === String(id));
  return filteredPeople[0];
}

export const deleteMovie = (id) => {
  const removeMovies = movies.filter(movie => movie.id !== String(id))
  if (movies.length > removeMovies.length) {
    movie = removedMovies;
    return true;
  } else {
    return false;
  }
}
