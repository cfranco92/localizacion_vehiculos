// By Cristian Franco
const config = {
    dbUrl: process.env.DB_URL || 'mongodb+srv://dbLocalizacion:<dbLocalizacion>@cluster0.82rmx.mongodb.net/localizacionVehiculos?retryWrites=true&w=majority',
    port: process.env.PORT || 3002,
    host: process.env.HOST || 'http://localhost',
    publicRoute: process.env.PUBLIC_ROUTE || '/app',
    filesRoute: process.env.FILES_ROUTE || 'files'
};

module.exports = config;