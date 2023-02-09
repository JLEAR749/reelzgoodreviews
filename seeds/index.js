const seedMovies = require('./movie-seeds');
const seedReviews = require('./review-seeds');
//const seed______ = require('./_____-seeds');
//const seed______ = require('./______-seeds');

const sequelize = require('../config/connection');

const seedAll = async () => {
  await sequelize.sync({ force: true });
  console.log('\n----- DATABASE SYNCED -----\n');
  await seedMovies();
  console.log('\n----- MOVIES SEEDED -----\n');

  await seedReviews();
  console.log('\n----- REVIEWS SEEDED -----\n');

  /*
  await seed______();
  console.log('\n----- ______ SEEDED -----\n');

  await seed______();
  console.log('\n----- ________ SEEDED -----\n');
*/
  process.exit(0);
};

seedAll();
