import { Express, Handler } from 'express';
import { controllers } from '../controllers';
import { middleware } from '../middleware';

export function eventRoutes(basePath: string, app: Express) {
	app.get(`${basePath}/event`, controllers.event.getEvent);
	// app.post( )
	// app.put( )
	// app.delete( )
}
