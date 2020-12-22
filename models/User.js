const { Model, DataTypes } = require('sequelize');
const sequelize = require('../config/connection');

// create our User model
class User extends Model {}

// define table columns and configuration
User.init(
    {
        id: {
            type: DataTypes.INTEGER,
            allowNull: false,
            primaryKey: true,
            autoIncrement: true
        },
        username: {
            type: DataTypes.STRING,
            allowNull: false
        },
        email: {
            type: DataTypes.STRING,
            allowNull: false,
            unique: true,
            validate: {
                isEmail: true
            }
        },
        password: {
            type: DataTypes.STRING,
            allowNull: false,
            validate: {
                len: [4] // means password must be at least 4 characters long
            }
        }
    },
    {
        sequelize,
        timestamps: false, // don't automatically create timestamp fields
        freezeTableName: true, // don't pluralize name of db table
        underscored: true, // use underscores instead of camel-casing
        modelName: 'user' // model name stays lowercase in the database
    }
);

module.exports = User;