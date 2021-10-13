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
    const founVehiculo = await Model.findOne({
        _id: id
    });

    founVehiculo.vehiculoId = vehiculo.vehiculoId;
    founVehiculo.latitude = vehiculo.latitude;
    founVehiculo.longitude = vehiculo.longitude;
    founVehiculo.user = vehiculo.user;

    const newStatus = await founVehiculo.save();
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