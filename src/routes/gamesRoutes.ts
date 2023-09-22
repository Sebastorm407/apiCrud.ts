import { Router } from 'express';

import gamesController from '../controllers/gamesController';
//Router es un metodo que devuelve un objeto para colocar las rutas

class GamesRoutes {

    public router: Router = Router();

    constructor(){
        //Agregando las rutas
        this.config();
    }

    config(): void{
        //Definir rutas
        this.router.get('/', gamesController.list);
        this.router.get('/:id', gamesController.getOne);
        this.router.post('/', gamesController.create);
        this.router.put('/:id', gamesController.update)
        this.router.delete('/:id', gamesController.delete)
    }

}

const gamesRoutes = new GamesRoutes();
export default gamesRoutes.router;
