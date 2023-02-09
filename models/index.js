// import models
const Movie = require('./Movie');
const Review = require('./Reviews');
const User = require('./User');
//const  = require('./');


/*
// Products belongsTo Category
Product.belongsTo(Category, {
 foreignKey: 'category_id',
});


// Categories have many Products
Category.hasMany(Product, {
  foreignKey: 'category_id',
  onDelete: 'CASCADE',
});

// Products belongToMany Tags (through ProductTag)
Product.belongsToMany(Tag, {
  through: {
    model: ProductTag,
    unique: false, 
  },
  as: "tag_products",
});


// Tags belongToMany Products (through ProductTag)
Tag.belongsToMany(Product, {
  through: {
    model: ProductTag,
    unique: false,
  },
  as: "product_tags",
});

*/

module.exports = {
  Movie, 
  Review, 
  User,
};
