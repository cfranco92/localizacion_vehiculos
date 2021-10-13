// By Cristian Franco
const store = require('./store');

function addVehiculo(VehiculoId, color, model, latitude, longitude,) {
    if (!VehiculoId) {
        return Promise.reject('Invalid id');
    }
    let user = ''
    const Vehiculo = {
        VehiculoId,
        color,
        model,
        latitude,
        longitude,
        user
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

function updateVehiculoById(id, VehiculoId, color, model, latitude, longitude, user) {
    return new Promise(async (resolve, reject) => {

        const Vehiculo = {
            VehiculoId, color, model, latitude, longitude, user
        }

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