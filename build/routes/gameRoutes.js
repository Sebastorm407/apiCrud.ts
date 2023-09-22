"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const gamesController_1 = require("../controllers/gamesController");
//Router es un metodo que devuelve un objeto para colocar las rutas
class GamesRoutes {
    constructor() {
        this.router = (0, express_1.Router)();
        //Agregando las rutas
        this.config();
    }
    config() {
        //Definir rutas
        this.router.get('/', gamesController_1.gamesController.index);
    }
}
const gamesRoutes = new GamesRoutes();
exports.default = gamesRoutes.router;
