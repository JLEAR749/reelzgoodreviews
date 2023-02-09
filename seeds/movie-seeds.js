const { Movie } = require('../models');

const movieData = [
  {
    title: '',
    rated: '',
    made: '',
    length: '',
    genre: '',
    description: '',
    director: '',
  },
  {
    title: '',
    rated: '',
    made: '',
    length: '',
    genre: '',
    description: '',
    director: '',
  },
  {
    title: '',
    rated: '',
    made: '',
    length: '',
    genre: '',
    description: '',
    director: '',
  },
  {
    title: '',
    rated: '',
    made: '',
    length: '',
    genre: '',
    description: '',
    director: '',
  },
];

const seedMovies = () => Movie.bulkCreate(movieData);

module.exports = seedMovies;
