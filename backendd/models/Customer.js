const mongoose = require('mongoose');
const Schema = mongoose.Schema;
let customerSchema = new Schema({
    name: {
        type: String
    },
    email: {
        type: String
    },
    phone: {
        type: Number
    },
    toc: {
        type: String
    },
    size: {
        type: String
    },
    pod: {
        type: String
    },
}, {
    collection:'customers'
})
module.exports = mongoose.model('Customer', customerSchema)