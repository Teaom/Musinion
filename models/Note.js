const { Model, DataTypes } = require('sequelize')
const sequelize = require('../config/connection')

class Note extends Model {}

Note.init(
    {
        id: {
            type: DataTypes.INTEGER,
            allowNull: false,
            primaryKey: true,
            autoIncrement: true,
        },
        contents: {
            type: DataTypes.TEXT,
            allowNull: false
        },
        date_created: {
            type: DataTypes.DATEONLY,
            allowNull: false, 
            defaultValue: DataTypes.NOW
        },
        review_id: {
            type: DataTypes.INTEGER,
            references: {
                model: 'review', 
                key: 'id'
            }
        },
        user_id: {
            type: DataTypes.INTEGER,
            references: {
                model: 'user',
                key: 'id'
            }
        }
    },
    {
        sequelize,
        timestamps: true,
        freezeTableName: true,
        modelName: 'note'
    }
)

module.exports = Note