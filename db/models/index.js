const Review = require('./Review');
const User = require('./User');
const Post = require('./Post');

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

  module.exports = { Review, User, Post};