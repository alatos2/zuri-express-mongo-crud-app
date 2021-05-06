const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const DataSchema = new Schema({
    name: { type: String, required: true },
    email: { type: String, required: true },
    country: { type: String, required: true },
    date: { type: Date, Default: Date.now }
})

const Data = mongoose.model('data', DataSchema);

module.exports = Data;
