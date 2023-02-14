const Review = require('./Review');
const User = require('./User');
const Post = require('./Post');
const Movie = require('./Movie');

User.hasMany(Post, {
    foreignKey: 'user_id'
  });

  Post.belongsTo(User, {
    foreignKey: 'user_id'
  });

  User.hasMany(Review, {
    foreignKey: 'user_id'
});

Review.belongsTo(User, {
    foreignKey: 'user_id'
});

Post.hasMany(Review, {
    foreignKey: 'post_id'
});

Review.belongsTo(Post, {
    foreignKey: 'post_id'
})


//------------------------UPDATED MOVIE CODE
User.hasMany(Movie, {
  foreignKey: 'user_id'
});

Movie.belongsTo(User, {
  foreignKey: 'user_id'
});

Movie.hasMany(Review, {
  foreignKey: 'post_id'
});

Review.belongsTo(Movie, {
  foreignKey: 'post_id'
})


  module.exports = { Review, User, Post, Movie};