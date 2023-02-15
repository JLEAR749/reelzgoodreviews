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
      title: {
        type: DataTypes.STRING,
        allowNull: false,
        validate: {
          len: [1]
        },
      },
    
      content: {
        type: DataTypes.STRING,
        allowNull: false,
        validate: {
            len: [1]
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
