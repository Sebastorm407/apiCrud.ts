"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const mysql = require('mysql2');
const database_1 = __importDefault(require("../database"));
class GamesController {
    list(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            try {
                const results = yield database_1.default.query({
                    sql: 'SELECT * FROM ng_games_db.games',
                    rowsAsArray: false
                });
                res.json(results[0]);
            }
            catch (error) {
                console.error('Error al listar juegos', error);
                res.status(500).json({ error: 'Ocurrio un error al obtener la lista de juegos' }); // Mensaje de depuración
            }
        });
    }
    getOne(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            const { id } = req.params;
            try {
                const games = yield database_1.default.query('SELECT * FROM ng_games_db.games WHERE id = ?', [id]);
                if (games.length > 0) {
                    return res.json(games[0]);
                }
            }
            catch (error) {
                console.error('Error al obtener un juego', error);
                res.status(500).json({ erorr: 'Ocurrio un error al obtener el juego' });
            }
        });
    }
    create(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            try {
                const game = yield database_1.default.query('INSERT INTO ng_games_db.games set ?', [req.body]);
                res.status(200).json({ text: 'Game saved' });
                console.log(game);
            }
            catch (error) {
                console.error('Error al insertar en la base de datos:', error);
                res.status(500).json({ error: 'Ocurrio un error al guardar el juego' });
            }
        });
    }
    update(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            const { id } = req.params;
            yield database_1.default.query('UPDATE ng_games_db.games set ? WHERE id = ?', [req.body, id]);
            res.json({ message: 'The was updated' });
        });
    }
    delete(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            const { id } = req.params;
            yield database_1.default.query('DELETE FROM ng_games_db.games WHERE id = ?', [id]);
            res.json({ message: 'The game is deleted' });
        });
    }
}
const gamesController = new GamesController();
exports.default = gamesController;
