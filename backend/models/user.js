const mongoose = require('mongoose');

const uniqueValidator = require('mongoose-unique-validator');

//Schema DB utilisateur
const userSchema = mongoose.Schema({
    email: { type: String, required: true, unique: true },
    password: { type: String, required: true },
});

// Unicité et signalement d'erreurs
userSchema.plugin(uniqueValidator);

module.exports = mongoose.model('User', userSchema);