global.basePath = __dirname;
global.logger = require(`${basePath}/config/logger`)
global.config = require(`${basePath}/config`)

const express = require("express")
const app = express();

const cors = require('cors');
const mongoose = require('mongoose')
const passport = require('passport')
const session = require('express-session')
const swaggerJSDoc = require('swagger-jsdoc');
const swaggerUI = require('swagger-ui-express');


require('./config/mongoose')(mongoose)
require('./config/passport')(passport)
require(`${basePath}/config/swagger`)(swaggerJSDoc, swaggerUI, app)

const commonRouter = require(`${basePath}/routes/common`)
const authRouter = require(`${basePath}/routes/auth`)

app.use(require(`${basePath}/config/cors`)(cors));
app.use(express.json());
app.use(express.urlencoded({
	extended: false
}));

// app.use(require(`${basePath}/config/session`)(session));
app.use(passport.initialize());
app.use(passport.session())

app.use('/', authRouter);
app.use('/', commonRouter);

app.use((req, res) => {
	res.status(404).json('Request Not Found')
});
app.use((req, res) => {
	res.status(500).json({
		msg: 'Request Not Working'
	})
})
app.listen(config.system.port, () => {
	logger.info({
		label: 'run',
		message: `Authentication server is running on port ` +
			`${config.system.port}`
	})
});