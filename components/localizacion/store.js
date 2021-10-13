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

async function updateVehiculo(id, Vehiculo) {
    const founVehiculo = await Model.findOne({
        _id: id
    });

    founVehiculo.VehiculoId = Vehiculo.VehiculoId;
    founVehiculo.color = Vehiculo.color;
    founVehiculo.model = Vehiculo.model;
    founVehiculo.latitude = Vehiculo.latitude;
    founVehiculo.longitude = Vehiculo.longitude;
    founVehiculo.user = Vehiculo.user;

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