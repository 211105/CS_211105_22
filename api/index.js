const express = require('express');

const config = require('../config.js');
const router = require('./components/user/network');
const { route } = require('./components/user/network');
const user = require('./components/user/network')

const app = express();

//ROUTER
app.use('/api/user', user);

app.listen(config.api.port, () => {
    console.log(`servidor corriendoe en el puerto: ${config.api.port}`)
})