import express from 'express';

import { api } from './config.js';

import user from './api/components/user/network.js';

const app = express();

//ROUTER
app.use('/api/user', user);


app.listen(api.port , () => {
    console.log(`Servidor corriendo en el puerto => ${api.port}`);

});