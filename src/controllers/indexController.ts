import {Request, Response} from 'express';

class IndexController{

    index(req: Request, res: Response){
        res.send({text: 'API Is /api/games'})
    }

}

export const indexController = new IndexController();