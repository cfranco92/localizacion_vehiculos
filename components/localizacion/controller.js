// By Cristian Franco
const store = require('./store');

function listVehiculos() {
    return store.list();
}

module.exports = {
    listVehiculos,
}