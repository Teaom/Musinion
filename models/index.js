const Review = require('./Review');
const User = require('./User');
const Note = require('./Note')

User.hasMany(Review, {
    foreignKey: 'user_id',
    onDelete: 'CASCADE'
})

Review.belongsTo(User, {
    foreignKey: 'user_id',
    onDelete: 'CASCADE'
})

User.hasMany(Note, {
    foreignKey: 'user_id',
    onDelete: 'CASCADE'
})

Note.belongsTo(User, {
    foreignKey: 'user_id',
})

Review.hasMany(Note, {
    foreignKey: 'review_id',
    onDelete: 'CASCADE'
})

Note.belongsTo(Review, {
    foreignKey: 'review_id'
})

module.exports = { Review, User, Note};