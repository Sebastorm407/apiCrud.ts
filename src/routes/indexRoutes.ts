import { Router } from 'express';
import { indexController } from '../controllers/indexController'
//Router es un metodo que devuelve un objeto para colocar las rutas

class IndexRoutes {

    public router: Router = Router();

    constructor(){
        //Agregando las rutas
        this.config();
    }

    config(): void{
        //Definir rutas
        this.router.get('/', indexController.index);
    }

}

const indexRoutes = new IndexRoutes();
export default indexRoutes.router;