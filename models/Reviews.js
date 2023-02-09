const {Model, DataTypes } = require('sequelize');

const sequelize = require('../config/connection.js');

class Review extends Model { }

Review.init(
    {
        id: {
            type: DataTypes.INTEGER,
            allowNull: false,
            primaryKey: true,
            autoIncrement: true,
          },
          movie_id: {
            type: DataTypes.STRING,
            allowNull: false,
          },
        rating: {
          type: DataTypes.STRING,
          allowNull: false,
        },
        comments: {
            type: DataTypes.STRING,
            allowNull: false,
          },
        },
        {
          sequelize,
          timestamps: false,
          freezeTableName: true,
          underscored: true,
          modelName: 'review',
        }

);

module.exports = Review;