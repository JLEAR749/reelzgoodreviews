// JavaScript source code
const {Model, DataTypes } = require('sequelize');

const sequelize = require('../config/connection.js');

class Movie extends Model { }

Movie.init(
  {
      id: {
          type: DataTypes.INTEGER,
          allowNull: false,
          primaryKey: true,
          autoIncrement: true,
      },
      title: {
          type: DataTypes.STRING,
          allowNull: false,
      },
      rated: {
          type: DataTypes.STRING,
          allowNull: false,
      },
      length: {
          type: DataTypes.STRING,
          allowNull: false,
      },
      genre: {
          type: DataTypes.STRING,
          allowNull: false,
      },
      description: {
          type: DataTypes.STRING,
          allowNull: false,
      },
      imdb_rating: {
          type: DataTypes.STRING,
          allowNull: false,
      },
  },
    {
        sequelize,
        timestamps: false,
        freezeTableName: true,
        underscored: true,
        modelName: 'movie',
    }
    
    );

module.exports = Movie;