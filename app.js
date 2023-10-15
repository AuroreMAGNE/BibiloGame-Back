import './helper/env.helpers.js';
import './data/init.js';
import app from './initExpress.js'

const port = process.env.PORT ?? 4000;

app.listen(port);