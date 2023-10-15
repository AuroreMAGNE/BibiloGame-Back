import Router from 'express';
import gameController from '../controller/game.controller.js';

const gameRouter = Router();

gameRouter.route('/games')
    .get((req, res) => {
        const {category, ageCategory} = req.query; //    /game?category=1&ageCategory=5
        gameController.readAll(category, ageCategory, res);
    });

gameRouter.route('/game/:idGame/category/:idCategory')
    .post((req, res) => {
        const {idGame, idCategory} = req.params; 
        gameController.addCategory(idGame, idCategory, res);
    })   
    .delete((req, res) => {
        const {idGame, idCategory} = req.params; 
        gameController.deleteCategory(idGame, idCategory, res);
    });

gameRouter.route('/game/:id')
    .get((req, res) => gameController.read(req.params.id, res))
    .put((req, res) => gameController.update(req, res))
    .delete((req, res) => gameController.delete(req.params.id, res))

gameRouter.route('/game')
    .post((req, res) => gameController.create(req, res))

export default gameRouter;
