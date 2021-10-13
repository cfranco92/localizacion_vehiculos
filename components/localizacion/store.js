// By Cristian Franco
const Model = require('./model');

function listVehiculo() {
    return Model.find();
}

module.exports = {
    list: listVehiculo,
}