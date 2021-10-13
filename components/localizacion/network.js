// By Cristian Franco
const express = require('express');
const response = require('../../network/response');
const controller = require('./controller');
const router = express.Router();

// END-POINTS
router.get('/', getVehiculos);

function getVehiculos(req, res) {
    controller.listVehiculos()
        .then(vehiculos => {
            response.success(req, res, vehiculos, 200);
        })
        .catch(err => {
            response.error(req, res, 'Internal error', 500, err);
        });
};

module.exports = router;