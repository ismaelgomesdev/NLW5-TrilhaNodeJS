import { Router } from "express";
import { getCustomRepository } from "typeorm";
import { SettingsController } from "./controllers/SettingsController";
import { SettingsRepository } from "./repositories/SettingsRepository";

const routes = Router();

/**
 * Tipos de parâmetros
 * Route Params => Parâmetros de rotas
 * Ex: http://localhost:3333/settings/1
 *
 * Query Params => Filtros e buscas
 * Ex: http://localhost:3333/settings/1?search=algumaCoisa
 *
 * Body Params => {
 *
 * }
 */

const settingsController = new SettingsController();

routes.post("/settings", settingsController.create);

export { routes };
