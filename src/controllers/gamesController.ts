import {Request, Response} from 'express';
const mysql = require('mysql2');
import pool from '../database';

class GamesController{
    
    public async list(req: Request, res: Response){
        try{

            const results = await pool.query({
                sql: 'SELECT * FROM ng_games_db.games',
                rowsAsArray: false    
            });
            res.json(results[0]);

        }catch(error){
            console.error('Error al listar juegos', error)
            res.status(500).json({ error: 'Ocurrio un error al obtener la lista de juegos'}) // Mensaje de depuración
        }   
    }

    public async getOne(req: Request, res: Response): Promise<any>{
        const { id } = req.params;
        try{
            const games = await pool.query('SELECT * FROM ng_games_db.games WHERE id = ?', [id])
            if(games.length > 0){
                return res.json(games[0]);
            }

        }catch(error){
            console.error('Error al obtener un juego', error);
            res.status(500).json({erorr: 'Ocurrio un error al obtener el juego'});
        }
    }

    public async create (req: Request, res: Response): Promise<void>{
        try{
            const game = await pool.query('INSERT INTO ng_games_db.games set ?', [req.body]);
            res.status(200).json({text: 'Game saved'});
            console.log(game);
        }catch(error){
            console.error('Error al insertar en la base de datos:', error);
            res.status(500).json({error: 'Ocurrio un error al guardar el juego'});
        }
    } 

    public async update(req: Request, res: Response){
        const { id } = req.params;
        await pool.query('UPDATE ng_games_db.games set ? WHERE id = ?', [req.body, id]);
        res.json({message: 'The was updated'});
    }

    public async delete(req: Request, res: Response): Promise<void>{
        const { id } = req.params;
        await pool.query('DELETE FROM ng_games_db.games WHERE id = ?', [id]);
        res.json({message: 'The game is deleted'});
    }

}

const gamesController = new GamesController();
export default gamesController;