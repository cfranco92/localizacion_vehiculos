// By Cristian Franco
const localizacion = require('../components/localizacion/network');

const routes = function (server) {
    server.use('/localizacion', localizacion);
}

module.exports = routes;