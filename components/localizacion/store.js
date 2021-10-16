// By Cristian Franco
const Model = require('./model');

function addVehiculo(Vehiculo) {
    const myVehiculo = new Model(Vehiculo);
    return myVehiculo.save();
}

async function getVehiculoById(filterVehiculo) {
    let filter = {};
    if (filterVehiculo !== null) {
        filter = { _id: filterVehiculo };
    }
    const Vehiculo = await Model.find(filter);
    return Vehiculo;
}

async function updateVehiculo(id, vehiculo) {
    const foundVehiculo = await Model.findOne({
        _id: id
    });

    foundVehiculo.vehiculoId = vehiculo.vehiculoId;
    foundVehiculo.latitude = vehiculo.latitude;
    foundVehiculo.longitude = vehiculo.longitude;
    foundVehiculo.userID = vehiculo.userID;
    foundVehiculo.color = vehiculo.color;
    foundVehiculo.modelo = vehiculo.modelo;

    const newStatus = await foundVehiculo.save();
    return newStatus;
}

function deleteVehiculoById(id) {
    return Model.deleteOne({ _id: id })
}

function listVehiculos() {
    return Model.find();
}

module.exports = {
    add: addVehiculo,
    getById: getVehiculoById,
    list: listVehiculos,
    updateById: updateVehiculo,
    deleteById: deleteVehiculoById,
}