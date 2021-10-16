// By Cristian Franco
const mongoose = require('mongoose');

const Schema = mongoose.Schema;

const mySchema = new Schema({
    vehiculoId: String,
    latitude: Number,
    longitude: Number,
    userID: String,
    color: String,
    modelo: String,
});

const model = mongoose.model('Vehiculo', mySchema);
module.exports = model;