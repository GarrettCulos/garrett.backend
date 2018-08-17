import { Express, Handler } from 'express';
import { controllers } from '../controllers';
import { middleware } from '../middleware';

export function setsRoutes(basePath: string, app: Express) {
	// app.get( `${basePath}/sets`, controllers.sets.getSets);
}
