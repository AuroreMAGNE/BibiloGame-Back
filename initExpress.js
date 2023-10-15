import express from 'express';
import multer from 'multer';
import indexRouter from './router/index.router.js'
import gameRouter from './router/game.router.js'

const app = express();
const multiParser = multer();
app.use(multiParser.none());
app.use(express.urlencoded({extended: true}));
app.use(express.json());

app.use(indexRouter);
app.use(gameRouter);

export default app;