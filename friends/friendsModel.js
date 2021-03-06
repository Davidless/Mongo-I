const mongoose = require('mongoose');

const definition = {
    firstName: {
        type: String,
        required: true,
    },
    lastName: {
        type: String,
        required: true,
    },
    age: {
        type: Number,
        required: true,
        min: 1,
        max: 120,
    }, 
    createdOn: {
        type: Date,
        required: true,
        default: Date.now,
    },
};

const options = {
    timestamps: true
};

const friendsSchema = new mongoose.Schema(definition, options)

const friendsModel = mongoose.model('Friends', friendsSchema, 'friends')

module.exports = friendsModel;