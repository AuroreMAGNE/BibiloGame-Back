import './helper/env.helpers.js';
import './data/init.js';


const express = require('express');
const app = express()
import router from './router/index.router.js';

const port = process.env.PORT ?? 4000;

//app.listen(port);
