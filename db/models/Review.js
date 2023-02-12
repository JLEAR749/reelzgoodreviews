const { Model, DataTypes } = require('sequelize');
const sequelize = require('../config/connection');

class Review extends Model {}

Review.init(
    {
      id: {
        type: DataTypes.INTEGER,
        allowNull: false,
        primaryKey: true,
        autoIncrement: true,
      },
    // 28-Stu_Mini-Project where I found "len"
      review_text: {
        type: DataTypes.STRING,
        allowNull: false,
        validate: {
          len: [1]
        },
      },
    
      user_id: {
        type: DataTypes.INTEGER,
        references: {
            model: 'user',
            key: 'id'
        }
    },

      post_id: {
        type: DataTypes.INTEGER,
        references: {
            model: 'post',
            key: 'id'
        }
    },
    
}, 

{
    sequelize,
    freezeTableName: true,
    underscored: true,
    modelName: 'review',
  });

  module.exports = Review;
