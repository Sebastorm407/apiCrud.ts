"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const indexController_1 = require("../controllers/indexController");
//Router es un metodo que devuelve un objeto para colocar las rutas
class IndexRoutes {
    constructor() {
        this.router = (0, express_1.Router)();
        //Agregando las rutas
        this.config();
    }
    config() {
        //Definir rutas
        this.router.get('/', indexController_1.indexController.index);
    }
}
const indexRoutes = new IndexRoutes();
exports.default = indexRoutes.router;
