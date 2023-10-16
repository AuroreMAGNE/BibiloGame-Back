import Router from 'express';
import categoryController from '../controller/category.controller.js';

const categoryRouter = Router();

categoryRouter.route('/categories')
    .get((req, res) => {
        categoryController.readAll(res);
    });

categoryRouter.route('/category/:id')
    .get((req, res) => categoryController.read(req.params.id, res))
    .put((req, res) => categoryController.update(req, res))
    .delete((req, res) => categoryController.delete(req.params.id, res))

categoryRouter.route('/category')
    .post((req, res) => categoryController.create(req, res))

export default categoryRouter;
