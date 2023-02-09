const { Review } = require('../models');

const reviewData = [
  {
    movie_id: '1',
    rating: '5',
    comment: 'I loved this movie - highly recommend',
  },
  {
    movie_id: '2',
    rating: '4',
    comment: 'Too much violence but overall a good movie',
  },
  {
    movie_id: '3',
    rating: '5',
    comment: 'Do not go another day without seeing this',
  },
  {
    movie_id: '4',
    rating: '2',
    comment: 'Glad I saw it but would not recommend',
  },
];

const seedReviews = () => Review.bulkCreate(reviewData);

module.exports = seedReviews;