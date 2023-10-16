import express from 'express';
import cors from 'cors';
import multer from 'multer';
import indexRouter from './router/index.router.js'
import gameRouter from './router/game.router.js'
import categoryRouter from './router/category.router.js'

const app = express();

// Query encodin
const multiParser = multer();
app.use(multiParser.none());
app.use(express.urlencoded({extended: true}));
app.use(express.json());

//security
app.use(cors());

app.use(indexRouter);
app.use(gameRouter);
app.use(categoryRouter);

export default app;