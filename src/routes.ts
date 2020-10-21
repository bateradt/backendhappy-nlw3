import { Router } from 'express';
import multer from 'multer';

import uploadconfig from './config/upload';
import OrphanageController from './controllers/OrphanagesController';

const routes = Router();
const upload = multer(uploadconfig);

routes.post('/', (req, res) => {
    console.log(req.query);
    console.log(req.params);
    console.log(req.body);
    res.json({ msg: "Olá mundo" });
});

routes.post('/orphanages', upload.array('images'), OrphanageController.create);
routes.get('/orphanages', OrphanageController.index);
routes.get('/orphanages/:id', OrphanageController.show);

export default routes;