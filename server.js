// By Cristian Franco
const express = require('express');
const app = express();
const server = require('http').Server(app);

const config = require('./config');

const cors = require('cors');
const bodyParser = require('body-parser');
const db = require('./db');
const router = require('./network/routes');

const swaggerUi = require('swagger-ui-express');
const swaggerDoc = require('./swagger.json');

db(config.dbUrl);

app.use(cors());

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));
app.use('/api-docs', swaggerUi.serve, swaggerUi.setup(swaggerDoc));

router(app);

server.listen(config.port, function () {
    console.log('Running on port ' + config.host + ':' + config.port);
});