// By Cristian Franco
const express = require('express');
const response = require('../../network/response');
const controller = require('./controller');
const router = express.Router();

// END-POINTS
router.post('/', createVehiculo);
router.get('/:id', getVehiculoById)
router.get('/', getVehiculos);
router.put('/:id', updateVehiculo);
router.delete('/:id', deleteVehiculo);

function createVehiculo(req, res) {
    controller.addVehiculo(req.body.vehiculoId, req.body.latitude, req.body.longitude, req.body.userID, req.body.color, req.body.modelo)
        .then(data => {
            response.success(req, res, data, 201);
        })
        .catch(err => {
            response.error(req, res, 'Internal error', 500, err);
        });
};

function getVehiculoById(req, res) {
    controller.getVehiculoById(req.params.id)
        .then((vehiculo) => {
            response.success(req, res, Vehiculo, 200);
        })
        .catch(e => {
            response.error(req, res, 'Unexpected Error', 500, e);
        });
}

function getVehiculos(req, res) {
    controller.listVehiculos()
        .then(vehiculos => {
            response.success(req, res, vehiculos, 200);
        })
        .catch(err => {
            response.error(req, res, 'Internal error', 500, err);
        });
};

function updateVehiculo(req, res) {
    controller.updateVehiculoById(req.params.id,
        req.body.vehiculoId, req.body.latitude, req.body.longitude, req.body.userID, req.body.color, req.body.modelo
    )
        .then((data) => {
            response.success(req, res, data, 200);
        })
        .catch(e => {
            response.error(req, res, 'Internal Error', 500, e);
        });
}

function deleteVehiculo(req, res) {
    controller.deleteVehiculoById(req.params.id)
        .then(() => {
            response.success(req, res, `Vehiculo ${req.params.id} borrado`, 200);
        })
        .catch(e => {
            response.error(req, res, 'Internal Error', 500, e);
        })
}

module.exports = router;