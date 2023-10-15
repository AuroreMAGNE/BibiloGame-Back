import Router from 'express';
//import authController from '../controller/auth.controller.js';

const router = Router();

router.route('/')
    .get((req, res) => res.send('Coucou Aurore, tout va rouler ! <3'))

export default router;
