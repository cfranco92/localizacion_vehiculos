// By Cristian Franco
const store = require('./store');

function addVehiculo(vehiculoId, latitude, longitude, userID = '', color, modelo) {
    if (!vehiculoId) {
        return Promise.reject('Invalid id');
    }
    const Vehiculo = {
        vehiculoId,
        latitude,
        longitude,
        userID,
        color,
        modelo
    };
    return store.add(Vehiculo);
}

function getVehiculoById(filterVehiculo) {
    return new Promise((resolve, reject) => {
        resolve(store.getById(filterVehiculo));
    });
}

function listVehiculos() {
    return store.list();
}

function updateVehiculoById(id, vehiculoId, latitude, longitude, userID, color, modelo) {
    return new Promise(async (resolve, reject) => {

        const Vehiculo = {
            vehiculoId,
            latitude,
            longitude,
            userID,
            color,
            modelo
        };

        const result = await store.updateById(id, Vehiculo);

        resolve(result);
    })
}

function deleteVehiculoById(id) {
    return new Promise((resolve, reject) => {
        if (!id) {
            reject('Invalid Id');
            return false;
        }
        store.deleteById(id)
            .then(() => {
                resolve();
            })
            .catch(e => {
                reject(e);
            })
    });
}

module.exports = {
    addVehiculo,
    getVehiculoById,
    listVehiculos,
    updateVehiculoById,
    deleteVehiculoById
}