const { Model, DataTypes } = require('sequelize')
const sequelize = require('../config/connection')
const bcrypt = require('bcrypt')

// Class extension that checks login password against db hashed password
class User extends Model {
    checkPassword(loginPw) {
        return bcrypt.compareSync(loginPw, this.password)
    }
}

// User model/table data
User.init(
    {
        id: {
            type: DataTypes.INTEGER,
            allowNull: false,
            primaryKey: true,
            autoIncrement: true,
        },
        username: {
            type: DataTypes.STRING,
            allowNull: false,
            unique: true,
        },
        password: {
            type: DataTypes.STRING,
            allowNull: false,
            validate: {
                len: [8] // Ensures password is at least 8 chars
            }
        }
    },
    {
        // hashes passwords on create/update for ten rounds
        hooks: {
            beforeCreate: async (newUserData) => {
                newUserData.password = await bcrypt.hash(newUserData.password, 10)
                return newUserData
            },
            beforeUpdate: async (updatedUserData) => {
                updatedUserData.password = await bcrypt.hash(updatedUserData.password, 10)
                return updatedUserData
            },
        },
        sequelize,
        timestamps: false,
        freezeTableName: true,
        modelName: 'user'
    }
)

module.exports = User