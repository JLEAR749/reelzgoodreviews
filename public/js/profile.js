const { Model, DataTypes } = require("sequelize");
const sequelize = require("../config/connection");

class Profile extends Model { }

Profile.init(
    {
        id: {
            type: DataTypes,
            allowNull: false,
            primaryKey: true,
            autoIncrement: true,
        },
        name: {
            type: DataTypes.STRING,
            allowNull: false
        
        },
        person: {
            firstname: 'Kelsey',
            lastname: 'Taylor',
        },
        email: {
            type: DataTypes.STRING,
            allowNull: false,
            unique: true,
            validate: {
                isEmail: true
        },
        birthday: {
            type: DataTypes, INTERGERS,
            allowNull: false,
            unique: true
        },
        
    },    
        sequelize,
        timestamps: false,
        freezeTableName: true,
        underscored: true,
        modelName: "profile",
    }
);

module.exports = profile;