import { Express, Handler } from 'express';
import { controllers } from '../controllers';
import { middleware } from '../middleware';

export function meRoutes(basePath: string, app: Express) {
	app.get(`${basePath}/me`, controllers.me.getMe);
	// app.post( )
	// app.put( )
	// app.delete( )
}
